import { TextAreaProps } from './interfaces';
import {
  TextAreaContent,
  TextAreaField,
  TextAreaLabel,
} from './styles';

const TextArea = ({
  label, name, onChange, placeholder, required, value,
}: TextAreaProps) => (
  <TextAreaContent>
    <TextAreaLabel>{label}</TextAreaLabel>
    <TextAreaField
      name={name}
      required={required}
      onChange={onChange}
      placeholder={placeholder}
      value={value}
    />
  </TextAreaContent>
);

TextArea.defaultProps = {
  required: false,
};

export default TextArea;
