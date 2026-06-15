import { useEffect } from 'react';
import { useReveal } from './hooks/useAnimations';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Stats from './components/Stats';
import PracticeAreas from './components/PracticeAreas';
import WhyChooseUs from './components/WhyChooseUs';
import Industries from './components/Industries';
import Team from './components/Team';
import Experience from './components/Experience';
import Insights from './components/Insights';
import Testimonials from './components/Testimonials';
import Careers from './components/Careers';
import Contact from './components/Contact';
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
      <main>
        <Hero />
        <About />
        <Stats />
        <PracticeAreas />
        <WhyChooseUs />
        <Industries />
        <Team />
        <Experience />
        <Insights />
        <Testimonials />
        <Careers />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
