import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CTAButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'default' | 'lg';
  href: string;
  children: React.ReactNode;
  className?: string;
  showArrow?: boolean;
}

const CTAButton = ({ 
  variant = 'primary', 
  size = 'default', 
  href, 
  children, 
  className,
  showArrow = false 
}: CTAButtonProps) => {
  const baseClasses = "font-medium transition-all duration-200 group";
  
  const variants = {
    primary: "bg-primary-brand hover:bg-primary-brand-hover text-white shadow-lg hover:shadow-xl",
    secondary: "bg-secondary hover:bg-secondary-hover text-secondary-foreground border border-gray-300",
    outline: "border-2 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white"
  };

  return (
    <Button
      variant={variant === 'primary' ? 'default' : variant}
      size={size}
      className={cn(baseClasses, variants[variant], className)}
      asChild
    >
      <Link to={href} className="flex items-center space-x-2">
        <span>{children}</span>
        {showArrow && (
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        )}
      </Link>
    </Button>
  );
};

export default CTAButton;