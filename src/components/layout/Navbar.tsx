"use client";

import { useTransitionRouter } from "next-view-transitions";
import { usePathname } from "next/navigation";
import { AnimatedThemeToggler } from "../ui/AnimatedThemeToggler";


const navLinks = [
  {
    name : "About",
    path : "/about"
  },
  {
    name : "Works",
    path : "/works"
  },
  {
    name : "Contact",
    path : "/contact"
  }
]

export default function Navbar() {
  const router = useTransitionRouter();
  const pathname = usePathname();

  const slideInOut = () => {
    document.documentElement.animate(
      [
        {
          opacity: 1,
          transform: "translateY(0)",
        },
        {
          opacity: 0.2,
          transform: "translateY(-35%)",
        },
      ],
      {
        duration: 1500,
        easing: "cubic-bezier(0.87, 0, 0.13, 1)",
        fill: "forwards",
        pseudoElement: "::view-transition-old(root)",
      },
    );

    document.documentElement.animate(
      [
        {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
        },
        {
          clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        },
      ],
      {
        duration: 1500,
        easing: "cubic-bezier(0.87, 0, 0.13, 1)",
        fill: "forwards",
        pseudoElement: "::view-transition-new(root)",
      },
    );
  };

  // const handleClick = (e : React.MouseEvent, path : string) => {
  //   e.preventDefault();
  //   if (path === pathname) return
  //   router.push(path, {
  //     onTransitionReady: slideInOut,
  //   });
  // };

  const handleClick = (e : React.MouseEvent, path : string) => {
    e.preventDefault();
    
    const targetId = path === "/" ? "home" : path.replace("/", "");
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(path);
    }
  };

  return (
    <div className="px-5 md:px-8 py-5 md:py-6 fixed top-0 left-0 w-full z-50 mix-blend-difference">
      <nav className="mx-auto flex items-center gap-2 justify-between">
        <a
          onClick={(e) => handleClick(e, "/")}
          href="/"
          className="font-normal tracking-wide text-xl md:text-2xl font-goshiner"
        >
          Ahsanul
        </a>

        <div className="flex uppercase gap-4 md:gap-7 tracking-wide font-helvetica text-sm md:text-base">

          {navLinks.map((link) => (
            <button key={link.path} className="content__item">
              <a
                onClick={(e) => handleClick(e, link.path)}
                href={link.path}
                className="link link--dia"
              >
                {link.name}
              </a>
            </button>
          ))}

          {/* <AnimatedThemeToggler /> */}

        </div>
      </nav>
    </div>
  );
}
