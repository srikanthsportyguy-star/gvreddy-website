import {
  Building2, Gavel, Globe, ShieldCheck, Receipt, Banknote,
  Merge, Home, Scale, Fingerprint, Heart, ClipboardCheck,
} from 'lucide-react';

const areas = [
  { icon: Building2, title: 'Corporate Law', desc: 'Company formation, governance, compliance and corporate restructuring advisory.' },
  { icon: Gavel, title: 'Litigation & Dispute Resolution', desc: 'Strategic representation before courts, tribunals and arbitration panels.' },
  { icon: Globe, title: 'FEMA Advisory', desc: 'Foreign exchange regulations, cross-border investments and compliance advisory.' },
  { icon: ShieldCheck, title: 'PMLA Matters', desc: 'Money laundering defense, ED proceedings and preventive litigation.' },
  { icon: Receipt, title: 'International Taxation', desc: 'Tax planning, transfer pricing, DTAA advisory and dispute resolution.' },
  { icon: Banknote, title: 'Banking & Finance', desc: 'Banking regulations, NBFC compliance, debt recovery and securitization.' },
  { icon: Merge, title: 'Mergers & Acquisitions', desc: 'Due diligence, deal structuring, regulatory approvals and transaction support.' },
  { icon: Home, title: 'Real Estate Law', desc: 'Property transactions, RERA compliance, land acquisition and development.' },
  { icon: Scale, title: 'Civil Litigation', desc: 'Property disputes, contractual claims, injunctions and civil appeals.' },
  { icon: Fingerprint, title: 'Criminal Law', desc: 'White-collar crime defense, bail proceedings and criminal appeals.' },
  { icon: Heart, title: 'Family Law', desc: 'Matrimonial disputes, succession planning, custody and maintenance.' },
  { icon: ClipboardCheck, title: 'Regulatory Compliance', desc: 'Sector-specific compliance, licensing and regulatory representation.' },
];

export default function PracticeAreas() {
  return (
    <section id="practice" className="relative py-24 lg:py-32 bg-light-gray overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/[0.03] rounded-full blur-3xl" />

      <div className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16 reveal">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-8 h-[2px] bg-gold" />
              <span className="text-gold text-sm font-body tracking-wider uppercase">Our Expertise</span>
              <div className="w-8 h-[2px] bg-gold" />
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
              Practice <span className="gold-text-gradient">Areas</span>
            </h2>
            <p className="font-body text-lg text-primary/50 max-w-2xl mx-auto">
              Comprehensive legal services across diverse domains, delivered with precision and strategic insight.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {areas.map((area, i) => (
              <div
                key={area.title}
                className="reveal-scale group relative bg-white p-6 rounded-sm border border-primary/5 card-hover gold-border-hover"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div className="w-12 h-12 rounded-sm bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors duration-300">
                  <area.icon className="w-6 h-6 text-gold group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="font-display text-lg font-semibold text-primary mb-2 group-hover:text-gold-dark transition-colors duration-300">
                  {area.title}
                </h3>
                <p className="font-body text-sm text-primary/50 leading-relaxed">{area.desc}</p>
                <div className="mt-4 flex items-center gap-2 text-gold opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <span className="text-xs font-body font-medium">Learn More</span>
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
