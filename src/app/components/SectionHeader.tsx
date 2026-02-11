import React from 'react';

interface SectionHeaderProps {
  preheading?: string;
  heading: string;
  subheading?: string;
  align?: 'left' | 'center';
  maxWidth?: 'sm' | 'md' | 'lg' | 'full';
}

export const SectionHeader = ({
  preheading,
  heading,
  subheading,
  align = 'left',
  maxWidth = 'full',
}: SectionHeaderProps) => {
  const maxWidthClasses = {
    sm: 'max-w-2xl',
    md: 'max-w-3xl',
    lg: 'max-w-4xl',
    full: 'max-w-full',
  };

  const alignClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
  };

  return (
    <div className={`${maxWidthClasses[maxWidth]} ${alignClasses[align]}`}>
      {preheading && (
        <p className="text-sm font-medium text-primary-500 dark:text-primary-400 uppercase tracking-wide mb-3">
          {preheading}
        </p>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-3">
        {heading}
      </h2>
      {subheading && (
        <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          {subheading}
        </p>
      )}
    </div>
  );
};
