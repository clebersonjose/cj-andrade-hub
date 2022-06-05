import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useMemo,
  useState,
} from 'react';

export interface Message {
  createdAt: Date;
  text: string;
  type: 'success' | 'error' | 'info';
}

interface MessageContextProps {
  messages: Message[] | never[];
  setMessages: Dispatch<SetStateAction<Message[] | never[]>>;
}

const MessageContext = createContext<MessageContextProps>({
  messages: [],
  setMessages: () => { },
});

export const MessageProvider = ({ children }: { children: ReactNode }) => {
  const [messages, setMessages] = useState<Message[] | never[]>([]);

  const value = useMemo(
    () => ({ messages, setMessages }),
    [messages],
  );

  return (
    <MessageContext.Provider value={value}>
      {children}
    </MessageContext.Provider>
  );
};

export const useMessage = () => useContext(MessageContext);
