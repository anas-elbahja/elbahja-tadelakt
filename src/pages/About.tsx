import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { Award, Users, Clock, MapPin, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import craftsmanshipImg from '../assets/images/craftsmanship.webp';
import aboutArtisanImg from '../assets/images/about_artisan.webp';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const { t, i18n } = useTranslation();
  const heroRef = useRef<HTMLDivElement>(null);
  const storyRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

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

      // Story section
      gsap.fromTo(
        storyRef.current?.querySelectorAll('.story-animate') || [],
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: storyRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Values section
      gsap.fromTo(
        valuesRef.current?.querySelectorAll('.value-card') || [],
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: valuesRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Stats section
      gsap.fromTo(
        statsRef.current?.querySelectorAll('.stat-item') || [],
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: statsRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const values = [
    {
      title: t('about.values.v1.title'),
      description: t('about.values.v1.desc'),
    },
    {
      title: t('about.values.v2.title'),
      description: t('about.values.v2.desc'),
    },
    {
      title: t('about.values.v3.title'),
      description: t('about.values.v3.desc'),
    },
    {
      title: t('about.values.v4.title'),
      description: t('about.values.v4.desc'),
    },
  ];

  const stats = [
    { icon: Clock, value: '15+', label: t('about.stats.exp') },
    { icon: Users, value: '500+', label: t('about.stats.projects') },
    { icon: Award, value: '100%', label: t('about.stats.clients') },
    { icon: MapPin, value: i18n.language === 'ar' ? 'المغرب' : 'Maroc', label: t('about.stats.location') },
  ];

  return (
    <div className="bg-stone">
      <Helmet>
        <title>{t('seo.about.title')}</title>
        <meta name="description" content={t('seo.about.description')} />
      </Helmet>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="pt-32 pb-20 md:pt-40 md:pb-28 section-padding"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <span className="micro-label block mb-6 hero-animate">{t('about.hero.label')}</span>
            <h1 className="headline-xl mb-6 hero-animate">
              {t('about.hero.title_part1')} <span className="text-gold">{t('about.hero.title_part2')}</span>
            </h1>
            <p className="body-text mb-6 hero-animate">
              {t('about.hero.p1')}
            </p>
            <p className="body-text hero-animate">
              {t('about.hero.p2')}
            </p>
          </div>
          <div className="hero-animate">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <img
                src={craftsmanshipImg}
                alt={t('gallery.images.artisanat')}
                className="w-full h-full object-cover img-warm"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section ref={storyRef} className="py-20 md:py-28 section-padding bg-sage">
        <div className="max-w-4xl mx-auto text-center">
          <span className="micro-label block mb-6 text-warm-white/70 story-animate">
            {t('about.story.label')}
          </span>
          <h2 className="headline-lg text-warm-white mb-8 story-animate">
            {t('about.story.title_part1')} <span className="text-gold">{t('about.story.title_part2')}</span>
          </h2>
          <div className="space-y-6 text-warm-white/90">
            <p className="font-body text-lg leading-relaxed story-animate">
              {t('about.story.p1')}
            </p>
            <p className="font-body text-lg leading-relaxed story-animate">
              {t('about.story.p2')}
            </p>
            <p className="font-body text-lg leading-relaxed story-animate">
              {t('about.story.p3')}
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={valuesRef} className="py-20 md:py-28 section-padding">
        <div className="text-center mb-16">
          <span className="micro-label block mb-4">{t('about.values.label')}</span>
          <h2 className="headline-lg">{t('about.values.title')}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="value-card p-8 bg-warm-white/5 border border-current border-opacity-10 transition-all duration-500 hover:border-gold/50"
            >
              <h3 className="font-display text-xl mb-4 text-gold">
                {value.title}
              </h3>
              <p className="font-body text-sm opacity-70 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-20 md:py-28 section-padding bg-charcoal">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item text-center">
              <stat.icon
                className="w-8 h-8 text-gold mx-auto mb-4"
                strokeWidth={1.5}
              />
              <p className="font-display text-4xl md:text-5xl text-warm-white mb-2">
                {stat.value}
              </p>
              <p className="font-ui text-xs uppercase tracking-widest text-warm-white/50">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Team/Quality Section */}
      <section className="py-20 md:py-28 section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <img
                src={aboutArtisanImg}
                alt="Artisan Tadelakt au travail - Savoir-faire ancestral de Tadelakt Elbahja"
                className="w-full h-full object-cover img-warm"
                loading="lazy"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <span className="micro-label block mb-6">{t('about.commitment.label')}</span>
            <h2 className="headline-lg mb-6">
              {t('about.commitment.title_part1')} <span className="text-gold">{t('about.commitment.title_part2')}</span>
            </h2>
            <div className="space-y-4">
              <p className="body-text">
                {t('about.commitment.p1')}
              </p>
              <p className="body-text">
                {t('about.commitment.p2')}
              </p>
              <p className="body-text">
                {t('about.commitment.p3')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 section-padding">
        <div className="max-w-3xl mx-auto text-center">
          <span className="micro-label block mb-4">{t('about.cta.label')}</span>
          <h2 className="headline-lg mb-6">
            {t('about.cta.title')}
          </h2>
          <p className="body-text max-w-xl mx-auto mb-10">
            {t('about.cta.description')}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/contact" className="btn-primary">
              {t('common.contact_us')}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link
              to="/gallery"
              className="btn-secondary border-charcoal text-charcoal"
            >
              {t('common.see_projects')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
