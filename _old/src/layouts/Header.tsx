import { NextRouter, useRouter } from 'next/router';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import BannerMessagesFeed from './BannerMessagesFeed';

const HeaderStyle = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 1em 2em;
  background-color: ${({ theme }) => theme.background};
  width: 100%;
`;

const GoBackButton = styled.button`
  border: none;
  display: flex;
  gap: 1em;
  background: none;
  cursor: pointer;
  align-items: center;
`;

const GoBackIcon = styled(FontAwesomeIcon)`
  font-size: 2.5em;
  line-height: 1.5em;
`;

const GoBackText = styled.p`
  color: ${({ theme }) => theme.readingColor};
  font-size: 1.6em;
  line-height: 1.5em;
`;

export default function Header({ children }: { children?: any }) {
  const router: NextRouter = useRouter();

  return (
    <header>
      <HeaderStyle>
        <GoBackButton type="button" onClick={() => router.back()}>
          <GoBackIcon icon={faArrowLeft} />
          <GoBackText>Voltar</GoBackText>
        </GoBackButton>
        {children}
      </HeaderStyle>
      <BannerMessagesFeed />
    </header>
  );
}

Header.defaultProps = {
  children: null
};
