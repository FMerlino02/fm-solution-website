import React from 'react';
import { SectionHeader } from "../components/SectionHeader";
import { CTABlock } from "../components/CTABlock";
import {
  Target,
  Heart,
  Users,
  Lightbulb,
  Shield,
  CheckCircle,
} from "lucide-react";
import { useTranslation } from 'react-i18next';

export const About = () => {
  const { t } = useTranslation();
  const values = [
    {
      icon: <Lightbulb className="w-6 h-6 text-primary-500" />,
      title: t('about.values.pragmatism.title'),
      description: t('about.values.pragmatism.description'),
    },
    {
      icon: <Shield className="w-6 h-6 text-primary-500" />,
      title: t('about.values.ownership.title'),
      description: t('about.values.ownership.description'),
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-primary-500" />,
      title: t('about.values.transparency.title'),
      description: t('about.values.transparency.description'),
    },
    {
      icon: <Heart className="w-6 h-6 text-primary-500" />,
      title: t('about.values.quality.title'),
      description: t('about.values.quality.description'),
    },
    {
      icon: <Users className="w-6 h-6 text-primary-500" />,
      title: t('about.values.collaboration.title'),
      description: t('about.values.collaboration.description'),
    },
  ];

  const steps = [
    {
      number: "01",
      title: t('about.process.step1.title'),
      description: t('about.process.step1.description'),
    },
    {
      number: "02",
      title: t('about.process.step2.title'),
      description: t('about.process.step2.description'),
    },
    {
      number: "03",
      title: t('about.process.step3.title'),
      description: t('about.process.step3.description'),
    },
    {
      number: "04",
      title: t('about.process.step4.title'),
      description: t('about.process.step4.description'),
    },
    {
      number: "05",
      title: t('about.process.step5.title'),
      description: t('about.process.step5.description'),
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-primary-50 to-slate-100 dark:from-primary-900/20 dark:to-slate-900 animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <SectionHeader
            preheading={t('about.hero.preheading')}
            heading={t('about.hero.heading')}
            subheading={t('about.hero.subheading')}
            align="center"
            maxWidth="lg"
          />
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary-500" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                {t('about.mission.title')}
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                {t('about.mission.paragraph1')}
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mt-4">
                {t('about.mission.paragraph2')}
              </p>
            </div>
            <div>
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-2xl flex items-center justify-center mb-6">
                <Lightbulb className="w-8 h-8 text-primary-500" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                {t('about.vision.title')}
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                {t('about.vision.paragraph1')}
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mt-4">
                {t('about.vision.paragraph2')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            heading={t('about.values.heading')}
            subheading={t('about.values.subheading')}
            align="center"
            maxWidth="lg"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-6 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            heading={t('about.story.heading')}
            subheading={t('about.story.subheading')}
            align="center"
            maxWidth="lg"
          />

          <div className="mt-12 space-y-6 text-slate-600 dark:text-slate-400">
            <p className="text-lg leading-relaxed">
              <strong className="text-slate-900 dark:text-white">
                {t('about.story.paragraph1.bold')}
              </strong>{" "}
              {t('about.story.paragraph1.text')}
            </p>

            <p className="text-lg leading-relaxed">
              {t('about.story.paragraph2')}
            </p>

            <p className="text-lg leading-relaxed">
              {t('about.story.paragraph3.start')}{" "}
              <strong className="text-slate-900 dark:text-white">
                {t('about.story.paragraph3.bold')}
              </strong>
              {t('about.story.paragraph3.end')}
            </p>

            <p className="text-lg leading-relaxed">
              {t('about.story.paragraph4')}
            </p>

            <p className="text-lg leading-relaxed">
              {t('about.story.paragraph5.start')}{" "}
              <strong className="text-slate-900 dark:text-white">
                {t('about.story.paragraph5.bold')}
              </strong>{" "}
              {t('about.story.paragraph5.end')}
            </p>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            heading={t('about.certifications.heading')}
            subheading={t('about.certifications.subheading')}
            align="center"
            maxWidth="lg"
          />

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex items-center justify-center p-6 bg-slate-50 dark:bg-slate-800 rounded-xl">
              <p className="text-slate-600 dark:text-slate-400 font-semibold">
                AWS Partner
              </p>
            </div>
            <div className="flex items-center justify-center p-6 bg-slate-50 dark:bg-slate-800 rounded-xl">
              <p className="text-slate-600 dark:text-slate-400 font-semibold">
                Google Cloud
              </p>
            </div>
            <div className="flex items-center justify-center p-6 bg-slate-50 dark:bg-slate-800 rounded-xl">
              <p className="text-slate-600 dark:text-slate-400 font-semibold">
                Azure Certified
              </p>
            </div>
            <div className="flex items-center justify-center p-6 bg-slate-50 dark:bg-slate-800 rounded-xl">
              <p className="text-slate-600 dark:text-slate-400 font-semibold">
                ISO 27001
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-24 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            heading={t('about.process.heading')}
            subheading={t('about.process.subheading')}
            align="center"
            maxWidth="lg"
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-5 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 lg:py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CTABlock
            heading={t('about.finalCta.heading')}
            subheading={t('about.finalCta.subheading')}
            primaryButtonText={t('about.finalCta.cta1')}
            primaryButtonLink="/contact"
            secondaryButtonText={t('about.finalCta.cta2')}
            secondaryButtonLink="/services"
            background="gradient"
          />
        </div>
      </section>
    </div>
  );
};
