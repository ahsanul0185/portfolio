import Copy from "@/components/ui/Copy";

export default function About() {
  return (
    <div className="bg-white text-black font-sans antialiased">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <Copy delay={1}>
          <h1 className="text-[clamp(3rem,12vw,14rem)] font-black leading-[0.85] tracking-tighter mb-8">
            <span className="blocktext-black">
              WHO WE
            </span>
            <span className="block ">
              ARE
            </span>
          </h1>
          </Copy>
          <Copy delay={1}>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto font-light tracking-wide">
            A collective of creators, thinkers, and dreamers united by one vision
          </p>
          </Copy>
        </div>
      </section>

      {/* Mission Section */}
      <section className="min-h-screen flex items-center justify-center px-8 py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/5 blur-[120px] rounded-full"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-[clamp(2.5rem,10vw,11rem)] font-black leading-[0.9] tracking-tighter mb-12 text-left">
            <span className="block text-gray-600">OUR</span>
            <span className="block text-white">MISSION</span>
          </h2>
          <p className="text-2xl md:text-4xl text-gray-300 font-light leading-relaxed max-w-4xl">
            To transform ideas into experiences that resonate, inspire, and endure. We don't just build 
            products—we craft narratives, shape perceptions, and create moments that leave lasting impressions. 
            Our mission extends beyond deliverables; we're here to elevate standards, challenge conventions, 
            and prove that exceptional work isn't just possible—it's inevitable when passion meets precision.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="min-h-screen flex items-center justify-center px-8 py-32 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 blur-[140px] rounded-full"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-[clamp(2.5rem,10vw,11rem)] font-black leading-[0.9] tracking-tighter mb-12 text-left">
            <span className="block bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">
              THE TEAM
            </span>
            <span className="block text-white/80">BEHIND IT</span>
          </h2>
          <p className="text-2xl md:text-4xl text-gray-300 font-light leading-relaxed max-w-4xl">
            We're designers who code, developers who design, strategists who create, and creators who strategize. 
            Our team spans continents, disciplines, and perspectives—but we share a common obsession with quality. 
            From seasoned veterans to bold newcomers, each member brings unique expertise and relentless curiosity. 
            Together, we're more than colleagues; we're collaborators in the truest sense.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="min-h-screen flex items-center justify-center px-8 py-32 relative overflow-hidden">
        <div className="absolute top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 blur-[160px] rounded-full"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-[clamp(2.5rem,10vw,11rem)] font-black leading-[0.9] tracking-tighter mb-12 text-left">
            <span className="block text-gray-600">CORE</span>
            <span className="block bg-gradient-to-r from-purple-200 via-blue-200 to-cyan-200 bg-clip-text text-transparent">
              VALUES
            </span>
          </h2>
          <p className="text-2xl md:text-4xl text-gray-300 font-light leading-relaxed max-w-4xl">
            Authenticity over trends. Substance over style—though we believe you can have both. 
            Collaboration over ego. Innovation over imitation. We value honest feedback, bold experiments, 
            and the courage to fail forward. Our work environment thrives on trust, transparency, and the 
            understanding that great ideas can come from anywhere. These aren't just words on a wall—they're 
            the principles that guide every decision we make.
          </p>
        </div>
      </section>

      {/* Approach Section */}
      <section className="min-h-screen flex items-center justify-center px-8 py-32 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/5 blur-[120px] rounded-full"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-[clamp(2.5rem,10vw,11rem)] font-black leading-[0.9] tracking-tighter mb-12 text-left">
            <span className="block text-gray-600">OUR</span>
            <span className="block text-white">APPROACH</span>
          </h2>
          <p className="text-2xl md:text-4xl text-gray-300 font-light leading-relaxed max-w-4xl">
            We start by listening—really listening. Understanding your goals, your challenges, your vision. 
            Then we dig deeper, asking the questions others don't. Our process is iterative, collaborative, 
            and transparent. We believe in showing our work early and often, inviting feedback, and refining 
            relentlessly. Speed matters, but never at the expense of quality. Every project is an opportunity 
            to push ourselves further and deliver something remarkable.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <div>
              <h3 className="text-6xl font-black mb-4 bg-gradient-to-r from-purple-200 to-blue-200 bg-clip-text text-transparent">
                STUDIO
              </h3>
              <p className="text-gray-400 text-lg">
                Creating with purpose, designing with soul.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-bold tracking-wider text-gray-500 mb-4">CONNECT</h4>
              <div className="space-y-2 text-gray-300">
                <p className="hover:text-purple-200 transition-colors cursor-pointer">hello@studio.com</p>
                <p className="hover:text-purple-200 transition-colors cursor-pointer">+1 (555) 123-4567</p>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-bold tracking-wider text-gray-500 mb-4">FOLLOW</h4>
              <div className="space-y-2 text-gray-300">
                <p className="hover:text-purple-200 transition-colors cursor-pointer">Instagram</p>
                <p className="hover:text-purple-200 transition-colors cursor-pointer">Twitter</p>
                <p className="hover:text-purple-200 transition-colors cursor-pointer">LinkedIn</p>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2026 Studio. All rights reserved.
            </p>
            <div className="flex gap-8 text-sm text-gray-500">
              <span className="hover:text-gray-300 transition-colors cursor-pointer">Privacy</span>
              <span className="hover:text-gray-300 transition-colors cursor-pointer">Terms</span>
              <span className="hover:text-gray-300 transition-colors cursor-pointer">Cookies</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}