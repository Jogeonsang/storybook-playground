import React from 'react';
import { Story, Meta } from '@storybook/react';
import {Button, ButtonProps} from "./Button";

export default {
  title: 'UI/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  label: '버튼',
  type: 'normal',
};


export const Disabled = Template.bind({});
Disabled.args = {
  label: '비활성',
  type: 'disabled',

};

export const Error = Template.bind({});
Error.args = {
  label: '오류',
  type: 'error',
};