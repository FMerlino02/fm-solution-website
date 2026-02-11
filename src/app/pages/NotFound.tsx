import React from 'react';
import { Button } from '../components/Button';
import { Home } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const NotFound = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-950">
      <div className="text-center px-4 animate-fade-in">
        <h1 className="text-9xl font-bold text-primary-500 mb-4">404</h1>
        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
          {t('notFound.title')}
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-md mx-auto">
          {t('notFound.description')}
        </p>
        <Button variant="primary" size="lg" asLink href="/" icon={<Home />}>
          {t('notFound.cta')}
        </Button>
      </div>
    </div>
  );
};
