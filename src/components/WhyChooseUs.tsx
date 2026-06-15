import { Crown, Users, Briefcase, Search, MessageSquare, Layers } from 'lucide-react';

const reasons = [
  { icon: Crown, title: 'Experienced Leadership', desc: 'Led by senior advocates with decades of courtroom and advisory experience across diverse legal domains.' },
  { icon: Users, title: 'Client-Centric Approach', desc: 'Every matter receives personalized attention with strategies tailored to the unique needs of each client.' },
  { icon: Briefcase, title: 'Corporate & Litigation Expertise', desc: 'Seamless integration of transactional advisory and courtroom advocacy under one roof.' },
  { icon: Search, title: 'Research-Driven Strategy', desc: 'Meticulous legal research and precedent analysis underpin every opinion, filing and argument.' },
  { icon: MessageSquare, title: 'Transparent Communication', desc: 'Regular updates, honest assessments and clear fee structures build lasting client relationships.' },
  { icon: Layers, title: 'Multidisciplinary Legal Team', desc: 'Specialists across corporate, litigation, taxation and regulatory law collaborate for comprehensive solutions.' },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-24 lg:py-32 bg-primary overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <div className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16 reveal">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-8 h-[2px] bg-gold" />
              <span className="text-gold text-sm font-body tracking-wider uppercase">Our Advantage</span>
              <div className="w-8 h-[2px] bg-gold" />
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Why Choose <span className="gold-text-gradient">GV Reddy Advocates</span>
            </h2>
            <p className="font-body text-lg text-white/50 max-w-2xl mx-auto">
              Distinguished by expertise, integrity and an unwavering commitment to achieving results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((reason, i) => (
              <div
                key={reason.title}
                className="reveal group relative p-8 rounded-sm border border-white/10 hover:border-gold/30 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-500"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <span className="absolute top-6 right-6 font-display text-4xl font-bold text-white/5 group-hover:text-gold/10 transition-colors duration-500">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="w-12 h-12 rounded-sm bg-gold/10 flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors duration-300">
                  <reason.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-display text-xl font-semibold text-white mb-3 group-hover:text-gold transition-colors duration-300">
                  {reason.title}
                </h3>
                <p className="font-body text-sm text-white/40 leading-relaxed group-hover:text-white/60 transition-colors duration-300">
                  {reason.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
