import React from 'react'
import ProfileImg from '../assets/isaacColney/dp.jpg';
import Style from './IsaacColney.module.scss';
const IsaacColney = () => {
    return (
        <div className={Style.container}>  
            <div className={Style.header}>
                <img src={ProfileImg} alt='isaac_colney'/>
                <h2>Isaac Colney</h2>
            </div>
            <div className={Style.body1}>

            </div>
        </div>
    )
}

export default IsaacColney
