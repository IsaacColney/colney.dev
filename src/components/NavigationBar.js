import React from 'react'
import './Navigation.scss';
const NavigationBar = () => {
    return (
        <div className='nav-bar'>
            <div className='content'>
                <div className='btn'></div>
                <div className='link'>
                    <ul>
                        <li>Home</li>
                        <li>App</li>
                        <li>Contact</li>
                        <li>About</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavigationBar
