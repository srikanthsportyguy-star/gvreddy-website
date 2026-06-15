import { useState } from 'react';
import { ArrowRight, Users, BookOpen, Briefcase, Gavel } from 'lucide-react';

const founderTileImage = '/assets/gv-reddy-tile.jpg';

const stats = [
  { icon: Users, value: '40+', label: 'Legal Professionals' },
  { icon: BookOpen, value: '10+', label: 'Paralegals' },
  { icon: Briefcase, value: 'Multiple', label: 'Practice Areas' },
  { icon: Gavel, value: 'Expert', label: 'Corporate & Litigation' },
];

export default function Hero() {
  const [showFounderImage, setShowFounderImage] = useState(true);

  return (
    <section id="home" className="relative min-h-[100svh] flex items-center bg-primary overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(201,163,91,0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="section-padding w-full pt-20 pb-10">
        <div className="container-max grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          <div className="reveal-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 border border-gold/30 rounded-sm mb-5">
              <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span className="text-gold text-sm font-body tracking-wider uppercase">Full-Service Law Firm</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.1] mb-5">
              Strategic Legal <span className="gold-text-gradient">Solutions.</span>
              <br />
              Trusted <span className="gold-text-gradient">Results.</span>
            </h1>

            <p className="font-body text-base lg:text-lg text-white/60 max-w-xl mb-7 leading-relaxed">
              Providing expert legal representation and advisory services across Corporate Law,
              Litigation, Taxation, FEMA, PMLA, Banking, Real Estate and Regulatory Matters.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 gold-gradient text-primary font-semibold rounded-sm hover:shadow-xl hover:shadow-gold/20 transition-all duration-300 hover:-translate-y-0.5 group"
              >
                Schedule Consultation
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#practice"
                className="inline-flex items-center gap-2 px-8 py-3.5 border border-gold/40 text-gold font-semibold rounded-sm hover:bg-gold/10 transition-all duration-300"
              >
                Explore Services
              </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col items-center p-4 border border-white/10 rounded-sm hover:border-gold/30 transition-colors duration-300 group"
                >
                  <stat.icon className="w-5 h-5 text-gold mb-2 transition-transform duration-300 group-hover:scale-110" />
                  <span className="font-display text-xl font-bold text-white">{stat.value}</span>
                  <span className="text-xs text-white/40 font-body mt-1">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal-right hidden lg:block">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-gold/20 rounded-sm" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-gold/30 rounded-sm" />

              <div className="relative max-h-[calc(100svh-160px)] overflow-hidden rounded-sm aspect-[4/5] bg-gradient-to-b from-primary to-dark-gray shadow-2xl shadow-black/40">
                {showFounderImage ? (
                  <>
                    <img
                      src={founderTileImage}
                      alt="G.V. Reddy, Founder and Managing Partner"
                      className="h-full w-full object-cover object-center"
                      onError={() => setShowFounderImage(false)}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/25 via-transparent to-transparent" />
                  </>
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="w-32 h-32 rounded-full bg-gold/10 border-2 border-gold/30 flex items-center justify-center mb-6">
                      <Gavel className="w-16 h-16 text-gold/50" />
                    </div>
                    <span className="font-display text-2xl text-white/80 font-semibold">GV Reddy</span>
                    <span className="font-body text-sm text-gold mt-2">Founding Partner</span>
                    <div className="w-12 h-[1px] bg-gold/50 mt-4" />
                    <span className="font-body text-xs text-white/40 mt-3">Senior Advocate</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs text-white/30 font-body tracking-widest uppercase">Scroll</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-gold/50 to-transparent" />
      </div>
    </section>
  );
}
