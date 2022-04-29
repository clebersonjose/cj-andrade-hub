import styled from 'styled-components';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import Icon from './Icon';

const IconWhite = styled(Icon)`
  filter: invert(100%);
  font-size: 1em;
  animation: rotation 1.5s infinite linear;

  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
`;

const Button = styled.button`
  padding: 0.5555em 1.111em;
  border-radius: 0.444em;
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

const LoadingPrimaryButtonType = styled(PrimaryButton)`
  display: flex;
  align-items: center;
  gap: 0.5555em;
  cursor: progress;
  opacity: 0.8;
`;

export function LoadingPrimaryButton({ children }: { children: any }) {
  return (
    <LoadingPrimaryButtonType>
      <IconWhite icon={faSpinner} />
      {children}
    </LoadingPrimaryButtonType>
  );
}
