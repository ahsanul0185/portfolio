"use client"

import { useRef } from "react";
import Copy from "../ui/Copy";
import Button from "../ui/Button";


export default function Hero() {



  return (
    <section className="min-h-svh flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-24 pt-28 lg:pt-0 px-4 lg:px-0 pb-20 lg:pb-0">
      <div className="w-[80%] sm:w-[60%] lg:w-1/4 aspect-3/4 relative rounded-2xl bg-[#c7c7c7]">
        <img
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%]"
          src="/me.png"
          alt="Ahsanul Haque"
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

        <div className="mt-2 lg:mt-0">
          <Button>
            Contact me
          </Button>
        </div>
      </div>
    </section>
  );
}
