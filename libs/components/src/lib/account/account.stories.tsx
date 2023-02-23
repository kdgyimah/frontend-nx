import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Account } from './account';

const Story: ComponentMeta<typeof Account> = {
  component: Account,
  title: 'Account',
};
export default Story;

const Template: ComponentStory<typeof Account> = (args) => (
  <Account {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
