import React, { useState } from 'react'
import burger from '../scss/burguer.module.scss';
import { Menu } from './menu';
import { forwardRef } from 'react';


export const NavBar = forwardRef(function index(props, ref) {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };


    return (
        <div className={burger.header}>
            <div ref={ref} className={menuOpen ? burger.open : burger.burger} onClick={toggleMenu}>
                <div className={burger.bounds}></div>
            </div>
            <Menu isOpen={menuOpen} />
        </div>
    )
})

