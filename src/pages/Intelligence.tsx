import { useState } from 'react';
import { Calendar, TrendingUp, BookOpen, Download, ArrowRight, Users, Globe, Target, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import CTAButton from '@/components/ui/cta-button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
const Intelligence = () => {
  const {
    toast
  } = useToast();
  const [email, setEmail] = useState('');
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Successfully subscribed!",
      description: "You'll receive our latest Bitcoin intelligence reports."
    });
    setEmail('');
  };
  const reports = [{
    id: "SBI-001",
    title: "An Introduction to 'Bitcoin Treasury Companies'",
    author: "Yves-André Graf",
    date: "2025-08-05",
    blockHeight: "908691",
    excerpt: "Taking the financial markets by storm and redefining finance as a whole, Strategy₿'s Bitcoin strategy is a new and complex concept. The intricacies of the strategy require a deep understanding of Bitcoin but also expertise of corporate finance, security analysis and other financial market components.",
    tags: ["Treasury Strategy", "Corporate Finance", "Strategic Analysis"],
    readTime: "12 min read",
    image: "/api/placeholder/400/250"
  }, {
    id: "SBI-002",
    title: "As big as the Internet? Why Bitcoin Intelligence drives Strategic Advantage",
    author: "Dr. Marcus Dapp",
    date: "2025-07-29",
    blockHeight: "907674",
    excerpt: "The Internet in 1990. Online banking in 1996. Social media in 2005. – What do these moments in time have in common? Back then the adoption rate of the respective technology was at 3% of the general population. Today, Bitcoin sits at the same level of adoption.",
    tags: ["Strategic Intelligence", "Market Analysis", "Technology Adoption"],
    readTime: "8 min read",
    image: "/api/placeholder/400/250"
  }, {
    id: "SBI-003",
    title: "Beyond the Hype: Why Leaders Need Bitcoin Expertise Now",
    author: "Dr. Marcus Dapp",
    date: "2025-07-16",
    blockHeight: "907070",
    excerpt: "The world is experiencing a fundamental monetary shift driven by technology that demands strategic attention at every level of society. Bitcoin is no longer a fringe experiment – it's reshaping national policies, corporate strategies, and individual freedoms.",
    tags: ["Leadership", "Policy", "Strategic Planning"],
    readTime: "10 min read",
    image: "/api/placeholder/400/250"
  }];
  const intelligenceFeatures = [{
    icon: TrendingUp,
    title: "Market Intelligence",
    description: "Real-time analysis of Bitcoin market dynamics, institutional adoption patterns, and regulatory developments across global markets."
  }, {
    icon: Target,
    title: "Strategic Insights",
    description: "Actionable intelligence for C-suite decision-making, risk assessment, and competitive positioning in the Bitcoin economy."
  }, {
    icon: Globe,
    title: "Macro Analysis",
    description: "Deep-dive reports on Bitcoin's role in monetary policy, geopolitical shifts, and macroeconomic trends affecting businesses."
  }, {
    icon: Users,
    title: "Live Sessions",
    description: "Interactive intelligence briefings with our research team, featuring Q&A and personalized strategic discussions."
  }];
  const stats = [{
    value: "3",
    label: "Intelligence Reports",
    description: "Published so far"
  }, {
    value: "Latest",
    label: "Block Heights",
    description: "Market coverage"
  }, {
    value: "Switzerland",
    label: "Based",
    description: "Global perspective"
  }, {
    value: "Regular",
    label: "Updates",
    description: "Fresh intelligence"
  }];
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="swiss-hero swiss-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-bitcoin-orange/10 via-transparent to-gray-900/5"></div>
        <div className="swiss-grid relative">
          <div className="max-w-5xl mx-auto text-center">
            <div className="mb-8">
              <span className="inline-flex items-center px-6 py-3 rounded-full bg-swiss-blue/10 text-swiss-blue text-lg font-semibold mb-8">
                🧠 Strategic Intelligence
              </span>
            </div>
            <h1 className="mb-10 text-gray-900">Bitcoin Intelligence</h1>
            <p className="swiss-prose-lg mb-12 max-w-4xl mx-auto text-gray-700 leading-relaxed">
              Our regular reports and live sessions cover all strategic aspects of Bitcoin and deliver 
              actionable insights for your decision-making. Stay ahead with intelligence that matters.
            </p>
            
          </div>
        </div>
      </section>

      {/* Intelligence Features */}
      <section className="swiss-section bg-white">
        <div className="swiss-grid">
          <div className="text-center mb-16">
            <h2 className="mb-8 text-gray-900">Intelligence That Drives Decisions</h2>
            <p className="swiss-prose max-w-3xl mx-auto text-gray-600">
              From market dynamics to regulatory shifts, our intelligence covers every angle 
              of Bitcoin's impact on business and society.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {intelligenceFeatures.map((feature, index) => <div key={index} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-swiss-blue/10 to-swiss-blue/5 rounded-2xl flex items-center justify-center group-hover:from-swiss-blue/20 group-hover:to-swiss-blue/10 transition-all duration-300">
                  <feature.icon className="w-8 h-8 text-swiss-blue" />
                </div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900 group-hover:text-swiss-blue transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Latest Reports */}
      <section className="swiss-section bg-gradient-to-b from-gray-50 to-white">
        <div className="swiss-grid">
          <div className="text-center mb-16">
            <h2 className="mb-8 text-gray-900">Latest Intelligence Reports</h2>
            <p className="swiss-prose max-w-3xl mx-auto text-gray-600">
              Deep-dive analysis and strategic insights from our research team, published at specific 
              block heights to ensure transparency and immutability.
            </p>
          </div>
          
          <div className="space-y-12">
            {reports.map((report, index) => <Card key={index} className="group hover:shadow-2xl transition-all duration-500 border-gray-200 hover:border-bitcoin-orange/30 overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <CardContent className="p-8">
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex flex-wrap gap-3">
                          <Badge variant="secondary" className="bg-swiss-blue/10 text-swiss-blue hover:bg-swiss-blue/20">
                            {report.id}
                          </Badge>
                          <Badge variant="secondary" className="text-gray-700">
                            Block #{report.blockHeight}
                          </Badge>
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <Calendar className="w-4 h-4 mr-2" />
                          {report.date}
                        </div>
                      </div>
                      
                      <h3 className="text-2xl font-semibold mb-4 text-gray-900 group-hover:text-bitcoin-orange transition-colors duration-300 leading-tight">
                        {report.title}
                      </h3>
                      
                      <div className="flex items-center mb-4 text-gray-600">
                        <span className="font-medium">by {report.author}</span>
                        <span className="mx-3">•</span>
                        <span>{report.readTime}</span>
                      </div>
                      
                      <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                        {report.excerpt}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {report.tags.map((tag, tagIndex) => <Badge key={tagIndex} variant="outline" className="border-swiss-blue text-swiss-blue">
                            {tag}
                          </Badge>)}
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-4">
                        <Button className="bg-bitcoin-orange hover:bg-bitcoin-orange-hover text-white">
                          <BookOpen className="w-4 h-4 mr-2" />
                          Read Full Report
                        </Button>
                        <Button variant="outline" className="border-gray-300 hover:border-bitcoin-orange hover:text-bitcoin-orange">
                          <Download className="w-4 h-4 mr-2" />
                          Download PDF
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                  
                  <div className="lg:col-span-1">
                    <div className="h-48 lg:h-full bg-gradient-to-br from-bitcoin-orange/10 to-bitcoin-orange/5 flex items-center justify-center group-hover:from-bitcoin-orange/20 group-hover:to-bitcoin-orange/10 transition-all duration-500">
                      <div className="text-bitcoin-orange/60 group-hover:text-bitcoin-orange/80 transition-colors duration-500">
                        <Eye className="w-16 h-16" />
                      </div>
                    </div>
                  </div>
                </div>
              </Card>)}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="border-bitcoin-orange text-bitcoin-orange hover:bg-bitcoin-orange hover:text-white">
              <ArrowRight className="w-5 h-5 mr-2" />
              View All Reports
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="swiss-section bg-white">
        <div className="swiss-grid">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-bitcoin-orange/20 shadow-xl">
              <CardContent className="p-12 text-center">
                <div className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-bitcoin-orange/20 to-bitcoin-orange/10 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-10 h-10 text-bitcoin-orange" />
                </div>
                
                <h2 className="text-3xl font-semibold mb-6 text-gray-900">
                  Stay Ahead with Bitcoin Intelligence
                </h2>
                
                <p className="swiss-prose-lg mb-8 text-gray-600 max-w-2xl mx-auto">
                  Subscribe to receive our latest research reports, market analysis, and strategic 
                  insights delivered directly to your inbox.
                </p>
                
                <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
                  <div className="flex gap-4">
                    <Input type="email" placeholder="your.email@company.com" value={email} onChange={e => setEmail(e.target.value)} required className="h-12 flex-1" />
                    <Button type="submit" className="h-12 px-8 bg-bitcoin-orange hover:bg-bitcoin-orange-hover whitespace-nowrap">
                      Subscribe
                    </Button>
                  </div>
                </form>
                
                <p className="text-sm text-gray-500 mt-4">
                  Join our growing community of Bitcoin intelligence subscribers
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="swiss-section bg-gray-900">
        <div className="swiss-grid">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-medium text-white mb-6">
              Need Custom Intelligence?
            </h2>
            
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Get tailored Bitcoin intelligence and strategic analysis for your specific 
              industry, market, or organizational needs.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
              <CTAButton variant="primary" size="lg" href="/briefing" showArrow>
                Request Custom Analysis
              </CTAButton>
              <CTAButton variant="secondary" size="lg" href="/contact" className="bg-white text-gray-900 hover:bg-gray-100">
                Discuss Your Needs
              </CTAButton>
            </div>
            
            <p className="text-gray-400">
              Intelligence inquiries:{' '}
              <a href="mailto:intelligence@bitcoininstitute.ch" className="text-white hover:text-gray-300 transition-colors">
                intelligence@bitcoininstitute.ch
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>;
};
export default Intelligence;