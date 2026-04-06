import React from "react";
import Title from "../ui/Title";
import Copy from "../ui/Copy";
import AnimatedCopy from "../ui/AnimatedCopy";
import PerspectiveCopy from "../ui/PerspectiveCopy";

const avatars = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=200",
  },
];

export default function WhyChooseMe() {
  return (
    <section className="container mx-auto px-5 md:px-16 overflow-hidden md:overflow-visible">
      <Title text="Why Choose Me" />

      <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 xl:gap-40 mt-12 lg:mt-20 items-center ">
        {/* Left */}
        <div className="shrink-0 md:pl-20 flex flex-col items-center lg:items-start text-center lg:text-left pt-6 lg:pt-0 w-full lg:w-auto">
          <div className="relative w-fit">
            <p className="text-[12rem] sm:text-[14rem] lg:text-[clamp(6rem,15vw,20rem)] leading-none font-semibold font-helvetica mb-6 lg:mb-0">
              3
            </p>
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap bg-primary font-semibold -rotate-17 px-5 py-2 md:px-4 md:py-2 rounded-4xl uppercase text-black text-base md:text-base">
              {" "}
              Years of experience
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 md:gap-6 mt-8 sm:mt-6 lg:mt-4">
            <div className="flex pl-5 lg:pl-0">
              {avatars.map((avatar) => (
                <div
                  key={avatar.id}
                  className="size-12 md:size-12 -ml-5 rounded-full border border-gray-300 overflow-hidden"
                >
                  <img
                    src={avatar.src}
                    alt="Customer"
                    className={`h-full w-full object-cover `}
                  />
                </div>
              ))}
            </div>

            <div className="font-helvetica text-base sm:text-base lg:text-xl text-secondary-foreground text-center sm:text-left">
              <p>98% Customer</p>
              <p>satisfaction rate</p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex-1 xl:ml-32 space-y-6 lg:space-y-8 text-center lg:text-left mt-10 lg:mt-0 flex flex-col items-center lg:items-start w-full overflow-hidden min-w-0">
          <PerspectiveCopy>
             <p className="font-goshiner text-[18vw] lg:text-[clamp(3.5rem,10vw,9rem)] leading-[0.72] whitespace-nowrap">Bold Ideas</p>
          </PerspectiveCopy>
   
          <PerspectiveCopy>
             <p className="font-goshiner text-[18vw] lg:text-[clamp(3.5rem,10vw,9rem)] leading-[0.72] whitespace-nowrap">Sharp Insight</p>
          </PerspectiveCopy>

          <PerspectiveCopy>
             <p className="font-goshiner text-[18vw] lg:text-[clamp(3.5rem,10vw,9rem)] leading-[0.72] whitespace-nowrap">Creative Work</p>
          </PerspectiveCopy>
        </div>
      </div>
    </section>
  );
}
