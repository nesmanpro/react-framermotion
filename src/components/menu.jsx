import React from 'react'
import menuStyles from '../scss/menu.module.scss';
import Link from 'next/link';

export const Menu = ({ isOpen }) => {
    return (

        <div className={`${menuStyles.menu} ${isOpen ? menuStyles.open : ''}`}>
            <ul className='text-6xl font-mono'>
                <li><Link href="/">Home</Link></li>
                <li><Link href="#">Work</Link></li>
                <li><Link href="#">About</Link></li>
            </ul>
        </div>
    )
}
