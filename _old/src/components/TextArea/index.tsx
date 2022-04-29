import { LabelStyle, LabelTextStyle, TextAreaStyle } from './TextArea.style';

export default function TextArea(props: any) {
  const { label, ...anotherProps }: { label: string } = props;

  return (
    <LabelStyle>
      <LabelTextStyle>{label}</LabelTextStyle>

      <TextAreaStyle
        {...anotherProps}
        onChange={(event: any) => {
          const existsTextAreaWriteValue = Boolean(props.onWritingValue);
          if (existsTextAreaWriteValue)
            props.onWritingValue(event.target.value);
        }}
      />
    </LabelStyle>
  );
}
