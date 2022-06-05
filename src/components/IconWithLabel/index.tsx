import { IconWithLabelProps } from './interfaces';
import { Icon, IconLabel, IconWithLabelContainer } from './styles';

const IconWithLabel = ({ icon, label }: IconWithLabelProps) => (
  <IconWithLabelContainer>
    <Icon icon={icon} />
    <IconLabel>{label}</IconLabel>
  </IconWithLabelContainer>
);

export default IconWithLabel;
