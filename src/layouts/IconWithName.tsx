import { IconDefinition } from '@fortawesome/free-brands-svg-icons';
import styled from 'styled-components';
import Icon from '../components/Icon';

const IconName = styled.p`
  text-align: center;
  font-weight: 700;
  font-size: 1em;
  line-height: 1.2em;
`;

function IconWithNameComponent({ icon, name }: {icon: IconDefinition, name: string}) {
  return (
    <>
      <Icon icon={icon} />
      <IconName>{name}</IconName>
    </>
  );
}

const IconWithName = styled(IconWithNameComponent)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;  
`;

export default IconWithName;
