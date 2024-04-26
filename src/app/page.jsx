'use client'
import Image from "next/image";
import style from '../scss/page.module.scss';
import { useTransform, useScroll, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from 'lenis'
import useDimention from "@/lib/useDimension";
import { NavBar } from "@/components/navBar";
import { Cursor } from "@/components/cursor";


const imgs = [
  '1.jpg',
  '2.jpg',
  '3.png',
  '4.png',
  '5.png',
  '6.jpg',
  '7.jpg',
  '8.jpg',
  '9.png',
  '10.png',
  '11.png',
  '12.png',
  '13.png'
];


export default function Home() {

  const stickyElement = useRef(null);

  const container = useRef(null);
  const { height } = useDimention();
  const { scrollYProgress } = useScroll({
    terget: container,
    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25])
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3])


  useEffect(() => {
    const lenis = new Lenis()


    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])


  return (
    <main className={style.main}>
      <Cursor stickyElement={stickyElement} />
      <NavBar ref={stickyElement} />
      <div className={style.spacer}>
      </div>
      <div className={style.gallery}>
        <Column imgs={[imgs[0], imgs[1], imgs[2]]} y={y} />
        <Column imgs={[imgs[3], imgs[4], imgs[5]]} y={y2} />
        <Column imgs={[imgs[6], imgs[7], imgs[8]]} y={y3} />
        <Column imgs={[imgs[9], imgs[10], imgs[11]]} y={y4} />
      </div>
      <div className={style.spacer}></div>
    </main>
  );
}


const Column = ({ imgs, y = 0 }) => {

  return (
    <motion.div style={{ y }} className={style.column}>
      {
        imgs.map((src, index) => {
          return <div key={index} className={style.imageContainer}>
            <Image
              src={`/img/${src}`}
              fill
              alt="image"
            />
          </div>
        })
      }

    </motion.div>
  )
}