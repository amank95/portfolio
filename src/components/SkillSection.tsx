"use client";
import React, { useState } from "react";
import { BackgroundRippleEffect } from "./ui/background-ripple-effect";
import { motion, AnimatePresence } from "motion/react";

const skills = [
  // Frontend
  {
    id: "html5",
    name: "HTML5",
    category: "Frontend",
    icon: (
      <svg viewBox="0 0 24 24" className="w-full h-full">
        <path fill="#E34F26" d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0z"/>
        <path fill="#EF652A" d="M12 2.24v19.51l6.883-1.96L20.38 4.14H12z"/>
        <path fill="#EAEAEA" d="M12 9.6h-3.41l-.24-2.69H12V4.24H5.82l.69 7.72H12V9.6zM12 15.01l-.02.01-2.14-.58-.14-1.55H7.01l.24 2.78 4.73 1.3 4.75-1.3.51-5.72h-5.24v2.36h2.91l-.2 2.34-2.16.59z"/>
      </svg>
    )
  },
  {
    id: "css3",
    name: "CSS3",
    category: "Frontend",
    icon: (
      <svg viewBox="0 0 24 24" className="w-full h-full">
        <path fill="#1572B6" d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0z"/>
        <path fill="#33A9DC" d="M12 2.24v19.51l6.883-1.96L20.38 4.14H12z"/>
        <path fill="#EAEAEA" d="M12 9.6h-5.24l.24 2.69H12v2.36l-2.16.59-2.14-.59-.14-1.55H4.88l.24 2.78 4.73 1.3 4.75-1.3.51-5.72H12V9.6zM12 4.24H5.82l.24 2.69H12V4.24z"/>
      </svg>
    )
  },
  {
    id: "javascript",
    name: "JavaScript",
    category: "Frontend",
    icon: (
      <svg viewBox="0 0 24 24" className="w-full h-full">
        <rect width="24" height="24" rx="4" fill="#F7DF1E"/>
        <path d="M1.83 22.12c.48.97 1.24 1.63 2.39 1.63 1.09 0 1.83-.53 1.83-1.88v-8.27H3.45v8.27c0 .64-.26.96-.64.96-.34 0-.57-.2-.73-.51l-1.25.79zm7.14.99c.92.51 1.95.83 2.92.83 1.48 0 2.22-.61 2.22-1.51 0-.96-.75-1.32-2.02-1.87l-.73-.32c-1.66-.71-2.45-1.63-2.45-3.14 0-1.82 1.41-3.12 3.51-3.12 1.28 0 2.24.34 2.97.77l-.59 1.77c-.52-.31-1.29-.6-2.17-.6-1.07 0-1.66.49-1.66 1.15 0 .74.52 1.08 1.54 1.51l.73.32c1.88.8 2.75 1.69 2.75 3.39 0 2.1-1.62 3.39-4.14 3.39-1.35 0-2.6-.4-3.35-1.02l.62-1.78z" fill="#000000" transform="scale(0.85) translate(2.2, 2.2)" />
      </svg>
    )
  },
  {
    id: "react",
    name: "React",
    category: "Frontend",
    icon: (
      <svg viewBox="0 0 24 24" className="w-full h-full" fill="none">
        <circle cx="12" cy="12" r="2" fill="#61DAFB"/>
        <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(0 12 12)"/>
        <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(60 12 12)"/>
        <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="#61DAFB" strokeWidth="1.5" transform="rotate(120 12 12)"/>
      </svg>
    )
  },
  {
    id: "typescript",
    name: "TypeScript",
    category: "Frontend",
    icon: (
      <svg viewBox="0 0 24 24" className="w-full h-full">
        <rect width="24" height="24" rx="4" fill="#3178C6"/>
        <path d="M10.8 7.5H6.2v1.8h1.4v7.2h2V9.3h1.4V7.5z M16.8 9.3c-.4-.4-.8-.6-1.4-.6-.6 0-1 .3-1 .8 0 .4.3.6.8.8l.9.3c1 .3 1.7.8 1.7 1.9 0 1.2-1 2-2.3 2-1 0-1.7-.4-2.2-1l1.2-1.2c.3.4.6.6 1 .6.4 0 .7-.2.7-.5 0-.4-.3-.6-.8-.8l-.9-.3c-1.1-.3-1.6-.9-1.6-1.8 0-1.1.9-1.9 2.2-1.9.9 0 1.6.3 2 1l-1.2 1.2z" fill="#FFFFFF"/>
      </svg>
    )
  },
  {
    id: "tailwind",
    name: "Tailwind",
    category: "Frontend",
    icon: (
      <svg viewBox="0 0 24 24" className="w-full h-full" fill="none">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.597 15.026 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.203 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.537 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.403 8.976 12 6.001 12z" fill="#06B6D4"/>
      </svg>
    )
  },
  // Backend
  {
    id: "nodejs",
    name: "Node.js",
    category: "Backend",
    icon: (
      <svg viewBox="0 0 24 24" className="w-full h-full" fill="none">
        <path d="M12 2L3.5 7v10L12 22l8.5-5V7L12 2zm-1 16.5l-5-2.9v-5.8l5 2.9v5.8zm1-7.1L7 8.5l5-2.9 5 2.9-5 2.9zm6 4.2l-5 2.9v-5.8l5-2.9v5.8z" fill="#339933" stroke="#339933" strokeWidth="0.5"/>
      </svg>
    )
  },
  {
    id: "express",
    name: "Express",
    category: "Backend",
    icon: (
      <svg viewBox="0 0 24 24" className="w-full h-full" fill="none">
        <rect width="24" height="24" rx="4" fill="#1C1C1C" />
        <text x="12" y="15" fill="#FFFFFF" fontSize="9" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">ex</text>
      </svg>
    )
  },
  {
    id: "python",
    name: "Python",
    category: "Backend",
    icon: (
      <svg viewBox="0 0 24 24" className="w-full h-full" fill="none">
        <path d="M11.895 2c-1.393 0-2.613.118-3.562.33-.95.21-1.77.567-2.392 1.096-.688.583-1.077 1.345-1.077 2.457v1.898h7.247v1.026H2.909v.004c-1.127 0-2.023.824-2.193 1.933-.2 1.3-.23 2.29-.08 3.518.148 1.187.95 2.012 2.072 2.08h1.295V14.45c0-1.84 1.545-3.385 3.386-3.385h5.187c1.394 0 2.507-1.11 2.507-2.506V3.38c0-1.394-1.113-2.506-2.507-2.506L11.895 2zm-3.642 1.76a.936.936 0 1 1 0 1.872.936.936 0 0 1 0-1.872z" fill="#3776AB"/>
        <path d="M12.105 22c1.393 0 2.613-.118 3.562-.33.95-.21 1.77-.567 2.392-1.096.688-.583 1.077-1.345 1.077-2.457V16.22h-7.247v-1.026h9.202c1.127 0 2.023-.824 2.193-1.933.2-1.3.23-2.29.08-3.518-.148-1.187-.95-2.012-2.072-2.08h-1.295v1.893c0 1.84-1.545 3.385-3.386 3.385h-5.187c-1.394 0-2.507 1.11-2.507 2.506V20.62c0 1.394 1.113 2.506 2.507 2.506l1.274-.62zM15.747 18.48a.936.936 0 1 1 0 1.872.936.936 0 0 1 0-1.872z" fill="#FFE052"/>
      </svg>
    )
  },
  // Database
  {
    id: "mongodb",
    name: "MongoDB",
    category: "Database",
    icon: (
      <svg viewBox="0 0 24 24" className="w-full h-full" fill="none">
        <path d="M12 1.5c-.3 0-.6.1-.8.4C9.5 4.3 8 8.6 8 13.5c0 3.3 1.5 6.2 3.5 7.6.2.1.4.2.5.3V23c0 .6.4 1 1 1s1-.4 1-1v-1.6c.1-.1.3-.2.5-.3 2-1.4 3.5-4.3 3.5-7.6 0-4.9-1.5-9.2-3.2-11.6-.2-.3-.5-.4-.8-.4zm0 2.1c1.2 2 2.4 5.6 2.4 9.9 0 2.6-1.1 4.9-2.4 6V3.6zm0 0v12.4c-1.3-1.1-2.4-3.4-2.4-6 0-4.3 1.2-7.9 2.4-9.9z" fill="#47A248"/>
      </svg>
    )
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    category: "Database",
    icon: (
      <svg viewBox="0 0 24 24" className="w-full h-full" fill="none">
        <path d="M20.2 10.3c-.3-.8-.7-1.5-1.2-2.2-.7-.9-1.7-1.5-2.7-1.9-.9-.3-1.9-.5-2.9-.4-1 .1-2 .4-2.9.9-.9.5-1.6 1.2-2.2 2-.5.7-.9 1.5-1.1 2.4-.2.9-.2 1.8 0 2.7.2.9.6 1.7 1.1 2.4.6.8 1.4 1.4 2.3 1.8.9.4 1.9.6 2.9.6 1.4 0 2.7-.4 3.8-1.2 1.1-.8 1.9-1.9 2.3-3.2.4-1.3.4-2.7 0-3.9z" fill="#336791"/>
        <path d="M10.8 11.7c-.2 0-.4-.1-.6-.2-.3-.2-.5-.5-.5-.9 0-.4.2-.7.5-.9.3-.2.8-.2 1.1.1.2.2.3.4.3.7 0 .3-.1.5-.3.7-.1.2-.3.3-.5.5z" fill="#FFF"/>
        <path d="M6 10.8c-.8 0-1.5.3-2.1.8-.6.5-1 1.2-1.2 2-.2.8-.1 1.6.2 2.3.3.7.8 1.3 1.5 1.7.7.4 1.5.6 2.3.5.8-.1 1.6-.5 2.1-1.1.5-.6.8-1.4.8-2.2 0-.8-.3-1.5-.8-2.1-.6-.6-1.4-.9-2.8-.9z" fill="#336791"/>
      </svg>
    )
  },
  {
    id: "redis",
    name: "Redis",
    category: "Database",
    icon: (
      <svg viewBox="0 0 24 24" className="w-full h-full" fill="none">
        <path d="M12 2L2 7l10 5 10-5-10-5z" fill="#DC382D"/>
        <path d="M2 12l10 5 10-5M2 17l10 5 10-5" stroke="#DC382D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  }
];

const categories = ["All", "Frontend", "Backend", "Database"] as const;
type Category = (typeof categories)[number];

function SkillSection() {
  const [activeTab, setActiveTab] = useState<Category>("All");

  const filteredSkills = activeTab === "All"
    ? skills
    : skills.filter(skill => skill.category === activeTab);

  return (
    <div className="relative flex flex-col items-center justify-center bg-[#050505] w-full min-h-[500px] py-16 overflow-hidden">
      {/* Title Header */}
      <div className="relative z-20 items-center justify-center mb-8 font-semibold font-serif">
        <h1 className="mx-auto max-w-4xl text-center text-3xl font-bold text-neutral-200 md:text-5xl lg:text-7xl">
          Skill
        </h1>
      </div>

      {/* Ripple background effect */}
      <BackgroundRippleEffect rows={9} cols={30} />

      <div className="w-full relative z-20 flex flex-col items-center">
        {/* Category Tabs */}
        <div className="flex items-center justify-center gap-2 md:gap-4 mb-12 relative z-20 bg-neutral-900/50 p-1.5 rounded-lg border border-neutral-800/80 backdrop-blur-sm">
          {categories.map((category) => {
            const isActive = activeTab === category;
            return (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`relative px-4 py-1.5 text-xs sm:text-sm font-semibold rounded-md transition-all duration-300 cursor-pointer outline-none ${
                  isActive
                    ? "text-amber-500 bg-amber-600/10"
                    : "text-neutral-400 hover:text-neutral-200 hover:bg-neutral-800/40"
                }`}
              >
                {category}
                {isActive && (
                  <motion.div
                    layoutId="activeTabUnderline"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-amber-600 rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Responsive Grid of Skill Badges */}
        <div className="relative z-20 w-[90%] max-w-4xl min-h-[160px] mx-auto flex items-center justify-center">
          <motion.div
            layout
            className="flex flex-wrap items-center justify-center gap-x-10 gap-y-12 max-w-3xl mx-auto w-full"
          >
            <AnimatePresence mode="popLayout">
              {filteredSkills.map((skill) => (
                <motion.div
                  layout
                  key={skill.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{
                    type: "spring",
                    stiffness: 450,
                    damping: 35,
                    opacity: { duration: 0.2 }
                  }}
                  className="flex flex-col items-center justify-center text-center cursor-default group w-20"
                >
                  <div className="w-11 h-11 rounded-lg flex items-center justify-center bg-neutral-900 border border-neutral-800 group-hover:border-amber-600 transition-all duration-300 group-hover:scale-108 shadow-md p-2.5">
                    {skill.icon}
                  </div>
                  <span className="text-[11px] text-neutral-400 mt-2 font-medium tracking-wide transition-colors duration-300 group-hover:text-amber-500 whitespace-nowrap">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default SkillSection;