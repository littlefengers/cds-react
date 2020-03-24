import React from 'react'
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs/react';
import centered from '@storybook/addon-centered/react';
import Button from './Buttons';
import { Meta, Story, Props, Preview } from '@storybook/addon-docs/blocks';

export default {
    component: Button,
    title: 'Button',
    parameters: {
      component: Button,
    },
    decorators: [withKnobs]

}



export const Primary = () => <Button variant="primary" ariaLabel="Some Aria Text">{text('Button Text','Primary Button')}</Button>;

Primary.story = {
  parameters :{
    'in-dsm': {id: '5e43202a384beb1a3b1262a6'}
  }
}

export const PrimaryAlternate = () => <Button variant="primary-alternate" ariaLabel="Some Aria Text">{text('Button Text','Primary Alternate')}</Button>;

PrimaryAlternate.story = { 
    parameters: { docs: { storyDescription: 'Usage stuff goes here' } }
}

export const Secondary = () => <Button variant="secondary" ariaLabel="Some Aria Text">{text('Button Text','Secondary')}</Button>;

export const OutlinePrimary = () => <Button variant="outline-primary" ariaLabel="Some Aria Text">{text('Button Text','Outline Primary')}</Button>;
