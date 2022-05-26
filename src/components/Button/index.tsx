import { ButtonProps } from './interfaces';
import {
  Default,
  Icon,
  Outline,
  Text,
} from './styles';

const Button = ({
  type, children, icon, onClick,
}: ButtonProps) => {
  const components = { Default, Outline, Text };
  const Component = components[`${type}`];

  return (
    <Component onClick={onClick}>
      {icon && <Icon icon={icon} />}
      {children}
    </Component>
  );
};

Button.defaultProps = {
  type: 'Default',
};

export default Button;
