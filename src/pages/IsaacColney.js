import React from 'react'
import ProfileImg from '../assets/isaacColney/dp.jpg';
import Style from './IsaacColney.module.scss';
import BoxCard from '../components/BoxCard';
import { blue } from '@material-ui/core/colors';
const IsaacColney = () => {
    return (
        <div className={Style.container}>  
            <div className={Style.header}>
                <img src={ProfileImg} alt='isaac_colney'/>
                <h2>Isaac Colney</h2>
            </div>
            <div className={Style.body1}>
                <BoxCard title='Gaming'/>
                <BoxCard title='Github'/>
                <BoxCard title='Youtube'/>
            </div>
        </div>
    )
}

export default IsaacColney
