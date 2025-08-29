import { ArrowRight, Mail, Linkedin } from 'lucide-react';
import CTAButton from '@/components/ui/cta-button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// Import team photos - correctly matched to names
import henryBarrowsPhoto from '/lovable-uploads/756bfacf-159c-4ae9-b55f-a492ee8c8de5.png';
import marcusDappPhoto from '/lovable-uploads/e0e62e96-f30a-4765-90ad-24422e1d3da7.png'; 
import lucaFerrarsePhoto from '/lovable-uploads/dfc96534-4848-4565-a715-6f99bc41c46a.png';
import christianDeckerPhoto from '/lovable-uploads/10a1fea4-b965-4125-b580-3f9c782eb6ee.png';
import haraldRauterPhoto from '/lovable-uploads/2d25b71f-63f5-41b3-9096-1e4ecfbad230.png';
import yvesBennaimPhoto from '/lovable-uploads/35b36029-11b3-4247-90c5-87abdd77049c.png';
import yvesAndreGrafPhoto from '/lovable-uploads/ddb96b6b-7d86-4c20-a2eb-5809c6accf5b.png';
import markusPerdrizatPhoto from '/lovable-uploads/bb09a1e9-771d-475d-9abc-97e07d2b5f0d.png';

const Team = () => {
  const coreTeam = [
    {
      name: "Dr. Marcus M. Dapp",
      role: "Founder",
      bio: "10+ years in research/teaching across academia and Crypto Valley; focuses on Bitcoin and monetary systems across economic, political, social, and ecological dimensions.",
      linkedin: "#",
      email: "marcus@bitcoininstitute.ch",
      photo: marcusDappPhoto
    },
    {
      name: "Dr. Luca Ferrarese", 
      role: "Research",
      bio: "Scientific background with deep study of money's history, finance, and macroeconomics; brings a molecular biologist's systems mindset to Bitcoin's transformations.",
      linkedin: "#",
      email: "luca@bitcoininstitute.ch",
      photo: lucaFerrarsePhoto
    },
    {
      name: "Henry Barrows",
      role: "Marketing",
      bio: "Crypto marketing strategist and operator; builds visibility, trust, and impact; driven by the mission of Bitcoin education for a more sovereign future.",
      linkedin: "#",
      email: "henry@bitcoininstitute.ch",
      photo: henryBarrowsPhoto
    }
  ];

  const researchFellows = [
    {
      name: "Dr. Christian Decker",
      bio: "Early Bitcoin contributor since 2009. Core Lightning developer and researcher.",
      tags: ["Protocol", "Research"],
      linkedin: "#",
      photo: christianDeckerPhoto
    },
    {
      name: "Dr. Harald Rauter",
      bio: "Mining, grid stability, energy markets; keynote speaker; bridges Bitcoin innovation with institutional frameworks.",
      tags: ["Energy", "Policy", "Markets"],
      linkedin: "#",
      photo: haraldRauterPhoto
    },
    {
      name: "Yves Bennaïm",
      bio: "Founder 2B4CH; chairs Swiss ISO delegation; leads initiative to anchor Bitcoin in the Swiss Constitution.",
      tags: ["Standards", "Policy"],
      linkedin: "#",
      photo: yvesBennaimPhoto
    },
    {
      name: "Yves-André Graf", 
      bio: "Traditional banking + crypto; specialist in Bitcoin Treasury Strategy.",
      tags: ["Treasury", "Banking"],
      linkedin: "#",
      photo: yvesAndreGrafPhoto
    },
    {
      name: "Markus Perdrizat",
      bio: "Bitcoin financial market infrastructure builder; ex-CPO Bitcoin Suisse; ex-CEO Swiss Crypto Vault; ex-Head PwC Blockchain Competence Center.",
      tags: ["Infra", "Security"],
      linkedin: "#",
      photo: markusPerdrizatPhoto
    }
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
                👥 World-Class Expertise
              </span>
            </div>
            <h1 className="mb-10 text-gray-900">Meet the Team</h1>
            <p className="swiss-prose-lg mb-12 max-w-4xl mx-auto text-gray-700 leading-relaxed">
              The Institute blends academic rigor with practical expertise to empower leaders 
              through open monetary education and research.
            </p>
            <div className="flex justify-center space-x-12 text-center">
              <div>
                <div className="text-4xl font-bold text-bitcoin-orange mb-2">3</div>
                <div className="text-gray-600">Core Team</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-bitcoin-orange mb-2">5</div>
                <div className="text-gray-600">Research Fellows</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-bitcoin-orange mb-2">50+</div>
                <div className="text-gray-600">Years Combined Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Team */}
      <section className="swiss-section bg-white">
        <div className="swiss-grid">
          <div className="text-center mb-20">
            <h2 className="mb-8 text-gray-900">Core Team</h2>
            <p className="swiss-prose max-w-3xl mx-auto text-gray-600">
              Leadership combining academic excellence with real-world Bitcoin expertise.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {coreTeam.map((member, index) => (
              <div key={index} className="group text-center">
                <div className="relative mb-8">
                  <div className="w-32 h-32 rounded-3xl mx-auto mb-6 group-hover:scale-105 transition-all duration-300 shadow-xl overflow-hidden">
                    <img 
                      src={member.photo} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 w-32 h-32 mx-auto rounded-3xl bg-bitcoin-orange/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-2xl"></div>
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-gray-900 group-hover:text-bitcoin-orange transition-colors duration-300">{member.name}</h3>
                <p className="text-bitcoin-orange font-semibold mb-6 text-lg">{member.role}</p>
                <p className="text-gray-700 leading-relaxed text-lg">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Fellows */}
      <section className="swiss-section bg-gradient-to-b from-gray-50 to-white">
        <div className="swiss-grid">
          <div className="text-center mb-20">
            <h2 className="mb-8 text-gray-900">Research Fellows</h2>
            <p className="swiss-prose-lg max-w-4xl mx-auto text-gray-700">
              Distinguished experts contributing specialized knowledge across Bitcoin's technical, economic, and policy dimensions.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {researchFellows.map((fellow, index) => (
              <div key={index} className="group">
                <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100 group-hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2">
                  <div className="text-center mb-6">
                    <div className="w-24 h-24 rounded-2xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 overflow-hidden shadow-lg">
                      <img 
                        src={fellow.photo} 
                        alt={fellow.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-3 text-xl group-hover:text-bitcoin-orange transition-colors duration-300">{fellow.name}</h3>
                    <p className="text-gray-700 leading-relaxed">{fellow.bio}</p>
                  </div>
                  <div className="flex flex-wrap gap-3 pt-6 border-t border-gray-100 justify-center">
                    {fellow.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="px-4 py-2 bg-swiss-blue/10 text-swiss-blue text-sm font-medium rounded-full group-hover:bg-swiss-blue group-hover:text-white transition-all duration-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team CTA */}
      <section className="swiss-section bg-gray-900">
        <div className="swiss-grid">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-medium text-white mb-6">
              Work with our team
            </h2>
            
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Leverage our collective expertise for your organization's Bitcoin strategy and education needs.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
              <CTAButton variant="primary" size="lg" href="/briefing" showArrow>
                Book a Briefing
              </CTAButton>
              <CTAButton variant="secondary" size="lg" href="/speaker" className="bg-white text-gray-900 hover:bg-gray-100">
                Engage a Speaker
              </CTAButton>
              <CTAButton variant="secondary" size="lg" href="/contact" className="bg-white text-gray-900 hover:bg-gray-100">
                Partner on Research
              </CTAButton>
            </div>
            
            <p className="text-gray-400">
              Ready to collaborate?{' '}
              <a href="mailto:hello@bitcoininstitute.ch" className="text-white hover:text-gray-300 transition-colors">
                hello@bitcoininstitute.ch
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
