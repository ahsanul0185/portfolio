"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import Title from "../ui/Title";
import { MdArrowOutward } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";
import Projects from "./Projects";

gsap.registerPlugin(ScrollTrigger);

const myProjects = [
  {
    id: 1,
    title: "QuantumCommerce",
    stack: ["Next.js 14", "Stripe", "Prisma"],
    image: "https://aeolla.netlify.app/assets/img/projects/home-1/img-1.png",
    description: "A high-performance storefront with server-side rendering and complex state management.",
    links: { live: "#", github: "#" }
  },
  {
    id: 2,
    title: "Syncro Project Manager",
    stack: ["React", "Node.js", "Socket.io"],
    image: "https://aeolla.netlify.app/assets/img/projects/home-1/img-2.png",
    description: "Real-time collaborative workspace featuring live cursor tracking and instant notifications.",
    links: { live: "#", github: "#" }
  },
  {
    id: 3,
    title: "HealthTrack AI",
    stack: ["Python", "FastAPI", "PostgreSQL"],
    image: "https://aeolla.netlify.app/assets/img/projects/home-1/img-3.png",
    description: "Full-stack health analytics platform using machine learning to predict wellness trends.",
    links: { live: "#", github: "#" }
  },
  {
    id: 4,
    title: "SecureVault Auth",
    stack: ["Go", "Redis", "Docker"],
    image: "https://aeolla.netlify.app/assets/img/projects/home-1/img-4.png",
    description: "A dedicated authentication microservice implementing OAuth2 and JWT rotation.",
    links: { live: "#", github: "#" }
  }
];

export default function Works() {
  const textRef = useRef<HTMLHeadingElement>(null);
  const textWrapperRef = useRef<HTMLDivElement>(null);

  useGSAP(
  () => {
    if (!textRef.current || !textWrapperRef.current) return;

    const scrollConfig = {
      trigger: textWrapperRef.current,
      start: "top 80%",
      end: "top 60%",
      scrub: 1.2
    };

    const wrapperAnim = gsap.fromTo(
      textWrapperRef.current,
      {
        opacity: 0,
        perspective: "500px",
        transformStyle: "preserve-3d",
        scale: 0.6,
      },
      {
        opacity: 1,
        perspective: "1000px",
        transformStyle: "preserve-3d",
        scale: 1,
        duration: 1.5,
        ease: "none",
        scrollTrigger: scrollConfig
      }
    );

    const textAnim = gsap.fromTo(
      textRef.current,
      {
        rotateX: -70,
      },
      {
        rotateX: 0,
        duration: 1.5,
        ease: "none",
        scrollTrigger: scrollConfig
      }
    );

    return () => {
      wrapperAnim.kill();
      textAnim.kill();
    };
  },
  { scope: textWrapperRef }
);

  return (
    <div className="container px-5 md:px-16 mx-auto overflow-hidden md:overflow-visible">
        <Title text="My Featured Projects" className="mb-8"/>
      <div
        ref={textWrapperRef}
        className="w-fit origin-top"
      >
        <h2 ref={textRef} className="font-goshiner text-[clamp(9rem,30vw,30rem)] leading-[0.72] tracking-tight">Works</h2>
      </div>

   {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        {
            myProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
            ) )
        }
      </div> */}
      <Projects />
    </div>
  );
}

interface IProjectItem {
    id : number;
    title : string;
    stack : string[];
    image : string;
    description : string;
    links : { live : string, github : string }
}

const ProjectCard = ({project} : {project : IProjectItem}) => {
    return (
        <div 
          key={project.id} 
          className="relative group overflow-hidden rounded-md aspect-16/10"
        >
          {/* Background Image with slight darkening overlay */}
          <div className="absolute inset-0 z-0 bg-black/20 group-hover:bg-black/40 transition-all duration-500" />
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
          />

          {/* TOP RIGHT: Tags/Navigation Style */}
          <div className="absolute top-4 right-8 z-10 hidden sm:flex items-center gap-4">
            {project.stack.map((tag, index) => (
              <div key={tag} className="flex items-center">
                <span className=" font-medium tracking-tight">
                  {tag}
                </span>
                {index < project.stack.length - 1 && (
                  <span className="w-1.5 h-1.5 bg-white/50 rounded-full mx-4" />
                )}
              </div>
            ))}
          </div>

          {/* BOTTOM LEFT: Title */}
          <div className="absolute bottom-6 left-8 z-10">
            <h2 className="text-xl tracking-tight font-goshiner">
              {project.title}
            </h2>
          </div>

          {/* BOTTOM RIGHT: Circular Arrow Button */}
          <div className="absolute bottom-6 right-6 z-10 flex gap-3">
            <button className="text-black hover:bg-primary size-8 cursor-pointer scale-0 opacity-0 group-hover:opacity-100 group-hover:scale-100 bg-white/90 rounded-full flex items-center justify-center duration-300">
                <FaGithub size={28}/>
            </button>
            <button className="text-black cursor-pointer scale-0 opacity-0 group-hover:opacity-100 group-hover:scale-100 gap-2 px-4 py-1 bg-white/90 rounded-full flex items-center justify-center group-hover:bg-primary duration-300">
             Live <MdArrowOutward />
            </button>
          </div>
        </div>
    )
}