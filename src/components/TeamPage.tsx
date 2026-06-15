import { Linkedin, Scale, Gavel, BookOpen, Users } from 'lucide-react';

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

const roleIcon = (role: Role) => {
  if (role === 'Founder') return Scale;
  if (role === 'Partner') return Gavel;
  if (role === 'Senior Associate') return BookOpen;
  return Users;
};

export default function TeamPage() {
  const [founder, ...members] = team;

  return (
    <div className="team-page section-padding w-full">
      <div className="container-max">
        <div className="reveal">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between mb-5">
            <div>
              <div className="inline-flex items-center gap-2 mb-3">
                <div className="w-8 h-[2px] bg-gold" />
                <span className="text-gold text-sm font-body tracking-wider uppercase">Our People</span>
              </div>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-primary mb-3">
                Our <span className="gold-text-gradient">Team</span>
              </h2>
              <p className="font-body text-sm text-primary/50 max-w-xl">
                Experienced legal professionals dedicated to delivering exceptional results for our clients.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-2 text-center md:min-w-[22rem]">
              <div className="rounded-sm border border-primary/5 bg-white px-4 py-3">
                <span className="font-display text-2xl font-bold text-primary">40+</span>
                <p className="mt-1 font-body text-[11px] uppercase tracking-wider text-primary/45">Professionals</p>
              </div>
              <div className="rounded-sm border border-primary/5 bg-white px-4 py-3">
                <span className="font-display text-2xl font-bold text-primary">10+</span>
                <p className="mt-1 font-body text-[11px] uppercase tracking-wider text-primary/45">Paralegals</p>
              </div>
              <div className="rounded-sm border border-primary/5 bg-white px-4 py-3">
                <span className="font-display text-2xl font-bold text-primary">Multi</span>
                <p className="mt-1 font-body text-[11px] uppercase tracking-wider text-primary/45">Practice</p>
              </div>
            </div>
          </div>

          <article className="founder-card reveal-scale mb-3 overflow-hidden rounded-sm border border-gold/25 bg-primary text-white shadow-xl shadow-primary/10">
            <div className="grid lg:grid-cols-[18rem_1fr]">
              <img
                src="/assets/gv-reddy-tile.jpg"
                alt={founder.name}
                className="h-64 w-full bg-primary/10 object-contain object-center sm:h-72 lg:h-full lg:object-cover"
              />
              <div className="flex flex-col justify-center p-6">
                <span className="mb-2 inline-flex w-fit rounded-sm bg-gold/10 px-2 py-1 text-[11px] font-body uppercase tracking-wider text-gold">
                  Founder
                </span>
                <div className="flex items-center gap-2">
                  <h3 className="font-display text-3xl font-semibold text-white">{founder.name}</h3>
                  <Scale className="h-4 w-4 text-gold" />
                </div>
                <p className="mt-2 font-body text-sm text-white/55">{founder.expertise}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-sm border border-white/10 px-3 py-1 text-xs text-white/55">Corporate Law</span>
                  <span className="rounded-sm border border-white/10 px-3 py-1 text-xs text-white/55">Litigation</span>
                  <span className="rounded-sm border border-white/10 px-3 py-1 text-xs text-white/55">Advisory</span>
                </div>
              </div>
            </div>
          </article>

          <div className="team-member-grid grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {members.map((member, i) => {
              const Icon = roleIcon(member.designation);
              return (
                <article
                  key={member.name}
                  className="reveal-scale flex items-center gap-3 bg-white border border-primary/5 rounded-sm p-3 hover:border-gold/30 transition-all duration-300"
                  style={{ transitionDelay: `${i * 40}ms` }}
                >
                  <div className="w-12 h-12 rounded-sm gold-gradient flex items-center justify-center shrink-0">
                    <span className="font-display text-sm font-bold text-primary">{member.initials}</span>
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
                    <button className="mt-2 w-7 h-7 rounded-full border border-primary/10 flex items-center justify-center text-primary/30 hover:text-gold hover:border-gold/40 transition-colors" aria-label={`${member.name} LinkedIn`}>
                      <Linkedin className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
