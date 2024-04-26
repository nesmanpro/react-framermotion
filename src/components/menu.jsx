import React from 'react'
import menuStyles from '../scss/menu.module.scss';

export const Menu = ({ isOpen }) => {
    return (

        <div className={`${menuStyles.menu} ${isOpen ? menuStyles.open : ''}`}>
            <ul className='text-6xl font-mono'>
                <li><a href="#">Home</a></li>
                <li><a href="#">Work</a></li>
                <li><a href="#">About</a></li>
            </ul>
        </div>
    )
}
