import { ArrowRight, Users, BookOpen, Briefcase, Gavel } from 'lucide-react';

const stats = [
  { icon: Users, value: '40+', label: 'Legal Professionals' },
  { icon: BookOpen, value: '10+', label: 'Paralegals' },
  { icon: Briefcase, value: 'Multiple', label: 'Practice Areas' },
  { icon: Gavel, value: 'Expert', label: 'Corporate & Litigation' },
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-primary overflow-hidden">
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

      <div className="section-padding w-full pt-24 pb-16">
        <div className="container-max grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="reveal-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 border border-gold/30 rounded-sm mb-8">
              <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <span className="text-gold text-sm font-body tracking-wider uppercase">Full-Service Law Firm</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-6">
              Strategic Legal <span className="gold-text-gradient">Solutions.</span>
              <br />
              Trusted <span className="gold-text-gradient">Results.</span>
            </h1>

            <p className="font-body text-lg text-white/60 max-w-xl mb-10 leading-relaxed">
              Providing expert legal representation and advisory services across Corporate Law,
              Litigation, Taxation, FEMA, PMLA, Banking, Real Estate and Regulatory Matters.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
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

              <div className="relative overflow-hidden rounded-sm aspect-[3/4] bg-gradient-to-b from-primary to-dark-gray">
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-gold/10 border-2 border-gold/30 flex items-center justify-center mb-6">
                    <Gavel className="w-16 h-16 text-gold/50" />
                  </div>
                  <span className="font-display text-2xl text-white/80 font-semibold">GV Reddy</span>
                  <span className="font-body text-sm text-gold mt-2">Founding Partner</span>
                  <div className="w-12 h-[1px] bg-gold/50 mt-4" />
                  <span className="font-body text-xs text-white/40 mt-3">Senior Advocate</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-60" />
              </div>

              <div className="absolute -bottom-6 -left-6 bg-primary border border-gold/30 px-6 py-4 rounded-sm shadow-2xl">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-gold animate-pulse" />
                  <div>
                    <span className="font-display text-lg font-bold text-white">25+</span>
                    <span className="block text-xs text-gold font-body">Years of Excellence</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs text-white/30 font-body tracking-widest uppercase">Scroll</span>
        <div className="w-[1px] h-8 bg-gradient-to-b from-gold/50 to-transparent" />
      </div>
    </section>
  );
}
