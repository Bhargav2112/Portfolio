import { useEffect, useRef, useState } from 'react';

function useReveal(threshold = 0.2) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return [ref, visible];
}

function useCounter(target, duration, active) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [active, target, duration]);
  return count;
}

function StatItem({ number, suffix, label, description, delay, active }) {
  const count = useCounter(number, 2000, active);
  return (
    <div
      className="relative border-r border-[#C8A24D]/10 last:border-r-0 p-12 group"
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Hover emerald accent */}
      <div
        className="absolute bottom-0 left-0 right-0 bg-[#0B6B4B] transition-all duration-500 group-hover:opacity-100"
        style={{ height: '2px', opacity: 0 }}
      />
      <div className="mb-4">
        <span
          className="font-heading text-white font-black leading-none"
          style={{ fontSize: 'clamp(3.5rem, 7vw, 7rem)', letterSpacing: '-0.04em', lineHeight: '1' }}
        >
          {count}
        </span>
        <span
          className="font-heading font-black"
          style={{
            fontSize: 'clamp(2rem, 4vw, 4rem)',
            color: '#C8A24D',
            letterSpacing: '-0.02em',
          }}
        >
          {suffix}
        </span>
      </div>
      <h3 className="font-heading text-white font-bold mb-2 text-xl">{label}</h3>
      <p className="font-body text-[#AFAFAF] text-sm leading-relaxed">{description}</p>
    </div>
  );
}

const stats = [
  { number: 8, suffix: '+', label: 'Projects Completed', description: 'Production-ready digital products delivered with precision and excellence' },
  { number: 10, suffix: '+', label: 'Technologies Mastered', description: 'A curated stack of modern technologies for full-spectrum development' },
  { number: 1000, suffix: '+', label: 'Development Hours', description: 'Hours of focused, disciplined engineering invested in the craft' },
  { number: 100, suffix: '%', label: 'Passion Driven', description: 'Every project approached with relentless dedication and creative intensity' },
];

export default function Achievements() {
  const [sectionRef, visible] = useReveal();

  return (
    <section id="achievements" ref={sectionRef} className="relative py-0" style={{ background: '#050505' }}>
      {/* Top gold line */}
      <div className="gold-line" />

      <div className="max-w-screen-2xl mx-auto px-8 md:px-16 py-32">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-900 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="h-px bg-[#C8A24D] w-16" />
            <span className="section-number">05 — By The Numbers</span>
            <div className="h-px bg-[#C8A24D] w-16" />
          </div>
          <h2
            className="font-heading text-white font-bold leading-none"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)', letterSpacing: '-0.03em' }}
          >
            THE <span style={{ color: '#C8A24D' }}>METRICS</span>
          </h2>
        </div>

        {/* Stats */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-[#C8A24D]/15 transition-all duration-900 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`} style={{ transitionDelay: '0.25s' }}>
          {stats.map((stat, index) => (
            <StatItem key={stat.label} {...stat} delay={index * 100} active={visible} />
          ))}
        </div>

        {/* Marquee text */}
        <div className="mt-24 overflow-hidden">
          <p
            className="font-heading font-black select-none"
            style={{
              fontSize: 'clamp(2.5rem, 8vw, 8rem)',
              letterSpacing: '-0.02em',
              color: 'transparent',
              WebkitTextStroke: '1px rgba(200,162,77,0.08)',
              whiteSpace: 'nowrap',
            }}
          >
            PERFORMANCE · PRECISION · EXCELLENCE · SCALE
          </p>
        </div>
      </div>

      {/* Bottom gold line */}
      <div className="gold-line" />
    </section>
  );
}