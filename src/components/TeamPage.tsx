import { Banknote, Building2, ClipboardCheck, Globe, Home, Linkedin, Scale, Gavel, BookOpen, Users } from 'lucide-react';

type Role = 'Founder' | 'Partner' | 'Senior Associate' | 'Advocate';

const team = [
  { name: 'GV Reddy', designation: 'Founder' as Role, expertise: 'Corporate Law & Litigation', initials: 'GVR' },
  { name: 'Rajesh Kumar', designation: 'Partner' as Role, expertise: 'FEMA & Banking Law', initials: 'RK' },
  { name: 'Priya Sharma', designation: 'Partner' as Role, expertise: 'Mergers & Acquisitions', initials: 'PS' },
  { name: 'Anand Mehta', designation: 'Senior Associate' as Role, expertise: 'Taxation & Regulatory', initials: 'AM' },
  { name: 'Deepa Nair', designation: 'Senior Associate' as Role, expertise: 'Real Estate & RERA', initials: 'DN' },
  { name: 'Vikram Singh', designation: 'Advocate' as Role, expertise: 'Civil & Criminal Litigation', initials: 'VS' },
  { name: 'Sneha Patel', designation: 'Advocate' as Role, expertise: 'Corporate Compliance', initials: 'SP' },
  { name: 'Arjun Das', designation: 'Advocate' as Role, expertise: 'PMLA & White Collar Crime', initials: 'AD' },
];

const experiences = [
  { icon: Building2, title: 'Corporate Advisory', tag: 'Corporate', desc: 'Governance, restructuring and strategic transactions valued at over INR 5,000 crore.' },
  { icon: ClipboardCheck, title: 'Regulatory Compliance', tag: 'Regulatory', desc: 'Complex regulatory frameworks across SEBI, RBI and sector-specific mandates.' },
  { icon: Scale, title: 'Commercial Litigation', tag: 'Litigation', desc: 'High-stakes disputes before the Supreme Court, High Courts and major tribunals.' },
  { icon: Banknote, title: 'Banking Recovery', tag: 'Banking', desc: 'Recovery proceedings under SARFAESI and IBC for leading financial institutions.' },
  { icon: Home, title: 'Real Estate Deals', tag: 'Real Estate', desc: 'Land acquisition, joint development and RERA-compliant project structuring.' },
  { icon: Globe, title: 'Cross-Border Advisory', tag: 'International', desc: 'FEMA compliance for inbound/outbound investments, ECB and ODI frameworks.' },
];

const roleIcon = (role: Role) => {
  if (role === 'Founder') return Scale;
  if (role === 'Partner') return Gavel;
  if (role === 'Senior Associate') return BookOpen;
  return Users;
};

export default function TeamPage() {
  return (
    <div className="team-page section-padding w-full">
      <div className="container-max">
        <div className="grid lg:grid-cols-[1.15fr_0.95fr] gap-6 items-start">
          <div className="reveal">
            <div className="inline-flex items-center gap-2 mb-3">
              <div className="w-8 h-[2px] bg-gold" />
              <span className="text-gold text-sm font-body tracking-wider uppercase">Our People</span>
            </div>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-primary mb-3">
              Our <span className="gold-text-gradient">Team</span>
            </h2>
            <p className="font-body text-sm text-primary/50 max-w-xl mb-5">
              Experienced legal professionals dedicated to delivering exceptional results for our clients.
            </p>

            <div className="grid sm:grid-cols-2 gap-3">
              {team.map((member, i) => {
                const Icon = roleIcon(member.designation);
                return (
                  <article
                    key={member.name}
                    className="reveal-scale flex items-center gap-4 bg-white border border-primary/5 rounded-sm p-4 hover:border-gold/30 transition-all duration-300"
                    style={{ transitionDelay: `${i * 40}ms` }}
                  >
                    <div className="w-14 h-14 rounded-sm gold-gradient flex items-center justify-center shrink-0">
                      <span className="font-display text-base font-bold text-primary">{member.initials}</span>
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <h3 className="font-display text-base font-semibold text-primary truncate">{member.name}</h3>
                        <Icon className="w-3.5 h-3.5 text-gold shrink-0" />
                      </div>
                      <span className="inline-block mt-1 px-2 py-0.5 bg-gold/10 text-gold text-[11px] font-body rounded-sm">
                        {member.designation}
                      </span>
                      <p className="font-body text-xs text-primary/50 mt-1">{member.expertise}</p>
                      <button className="mt-2 w-7 h-7 rounded-full border border-primary/10 flex items-center justify-center text-primary/30 hover:text-gold hover:border-gold/40 transition-colors">
                        <Linkedin className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <aside className="reveal-right bg-primary rounded-sm p-6 text-white shadow-2xl shadow-primary/10">
            <div className="inline-flex items-center gap-2 mb-3">
              <div className="w-7 h-[2px] bg-gold" />
              <span className="text-gold text-xs font-body tracking-wider uppercase">Track Record</span>
            </div>
            <h3 className="font-display text-2xl font-bold leading-tight mb-3">
              Representative <span className="gold-text-gradient">Experience</span>
            </h3>
            <p className="font-body text-sm text-white/50 leading-relaxed mb-5">
              Landmark matters that demonstrate our capability and commitment to excellence.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-3">
              {experiences.map((item) => (
                <article key={item.title} className="border border-white/10 bg-white/[0.03] rounded-sm p-3">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-sm bg-gold/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-[18px] h-[18px] text-gold" />
                    </div>
                    <div>
                      <span className="inline-block mb-1 px-2 py-0.5 rounded-sm bg-gold/10 text-gold text-[10px] font-body uppercase tracking-wider">
                        {item.tag}
                      </span>
                      <h4 className="font-display text-base font-semibold text-white">{item.title}</h4>
                      <p className="font-body text-xs text-white/45 leading-relaxed mt-1">{item.desc}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
