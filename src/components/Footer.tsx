import { Link } from 'react-router-dom';
import { Instagram, Phone, Mail, MapPin } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t, i18n } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-warm-white py-16 md:py-20">
      <div className="section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="font-display text-2xl md:text-3xl tracking-wide block mb-6 logo-effect-light">
              Tadelakt Elbahja
            </Link>
            <p className="font-body text-sm opacity-70 leading-relaxed max-w-xs">
              {t('footer.brand_desc')}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-ui text-xs uppercase tracking-widest opacity-50 mb-6">
              {t('nav.services')}
            </h4>
            <ul className="space-y-3">
              {[
                { path: '/', label: t('nav.home') },
                { path: '/services', label: t('nav.services') },
                { path: '/gallery', label: t('nav.gallery') },
                { path: '/about', label: t('nav.about') },
                { path: '/contact', label: t('nav.contact') },
                { path: '/devis', label: t('nav.devis') },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="font-body text-sm opacity-70 hover:opacity-100 transition-opacity"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-ui text-xs uppercase tracking-widest opacity-50 mb-6">
              {t('nav.services')}
            </h4>
            <ul className="space-y-3">
              {[
                t('services.list.walls.title'),
                t('services.list.bathrooms.title'),
                t('common.douches', 'Douches'),
                t('services.list.decorative.title'),
                t('services.list.custom.title'),
              ].map((service) => (
                <li key={service}>
                  <span className="font-body text-sm opacity-70">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-ui text-xs uppercase tracking-widest opacity-50 mb-6">
              {t('nav.contact')}
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+212669337793"
                  className="flex items-center gap-3 font-body text-sm opacity-70 hover:opacity-100 transition-opacity"
                >
                  <Phone className="w-4 h-4" />
                  +212 669337793
                </a>
              </li>
              <li>
                <a
                  href="mailto:elbahjaanas61@gmail.com"
                  className="flex items-center gap-3 font-body text-sm opacity-70 hover:opacity-100 transition-opacity"
                >
                  <Mail className="w-4 h-4" />
                  elbahjaanas61@gmail.com
                </a>
              </li>
              <li>
                <span className="flex items-center gap-3 font-body text-sm opacity-70">
                  <MapPin className="w-4 h-4" />
                  {i18n.language === 'ar' ? 'مراكش، المغرب' : 'Marrakech, Maroc'}
                </span>
              </li>
            </ul>

            {/* Social */}
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://www.instagram.com/tadelaktart/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-current border-opacity-30 rounded-full opacity-70 hover:opacity-100 transition-opacity"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/212669337793"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center border border-current border-opacity-30 rounded-full opacity-70 hover:opacity-100 transition-opacity"
                aria-label="WhatsApp"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="hairline mb-8"></div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-ui text-xs opacity-50">
            © {currentYear} Tadelakt Elbahja. {t('footer.rights')}
          </p>
          <div className="flex items-center gap-6">
            <Link
              to="/privacy"
              className="font-ui text-xs opacity-50 hover:opacity-100 transition-opacity"
            >
              {t('footer.privacy')}
            </Link>
            <Link
              to="/terms"
              className="font-ui text-xs opacity-50 hover:opacity-100 transition-opacity"
            >
              {t('footer.terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
