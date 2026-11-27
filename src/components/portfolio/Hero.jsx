import { useEffect, useRef, useState } from 'react';
import avatarImg from '@/assets/avatar.jpg';
import ThreeScene from './ThreeScene';

export default function Hero() {
  const heroRef = useRef(null);
  const lightRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(true), 300);
    const handleMouseMove = (event) => {
      if (!lightRef.current || window.matchMedia('(pointer: coarse)').matches) return;
      const x = (event.clientX / window.innerWidth) * 100;
      const y = (event.clientY / window.innerHeight) * 100;
      lightRef.current.style.background = `radial-gradient(600px circle at ${x}% ${y}%, rgba(11,107,75,0.14), transparent 70%)`;
    };

    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.clearTimeout(timer);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollTo = (selector) => {
    document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section ref={heroRef} className="relative min-h-screen w-full overflow-hidden flex items-center" style={{ background: '#000000', isolation: 'isolate' }}>
      <div ref={lightRef} className="absolute inset-0 pointer-events-none z-10 transition-all duration-300" />
      <div className="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1920&q=80&fit=crop" alt="" className="w-full h-full object-cover" style={{ filter: 'brightness(0.12) contrast(1.2)', objectPosition: 'center' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg, rgba(0,0,0,0.98) 0%, rgba(0,0,0,0.88) 48%, rgba(0,0,0,0.68) 100%)' }} />
      </div>

      <div className="absolute inset-0 z-[5] opacity-70" aria-hidden="true"><ThreeScene /></div>
      <div className="absolute left-[8%] top-0 bottom-0 w-px bg-[#C8A24D] opacity-10 z-20" />
      <div className="absolute right-[8%] top-0 bottom-0 w-px bg-[#C8A24D] opacity-10 z-20 hidden md:block" />

      <div className="relative z-30 w-full max-w-screen-2xl mx-auto px-6 sm:px-8 md:px-16 pt-32 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-0 items-center min-h-[80vh]">
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className={`flex items-center gap-4 mb-10 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.1s' }}>
              <div className="w-10 h-px bg-[#C8A24D]" />
              <span className="section-number">Full Stack Developer</span>
            </div>
            <div className="overflow-hidden mb-2">
              <h1 className={`font-heading text-white font-black leading-none hero-title transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'}`} style={{ transitionDelay: '0.2s' }}>BHARGAV</h1>
            </div>
            <div className="overflow-hidden mb-6">
              <p className={`font-heading font-black leading-none hero-title transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'}`} style={{ color: '#C8A24D', transitionDelay: '0.35s' }}>PARMAR</p>
            </div>
            <div className={`flex items-center gap-6 mb-8 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.5s' }}>
              <div className="h-px bg-[#C8A24D] flex-1 max-w-24" />
              <span className="font-display text-[#AFAFAF] italic text-xl" style={{ letterSpacing: '0.05em' }}>Create. Build. Scale.</span>
            </div>
            <p className={`font-body text-[#AFAFAF] max-w-xl mb-12 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ fontSize: '1rem', lineHeight: '1.8', letterSpacing: '0.01em', transitionDelay: '0.6s' }}>
              Crafting scalable digital experiences with modern technologies, clean architecture, and premium user experiences.
            </p>
            <div className={`flex flex-wrap gap-4 mb-16 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.75s' }}>
              <button onClick={() => scrollTo('#about')} className="font-body text-xs tracking-widest uppercase bg-[#0B6B4B] text-white px-10 py-4 hover:bg-[#C8A24D] hover:text-black transition-all duration-300" style={{ letterSpacing: '0.2em', fontSize: '11px' }} data-hover>Explore Work</button>
              <button onClick={() => scrollTo('#contact')} className="font-body text-xs tracking-widest uppercase border border-[#C8A24D] text-[#C8A24D] px-10 py-4 hover:bg-[#C8A24D] hover:text-black transition-all duration-300" style={{ letterSpacing: '0.2em', fontSize: '11px' }} data-hover>Contact Me</button>
            </div>
            <div className={`flex flex-wrap gap-x-12 gap-y-6 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '0.9s' }}>
              {[{ number: '8+', label: 'Projects' }, { number: '10+', label: 'Technologies' }, { number: '1K+', label: 'Dev Hours' }].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="font-heading text-white font-bold text-2xl leading-none">{stat.number}</span>
                  <span className="text-[#C8A24D] text-xs tracking-widest uppercase mt-1" style={{ letterSpacing: '0.2em', fontSize: '9px' }}>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:flex lg:col-span-5 justify-end items-center pl-12">
            <div className={`relative transition-all duration-1000 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`} style={{ transitionDelay: '0.4s' }}>
              <div className="absolute -top-4 -left-4 -right-4 -bottom-4 border border-[#C8A24D] z-20 pointer-events-none" />
              <div className="absolute -bottom-6 -left-6 bg-[#0B6B4B] z-0" style={{ width: '60%', height: '60%' }} />
              <div className="relative z-10 overflow-hidden w-[min(340px,70vw)] h-[min(460px,110vw)]">
                <img src={avatarImg} alt="Bhargav Parmar" className="w-full h-full object-cover object-top" style={{ filter: 'contrast(1.1) brightness(0.95)' }} />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.6) 100%)' }} />
              </div>
              <div className="absolute bottom-6 left-4 z-20">
                <span className="font-body text-[#C8A24D] text-xs tracking-widest uppercase block" style={{ letterSpacing: '0.3em', fontSize: '9px' }}>B.Sc IT Student</span>
              </div>
            </div>
          </div>
        </div>
        <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-1000 ${visible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '1.2s' }}>
          <span className="section-number" style={{ fontSize: '9px' }}>Scroll</span>
          <div className="w-px h-12 bg-[#C8A24D] animate-pulse-gold" />
        </div>
      </div>
    </section>
  );
}
