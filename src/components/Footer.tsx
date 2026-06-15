import { Scale, ArrowUp, Phone, Mail, MapPin, Linkedin, Twitter } from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Practice Areas', href: '#practice' },
  { label: 'Team', href: '#team' },
  { label: 'Insights', href: '#insights' },
  { label: 'Careers', href: '#careers' },
  { label: 'Contact', href: '#contact' },
];

const practiceLinks = [
  'Corporate Law', 'Litigation & Dispute Resolution', 'FEMA Advisory',
  'PMLA Matters', 'International Taxation', 'Banking & Finance',
  'Mergers & Acquisitions', 'Real Estate Law', 'Regulatory Compliance',
];

const phoneNumber = '+91 9000 369 268';
const phoneHref = 'tel:+919000369268';
const emailAddress = 'gvreddy1515@gmail.com';
const address = '8-2-268/K/12, Rd Number 2, Sagar Society, Sri Nagar Colony, Kamalapuri Colony, Banjara Hills, Hyderabad, Telangana 500034';

export default function Footer() {
  return (
    <footer className="relative bg-primary overflow-hidden">
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      <div className="section-padding py-16 border-b border-white/5">
        <div className="container-max flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-display text-2xl lg:text-3xl font-bold text-white mb-2">
              Ready to <span className="gold-text-gradient">Get Started?</span>
            </h3>
            <p className="font-body text-white/40">Schedule a confidential consultation with our legal team today.</p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 gold-gradient text-primary font-semibold rounded-sm hover:shadow-xl hover:shadow-gold/20 transition-all duration-300 shrink-0"
          >
            Schedule Consultation
          </a>
        </div>
      </div>

      <div className="section-padding py-16">
        <div className="container-max grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 gold-gradient rounded-sm flex items-center justify-center">
                <Scale className="w-5 h-5 text-primary" strokeWidth={2.5} />
              </div>
              <div>
                <span className="font-display text-xl font-bold text-white block">GV REDDY</span>
                <span className="text-[10px] font-body text-gold tracking-[0.3em] uppercase -mt-0.5">Advocates</span>
              </div>
            </a>
            <p className="font-body text-sm text-white/30 leading-relaxed mb-6">
              A full-service law firm providing strategic legal solutions across Corporate Law, Litigation, Taxation, FEMA, PMLA, Banking, Real Estate and Regulatory Matters.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 rounded-sm border border-white/10 flex items-center justify-center text-white/30 hover:border-gold hover:text-gold transition-all duration-300">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 rounded-sm border border-white/10 flex items-center justify-center text-white/30 hover:border-gold hover:text-gold transition-all duration-300">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-white uppercase tracking-wider mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="font-body text-sm text-white/30 hover:text-gold transition-colors duration-300 flex items-center gap-2 group">
                    <span className="w-0 h-[1px] bg-gold group-hover:w-3 transition-all duration-300" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-white uppercase tracking-wider mb-6">Practice Areas</h4>
            <ul className="space-y-3">
              {practiceLinks.map((area) => (
                <li key={area}>
                  <a href="#practice" className="font-body text-sm text-white/30 hover:text-gold transition-colors duration-300 flex items-center gap-2 group">
                    <span className="w-0 h-[1px] bg-gold group-hover:w-3 transition-all duration-300" />
                    {area}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold text-white uppercase tracking-wider mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span className="font-body text-sm text-white/30">{address}</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <a href={phoneHref} className="font-body text-sm text-white/30 hover:text-gold transition-colors duration-300">{phoneNumber}</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <a href={`mailto:${emailAddress}`} className="font-body text-sm text-white/30 hover:text-gold transition-colors duration-300">{emailAddress}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="section-padding py-6 border-t border-white/5">
        <div className="container-max flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-white/20">
            &copy; {new Date().getFullYear()} GV Reddy Advocates. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="font-body text-xs text-white/20 hover:text-gold transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="font-body text-xs text-white/20 hover:text-gold transition-colors duration-300">Terms of Service</a>
            <a href="#" className="font-body text-xs text-white/20 hover:text-gold transition-colors duration-300">Disclaimer</a>
          </div>
        </div>
      </div>

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-6 right-6 w-11 h-11 rounded-sm gold-gradient flex items-center justify-center shadow-lg shadow-gold/20 hover:shadow-xl hover:shadow-gold/30 transition-all duration-300 hover:-translate-y-0.5 z-40"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5 text-primary" />
      </button>
    </footer>
  );
}
