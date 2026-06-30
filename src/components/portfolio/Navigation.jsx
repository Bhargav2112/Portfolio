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
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (href) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-700"
      style={{
        background: scrolled ? 'rgba(0,0,0,0.97)' : 'transparent',
        borderBottom: scrolled ? '1px solid rgba(200,162,77,0.2)' : 'none',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
      }}
    >
      <div className="max-w-screen-2xl mx-auto px-8 md:px-16 py-6 flex items-center justify-between">
        {/* Logo */}
        <div
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex flex-col items-start group cursor-pointer select-none"
          data-hover
          role="button"
          tabIndex={0}
        >
          <span
            className="font-heading text-white text-xl font-bold leading-none pr-4"
            style={{ letterSpacing: '0.02em' }}
          >
            BHARGAV
          </span>
          <span
            className="text-gold font-body text-xs tracking-widest"
            style={{ letterSpacing: '0.35em', fontSize: '9px' }}
          >
            PARMAR
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNav(link.href)}
              className="nav-link-hover font-body text-xs tracking-widest text-[#AFAFAF] hover:text-[#C8A24D] transition-colors duration-300 uppercase"
              style={{ letterSpacing: '0.25em', fontSize: '11px' }}
              data-hover
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNav('#contact')}
            className="font-body text-xs tracking-widest uppercase border border-[#C8A24D] text-[#C8A24D] px-6 py-3 hover:bg-[#C8A24D] hover:text-black transition-all duration-300"
            style={{ letterSpacing: '0.2em', fontSize: '10px' }}
            data-hover
          >
            Hire Me
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          data-hover
        >
          <span
            className="block h-px bg-[#C8A24D] transition-all duration-300"
            style={{ width: menuOpen ? '24px' : '24px', transform: menuOpen ? 'rotate(45deg) translateY(6px)' : 'none' }}
          />
          <span
            className="block h-px bg-[#C8A24D] transition-all duration-300"
            style={{ width: '18px', opacity: menuOpen ? 0 : 1 }}
          />
          <span
            className="block h-px bg-[#C8A24D] transition-all duration-300"
            style={{ width: '24px', transform: menuOpen ? 'rotate(-45deg) translateY(-6px)' : 'none' }}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="md:hidden absolute top-full left-0 right-0 bg-black border-t border-[#C8A24D]/20"
          style={{ borderBottom: '1px solid rgba(200,162,77,0.2)' }}
        >
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNav(link.href)}
              className="block w-full text-left px-8 py-4 text-[#AFAFAF] hover:text-[#C8A24D] hover:bg-[#0B6B4B]/10 transition-all duration-300 font-body text-xs tracking-widest uppercase border-b border-[#C8A24D]/10"
              style={{ letterSpacing: '0.25em', fontSize: '11px' }}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}