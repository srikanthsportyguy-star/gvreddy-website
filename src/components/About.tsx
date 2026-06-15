import { Shield, Award, Landmark } from 'lucide-react';

const aboutImage = '/assets/Aboutus.jpg';

export default function About() {
  return (
    <section className="relative py-10 lg:py-12 bg-white overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

      <div className="section-padding">
        <div className="container-max grid lg:grid-cols-2 gap-10 items-center">
          <div className="reveal-left relative">
            <div className="relative">
              <div className="relative overflow-hidden rounded-sm aspect-[16/10] bg-light-gray shadow-2xl shadow-primary/10">
                <img
                  src={aboutImage}
                  alt="G.V. Reddy Advocates reception and legal library"
                  className="h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
              </div>

              <div className="absolute -bottom-6 -right-6 lg:-right-12 bg-primary px-8 py-6 rounded-sm shadow-2xl max-w-[280px]">
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="w-8 h-8 text-gold" />
                  <div>
                    <span className="font-display text-xl font-bold text-white block">Trusted</span>
                    <span className="font-body text-xs text-gold">Legal Partner</span>
                  </div>
                </div>
                <p className="font-body text-xs text-white/50 leading-relaxed">
                  Advising India's leading corporations, institutions and individuals since inception.
                </p>
              </div>

              <div className="absolute -top-3 -left-3 w-16 h-16 border-t-2 border-l-2 border-gold/30 rounded-tl-sm" />
            </div>
          </div>

          <div className="reveal-right">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-8 h-[2px] bg-gold" />
              <span className="text-gold text-sm font-body tracking-wider uppercase">About Us</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
              A Legacy of <span className="gold-text-gradient">Legal Excellence</span>
            </h2>

            <p className="font-body text-lg text-primary/60 mb-6 leading-relaxed">
              GV Reddy Advocates is a full-service law firm committed to delivering strategic,
              practical and results-oriented legal solutions. Our multidisciplinary team advises
              corporations, institutions and individuals across diverse legal domains.
            </p>

            <p className="font-body text-base text-primary/50 mb-8 leading-relaxed">
              With decades of combined experience, our advocates bring deep domain expertise
              and a client-first approach to every matter. We are recognized for our rigorous
              research, strategic thinking and unwavering commitment to achieving the best
              outcomes for our clients.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              {[
                { icon: Award, text: 'Award-Winning Practice' },
                { icon: Shield, text: 'Client-First Approach' },
                { icon: Landmark, text: 'Regulatory Expertise' },
                { icon: Award, text: 'Results Driven' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 group">
                  <div className="w-10 h-10 rounded-sm bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors duration-300">
                    <item.icon className="w-5 h-5 text-gold" />
                  </div>
                  <span className="font-body text-sm font-medium text-primary/70">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
