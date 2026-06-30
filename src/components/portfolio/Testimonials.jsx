import { useEffect, useRef, useState } from 'react';

function useReveal(threshold = 0.1) {
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

const testimonials = [
  {
    quote: "Bhargav delivered a level of craftsmanship I've rarely seen from developers at this stage of their career. The E-Commerce platform he built for Mancro exceeded every specification — performance, design, and code quality are all exceptional.",
    author: 'Mancro Watches',
    role: 'E-Commerce Client',
    initials: 'MW',
    accent: '#0B6B4B',
  },
  {
    quote: "The admin dashboard Bhargav built transformed how we operate our business. Clean, intuitive, and lightning-fast. The attention to detail in every interaction demonstrates a deep understanding of professional software engineering.",
    author: 'Business Operations Director',
    role: 'SaaS Platform Client',
    initials: 'BD',
    accent: '#C8A24D',
  },
  {
    quote: "Working with Bhargav was an experience in professionalism. He understood our requirements immediately, delivered ahead of schedule, and produced code that our senior engineers praised for its architecture. Truly exceptional work.",
    author: 'BizSole UAE',
    role: 'Corporate Website Client',
    initials: 'BS',
    accent: '#0B6B4B',
  },
  {
    quote: "The Fitourismm platform Bhargav built is not just functional — it's a visual and technical masterpiece. The speed, the animations, the responsiveness — everything operates at a level you would expect from a team ten times the size.",
    author: 'Fitourismm Travel',
    role: 'Travel Platform Client',
    initials: 'FT',
    accent: '#C8A24D',
  },
];

function TestimonialItem({ testimonial, index, visible }) {
  const isEven = index % 2 === 0;
  return (
    <div
      className={`relative p-10 lg:p-12 border-b border-[#C8A24D]/10 transition-all duration-900 group ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
      style={{
        transitionDelay: `${0.1 + index * 0.12}s`,
        borderRight: isEven ? '1px solid rgba(200,162,77,0.10)' : 'none',
      }}
    >
      {/* Quote mark */}
      <div
        className="font-display text-[#C8A24D] font-bold mb-4"
        style={{ fontSize: '4rem', lineHeight: '1', opacity: 0.2, fontStyle: 'italic' }}
      >
        "
      </div>

      <p
        className="font-display italic text-white mb-8 leading-relaxed"
        style={{ fontSize: 'clamp(1rem, 1.5vw, 1.2rem)', lineHeight: '1.7', fontStyle: 'italic', letterSpacing: '0.01em' }}
      >
        {testimonial.quote}
      </p>

      {/* Author */}
      <div className="flex items-center gap-4">
        {/* Avatar */}
        <div
          className="w-12 h-12 flex items-center justify-center font-heading font-bold text-sm flex-shrink-0"
          style={{ background: testimonial.accent, color: '#FFFFFF' }}
        >
          {testimonial.initials}
        </div>
        <div>
          <p className="font-heading text-white font-bold text-sm">{testimonial.author}</p>
          <p className="font-body text-[#C8A24D] text-xs tracking-widest uppercase mt-1" style={{ letterSpacing: '0.2em', fontSize: '9px' }}>
            {testimonial.role}
          </p>
        </div>
        {/* Gold accent line */}
        <div className="ml-auto w-10 h-px bg-[#C8A24D] opacity-30" />
      </div>
    </div>
  );
}

export default function Testimonials() {
  const [sectionRef, visible] = useReveal();

  return (
    <section id="testimonials" ref={sectionRef} className="relative py-24" style={{ background: '#050505' }}>
      <div className="max-w-screen-2xl mx-auto px-8 md:px-16">
        {/* Header */}
        <div className={`flex items-center gap-6 mb-6 transition-all duration-900 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="section-number">07 — Testimonials</span>
          <div className="h-px bg-[#C8A24D] w-16" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 mb-20">
          <div className="lg:col-span-7">
            <h2
              className={`font-heading text-white font-bold leading-none transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ fontSize: 'clamp(3rem, 7vw, 6.5rem)', letterSpacing: '-0.03em', lineHeight: '0.9', transitionDelay: '0.15s' }}
            >
              CLIENT<br />
              <span style={{ color: '#C8A24D' }}>VOICES</span>
            </h2>
          </div>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-[#C8A24D]/10">
          {testimonials.map((testimonial, index) => (
            <TestimonialItem key={index} testimonial={testimonial} index={index} visible={visible} />
          ))}
        </div>
      </div>
    </section>
  );
}