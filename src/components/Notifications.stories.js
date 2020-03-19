import React from 'react'
import { action } from '@storybook/addon-actions';
import { withKnobs, text} from '@storybook/addon-knobs/react';
import { host } from 'storybook-host';
import Notifications from './Notifications';



export default {
    component: Notifications,
    title: 'Notifications',
    decorators: [withKnobs({escapeHTML: false}), host({width:400})] 
}

export const Information = () =>  <Notifications variant="information">{text("Notification Text","Hope in the form of glorious combat, battle is the great redeemer, the fiery crucible in which the only true heroes are forged. The one place where all men truly share the same rank, regardless of what kind of parasitic scum they were going in")}</Notifications>;

export const Success = () =>  <Notifications variant="success">{text("Notification Text","Hope in the form of glorious combat, battle is the great redeemer, the fiery crucible in which the only true heroes are forged. The one place where all men truly share the same rank, regardless of what kind of parasitic scum they were going in")}</Notifications>;

export const Warning = () =>  <Notifications variant="warning">{text("Notification Text","Hope in the form of glorious combat, battle is the great redeemer, the fiery crucible in which the only true heroes are forged. The one place where all men truly share the same rank, regardless of what kind of parasitic scum they were going in")}</Notifications>;

export const Error = () =>  <Notifications variant="error">{text("Notification Text","Hope in the form of glorious combat, battle is the great redeemer, the fiery crucible in which the only true heroes are forged. The one place where all men truly share the same rank, regardless of what kind of parasitic scum they were going in")}</Notifications>;

