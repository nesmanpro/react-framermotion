import React, { useState } from 'react'
import burger from '../scss/burguer.module.scss';
import { Menu } from './menu';
import { forwardRef } from 'react';
import Magnetic from '@/components/magnetic';


export const NavBar = forwardRef(function index(props, ref) {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };


    return (
        <div className={burger.header}>
            <Magnetic>
                <div ref={ref} className={menuOpen ? burger.open : burger.burger} onClick={toggleMenu}>
                    <div ref={ref} className={burger.bounds}></div>
                </div>
                <Menu isOpen={menuOpen} />
            </Magnetic>
        </div>
    )
})

