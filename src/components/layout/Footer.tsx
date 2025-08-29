import { Link } from 'react-router-dom';
import { Mail, Linkedin, Twitter } from 'lucide-react';
const Footer = () => {
  const footerNavigation = {
    company: [{
      name: 'About',
      href: '/about'
    }, {
      name: 'Team',
      href: '/team'
    }, {
      name: 'Contact',
      href: '/contact'
    }],
    services: [{
      name: 'Intelligence',
      href: '/intelligence'
    }, {
      name: 'Executive Learning',
      href: '/executive-learning'
    }, {
      name: 'Public Speaking',
      href: '/public-speaking'
    }],
    resources: [{
      name: 'Newsletter',
      href: '/newsletter'
    }, {
      name: 'Research Highlights',
      href: '/research'
    }, {
      name: 'Media',
      href: '/media'
    }],
    legal: [{
      name: 'Privacy Policy',
      href: '/privacy'
    }, {
      name: 'Terms & Conditions',
      href: '/terms'
    }]
  };
  return <footer className="bg-gray-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="swiss-grid py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-sm flex items-center justify-center">
                <img 
                  src="/lovable-uploads/26aa0f10-42cf-4926-83cd-a59ef34b447d.png" 
                  alt="Swiss Bitcoin Institute" 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-white font-medium text-lg">Swiss Bitcoin Institute</span>
            </div>
            
            {/* Tagline */}
            <p className="text-gray-300 text-base max-w-md">
              Switzerland's independent Bitcoin think tank. Evidence-based research and executive education for decision-makers.
            </p>
            
            {/* Contact */}
            <div className="space-y-4">
              <div>
                <h3 className="text-white font-medium text-sm uppercase tracking-wider">Contact</h3>
                <div className="mt-3 space-y-2">
                  <a href="mailto:hello@bitcoininstitute.ch" className="text-gray-300 hover:text-white transition-colors flex items-center space-x-2">
                    <Mail className="h-4 w-4" />
                    <span>hello@bitcoininstitute.ch</span>
                  </a>
                </div>
              </div>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-12 xl:mt-0 xl:col-span-2">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {/* Company */}
              <div>
                <h3 className="text-white font-medium text-sm uppercase tracking-wider">INSTITUTE</h3>
                <ul className="mt-4 space-y-3">
                  {footerNavigation.company.map(item => <li key={item.name}>
                      <Link to={item.href} className="text-gray-300 hover:text-white transition-colors text-sm">
                        {item.name}
                      </Link>
                    </li>)}
                </ul>
              </div>
              
              {/* Services */}
              <div>
                <h3 className="text-white font-medium text-sm uppercase tracking-wider">
                  Services
                </h3>
                <ul className="mt-4 space-y-3">
                  {footerNavigation.services.map(item => <li key={item.name}>
                      <Link to={item.href} className="text-gray-300 hover:text-white transition-colors text-sm">
                        {item.name}
                      </Link>
                    </li>)}
                </ul>
              </div>
              
              {/* Resources */}
              <div>
                <h3 className="text-white font-medium text-sm uppercase tracking-wider">
                  Resources
                </h3>
                <ul className="mt-4 space-y-3">
                  {footerNavigation.resources.map(item => <li key={item.name}>
                      <Link to={item.href} className="text-gray-300 hover:text-white transition-colors text-sm">
                        {item.name}
                      </Link>
                    </li>)}
                </ul>
              </div>
              
              {/* Legal */}
              <div>
                <h3 className="text-white font-medium text-sm uppercase tracking-wider">
                  Legal
                </h3>
                <ul className="mt-4 space-y-3">
                  {footerNavigation.legal.map(item => <li key={item.name}>
                      <Link to={item.href} className="text-gray-300 hover:text-white transition-colors text-sm">
                        {item.name}
                      </Link>
                    </li>)}
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-gray-400 text-sm text-center">
            © 2025 Swiss Bitcoin Institute. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;