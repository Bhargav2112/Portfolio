import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return undefined;
    const closeOnEscape = (event) => { if (event.key === 'Escape') setMenuOpen(false); };
    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, [menuOpen]);

  const handleNav = (href) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500" aria-label="Main navigation"
      style={{ background: scrolled ? 'rgba(0,0,0,0.88)' : 'transparent', borderBottom: scrolled ? '1px solid rgba(200,162,77,0.2)' : 'none', backdropFilter: scrolled ? 'blur(20px)' : 'none', WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none' }}>
      <div className="max-w-screen-2xl mx-auto px-6 sm:px-8 md:px-16 py-5 flex items-center justify-between">
        <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex flex-col items-start group select-none bg-transparent border-0 p-0" data-hover aria-label="Back to top">
          <span className="font-heading text-white text-xl font-bold leading-none pr-4" style={{ letterSpacing: '0.02em' }}>BHARGAV</span>
          <span className="text-gold font-body text-xs tracking-widest" style={{ letterSpacing: '0.35em', fontSize: '9px' }}>PARMAR</span>
        </button>
        <div className="hidden md:flex items-center gap-6 lg:gap-10">
          {navLinks.map((link) => <button key={link.label} type="button" onClick={() => handleNav(link.href)} className="nav-link-hover font-body text-xs tracking-widest text-[#AFAFAF] hover:text-[#C8A24D] transition-colors duration-300 uppercase bg-transparent border-0 p-1" style={{ letterSpacing: '0.2em', fontSize: '11px' }} data-hover>{link.label}</button>)}
          <button type="button" onClick={() => handleNav('#contact')} className="font-body text-xs tracking-widest uppercase border border-[#C8A24D] text-[#C8A24D] px-6 py-3 hover:bg-[#C8A24D] hover:text-black transition-all duration-300 bg-transparent" style={{ letterSpacing: '0.2em', fontSize: '10px' }} data-hover>Hire Me</button>
        </div>
        <button type="button" className="md:hidden flex flex-col justify-center gap-[5px] p-3 -mr-2 bg-transparent border border-[#C8A24D]/30" onClick={() => setMenuOpen((open) => !open)} data-hover aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={menuOpen} aria-controls="mobile-navigation">
          <span className="block h-px bg-[#C8A24D] transition-all duration-300" style={{ width: '22px', transform: menuOpen ? 'translateY(3px) rotate(45deg)' : 'none' }} />
          <span className="block h-px bg-[#C8A24D] transition-all duration-300" style={{ width: '16px', opacity: menuOpen ? 0 : 1 }} />
          <span className="block h-px bg-[#C8A24D] transition-all duration-300" style={{ width: '22px', transform: menuOpen ? 'translateY(-3px) rotate(-45deg)' : 'none' }} />
        </button>
      </div>
      {menuOpen && <div id="mobile-navigation" className="md:hidden absolute top-full left-0 right-0 bg-black/95 border-t border-[#C8A24D]/20 shadow-2xl" style={{ borderBottom: '1px solid rgba(200,162,77,0.2)' }}>
        {navLinks.map((link) => <button key={link.label} type="button" onClick={() => handleNav(link.href)} className="block w-full text-left px-8 py-4 text-[#AFAFAF] hover:text-[#C8A24D] hover:bg-[#0B6B4B]/10 transition-all duration-300 font-body text-xs tracking-widest uppercase border-b border-[#C8A24D]/10 bg-transparent" style={{ letterSpacing: '0.25em', fontSize: '11px' }}>{link.label}</button>)}
      </div>}
    </nav>
  );
}
