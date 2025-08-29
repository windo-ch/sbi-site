import CTAButton from '@/components/ui/cta-button';
import ServiceCard from '@/components/sections/ServiceCard';
import NewsletterSection from '@/components/sections/NewsletterSection';

const Home = () => {
  const principles = [
    {
      icon: "🏛️",
      title: "Sovereignty",
      description: "Self-custody and monetary independence"
    },
    {
      icon: "🤝",
      title: "Neutrality", 
      description: "Non-partisan, evidence-based research"
    },
    {
      icon: "⚖️",
      title: "Consensus",
      description: "Transparent, collaborative decision-making"
    },
    {
      icon: "🌐",
      title: "Decentralization",
      description: "Distributed systems and resilience"
    },
    {
      icon: "🕊️",
      title: "Liberty",
      description: "Economic freedom and individual rights"
    }
  ];

  const services = [
    {
      title: "Bitcoin Intelligence",
      description: "Actionable, executive-ready insights on Bitcoin's strategic implications for Switzerland's leaders.",
      outcomes: "Sharper policy decisions, enhanced risk management, and strategic alignment with global monetary trends.",
      ctaText: "Explore Intelligence Services",
      ctaLink: "/intelligence"
    },
    {
      title: "Executive Learning",
      description: "Briefings and roundtables that build institutional capability and decision-making confidence.",
      outcomes: "Enhanced Bitcoin literacy, scenario planning frameworks, decision-ready playbooks for leadership teams.",
      ctaText: "Request Executive Briefing",
      ctaLink: "/briefing"
    },
    {
      title: "Public Speaking",
      description: "Strategic keynotes that inform stakeholders and build organizational alignment on Bitcoin strategy.",
      outcomes: "Organizational clarity, stakeholder alignment, and strategic momentum across all levels.",
      ctaText: "Book a Speaker",
      ctaLink: "/speaker"
    }
  ];

  const researchHighlights = [
    {
      title: "Bitcoin and Swiss Energy Grid Stability",
      description: "How Bitcoin mining can support renewable energy transition and grid resilience.",
      readTime: "12 min read"
    },
    {
      title: "Constitutional Money: Bitcoin's Role in Swiss Sovereignty", 
      description: "Exploring Bitcoin's alignment with Switzerland's constitutional monetary principles.",
      readTime: "8 min read"
    },
    {
      title: "Central Bank Digital Currencies vs. Bitcoin",
      description: "Comparative analysis for Swiss policymakers on digital monetary systems.",
      readTime: "15 min read"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="swiss-hero swiss-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-bitcoin-orange/5 via-transparent to-swiss-red/5"></div>
        <div className="swiss-grid relative">
          <div className="max-w-5xl mx-auto text-center">
            <div className="mb-8">
              <span className="inline-flex items-center px-4 py-2 rounded-full bg-swiss-blue/10 text-swiss-blue text-sm font-medium mb-6">
                🇨🇭 Switzerland's Independent Bitcoin Think Tank
              </span>
            </div>
            <h1 className="mb-8 text-gray-900">
              Equip Switzerland's leaders for the Bitcoin age
            </h1>
            <p className="swiss-prose-lg mb-12 max-w-4xl mx-auto text-gray-700">
              Independent, evidence-based intelligence and executive learning for decision-makers 
              navigating the transition to sound digital money.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <CTAButton variant="primary" size="lg" href="/briefing" className="shadow-2xl hover:shadow-3xl">
                Request Executive Briefing
              </CTAButton>
              <CTAButton variant="secondary" size="lg" href="/newsletter" className="hover:bg-bitcoin-orange/5 hover:border-bitcoin-orange">
                Subscribe to Intelligence Brief
              </CTAButton>
            </div>
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
              <span className="flex items-center">
                <div className="w-2 h-2 bg-swiss-blue rounded-full mr-2"></div>
                Government Leaders
              </span>
              <span className="flex items-center">
                <div className="w-2 h-2 bg-swiss-blue rounded-full mr-2"></div>
                Enterprise C-Suite
              </span>
              <span className="flex items-center">
                <div className="w-2 h-2 bg-swiss-blue rounded-full mr-2"></div>
                Academic Institutions
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Switzerland x Bitcoin Principles */}
      <section className="swiss-section bg-white">
        <div className="swiss-grid">
          <div className="text-center mb-20">
            <h2 className="mb-8 text-gray-900">Switzerland & Bitcoin: Shared Principles</h2>
            <p className="swiss-prose-lg max-w-4xl mx-auto text-gray-700">
              Switzerland and Bitcoin share foundational values that can guide a confident transition to sound digital money.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
            {principles.map((principle, index) => (
              <div key={index} className="text-center group">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-bitcoin-orange/10 to-swiss-red/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                    <span className="text-3xl transition-all duration-300">{principle.icon}</span>
                  </div>
                  <div className="absolute inset-0 w-20 h-20 mx-auto rounded-2xl bg-bitcoin-orange/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{principle.title}</h3>
                <p className="text-gray-600 leading-relaxed">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="swiss-section bg-gradient-to-b from-gray-50 to-white">
        <div className="swiss-grid">
          <div className="text-center mb-20">
            <h2 className="mb-8 text-gray-900">Executive Services</h2>
            <p className="swiss-prose-lg max-w-4xl mx-auto text-gray-700">
              Strategic intelligence and education designed for Switzerland's decision-makers.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Research Highlights */}
      <section className="swiss-section bg-white">
        <div className="swiss-grid">
          <div className="text-center mb-20">
            <h2 className="mb-8 text-gray-900">Research Highlights</h2>
            <p className="swiss-prose max-w-3xl mx-auto text-gray-600">
              Independent analysis on Bitcoin's strategic implications for Switzerland's future.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {researchHighlights.map((highlight, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg border border-gray-100 group-hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-swiss-blue/10 text-swiss-blue text-xs font-medium rounded-full">
                      Research
                    </span>
                    <span className="text-gray-500 text-sm">{highlight.readTime}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-900 group-hover:text-bitcoin-orange transition-colors duration-300">
                    {highlight.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-6">{highlight.description}</p>
                  <div className="flex items-center text-bitcoin-orange font-medium group-hover:translate-x-2 transition-transform duration-300">
                    <span className="mr-2">Read Analysis</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <NewsletterSection />

      {/* Final CTA */}
      <section className="swiss-section bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-bitcoin-orange/10 to-swiss-red/10"></div>
        <div className="swiss-grid relative">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="mb-8 text-white">Partner with us to shape Switzerland's leadership in the Bitcoin age</h2>
            <p className="swiss-prose mb-12 text-gray-300 max-w-3xl mx-auto">
              Join the transition to sound digital money with Switzerland's most trusted Bitcoin research and education platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
              <CTAButton variant="primary" size="lg" href="/briefing" className="bg-bitcoin-orange hover:bg-bitcoin-orange-hover shadow-2xl">
                Request Executive Briefing
              </CTAButton>
              <CTAButton variant="secondary" size="lg" href="/speaker" className="border-white text-gray-900 bg-white hover:bg-gray-100 shadow-xl">
                Book a Speaker
              </CTAButton>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-gray-700">
              <div className="text-center">
                <div className="text-3xl font-bold text-bitcoin-orange mb-2">2025</div>
                <div className="text-gray-400">Founded to Lead</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-bitcoin-orange mb-2">100%</div>
                <div className="text-gray-400">Independent Research</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-bitcoin-orange mb-2">🇨🇭</div>
                <div className="text-gray-400">Switzerland First</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;