import React from 'react'
import ErrorImg  from '../assets/icon/404.png'
import  Tada from 'react-reveal/Tada'
import Style from './NotFound.module.scss';

const NotFound = () => {
    return (
        <div className={Style.container}> 
        <img src={ErrorImg} alt='404 not found'/>
        <Tada delay={500}><h1>Not Found</h1></Tada>
        </div>
    )
}

export default NotFound
