import React, { useEffect, useState } from 'react';
import style from '../scss/cursor.module.scss';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const Cursor = ({ stickyElement }) => {


    const [isHovered, setIsHovered] = useState(false);
    const cursorSize = isHovered ? 70 : 20;
    const mouse = {
        y: useMotionValue(0),
        x: useMotionValue(0)
    }

    const smoothOptions = { damping: 25, stiffness: 200, mass: 0.5 }
    const smoothMouse = {
        x: useSpring(mouse.x, smoothOptions),
        y: useSpring(mouse.y, smoothOptions)
    }

    const manageMouseMove = (e) => {
        const { clientX, clientY } = e;
        mouse.x.set(clientX - cursorSize / 2);
        mouse.y.set(clientY - cursorSize / 2);
    }

    const manageMouseOver = () => {
        setIsHovered(true)
    }
    const manageMouseOut = () => {
        setIsHovered(false)
    }

    useEffect(() => {
        window.addEventListener('mousemove', manageMouseMove)
        stickyElement.current.addEventListener('mouseover', manageMouseOver)
        stickyElement.current.addEventListener('mouseleave', manageMouseOut)
        return () => {
            window.removeEventListener('mousemove', manageMouseMove)
            stickyElement.current.removeEventListener('mousemove', manageMouseOver)
            stickyElement.current.removeEventListener('mouseleave', manageMouseOut)
        }
    })


    return (
        <motion.div
            className={style.cursor}
            style={{ left: smoothMouse.x, top: smoothMouse.y }}
            animate={{ width: cursorSize, height: cursorSize }}
        >


        </motion.div>
    )
}
