"use client";

import React from "react";
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { BackgroundBeams } from "./ui/background-beams";
//import { PixelatedCanvas } from "./ui/pixelated-canvas";
import Lanyard from "./Lanyard";

const HeroSection = () => {
  const containRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: { duration: 0.8, ease: "power3.out" }

    });
    tl.fromTo(
      containRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, stagger: 0.2, delay: 0.5 }
    );

  }, { scope: containRef })
  return (
    <div className="h-full w-full bg-neutral-950 relative flex items-center justify-center antialiased overflow-hidden ">
      <BackgroundBeams className="pointer-events-none z-[10]" />
      {/* Main Wrapper Section */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-12 lg:px-20 md:gap-16 w-full">
        <div className="items-center justify-center m-6 max-w-2xl md:max-w-4xl lg:max-w-6xl xl:max-w-8xl">
          <h1 ref={containRef} className="text-2xl font-sans font-extrabold text-white text-center md:text-3xl lg:text-4xl">Aman Kanojiya</h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-mono font-bold text-amber-600 text-center pt-4">Full Stack Developer </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 font-normal pt-2 leading-relaxed text-center"> I’m a Computer Science graduate passionate about <br /> building
            fast, scalable, and user-friendly web applications using
            <span className="text-amber-600 font-semibold"> MERN Stack</span>
          </p>
        </div>

        <div className="items-center justify-center mr-6 z-20 md:h-[50%] md:w-auto w-full ">

          {/* <PixelatedCanvas
        src="assets/Untitled_design-removebg-preview.png"
        width={400}
        height={500}
        cellSize={3}
        dotScale={0.9}
        shape="square"
        backgroundColor=""
        dropoutStrength={0}
        interactive={true}
        distortionStrength={3}
        distortionRadius={60}
        distortionMode="swirl"
        followSpeed={0.2}
        jitterStrength={4}
        jitterSpeed={4}
        sampleAverage
        tintColor="#FFFFFF"
        tintStrength={0.2}
        className="rounded-xl border border-neutral-800 shadow-lg z-[20]"
      /> */}
          <Lanyard position={[0, 0, 18.5]} gravity={[0, -40, 0]} />
        </div>
      </div>

    </div>
  )
}

export default HeroSection