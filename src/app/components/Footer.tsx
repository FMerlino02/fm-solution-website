import React from 'react';
import { Link } from 'react-router';
import { Mail, MapPin, Linkedin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-slate-100 dark:bg-slate-950 text-slate-700 dark:text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">FM Solution</h3>
            <p className="text-sm mb-4">
              {t('footer.tagline')}
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/in/fausto-merlino/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white mb-4">{t('footer.company.title')}</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  {t('footer.company.about')}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  {t('footer.company.services')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  {t('footer.company.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white mb-4">{t('footer.services.title')}</h4>
            <ul className="space-y-2">
              <li className="text-sm">{t('footer.services.development')}</li>
              <li className="text-sm">{t('footer.services.aiIntegration')}</li>
              <li className="text-sm">{t('footer.services.training')}</li>
              <li className="text-sm">{t('footer.services.consulting')}</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-slate-900 dark:text-white mb-4">{t('footer.contact.title')}</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="mailto:merlino.enquiries@gmail.com" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  merlino.enquiries@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Milano, Italia</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-300 dark:border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            {t('footer.copyright')}
          </p>
          <div className="flex gap-6">
            <Link
              to="/privacy"
              className="text-sm text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              {t('footer.legal.privacy')}
            </Link>
            <Link
              to="/terms"
              className="text-sm text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              {t('footer.legal.terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
