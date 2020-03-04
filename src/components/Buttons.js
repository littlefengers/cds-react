import React from 'react'
import './../scss/style.scss';

export default class Button extends React.Component
{
    render() {
        return(
            <button className="btn">{this.props.buttonText}</button>
        )
     
    }
}

export class ButtonPrimary extends React.Component
{
    render() {
        return(
            <button className="btn btn--primary">{this.props.buttonText}</button>
        )
     
    }
}



export class ButtonSecondary extends React.Component
{
    render() {
        return(
            <button className="btn btn--secondary">{this.props.buttonText}</button>
        )
     
    }
}

