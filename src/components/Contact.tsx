import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, ArrowRight } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', practice: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const contactInfo = [
    { icon: Phone, label: 'Call Us', value: '+91 80 1234 5678', href: 'tel:+918012345678' },
    { icon: Mail, label: 'Email', value: 'contact@gvreddyadvocates.com', href: 'mailto:contact@gvreddyadvocates.com' },
    { icon: MapPin, label: 'Office', value: 'Bangalore, Karnataka, India', href: '#' },
    { icon: Clock, label: 'Working Hours', value: 'Mon - Sat: 9:00 AM - 7:00 PM', href: '#' },
  ];

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-light-gray overflow-hidden">
      <div className="absolute top-0 right-0 w-80 h-80 bg-gold/[0.03] rounded-full blur-3xl" />

      <div className="section-padding">
        <div className="container-max">
          <div className="text-center mb-16 reveal">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-8 h-[2px] bg-gold" />
              <span className="text-gold text-sm font-body tracking-wider uppercase">Get In Touch</span>
              <div className="w-8 h-[2px] bg-gold" />
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
              Need Legal <span className="gold-text-gradient">Guidance?</span>
            </h2>
            <p className="font-body text-lg text-primary/50 max-w-2xl mx-auto">
              Reach out for a confidential consultation with our experienced legal team.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-10">
            <div className="lg:col-span-2 reveal-left">
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.href}
                    className="flex items-start gap-4 p-5 rounded-sm border border-primary/5 bg-white hover:border-gold/30 transition-all duration-300 group"
                  >
                    <div className="w-11 h-11 rounded-sm bg-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors duration-300">
                      <info.icon className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <span className="font-body text-xs text-primary/40 uppercase tracking-wider">{info.label}</span>
                      <span className="block font-body text-sm font-medium text-primary mt-0.5">{info.value}</span>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-6 aspect-[4/3] rounded-sm bg-primary/5 border border-primary/5 overflow-hidden relative">
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <MapPin className="w-8 h-8 text-gold/30 mb-2" />
                  <span className="font-body text-xs text-primary/30">Bangalore, India</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-3 reveal-right">
              <form onSubmit={handleSubmit} className="bg-white p-8 sm:p-10 rounded-sm border border-primary/5 shadow-lg shadow-primary/5">
                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label className="block font-body text-xs text-primary/50 uppercase tracking-wider mb-2">Name</label>
                    <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Your full name" className="w-full px-4 py-3 bg-light-gray border border-primary/10 rounded-sm font-body text-sm text-primary placeholder:text-primary/25 transition-all duration-300" />
                  </div>
                  <div>
                    <label className="block font-body text-xs text-primary/50 uppercase tracking-wider mb-2">Phone</label>
                    <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="+91 00000 00000" className="w-full px-4 py-3 bg-light-gray border border-primary/10 rounded-sm font-body text-sm text-primary placeholder:text-primary/25 transition-all duration-300" />
                  </div>
                </div>
                <div className="mb-5">
                  <label className="block font-body text-xs text-primary/50 uppercase tracking-wider mb-2">Email</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="your@email.com" className="w-full px-4 py-3 bg-light-gray border border-primary/10 rounded-sm font-body text-sm text-primary placeholder:text-primary/25 transition-all duration-300" />
                </div>
                <div className="mb-5">
                  <label className="block font-body text-xs text-primary/50 uppercase tracking-wider mb-2">Practice Area</label>
                  <select name="practice" value={form.practice} onChange={handleChange} className="w-full px-4 py-3 bg-light-gray border border-primary/10 rounded-sm font-body text-sm text-primary transition-all duration-300 appearance-none">
                    <option value="">Select a practice area</option>
                    <option value="corporate">Corporate Law</option>
                    <option value="litigation">Litigation & Dispute Resolution</option>
                    <option value="fema">FEMA Advisory</option>
                    <option value="pmla">PMLA Matters</option>
                    <option value="taxation">International Taxation</option>
                    <option value="banking">Banking & Finance</option>
                    <option value="ma">Mergers & Acquisitions</option>
                    <option value="realestate">Real Estate Law</option>
                    <option value="criminal">Criminal Law</option>
                    <option value="family">Family Law</option>
                    <option value="regulatory">Regulatory Compliance</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="mb-8">
                  <label className="block font-body text-xs text-primary/50 uppercase tracking-wider mb-2">Message</label>
                  <textarea name="message" value={form.message} onChange={handleChange} rows={4} placeholder="Briefly describe your legal matter..." className="w-full px-4 py-3 bg-light-gray border border-primary/10 rounded-sm font-body text-sm text-primary placeholder:text-primary/25 transition-all duration-300 resize-none" />
                </div>
                <div className="flex flex-wrap gap-4">
                  <button type="submit" className="inline-flex items-center gap-2 px-8 py-3.5 gold-gradient text-primary font-semibold rounded-sm hover:shadow-xl hover:shadow-gold/20 transition-all duration-300 hover:-translate-y-0.5 group">
                    Book Consultation
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                  <a href="tel:+918012345678" className="inline-flex items-center gap-2 px-8 py-3.5 border border-primary/20 text-primary font-semibold rounded-sm hover:border-gold hover:text-gold-dark transition-all duration-300">
                    <Phone className="w-4 h-4" />
                    Call Now
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
