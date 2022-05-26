import { IconDefinition } from '@fortawesome/free-brands-svg-icons';

export interface ButtonProps {
  children: string,
  type: 'Default' | 'Outline' | 'Text',
  icon?: IconDefinition | undefined,
  onClick?: () => void,
}
