import { ChangeEventHandler } from 'react';

export interface InputProps {
  label: string;
  name: string;
  type: string;
  value?: string | number | readonly string[] | undefined;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
  placeholder?: string | undefined;
  required?: boolean;
}
