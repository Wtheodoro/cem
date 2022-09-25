/* eslint-disable functional/immutable-data */
import { Story, Meta } from '@storybook/react/types-6-0';
import React from 'react';

import { ModalBlackFriday } from './ModalBlackFriday';

export default {
  title: 'Atoms/ModalBlackFriday',
  component: ModalBlackFriday,
} as Meta;

const Template: Story = (properties: any) => <ModalBlackFriday {...properties} />;

export const Default = Template.bind({});
Default.args = {};
