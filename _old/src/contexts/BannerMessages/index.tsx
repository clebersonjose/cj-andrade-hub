import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useMemo,
  useState
} from 'react';

interface BannerMessageType {
  message: string;
  type: 'success' | 'error' | 'warning';
  date: Date;
}

interface BannerMessagesContextType {
  bannerMessages: BannerMessageType[];
  setBannerMessages: Dispatch<SetStateAction<BannerMessageType[]>>;
}

const BannerMessagesContext = createContext<BannerMessagesContextType>({
  bannerMessages: [
    {
      message: '',
      type: 'success',
      date: new Date()
    }
  ],
  setBannerMessages: () => {}
});

export function BannerMessagesContextProvider({ children }: { children: any }) {
  const [bannerMessages, setBannerMessages] = useState<BannerMessageType[]>([]);
  const value = useMemo(
    () => ({ bannerMessages, setBannerMessages }),
    [bannerMessages]
  );

  return (
    <BannerMessagesContext.Provider value={value}>
      {children}
    </BannerMessagesContext.Provider>
  );
}

export const useBannerMessages = () => useContext(BannerMessagesContext);
