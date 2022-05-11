import styled from 'styled-components';

export const Default = styled.button`
  padding: 1rem 2rem;
  border-radius: .8rem;
  border: none;
  background-color: ${({ theme }) => theme.mainColor};
  color: ${({ theme }) => theme.lightColor};
  font-family: ${({ theme }) => theme.fontFamily};
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  cursor: pointer;
`;

export const Outline = styled(Default)`
  background-color: transparent;
  color: ${({ theme }) => theme.darkColor};
  border: ${({ theme }) => theme.darkColor} solid 1px;
`;
