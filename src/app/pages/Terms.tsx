import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { useTranslation } from 'react-i18next';

export const Terms = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            heading={t('terms.title')}
            subheading={t('terms.lastUpdated')}
            align="left"
            maxWidth="full"
          />

          <div className="mt-12 prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">
              {t('terms.section1.title')}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              {t('terms.section1.content')}
            </p>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">
              {t('terms.section2.title')}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              {t('terms.section2.content')}
            </p>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">
              {t('terms.section3.title')}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              {t('terms.section3.content')}
            </p>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">
              {t('terms.section4.title')}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              {t('terms.section4.intro')}
            </p>
            <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400 mb-6">
              {(t('terms.section4.items', { returnObjects: true }) as string[]).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">
              {t('terms.section5.title')}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              {t('terms.section5.content')}
            </p>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">
              {t('terms.section6.title')}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              {t('terms.section6.content')}
            </p>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">
              {t('terms.section7.title')}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              {t('terms.section7.content')}
            </p>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">
              {t('terms.section8.title')}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              {t('terms.section8.content')}
            </p>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">
              {t('terms.section9.title')}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              {t('terms.section9.content')}
            </p>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">
              {t('terms.section10.title')}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              {t('terms.section10.intro')}
            </p>
            <p className="text-slate-600 dark:text-slate-400">
              {t('terms.section10.email')}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
