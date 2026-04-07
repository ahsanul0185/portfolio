import Hero from "@/components/home/Hero";
import TechStack from "@/components/home/TechStack";
import WhyChooseMe from "@/components/home/WhyChooseMe";
import Works2 from "@/components/home/Projects";
import WorkProcess from "@/components/home/WorkProcess";
import Works from "@/components/home/Works";
import AnimatedCopy from "@/components/ui/AnimatedCopy";
import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  return (
    <div>
      <Hero />
      <hr className="section-divider my-12 border-0" />
      <div id="about" className="container px-5 md:px-8 mx-auto">
        <AnimatedCopy colorAccent="#bff747">
          <p className="font-goshiner text-[1.8rem] md:text-6xl max-w-6xl text-center mx-auto leading-tight md:leading-18 text-foreground">
            I am a passionate Web Developer with a strong focus on creating
            clean, modern, and user-friendly websites. Skilled in front-end and
            back-end technologies, I love turning ideas into fully functional
            digital experiences.
          </p>
        </AnimatedCopy>
      </div>
      <hr className="section-divider my-12 border-0" />
      <hr className="section-divider my-12 border-0" />
      <WorkProcess />
      <hr className="section-divider my-12 border-0" />
      <hr className="section-divider my-12 border-0" />
      <WhyChooseMe />
      <hr className="section-divider my-12 border-0" />
      <hr className="section-divider my-12 border-0" />
      <TechStack />
      <hr className="section-divider my-12 border-0" />
      <hr className="section-divider my-12 border-0" />
      <div id="works">
        <Works />
      </div>
      <hr className="section-divider my-12 border-0" />
      <hr className="section-divider my-12 border-0" />
      <Testimonials />
      <hr className="section-divider my-12 border-0" />
      <hr className="section-divider my-12 border-0" />
      {/* <div className="h-svh"> */}

      {/* </div> */}
    </div>
  );
}
