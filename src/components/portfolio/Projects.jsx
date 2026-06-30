import { useEffect, useRef, useState } from 'react';
import mancroWatchImg from '@/assets/mancro_watch.png';
import fitourismImg from '@/assets/fitourism.png';
import hospitalImg from '@/assets/hospital.png';
import jyotsetuImg from '@/assets/jyotsetu.png';
import royalheavenImg from '@/assets/royalheaven.png';
import flipcartImg from '@/assets/flipcart.png';

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

const projects = [
  {
    id: '01',
    title: 'Mancro Watch',
    subtitle: 'Luxury E-Commerce Platform',
    description: 'A sophisticated e-commerce platform for premium timepieces. Features an immersive product catalog, intelligent cart system, secure user authentication, and a cinematic shopping experience.',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    category: 'E-Commerce',
    ctaText: 'Launch Project',
    image: mancroWatchImg,
    link: 'https://mancro-watch.vercel.app/',
  },
  {
    id: '02',
    title: 'Jyot Setu Sahay',
    subtitle: 'NGO & Social Welfare Platform',
    description: 'A comprehensive digital presence for a registered non-profit trust supporting mentally disabled children and individuals. Features an events showcase, smart wish list, volunteer registration, and donation facilities.',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    category: 'Non-Profit',
    ctaText: 'Explore Platform',
    image: jyotsetuImg,
    link: 'https://jyotsetu-sahay.vercel.app/',
  },
  {
    id: '03',
    title: 'Fitourismm',
    subtitle: 'Travel & Tourism Platform',
    description: 'An immersive travel discovery platform featuring curated tour packages, cinematic destination showcases, and a seamless booking experience designed to inspire wanderlust.',
    tags: ['React.js', 'Node.js', 'MongoDB'],
    category: 'Travel',
    ctaText: 'Explore Project',
    image: fitourismImg,
    link: 'https://fitourismm.vercel.app/',
  },
  {
    id: '04',
    title: 'Hospital Project',
    subtitle: 'Healthcare Management System',
    description: 'A comprehensive healthcare management platform with patient records, doctor scheduling, appointment systems, and an intuitive operational dashboard for medical staff.',
    tags: ['React.js', 'Node.js', 'MongoDB', 'Express.js'],
    category: 'Healthcare',
    ctaText: 'View Project',
    image: hospitalImg,
    link: 'https://hospitalproject-xi.vercel.app/',
  },
  {
    id: '05',
    title: 'BizSole',
    subtitle: 'UAE Business Setup Platform',
    description: 'A premium corporate identity for a UAE business consultancy firm. Sophisticated corporate design, strategic service showcasing, and a high-conversion lead generation system.',
    tags: ['React.js', 'Node.js', 'MongoDB'],
    category: 'Corporate',
    ctaText: 'Explore Business Site',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80&fit=crop',
  },
  {
    id: '06',
    title: 'LuxeBlog',
    subtitle: 'Premium Publishing Platform',
    description: 'An editorial-grade blogging platform with rich content management, dynamic layout systems, and a refined reading experience engineered for serious content creators.',
    tags: ['React.js', 'Node.js', 'MongoDB'],
    category: 'Content',
    ctaText: 'Read Platform',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80&fit=crop',
  },
  {
    id: '07',
    title: 'My Royal Heaven',
    subtitle: 'Luxury Experience Platform',
    description: 'A premium luxury-themed digital experience platform. Royal branding, high-end visual composition, and an interface that communicates exclusivity at every scroll.',
    tags: ['React.js', 'Node.js', 'MongoDB'],
    category: 'Luxury',
    ctaText: 'Explore Experience',
    image: royalheavenImg,
    link: 'https://myroyal-heaven.vercel.app/',
  },
  {
    id: '08',
    title: 'FlipCart 2',
    subtitle: 'Modern E-Commerce Store',
    description: 'A high-performance e-commerce platform built with modern architecture. Features intelligent product listings, real-time cart management, and category-based navigation.',
    tags: ['React.js', 'Node.js', 'MongoDB', 'Express.js'],
    category: 'E-Commerce',
    ctaText: 'Launch Store',
    image: flipcartImg,
    link: 'https://flipcart-2.vercel.app/',
  },
];

