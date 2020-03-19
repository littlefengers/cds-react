import React from 'react'
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs/react';
import centered from '@storybook/addon-centered/react';
import Button from './Buttons';

export default {
    component: Button,
    title: 'Button',
    decorators: [withKnobs,centered]
}

export const Primary = () => <Button variant="primary" ariaLabel="Some Aria Text">{text('Button Text','Primary Button')}</Button>;

export const PrimaryAlternate = () => <Button variant="primary-alternate" ariaLabel="Some Aria Text">{text('Button Text','Primary Alternate')}</Button>;

export const Secondary = () => <Button variant="secondary" ariaLabel="Some Aria Text">{text('Button Text','Secondary')}</Button>;

export const OutlinePrimary = () => <Button variant="outline-primary" ariaLabel="Some Aria Text">{text('Button Text','Outline Primary')}</Button>;
