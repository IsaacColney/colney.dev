import React from 'react'
import ProfileImg from '../assets/isaacColney/dp.jpg';
import Style from './IsaacColney.module.scss';
import BoxCard from '../components/BoxCard';
import Fade from 'react-reveal/Fade';
import SteamImg from '../assets/isaacColney/linkLogo/steam.png';
import GithubImg from '../assets/isaacColney/linkLogo/github.png';
import YoutubeImg from '../assets/isaacColney/linkLogo/youtube.png';
import InstagramImg from '../assets/isaacColney/linkLogo/instagram.png';
import FacebookImg from '../assets/isaacColney/linkLogo/facebook.png';

const IsaacColney = () => {
    return (
        <div className={Style.container}>  
            <div className={Style.header}>
                <img src={ProfileImg} alt='isaac_colney'/>
                <h2>Isaac Colney</h2>
            </div>
            <div className={Style.body1}>
                <Fade left delay={500}><BoxCard img={SteamImg} title='Gaming(Steam)' className={Style.gaming}  url='https://steamcommunity.com/id/y3nlox'/></Fade>
                <Fade left delay={1000}><BoxCard img={GithubImg} title='Github'className={Style.github}  url='https://github.com/isaaccolney' /></Fade>
                <Fade left delay={1500}><BoxCard img={YoutubeImg} title='Youtube' className={Style.youtube} url='https://www.youtube.com/channel/UCaaB61CwsQ7VH8vS3ZYI6mA' /></Fade>
                <Fade left delay={2000}><BoxCard img={InstagramImg} title='Instagram' className={Style.instagram} url='https://instagram.com/isaac_colney' /></Fade>
                <Fade left delay={2500}><BoxCard img={FacebookImg} title='Facebook' className={Style.facebook} url='https://facebook.com/isaac.colney173'/></Fade>
            </div>
        </div>
    )
}

export default IsaacColney
