import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';
import Button from '../../components/Button';
import HeaderConitaner from './styles';

const Header = () => {
  const router = useRouter();

  return (
    <HeaderConitaner>
      <Button onClick={() => router.back()} type="Text" icon={faArrowLeft}>Voltar</Button>
    </HeaderConitaner>
  );
};

export default Header;
