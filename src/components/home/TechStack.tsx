"use client";

import { forwardRef, useRef } from 'react';
import Title from '../ui/Title'
import Image from 'next/image';
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(ScrollTrigger)

export const techStack = [
  {
    name: "HTML",
    logo: "/icons/html.svg",
    percent: 95,
  },
  {
    name: "CSS",
    logo: "/icons/css.svg",
    percent: 90,
  },
  {
    name: "JavaScript",
    logo: "/icons/javascript.svg",
    percent: 85,
  },
  {
    name: "Tailwind CSS",
    logo: "/icons/tailwind.svg",
    percent: 85,
  },
  {
    name: "React",
    logo: "/icons/react.svg",
    percent: 80,
  },
  {
    name: "Next.js",
    logo: "/icons/nextjs.svg",
    percent: 75,
  },
  {
    name: "PostgreSQL",
    logo: "/icons/postgresql.svg",
    percent: 72,
  },
  {
    name: "MongoDB",
    logo: "/icons/mongodb.svg",
    percent: 70,
  },
  {
    name: "Prisma",
    logo: "/icons/prisma.svg",
    percent: 75,
  },
  {
    name: "VS Code",
    logo: "/icons/vscode.svg",
    percent: 90,
  },
  {
    name: "Git",
    logo: "/icons/git.svg",
    percent: 85,
  },
  {
    name: "Github",
    logo: "/icons/github.svg",
    percent: 85,
  },
];


export default function TechStack() {

      const cardsRef = useRef<HTMLDivElement[]>([])

    useGSAP(() => {
      if (cardsRef.current.length === 0) return;

      const anim = gsap.from(cardsRef.current, {
        y: 90,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: cardsRef.current[0]?.parentElement,
          start: "top 70%",
        }
      });

      return () => {
        anim.kill();
        cardsRef.current = []; 
      };
    }, {scope : cardsRef});

  return (
      <div className="container px-5 md:px-16 mx-auto overflow-hidden md:overflow-visible">
        <Title text="Tech Stack"/>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 justify-between gap-4 sm:gap-8 md:gap-12 mt-8 md:mt-12">
          {techStack.map((tech, i) => (
          <TechCard
            key={tech.name}
            tech={tech}
            ref={(el) => {
              if (el) cardsRef.current[i] = el
            }}
          />
        ))}
        </div>
      </div>
  )
}

interface ITechProps {
  name: string,
  logo: string,
  percent: number
}


const TechCard = forwardRef<HTMLDivElement, { tech: ITechProps }>(
  ({ tech }, ref) => {
    return (
      <div
        ref={ref}
        className="relative flex flex-col items-start gap-1.5 group border border-secondary-foreground/50 p-4 md:p-8 rounded-md hover:border-primary"
      >
        <div className="mb-3 absolute top-3 md:top-2 left-3 md:left-2">
          <Image src={tech.logo} alt={tech.name} width={44} height={44} className="w-6 h-6 md:w-11 md:h-11" />
        </div>

        <div className="pt-10 md:pt-16">
          <p className="text-4xl md:text-6xl [-webkit-text-stroke:1px_rgba(255,255,255,0.5)] group-hover:[-webkit-text-stroke:1px_white] font-goshiner">
            {tech.percent}%
          </p>
          <span className="block text-secondary-foreground/70 group-hover:text-primary text-sm md:text-base mt-1 md:mt-2">
            {tech.name}
          </span>
        </div>
      </div>
    )
  }
)

TechCard.displayName = "TechCard"