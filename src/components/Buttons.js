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