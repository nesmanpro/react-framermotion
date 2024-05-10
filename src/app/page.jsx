'use client'
import Home from "./pages/home";
import { NavBar } from "@/components/navBar";
import { Cursor } from "@/components/cursor";
import { useEffect, useRef } from "react";
import Lenis from 'lenis'
import { AnimatePresence } from "framer-motion";

export default function App({ router, pageProps }) {

  const stickyElement = useRef(null);

  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])



  return (
    <main>
      <Cursor stickyElement={stickyElement} />
      <NavBar ref={stickyElement} />

      <AnimatePresence>

        <Home mode='wait' />
      </AnimatePresence>
    </main>
  );
}

