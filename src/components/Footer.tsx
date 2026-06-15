import { ArrowUp } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-primary overflow-hidden">
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="section-padding py-6">
        <div className="container-max flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-white/20">
            &copy; {new Date().getFullYear()} GV Reddy Advocates. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="font-body text-xs text-white/20 hover:text-gold transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="font-body text-xs text-white/20 hover:text-gold transition-colors duration-300">Terms of Service</a>
            <a href="#" className="font-body text-xs text-white/20 hover:text-gold transition-colors duration-300">Disclaimer</a>
          </div>
        </div>
      </div>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 w-11 h-11 rounded-sm gold-gradient flex items-center justify-center shadow-lg shadow-gold/20 hover:shadow-xl hover:shadow-gold/30 transition-all duration-300 hover:-translate-y-0.5 z-40"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5 text-primary" />
      </button>
    </footer>
  );
}
