import { useState } from 'react';
import { createClient, SupabaseClient } from '@supabase/supabase-js';
import DomainHead from '../../src/infra/components/DomainHead';
import Footer from '../../src/layouts/Footer';
import Header from '../../src/layouts/Header';
import Form from '../../src/components/Form';
import Input from '../../src/components/Input';
import TextArea from '../../src/components/TextArea';
import {
  LoadingPrimaryButton,
  PrimaryButton
} from '../../src/components/Button';
import { ActionsBar, Content, Main } from './contato.style';
import { useBannerMessages } from '../../src/contexts/BannerMessages';

const supabaseUrl: string = process.env.NEXT_PUBLIC_SUPABASE_URL
  ? process.env.NEXT_PUBLIC_SUPABASE_URL
  : '';
const supabaseKey: string = process.env.NEXT_PUBLIC_SUPABASE_KEY
  ? process.env.NEXT_PUBLIC_SUPABASE_KEY
  : '';
const supabaseClient: SupabaseClient = createClient(supabaseUrl, supabaseKey);

export default function Contato() {
  const { bannerMessages, setBannerMessages } = useBannerMessages();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');

  const [formLoading, setFormLoading] = useState(false);

  const sendMessage = async (campos: any) => {
    setName(campos.name.value);
    setEmail(campos.email.value);
    setTitle(campos.title.value);
    setMessage(campos.message.value);

    await supabaseClient
      .from('messages')
      .insert({
        sender_name: name,
        sender_email: email,
        message_title: title,
        message_text: message
      })
      .then((data: any) => {
        if (data.status !== 201) {
          setBannerMessages([
            {
              message:
                'Erro ao enviar mensagem! Tente novamente ou entre em contato com o administrador.',
              type: 'error',
              date: new Date()
            },
            ...bannerMessages
          ]);
        }

        setBannerMessages([
          {
            message: 'Mensagem enviada com sucesso!',
            type: 'success',
            date: new Date()
          },
          ...bannerMessages
        ]);
      })
      .then(() => {
        setName('');
        setEmail('');
        setTitle('');
        setMessage('');
      });

    return true;
  };

  return (
    <>
      <DomainHead>
        <title>Contato</title>
      </DomainHead>

      <Content>
        <Header />

        <Main>
          <Form
            title="Contato"
            onSend={async (values: any) => {
              setFormLoading(true);
              sendMessage(values).then(() => setFormLoading(false));
            }}
          >
            <Input
              label="Nome completo:"
              type="text"
              name="name"
              placeholder="Seu nome completo aqui..."
              pattern="^[a-zA-Zà-úÀ-Ú ]{2,16}[ ]{1}[a-zA-Zà-úÀ-Ú ]{2,16}"
              required
              onWritingValue={(value: string) => setName(value)}
              value={name}
            />

            <Input
              label="E-mail:"
              type="email"
              name="email"
              placeholder="Seu e-mail aqui..."
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              required
              onWritingValue={(value: string) => setEmail(value)}
              value={email}
            />

            <Input
              label="Titulo da mensagem:"
              type="text"
              name="title"
              placeholder="Titulo da mensagem..."
              required
              minlength={4}
              maxlength={50}
              onWritingValue={(value: string) => setTitle(value)}
              value={title}
            />

            <TextArea
              label="Texto da mensagem:"
              name="message"
              placeholder="Mensagem aqui..."
              rows={10}
              cols={30}
              required
              minlength={4}
              maxlength={500}
              onWritingValue={(value: string) => setMessage(value)}
              value={message}
            />

            <ActionsBar>
              {!formLoading ? (
                <PrimaryButton>Enviar mensagem</PrimaryButton>
              ) : (
                <LoadingPrimaryButton>
                  Enviando mensagem...
                </LoadingPrimaryButton>
              )}
            </ActionsBar>
          </Form>
        </Main>

        <Footer />
      </Content>
    </>
  );
}
