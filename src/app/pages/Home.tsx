import React from 'react';
import { Button } from '../components/Button';
import { SectionHeader } from '../components/SectionHeader';
import { ServiceCard } from '../components/ServiceCard';
import { CTABlock } from '../components/CTABlock';
import { ProofBlock } from '../components/ProofBlock';
import { AIDataFlowAnimation } from '../components/AIDataFlowAnimation';
import {
  Code2,
  Lightbulb,
  Users,
  Zap,
  Brain,
  LineChart,
  Shield,
  ArrowRight,
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-950 animate-gradient">
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple/10 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-400/10 rounded-full blur-3xl animate-pulse-slow"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center animate-fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
            {t('home.hero.title1')}
            <br />
            {t('home.hero.title2')} <span className="text-primary-500">{t('home.hero.title3')}</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-3xl mx-auto">
            {t('home.hero.subtitle1')}
            <br />
            {t('home.hero.subtitle2')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg" asLink href="/contact" icon={<ArrowRight />} iconPosition="right">
              {t('home.hero.cta1')}
            </Button>
            <Button variant="secondary" size="lg" asLink href="/services">
              {t('home.hero.cta2')}
            </Button>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            heading={t('home.valueProposition.heading')}
            subheading={t('home.valueProposition.subheading')}
            align="center"
            maxWidth="lg"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <ServiceCard
              icon={<Lightbulb className="w-6 h-6 text-primary-500" />}
              title={t('home.valueProposition.pragmatism.title')}
              description={t('home.valueProposition.pragmatism.description')}
            />
            <ServiceCard
              icon={<Shield className="w-6 h-6 text-primary-500" />}
              title={t('home.valueProposition.ownership.title')}
              description={t('home.valueProposition.ownership.description')}
              highlighted
            />
            <ServiceCard
              icon={<LineChart className="w-6 h-6 text-primary-500" />}
              title={t('home.valueProposition.transparency.title')}
              description={t('home.valueProposition.transparency.description')}
            />
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 lg:py-24 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            preheading={t('home.services.preheading')}
            heading={t('home.services.heading')}
            subheading={t('home.services.subheading')}
            align="center"
            maxWidth="lg"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <ServiceCard
              icon={<Users className="w-6 h-6 text-primary-500" />}
              title={t('home.services.consulting.title')}
              description={t('home.services.consulting.description')}
              ctaText={t('home.services.consulting.cta')}
              ctaLink="/services"
            />
            <ServiceCard
              icon={<Code2 className="w-6 h-6 text-primary-500" />}
              title={t('home.services.development.title')}
              description={t('home.services.development.description')}
              ctaText={t('home.services.development.cta')}
              ctaLink="/services"
            />
            <ServiceCard
              icon={<Brain className="w-6 h-6 text-primary-500" />}
              title={t('home.services.ai.title')}
              description={t('home.services.ai.description')}
              ctaText={t('home.services.ai.cta')}
              ctaLink="/ai-integration"
            />
            <ServiceCard
              icon={<Zap className="w-6 h-6 text-primary-500" />}
              title={t('home.services.training.title')}
              description={t('home.services.training.description')}
              ctaText={t('home.services.training.cta')}
              ctaLink="/services"
            />
          </div>
        </div>
      </section>

      {/* AI Data Flow Animation */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            heading={t('home.aiSection.heading')}
            subheading={t('home.aiSection.subheading')}
            align="center"
            maxWidth="lg"
          />

          <div className="mt-12">
            <AIDataFlowAnimation />
          </div>

          <p className="text-center text-slate-600 dark:text-slate-400 mt-8 max-w-2xl mx-auto">
            {t('home.aiSection.description')}
          </p>
        </div>
      </section>

      {/* Proof Block */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-primary-600 to-primary-500 dark:from-primary-900 dark:to-primary-800 rounded-2xl px-6 py-12 sm:px-12 sm:py-16">
            <ProofBlock
              stats={[
                { value: '5+', label: t('home.stats.experience') },
                { value: '15+', label: t('home.stats.projects') },
                { value: '10+', label: t('home.stats.clients') },
                { value: '100%', label: t('home.stats.retention') },
              ]}
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CTABlock
            heading={t('home.finalCta.heading')}
            subheading={t('home.finalCta.subheading')}
            primaryButtonText={t('home.finalCta.cta1')}
            primaryButtonLink="/contact"
            secondaryButtonText={t('home.finalCta.cta2')}
            secondaryButtonLink="/services"
            background="gradient"
          />
        </div>
      </section>
    </div>
  );
};
