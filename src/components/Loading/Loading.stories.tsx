import React from 'react';
import { Story, Meta } from '@storybook/react';
import {SpinnerLoading, SpinnerLoadingProps} from "./Loading";

export default {
  title: 'Loading/Spinner',
  component: SpinnerLoading,
} as Meta;

const Template: Story<SpinnerLoadingProps> = (args) => <SpinnerLoading {...args} />;

export const Normal = Template.bind({});
Normal.args = {
};