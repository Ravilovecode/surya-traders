import { useEffect } from 'react';
import Header, { TopBar } from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import { Grades, Categories } from './components/Products.jsx';
import { Solutions, WhyUs, Process, Markets } from './components/Business.jsx';
import { Certifications, Catalogue } from './components/Certifications.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

// Fades sections in as they scroll into view.
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.rv');
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce || !('IntersectionObserver' in window)) {
      document.documentElement.classList.remove('js-reveal');
      return undefined;
    }
    document.documentElement.classList.add('js-reveal');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

export default function App() {
  useReveal();
  return (
    <>
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <TopBar />
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Grades />
        <Categories />
        <Solutions />
        <WhyUs />
        <Process />
        <Markets />
        <Certifications />
        <Catalogue />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
