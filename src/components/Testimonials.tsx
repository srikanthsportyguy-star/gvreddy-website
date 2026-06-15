import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  { quote: "GV Reddy Advocates provided exceptional guidance through our complex corporate restructuring. Their strategic approach and deep regulatory knowledge were invaluable in achieving a seamless transaction.", name: 'Amit Kapoor', title: 'CEO, Kapoor Industries', sector: 'Manufacturing' },
  { quote: "The firm's litigation team secured a landmark victory in our commercial dispute. Their meticulous preparation and courtroom expertise set them apart from other firms we have engaged.", name: 'Dr. Sunita Rao', title: 'Managing Director, Rao Healthcare', sector: 'Healthcare' },
  { quote: "Their FEMA and cross-border advisory was instrumental in structuring our foreign investments. The team's responsiveness and clarity in navigating complex regulations were outstanding.", name: 'Rahul Menon', title: 'CFO, TechBridge Solutions', sector: 'Technology' },
  { quote: "From real estate acquisition to RERA compliance, GV Reddy Advocates delivered comprehensive legal support that protected our interests at every stage of development.", name: 'Priya Deshmukh', title: 'Director, PrimeSpace Realty', sector: 'Real Estate' },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      if (isAnimating) return;
      setIsAnimating(true);
      setActive((prev) => (prev + 1) % testimonials.length);
      setTimeout(() => setIsAnimating(false), 500);
    }, 6000);
    return () => clearInterval(timer);
  }, [isAnimating]);

  const current = testimonials[active];

  return (
    <section className="relative py-24 lg:py-32 bg-primary overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
      <Quote className="absolute top-16 left-16 w-32 h-32 text-gold/5" />

      <div className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16 reveal">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-8 h-[2px] bg-gold" />
              <span className="text-gold text-sm font-body tracking-wider uppercase">Client Voices</span>
              <div className="w-8 h-[2px] bg-gold" />
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              What Our <span className="gold-text-gradient">Clients Say</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="text-center">
              <Quote className="w-10 h-10 text-gold/40 mx-auto mb-8" />
              <blockquote
                key={active}
                className="font-display text-xl sm:text-2xl lg:text-3xl text-white/80 leading-relaxed italic mb-10 animate-fade-in"
              >
                "{current.quote}"
              </blockquote>
              <div className="animate-fade-in">
                <div className="w-12 h-12 rounded-full gold-gradient flex items-center justify-center mx-auto mb-3">
                  <span className="font-display text-sm font-bold text-primary">
                    {current.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <p className="font-body text-white font-semibold">{current.name}</p>
                <p className="font-body text-sm text-white/40">{current.title}</p>
                <span className="inline-block mt-2 px-3 py-1 bg-gold/10 text-gold text-xs font-body rounded-sm">
                  {current.sector}
                </span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4 mt-12">
              <button
                onClick={() => { setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length); }}
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/40 hover:border-gold hover:text-gold transition-all duration-300"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`h-2 rounded-full transition-all duration-500 ${
                      i === active ? 'w-8 bg-gold' : 'w-2 bg-white/20 hover:bg-white/40'
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={() => { setActive((prev) => (prev + 1) % testimonials.length); }}
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/40 hover:border-gold hover:text-gold transition-all duration-300"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
