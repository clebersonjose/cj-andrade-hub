import { faGithubSquare, faInstagramSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const FooterStyle = styled.footer`
  display: flex;
  padding: 10px 20px;
  gap: 20px;
  background-color: #EDEDED;
  justify-content: center;
`;

const Icon = styled(FontAwesomeIcon)`
  line-height: 30px;
  font-size: 30px;
  color: #000;
`;

export default function Footer() {
  return (
    <FooterStyle>
      <a href="https://github.com/clebersonjose" target="_blank" rel="noreferrer">
        <Icon icon={faGithubSquare} />
      </a>

      <a href="https://www.linkedin.com/in/clebersonandrade/" target="_blank" rel="noreferrer">
        <Icon icon={faLinkedin} />
      </a>

      <a href="https://www.instagram.com/cleber.png/" target="_black" rel="noreferrer">
        <Icon icon={faInstagramSquare} />
      </a>
    </FooterStyle>
  );
}
