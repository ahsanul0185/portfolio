"use client";

import React, { useRef, ReactNode, ReactElement } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(SplitText, ScrollTrigger);

interface CopyProps {
  children:  React.ReactElement | React.ReactElement[];
  animateOnScroll?: boolean;
  delay?: number;
}

export default function Copy({
  children,
  animateOnScroll = true,
  delay = 0,
}: CopyProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const elementRef = useRef<HTMLDivElement[]>([]);
  const splitRef = useRef<SplitText[]>([]);
  const lines = useRef<HTMLDivElement[]>([]);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      // Make the container visible now that JS is running
      gsap.set(containerRef.current, { autoAlpha: 1 });

      splitRef.current = [];
      elementRef.current = [];
      lines.current = [];

      let elements: HTMLDivElement[] = [];

      if (containerRef.current.hasAttribute("data-copy-wrapper")) {
        elements = Array.from(containerRef.current.children) as HTMLDivElement[];
      } else {
        elements = [containerRef.current];
      }

      elements.forEach((element) => {
        elementRef.current.push(element);

        const split = SplitText.create(element, {
          type: "lines",
          mask: "lines",
          linesClass: "line++",
        });

        splitRef.current.push(split);

        const computedStyle = window.getComputedStyle(element);
        const textIndent = computedStyle.textIndent;

        if (textIndent && textIndent !== "0px") {
          if (split.lines.length > 0) {
            (split.lines[0] as HTMLElement).style.paddingLeft = textIndent;
          }
          element.style.textIndent = "0";
        }

        lines.current.push(...(split.lines as HTMLDivElement[]));
      });

      gsap.set(lines.current, { y: "100%" });

      const animationProps: gsap.TweenVars = {
        y: "0%",
        duration: 1,
        stagger: 0.1,
        ease: "power4.out",
        delay,
      };

      if (animateOnScroll) {
        gsap.to(lines.current, {
          ...animationProps,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            once: true,
          },
        });
      } else {
        gsap.to(lines.current, animationProps);
      }

      return () => {
        splitRef.current.forEach((split) => {
          if (split) {
            split.revert();
          }
        });
      };
    },
    { scope: containerRef, dependencies: [animateOnScroll, delay] }
  );

  if (React.Children.count(children) === 1) {
    const child = children as ReactElement<any>;
    return React.cloneElement(child, {
      ref: containerRef,
      style: { ...child.props.style, visibility: "hidden" },
    });
  }

  return (
    <div ref={containerRef} data-copy-wrapper="true" style={{ visibility: "hidden" }}>
      {children}
    </div>
  );
}
