import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { ButtonProps } from './interfaces';
import {
  Default,
  Icon,
  Outline,
  Text,
} from './styles';

const Button = ({
  layout, children, icon, onClick, loading,
}: ButtonProps) => {
  const components = { Default, Outline, Text };
  const Component = components[`${layout}`];

  return (
    <Component
      onClick={onClick}
      className={loading ? 'loading' : undefined}
      disabled={loading}
    >
      {!loading
        ? icon && <Icon icon={icon} />
        : <Icon icon={faSpinner} />}
      {!loading ? children : 'Carregando...'}
    </Component>
  );
};

Button.defaultProps = {
  layout: 'Default',
  type: 'button',
  loading: false,
};

export default Button;
