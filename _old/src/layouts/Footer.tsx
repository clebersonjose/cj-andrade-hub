import {
  faGithubSquare,
  faInstagramSquare,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';
import styled from 'styled-components';
import IconWithName from './IconWithName';

const FooterStyle = styled.footer`
  display: flex;
  padding: 1em 2em;
  gap: 2em;
  background-color: #ededed;
  justify-content: center;
`;

export default function Footer() {
  return (
    <FooterStyle>
      <a
        href="https://github.com/clebersonjose"
        target="_blank"
        rel="noreferrer"
      >
        <IconWithName icon={faGithubSquare} name="Github" />
      </a>

      <a
        href="https://www.linkedin.com/in/clebersonandrade/"
        target="_blank"
        rel="noreferrer"
      >
        <IconWithName icon={faLinkedin} name="Linkedin" />
      </a>

      <a
        href="https://www.instagram.com/cleber.png/"
        target="_black"
        rel="noreferrer"
      >
        <IconWithName icon={faInstagramSquare} name="Instagram" />
      </a>
    </FooterStyle>
  );
}
