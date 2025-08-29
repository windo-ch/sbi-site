import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Add defensive programming for Router context
  let location;
  try {
    location = useLocation();
  } catch (error) {
    console.error('Header: Router context not available:', error);
    // Fallback location object
    location = { pathname: '/' };
  }

  const navigation = [
    { name: 'Intelligence', href: '/intelligence' },
    { name: 'About', href: '/about' },
    { name: 'Team', href: '/team' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="sticky top-0 z-50 bg-background/98 backdrop-blur-xl supports-[backdrop-filter]:bg-background/80 border-b border-gray-200/60 shadow-sm">
      <nav className="swiss-grid" aria-label="Main navigation">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-4 group">
              <div className="relative w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-105">
                <img 
                  src="/lovable-uploads/26aa0f10-42cf-4926-83cd-a59ef34b447d.png" 
                  alt="Swiss Bitcoin Institute" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="hidden sm:block">
                <span className="text-gray-900 font-semibold text-xl tracking-tight">
                  Swiss <span className="text-bitcoin-orange">Bitcoin</span> Institute
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary-brand ${
                  isActive(item.href) ? 'text-primary-brand' : 'text-gray-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center">
            <Button variant="default" size="sm" asChild>
              <Link to="/briefing">Request Executive Briefing</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-brand focus:ring-offset-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-gray-200">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 text-base font-medium transition-colors hover:text-primary-brand ${
                    isActive(item.href) ? 'text-primary-brand' : 'text-gray-600'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Button variant="default" size="sm" className="w-full" asChild>
                  <Link to="/briefing">Request Executive Briefing</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;