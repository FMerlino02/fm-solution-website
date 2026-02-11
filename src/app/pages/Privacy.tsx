import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { useTranslation } from 'react-i18next';

export const Privacy = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            heading={t('privacy.title')}
            subheading={t('privacy.lastUpdated')}
            align="left"
            maxWidth="full"
          />

          <div className="mt-12 prose prose-lg dark:prose-invert max-w-none">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">
              {t('privacy.section1.title')}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              {t('privacy.section1.intro')}
            </p>
            <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400 mb-6">
              {(t('privacy.section1.items', { returnObjects: true }) as string[]).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">
              {t('privacy.section2.title')}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              {t('privacy.section2.intro')}
            </p>
            <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400 mb-6">
              {(t('privacy.section2.items', { returnObjects: true }) as string[]).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">
              {t('privacy.section3.title')}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              {t('privacy.section3.content')}
            </p>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">
              {t('privacy.section4.title')}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              {t('privacy.section4.content')}
            </p>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">
              {t('privacy.section5.title')}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              {t('privacy.section5.intro')}
            </p>
            <ul className="list-disc pl-6 text-slate-600 dark:text-slate-400 mb-6">
              {(t('privacy.section5.items', { returnObjects: true }) as string[]).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">
              {t('privacy.section6.title')}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              {t('privacy.section6.content')}
            </p>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">
              {t('privacy.section7.title')}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              {t('privacy.section7.content')}
            </p>

            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4">
              {t('privacy.section8.title')}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              {t('privacy.section8.intro')}
            </p>
            <p className="text-slate-600 dark:text-slate-400">
              {t('privacy.section8.email')}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
