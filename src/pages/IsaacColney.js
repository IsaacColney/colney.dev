import React from 'react'
import ProfileImg from '../assets/isaacColney/dp.jpg';
import Style from './IsaacColney.module.scss';
import BoxCard from '../components/BoxCard';
import Fade from 'react-reveal/Fade';


const IsaacColney = () => {
    return (
        <div className={Style.container}>  
            <div className={Style.header}>
                <img src={ProfileImg} alt='isaac_colney'/>
                <h2>Isaac Colney</h2>
            </div>
            <div className={Style.body1}>
                <Fade right delay={100}><BoxCard title='Gaming' className={Style.gaming}/></Fade>
                <Fade left delay={200}><BoxCard title='Github'className={Style.github}/></Fade>
                <Fade right delay={300}><BoxCard title='Youtube' className={Style.youtube}/></Fade>
                <Fade left delay={400}><BoxCard title='Instagram' className={Style.youtube}/></Fade>
                <Fade right delay={500}><BoxCard title='Facebook' className={Style.youtube}/></Fade>
            </div>
        </div>
    )
}

export default IsaacColney
