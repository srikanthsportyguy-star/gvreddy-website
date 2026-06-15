import { Banknote, Building2, HardHat, Factory, Cpu, HeartPulse, GraduationCap, Rocket } from 'lucide-react';

const industries = [
  { icon: Banknote, name: 'Banking & Finance' },
  { icon: Building2, name: 'Real Estate' },
  { icon: HardHat, name: 'Infrastructure' },
  { icon: Factory, name: 'Manufacturing' },
  { icon: Cpu, name: 'Technology' },
  { icon: HeartPulse, name: 'Healthcare' },
  { icon: GraduationCap, name: 'Education' },
  { icon: Rocket, name: 'Startups' },
];

export default function Industries() {
  return (
    <section className="relative py-10 lg:py-12 bg-white overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gold/[0.03] rounded-full blur-3xl" />

      <div className="section-padding">
        <div className="container-max">
          <div className="text-center mb-8 reveal">
            <div className="inline-flex items-center gap-2 mb-3">
              <div className="w-8 h-[2px] bg-gold" />
              <span className="text-gold text-sm font-body tracking-wider uppercase">Sectors We Serve</span>
              <div className="w-8 h-[2px] bg-gold" />
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
              Industries <span className="gold-text-gradient">Served</span>
            </h2>
            <p className="font-body text-lg text-primary/50 max-w-2xl mx-auto">
              Deep sector knowledge that enables precise, industry-specific legal strategies.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {industries.map((ind, i) => (
              <div
                key={ind.name}
                className="reveal-scale group flex flex-col items-center p-5 rounded-sm border border-primary/5 hover:border-gold/30 bg-light-gray/50 hover:bg-gold/5 transition-all duration-500 cursor-default"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="w-11 h-11 rounded-full bg-gold/10 flex items-center justify-center mb-3 group-hover:bg-gold/20 group-hover:scale-110 transition-all duration-300">
                  <ind.icon className="w-6 h-6 text-gold" />
                </div>
                <span className="font-body text-sm font-semibold text-primary/70 group-hover:text-gold-dark text-center transition-colors duration-300">
                  {ind.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
