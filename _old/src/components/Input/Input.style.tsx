import styled from 'styled-components';

export const LabelStyle = styled.label`
  display: grid;
  gap: 0.5em;
  width: 100%;
`;

export const LabelTextStyle = styled.span`
  font-size: 1.6em;
  line-height: 1.25em;
  font-weight: 700;
`;

export const InputStyle = styled.input`
  width: 100%;
  font-size: 1.8em;
  line-height: 1.25em;
  padding: 0.5555em 1.111em;
  border: 1px solid #000;
  border-radius: 0.444em;

  ::placeholder {
    opacity: 0.8;
  }
`;
