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

const skillCategories = [
  {
    label: 'Frontend',
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Tailwind CSS', 'Bootstrap'],
    accent: '#0B6B4B',
  },
  {
    label: 'Backend',
    skills: ['Node.js', 'Express.js'],
    accent: '#C8A24D',
  },
  {
    label: 'Database',
    skills: ['MongoDB'],
    accent: '#0B6B4B',
  },
  {
    label: 'Tools & Platforms',
    skills: ['Git', 'GitHub', 'VS Code', 'Vercel'],
    accent: '#C8A24D',
  },
];

function SkillItem({ name, delay }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="skill-item group relative border-b border-[#C8A24D]/15 py-5 cursor-default overflow-hidden"
      style={{ transitionDelay: `${delay}ms` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      data-hover
    >
      {/* Hover fill */}
      <div
        className="absolute inset-0 bg-[#0B6B4B] transition-all duration-500"
        style={{ transform: hovered ? 'scaleX(1)' : 'scaleX(0)', transformOrigin: 'left', opacity: 0.08 }}
      />
      <div className="relative z-10 flex items-center justify-between px-2">
        <span
          className="font-heading font-bold transition-all duration-400"
          style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.6rem)',
            letterSpacing: '-0.01em',
            color: hovered ? '#C8A24D' : '#FFFFFF',
          }}
        >
          {name}
        </span>
        <div
          className="w-6 h-px bg-[#C8A24D] transition-all duration-400"
          style={{ width: hovered ? '40px' : '24px' }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const [sectionRef, visible] = useReveal();

  return (
    <section id="skills" ref={sectionRef} className="relative py-24 overflow-hidden" style={{ background: '#000000' }}>
      {/* Decorative emerald block */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#0B6B4B] pointer-events-none" style={{ opacity: 0.025 }} />

      <div className="max-w-screen-2xl mx-auto px-8 md:px-16">
        {/* Header */}
        <div className={`flex items-center gap-6 mb-6 transition-all duration-900 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="section-number">02 — Skills</span>
          <div className="h-px bg-[#C8A24D] w-16" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 mb-24">
          <div className="lg:col-span-7">
            <h2
              className={`font-heading text-white font-bold leading-none mb-6 transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ fontSize: 'clamp(3rem, 7vw, 6.5rem)', letterSpacing: '-0.03em', lineHeight: '0.9', transitionDelay: '0.15s' }}
            >
              THE<br />
              <span style={{ color: '#C8A24D' }}>TECH</span><br />
              STACK
            </h2>
          </div>
          <div className="lg:col-span-5 flex items-end pb-4">
            <p
              className={`font-body text-[#AFAFAF] leading-relaxed transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ fontSize: '1rem', lineHeight: '1.8', transitionDelay: '0.3s' }}
            >
              A curated arsenal of modern technologies, each mastered to deliver 
              enterprise-grade digital solutions. Every tool chosen for performance, 
              scalability, and precision.
            </p>
          </div>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {skillCategories.map((category, ci) => (
            <div
              key={category.label}
              className={`border border-[#C8A24D]/15 p-8 transition-all duration-900 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
              style={{
                transitionDelay: `${0.2 + ci * 0.15}s`,
                borderRight: ci % 2 === 0 ? '1px solid rgba(200,162,77,0.15)' : undefined,
              }}
            >
              {/* Category label */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2" style={{ background: category.accent }} />
                <span
                  className="font-body text-[#C8A24D] uppercase tracking-widest"
                  style={{ fontSize: '10px', letterSpacing: '0.35em' }}
                >
                  {category.label}
                </span>
              </div>

              {/* Skills */}
              {category.skills.map((skill, si) => (
                <SkillItem key={skill} name={skill} delay={si * 50} />
              ))}
            </div>
          ))}
        </div>

        {/* Large outline text */}
        <div className="mt-24 overflow-hidden">
          <p
            className="font-heading font-bold text-stroke-gold select-none pointer-events-none"
            style={{
              fontSize: 'clamp(3rem, 10vw, 9rem)',
              letterSpacing: '-0.02em',
              lineHeight: '1',
              opacity: 0.06,
              whiteSpace: 'nowrap',
            }}
          >
            REACT · NODE · MONGO · EXPRESS
          </p>
        </div>
      </div>
    </section>
  );
}