import React from 'react'
import Style from './BoxCard.module.scss';

const BoxCard = props => {
    return (
        <a href={props.url}><div className={`${Style.boxCard} ${props.className}`} >
            {(props.img != null) ?  <img src={props.img} alt='logo'/> : <div className={Style.imgContainer}></div>}
            <h3>{props.title}</h3>
        </div></a>
    )
}

export default BoxCard
