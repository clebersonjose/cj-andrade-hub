import styled from 'styled-components';
import Subtitle from '../../components/Subtitle';
import Title from '../../components/Title';
import { TitleWithSubtitleProps } from './TitleWithSubtitle.interfaces';

const TitleWithSubtitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

const TitleWithSubtitle = ({ title, subtitle }: TitleWithSubtitleProps) => (
  <TitleWithSubtitleContainer>
    <Title>{title}</Title>

    <Subtitle>{subtitle}</Subtitle>
  </TitleWithSubtitleContainer>
);

export default TitleWithSubtitle;
