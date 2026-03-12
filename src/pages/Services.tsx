import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { Home, Bath, Palette, Sparkles, Check, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero animation
      gsap.fromTo(
        heroRef.current?.querySelectorAll('.hero-animate') || [],
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power2.out',
        }
      );

      // Services cards
      gsap.fromTo(
        servicesRef.current?.querySelectorAll('.service-card') || [],
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: servicesRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Process steps
      gsap.fromTo(
        processRef.current?.querySelectorAll('.process-step') || [],
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: processRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const services = [
    {
      icon: Home,
      title: t('services.list.walls.title'),
      description: t('services.list.walls.desc'),
      features: [
        t('home.features.seamless.title'),
        t('features.water_reg'),
        t('features.mold_res'),
        t('features.color_range'),
      ],
      image: '/images/project_modern.jpg',
    },
    {
      icon: Bath,
      title: t('services.list.bathrooms.title'),
      description: t('services.list.bathrooms.desc'),
      features: [
        t('home.features.waterproof.title'),
        t('features.no_joints'),
        t('features.heated_floor'),
        t('home.features.durable.title'),
      ],
      image: '/images/project_shower.jpg',
    },
    {
      icon: Palette,
      title: t('services.list.decorative.title'),
      description: t('services.list.decorative.desc'),
      features: [
        t('features.niches'),
        t('features.arches'),
        t('features.textured'),
        t('features.patina'),
      ],
      image: '/images/project_niche.jpg',
    },
    {
      icon: Sparkles,
      title: t('services.list.custom.title'),
      description: t('services.list.custom.desc'),
      features: [
        t('features.consult'),
        t('features.custom_plans'),
        t('features.arch_collaboration'),
        t('features.dedicated_followup'),
      ],
      image: '/images/gallery1.jpg',
    },
  ];

  const process = [
    {
      step: '01',
      title: t('services.process.step1.title'),
      description: t('services.process.step1.desc'),
    },
    {
      step: '02',
      title: t('services.process.step2.title'),
      description: t('services.process.step2.desc'),
    },
    {
      step: '03',
      title: t('services.process.step3.title'),
      description: t('services.process.step3.desc'),
    },
    {
      step: '04',
      title: t('services.process.step4.title'),
      description: t('services.process.step4.desc'),
    },
    {
      step: '05',
      title: t('services.process.step5.title'),
      description: t('services.process.step5.desc'),
    },
    {
      step: '06',
      title: t('services.process.step6.title'),
      description: t('services.process.step6.desc'),
    },
  ];

  return (
    <div className="bg-stone">
      <Helmet>
        <title>{t('seo.services.title')}</title>
        <meta name="description" content={t('seo.services.description')} />
      </Helmet>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="pt-32 pb-20 md:pt-40 md:pb-28 section-padding"
      >
        <div className="max-w-4xl">
          <span className="micro-label block mb-6 hero-animate">{t('services.hero.label')}</span>
          <h1 className="headline-xl mb-6 hero-animate">
            {t('services.hero.title_part1', "L'Art du")} <span className="text-gold">Tadelakt</span>
          </h1>
          <p className="body-text max-w-2xl mb-8 hero-animate">
            {t('services.hero.description')}
          </p>
          <Link to="/devis" className="btn-primary hero-animate">
            {t('common.request_quote')}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-20 md:py-28 section-padding">
        <div className="space-y-20 md:space-y-28">
          {services.map((service, index) => (
            <div
              key={index}
              className={`service-card grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image */}
              <div
                className={`aspect-[4/3] rounded-2xl overflow-hidden ${
                  index % 2 === 1 ? 'lg:order-2' : ''
                }`}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover img-warm transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 flex items-center justify-center bg-gold/10 rounded-full">
                    <service.icon className="w-6 h-6 text-gold" strokeWidth={1.5} />
                  </div>
                  <h2 className="headline-md">{service.title}</h2>
                </div>
                <p className="body-text mb-8">{service.description}</p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-gold flex-shrink-0" strokeWidth={1.5} />
                      <span className="font-body text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/gallery"
                  className="inline-flex items-center gap-2 font-ui text-sm uppercase tracking-widest text-gold hover:underline"
                >
                  {t('common.learn_more')}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section ref={processRef} className="py-20 md:py-28 section-padding bg-charcoal">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left - Title */}
          <div>
            <span className="micro-label block mb-4 text-warm-white/70">
              {t('services.process.label')}
            </span>
            <h2 className="headline-lg text-warm-white mb-6">
              {t('services.process.title_part1', 'Comment Nous')} <span className="text-gold">{t('services.process.title_part2', 'Travaillons')}</span>
            </h2>
            <p className="font-body text-warm-white/70 leading-relaxed max-w-md">
              {t('services.process.desc')}
            </p>
          </div>

          {/* Right - Steps */}
          <div className="space-y-8">
            {process.map((item, index) => (
              <div key={index} className="process-step flex gap-6">
                <span className="font-display text-4xl md:text-5xl font-light text-gold/30">
                  {item.step}
                </span>
                <div>
                  <h3 className="font-display text-xl text-warm-white mb-2">
                    {item.title}
                  </h3>
                  <p className="font-body text-sm text-warm-white/60">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 section-padding">
        <div className="max-w-3xl mx-auto text-center">
          <span className="micro-label block mb-4">{t('common.start_now')}</span>
          <h2 className="headline-lg mb-6">
            {t('services.cta.title')}
          </h2>
          <p className="body-text max-w-xl mx-auto mb-10">
            {t('services.cta.description')}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/devis" className="btn-primary">
              {t('common.request_quote')}
            </Link>
            <Link
              to="/contact"
              className="btn-secondary border-charcoal text-charcoal"
            >
              {t('common.our_info')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
