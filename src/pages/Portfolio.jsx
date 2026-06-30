import Cursor from '@/components/portfolio/Cursor';
import Navigation from '@/components/portfolio/Navigation';
import Hero from '@/components/portfolio/Hero';
import About from '@/components/portfolio/About';
import Skills from '@/components/portfolio/Skills';
import Experience from '@/components/portfolio/Experience';
import Projects from '@/components/portfolio/Projects';
import Achievements from '@/components/portfolio/Achievements';
import Services from '@/components/portfolio/Services';
import Testimonials from '@/components/portfolio/Testimonials';
import Contact from '@/components/portfolio/Contact';
import Footer from '@/components/portfolio/Footer';

export default function Portfolio() {
  return (
    <div
      className="relative"
      style={{
        background: '#000000',
        minHeight: '100vh',
        overflowX: 'hidden',
      }}
    >
      {/* Custom luxury cursor */}
      <Cursor />

      {/* Fixed navigation */}
      <Navigation />

      {/* Main content */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Achievements />
        <Services />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}