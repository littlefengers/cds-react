import React from "react"
import PropTypes from "prop-types";
import "./../scss/style.scss"

/**
 *  Buttons are used primarily for actions, such as “Add”, “Close”, “Cancel”, or “Save”. Plain buttons, which look similar to links, are used for less important or less commonly used actions, such as “view shipping settings”.
 */


const Button = ({ variant, children, ariaLabel,url }) => {
//Children prop is what's in between the tag
  return <button href={url} className={`btn btn--${variant}`} aria-label={ariaLabel}><a href={url}>{children}</a></button>
}

export default Button

Button.propTypes = {
    ariaLabel: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
    url: PropTypes.string
}

Button.defaultProps = {
    children: "Button Text",
    variant: "primary",
    url: "#"
}