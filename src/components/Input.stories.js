import React from 'react'
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs/react';
import centered from '@storybook/addon-centered/react';
import { host } from 'storybook-host';
import Input from './Input';

export default {
    component: Input,
    title: 'Input',
    decorators: [withKnobs, host({width:400})]
}

export const Default = () => <Input></Input>;