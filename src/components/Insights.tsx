import { ArrowRight, Clock, Tag } from 'lucide-react';

const articles = [
  { category: 'Legal Update', title: 'New FEMA Regulations: Implications for Foreign Investment in India', excerpt: 'Analysis of the latest FEMA amendments and their impact on cross-border investment structures and compliance requirements.', date: 'June 2026', readTime: '8 min read' },
  { category: 'Publication', title: 'IBC Amendments: Strengthening the Resolution Framework', excerpt: 'A comprehensive review of recent Insolvency and Bankruptcy Code amendments and their practical implications for stakeholders.', date: 'May 2026', readTime: '12 min read' },
  { category: 'White Paper', title: 'RERA Compliance: A State-Wise Analysis for Developers', excerpt: 'Detailed state-by-state analysis of RERA compliance requirements, common pitfalls and best practices for real estate developers.', date: 'April 2026', readTime: '15 min read' },
  { category: 'Legal Update', title: 'PMLA Proceedings: Recent Judicial Trends and Defense Strategies', excerpt: 'Examining recent Supreme Court and High Court decisions that reshape the landscape of PMLA defense and enforcement.', date: 'March 2026', readTime: '10 min read' },
];

const categoryColor: Record<string, string> = {
  'Legal Update': 'bg-gold/10 text-gold',
  'Publication': 'bg-blue-500/10 text-blue-400',
  'White Paper': 'bg-emerald-500/10 text-emerald-400',
};

export default function Insights() {
  return (
    <section id="insights" className="relative py-24 lg:py-32 bg-white overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-gold/[0.03] rounded-full blur-3xl" />

      <div className="section-padding">
        <div className="container-max">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 reveal">
            <div>
              <div className="inline-flex items-center gap-2 mb-6">
                <div className="w-8 h-[2px] bg-gold" />
                <span className="text-gold text-sm font-body tracking-wider uppercase">Knowledge Hub</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary">
                Legal <span className="gold-text-gradient">Insights</span>
              </h2>
            </div>
            <div className="flex gap-3 flex-wrap">
              {['Latest Articles', 'Legal Updates', 'Publications', 'White Papers'].map((tab) => (
                <button
                  key={tab}
                  className="px-4 py-2 text-xs font-body font-medium text-primary/50 hover:text-gold border border-primary/10 hover:border-gold/30 rounded-sm transition-all duration-300"
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {articles.map((article, i) => (
              <article
                key={article.title}
                className="reveal group p-8 rounded-sm border border-primary/5 hover:border-gold/30 bg-light-gray/30 hover:bg-gold/5 transition-all duration-500 cursor-pointer"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className={`px-2.5 py-1 rounded-sm text-[10px] font-body font-semibold tracking-wider uppercase ${categoryColor[article.category] || 'bg-gold/10 text-gold'}`}>
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1 text-primary/30">
                    <Clock className="w-3 h-3" />
                    <span className="text-[11px] font-body">{article.readTime}</span>
                  </div>
                </div>
                <h3 className="font-display text-xl font-semibold text-primary mb-3 group-hover:text-gold-dark transition-colors duration-300 leading-snug">
                  {article.title}
                </h3>
                <p className="font-body text-sm text-primary/50 leading-relaxed mb-4">{article.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-primary/30">
                    <Tag className="w-3 h-3" />
                    <span className="text-[11px] font-body">{article.date}</span>
                  </div>
                  <span className="flex items-center gap-1 text-gold text-sm font-body font-medium opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                    Read More <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
