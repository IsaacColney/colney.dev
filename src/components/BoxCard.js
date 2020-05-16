import React from 'react'
import Style from './BoxCard.module.scss';

const BoxCard = props => {
    return (
        <div className={`${Style.boxCard} ${props.class}`}>
            {(props.img != null) ?  <img src={props.img} alt='logo'/> : <div className={Style.imgContainer}></div>}
            <h3>{props.title}</h3>
        </div>
    )
}

export default BoxCard
