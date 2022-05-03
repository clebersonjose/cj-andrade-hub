import { ComponentMeta, ComponentStory } from '@storybook/react';
import Title from '.';

export default {
  title: 'Components/Title',
  component: Title,
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = ({ text }: { text: string }) => (
  <Title>{text}</Title>
);

export const Primary = Template.bind({});

Primary.args = {
  text: 'Title',
};
