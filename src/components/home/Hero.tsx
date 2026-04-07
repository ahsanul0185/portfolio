"use client"

import { useRef } from "react";
import Copy from "../ui/Copy";
import Button from "../ui/Button";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { FiArrowUpRight, FiDownload } from "react-icons/fi";


export default function Hero() {
  const imageRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo(
      imageRef.current,
      {
        maskImage: "linear-gradient(to bottom, transparent 40%, black 60%)",
        WebkitMaskImage: "linear-gradient(to bottom, transparent 40%, black 60%)",
        maskSize: "100% 300%",
        WebkitMaskSize: "100% 300%",
        maskRepeat: "no-repeat",
        WebkitMaskRepeat: "no-repeat",
        maskPosition: "0% 0%",
        WebkitMaskPosition: "0% 0%",
        opacity: 0,
      },
      {
        maskPosition: "0% 100%",
        WebkitMaskPosition: "0% 100%",
        opacity: 1,
        duration: 2,
        ease: "power2.inOut",
        delay: 0.2,
      }
    );

    gsap.from(buttonsRef.current, {
      opacity: 0,
      y: 20,
      duration: 1.2,
      ease: "power3.out",
      delay: 1.5,
    });
  });

  return (
    <section id="home" className="min-h-svh flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-24 pt-28 lg:pt-0 px-4 lg:px-0 pb-20 lg:pb-0">
      <div ref={imageRef} className="w-[80%] sm:w-[60%] lg:w-1/4 aspect-3/4 relative rounded-2xl overflow-hidden opacity-0">
        <Image
          className="w-full h-full object-cover mt-12 scale-125"
          src="/ahsanul.png"
          alt="Ahsanul Haque"
          width={500}
          height={500}
          priority
        />
      </div>

      <div className="w-fit lg:text-left flex flex-col items-center lg:items-start">
        <Copy delay={1}>
          <h1 className="font-goshiner text-center md:text-left text-[clamp(2.5rem,11vw,8rem)] leading-[0.95] tracking-tight">
            <span className="md:block mr-2 md:mr-0">Hi, I am</span>
            
            <span className="md:block">Ahsanul Haque</span>
          </h1>
        </Copy>
        <div className="my-5 lg:my-6">
          <Copy delay={1.2}>
            <p className="max-w-lg text-center md:text-left text-secondary-foreground font-helvetica text-base sm:text-lg lg:text-xl px-2 lg:px-0 mx-auto lg:mx-0">
              A Bangladesh based front-end developer passionate about building
              accessible and user friendly websites.
            </p>
          </Copy>
        </div>

        <div ref={buttonsRef} className="mt-8 lg:mt-6 flex flex-wrap items-center justify-center lg:justify-start">
          <Button 
            icon={<FiArrowUpRight />}
            href="#contact"
            onClick={(e: React.MouseEvent) => {
              e.preventDefault();
              const targetElement = document.getElementById("contact");
              if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Contact me
          </Button>
          <Button 
            variant="outline" 
            className="ml-4" 
            icon={<FiDownload />}
            href="/resume.pdf"
            download="Ahsanul_Haque_Resume.pdf"
          >
            Download Resume
          </Button>
        </div>
      </div>
    </section>
  );
}
