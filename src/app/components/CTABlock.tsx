import React from 'react';
import { Button } from './Button';

interface CTABlockProps {
  heading: string;
  subheading?: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  background?: 'gradient' | 'solid' | 'subtle';
}

export const CTABlock = ({
  heading,
  subheading,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  background = 'gradient',
}: CTABlockProps) => {
  const backgroundStyles = {
    gradient:
      'bg-gradient-to-br from-primary-600 to-primary-500 dark:from-primary-900 dark:to-primary-800 text-white',
    solid: 'bg-slate-900 dark:bg-slate-950 text-white',
    subtle: 'bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white',
  };

  const buttonVariants = {
    gradient: { primary: 'secondary', secondary: 'ghost' },
    solid: { primary: 'secondary', secondary: 'ghost' },
    subtle: { primary: 'primary', secondary: 'tertiary' },
  };

  return (
    <div className={`rounded-2xl px-6 py-12 sm:px-12 sm:py-16 lg:px-16 lg:py-20 ${backgroundStyles[background]}`}>
      <div className="max-w-3xl mx-auto text-center">
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">{heading}</h3>
        {subheading && <p className="text-lg mb-8 opacity-90">{subheading}</p>}
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant={buttonVariants[background].primary as any}
            size="lg"
            asLink
            href={primaryButtonLink}
          >
            {primaryButtonText}
          </Button>
          {secondaryButtonText && secondaryButtonLink && (
            <Button
              variant={buttonVariants[background].secondary as any}
              size="lg"
              asLink
              href={secondaryButtonLink}
            >
              {secondaryButtonText}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
