"use client";

import { useRef } from "react";
import Title from "../ui/Title";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const workProcess = [
  {
    id: 1,
    step: "01",
    title: "Requirement Gathering",
    description:
      "I offer a range of professional services designed to meet your business needs with precision and creativity, Project structure.",
    image: "/work-process/work-01.jpg",
  },
  {
    id: 2,
    step: "02",
    title: "Planning & Research",
    description:
      "I offer a range of professional services designed to meet your business needs with precision and creativity, Project structure.",
    image: "/work-process/work-02.jpg",
  },
  {
    id: 3,
    step: "03",
    title: "Development Phase",
    description:
      "I offer a range of professional services designed to meet your business needs with precision and creativity, Project structure.",
    image: "/work-process/work-03.jpg",
  },
  {
    id: 4,
    step: "04",
    title: "Maintenance & Support",
    description:
      "I offer a range of professional services designed to meet your business needs with precision and creativity, Project structure.",
    image: "/work-process/work-04.jpg",
  },
];

export default function WorkProcess() {
  const containerWrapperRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerWrapperRef.current || !containerRef.current) return;

      const getScrollAmount = () => {
        const containerWidth = containerRef.current!.scrollWidth;
        return -(containerWidth - window.innerWidth);
      };

      const tween = gsap.to(containerRef.current, {
        x: getScrollAmount,
        duration: 3,
        ease: "none",
      });

      const scrollTriggerInstance = ScrollTrigger.create({
        trigger: containerWrapperRef.current,
        start: "top 20%",
        end: () => `+=${getScrollAmount() * -1}`,
        pin: true,
        animation: tween,
        scrub: 1,
        invalidateOnRefresh: true,
      });

      return () => {
        tween.kill();
        scrollTriggerInstance.kill();
      };
    },
    { scope: containerWrapperRef },
  );

  return (
    <section className="overflow-x-hidden">
      <div className="container px-5 md:px-16 mx-auto">
        <Title text="Work Process"/>
      </div>

      <div className="pt-8 md:pt-[10vh]">
        <div ref={containerWrapperRef} className="w-full">
          <div ref={containerRef} className="flex gap-16 md:gap-40 px-5 md:px-16 pr-5 md:pr-40 w-fit">
            {workProcess.map((item) => (
              <WorkProcessItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

interface IWorkItem {
  id: number;
  step: string;
  title: string;
  description: string;
  image: string;
}

const WorkProcessItem = ({ item }: { item: IWorkItem }) => {
  return (
    <div className="shrink-0 flex flex-col-reverse md:flex-row items-center gap-6 md:gap-20 w-[85vw] md:w-auto">
      <div className="font-goshiner flex items-start gap-4 md:gap-6 w-full max-w-sm md:max-w-xl">
        <span className="text-white text-[clamp(3.5rem,9vw,8rem)] leading-[0.9]">
          {item.step}
        </span>
        <div className="flex-1">
          <h3 className="mt-1 md:mt-2 text-[clamp(2rem,8vw,7.5rem)] leading-[0.9] text-secondary-foreground/70 text-left">
            {item.title}
          </h3>
          <p className="font-helvetica text-secondary-foreground/70 text-left uppercase mt-3 md:mt-6 text-sm md:text-base">
            {item.description}
          </p>
        </div>
      </div>
      <img
        src={item.image}
        alt={item.title}
        className="rounded-xl w-full md:w-auto h-[250px] md:h-auto object-cover md:min-w-[70%] lg:min-w-0 md:max-w-[30vw] shrink-0"
      />
    </div>
  );
};
