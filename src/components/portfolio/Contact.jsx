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

function GoldInput({ label, type = 'text', required, multiline, name }) {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState('');

  return (
    <div className="relative">
      <label
        className="block font-body text-xs tracking-widest uppercase mb-3 transition-colors duration-300"
        style={{
          letterSpacing: '0.25em',
          fontSize: '10px',
          color: focused ? '#0B6B4B' : '#C8A24D',
        }}
      >
        {label} {required && <span style={{ color: '#0B6B4B' }}>*</span>}
      </label>
      {multiline ? (
        <textarea
          name={name}
          rows={5}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="w-full bg-transparent font-body text-white outline-none resize-none"
          style={{
            fontSize: '1rem',
            lineHeight: '1.6',
            borderBottom: `1px solid ${focused ? '#0B6B4B' : 'rgba(200,162,77,0.35)'}`,
            paddingBottom: '12px',
            transition: 'border-color 0.3s ease',
            caretColor: '#C8A24D',
          }}
        />
      ) : (
        <input
          name={name}
          type={type}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="w-full bg-transparent font-body text-white outline-none"
          style={{
            fontSize: '1rem',
            borderBottom: `1px solid ${focused ? '#0B6B4B' : 'rgba(200,162,77,0.35)'}`,
            paddingBottom: '12px',
            transition: 'border-color 0.3s ease',
            caretColor: '#C8A24D',
          }}
        />
      )}
      {/* Focus indicator */}
      <div
        className="absolute bottom-0 left-0 h-px bg-[#0B6B4B] transition-all duration-400"
        style={{ width: focused ? '100%' : '0' }}
      />
    </div>
  );
}

export default function Contact() {
  const [sectionRef, visible] = useReveal();
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      setSent(true);
    }, 2000);
  };

  return (
    <section id="contact" ref={sectionRef} className="relative py-24 overflow-hidden" style={{ background: '#000000' }}>
      {/* Gold vertical hairline */}
      <div className="absolute right-[8%] top-0 bottom-0 w-px bg-[#C8A24D] opacity-5 z-0" />

      {/* Emerald wash */}
      <div
        className="absolute -bottom-40 -left-40 pointer-events-none z-0"
        style={{
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(11,107,75,0.08) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-screen-2xl mx-auto px-8 md:px-16 relative z-10">
        {/* Header */}
        <div className={`flex items-center gap-6 mb-16 transition-all duration-900 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="section-number">08 — Contact</span>
          <div className="h-px bg-[#C8A24D] w-16" />
        </div>

        {/* Massive headline */}
        <div className="mb-24 overflow-hidden">
          <h2
            className={`font-heading text-white font-black leading-none transition-all duration-1200 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
            style={{
              fontSize: 'clamp(3rem, 9vw, 9rem)',
              letterSpacing: '-0.04em',
              lineHeight: '0.85',
              transitionDelay: '0.1s',
            }}
          >
            LET'S BUILD<br />
            SOMETHING<br />
            <span style={{ color: '#C8A24D' }}>EXTRAORDINARY</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          {/* LEFT — Contact info */}
          <div
            className={`lg:col-span-4 pr-0 lg:pr-16 mb-16 lg:mb-0 transition-all duration-900 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}
            style={{ transitionDelay: '0.3s' }}
          >
            <p className="font-body text-[#AFAFAF] mb-12 leading-relaxed" style={{ fontSize: '1rem', lineHeight: '1.85' }}>
              Ready to partner on your next digital venture? Whether it's a complex 
              full-stack application, an e-commerce platform, or a premium web presence — 
              let's engineer something exceptional together.
            </p>

            <div className="flex flex-col gap-6">
              {[
                { label: 'Email', value: 'bsparmar1221@gmail.com', href: 'mailto:bsparmar1221@gmail.com' },
                { label: 'Phone', value: '+91 9106383006', href: 'tel:+919106383006' },
                { label: 'Location', value: 'Royal residency, Kamrej, Surat - 394180', href: null },
                { label: 'Upwork', value: 'Available for Projects', href: '#' },
              ].map((item) => (
                <div key={item.label} className="border-b border-[#C8A24D]/10 pb-5">
                  <span className="section-number block mb-1">{item.label}</span>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="font-body text-[#AFAFAF] hover:text-[#C8A24D] transition-colors duration-300"
                      style={{ fontSize: '0.9375rem' }}
                      data-hover
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="font-body text-[#AFAFAF]" style={{ fontSize: '0.9375rem' }}>{item.value}</span>
                  )}
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="flex gap-6 mt-10">
              {[
                { label: 'GitHub', href: 'https://github.com' },
                { label: 'LinkedIn', href: 'https://linkedin.com' },
                { label: 'Upwork', href: 'https://upwork.com' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-[#AFAFAF] hover:text-[#C8A24D] text-xs tracking-widest uppercase transition-colors duration-300 nav-link-hover"
                  style={{ letterSpacing: '0.2em', fontSize: '10px' }}
                  data-hover
                >
                  {social.label}
                </a>
              ))}
            </div>
          </div>

          {/* Gold divider */}
          <div className="hidden lg:flex lg:col-span-1 justify-center">
            <div className="w-px bg-[#C8A24D] self-stretch" style={{ opacity: 0.15 }} />
          </div>

          {/* RIGHT — Form */}
          <div
            className={`lg:col-span-7 lg:pl-16 transition-all duration-900 ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}
            style={{ transitionDelay: '0.4s' }}
          >
            {sent ? (
              <div className="flex flex-col items-start justify-center h-full py-20">
                <div className="w-12 h-px bg-[#0B6B4B] mb-8" />
                <h3 className="font-heading text-white text-3xl font-bold mb-4">Message Received.</h3>
                <p className="font-body text-[#AFAFAF] leading-relaxed">
                  Thank you for reaching out. I will review your project details and 
                  respond within 24 hours with a considered response.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <GoldInput label="Full Name" name="name" required />
                  <GoldInput label="Email Address" name="email" type="email" required />
                </div>
                <GoldInput label="Phone Number" name="phone" type="tel" />
                <GoldInput label="Project Details" name="message" multiline required />

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={sending}
                    className="font-body text-xs tracking-widest uppercase text-black bg-[#C8A24D] px-14 py-5 hover:bg-[#0B6B4B] hover:text-white transition-all duration-400 disabled:opacity-50"
                    style={{ letterSpacing: '0.25em', fontSize: '11px' }}
                    data-hover
                  >
                    {sending ? 'Transmitting...' : 'Initiate Project →'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}