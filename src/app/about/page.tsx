"use client";

import React from "react";
import { motion } from "motion/react";

function About() {
  return (
    <div className="relative flex flex-col items-center justify-center bg-[#050505] w-full py-20 overflow-hidden border-t border-neutral-900">
      {/* Section Header */}
      <div className="relative z-20 items-center justify-center mb-10 font-semibold font-serif">
        <h2 className="mx-auto max-w-4xl text-center text-3xl font-bold text-neutral-200 md:text-5xl lg:text-7xl">
          About Me
        </h2>
      </div>

      {/* Content Wrapper Card */}
      <div className="max-w-4xl mx-auto px-6 relative z-20 w-full">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-neutral-900/40 border border-neutral-850/70 rounded-2xl p-6 sm:p-10 backdrop-blur-sm shadow-xl max-w-3xl mx-auto"
        >
          <p className="text-neutral-300 text-sm sm:text-base md:text-lg leading-relaxed text-center font-normal">
            Welcome to my portfolio! I'm{" "}
            <span className="text-amber-500 font-bold">Aman Kanojiya</span>, a
            passionate web developer with expertise in creating dynamic and
            responsive web applications. With a strong foundation in{" "}
            <span className="text-amber-500 font-semibold">
              JavaScript, React, Node.js, and MongoDB
            </span>
            , I specialize in building full-stack solutions that deliver
            exceptional user experiences. Explore my projects to see how I
            combine creativity and technical skills to bring ideas to life.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default About;