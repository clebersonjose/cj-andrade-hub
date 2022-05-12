import { faGithubSquare, faLinkedin, faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import IconWithLabel from '../../components/IconWithLabel';
import FooterContainer from './styles';
import Anchor from '../../components/Anchor';

const Footer = () => (
  <FooterContainer>
    <Anchor href="https://github.com/clebersonjose" target="_blank" rel="noreferrer">
      <IconWithLabel icon={faGithubSquare} label="GitHub" />
    </Anchor>

    <Anchor href="https://www.linkedin.com/in/clebersonandrade/" target="_blank" rel="noreferrer">
      <IconWithLabel icon={faLinkedin} label="LinkedIn" />
    </Anchor>

    <Anchor href="https://www.instagram.com/cleber.png/" target="_black" rel="noreferrer">
      <IconWithLabel icon={faInstagramSquare} label="Instagram" />
    </Anchor>
  </FooterContainer>
);

export default Footer;
