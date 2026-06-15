import {
  Banknote,
  Briefcase,
  Building2,
  ClipboardCheck,
  Crown,
  Factory,
  Fingerprint,
  Gavel,
  Globe,
  GraduationCap,
  HardHat,
  Heart,
  HeartPulse,
  Home,
  Layers,
  MessageSquare,
  Merge,
  Receipt,
  Rocket,
  Scale,
  Search,
  ShieldCheck,
  Users,
  Cpu,
} from 'lucide-react';

const areas = [
  { icon: Building2, title: 'Corporate Law', desc: 'Governance, compliance and restructuring advisory.' },
  { icon: Gavel, title: 'Litigation', desc: 'Representation before courts, tribunals and arbitrators.' },
  { icon: Globe, title: 'FEMA Advisory', desc: 'Cross-border investments and foreign exchange compliance.' },
  { icon: ShieldCheck, title: 'PMLA Matters', desc: 'ED proceedings, defense strategy and preventive litigation.' },
  { icon: Receipt, title: 'International Tax', desc: 'DTAA, transfer pricing and tax dispute resolution.' },
  { icon: Banknote, title: 'Banking & Finance', desc: 'NBFC compliance, recovery and securitization matters.' },
  { icon: Merge, title: 'Mergers & Acquisitions', desc: 'Due diligence, structuring and transaction support.' },
  { icon: Home, title: 'Real Estate Law', desc: 'RERA, property transactions and development advisory.' },
  { icon: Scale, title: 'Civil Litigation', desc: 'Contractual claims, injunctions and civil appeals.' },
  { icon: Fingerprint, title: 'Criminal Law', desc: 'White-collar crime defense, bail and criminal appeals.' },
  { icon: Heart, title: 'Family Law', desc: 'Matrimonial disputes, succession, custody and maintenance.' },
  { icon: ClipboardCheck, title: 'Regulatory Compliance', desc: 'Licensing, filings and sector-specific representation.' },
];

const advantages = [
  { icon: Crown, title: 'Experienced Leadership' },
  { icon: Users, title: 'Client-Centric Approach' },
  { icon: Briefcase, title: 'Corporate & Litigation Expertise' },
  { icon: Search, title: 'Research-Driven Strategy' },
  { icon: MessageSquare, title: 'Transparent Communication' },
  { icon: Layers, title: 'Multidisciplinary Legal Team' },
];

const industries = [
  { icon: Banknote, name: 'Banking' },
  { icon: Building2, name: 'Real Estate' },
  { icon: HardHat, name: 'Infrastructure' },
  { icon: Factory, name: 'Manufacturing' },
  { icon: Cpu, name: 'Technology' },
  { icon: HeartPulse, name: 'Healthcare' },
  { icon: GraduationCap, name: 'Education' },
  { icon: Rocket, name: 'Startups' },
];

export default function PracticePage() {
  return (
    <div className="practice-page section-padding w-full">
      <div className="container-max">
        <div className="grid lg:grid-cols-[1.45fr_0.75fr] gap-6 items-start">
          <div className="reveal">
            <div className="inline-flex items-center gap-2 mb-3">
              <div className="w-8 h-[2px] bg-gold" />
              <span className="text-gold text-sm font-body tracking-wider uppercase">Our Expertise</span>
            </div>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-primary mb-3">
              Practice <span className="gold-text-gradient">Areas</span>
            </h2>
            <p className="font-body text-sm text-primary/50 max-w-2xl mb-5">
              Comprehensive legal services across diverse domains, delivered with precision and strategic insight.
            </p>

            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-3">
              {areas.map((area, i) => (
                <article
                  key={area.title}
                  className="reveal-scale group bg-white border border-primary/5 rounded-sm p-4 hover:border-gold/30 transition-all duration-300"
                  style={{ transitionDelay: `${i * 35}ms` }}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-sm bg-gold/10 flex items-center justify-center shrink-0">
                      <area.icon className="w-[18px] h-[18px] text-gold" />
                    </div>
                    <div>
                      <h3 className="font-display text-base font-semibold text-primary group-hover:text-gold-dark transition-colors">
                        {area.title}
                      </h3>
                      <p className="font-body text-xs text-primary/50 leading-relaxed mt-1">{area.desc}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <aside className="reveal-right bg-primary text-white rounded-sm p-6 shadow-2xl shadow-primary/10">
            <div className="inline-flex items-center gap-2 mb-3">
              <div className="w-7 h-[2px] bg-gold" />
              <span className="text-gold text-xs font-body tracking-wider uppercase">Our Advantage</span>
            </div>
            <h3 className="font-display text-2xl font-bold leading-tight mb-3">
              Why Choose <span className="gold-text-gradient">GV Reddy Advocates</span>
            </h3>
            <p className="font-body text-sm text-white/50 leading-relaxed mb-5">
              Distinguished by expertise, integrity and an unwavering commitment to achieving results.
            </p>

            <div className="space-y-3">
              {advantages.map((item, i) => (
                <div key={item.title} className="flex items-center gap-3 border border-white/10 bg-white/[0.03] rounded-sm p-3">
                  <div className="w-9 h-9 rounded-sm bg-gold/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-[18px] h-[18px] text-gold" />
                  </div>
                  <div>
                    <span className="font-body text-[10px] text-white/25">{String(i + 1).padStart(2, '0')}</span>
                    <p className="font-body text-sm font-medium text-white/80">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </div>

        <div className="mt-5 grid grid-cols-4 lg:grid-cols-8 gap-2 reveal">
          {industries.map((industry) => (
            <div key={industry.name} className="flex items-center justify-center gap-2 bg-white border border-primary/5 rounded-sm px-3 py-2">
              <industry.icon className="w-4 h-4 text-gold shrink-0" />
              <span className="font-body text-xs font-medium text-primary/60">{industry.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
