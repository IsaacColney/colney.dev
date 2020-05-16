import React from 'react'
import Style from './BoxCard.module.scss';

const BoxCard = props => {
    return (
        <div className={`${Style.boxCard} ${props.class}`}>
            <div className={Style.imgContainer}>{props.img != null && <img src={props.img} alt='logo'/>}</div>
            <h3>{props.title}</h3>
        </div>
    )
}

export default BoxCard