function ProjectCard({ project, index, visible }) {
  const [hovered, setHovered] = useState(false);
  const isEven = index % 2 === 0;

  return (
    <div
      className={`group grid grid-cols-1 lg:grid-cols-2 gap-0 border-b border-[#C8A24D]/10 transition-all duration-900 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
      style={{ transitionDelay: `${0.1 + index * 0.08}s` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image — alternating sides */}
      <div className={`relative overflow-hidden ${isEven ? 'order-1' : 'order-1 lg:order-2'}`} style={{ aspectRatio: '16/9', minHeight: '280px' }}>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-all duration-700"
          style={{
            transform: hovered ? 'scale(1.06)' : 'scale(1)',
            filter: hovered ? 'brightness(0.7) contrast(1.1)' : 'brightness(0.5) contrast(1.15) grayscale(30%)',
          }}
        />
        {/* Overlay */}
        <div
          className="absolute inset-0 transition-all duration-500"
          style={{ background: hovered ? 'rgba(11,107,75,0.15)' : 'rgba(0,0,0,0.4)' }}
        />
        {/* Project number */}
        <div className="absolute top-6 left-6 z-10">
          <span
            className="font-display text-[#C8A24D] font-bold"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', opacity: 0.6, letterSpacing: '-0.02em' }}
          >
            {project.id}
          </span>
        </div>
        {/* Category badge */}
        <div className="absolute top-6 right-6 z-10">
          <span
            className="font-body text-[#C8A24D] border border-[#C8A24D]/40 px-3 py-1"
            style={{ fontSize: '9px', letterSpacing: '0.25em' }}
          >
            {project.category.toUpperCase()}
          </span>
        </div>
      </div>

      {/* Content */}
      <div
        className={`flex flex-col justify-center p-10 lg:p-16 ${isEven ? 'order-2' : 'order-2 lg:order-1'}`}
        style={{ background: hovered ? '#050505' : '#000000', transition: 'background 0.4s ease' }}
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="w-6 h-px bg-[#C8A24D]" />
          <span className="font-body text-[#C8A24D] tracking-widest uppercase" style={{ fontSize: '9px', letterSpacing: '0.3em' }}>
            {project.subtitle}
          </span>
        </div>

        <h3
          className="font-heading text-white font-bold mb-4 leading-tight transition-colors duration-300"
          style={{
            fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
            letterSpacing: '-0.02em',
            color: hovered ? '#FFFFFF' : '#FFFFFF',
          }}
        >
          {project.title}
        </h3>

        <p className="font-body text-[#AFAFAF] mb-6 leading-relaxed" style={{ fontSize: '0.9375rem', lineHeight: '1.75' }}>
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-body text-[#AFAFAF] border border-[#C8A24D]/20 px-3 py-1"
              style={{ fontSize: '10px', letterSpacing: '0.1em' }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div>
          {project.link ? (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-xs tracking-widest uppercase text-white border border-[#C8A24D]/40 px-8 py-3 hover:bg-[#C8A24D] hover:text-black hover:border-[#C8A24D] transition-all duration-400 group/btn inline-flex items-center gap-3"
              style={{ letterSpacing: '0.2em', fontSize: '10px' }}
              data-hover
            >
              {project.ctaText}
              <span
                className="inline-block transition-transform duration-300 group-hover/btn:translate-x-1"
              >→</span>
            </a>
          ) : (
            <button
              className="font-body text-xs tracking-widest uppercase text-white border border-[#C8A24D]/40 px-8 py-3 hover:bg-[#C8A24D] hover:text-black hover:border-[#C8A24D] transition-all duration-400 group/btn flex items-center gap-3"
              style={{ letterSpacing: '0.2em', fontSize: '10px' }}
              data-hover
            >
              {project.ctaText}
              <span
                className="inline-block transition-transform duration-300 group-hover/btn:translate-x-1"
              >→</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [sectionRef, visible] = useReveal();

  return (
    <section id="projects" ref={sectionRef} className="relative pt-40 pb-0" style={{ background: '#000000' }}>
      <div className="max-w-screen-2xl mx-auto px-8 md:px-16 pb-24">
        {/* Header */}
        <div className={`flex items-center gap-6 mb-6 transition-all duration-900 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="section-number">04 — Projects</span>
          <div className="h-px bg-[#C8A24D] w-16" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 mb-20">
          <div className="lg:col-span-8">
            <h2
              className={`font-heading text-white font-bold leading-none transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ fontSize: 'clamp(3rem, 7vw, 6.5rem)', letterSpacing: '-0.03em', lineHeight: '0.9', transitionDelay: '0.15s' }}
            >
              SELECTED<br />
              <span style={{ color: '#C8A24D' }}>WORKS</span>
            </h2>
          </div>
          <div className="lg:col-span-4 flex items-end">
            <p
              className={`font-body text-[#AFAFAF] leading-relaxed transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ fontSize: '0.9375rem', lineHeight: '1.8', transitionDelay: '0.3s' }}
            >
              Eight digital products engineered with precision. Each project represents a 
              commitment to performance, elegance, and scalable architecture.
            </p>
          </div>
        </div>
      </div>

      {/* Projects — full width */}
      <div className="border-t border-[#C8A24D]/10">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} visible={visible} />
        ))}
      </div>
    </section>
  );
}