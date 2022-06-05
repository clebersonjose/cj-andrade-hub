import { NextPage } from 'next';
import { FormEvent, useState } from 'react';
import emailjs from '@emailjs/browser';
import Button from '../../src/components/Button';
import Input from '../../src/components/Input';
import TextArea from '../../src/components/TextArea';
import Title from '../../src/components/Title';
import Footer from '../../src/layouts/Footer';
import Header from '../../src/layouts/Header';
import {
  ContatoContent,
  ContatoForm,
  ContatoMain,
} from '../../styles/contato';
import { useMessage } from '../../src/contexts/messages';
import CardsMessages from '../../src/components/CardsMessages';

const Contato: NextPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [tituloDaMessage, setTituloDaMessage] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const { messages, setMessages } = useMessage();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    const serviceId: string = process.env.NEXT_PUBLIC_YOUR_SERVICE_ID
      ? process.env.NEXT_PUBLIC_YOUR_SERVICE_ID : '';

    const templateId: string = process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID
      ? process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID : '';

    const publicKey: string = process.env.NEXT_PUBLIC_YOUR_PUBLIC_KEY
      ? process.env.NEXT_PUBLIC_YOUR_PUBLIC_KEY : '';

    const dados = {
      to_name: 'Cléberson',
      from_name: name,
      reply_to: email,
      subject: tituloDaMessage,
      message,
    };

    emailjs.send(serviceId, templateId, dados, publicKey)
      .then(() => {
        setMessages([
          {
            createdAt: new Date(),
            text: 'Mensagem enviada com sucesso!',
            type: 'success',
          },
          ...messages,
        ]);

        setLoading(false);
        setName('');
        setEmail('');
        setTituloDaMessage('');
        setMessage('');
      })
      .catch(() => {
        setMessages([
          {
            createdAt: new Date(),
            text: 'Erro ao enviar a mensagem!',
            type: 'error',
          },
          ...messages,
        ]);

        setLoading(false);
      });
  };

  return (
    <ContatoContent>
      <Header />
      {messages.length > 0 && (<CardsMessages />)}
      <ContatoMain>
        <Title>Contato</Title>

        <ContatoForm onSubmit={(event) => handleSubmit(event)}>
          <Input
            label="Nome:"
            name="name"
            type="text"
            placeholder="Seu nome completo aqui..."
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
          />

          <Input
            label="E-mail:"
            name="email"
            type="email"
            placeholder="Seu e-mail aqui..."
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />

          <Input
            label="Titulo da mensagem:"
            name="titulo"
            type="text"
            placeholder="Titulo da mensagem..."
            required
            value={tituloDaMessage}
            onChange={(event) => setTituloDaMessage(event.target.value)}
          />

          <TextArea
            label="Texto da mensagem:"
            name="mensagem"
            placeholder="Mensagem aqui..."
            required
            onChange={(event) => setMessage(event.target.value)}
            value={message}
          />

          <Button type="submit" loading={loading}>
            Enviar mensagem
          </Button>
        </ContatoForm>
      </ContatoMain>
      <Footer />
    </ContatoContent>
  );
};

export default Contato;
