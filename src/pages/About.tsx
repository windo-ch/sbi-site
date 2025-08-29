import { ArrowRight, Clock, TrendingUp, AlertTriangle } from 'lucide-react';
import CTAButton from '@/components/ui/cta-button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const About = () => {
  const principles = [
    {
      icon: "🏛️",
      title: "Sovereignty",
      description: "Switzerland's tradition of monetary independence aligns with Bitcoin's self-custody principles and resistance to external control."
    },
    {
      icon: "🤝",
      title: "Neutrality", 
      description: "Swiss neutrality mirrors Bitcoin's apolitical nature—serving all participants without favor, regardless of geography or ideology."
    },
    {
      icon: "⚖️",
      title: "Consensus",
      description: "From canton democracy to Bitcoin's consensus mechanism—both systems require broad agreement for meaningful change."
    },
    {
      icon: "🌐",
      title: "Decentralization",
      description: "Switzerland's federal structure and Bitcoin's distributed network both embody resilience through decentralized governance."
    },
    {
      icon: "🕊️",
      title: "Liberty",
      description: "Individual economic freedom and constitutional rights—core to both Swiss democracy and Bitcoin's permissionless system."
    }
  ];

  const timeHorizons = [
    {
      period: "Near-term (1-2 years)",
      developments: [
        "Regulatory clarity for institutional adoption",
        "Energy sector Bitcoin integration pilots", 
        "Treasury strategy frameworks",
        "Cross-border payment infrastructure"
      ]
    },
    {
      period: "Mid-term (3-5 years)",
      developments: [
        "Bitcoin as legal tender consideration",
        "Grid balancing and energy monetization",
        "Digital franc integration studies",
        "International Bitcoin standard adoption"
      ]
    },
    {
      period: "Long-term (5-10 years)",
      developments: [
        "Constitutional monetary reform",
        "Full Bitcoin treasury adoption",
        "Energy-Bitcoin economic model",
        "Global monetary leadership"
      ]
    }
  ];

  const opportunities = [
    {
      title: "Financial Stability",
      description: "Bitcoin reserves can enhance monetary sovereignty and provide inflation hedging for institutions."
    },
    {
      title: "Energy Innovation", 
      description: "Bitcoin mining can monetize excess renewable energy and stabilize the grid through demand response."
    },
    {
      title: "Global Competitiveness",
      description: "Early Bitcoin adoption positions Switzerland as a leader in the new monetary system."
    },
    {
      title: "Constitutional Leadership",
      description: "Switzerland can demonstrate how democratic institutions adapt to technological monetary evolution."
    }
  ];

  const risks = [
    "Policy fragmentation across cantons",
    "Regulatory lag behind innovation",
    "Energy misconceptions and resistance",
    "Loss of first-mover advantage to other nations"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="swiss-hero swiss-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-bitcoin-orange/5 via-transparent to-swiss-red/5"></div>
        <div className="swiss-grid relative">
          <div className="max-w-5xl mx-auto text-center">
            <div className="mb-8">
              <span className="inline-flex items-center px-6 py-3 rounded-full bg-swiss-blue/10 text-swiss-blue text-lg font-semibold mb-8">
                🏛️ Independent Research & Analysis
              </span>
            </div>
            <h1 className="mb-10 text-gray-900">Why a Swiss Bitcoin Institute?</h1>
            <p className="swiss-prose-lg mb-12 max-w-4xl mx-auto text-gray-700 leading-relaxed">
              Switzerland and Bitcoin share foundational values—sovereignty, neutrality, consensus, 
              decentralization, and liberty. Upholding these principles can guide a smooth, confident 
              transition to sound digital money and position Switzerland to lead.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-bitcoin-orange mb-2">700+</div>
                <div className="text-gray-600 text-sm">Years of Neutrality</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-bitcoin-orange mb-2">15+</div>
                <div className="text-gray-600 text-sm">Years Bitcoin Research</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-bitcoin-orange mb-2">26</div>
                <div className="text-gray-600 text-sm">Swiss Cantons</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-bitcoin-orange mb-2">21M</div>
                <div className="text-gray-600 text-sm">Bitcoin Supply Cap</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shared Principles */}
      <section className="swiss-section bg-white">
        <div className="swiss-grid">
          <div className="text-center mb-20">
            <h2 className="mb-8 text-gray-900">Shared Principles</h2>
            <p className="swiss-prose-lg max-w-4xl mx-auto text-gray-700">
              The values that unite Switzerland and Bitcoin create a foundation for confident leadership in the digital age.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
            {principles.map((principle, index) => (
              <div key={index} className="text-center group">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-bitcoin-orange/10 to-bitcoin-orange/5 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl">
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

      {/* The Transition */}
      <section className="swiss-section bg-gray-50">
        <div className="swiss-grid">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-medium text-gray-900 mb-4">
              The Transition
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Understanding both the opportunities and risks as Switzerland navigates monetary evolution
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Opportunities */}
            <div>
              <div className="flex items-center mb-6">
                <TrendingUp className="h-5 w-5 text-green-600 mr-3" />
                <h3 className="text-lg font-medium text-gray-900">Opportunities</h3>
              </div>
              <div className="space-y-4">
                {opportunities.map((opportunity, index) => (
                  <Card key={index} className="bg-white border border-gray-200">
                    <CardContent className="p-6">
                      <h4 className="text-base font-medium text-gray-900 mb-2">{opportunity.title}</h4>
                      <p className="text-gray-600 text-sm">{opportunity.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            {/* Risks */}
            <div>
              <div className="flex items-center mb-6">
                <AlertTriangle className="h-5 w-5 text-amber-600 mr-3" />
                <h3 className="text-lg font-medium text-gray-900">Risks</h3>
              </div>
              <div className="space-y-3">
                {risks.map((risk, index) => (
                  <div key={index} className="flex items-start p-4 bg-white border border-gray-200 rounded-lg">
                    <span className="text-swiss-blue mr-3 mt-1">•</span>
                    <span className="text-gray-700">{risk}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Time Horizons */}
          <div>
            <div className="flex items-center justify-center mb-8">
              <Clock className="h-5 w-5 text-gray-600 mr-3" />
              <h3 className="text-lg font-medium text-gray-900">Time Horizons</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {timeHorizons.map((horizon, index) => (
                <Card key={index} className="bg-white border border-gray-200">
                  <CardHeader>
                    <CardTitle className="text-lg text-gray-900">{horizon.period}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {horizon.developments.map((development, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-start">
                          <span className="text-swiss-blue mr-2">•</span>
                          {development}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Role */}
      <section className="swiss-section">
        <div className="swiss-grid">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-medium text-gray-900 mb-8 text-center">
              Our Role
            </h2>
            
            <div className="space-y-8">
              <div className="text-center">
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  The Swiss Bitcoin Institute serves as an independent observer and evidence-based partner, 
                  bringing a Switzerland-first perspective to monetary evolution through cross-sector collaboration.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-white border border-gray-200 text-center">
                  <CardContent className="p-6">
                    <h4 className="text-base font-medium text-gray-900 mb-2">Bitcoin Intelligence</h4>
                    <p className="text-sm text-gray-600">Research, analysis, and strategic insights</p>
                    <CTAButton variant="secondary" href="/intelligence" className="mt-4 w-full">
                      Learn More
                    </CTAButton>
                  </CardContent>
                </Card>
                
                <Card className="bg-white border border-gray-200 text-center">
                  <CardContent className="p-6">
                    <h4 className="text-base font-medium text-gray-900 mb-2">Executive Learning</h4>
                    <p className="text-sm text-gray-600">Briefings, workshops, and capability building</p>
                    <CTAButton variant="secondary" href="/executive-learning" className="mt-4 w-full">
                      Learn More
                    </CTAButton>
                  </CardContent>
                </Card>
                
                <Card className="bg-white border border-gray-200 text-center">
                  <CardContent className="p-6">
                    <h4 className="text-base font-medium text-gray-900 mb-2">Public Speaking</h4>
                    <p className="text-sm text-gray-600">Strategic keynotes and thought leadership</p>
                    <CTAButton variant="secondary" href="/public-speaking" className="mt-4 w-full">
                      Learn More
                    </CTAButton>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration CTA */}
      <section className="swiss-section bg-gray-900">
        <div className="swiss-grid">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-medium text-white mb-6">
              Policymakers, researchers, educators—let's shape the future of money together
            </h2>
            
            <p className="text-lg text-gray-300 mb-8">
              Contact us to explore collaboration opportunities and join Switzerland's monetary evolution.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
              <CTAButton variant="primary" size="lg" href="/contact" showArrow>
                Contact Us
              </CTAButton>
              <CTAButton variant="outline" size="lg" href="/briefing" className="border-white text-gray-900 bg-white hover:bg-gray-100">
                Request Executive Briefing
              </CTAButton>
            </div>
            
            <p className="text-gray-400">
              <a href="mailto:hello@bitcoininstitute.ch" className="hover:text-white transition-colors">
                hello@bitcoininstitute.ch
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;