"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import Title from "../ui/Title";
import { IoStar } from "react-icons/io5";
import { ImQuotesRight } from "react-icons/im";
import { FaAngleLeft } from "react-icons/fa";
import { LiaAngleLeftSolid, LiaAngleRightSolid } from "react-icons/lia";

const testimonials = [
  {
    id: 1,
    rating: 5,
    quote:
      "It was super awesome working with Ahsanul. He finished the work in record time, delivered high-quality results, and really surprised me. This was my first time using Fiverr, and I was really reluctant to hire anyone as I was scared of being scammed or paying without getting my money’s worth. But I literally got an exceptional product and can definitely recommend him. If you are looking to build something, I recommend Ahsanul. The price was fair, especially considering he worked constantly on this",
    name: "Dylan",
    city: "Canada",
    avatar: "https://i.pravatar.cc/150?u=Olivia",
  },
  {
    id: 2,
    rating: 5,
    quote:
      "I had the absolute pleasure of working with ahsanul, and I can confidently say that their service has been nothing short of exceptional. From the very beginning, they showcased a deep understanding of web development and a commitment to delivering excellence. Not only did they meet my expectations, but they exceeded them in every way possible. Their technical skills are outstanding, and they approach each task with professionalism, attention to detail, and creativity. ",
    name: "Esd Sukki",
    city: "United States",
    avatar: "https://i.pravatar.cc/150?u=Emily",
  },
  {
    id: 3,
    rating: 5,
    quote:
      "Good works. Ahsanul worked day and night on a time-critical project and delivered high-quality results. He is a rising talent in this field. I will continue to work with him. Highly recommended.",
    name: "Orest",
    city: "United Kingdom",
    avatar: "https://i.pravatar.cc/150?u=James",
  },
  {
    id: 4,
    rating: 5,
    quote:
      "Great attention to details, easy to work with, final delivery met all the expectations.",
    name: "Matthew",
    city: "Australia",
    avatar: "https://i.pravatar.cc/150?u=Jack",
  },
  {
    id: 5,
    rating: 5,
    quote:
      "The seller was professional, communicative, and delivered exactly what I needed. The quality of work exceeded my expectations, and the project was completed ahead of schedule. Highly recommend and will definitely work with him again!",
    name: "Subatheesan",
    city: "Sri Lanka",
    avatar: "https://i.pravatar.cc/150?u=Subatheesan",
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


export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", slidesToScroll: 1, loop : true });

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section className="container px-5 md:px-16 mx-auto overflow-hidden md:overflow-visible">
           <Title text="Testimonials" className="mb-8"/>

      <div className="flex flex-col lg:flex-row gap-8 items-stretch lg:items-start">
        {/* LEFT PANEL */}
        <div className="flex justify-between w-full lg:w-52 shrink-0 self-stretch pb-5 lg:pb-0 lg:pr-7 border-b lg:border-b-0 lg:border-r border-secondary-foreground/30 flex-row lg:flex-col items-center lg:items-start text-center lg:text-left gap-4 lg:gap-0">
          <div className="flex flex-col items-center lg:items-start">
            <span className="text-white font-extrabold text-5xl md:text-6xl leading-none">4.9</span>
            <div className="mt-2"><Stars count={5} /></div>
            <p className="text-[#555] text-xs uppercase tracking-widest mt-2">Average Rating</p>
          </div>

          <a 
            href="https://www.fiverr.com/s/WEyNGZL" 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-auto lg:mt-10 inline-flex flex-col items-center lg:items-start gap-3 group"
          >
            <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-[#888] group-hover:text-primary transition-colors duration-300 whitespace-nowrap">
              Check me on
            </span>
            <img 
              src="https://images.ctfassets.net/nm80283nt6uq/mS4aWEKWmLtXrZEJpTJ6k/b3cdabe3d8a4eae6ab3dfdfda0e4666e/Fiverr_Logo_White.png" 
              alt="Fiverr" 
              className="h-5 md:h-6 w-auto opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
            />
          </a>
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

                  <p className="text-[#cccccc] text-xs md:text-sm uppercase leading-relaxed tracking-wide font-medium flex-1 line-clamp-5">
                    {t.quote}
                  </p>

                  <div className="flex items-center gap-3 mt-2">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover border-2 border-[#2a2a2a]"
                    />
                    <div>
                      <p className="text-white font-semibold text-xs md:text-sm">{t.name}</p>
                      <p className="text-[#555] text-[10px] md:text-xs mt-0.5">{t.city}</p>
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
              className="w-9 h-9 rounded-full border border-[#333] flex items-center justify-center text-white hover:bg-primary hover:border-primary hover:text-black transition-colors duration-200"
            >
              <LiaAngleLeftSolid  />
            </button>
            <button
              onClick={scrollNext}
              aria-label="Next"
              className="w-9 h-9 rounded-full border border-[#333] flex items-center justify-center text-white hover:bg-primary hover:border-primary hover:text-black transition-colors duration-200"
            >
               <LiaAngleRightSolid  />
            </button>
          </div>
        </div>
      </div>

      <div className="w-full h-px bg-[#2a2a2a] mt-12" />
    </section>
  );
}