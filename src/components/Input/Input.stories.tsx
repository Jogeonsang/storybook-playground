import React from 'react';
import { Story, Meta } from '@storybook/react';
import {Input, InputProps} from "./Input";

export default {
  title: 'UI/Input',
  component: Input,
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  placeholder: '입력하세요',
};

export const Disabled = Template.bind({});
Disabled.args = {
  placeholder: '비활성',
  isDisabled: true,
}

export const Error = Template.bind({});
Error.args = {
  placeholder: '에러',
  isError: true,
}