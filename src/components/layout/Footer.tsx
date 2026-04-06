import Link from "next/link";
import Contact from "../home/Contact";
import { ScrollToTop } from "./ScrollToTop";
import { FaFacebook, FaGithub } from "react-icons/fa6";
import { FaLinkedin, FaYoutube } from "react-icons/fa";


export default function Footer() {

  return (
    <footer className="container mx-auto w-full relative overflow-hidden">
      {/* Top Section */}
      <div className="px-5 md:px-12 pt-12 md:pt-16 pb-10 bg-[#1a1a1a] rounded-2xl mb-3 mx-4 md:mx-4">
        {/* GET STARTED text */}
        <div className="flex items-center gap-2 mt-2">
          <span
            className="text-white font-semibold tracking-[0.25em] uppercase font-helvetica text-sm md:text-base"
          >
            Get Started A Projects?
          </span>
        </div>
        <div className="flex flex-col lg:flex-row items-start justify-between mt-6 lg:mt-3 gap-8 lg:gap-0 w-full">
          {/* Left: Logo + CTA */}
          <div className="flex flex-col gap-5 w-full lg:w-auto">
            {/* BIG HEADLINE */}
            <h2
              className="text-[#3a3a3a] font-black font-goshiner uppercase leading-[0.9] lg:leading-none text-[clamp(4.5rem,10vw,150px)] tracking-wide"
            >
              LET'S WORK
              <br />
              TOGETHER
            </h2>
          </div>

          {/* Right: Thumbs up emoji */}
          <Contact />
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-[#2e2e2e] mt-10 md:mt-12 mb-8 md:mb-10" />

        {/* Bottom Info Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-8">
          {/* Quick Links */}
          <div>
            <h4
              className="text-white font-bold text-sm tracking-widest uppercase mb-5"
            >
              Quick Links
            </h4>
            <nav className="flex flex-col sm:flex-row sm:flex-wrap gap-x-6 gap-y-3 sm:gap-y-2">
              {["Home", "About Me", "Portfolio", "Contact Us"].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-[#666] hover:text-[#a3e635] text-xs font-semibold tracking-widest uppercase transition-colors duration-200"
                  style={{ letterSpacing: "0.12em" }}
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Me */}
          <div>
            <h4
              className="text-white font-bold text-sm tracking-widest uppercase mb-5"
            >
              Contact Me
            </h4>
            <div className="flex flex-col gap-3 sm:gap-2">
              <a
                href="tel:+013214002369"
                className="text-[#666] hover:text-primary uppercase transition-colors duration-200"
              >
                +8801892-168595
              </a>
              <a
                href="mailto:ahsanulhaque.dev@gmail.com"
                className="text-[#666] hover:text-primary transition-colors duration-200"
              >
                ahsanulhaque.dev@gmail.com
              </a>
            </div>
          </div>

          {/* Location */}
          <div>
            <h4
              className="text-white font-bold text-sm tracking-widest uppercase mb-5"
            >
              Location
            </h4>
            <p
              className="text-[#666] text-sm uppercase"
            >
              Based on Mymensingh, Bangladesh
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-8 py-6 lg:py-5 flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-0">
          {/* Copyright */}
          <p className="text-[#555] text-xs font-semibold tracking-widest uppercase text-center lg:text-left" style={{ letterSpacing: "0.1em" }}>
            Copyright ©{" "} 2026 {" "} 
            <span className="text-[#a3e635] hover:underline cursor-pointer">AHSANUL HAQUE</span>
          </p>

          {/* Social Icons */}
          <div className="flex flex-wrap justify-center items-center gap-4 lg:gap-6">
            {[
              { icon: <FaGithub />, label: "Github", href : "https://github.com/ahsanul0185" },
              { icon: <FaLinkedin />, label: "Linkedin", href : "https://www.linkedin.com/in/ahsanul0185" },
              { icon: <FaYoutube />, label: "Youtube", href : "https://www.youtube.com/@ahsanulhaque0185" },
            ].map(({ icon, label, href }) => (
              <Link
                key={label}
                target="_blank"
                href={href}
                className="flex items-center gap-2 text-[#666] hover:text-[#a3e635] transition-colors duration-200 group"
              >
                <span className="w-7 h-7 rounded-full flex items-center justify-center transition-colors duration-200 shrink-0">
                  {icon}
                </span>
                <span className="text-[10px] md:text-xs font-semibold tracking-wider uppercase" style={{ letterSpacing: "0.08em" }}>
                  {label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </footer>
  );
}