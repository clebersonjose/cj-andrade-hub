import styled from 'styled-components';
import {
  faCircleCheck,
  faCircleExclamation,
  faCircleXmark,
  IconDefinition,
  faXmark
} from '@fortawesome/free-solid-svg-icons';
import Icon from '../../components/Icon';
import { useBannerMessages } from '../../contexts/BannerMessages';

interface IconPerType {
  [key: string]: IconDefinition;
}

interface MessageColorType {
  [key: string]: string;
}

interface MessageProps {
  type: 'success' | 'error' | 'warning';
  index: number;
}

const messageColor: MessageColorType = {
  success: '#009944',
  error: '#CF000F',
  warning: '#F0541E'
};

const IconWhite = styled(Icon)`
  filter: invert(100%);
  margin: 0;
  width: 1.5em;
`;

const Message = styled.article<MessageProps>`
  background-color: ${({ type }) => messageColor[type]};

  margin-top: ${({ index }) => (index === 0 ? '0' : '-4.5em')};

  z-index: ${({ index }) => (index === 0 ? '1' : `-${index}`)};

  display: grid;
  grid-template-columns: max-content auto max-content;
  padding: 1em;
  position: relative;
  gap: 1em;
  align-items: center;
  box-shadow: 0 0.5em 1em -0.125em rgba(0, 0, 0, 0.2),
    0 0px 0 1px rgba(0, 0, 0, 0.02);

  p {
    color: #fff;
    font-size: 1.8em;
  }
`;

function BannerMessageItem({
  message,
  type,
  index
}: {
  message: string;
  type: 'success' | 'error' | 'warning';
  index: number;
}) {
  const { bannerMessages, setBannerMessages } = useBannerMessages();

  const iconPerType: IconPerType = {
    success: faCircleCheck,
    error: faCircleXmark,
    warning: faCircleExclamation
  };

  const removeBannerMessage = (messageIndex: number) => {
    setBannerMessages(
      bannerMessages.filter((_, itemIndex) => itemIndex !== messageIndex)
    );
  };

  return (
    <Message type={type} index={index}>
      <IconWhite icon={iconPerType[type]} />
      <p>{message}</p>
      <IconWhite icon={faXmark} onClick={() => removeBannerMessage(index)} />
    </Message>
  );
}

export default function BannerMessagesFeed() {
  const { bannerMessages } = useBannerMessages();

  return (
    <section>
      {bannerMessages.map((bannerMessage, index) => (
        <BannerMessageItem
          message={bannerMessage.message}
          type={bannerMessage.type}
          index={index}
          key={bannerMessage.message + bannerMessage.type + bannerMessage.date}
        />
      ))}
    </section>
  );
}
