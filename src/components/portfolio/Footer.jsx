export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollTo = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative" style={{ background: '#000000' }}>
      {/* Gold top line */}
      <div className="gold-line" />

      {/* Main footer content */}
      <div className="max-w-screen-2xl mx-auto px-8 md:px-16 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-0">

          {/* Brand column */}
          <div className="md:col-span-5 pr-0 md:pr-16 mb-12 md:mb-0">
            <h3
              className="font-heading text-white font-black mb-2 leading-none"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', letterSpacing: '-0.03em' }}
            >
              BHARGAV
            </h3>
            <h3
              className="font-heading font-black mb-6 leading-none"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', letterSpacing: '-0.03em', color: '#C8A24D' }}
            >
              PARMAR
            </h3>
            <p className="font-body text-[#AFAFAF] mb-8 leading-relaxed" style={{ fontSize: '0.9375rem', lineHeight: '1.75', maxWidth: '320px' }}>
              Full Stack Developer crafting scalable digital experiences with 
              modern technologies and premium engineering standards.
            </p>
            {/* Upwork */}
            <div className="flex items-center gap-3 border border-[#C8A24D]/20 px-5 py-3 w-fit">
              <div className="w-2 h-2 bg-[#0B6B4B] animate-pulse" />
              <span className="font-body text-[#AFAFAF] text-xs tracking-wide">Available on Upwork</span>
            </div>
          </div>

          {/* Gold vertical divider */}
          <div className="hidden md:flex md:col-span-1 justify-center">
            <div className="w-px bg-[#C8A24D] self-stretch" style={{ opacity: 0.12 }} />
          </div>

          {/* Quick links */}
          <div className="md:col-span-3 px-0 md:px-8 mb-12 md:mb-0">
            <h4
              className="font-body text-[#C8A24D] uppercase tracking-widest mb-6 block"
              style={{ fontSize: '10px', letterSpacing: '0.35em' }}
            >
              Navigation
            </h4>
            <div className="flex flex-col gap-3">
              {[
                { label: 'About', href: '#about' },
                { label: 'Skills', href: '#skills' },
                { label: 'Experience', href: '#experience' },
                { label: 'Projects', href: '#projects' },
                { label: 'Services', href: '#services' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className="font-body text-[#AFAFAF] hover:text-[#C8A24D] transition-colors duration-300 text-left text-sm nav-link-hover w-fit"
                  style={{ fontSize: '0.875rem' }}
                  data-hover
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Social / Connect */}
          <div className="md:col-span-3">
            <h4
              className="font-body text-[#C8A24D] uppercase tracking-widest mb-6 block"
              style={{ fontSize: '10px', letterSpacing: '0.35em' }}
            >
              Connect
            </h4>
            <div className="flex flex-col gap-3">
              {[
                { label: 'GitHub', href: 'https://github.com', external: true },
                { label: 'LinkedIn', href: 'https://linkedin.com', external: true },
                { label: 'Upwork', href: 'https://upwork.com', external: true },
                { label: 'Instagram', href: 'https://instagram.com', external: true },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-[#AFAFAF] hover:text-[#C8A24D] transition-colors duration-300 text-sm nav-link-hover w-fit flex items-center gap-2"
                  style={{ fontSize: '0.875rem' }}
                  data-hover
                >
                  {social.label}
                  <span style={{ color: 'rgba(200,162,77,0.4)', fontSize: '10px' }}>↗</span>
                </a>
              ))}
            </div>

            {/* Specializations */}
            <div className="mt-10">
              <h4
                className="font-body text-[#C8A24D] uppercase tracking-widest mb-4 block"
                style={{ fontSize: '10px', letterSpacing: '0.35em' }}
              >
                Specializations
              </h4>
              <div className="flex flex-wrap gap-2">
                {['React.js', 'Node.js', 'MongoDB', 'Express.js'].map((tech) => (
                  <span
                    key={tech}
                    className="font-body text-[#AFAFAF] border border-[#C8A24D]/15 px-2 py-1"
                    style={{ fontSize: '10px', letterSpacing: '0.05em' }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="gold-line" style={{ opacity: 0.15 }} />
      <div className="max-w-screen-2xl mx-auto px-8 md:px-16 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-body text-[#AFAFAF] text-xs tracking-wide" style={{ fontSize: '11px' }}>
          © {currentYear} Bhargav Parmar. All rights reserved.
        </p>
        <p className="font-body text-[#AFAFAF] text-xs tracking-wide" style={{ fontSize: '11px' }}>
          Full Stack Developer · B.Sc IT Student · India
        </p>
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-[#0B6B4B] animate-pulse" />
          <span className="font-body text-[#AFAFAF] text-xs" style={{ fontSize: '11px' }}>Open to opportunities</span>
        </div>
      </div>
    </footer>
  );
}