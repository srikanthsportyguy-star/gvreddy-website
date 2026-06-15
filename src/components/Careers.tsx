import { Briefcase, ArrowRight, GraduationCap, Users, TrendingUp } from 'lucide-react';

const openings = [
  { title: 'Senior Associate - Corporate', location: 'Hyderabad', type: 'Full-time', experience: '5-8 years' },
  { title: 'Associate - Litigation', location: 'Hyderabad', type: 'Full-time', experience: '2-5 years' },
  { title: 'Associate - Taxation', location: 'Hyderabad', type: 'Full-time', experience: '3-6 years' },
  { title: 'Legal Researcher', location: 'Hyderabad', type: 'Full-time', experience: '1-3 years' },
];

const perks = [
  { icon: TrendingUp, text: 'Accelerated Growth' },
  { icon: GraduationCap, text: 'Continuous Learning' },
  { icon: Users, text: 'Collaborative Culture' },
  { icon: Briefcase, text: 'High-Impact Work' },
];

export default function Careers() {
  return (
    <section className="relative py-10 lg:py-12 bg-white overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/[0.03] rounded-full blur-3xl" />

      <div className="section-padding">
        <div className="container-max">
          <div className="text-center mb-8 reveal">
            <div className="inline-flex items-center gap-2 mb-3">
              <div className="w-8 h-[2px] bg-gold" />
              <span className="text-gold text-sm font-body tracking-wider uppercase">Join Our Team</span>
              <div className="w-8 h-[2px] bg-gold" />
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary mb-3">
              Careers at <span className="gold-text-gradient">G. V. Reddy & Co. Advocates</span>
            </h2>
            <p className="font-body text-base text-primary/50 max-w-2xl mx-auto">
              Build your career at a firm that values excellence, integrity and professional growth.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6 reveal">
            {perks.map((perk) => (
              <div key={perk.text} className="flex items-center gap-3 p-3 rounded-sm border border-primary/5 bg-light-gray/50">
                <div className="w-10 h-10 rounded-sm bg-gold/10 flex items-center justify-center shrink-0">
                  <perk.icon className="w-5 h-5 text-gold" />
                </div>
                <span className="font-body text-sm font-medium text-primary/60">{perk.text}</span>
              </div>
            ))}
          </div>

          <div className="space-y-3 reveal">
            {openings.map((job) => (
              <div
                key={job.title}
                className="group flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-sm border border-primary/5 hover:border-gold/30 bg-light-gray/30 hover:bg-gold/5 transition-all duration-300 gap-4"
              >
                <div className="flex-1">
                  <h3 className="font-display text-lg font-semibold text-primary group-hover:text-gold-dark transition-colors duration-300">
                    {job.title}
                  </h3>
                  <div className="flex flex-wrap gap-3 mt-2">
                    <span className="font-body text-xs text-primary/40">{job.location}</span>
                    <span className="font-body text-xs text-primary/40">&middot;</span>
                    <span className="font-body text-xs text-primary/40">{job.type}</span>
                    <span className="font-body text-xs text-primary/40">&middot;</span>
                    <span className="font-body text-xs text-primary/40">{job.experience}</span>
                  </div>
                </div>
                <button className="inline-flex items-center gap-2 px-5 py-2 border border-primary/10 text-primary/60 font-body text-sm font-medium rounded-sm hover:border-gold hover:text-gold transition-all duration-300 shrink-0">
                  Apply Now
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center reveal">
            <p className="font-body text-sm text-primary/40 mb-4">
              Don't see a matching role? We are always looking for exceptional talent.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-2.5 border border-gold/40 text-gold font-body text-sm font-medium rounded-sm hover:bg-gold/10 transition-all duration-300"
            >
              Send Your Resume <ArrowRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
