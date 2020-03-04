import React from 'react';
import { action } from '@storybook/addon-actions';
import {Button} from '../components/Buttons.js';

export default {
  title: 'Button',
  component: Button,
};

export const Wireframe = () => <Button buttonText="Text!"></Button>;

export const Primary = () => <ButtonPrimary buttonText="Text!"></ButtonPrimary>;;

export const Secondary = () => <ButtonSecondary buttonText="Text!"></ButtonSecondary>;;

// export const Emoji = () => (
//   <Button onClick={action('clicked')}>
//     <span role="img" aria-label="so cool">
//       😀 😎 👍 💯
//     </span>
//   </Button>
// );
