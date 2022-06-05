import styled from 'styled-components';

export const TextAreaContent = styled.div`
  display: grid;
  gap: .5rem;
`;

export const TextAreaLabel = styled.label`
  color: ${({ theme }) => theme.darkColor};
  font-family: ${({ theme }) => theme.fontFamily};
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 2rem;
`;

export const TextAreaField = styled.textarea`
  box-sizing: border-box;
  padding: 1rem 2rem;
  border: 1px solid ${({ theme }) => theme.darkColor};
  border-radius: .8rem;
  font-weight: 500;
  font-size: 1.8rem;
  line-height: 2.2rem;
  color: ${({ theme }) => theme.darkColor};
  font-family: ${({ theme }) => theme.fontFamily};
  min-height: 17.2rem;

  ::placeholder {
    opacity: 1;
  }
`;
