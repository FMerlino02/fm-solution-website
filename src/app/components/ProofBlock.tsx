import React from 'react';

interface Stat {
  icon?: React.ReactNode;
  value: string;
  label: string;
}

interface ProofBlockProps {
  title?: string;
  subtitle?: string;
  stats: Stat[];
}

export const ProofBlock = ({ title, subtitle, stats }: ProofBlockProps) => {
  return (
    <div>
      {(title || subtitle) && (
        <div className="text-center mb-12">
          {title && <h3 className="text-3xl font-bold text-white mb-3">{title}</h3>}
          {subtitle && <p className="text-lg text-white/90">{subtitle}</p>}
        </div>
      )}
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            {stat.icon && <div className="flex justify-center mb-3 text-4xl">{stat.icon}</div>}
            <p className="text-3xl lg:text-4xl font-bold text-white mb-2">
              {stat.value}
            </p>
            <p className="text-sm text-white/80">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
