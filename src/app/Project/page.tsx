"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "../../components/hooks/use-outside-click";
import { IconBrandGithub, IconExternalLink, IconX } from "@tabler/icons-react";

const projects = [
  {
    id: "ecommerce",
    title: "Apex E-Commerce Platform",
    description: "A highly-scalable e-commerce platform built with Next.js and MongoDB. Features real-time inventory tracking, automatic stripe checkout, glassmorphic analytics charts, and a fully reactive administrative portal for managing shipments, products, and user accounts.",
    techStack: ["Next.js", "MongoDB", "Stripe", "Tailwind CSS"],
    src: "assets/project_ecommerce.png",
    ctaText: "View",
    liveLink: "https://apex-shop.example.com",
    githubLink: "https://github.com/example/apex-shop"
  },
  {
    id: "chatapp",
    title: "Co-Chat: Real-Time Messenger",
    description: "A premium real-time collaboration messenger designed with Socket.io and Node.js. Supports media sharing, contact lists, end-to-end encryption, dark mode dashboard layout, and typing indicators, delivering seamless user interaction.",
    techStack: ["React", "Node.js", "Socket.io", "Express"],
    src: "assets/project_chatapp.png",
    ctaText: "View",
    liveLink: "https://co-chat.example.com",
    githubLink: "https://github.com/example/co-chat"
  },
  {
    id: "analytics",
    title: "Nova SaaS Analytics Dashboard",
    description: "A visually stunning software-as-a-service analytics tracking dashboard UI. Features complex chart visualizers using Recharts, data filters, user activity trackers, exportable PDF/Excel reports, and customizable alert boundaries.",
    techStack: ["TypeScript", "Recharts", "Node.js", "PostgreSQL"],
    src: "assets/project_analytics.png",
    ctaText: "View",
    liveLink: "https://nova-dashboard.example.com",
    githubLink: "https://github.com/example/nova-dashboard"
  },
  {
    id: "taskmanager",
    title: "Orchestra: Kanban Task Board",
    description: "A beautiful enterprise-grade Kanban project board. It implements drag-and-drop task management, sprint timelines, task priority flags, dynamic user allocation, and a custom Markdown document editor for writing detailed team briefs.",
    techStack: ["React", "Framer Motion", "ExpressJS", "MongoDB"],
    src: "assets/project_taskmanager.png",
    ctaText: "View",
    liveLink: "https://orchestra-kanban.example.com",
    githubLink: "https://github.com/example/orchestra-kanban"
  },
  {
    id: "ai",
    title: "Aura: AI Chat Assistant",
    description: "A futuristic chatbot chat environment featuring direct integration with LLM APIs, syntax-highlighted code rendering, conversational context history, system prompt tuning, and glassmorphic UI layout with neon gradients.",
    techStack: ["Python", "React", "Tailwind CSS", "FastAPI"],
    src: "assets/project_ai.png",
    ctaText: "View",
    liveLink: "https://aura-ai.example.com",
    githubLink: "https://github.com/example/aura-ai"
  }
];

