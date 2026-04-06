import Copy from "@/components/ui/Copy";

export default function Contact() {
  return (
    <div className="bg-[#0a0a0a] text-white font-sans antialiased">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-950/20 via-transparent to-teal-950/20"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
            <Copy delay={1}>
          <h1 className="text-[clamp(3rem,12vw,14rem)] font-black leading-[0.85] tracking-tighter mb-8">
            <span className="block bg-gradient-to-r from-emerald-200 via-teal-100 to-cyan-200 bg-clip-text text-transparent">
              LET'S
            </span>
            <span className="block text-white/90">
              TALK
            </span>
          </h1>
          </Copy>
          <Copy delay={1}>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto font-light tracking-wide">
            Great partnerships start with a conversation
          </p>
          </Copy>
        </div>
      </section>

      {/* Get In Touch Section */}
      <section className="min-h-screen flex items-center justify-center px-8 py-32 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-emerald-500/5 blur-[120px] rounded-full"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-[clamp(2.5rem,10vw,11rem)] font-black leading-[0.9] tracking-tighter mb-12 text-left">
            <span className="block text-gray-600">GET IN</span>
            <span className="block text-white">TOUCH</span>
          </h2>
          <p className="text-2xl md:text-4xl text-gray-300 font-light leading-relaxed max-w-4xl mb-12">
            Whether you're looking to launch something new, transform something existing, or just explore 
            possibilities—we're here to listen. Every project starts with understanding your unique challenges 
            and aspirations. No canned pitches, no generic proposals. Just genuine conversation about how we 
            can help bring your vision to life. Drop us a line, and let's start the dialogue.
          </p>
          <div className="space-y-6 text-2xl md:text-3xl text-gray-300">
            <div className="flex items-center gap-6">
              <span className="text-emerald-400">Email</span>
              <span className="text-white hover:text-emerald-200 transition-colors cursor-pointer">
                hello@studio.com
              </span>
            </div>
            <div className="flex items-center gap-6">
              <span className="text-emerald-400">Phone</span>
              <span className="text-white hover:text-emerald-200 transition-colors cursor-pointer">
                +1 (555) 123-4567
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Locations Section */}
      <section className="min-h-screen flex items-center justify-center px-8 py-32 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-teal-500/5 blur-[140px] rounded-full"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-[clamp(2.5rem,10vw,11rem)] font-black leading-[0.9] tracking-tighter mb-12 text-left">
            <span className="block bg-gradient-to-r from-teal-200 to-cyan-200 bg-clip-text text-transparent">
              WHERE
            </span>
            <span className="block text-white/80">WE ARE</span>
          </h2>
          <p className="text-2xl md:text-4xl text-gray-300 font-light leading-relaxed max-w-4xl mb-16">
            We're a distributed team with studios in three cities, but our work knows no boundaries. 
            From New York to London to Tokyo, we operate across time zones to ensure your project never sleeps. 
            Our global presence means local insights and international perspectives, all working in harmony.
          </p>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-4xl font-bold mb-4 text-white">New York</h3>
              <p className="text-lg text-gray-400 leading-relaxed">
                123 Creative Boulevard<br/>
                Brooklyn, NY 11201<br/>
                United States
              </p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-4 text-white">London</h3>
              <p className="text-lg text-gray-400 leading-relaxed">
                45 Design Lane<br/>
                Shoreditch, EC2A 3AY<br/>
                United Kingdom
              </p>
            </div>
            <div>
              <h3 className="text-4xl font-bold mb-4 text-white">Tokyo</h3>
              <p className="text-lg text-gray-400 leading-relaxed">
                7-8-9 Innovation District<br/>
                Shibuya-ku, 150-0001<br/>
                Japan
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* New Business Section */}
      <section className="min-h-screen flex items-center justify-center px-8 py-32 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 blur-[160px] rounded-full"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-[clamp(2.5rem,10vw,11rem)] font-black leading-[0.9] tracking-tighter mb-12 text-left">
            <span className="block text-gray-600">NEW</span>
            <span className="block text-white">BUSINESS</span>
          </h2>
          <p className="text-2xl md:text-4xl text-gray-300 font-light leading-relaxed max-w-4xl mb-12">
            Thinking about working together? We'd love to hear about your project. Whether it's a complete 
            digital transformation, a brand refresh, or an experimental installation, we're ready to explore 
            how we can collaborate. Our team reviews every inquiry personally—no automated responses, no sales 
            departments. Just real people excited about real opportunities.
          </p>
          <div className="text-2xl md:text-3xl">
            <span className="text-emerald-400">Business Inquiries</span>
            <p className="text-white hover:text-emerald-200 transition-colors cursor-pointer mt-4">
              newbusiness@studio.com
            </p>
          </div>
        </div>
      </section>

      {/* Press Section */}
      <section className="min-h-screen flex items-center justify-center px-8 py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 blur-[120px] rounded-full"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-[clamp(2.5rem,10vw,11rem)] font-black leading-[0.9] tracking-tighter mb-12 text-left">
            <span className="block bg-gradient-to-r from-emerald-200 via-teal-200 to-cyan-200 bg-clip-text text-transparent">
              PRESS
            </span>
            <span className="block text-white/80">MEDIA</span>
          </h2>
          <p className="text-2xl md:text-4xl text-gray-300 font-light leading-relaxed max-w-4xl mb-12">
            For media inquiries, interview requests, or press materials, our communications team is here to help. 
            We're always happy to discuss our work, share insights about the industry, or provide commentary on 
            design and technology trends. We believe in transparency and open dialogue with the press.
          </p>
          <div className="text-2xl md:text-3xl">
            <span className="text-emerald-400">Press Contact</span>
            <p className="text-white hover:text-emerald-200 transition-colors cursor-pointer mt-4">
              press@studio.com
            </p>
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section className="min-h-screen flex items-center justify-center px-8 py-32 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-teal-500/5 blur-[140px] rounded-full"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="text-[clamp(2.5rem,10vw,11rem)] font-black leading-[0.9] tracking-tighter mb-12 text-left">
            <span className="block text-gray-600">JOIN</span>
            <span className="block text-white">THE TEAM</span>
          </h2>
          <p className="text-2xl md:text-4xl text-gray-300 font-light leading-relaxed max-w-4xl mb-12">
            We're always looking for exceptional talent to join our collective. If you're passionate about 
            pushing creative boundaries, obsessed with quality, and eager to work on projects that matter, 
            we want to hear from you. We value diverse perspectives, unconventional backgrounds, and people 
            who challenge us to be better. Send us your portfolio and tell us why you'd be a great fit.
          </p>
          <div className="text-2xl md:text-3xl">
            <span className="text-emerald-400">Careers</span>
            <p className="text-white hover:text-emerald-200 transition-colors cursor-pointer mt-4">
              careers@studio.com
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-20 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <div>
              <h3 className="text-6xl font-black mb-4 bg-gradient-to-r from-emerald-200 to-teal-200 bg-clip-text text-transparent">
                CONNECT
              </h3>
              <p className="text-gray-400 text-lg">
                Let's create something extraordinary together.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-bold tracking-wider text-gray-500 mb-4">CONTACT</h4>
              <div className="space-y-2 text-gray-300">
                <p className="hover:text-emerald-200 transition-colors cursor-pointer">hello@studio.com</p>
                <p className="hover:text-emerald-200 transition-colors cursor-pointer">+1 (555) 123-4567</p>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-bold tracking-wider text-gray-500 mb-4">FOLLOW</h4>
              <div className="space-y-2 text-gray-300">
                <p className="hover:text-emerald-200 transition-colors cursor-pointer">Instagram</p>
                <p className="hover:text-emerald-200 transition-colors cursor-pointer">Twitter</p>
                <p className="hover:text-emerald-200 transition-colors cursor-pointer">LinkedIn</p>
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