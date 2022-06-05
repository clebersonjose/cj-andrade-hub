import Subtitle from '../../components/Subtitle';
import Title from '../../components/Title';
import { TitleWithSubtitleProps } from './interfaces';
import TitleWithSubtitleContainer from './styles';

const TitleWithSubtitle = ({ title, subtitle }: TitleWithSubtitleProps) => (
  <TitleWithSubtitleContainer>
    <Title>{title}</Title>
    <Subtitle>{subtitle}</Subtitle>
  </TitleWithSubtitleContainer>
);

export default TitleWithSubtitle;
