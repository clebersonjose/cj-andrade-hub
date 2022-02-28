import styled from 'styled-components';

const Button = styled.button`
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 1.8em;
  line-height: 1.5em;
  font-weight: 500;
  border: none;
  background: none;
  color: #000;
  cursor: pointer;
`;

export const PrimaryButton = styled(Button)`
  background-color: ${({ theme }) => theme.themeColor};
  color: #fff;
`;

export const SecondaryButton = styled(Button)`
  border: 1px solid #000;
`;
