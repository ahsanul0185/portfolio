import Copy from "@/components/ui/Copy";
import Image from "next/image";

export default function Works() {
  return (
    <div className=" text-white font-sans antialiased">
      {/* Hero Section */}
      <section className="max-h-screen flex items-center justify-center gap-10 overflow-hidden">
        <div className="pl-4 w-1/2">
            <Copy delay={1}>
              <h1 className="text-[clamp(3.5rem,8vw,8rem)] font-black leading-[0.9] tracking-tighter mb-8">
                <span className="block text-white">
                  SELECTED
                </span>
                <span className="block text-white/90">
                  WORKS
                </span>
              </h1>
              </Copy>
              <Copy delay={1}>
              <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed mb-8">
                A curated collection of projects that define who we are. From revolutionary platforms 
                to brand transformations, each project represents our commitment to pushing boundaries 
                and creating unforgettable experiences.
              </p>
              </Copy>
        </div>
            <img alt="work image" className="w-1/2 object-cover h-full" src="https://images.unsplash.com/photo-1587595340454-c1a85f52886d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      </section>
    </div>
  );
}