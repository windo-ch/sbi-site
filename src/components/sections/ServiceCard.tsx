import CTAButton from '@/components/ui/cta-button';
interface ServiceCardProps {
  title: string;
  description: string;
  outcomes: string;
  ctaText: string;
  ctaLink: string;
}
const ServiceCard = ({
  title,
  description,
  outcomes,
  ctaText,
  ctaLink
}: ServiceCardProps) => {
  return <div className="group relative">
      <div className="absolute inset-0 bg-gradient-to-br from-bitcoin-orange/5 to-primary-brand/5 rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
      <div className="relative bg-white p-10 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300 group-hover:-translate-y-2">
        
        <h3 className="text-2xl font-semibold mb-6 text-gray-900 group-hover:text-bitcoin-orange transition-colors duration-300">{title}</h3>
        <p className="text-gray-700 mb-8 leading-relaxed text-lg">{description}</p>
        
        
        
        <CTAButton variant="secondary" size="lg" href={ctaLink} className="w-full group-hover:bg-bitcoin-orange group-hover:text-white group-hover:border-bitcoin-orange transition-all duration-300">
          {ctaText}
        </CTAButton>
      </div>
    </div>;
};
export default ServiceCard;