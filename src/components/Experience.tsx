import { Building2, ClipboardCheck, Scale, Banknote, Home, Globe } from 'lucide-react';

const experiences = [
  { icon: Building2, title: 'Corporate Advisory', desc: 'Advised leading Indian corporations on governance, restructuring and strategic transactions valued at over INR 5,000 crore.', tag: 'Corporate' },
  { icon: ClipboardCheck, title: 'Regulatory Compliance', desc: 'Guided multinational clients through complex regulatory frameworks across SEBI, RBI and sector-specific compliance mandates.', tag: 'Regulatory' },
  { icon: Scale, title: 'Commercial Litigation', desc: 'Successfully represented clients in high-stakes commercial disputes before the Supreme Court, High Courts and major tribunals.', tag: 'Litigation' },
  { icon: Banknote, title: 'Banking Recovery Matters', desc: 'Facilitated recovery proceedings under SARFAESI and IBC, securing favorable outcomes for leading financial institutions.', tag: 'Banking' },
  { icon: Home, title: 'Real Estate Transactions', desc: 'Structured and closed marquee real estate deals including land acquisition, joint development and RERA-compliant projects.', tag: 'Real Estate' },
  { icon: Globe, title: 'Cross-Border Regulatory Advisory', desc: 'Advised on FEMA compliance for inbound and outbound investments, ECB frameworks and ODI regulations.', tag: 'International' },
];

export default function Experience() {
  return (
    <section className="relative py-10 lg:py-12 bg-primary overflow-hidden">
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="section-padding">
        <div className="container-max">
          <div className="text-center mb-8 reveal">
            <div className="inline-flex items-center gap-2 mb-3">
              <div className="w-8 h-[2px] bg-gold" />
              <span className="text-gold text-sm font-body tracking-wider uppercase">Track Record</span>
              <div className="w-8 h-[2px] bg-gold" />
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Representative <span className="gold-text-gradient">Experience</span>
            </h2>
            <p className="font-body text-lg text-white/50 max-w-2xl mx-auto">
              Landmark matters that demonstrate our capability and commitment to excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {experiences.map((exp, i) => (
              <div
                key={exp.title}
                className="reveal group relative p-5 rounded-sm border border-white/10 hover:border-gold/30 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-500"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <span className="absolute top-5 right-5 px-2 py-1 bg-gold/10 text-gold text-[10px] font-body font-semibold tracking-wider uppercase rounded-sm">
                  {exp.tag}
                </span>
                <div className="w-10 h-10 rounded-sm bg-gold/10 flex items-center justify-center mb-3 group-hover:bg-gold/20 transition-colors duration-300">
                  <exp.icon className="w-5 h-5 text-gold" />
                </div>
                <h3 className="font-display text-lg font-semibold text-white mb-2 group-hover:text-gold transition-colors duration-300">
                  {exp.title}
                </h3>
                <p className="font-body text-sm text-white/40 leading-relaxed group-hover:text-white/60 transition-colors duration-300">
                  {exp.desc}
                </p>
                <div className="mt-4 w-0 h-[2px] bg-gold group-hover:w-full transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
