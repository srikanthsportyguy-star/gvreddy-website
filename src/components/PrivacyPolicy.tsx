export default function PrivacyPolicy() {
  return (
    <section className="relative bg-white overflow-hidden">
      <div className="absolute top-0 left-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl" />

      <div className="section-padding">
        <div className="container-max">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary mb-4">
            <span className="gold-text-gradient">Disclaimer</span>
          </h2>
          <p className="font-body text-sm sm:text-base text-primary/55 leading-relaxed mb-6">
            The current regulations of the Bar Council of India restrict advocates and law firms from advertising
            or soliciting clients in any manner and from providing detailed information about their areas of practice
            through a website. Accordingly, G. V. Reddy Advocates is limited in the information it can present
            on this platform.
          </p>

          <div className="space-y-4 rounded-sm border border-primary/5 bg-light-gray p-5 sm:p-6">
            <p className="font-body text-sm sm:text-base text-primary/60 leading-relaxed">
              By accessing this website, you acknowledge and confirm that:
            </p>
            <ul className="space-y-3 font-body text-sm sm:text-base text-primary/55 leading-relaxed list-disc pl-5">
              <li>
                You wish to obtain more information about G. V. Reddy Advocates, its areas of practice,
                and its team members solely for your personal knowledge and use.
              </li>
              <li>
                The information available on this website is provided to you only upon your specific request.
                Any material downloaded or obtained from this site is at your own discretion, and accessing this
                website does not create any lawyer-client relationship.
              </li>
              <li>
                The content on this website is for general informational purposes only and should not be interpreted
                as legal advice or a legal opinion.
              </li>
              <li>
                G. V. Reddy Advocates is not responsible or liable for any actions taken based on the information
                provided herein. Users are strongly advised to seek independent legal counsel for any specific legal concerns
                or queries.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
