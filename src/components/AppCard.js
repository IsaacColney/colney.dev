import React from 'react'

import './AppCard.scss';
const AppCard = props => {
    return (
        <div className={`appcard-container ${props.className}`} style={props.style} >
            <h2>{props.title}</h2>
        </div>
    )
}

export default AppCard
