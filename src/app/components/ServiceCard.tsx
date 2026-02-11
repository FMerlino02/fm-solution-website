import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router';

interface ServiceCardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  features?: string[];
  ctaText?: string;
  ctaLink?: string;
  highlighted?: boolean;
}

export const ServiceCard = ({
  icon,
  title,
  description,
  features,
  ctaText,
  ctaLink,
  highlighted = false,
}: ServiceCardProps) => {
  return (
    <div
      className={`group p-6 lg:p-8 rounded-xl border transition-all duration-300 hover:shadow-lg ${
        highlighted
          ? 'border-primary-200 bg-gradient-to-br from-primary-50 to-slate-50 dark:border-primary-500 dark:from-slate-800 dark:to-slate-900 shadow-lg'
          : 'border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-600'
      }`}
    >
      {/* Icon */}
      {icon && (
        <div
          className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
            highlighted
              ? 'bg-primary-100 dark:bg-primary-900/30'
              : 'bg-primary-100 dark:bg-primary-900/30'
          }`}
        >
          {icon}
        </div>
      )}

      {/* Title */}
      <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">{title}</h3>

      {/* Description */}
      <p className="text-slate-600 dark:text-slate-400 mb-4">{description}</p>

      {/* Features */}
      {features && features.length > 0 && (
        <ul className="space-y-2 mb-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
              <Check className="w-4 h-4 text-green mt-0.5 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}

      {/* CTA Link */}
      {ctaText && ctaLink && (
        <Link
          to={ctaLink}
          className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 font-medium text-sm group-hover:gap-3 transition-all duration-200"
        >
          {ctaText}
          <ArrowRight className="w-4 h-4" />
        </Link>
      )}
    </div>
  );
};
