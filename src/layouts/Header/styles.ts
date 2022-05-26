import styled from "styled-components";

export const HeaderConitaner = styled.header`
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.lightGray};
  width: 100%;
  box-sizing: border-box;
`;