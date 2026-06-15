import { useState, useEffect, type ReactNode } from 'react';
import { createPortal } from 'react-dom';
import { Menu, X, Scale } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Practice Areas', href: '#practice' },
  { label: 'Team', href: '#team' },
  { label: 'Insights', href: '#insights' },
  { label: 'Careers', href: '#careers' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const id = href.replace('#', '');
    const target = document.getElementById(id);

    setMobileOpen(false);

    if (!target) return;

    const headerOffset = 96;
    window.requestAnimationFrame(() => {
      const targetY = target.getBoundingClientRect().top + window.scrollY - headerOffset;
      window.scrollTo({ top: targetY, behavior: 'smooth' });
      window.history.replaceState(null, '', href);
    });
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const mobileMenu: ReactNode = (
    <div
      className={`fixed inset-0 z-[9999] lg:hidden transition-opacity duration-300 ${
        mobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      } ${mobileOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
      aria-hidden={!mobileOpen}
    >
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-[10px]"
        onClick={() => setMobileOpen(false)}
      />
      <div className="absolute inset-0 border border-white/10 bg-primary/98 shadow-2xl shadow-black/50">
        <div className="flex h-full flex-col bg-primary/96 px-5 pt-5 pb-6 overscroll-contain touch-pan-y">
          <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
            <div>
              <p className="text-[11px] uppercase tracking-[0.35em] text-gold/70">Navigation</p>
              <p className="mt-2 font-display text-xl leading-tight text-white">Menu</p>
            </div>
            <button
              onClick={() => setMobileOpen(false)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-white/10 bg-white/[0.04] text-white hover:border-gold/30 hover:text-gold"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex flex-1 flex-col gap-2 overflow-y-auto pr-1 pb-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="flex items-center justify-between rounded-sm border border-white/10 bg-white/[0.05] px-4 py-4 text-lg font-display text-white transition-all duration-300 hover:border-gold/30 hover:bg-gold/10 hover:text-gold"
              >
                <span>{link.label}</span>
                <span className="text-xs uppercase tracking-[0.3em] text-white/25">Go</span>
              </a>
            ))}
            <a
              href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('#contact');
                }}
              className="mt-3 inline-flex w-full items-center justify-center px-8 py-4 gold-gradient text-primary font-semibold rounded-sm"
            >
              Schedule Consultation
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-primary/95 backdrop-blur-md shadow-lg shadow-black/20 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="section-padding">
        <div className="container-max flex items-center justify-between">
          <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('#home'); }} className="flex items-center gap-3 group">
            <div className="w-10 h-10 gold-gradient rounded-sm flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <Scale className="w-5 h-5 text-primary" strokeWidth={2.5} />
            </div>
            <div className="flex flex-col">
              <span className="font-display text-lg sm:text-xl font-bold text-white tracking-wide leading-tight">G. V. Reddy</span>
              <span className="text-[10px] font-body text-gold tracking-[0.25em] uppercase -mt-0.5"> &amp; Co. Advocates</span>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="relative px-4 py-2 text-sm font-body font-medium text-white/80 hover:text-gold transition-colors duration-300 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gold transition-all duration-300 group-hover:w-6" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="hidden md:inline-flex items-center px-6 py-2.5 gold-gradient text-primary text-sm font-semibold rounded-sm hover:shadow-lg hover:shadow-gold/20 transition-all duration-300 hover:-translate-y-0.5"
            >
              Schedule Consultation
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-white hover:text-gold transition-colors p-2"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {typeof document !== 'undefined' ? createPortal(mobileMenu, document.body) : null}
    </header>
  );
}
