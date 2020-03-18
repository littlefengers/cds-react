import React from 'react'
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs/react';
import Button from './Buttons';

export default {
    component: Button,
    title: 'Button',
    decorators: [withKnobs]
}

export const Primary = () => <Button buttonVariant="primary" ariaLabel="Some Aria Text">{text('Button Text','Primary Button')}</Button>;

export const PrimaryAlternate = () => <Button buttonVariant="primary-alternate" ariaLabel="Some Aria Text">{text('Button Text','Primary Alternate')}</Button>;

export const Secondary = () => <Button buttonVariant="secondary" ariaLabel="Some Aria Text">{text('Button Text','Secondary')}</Button>;

export const OutlinePrimary = () => <Button buttonVariant="outline-primary" ariaLabel="Some Aria Text">{text('Button Text','Outline Primary')}</Button>;
