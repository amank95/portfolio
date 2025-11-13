"use client";

import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import { PixelatedCanvas } from "./ui/pixelated-canvas";
import Lanyard from "./ui/Lanyard";

const HeroSection = () => {
  return (
    <div className="h-[40rem] w-full  bg-neutral-950 relative flex  items-center justify-center antialiased ">
         <BackgroundBeams className="pointer-events-none z-[10]" />
    <div className="items-center justify-center m-6">
        <h1 className="text-4xl font-sans font-extrabold text-white">Aman Kanojiya</h1>
        <h2 className="text-3xl font-mono font-bold text-amber-600 pt-4">Full Stack Developer </h2>
        <p className="text-2xl text-gray-300 font-normal pt-2"> I’m a Computer Science graduate passionate about <br/> building 
        fast, scalable, and user-friendly web applications using 
        <span className="text-amber-600 font-semibold"> MERN Stack</span>
        </p>
    </div>
    <div className="items-center justify-center mr-6 z-20">
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
      <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
    </div>
 
    </div>
  )
}

export default HeroSection