import { ElementType } from 'react';
import styled from 'styled-components';

const StyleText = styled.p`
  font-size: 1.8em;
  line-height: 1.5em;
  font-weight: 500;
  margin-bottom: 2em;
`;

export default function Text({
  children,
  tag
}: {
  children: string;
  tag?: ElementType;
}) {
  return <StyleText as={tag}>{children}</StyleText>;
}

Text.defaultProps = {
  tag: 'p'
};
