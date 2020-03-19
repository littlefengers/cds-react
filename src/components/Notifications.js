import React from 'react'

const Notifications = ({children, variant}) => {
    return (
        <div className={`notification notification--${variant}`}>
            {children}
        </div>
    )
}

export default Notifications
