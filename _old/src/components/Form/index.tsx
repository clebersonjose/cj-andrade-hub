import Title from '../Title';
import FormStyle from './Form.style';

export default function Form(props: any) {
  const { children, title }: { children: any; title?: string } = props;

  return (
    <FormStyle
      onSubmit={(event: any) => {
        event.preventDefault();
        const existsSend = Boolean(props.onSend);
        if (existsSend) props.onSend(event.target);
      }}
    >
      {title && <Title>{title}</Title>}
      {children}
    </FormStyle>
  );
}

Form.defaultProps = {
  title: undefined
};
