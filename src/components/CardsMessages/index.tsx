import { faCircleXmark, faCircleCheck, faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { Message, useMessage } from '../../contexts/messages';
import {
  CardMessageBox,
  CardMessageContent,
  CardMessageText,
  CardMessageIconX,
  CardsMessagesFeed,
  CardMessageIcon,
} from './styles';

const CardsMessages = () => {
  const { messages, setMessages } = useMessage();

  const sortMessages = messages.sort((a: Message, b: Message) => {
    if (a.createdAt > b.createdAt) return -1;
    if (a.createdAt < b.createdAt) return 1;
    return 0;
  });

  setMessages(sortMessages);

  const handleClose = (index: number) => {
    setMessages(messages.filter((message, i) => i !== index));
  };

  const messageIcon = (type: string) => {
    if (type === 'success') return faCircleCheck;
    if (type === 'error') return faCircleXmark;
    return faCircleExclamation;
  };

  return (
    <CardsMessagesFeed>
      {messages.map((message, index) => (
        <CardMessageBox
          key={`${message.createdAt}`}
          type={message.type}
        >
          <CardMessageContent>
            <CardMessageIcon
              icon={messageIcon(message.type)}
            />

            <CardMessageText>
              {message.text}
            </CardMessageText>

            <CardMessageIconX
              icon={faCircleXmark}
              onClick={() => handleClose(index)}
            />
          </CardMessageContent>
        </CardMessageBox>
      ))}
    </CardsMessagesFeed>
  );
};

export default CardsMessages;
