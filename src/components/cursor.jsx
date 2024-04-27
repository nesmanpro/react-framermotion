import React, { useEffect, useState, useRef } from 'react';
import style from '../scss/cursor.module.scss';
import { animate, motion, spring, transform, useMotionValue, useSpring } from 'framer-motion';

export const Cursor = ({ stickyElement }) => {


    const [isHovered, setIsHovered] = useState(false);
    const cursorRef = useRef();
    const cursorSize = isHovered ? 55 : 20;

    const mouse = {
        y: useMotionValue(0),
        x: useMotionValue(0)
    }

    const smoothOptions = { damping: 25, stiffness: 200, mass: 0.5 }
    const smoothMouse = {
        x: useSpring(mouse.x, smoothOptions),
        y: useSpring(mouse.y, smoothOptions)
    }


    const scale = {
        x: useMotionValue(1),
        y: useMotionValue(1)
    }

    const rotate = (distance) => {
        const angle = Math.atan2(distance.y, distance.x)
        animate(cursorRef.current, { rotate: `${angle}rad` }, { duration: 0 })
    }

    const manageMouseMove = (e) => {

        const { clientX, clientY } = e;
        const { left, top, width, height } = stickyElement.current.getBoundingClientRect();

        const center = { x: left + width / 2, y: top + height / 2 };
        const distance = { x: clientX - center.x, y: clientY - center.y };


        if (isHovered) {
            //Girar cursor
            rotate(distance)

            //Estirar cursor
            const absDistance = Math.max(Math.abs(distance.x), Math.abs(distance.y));
            const newScaleX = transform(absDistance, [0, width / 2], [1, 1.3])
            const newScaleY = transform(absDistance, [0, height / 2], [1, 0.8])
            scale.x.set(newScaleX);
            scale.y.set(newScaleY);

            //Escalar cursor
            mouse.x.set((center.x - cursorSize / 2) + distance.x * 0.1);
            mouse.y.set((center.y - cursorSize / 2) + distance.y * 0.1);

        } else {

            mouse.x.set(clientX - cursorSize / 2);
            mouse.y.set(clientY - cursorSize / 2);

        }

    }

    const manageMouseOver = () => {
        setIsHovered(true)
    }
    const manageMouseOut = () => {
        setIsHovered(false)
        animate(cursorRef.current, { scaleX: 1, scaleY: 1 }, { duration: 0.1 }, { type: 'spring' });
    }

    useEffect(() => {
        const stickyElementRef = stickyElement.current;
        window.addEventListener('mousemove', manageMouseMove)
        stickyElement.current.addEventListener('mouseover', manageMouseOver)
        stickyElement.current.addEventListener('mouseleave', manageMouseOut)
        return () => {
            window.removeEventListener('mousemove', manageMouseMove)
            stickyElementRef.removeEventListener('mousemove', manageMouseOver)
            stickyElementRef.removeEventListener('mouseleave', manageMouseOut)
        }
    })


    const template = ({ rotate, scaleX, scaleY }) => {
        return `rotate(${rotate}) scaleX(${scaleX}) scaleY(${scaleY})`
    }
    return (
        <motion.div
            transformTemplate={template}
            className={style.cursor}
            ref={cursorRef}
            style={{
                left: smoothMouse.x,
                top: smoothMouse.y,
                scaleX: scale.x,
                scaleY: scale.y
            }}
            animate={{ width: cursorSize, height: cursorSize }}

        >


        </motion.div>
    )
}
