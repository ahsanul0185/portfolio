"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const CARD_Y_OFFSET = 5;
const CARD_SCALE_STEP = 0.075;

const cards = [
  {
    id: "card-1",
    label: "Event Management Platform",
    title: "Planora",
    description : "Planora is a comprehensive event management platform designed to streamline the process of planning, organizing, and executing events. It provides a seamless experience for both event organizers and attendees, offering tools for event creation.",
    img: "https://res.cloudinary.com/dw8bzha3e/image/upload/v1775471389/planora_hugzah.jpg",
    bg: "#004e34",
    github : "https://github.com/ahsanul0185/planora-frontend",
    liveUrl : "https://planora-frontend-olive.vercel.app"
  },
  {
    id: "card-2",
    label: "RealTime Chat App",
    title: "Chat App",
    description : "This is a real-time chat application built with Node.js, Express.js, and Socket.io. It allows users to send and receive messages in real-time. Users can create rooms and chat with each other in real-time.",
    img: "https://res.cloudinary.com/dw8bzha3e/image/upload/v1775480927/chat-app_ikjvvm.jpg",
    bg: "#5E0006",
    github : "https://github.com/ahsanul0185/realtime-chat-app",
    liveUrl : "https://realtime-chat-app-cukw.onrender.com"
  },
  {
    id: "card-3",
    label: "MERN Blog App",
    title: "Blog By Ahsanul",
    description : "A full-stack blog application built with Node.js, Express.js, and MongoDB. It allows users to create, read, update, and delete blog posts. Users can also comment on blog posts.",
    img: "https://res.cloudinary.com/dw8bzha3e/image/upload/v1775491668/blogbyahsanul_pfqyno.jpg",
    bg: "#0C2C55",
    github : "https://github.com/ahsanul0185/mern-blog",
    liveUrl : "https://blogbyahsanul.vercel.app"
  },
  {
    id: "card-4",
    label: "Online Tutoring Platform",
    title: "Skill Bridge",
    description : "An online tutoring platform where students can find tutors and tutors can find students. It provides a seamless experience for both students and tutors, offering tools for course creation, booking, and payment.",
    img: "https://res.cloudinary.com/dw8bzha3e/image/upload/v1775492524/skillbridge_xqqno4.jpg",
    bg: "#6E026F",
    github : "https://github.com/ahsanul0185/skillbridge-frontend",
    liveUrl : "https://skillbridge-frontend-murex.vercel.app"
  },
];

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const cardEls = stickyRef.current?.querySelectorAll<HTMLElement>(".project-card");
      if (!cardEls?.length) return;

      const totalCards = cardEls.length;
      const totalSegments = totalCards - 1; // Transitions between cards

      // Initial stack setup
      cardEls.forEach((card, i) => {
        gsap.set(card, {
          xPercent: -50,
          yPercent: -50 + i * CARD_Y_OFFSET,
          scale: 1 - i * CARD_SCALE_STEP,
        });
      });

      const st = ScrollTrigger.create({
        trigger: stickyRef.current,
        start: "top top",
        end: `+=${window.innerHeight * totalSegments}`,
        pin: true,
        pinSpacing: true,
        scrub: 1,
        onUpdate: ({ progress }) => {
          // The current card that is flying away
          const currentTransitionIndex = Math.min(
            Math.floor(progress * totalSegments),
            totalSegments - 1
          );
          // How far through the current transition we are
          const segProgress = progress * totalSegments - currentTransitionIndex;

          cardEls.forEach((card, i) => {
            if (i < currentTransitionIndex) {
              // Card has already flown away
              gsap.set(card, { 
                xPercent: -50, 
                yPercent: -250, 
                rotationX: 35 
              });
            } else if (i === currentTransitionIndex) {
              // Card is currently flying away (unless it's the last one)
              gsap.set(card, {
                xPercent: -50,
                yPercent: gsap.utils.interpolate(-50, -250, segProgress),
                rotationX: gsap.utils.interpolate(0, 35, segProgress),
              });
            } else {
              // Card is in the stack or active next
              const offset = i - currentTransitionIndex;
              gsap.set(card, {
                xPercent: -50,
                yPercent: -50 + (offset - segProgress) * CARD_Y_OFFSET,
                rotationX: 0,
                scale: 1 - (offset - segProgress) * CARD_SCALE_STEP,
              });
            }
          });
        },
      });

      return () => st.kill();
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="w-full">
      {/* Sticky Cards */}
      <section
        ref={stickyRef}
        className="relative w-full h-svh overflow-hidden perspective-[850px]"
      >
        {cards.map((card, i) => (
          <div
            key={card.id}
            className="project-card absolute top-1/2 left-1/2 w-[90%] md:max-w-7xl h-[50%] md:h-[75%] flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 p-6 md:p-10 rounded-2xl text-white origin-[center_bottom] will-change-transform group"
            style={{ backgroundColor: card.bg, zIndex: cards.length - i }}
          >
            {/* Text col */}
            <div className="flex flex-col justify-between w-full md:h-full md:flex-1 p-0 md:p-2 gap-4 md:gap-0">
                <div>
                  <p className="uppercase text-xs md:text-sm opacity-90 font-medium">{card.label}</p>
                  <p className="hidden md:block mt-12 w-[80%] opacity-0 group-hover:opacity-50 text-lg transition-opacity duration-300">{card.description}</p>
                </div>
              <div className="flex items-center justify-between md:justify-normal md:items-end gap-6">
                <h2 className="font-goshiner tracking-wide uppercase text-3xl md:text-5xl leading-none text-white mb-2 md:mb-0">
                  {card.title}
                </h2>

                <div className="flex items-center gap-2 md:gap-3 shrink-0">
                  <a 
                    href={card.github} 
                    target="_blank"
                    title="Source code"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center size-9 md:size-11 rounded-full border border-white/20 hover:bg-white hover:text-black hover:border-white transition-all duration-300"
                    aria-label="View Source Code"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                  <a 
                    href={card.liveUrl}
                    title="Live site"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center size-9 md:size-11 rounded-full border border-white/20 hover:bg-white hover:text-black hover:border-white transition-all duration-300"
                    aria-label="View Live Project"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </a>
              </div>
              </div>
            </div>

            {/* Image col */}
            <div className="w-full flex-1 shrink-0 bg-red-500 md:flex-1 h-full rounded-xl overflow-hidden mt-1 md:mt-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <Image
              width={600}
              height={600}
                src={card.img}
                alt={card.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
