import styled from 'styled-components';
import { ElementType } from 'react';
import Title from '../components/Title';
import Subtitle from '../components/Subtitle';

const StyleArticleHeader = styled.div`
  margin-bottom: 20px;
`;

export default function ArticleHeader({
  children, titleTag, titleChildren, subtitleTag, subtitleChildren,
}: {
  children?: any,
  titleTag?: ElementType,
  titleChildren: any,
  subtitleTag?: ElementType,
  subtitleChildren: any
}) {
  return (
    <StyleArticleHeader>
      <Title tag={titleTag}>{titleChildren}</Title>
      <Subtitle tag={subtitleTag}>{subtitleChildren}</Subtitle>
      {children}
    </StyleArticleHeader>
  );
}

ArticleHeader.defaultProps = {
  children: undefined,
  titleTag: undefined,
  subtitleTag: undefined,
};
