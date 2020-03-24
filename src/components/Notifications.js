import React from 'react'
import PropTypes from "prop-types";


/**
 * Place notification boxes in close proximity to the object or section it is related to. The width of the alert should be determined by the width of its context (see spec for width callout). Always keep messages brief and concise. Do not use a notification when more action is required than a simple link, use a modal popover instead.
 */


const Notification = ({children, variant}) => {
    return (
        <div className={`notification notification--${variant}`}>
            {children}
        </div>
    )
}

export default Notification

Notification.propTypes = {
    children: PropTypes.string.isRequired,
    variant: PropTypes.string.isRequired,
    // variant: PropTypes.oneOf(['informative','success','warning','error'])
}

Notification.defaultProps = {
    variant: "information"
}