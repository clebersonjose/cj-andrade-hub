import { ElementType } from 'react';
import styled from 'styled-components';

const StyleSubtitle = styled.h2`
  font-size: 2.4em;
  line-height: 1.5em;
  font-family: Quicksand;
  font-weight: 500;
`;

export default function Subtitle({ children, tag }: {children: string, tag?: ElementType}) {
  return (
    <StyleSubtitle as={tag}>{children}</StyleSubtitle>
  );
}

Subtitle.defaultProps = {
  tag: 'h2',
};
