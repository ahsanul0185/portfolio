"use client"

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { ReactElement, useRef } from "react";


gsap.registerPlugin(ScrollTrigger);

export default function PerspectiveCopy({children} : {children: ReactElement}) {

     const textRef = useRef<HTMLHeadingElement>(null);
  const textWrapperRef = useRef<HTMLDivElement>(null);

  useGSAP(
  () => {
    if (!textRef.current || !textWrapperRef.current) return;

    const scrollConfig = {
      trigger: textWrapperRef.current,
      start: "top 90%",
      end: "top 70%",
      scrub: 1.2
    };

    const wrapperAnim = gsap.fromTo(
      textWrapperRef.current,
      {
        opacity: 0,
        perspective: "300px",
        transformStyle: "preserve-3d",
        scale: 0.7,
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
        rotateX: -75,
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
    <div
        ref={textWrapperRef}
        className="w-fit origin-top"
      >
        {React.cloneElement(children as ReactElement<any>, {ref: textRef})}
      </div>
  )
}
