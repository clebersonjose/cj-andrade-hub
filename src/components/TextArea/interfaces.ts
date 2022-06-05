import { ChangeEventHandler } from 'react';

export interface TextAreaProps {
  label: string;
  name: string;
  value?: string | number | readonly string[] | undefined;
  onChange?: ChangeEventHandler<HTMLTextAreaElement> | undefined;
  placeholder?: string | undefined;
  required?: boolean;
}
