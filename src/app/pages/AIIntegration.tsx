import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { ServiceCard } from '../components/ServiceCard';
import { CTABlock } from '../components/CTABlock';
import {
  Target,
  FlaskConical,
  Rocket,
  Bot,
  FileSearch,
  LineChart,
  MessageSquare,
  Eye,
  TrendingUp,
  ChevronDown,
} from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export const AIIntegration = () => {
  const { t } = useTranslation();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: t('ai.faq.question1'),
      answer: t('ai.faq.answer1'),
    },
    {
      question: t('ai.faq.question2'),
      answer: t('ai.faq.answer2'),
    },
    {
      question: t('ai.faq.question3'),
      answer: t('ai.faq.answer3'),
    },
    {
      question: t('ai.faq.question4'),
      answer: t('ai.faq.answer4'),
    },
    {
      question: t('ai.faq.question5'),
      answer: t('ai.faq.answer5'),
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-primary-50 to-slate-100 dark:from-primary-900/20 dark:to-slate-900 animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <SectionHeader
            preheading={t('ai.hero.preheading')}
            heading={t('ai.hero.heading')}
            subheading={t('ai.hero.subheading')}
            align="center"
            maxWidth="lg"
          />
        </div>
      </section>

      {/* Methodology - 3 Phases */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            heading={t('ai.methodology.heading')}
            subheading={t('ai.methodology.subheading')}
            align="center"
            maxWidth="lg"
          />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
            {/* Phase 1 */}
            <div className="relative p-8 border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 rounded-xl">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-slate-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                1
              </div>
              <Target className="w-10 h-10 text-primary-500 mb-4" />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                {t('ai.methodology.phase1.title')}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                {t('ai.methodology.phase1.description')}
              </p>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400 mb-4">
                <li>• {t('ai.methodology.phase1.item1')}</li>
                <li>• {t('ai.methodology.phase1.item2')}</li>
                <li>• {t('ai.methodology.phase1.item3')}</li>
                <li>• {t('ai.methodology.phase1.item4')}</li>
              </ul>
              <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                {t('ai.methodology.phase1.timeline')}
              </p>
            </div>

            {/* Phase 2 - Highlighted */}
            <div className="relative p-8 border-2 border-primary-500 bg-gradient-to-br from-primary-50 to-slate-50 dark:from-slate-800 dark:to-slate-900 rounded-xl shadow-lg">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold text-xl">
                2
              </div>
              <FlaskConical className="w-10 h-10 text-primary-500 mb-4" />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                {t('ai.methodology.phase2.title')}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                {t('ai.methodology.phase2.description')}
              </p>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400 mb-4">
                <li>• {t('ai.methodology.phase2.item1')}</li>
                <li>• {t('ai.methodology.phase2.item2')}</li>
                <li>• {t('ai.methodology.phase2.item3')}</li>
                <li>• {t('ai.methodology.phase2.item4')}</li>
              </ul>
              <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                {t('ai.methodology.phase2.timeline')}
              </p>
            </div>

            {/* Phase 3 */}
            <div className="relative p-8 border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 rounded-xl">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-slate-600 text-white rounded-full flex items-center justify-center font-bold text-xl">
                3
              </div>
              <Rocket className="w-10 h-10 text-primary-500 mb-4" />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                {t('ai.methodology.phase3.title')}
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-4">
                {t('ai.methodology.phase3.description')}
              </p>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400 mb-4">
                <li>• {t('ai.methodology.phase3.item1')}</li>
                <li>• {t('ai.methodology.phase3.item2')}</li>
                <li>• {t('ai.methodology.phase3.item3')}</li>
                <li>• {t('ai.methodology.phase3.item4')}</li>
              </ul>
              <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                {t('ai.methodology.phase3.timeline')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            heading={t('ai.useCases.heading')}
            subheading={t('ai.useCases.subheading')}
            align="center"
            maxWidth="lg"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <ServiceCard
              icon={<Bot className="w-6 h-6 text-primary-500" />}
              title={t('ai.useCases.customerSupport.title')}
              description={t('ai.useCases.customerSupport.description')}
            />
            <ServiceCard
              icon={<FileSearch className="w-6 h-6 text-primary-500" />}
              title={t('ai.useCases.documentProcessing.title')}
              description={t('ai.useCases.documentProcessing.description')}
            />
            <ServiceCard
              icon={<LineChart className="w-6 h-6 text-primary-500" />}
              title={t('ai.useCases.predictiveAnalytics.title')}
              description={t('ai.useCases.predictiveAnalytics.description')}
            />
            <ServiceCard
              icon={<MessageSquare className="w-6 h-6 text-primary-500" />}
              title={t('ai.useCases.sentimentAnalysis.title')}
              description={t('ai.useCases.sentimentAnalysis.description')}
            />
            <ServiceCard
              icon={<Eye className="w-6 h-6 text-primary-500" />}
              title={t('ai.useCases.computerVision.title')}
              description={t('ai.useCases.computerVision.description')}
            />
            <ServiceCard
              icon={<TrendingUp className="w-6 h-6 text-primary-500" />}
              title={t('ai.useCases.recommendationSystems.title')}
              description={t('ai.useCases.recommendationSystems.description')}
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            heading={t('ai.faqSection.heading')}
            subheading={t('ai.faqSection.subheading')}
            align="center"
            maxWidth="lg"
          />

          <div className="mt-12 space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-slate-200 dark:border-slate-700 rounded-xl overflow-hidden hover:shadow-md transition-shadow"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className={`w-full flex items-center justify-between p-6 text-left transition-colors ${
                    openFaq !== index ? 'hover:bg-slate-50 dark:hover:bg-slate-800' : ''
                  }`}
                >
                  <span className="font-semibold text-slate-900 dark:text-white pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-500 flex-shrink-0 transition-transform ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 text-slate-600 dark:text-slate-400">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 lg:py-24 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CTABlock
            heading={t('ai.finalCta.heading')}
            subheading={t('ai.finalCta.subheading')}
            primaryButtonText={t('ai.finalCta.cta1')}
            primaryButtonLink="/contact"
            secondaryButtonText={t('ai.finalCta.cta2')}
            secondaryButtonLink="/services"
            background="gradient"
          />
        </div>
      </section>
    </div>
  );
};
