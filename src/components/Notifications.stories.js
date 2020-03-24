import React from 'react'
import { action } from '@storybook/addon-actions';
import { withKnobs, text} from '@storybook/addon-knobs/react';
import { host } from 'storybook-host';
import Notification from './Notifications';

export default {
    component: Notification,
    title: 'Notification',
    parameters: {
        component: Notification,
        componentSubtitle: 'Displays an image that represents a user or organization'
      },
    decorators: [withKnobs({escapeHTML: false}), host({width:400})] 
}




export const Information = () =>  <Notification variant="information">{text("Notification Text","Hope in the form of glorious combat, battle is the great redeemer, the fiery crucible in which the only true heroes are forged. The one place where all men truly share the same rank, regardless of what kind of parasitic scum they were going in")}</Notification>;

export const Success = () =>  <Notification variant="success">{text("Notification Text","Hope in the form of glorious combat, battle is the great redeemer, the fiery crucible in which the only true heroes are forged. The one place where all men truly share the same rank, regardless of what kind of parasitic scum they were going in")}</Notification>;

export const Warning = () =>  <Notification variant="warning">{text("Notification Text","Hope in the form of glorious combat, battle is the great redeemer, the fiery crucible in which the only true heroes are forged. The one place where all men truly share the same rank, regardless of what kind of parasitic scum they were going in")}</Notification>;

export const Error = () =>  <Notification variant="error">{text("Notification Text","Hope in the form of glorious combat, battle is the great redeemer, the fiery crucible in which the only true heroes are forged. The one place where all men truly share the same rank, regardless of what kind of parasitic scum they were going in")}</Notification>;

