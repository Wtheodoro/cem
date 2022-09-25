/* eslint-disable functional/immutable-data */
import { Story, Meta } from '@storybook/react/types-6-0';
import React from 'react';

import { Background, BackgroundProperties } from './Background';

export default {
  title: 'Atoms/Background',
  component: Background,
} as Meta;

const Template: Story<BackgroundProperties> = (arguments_) => <Background {...arguments_} />;

export const Default = Template.bind({});
Default.args = {
  children: 'test text',
  url: 'https://placeholder.pics/svg/1356x926',
};

export const Photo = Template.bind({});
Photo.args = {
  children: 'Just a dummy text that is positioned over the background image',
  url:
    'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1534&q=80',
};
