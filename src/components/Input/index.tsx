import { InputProps } from './interfaces';
import {
  InputContent,
  InputField,
  InputLabel,
} from './styles';

const Input = ({
  label, name, type, placeholder, value, onChange, required,
}: InputProps) => (
  <InputContent>
    <InputLabel>{label}</InputLabel>
    <InputField
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      required={required}
      onChange={onChange}
    />
  </InputContent>
);

Input.defaultProps = {
  required: false,
};

export default Input;
