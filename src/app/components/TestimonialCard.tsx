import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatarUrl?: string;
  highlighted?: boolean;
  rating?: number;
}

export const TestimonialCard = ({
  quote,
  author,
  role,
  company,
  avatarUrl,
  highlighted = false,
  rating = 5,
}: TestimonialCardProps) => {
  return (
    <div
      className={`p-6 lg:p-8 rounded-xl border transition-all duration-300 ${
        highlighted
          ? 'border-primary-200 bg-gradient-to-br from-primary-50 to-slate-50 dark:border-primary-500 dark:from-slate-800 dark:to-slate-900 shadow-lg'
          : 'border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-800'
      }`}
    >
      {/* Rating */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-lg italic text-slate-700 dark:text-slate-300 mb-6">
        "{quote}"
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden flex-shrink-0">
          {avatarUrl ? (
            <img src={avatarUrl} alt={author} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-slate-600 dark:text-slate-400 font-semibold">
              {author.charAt(0)}
            </div>
          )}
        </div>
        <div>
          <p className="font-semibold text-slate-900 dark:text-white">{author}</p>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            {role} @ {company}
          </p>
        </div>
      </div>
    </div>
  );
};
