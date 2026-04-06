"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import Title from "../ui/Title";
import { IoStar } from "react-icons/io5";
import { ImQuotesRight } from "react-icons/im";

const testimonials = [
  {
    id: 1,
    platform: "Upwork",
    rating: 5,
    quote:
      "REVOX STUDIO HAS CREATED REMARKABLE WORK FOR THE WHITNEY BUILDING THAT HELPED US DEFINE NOT JUST THIS INDIVIDUAL BUILDING BUT THE NEW DIRECTION IN WHICH WE ARE HEADING AS A GROUP",
    name: "MICHAEL SARAH",
    role: "CEO AT ROLLUPLIFE INC",
    avatar: "https://i.pravatar.cc/80?img=11",
  },
  {
    id: 2,
    platform: "Fiverr",
    rating: 5,
    quote:
      "REVOX STUDIO HAS CREATED REMARKABLE WORK FOR THE WHITNEY BUILDING THAT HELPED US DEFINE NOT JUST THIS INDIVIDUAL BUILDING BUT THE NEW DIRECTION IN WHICH WE ARE HEADING AS A GROUP",
    name: "MICHAEL SARAH",
    role: "CEO AT ROLLUPLIFE INC",
    avatar: "https://i.pravatar.cc/80?img=11",
  },
  {
    id: 3,
    platform: "Clutch",
    rating: 5,
    quote:
      "WORKING WITH REVOX WAS AN OUTSTANDING EXPERIENCE. THEY DELIVERED BEYOND EXPECTATIONS AND TRANSFORMED OUR BRAND IDENTITY INTO SOMETHING TRULY WORLD CLASS.",
    name: "JAMES CARTER",
    role: "FOUNDER AT NEXLAYER",
    avatar: "https://i.pravatar.cc/80?img=15",
  },
  {
    id: 4,
    platform: "Upwork",
    rating: 5,
    quote:
      "THE TEAM AT REVOX STUDIO BROUGHT A LEVEL OF CREATIVITY AND PROFESSIONALISM THAT WE HAVE NEVER SEEN BEFORE. OUR PROJECT WAS DELIVERED ON TIME AND EXCEEDED ALL GOALS.",
    name: "SARAH JOHNSON",
    role: "CMO AT BRIGHTPATH",
    avatar: "https://i.pravatar.cc/80?img=5",
  },
];

const Stars = ({ count }: { count: number }) => (
  <div className="flex gap-1">
    {Array.from({ length: count }).map((_, i) => (
      // <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#f5a623">
      //   <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      // </svg>
      <IoStar key={i} fill="#f5a623" size={20} />
    ))}
  </div>
);

const PlatformBadge = ({ name }: { name: string }) => (
  <span className="inline-flex items-center px-3 py-1 rounded-md bg-[#2a2a2a] text-[#888] text-xs font-semibold uppercase tracking-widest border border-[#333]">
    {name}
  </span>
);

const QuoteIcon = () => (
  <svg width="32" height="26" viewBox="0 0 36 28" fill="#b5f23d">
    <path d="M0 28V17.5C0 7.833 5.167 2.167 15.5 0l1.5 2.5C11.667 4.167 9 7.167 8.5 12H15V28H0Zm20 0V17.5C20 7.833 25.167 2.167 35.5 0L37 2.5C31.667 4.167 29 7.167 28.5 12H35V28H20Z" />
  </svg>
);

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", slidesToScroll: 1, loop : true });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="container px-5 md:px-16 mx-auto overflow-hidden md:overflow-visible">
           <Title text="Testimonials" className="mb-8"/>

      <div className="flex flex-col lg:flex-row gap-8 items-stretch lg:items-start">
        {/* LEFT PANEL */}
        <div className="flex flex-col justify-between w-full lg:w-52 shrink-0 self-stretch pb-5 lg:pb-0 lg:pr-7 border-b lg:border-b-0 lg:border-r border-secondary-foreground/30 flex-row lg:flex-col items-center lg:items-start text-center lg:text-left gap-4 lg:gap-0">
          <div className="flex flex-col items-center lg:items-start w-full">
            <span className="text-white font-extrabold text-5xl md:text-6xl leading-none">4.9</span>
            <div className="mt-2"><Stars count={5} /></div>
            <p className="text-[#555] text-xs uppercase tracking-widest mt-2">150+ Reviews</p>
          </div>
        </div>

        {/* EMBLA CAROUSEL */}
        <div className="flex-1 min-w-0 w-full">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-4">
              {testimonials.map((t) => (
                <div
                  key={t.id}
                  className="flex-[0_0_100%] md:flex-[0_0_calc(50%-8px)] min-w-0 p-5 md:p-7 flex flex-col gap-4 md:gap-5"
                >
                  <div className="flex items-center justify-between">
                    <Stars count={t.rating} />
                    <img src="https://images.ctfassets.net/nm80283nt6uq/mS4aWEKWmLtXrZEJpTJ6k/b3cdabe3d8a4eae6ab3dfdfda0e4666e/Fiverr_Logo_White.png" className="h-4 md:h-5 w-auto opacity-80" />
                  </div>

                  <ImQuotesRight fill="#b5f23d" size={32} className="md:w-[38px] md:h-[38px]" />

                  <p className="text-[#cccccc] text-xs md:text-sm uppercase leading-relaxed tracking-wide font-medium flex-1">
                    {t.quote}
                  </p>

                  <div className="flex items-center gap-3 mt-2">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover border-2 border-[#2a2a2a]"
                    />
                    <div>
                      <p className="text-white font-bold text-xs md:text-sm uppercase tracking-wide">{t.name}</p>
                      <p className="text-[#555] text-[10px] md:text-xs uppercase tracking-wider mt-0.5">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Nav buttons */}
          <div className="flex justify-end gap-2 mt-5">
            <button
              onClick={scrollPrev}
              aria-label="Previous"
              className="w-9 h-9 rounded-full border border-[#333] flex items-center justify-center text-white hover:border-[#b5f23d] hover:text-[#b5f23d] transition-colors duration-200"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={scrollNext}
              aria-label="Next"
              className="w-9 h-9 rounded-full border border-[#333] flex items-center justify-center text-white hover:border-[#b5f23d] hover:text-[#b5f23d] transition-colors duration-200"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="w-full h-px bg-[#2a2a2a] mt-12" />
    </section>
  );
}