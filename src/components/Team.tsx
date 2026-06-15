import { Linkedin, Scale, Gavel, BookOpen, Users } from 'lucide-react';

type Role = 'Founder' | 'Partner' | 'Senior Associate' | 'Advocate';

interface TeamMember {
  name: string;
  designation: Role;
  expertise: string;
  initials: string;
}

const team: TeamMember[] = [
  { name: 'GV Reddy', designation: 'Founder', expertise: 'Corporate Law & Litigation', initials: 'GVR' },
  { name: 'Rajesh Kumar', designation: 'Partner', expertise: 'FEMA & Banking Law', initials: 'RK' },
  { name: 'Priya Sharma', designation: 'Partner', expertise: 'Mergers & Acquisitions', initials: 'PS' },
  { name: 'Anand Mehta', designation: 'Senior Associate', expertise: 'Taxation & Regulatory', initials: 'AM' },
  { name: 'Deepa Nair', designation: 'Senior Associate', expertise: 'Real Estate & RERA', initials: 'DN' },
  { name: 'Vikram Singh', designation: 'Advocate', expertise: 'Civil & Criminal Litigation', initials: 'VS' },
  { name: 'Sneha Patel', designation: 'Advocate', expertise: 'Corporate Compliance', initials: 'SP' },
  { name: 'Arjun Das', designation: 'Advocate', expertise: 'PMLA & White Collar Crime', initials: 'AD' },
];

const roleIcon = (role: Role) => {
  switch (role) {
    case 'Founder': return Scale;
    case 'Partner': return Gavel;
    case 'Senior Associate': return BookOpen;
    case 'Advocate': return Users;
  }
};

const roleColor = (role: Role) => {
  switch (role) {
    case 'Founder': return 'from-gold to-gold-dark';
    case 'Partner': return 'from-gold/80 to-gold';
    case 'Senior Associate': return 'from-gold/60 to-gold/80';
    case 'Advocate': return 'from-gold/40 to-gold/60';
  }
};

export default function Team() {
  return (
    <section id="team" className="relative py-24 lg:py-32 bg-light-gray overflow-hidden">
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gold/[0.03] rounded-full blur-3xl" />

      <div className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16 reveal">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-8 h-[2px] bg-gold" />
              <span className="text-gold text-sm font-body tracking-wider uppercase">Our People</span>
              <div className="w-8 h-[2px] bg-gold" />
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
              Our <span className="gold-text-gradient">Team</span>
            </h2>
            <p className="font-body text-lg text-primary/50 max-w-2xl mx-auto">
              Experienced legal professionals dedicated to delivering exceptional results for our clients.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => {
              const Icon = roleIcon(member.designation);
              return (
                <div
                  key={member.name}
                  className="reveal-scale group bg-white rounded-sm overflow-hidden border border-primary/5 card-hover"
                  style={{ transitionDelay: `${i * 60}ms` }}
                >
                  <div className="relative aspect-[4/5] bg-gradient-to-b from-primary to-dark-gray overflow-hidden">
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${roleColor(member.designation)} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500`}>
                        <span className="font-display text-xl font-bold text-primary">{member.initials}</span>
                      </div>
                      <Icon className="w-8 h-8 text-gold/30" />
                    </div>
                    <div className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  <div className="p-5">
                    <h3 className="font-display text-lg font-semibold text-primary group-hover:text-gold-dark transition-colors duration-300">
                      {member.name}
                    </h3>
                    <span className="inline-block mt-1 px-2 py-0.5 bg-gold/10 text-gold text-xs font-body font-medium rounded-sm">
                      {member.designation}
                    </span>
                    <p className="font-body text-sm text-primary/50 mt-2">{member.expertise}</p>
                    <button className="mt-3 w-8 h-8 rounded-full border border-primary/10 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-primary text-primary/30 transition-all duration-300">
                      <Linkedin className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
