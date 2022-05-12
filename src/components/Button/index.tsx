import { ButtonProps } from './interfaces';
import { Default, Outline } from './styles';

const Button = ({ type, children }: ButtonProps) => {
  const Component = type === 'Outline' ? Outline : Default;

  return <Component>{children}</Component>;
};

Button.defaultProps = {
  type: 'Default',
};

export default Button;
