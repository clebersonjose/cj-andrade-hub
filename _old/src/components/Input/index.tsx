import { InputStyle, LabelStyle, LabelTextStyle } from './Input.style';

export default function Input(props: any) {
  const { label, ...anotherProps }: { label: string } = props;

  return (
    <LabelStyle>
      <LabelTextStyle>{label}</LabelTextStyle>

      <InputStyle
        {...anotherProps}
        onChange={(event: any) => {
          const existsInputWriteValue = Boolean(props.onWritingValue);
          if (existsInputWriteValue) props.onWritingValue(event.target.value);
        }}
      />
    </LabelStyle>
  );
}