function Project() {
  const [active, setActive] = useState<(typeof projects)[number] | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }

    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <div className="relative flex flex-col items-center justify-center bg-[#050505] w-full py-20 overflow-hidden border-t border-neutral-900">
      {/* Section Header */}
      <div className="relative z-20 items-center justify-center mb-12 font-semibold font-serif">
        <h2 className="mx-auto max-w-4xl text-center text-3xl font-bold text-neutral-200 md:text-5xl lg:text-7xl">
          Projects
        </h2>
      </div>

      {/* Expanded Modal Card */}
      <AnimatePresence>
        {active && typeof active === "object" && (
          <div className="fixed inset-0 grid place-items-center z-[100] p-4">
            {/* Backdrop Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-md h-full w-full z-10 cursor-pointer"
              onClick={() => setActive(null)}
            />

            {/* Modal Box */}
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[550px] bg-neutral-900 border border-neutral-800 rounded-3xl overflow-hidden shadow-2xl z-20 flex flex-col relative"
            >
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 z-30 flex items-center justify-center bg-neutral-950/80 hover:bg-neutral-800 text-neutral-300 border border-neutral-850 rounded-full h-8 w-8 transition-all duration-300 cursor-pointer hover:rotate-90"
                onClick={() => setActive(null)}
              >
                <IconX className="h-4 w-4" />
              </button>

              {/* Large Image Banner */}
              <motion.div layoutId={`image-${active.title}-${id}`} className="relative h-64 sm:h-72 w-full flex-shrink-0">
                <img
                  src={active.src}
                  alt={active.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent" />
              </motion.div>

              {/* Content body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col">
                <motion.h3
                  layoutId={`title-${active.title}-${id}`}
                  className="text-xl sm:text-2xl font-extrabold text-neutral-100"
                >
                  {active.title}
                </motion.h3>

                {/* Badges */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {active.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-0.5 rounded text-[11px] font-semibold bg-neutral-850 border border-neutral-800 text-amber-500/90 tracking-wide uppercase"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Description */}
                <p className="text-sm text-neutral-300 mt-5 leading-relaxed font-normal flex-1">
                  {active.description}
                </p>

                {/* Buttons */}
                <div className="flex gap-4 mt-8">
                  <a
                    href={active.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 rounded-full font-bold bg-amber-600 hover:bg-amber-500 text-neutral-950 text-center transition-all duration-300 flex items-center justify-center gap-2 shadow-md shadow-amber-600/10 cursor-pointer active:scale-98"
                  >
                    <IconExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                  <a
                    href={active.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 rounded-full font-bold bg-neutral-850 hover:bg-neutral-800 text-neutral-200 text-center border border-neutral-800 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer active:scale-98"
                  >
                    <IconBrandGithub className="h-4 w-4" />
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Playlist Grid Rows */}
      <div className="max-w-2xl mx-auto w-full px-4 flex flex-col gap-4 relative z-20">
        {projects.map((project) => (
          <motion.div
            layoutId={`card-${project.title}-${id}`}
            key={`card-${project.title}-${id}`}
            onClick={() => setActive(project)}
            className="p-4 flex flex-row justify-between items-center bg-neutral-900/40 hover:bg-neutral-900/75 border border-neutral-850 hover:border-amber-600/30 rounded-xl cursor-pointer transition-all duration-300 group relative overflow-hidden"
          >
            <div className="flex gap-4 items-center flex-1">
              <motion.div layoutId={`image-${project.title}-${id}`} className="flex-shrink-0">
                <img
                  width={56}
                  height={56}
                  src={project.src}
                  alt={project.title}
                  className="h-14 w-14 rounded-lg object-cover bg-neutral-950 border border-neutral-800 group-hover:border-amber-600/50 transition-all duration-300"
                />
              </motion.div>
              <div className="flex-1 min-w-0">
                <motion.h3
                  layoutId={`title-${project.title}-${id}`}
                  className="font-bold text-neutral-200 text-sm sm:text-base truncate group-hover:text-amber-500 transition-colors duration-300"
                >
                  {project.title}
                </motion.h3>
                <motion.p
                  layoutId={`tech-${project.title}-${id}`}
                  className="text-xs text-neutral-400 mt-1 truncate"
                >
                  {project.techStack.join(" • ")}
                </motion.p>
              </div>
            </div>
            <motion.button
              layoutId={`button-${project.title}-${id}`}
              className="px-5 py-2 text-xs sm:text-sm rounded-full font-bold bg-amber-600 hover:bg-amber-500 text-neutral-950 transition-all duration-300 flex items-center justify-center cursor-pointer ml-4 shadow-md shadow-amber-600/10 active:scale-95"
              onClick={(e) => {
                e.stopPropagation();
                setActive(project);
              }}
            >
              {project.ctaText}
            </motion.button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Project;

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};