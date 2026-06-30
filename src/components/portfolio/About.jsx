import { useEffect, useRef, useState } from 'react';
import avatarImg from '@/assets/avatar.jpg';

function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return [ref, visible];
}

export default function About() {
  const [sectionRef, visible] = useReveal();

  return (
    <section id="about" ref={sectionRef} className="relative py-40 overflow-hidden" style={{ background: '#050505' }}>
      {/* Gold vertical hairlines */}
      <div className="absolute left-[8%] top-0 bottom-0 w-px bg-[#C8A24D] opacity-8 z-0" style={{ opacity: 0.08 }} />

      <div className="max-w-screen-2xl mx-auto px-8 md:px-16 relative z-10">
        {/* Section header */}
        <div className={`flex items-center gap-6 mb-20 transition-all duration-900 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="section-number">01 — About</span>
          <div className="h-px bg-[#C8A24D] w-16" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
          {/* LEFT — Image */}
          <div className={`lg:col-span-5 relative transition-all duration-1000 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'}`} style={{ transitionDelay: '0.2s' }}>
            <div className="relative">
              {/* Emerald background block */}
              <div className="absolute -bottom-8 -right-8 bg-[#0B6B4B]" style={{ width: '70%', height: '70%', zIndex: 0 }} />
              {/* Main portrait */}
              <div className="relative z-10 overflow-hidden" style={{ aspectRatio: '4/5' }}>
                <img
                  src={avatarImg}
                  alt="Bhargav Parmar"
                  className="w-full h-full object-cover object-center"
                  style={{ filter: 'grayscale(20%) contrast(1.05)' }}
                />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(11,107,75,0.1) 0%, transparent 60%)' }} />
              </div>
              {/* Gold frame accent */}
              <div className="absolute -top-4 -left-4 -right-4 -bottom-4 border border-[#C8A24D] z-20 pointer-events-none" />
              {/* Available badge */}
              <div className="absolute bottom-6 right-0 z-20 bg-black border-l-2 border-[#0B6B4B] px-5 py-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#0B6B4B] animate-pulse" />
                  <span className="font-body text-xs text-[#C8A24D] tracking-widest uppercase" style={{ letterSpacing: '0.2em', fontSize: '9px' }}>Available for Work</span>
                </div>
              </div>
            </div>
          </div>

          {/* Gold vertical divider */}
          <div className="hidden lg:flex lg:col-span-1 justify-center">
            <div className="w-px bg-[#C8A24D] self-stretch mx-auto" style={{ opacity: 0.3 }} />
          </div>

          {/* RIGHT — Content */}
          <div className={`lg:col-span-6 pl-0 lg:pl-12 mt-16 lg:mt-0 transition-all duration-1000 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'}`} style={{ transitionDelay: '0.35s' }}>
            <h2
              className="font-heading text-white font-bold mb-8 leading-tight"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', letterSpacing: '-0.02em', lineHeight: '1' }}
            >
              Architect of<br />
              <span style={{ color: '#C8A24D' }}>Digital</span><br />
              Excellence
            </h2>

            <p className="font-body text-[#AFAFAF] mb-8 leading-relaxed" style={{ fontSize: '1rem', lineHeight: '1.85' }}>
              I am Bhargav Parmar — a B.Sc IT student and Full Stack Developer who transforms 
              complex requirements into elegant, high-performance digital solutions. I specialize 
              in building scalable web applications that combine technical precision with 
              premium user experiences.
            </p>

            <p className="font-body text-[#AFAFAF] mb-12 leading-relaxed" style={{ fontSize: '1rem', lineHeight: '1.85' }}>
              My approach is architectural — every system I build is designed with clean 
              separation of concerns, optimized performance, and long-term scalability in mind. 
              From E-Commerce platforms to enterprise dashboards, I deliver digital products 
              that operate at the highest level.
            </p>

            {/* Focus areas */}
            <div className="grid grid-cols-2 gap-0 mb-12">
              {[
                'Full Stack Development',
                'React.js Architecture',
                'Node.js & Express.js',
                'MongoDB Database',
                'E-Commerce Platforms',
                'Admin Dashboard Systems',
                'API Development',
                'Responsive UI/UX',
              ].map((item, i) => (
                <div
                  key={item}
                  className="flex items-center gap-3 py-3 border-b border-[#C8A24D]/10"
                >
                  <div className="w-1.5 h-1.5 bg-[#C8A24D]" />
                  <span className="font-body text-[#AFAFAF] text-sm">{item}</span>
                </div>
              ))}
            </div>

            {/* Upwork badge */}
            <div className="flex items-center gap-4">
              <div className="border border-[#C8A24D]/30 px-6 py-3 flex items-center gap-3">
                <img
                  src="https://media.base44.com/images/public/6a33927d8287913039f714a4/d77d40aa7_Upworklogo.png"
                  alt="Upwork"
                  className="h-5 object-contain"
                  style={{ filter: 'brightness(0) invert(1) sepia(1) saturate(2) hue-rotate(5deg)' }}
                />
                <span className="font-body text-[#AFAFAF] text-xs tracking-wide">Available on Upwork</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}