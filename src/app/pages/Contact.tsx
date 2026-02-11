import React, { useState, useEffect } from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { Button } from '../components/Button';
import { Mail, Clock, Send } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';
import { emailJsConfig } from '../../config/emailjs.config';

export const Contact = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(() =>
    document.documentElement.classList.contains('dark')
  );
  const [calendlyKey, setCalendlyKey] = useState(0);

  // Detect dark mode
  useEffect(() => {
    const checkDarkMode = () => {
      const newIsDark = document.documentElement.classList.contains('dark');
      if (newIsDark !== isDarkMode) {
        setIsDarkMode(newIsDark);
        // Force Calendly widget to remount when theme changes
        setCalendlyKey(prev => prev + 1);
      }
    };

    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, [isDarkMode]);

  // Load Calendly widget script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Reinitialize Calendly when key changes
  useEffect(() => {
    if (calendlyKey > 0 && window.Calendly) {
      window.Calendly.initInlineWidget({
        url: `https://calendly.com/merlino-enquiries/30min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=${isDarkMode ? '0f172a' : 'f8fafc'}&text_color=${isDarkMode ? 'e2e8f0' : '1e293b'}&primary_color=3b82f6`,
        parentElement: document.querySelector('.calendly-inline-widget'),
      });
    }
  }, [calendlyKey, isDarkMode]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    // Check if EmailJS is configured
    if (!emailJsConfig.serviceId || !emailJsConfig.templateId || !emailJsConfig.publicKey) {
      setError(t('contact.form.configError'));
      setIsLoading(false);
      return;
    }

    try {
      // Send email using EmailJS
      const response = await emailjs.send(
        emailJsConfig.serviceId,
        emailJsConfig.templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone || 'Non fornito',
          company: formData.company || 'Non fornito',
          message: formData.message,
          to_email: 'merlino.enquiries@gmail.com',
        },
        emailJsConfig.publicKey
      );

      if (response.status === 200) {
        setIsSubmitted(true);
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: '',
        });
        // Hide success message after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000);
      }
    } catch (err) {
      console.error('Email send error:', err);
      setError(t('contact.form.errorMessage'));
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-primary-50 to-slate-100 dark:from-primary-900/20 dark:to-slate-900 animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <SectionHeader
            preheading={t('contact.hero.preheading')}
            heading={t('contact.hero.heading')}
            subheading={t('contact.hero.subheading')}
            align="center"
            maxWidth="lg"
          />
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                {t('contact.form.title')}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                  >
                    {t('contact.form.name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                  >
                    {t('contact.form.email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                  >
                    {t('contact.form.phone')}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                  >
                    {t('contact.form.company')}
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2"
                  >
                    {t('contact.form.message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-slate-300 dark:border-slate-700 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none"
                    placeholder={t('contact.form.messagePlaceholder')}
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  icon={<Send />}
                  iconPosition="right"
                  className="w-full"
                  disabled={isLoading}
                >
                  {isLoading ? t('contact.form.sending') : t('contact.form.submit')}
                </Button>

                {isSubmitted && (
                  <div className="p-4 bg-green-100 dark:bg-green-900/30 border border-green-500 dark:border-green-700 rounded-lg text-green-700 dark:text-green-300 text-center animate-fade-in">
                    {t('contact.form.successMessage')}
                  </div>
                )}

                {error && (
                  <div className="p-4 bg-red-100 dark:bg-red-900/30 border border-red-500 dark:border-red-700 rounded-lg text-red-700 dark:text-red-300 text-center animate-fade-in">
                    {error}
                  </div>
                )}
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                {t('contact.info.title')}
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-1">{t('contact.info.email')}</h3>
                    <a
                      href="mailto:merlino.enquiries@gmail.com"
                      className="text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      merlino.enquiries@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 dark:text-white mb-1">
                      {t('contact.info.availability')}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      {t('contact.info.hours')}
                      <br />
                      {t('contact.info.responseTime')}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-gradient-to-br from-primary-50 to-slate-50 dark:from-slate-800 dark:to-slate-900 border border-primary-200 dark:border-primary-800 rounded-xl">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-3">
                  {t('contact.info.guaranteedResponse')}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  {t('contact.info.workingMethod')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calendly Section */}
      <section className="py-24 bg-slate-50 dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            heading={t('contact.calendly.heading')}
            subheading={t('contact.calendly.subheading')}
            align="center"
            maxWidth="lg"
          />

          <div className="mt-12 max-w-2xl mx-auto" style={{ minHeight: '700px' }}>
            <div
              key={calendlyKey}
              className="calendly-inline-widget"
              data-url={`https://calendly.com/merlino-enquiries/30min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=${isDarkMode ? '0f172a' : 'f8fafc'}&text_color=${isDarkMode ? 'e2e8f0' : '1e293b'}&primary_color=3b82f6`}
              style={{ minWidth: '320px', height: '700px' }}
            />
          </div>
        </div>
      </section>

      {/* FAQ Contact */}
      <section className="py-24 bg-white dark:bg-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            heading={t('contact.faq.heading')}
            subheading={t('contact.faq.subheading')}
            align="center"
            maxWidth="lg"
          />

          <div className="mt-12 space-y-6">
            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                {t('contact.faq.question1')}
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                {t('contact.faq.answer1')}
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                {t('contact.faq.question2')}
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                {t('contact.faq.answer2')}
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 p-6">
              <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                {t('contact.faq.question3')}
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                {t('contact.faq.answer3')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
