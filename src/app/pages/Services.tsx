import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { ServiceCard } from '../components/ServiceCard';
import { CTABlock } from '../components/CTABlock';
import { Button } from '../components/Button';
import { Users, Code2, Brain, GraduationCap, Check } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Services = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-primary-50 to-slate-100 dark:from-primary-900/20 dark:to-slate-900 animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <SectionHeader
            preheading={t('services.hero.preheading')}
            heading={t('services.hero.heading')}
            subheading={t('services.hero.subheading')}
            align="center"
            maxWidth="lg"
          />
        </div>
      </section>

      {/* Consulting */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-2xl flex items-center justify-center mb-6">
                <Users className="w-8 h-8 text-primary-500" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                {t('services.consulting.title')}
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
                {t('services.consulting.description')}
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300">
                    {t('services.consulting.features.0')}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300">
                    {t('services.consulting.features.1')}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300">
                    {t('services.consulting.features.2')}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300">
                    {t('services.consulting.features.3')}
                  </span>
                </li>
              </ul>
              <Button variant="primary" asLink href="/contact">
                {t('services.consulting.cta')}
              </Button>
            </div>
            <div className="bg-slate-50 dark:bg-slate-800 rounded-2xl p-8 lg:p-12">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                {t('services.consulting.whatYouGet')}
              </h3>
              <div className="space-y-4 text-slate-600 dark:text-slate-400">
                <p>
                  ✓ {t('services.consulting.deliverables.0')}
                  <br />
                  ✓ {t('services.consulting.deliverables.1')}
                  <br />
                  ✓ {t('services.consulting.deliverables.2')}
                  <br />
                  ✓ {t('services.consulting.deliverables.3')}
                  <br />✓ {t('services.consulting.deliverables.4')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Development */}
      <section className="py-24 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 bg-white dark:bg-slate-800 rounded-2xl p-8 lg:p-12">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                {t('services.development.technologies.title')}
              </h3>
              <div className="space-y-4 text-slate-600 dark:text-slate-400">
                <p>
                  {t('services.development.technologies.backend')}
                  <br />
                  {t('services.development.technologies.frontend')}
                  <br />
                  {t('services.development.technologies.database')}
                  <br />
                  {t('services.development.technologies.cloud')}
                  <br />
                  {t('services.development.technologies.devops')}
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-2xl flex items-center justify-center mb-6">
                <Code2 className="w-8 h-8 text-primary-500" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                {t('services.development.title')}
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
                {t('services.development.description')}
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300">
                    {t('services.development.features.0')}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300">
                    {t('services.development.features.1')}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300">
                    {t('services.development.features.2')}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300">
                    {t('services.development.features.3')}
                  </span>
                </li>
              </ul>
              <Button variant="primary" asLink href="/contact">
                {t('services.development.cta')}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* AI Integration */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-2xl flex items-center justify-center mb-6">
                <Brain className="w-8 h-8 text-primary-500" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                {t('services.aiIntegration.title')}
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
                {t('services.aiIntegration.description')}
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300">
                    {t('services.aiIntegration.features.0')}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300">
                    {t('services.aiIntegration.features.1')}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300">
                    {t('services.aiIntegration.features.2')}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300">
                    {t('services.aiIntegration.features.3')}
                  </span>
                </li>
              </ul>
              <Button variant="primary" asLink href="/ai-integration">
                {t('services.aiIntegration.cta')}
              </Button>
            </div>
            <div className="bg-gradient-to-br from-primary-50 to-slate-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-8 lg:p-12 border border-primary-200 dark:border-primary-800">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                {t('services.aiIntegration.useCases.title')}
              </h3>
              <div className="space-y-3 text-slate-700 dark:text-slate-300">
                <p>{t('services.aiIntegration.useCases.case1')}</p>
                <p>{t('services.aiIntegration.useCases.case2')}</p>
                <p>{t('services.aiIntegration.useCases.case3')}</p>
                <p>{t('services.aiIntegration.useCases.case4')}</p>
                <p>{t('services.aiIntegration.useCases.case5')}</p>
                <p>{t('services.aiIntegration.useCases.case6')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training */}
      <section className="py-24 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 bg-white dark:bg-slate-800 rounded-2xl p-8 lg:p-12">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                {t('services.training.formats.title')}
              </h3>
              <div className="space-y-4 text-slate-600 dark:text-slate-400">
                <p>
                  {t('services.training.formats.workshop')}
                  <br />
                  {t('services.training.formats.courses')}
                  <br />
                  {t('services.training.formats.mentoring')}
                  <br />
                  {t('services.training.formats.onTheJob')}
                </p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-2xl flex items-center justify-center mb-6">
                <GraduationCap className="w-8 h-8 text-primary-500" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                {t('services.training.title')}
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-6">
                {t('services.training.description')}
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300">
                    {t('services.training.features.0')}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300">
                    {t('services.training.features.1')}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300">
                    {t('services.training.features.2')}
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300">
                    {t('services.training.features.3')}
                  </span>
                </li>
              </ul>
              <Button variant="primary" asLink href="/contact">
                {t('services.training.cta')}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            heading={t('services.comparison.heading')}
            subheading={t('services.comparison.subheading')}
            align="center"
            maxWidth="lg"
          />

          <div className="mt-12 overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-slate-200 dark:border-slate-700">
                  <th className="text-left py-4 px-4 text-slate-900 dark:text-white font-semibold">
                    {t('services.comparison.table.feature')}
                  </th>
                  <th className="text-center py-4 px-4 text-slate-900 dark:text-white font-semibold">
                    {t('services.comparison.table.consulting')}
                  </th>
                  <th className="text-center py-4 px-4 text-slate-900 dark:text-white font-semibold">
                    {t('services.comparison.table.development')}
                  </th>
                  <th className="text-center py-4 px-4 text-slate-900 dark:text-white font-semibold">
                    {t('services.comparison.table.aiIntegration')}
                  </th>
                  <th className="text-center py-4 px-4 text-slate-900 dark:text-white font-semibold">
                    {t('services.comparison.table.training')}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-200 dark:border-slate-700">
                  <td className="py-4 px-4 text-slate-700 dark:text-slate-300">
                    {t('services.comparison.table.duration.label')}
                  </td>
                  <td className="text-center py-4 px-4 text-slate-600 dark:text-slate-400">
                    {t('services.comparison.table.duration.consulting')}
                  </td>
                  <td className="text-center py-4 px-4 text-slate-600 dark:text-slate-400">
                    {t('services.comparison.table.duration.development')}
                  </td>
                  <td className="text-center py-4 px-4 text-slate-600 dark:text-slate-400">
                    {t('services.comparison.table.duration.ai')}
                  </td>
                  <td className="text-center py-4 px-4 text-slate-600 dark:text-slate-400">
                    {t('services.comparison.table.duration.training')}
                  </td>
                </tr>
                <tr className="border-b border-slate-200 dark:border-slate-700">
                  <td className="py-4 px-4 text-slate-700 dark:text-slate-300">
                    {t('services.comparison.table.investment.label')}
                  </td>
                  <td className="text-center py-4 px-4 text-slate-600 dark:text-slate-400">{t('services.comparison.table.investment.consulting')}</td>
                  <td className="text-center py-4 px-4 text-slate-600 dark:text-slate-400">
                    {t('services.comparison.table.investment.development')}
                  </td>
                  <td className="text-center py-4 px-4 text-slate-600 dark:text-slate-400">
                    {t('services.comparison.table.investment.ai')}
                  </td>
                  <td className="text-center py-4 px-4 text-slate-600 dark:text-slate-400">{t('services.comparison.table.investment.training')}</td>
                </tr>
                <tr className="border-b border-slate-200 dark:border-slate-700">
                  <td className="py-4 px-4 text-slate-700 dark:text-slate-300">
                    {t('services.comparison.table.deliverable.label')}
                  </td>
                  <td className="text-center py-4 px-4 text-slate-600 dark:text-slate-400">
                    {t('services.comparison.table.deliverable.consulting')}
                  </td>
                  <td className="text-center py-4 px-4 text-slate-600 dark:text-slate-400">
                    {t('services.comparison.table.deliverable.development')}
                  </td>
                  <td className="text-center py-4 px-4 text-slate-600 dark:text-slate-400">
                    {t('services.comparison.table.deliverable.ai')}
                  </td>
                  <td className="text-center py-4 px-4 text-slate-600 dark:text-slate-400">
                    {t('services.comparison.table.deliverable.training')}
                  </td>
                </tr>
                <tr className="border-b border-slate-200 dark:border-slate-700">
                  <td className="py-4 px-4 text-slate-700 dark:text-slate-300">
                    {t('services.comparison.table.support')}
                  </td>
                  <td className="text-center py-4 px-4">
                    <Check className="w-5 h-5 text-green mx-auto" />
                  </td>
                  <td className="text-center py-4 px-4">
                    <Check className="w-5 h-5 text-green mx-auto" />
                  </td>
                  <td className="text-center py-4 px-4">
                    <Check className="w-5 h-5 text-green mx-auto" />
                  </td>
                  <td className="text-center py-4 px-4">
                    <Check className="w-5 h-5 text-green mx-auto" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 lg:py-24 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CTABlock
            heading={t('services.finalCta.heading')}
            subheading={t('services.finalCta.subheading')}
            primaryButtonText={t('services.finalCta.cta1')}
            primaryButtonLink="/contact"
            secondaryButtonText={t('services.finalCta.cta2')}
            secondaryButtonLink="/ai-integration"
            background="gradient"
          />
        </div>
      </section>
    </div>
  );
};
