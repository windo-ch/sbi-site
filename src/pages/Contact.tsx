import { useState } from 'react';
import { Mail, Phone, MapPin, Calendar, ArrowRight, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import CTAButton from '@/components/ui/cta-button';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    engagementType: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({
      name: '',
      organization: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
      engagementType: ''
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "General Inquiries",
      value: "hello@bitcoininstitute.ch",
      href: "mailto:hello@bitcoininstitute.ch"
    },
    {
      icon: Phone,
      title: "Direct Line",
      value: "+41 XX XXX XX XX",
      href: "tel:+41XXXXXXXXX"
    },
    {
      icon: MapPin,
      title: "Location", 
      value: "Crypto Valley, Zug, Switzerland",
      href: "#"
    },
    {
      icon: Calendar,
      title: "Response Time",
      value: "Within 24 hours",
      href: "#"
    }
  ];

  const engagementTypes = [
    {
      title: "Executive Briefing",
      description: "Strategic Bitcoin insights for C-suite leaders",
      duration: "60-90 minutes",
      format: "In-person or virtual",
      href: "/briefing"
    },
    {
      title: "Public Speaking",
      description: "Keynotes and presentations at your events",
      duration: "45-60 minutes",
      format: "Conference or private event",
      href: "/speaker"
    },
    {
      title: "Research Partnership",
      description: "Collaborative research and white paper development",
      duration: "3-6 months",
      format: "Ongoing collaboration",
      href: "#"
    },
    {
      title: "Educational Workshop",
      description: "Interactive learning sessions for teams",
      duration: "Half or full day",
      format: "On-site or virtual",
      href: "#"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="swiss-hero swiss-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-bitcoin-orange/10 via-transparent to-gray-900/5"></div>
        <div className="swiss-grid relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <span className="inline-flex items-center px-6 py-3 rounded-full bg-swiss-blue/10 text-swiss-blue text-lg font-semibold mb-8">
                💬 Let's Connect
              </span>
            </div>
            <h1 className="mb-10 text-gray-900">Get in Touch</h1>
            <p className="swiss-prose-lg mb-12 max-w-3xl mx-auto text-gray-700 leading-relaxed">
              Ready to advance your Bitcoin understanding? Whether you need strategic insights, 
              educational workshops, or research collaboration, our team is here to help.
            </p>
            <div className="flex justify-center space-x-12 text-center">
              <div>
                <div className="text-4xl font-bold text-bitcoin-orange mb-2">&lt; 24h</div>
                <div className="text-gray-600">Response Time</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-bitcoin-orange mb-2">50+</div>
                <div className="text-gray-600">Organizations Served</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-bitcoin-orange mb-2">5+</div>
                <div className="text-gray-600">Languages</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="swiss-section bg-white">
        <div className="swiss-grid">
          <div className="text-center mb-16">
            <h2 className="mb-8 text-gray-900">How to Reach Us</h2>
            <p className="swiss-prose max-w-3xl mx-auto text-gray-600">
              Multiple ways to connect with our team of Bitcoin experts.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-swiss-blue/10 to-swiss-blue/5 rounded-2xl flex items-center justify-center group-hover:from-swiss-blue/20 group-hover:to-swiss-blue/10 transition-all duration-300">
                  <method.icon className="w-8 h-8 text-swiss-blue" />
                </div>
                <h3 className="text-lg font-semibold mb-3 text-gray-900">{method.title}</h3>
                <a 
                  href={method.href}
                  className="text-gray-600 hover:text-swiss-blue transition-colors duration-300 font-medium"
                >
                  {method.value}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Engagement Types */}
      <section className="swiss-section bg-gradient-to-b from-gray-50 to-white">
        <div className="swiss-grid">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-semibold mb-4 text-gray-900">Send Us a Message</h2>
                <p className="text-gray-600 text-lg">
                  Tell us about your Bitcoin education and strategy needs.
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Your full name"
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Organization
                    </label>
                    <Input
                      type="text"
                      name="organization"
                      value={formData.organization}
                      onChange={handleInputChange}
                      placeholder="Company or institution"
                      className="h-12"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="your.email@company.com"
                      className="h-12"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+41 XX XXX XX XX"
                      className="h-12"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject *
                  </label>
                  <Input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    placeholder="What can we help you with?"
                    className="h-12"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder="Tell us more about your needs, timeline, and any specific requirements..."
                    rows={6}
                    className="resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full h-12 text-lg font-semibold bg-bitcoin-orange hover:bg-bitcoin-orange-hover"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Engagement Types */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl font-semibold mb-4 text-gray-900">Ways to Engage</h2>
                <p className="text-gray-600 text-lg">
                  Explore our different service offerings and find the right fit for your needs.
                </p>
              </div>

              <div className="space-y-6">
                {engagementTypes.map((type, index) => (
                  <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-gray-200 hover:border-bitcoin-orange/30">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-bitcoin-orange transition-colors duration-300">
                          {type.title}
                        </h3>
                        <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-bitcoin-orange transition-colors duration-300" />
                      </div>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {type.description}
                      </p>
                      <div className="flex flex-wrap gap-3">
                        <Badge variant="secondary" className="bg-swiss-blue/10 text-swiss-blue hover:bg-swiss-blue/20">
                          {type.duration}
                        </Badge>
                        <Badge variant="secondary" className="bg-gray-100 text-gray-700">
                          {type.format}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-8 p-6 bg-gradient-to-br from-bitcoin-orange/5 to-bitcoin-orange/10 rounded-3xl border border-bitcoin-orange/20">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Need Something Custom?</h3>
                <p className="text-gray-600 mb-4">
                  We also create tailored programs for specific organizational needs, from board presentations to multi-day immersions.
                </p>
                <p className="text-sm text-gray-500">
                  Reach out to discuss your unique requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="swiss-section bg-gray-900">
        <div className="swiss-grid">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-medium text-white mb-6">
              Ready to Get Started?
            </h2>
            
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the growing number of leaders who trust the Swiss Bitcoin Institute for their Bitcoin education and strategy needs.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
              <CTAButton variant="primary" size="lg" href="/briefing" showArrow>
                Book Executive Briefing
              </CTAButton>
              <CTAButton variant="secondary" size="lg" href="/speaker" className="bg-white text-gray-900 hover:bg-gray-100">
                Request Speaker
              </CTAButton>
            </div>
            
            <p className="text-gray-400">
              Questions? Email us at{' '}
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

export default Contact;