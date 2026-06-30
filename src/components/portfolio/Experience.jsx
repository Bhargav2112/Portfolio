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

const timeline = [
  {
    year: '2024 — Present',
    title: 'Full Stack Development',
    subtitle: 'Production-grade web applications',
    description: 'Engineering scalable full-stack applications using React.js, Node.js, and MongoDB. Architecting systems that handle real-world load with clean, maintainable codebases.',
    tags: ['React.js', 'Node.js', 'MongoDB', 'Express.js'],
  },
  {
    year: '2023 — 2024',
    title: 'Frontend Architecture',
    subtitle: 'Premium UI/UX Engineering',
    description: 'Mastered React.js component architecture, Tailwind CSS design systems, and responsive layout engineering. Built pixel-perfect interfaces with performance-first mindset.',
    tags: ['React.js', 'Tailwind CSS', 'JavaScript', 'Bootstrap'],
  },
  {
    year: '2023',
    title: 'Backend & API Development',
    subtitle: 'Server-side engineering',
    description: 'Developed RESTful API architectures with Node.js and Express.js. Implemented authentication systems, middleware patterns, and optimized server performance.',
    tags: ['Node.js', 'Express.js', 'REST API', 'JWT'],
  },
  {
    year: '2022 — 2023',
    title: 'Database Design & Optimization',
    subtitle: 'MongoDB architecture',
    description: 'Designed efficient MongoDB schemas, implemented aggregation pipelines, and optimized query performance for high-traffic applications.',
    tags: ['MongoDB', 'Mongoose', 'Database Design', 'Aggregation'],
  },
  {
    year: '2022',
    title: 'Web Foundations',
    subtitle: 'Core technologies mastery',
    description: 'Established a deep foundation in HTML5, CSS3, and JavaScript. Built responsive, accessible web experiences following modern web standards and best practices.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Git'],
  },
];

function TimelineItem({ item, index, visible }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className={`group grid grid-cols-12 gap-0 transition-all duration-900 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
      style={{ transitionDelay: `${0.15 + index * 0.12}s` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Year column */}
      <div className="col-span-12 md:col-span-3 flex md:flex-col md:items-end md:pr-10 pt-8 pb-2 md:pb-0">
        <span
          className="font-display italic text-[#C8A24D] font-light"
          style={{ fontSize: 'clamp(0.75rem, 1.5vw, 0.875rem)', letterSpacing: '0.05em' }}
        >
          {item.year}
        </span>
      </div>

      {/* Gold spine + dot */}
      <div className="hidden md:flex col-span-1 flex-col items-center relative">
        <div
          className="w-3 h-3 border-2 mt-9 z-10 transition-all duration-400"
          style={{
            borderColor: hovered ? '#C8A24D' : '#0B6B4B',
            background: hovered ? '#C8A24D' : '#000000',
          }}
        />
        <div className="w-px flex-1 bg-[#C8A24D] mt-1" style={{ opacity: 0.2 }} />
      </div>

      {/* Content */}
      <div className="col-span-12 md:col-span-8 pl-0 md:pl-10 py-8 border-b border-[#C8A24D]/10">
        <h3
          className="font-heading text-white font-bold mb-1 leading-tight transition-colors duration-300"
          style={{
            fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)',
            letterSpacing: '-0.01em',
            color: hovered ? '#C8A24D' : '#FFFFFF',
          }}
        >
          {item.title}
        </h3>
        <p className="font-body text-[#0B6B4B] text-sm mb-3 tracking-wide">{item.subtitle}</p>
        <p className="font-body text-[#AFAFAF] mb-5 leading-relaxed" style={{ fontSize: '0.9375rem', lineHeight: '1.75' }}>
          {item.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="font-body text-xs border border-[#C8A24D]/25 text-[#AFAFAF] px-3 py-1 tracking-wide"
              style={{ fontSize: '10px', letterSpacing: '0.1em' }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  const [sectionRef, visible] = useReveal();

  return (
    <section id="experience" ref={sectionRef} className="relative py-40" style={{ background: '#050505' }}>
      <div className="max-w-screen-2xl mx-auto px-8 md:px-16">
        {/* Header */}
        <div className={`flex items-center gap-6 mb-6 transition-all duration-900 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="section-number">03 — Experience</span>
          <div className="h-px bg-[#C8A24D] w-16" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 mb-20">
          <div className="lg:col-span-7">
            <h2
              className={`font-heading text-white font-bold leading-none transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)', letterSpacing: '-0.03em', lineHeight: '0.9', transitionDelay: '0.15s' }}
            >
              THE<br />
              <span style={{ color: '#C8A24D' }}>JOURNEY</span>
            </h2>
          </div>
        </div>

        {/* Timeline */}
        <div>
          {timeline.map((item, index) => (
            <TimelineItem key={item.title} item={item} index={index} visible={visible} />
          ))}
        </div>
      </div>
    </section>
  );
}