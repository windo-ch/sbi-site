import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Subscription confirmed",
      description: "You'll receive the Intelligence Brief twice monthly.",
    });
    
    setEmail('');
    setIsSubmitting(false);
  };

  return (
    <section className="bg-gray-50 swiss-section">
      <div className="swiss-grid">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="w-12 h-12 bg-bitcoin-orange rounded-lg flex items-center justify-center">
              <Mail className="h-6 w-6 text-white" />
            </div>
          </div>
          
          <h2 className="text-3xl lg:text-4xl font-medium text-gray-900 mb-4">
            The Intelligence Brief
          </h2>
          
          <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
            Twice-monthly, executive-ready insights on Bitcoin's strategic implications for Switzerland. 
            Unsubscribe anytime.
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex space-x-3">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1"
                required
              />
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="bg-bitcoin-orange hover:bg-bitcoin-orange-hover text-white"
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
              </Button>
            </div>
          </form>
          
          <p className="text-sm text-gray-500 mt-4">
            No spam. Executive-focused content only.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;