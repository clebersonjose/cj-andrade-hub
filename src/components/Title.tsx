import { ElementType } from 'react';
import styled from 'styled-components';

const StyleTitle = styled.h1`
  font-size: 4.8em;
  line-height: 1em;
  font-weight: 700;
`;

export default function Title({ children, tag }: { children: string, tag?: ElementType }) {
  return (
    <StyleTitle as={tag}>{children}</StyleTitle>
  );
}

Title.defaultProps = {
  tag: 'h1',
};
