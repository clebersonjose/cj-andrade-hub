import Title from "../components/Title";
import Subtitle from "../components/Subtitle";
import styled from "styled-components";
import { ElementType } from "react";

const StyleArticleHeader = styled.div`
  margin-bottom: 20px;
`;

const ArticleHeader = (
  {children, titleTag, titleChildren, subtitleTag, subtitleChildren}: 
  {children: any, titleTag: ElementType, titleChildren: any, subtitleTag: ElementType, subtitleChildren: any}
) => {
  return (
    <StyleArticleHeader>
      <Title tag={titleTag}>{titleChildren}</Title>
      <Subtitle tag={subtitleTag}>{subtitleChildren}</Subtitle>
      
      {children}
    </StyleArticleHeader>
  )
}

ArticleHeader.defaultProps = {
  children: undefined,
  titleTag: undefined,
  subtitleTag: undefined
}

export default ArticleHeader;