import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Sidebar } from './sidebar';

const Story: ComponentMeta<typeof Sidebar> = {
  component: Sidebar,
  title: 'Sidebar',
};
export default Story;

const Template: ComponentStory<typeof Sidebar> = (args) => (
  <Sidebar {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
