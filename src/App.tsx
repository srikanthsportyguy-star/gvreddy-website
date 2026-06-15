import { useEffect } from 'react';
import { useReveal } from './hooks/useAnimations';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import PracticePage from './components/PracticePage';
import TeamPage from './components/TeamPage';
import Insights from './components/Insights';
import Testimonials from './components/Testimonials';
import Careers from './components/Careers';
import Contact from './components/Contact';
import PrivacyPolicy from './components/PrivacyPolicy';
import Footer from './components/Footer';

function App() {
  const revealRef = useReveal();

  useEffect(() => {
    const timer = setTimeout(() => {
      const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          el.classList.add('visible');
        }
      });
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div ref={revealRef} className="font-body">
      <Header />
      <main id="app-shell">
        <Hero />
        <section id="about" className="page-group page-group-about scroll-mt-24">
          <div className="page-group-inner">
            <About />
            <Stats />
          </div>
        </section>
        <section id="practice" className="page-group page-group-practice scroll-mt-24">
          <div className="page-group-inner">
            <PracticePage />
          </div>
        </section>
        <section id="team" className="page-group page-group-team scroll-mt-24">
          <div className="page-group-inner">
            <TeamPage />
          </div>
        </section>
        <section id="insights" className="page-group page-group-insights scroll-mt-24">
          <div className="page-group-inner">
            <Insights />
            <Testimonials />
          </div>
        </section>
        <section id="careers" className="page-group page-group-careers scroll-mt-24">
          <div className="page-group-inner">
            <Careers />
          </div>
        </section>
        <section id="contact" className="page-group page-group-contact scroll-mt-24">
          <div className="page-group-inner">
            <Contact />
          </div>
        </section>
        <PrivacyPolicy />
      </main>
      <Footer />
    </div>
  );
}

export default App;
