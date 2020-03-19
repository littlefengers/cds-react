import React from "react"
import PropTypes from "prop-types";
import "./../scss/style.scss"

const Button = ({ variant, children, ariaLabel }) => {
//Children prop is what's in between the tag
  return <button className={`btn btn--${variant}`} aria-label={ariaLabel}>{children}</button>
}

export default Button

Button.propTypes = {
    ariaLabel: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired
}

Button.defaultProps = {
    children: "Button Text",
    variant: "primary",
}