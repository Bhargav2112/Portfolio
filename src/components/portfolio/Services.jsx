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

const services = [
  {
    number: '01',
    title: 'Full Stack Development',
    description: 'End-to-end engineering of web applications — from database architecture to pixel-perfect frontends. Built for performance, scalability, and long-term maintainability.',
    highlights: ['React.js Frontend', 'Node.js Backend', 'MongoDB Database', 'REST API Design'],
  },
  {
    number: '02',
    title: 'React Development',
    description: 'Sophisticated single-page applications and complex component architectures. State management, performance optimization, and seamless user experiences.',
    highlights: ['Component Architecture', 'State Management', 'Performance Optimization', 'Responsive Design'],
  },
  {
    number: '03',
    title: 'E-Commerce Development',
    description: 'Complete commerce platforms engineered for conversion — product management, cart systems, secure payments, and intuitive admin controls.',
    highlights: ['Product Catalog', 'Cart & Checkout', 'Order Management', 'Admin Dashboard'],
  },
  {
    number: '04',
    title: 'Admin Panel Development',
    description: 'Enterprise-grade management dashboards with real-time data visualization, user management, and operational controls that scale with your business.',
    highlights: ['Data Visualization', 'User Management', 'Real-time Analytics', 'Role-based Access'],
  },
  {
    number: '05',
    title: 'API Development',
    description: 'RESTful API architectures designed for robustness and developer experience. Secure endpoints, optimized performance, and comprehensive documentation.',
    highlights: ['REST Architecture', 'JWT Authentication', 'Rate Limiting', 'API Documentation'],
  },
  {
    number: '06',
    title: 'Website Optimization',
    description: 'Performance audits and systematic optimization — faster load times, better Core Web Vitals, and measurably improved user experience metrics.',
    highlights: ['Performance Audit', 'Core Web Vitals', 'SEO Optimization', 'Code Splitting'],
  },
];

function ServiceItem({ service, index, visible }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`group relative border-b border-r-0 border-[#C8A24D]/10 p-10 transition-all duration-900 cursor-default overflow-hidden ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
      style={{
        transitionDelay: `${0.1 + index * 0.08}s`,
        borderRight: index % 2 === 0 ? '1px solid rgba(200,162,77,0.10)' : 'none',
        background: hovered ? '#050505' : '#000000',
        transition: 'all 0.4s ease',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Emerald top accent */}
      <div
        className="absolute top-0 left-0 right-0 bg-[#0B6B4B] transition-all duration-400"
        style={{ height: hovered ? '2px' : '0' }}
      />

      <div className="flex items-start justify-between mb-6">
        <span
          className="font-display text-[#C8A24D] font-light"
          style={{ fontSize: 'clamp(2rem, 3vw, 3rem)', opacity: 0.4, letterSpacing: '-0.02em' }}
        >
          {service.number}
        </span>
        <div
          className="w-6 h-6 border border-[#C8A24D]/30 flex items-center justify-center transition-all duration-300"
          style={{
            transform: hovered ? 'rotate(45deg)' : 'rotate(0deg)',
            borderColor: hovered ? '#C8A24D' : 'rgba(200,162,77,0.3)',
          }}
        >
          <div className="w-1.5 h-1.5 bg-[#C8A24D]" style={{ opacity: hovered ? 1 : 0.3 }} />
        </div>
      </div>

      <h3
        className="font-heading text-white font-bold mb-4 leading-tight transition-colors duration-300"
        style={{
          fontSize: 'clamp(1.25rem, 2vw, 1.6rem)',
          letterSpacing: '-0.01em',
          color: hovered ? '#C8A24D' : '#FFFFFF',
        }}
      >
        {service.title}
      </h3>

      <p className="font-body text-[#AFAFAF] mb-6 leading-relaxed" style={{ fontSize: '0.9375rem', lineHeight: '1.75' }}>
        {service.description}
      </p>

      <div className="flex flex-col gap-2">
        {service.highlights.map((h) => (
          <div key={h} className="flex items-center gap-3">
            <div className="w-1 h-1 bg-[#C8A24D]" />
            <span className="font-body text-[#AFAFAF] text-sm" style={{ fontSize: '0.875rem' }}>{h}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Services() {
  const [sectionRef, visible] = useReveal();

  return (
    <section id="services" ref={sectionRef} className="relative py-24" style={{ background: '#000000' }}>
      <div className="max-w-screen-2xl mx-auto px-8 md:px-16">
        {/* Header */}
        <div className={`flex items-center gap-6 mb-6 transition-all duration-900 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="section-number">06 — Services</span>
          <div className="h-px bg-[#C8A24D] w-16" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 mb-20">
          <div className="lg:col-span-7">
            <h2
              className={`font-heading text-white font-bold leading-none transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ fontSize: 'clamp(3rem, 7vw, 6.5rem)', letterSpacing: '-0.03em', lineHeight: '0.9', transitionDelay: '0.15s' }}
            >
              WHAT I<br />
              <span style={{ color: '#C8A24D' }}>OFFER</span>
            </h2>
          </div>
          <div className="lg:col-span-5 flex items-end">
            <p
              className={`font-body text-[#AFAFAF] leading-relaxed transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ fontSize: '0.9375rem', lineHeight: '1.8', transitionDelay: '0.3s' }}
            >
              Six specialized service areas, each delivered with the precision 
              and dedication of a senior engineering professional.
            </p>
          </div>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 border-t border-l border-[#C8A24D]/10">
          {services.map((service, index) => (
            <ServiceItem key={service.number} service={service} index={index} visible={visible} />
          ))}
        </div>
      </div>
    </section>
  );
}