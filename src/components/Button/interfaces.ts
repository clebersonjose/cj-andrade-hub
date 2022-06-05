import { IconDefinition } from '@fortawesome/free-brands-svg-icons';

export interface ButtonProps {
  children: string,
  layout: 'Default' | 'Outline' | 'Text',
  icon?: IconDefinition | undefined,
  onClick?: () => void,
  type?: 'button' | 'submit' | 'reset',
  loading?: boolean,
}
