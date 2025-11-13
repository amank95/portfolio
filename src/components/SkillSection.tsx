"use client";
import React from "react";
import { BackgroundRippleEffect } from "./ui/background-ripple-effect";
import { AnimatedTooltip } from "./ui/animated-tooltip";

const people = [
    {
      id: 1,
      name: "JavaScript",
      
      image:
        "https://www.w3schools.com/js/img_javascript_480.jpg",
    },
    {
      id: 2,
      name: "HTML5",
    
      image:
       "assets/HTMLlog.png",
    },
    {
      id: 3,
      name: "ExpressJs",
      
      image:
        "assets/express.png"    },
    {
      id: 4,
      name: "Nodejs",
     
      image:
    "assets/nodejs.png"   
    },
    {
      id: 5,
      name: "ReactJs",
      
      image:
    "assets/reactjs.png"  
    },
    {
      id: 6,
      name: "MongoDB",
      
      image:
   "assets/devicon_mongodb-wordmark.png"  
    },
  ];

function SkillSection() {
  return (
    <div className="relative flex flex-col items-center justify-center bg-[#050505] w-full">

          
        <div className="mt-10 items-center justify-center mb-4 font-semibold font-serif ">
            <h1 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-neutral-200 md:text-4xl lg:text-7xl">My Skill</h1>
        </div>
        <BackgroundRippleEffect/>
        <div className=" w-full"> 
        <h2 className="pb-16 relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-neutral-600 md:text-4xl lg:text-7xl dark:text-neutral-100 ">
          Frontend | Backend | Database
        </h2>
        <div className="relative z-10 flex flex-row items-center justify-center mb-10 w-full">
            <AnimatedTooltip items={people}/>
        </div>

        </div>
     
    </div>
  )
}

export default SkillSection