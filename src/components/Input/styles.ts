import styled from 'styled-components';

export const InputContent = styled.div`
  display: grid;
  gap: .5rem;
`;

export const InputLabel = styled.label`
  color: ${({ theme }) => theme.darkColor};
  font-family: ${({ theme }) => theme.fontFamily};
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 2rem;
`;

export const InputField = styled.input`
  box-sizing: border-box;
  padding: 1rem 2rem;
  border: 1px solid ${({ theme }) => theme.darkColor};
  border-radius: .8rem;
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 2.2rem;
  color: ${({ theme }) => theme.darkColor};
  font-family: ${({ theme }) => theme.fontFamily};

  ::placeholder {
    opacity: 1;
  }
`;
