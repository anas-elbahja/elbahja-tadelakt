import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Droplets, Leaf, Shield, Infinity } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import heroImg from '../assets/images/hero_bathroom.webp';
import projectArchImg from '../assets/images/project_arch.webp';
import projectShowerImg from '../assets/images/project_shower.jpg';
import projectTextureImg from '../assets/images/project_texture.jpg';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroImageRef = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero entrance animation
      gsap.fromTo(
        heroImageRef.current,
        { opacity: 0, scale: 1.08, y: 24 },
        { opacity: 1, scale: 1, y: 0, duration: 1, ease: 'power2.out' }
      );

      gsap.fromTo(
        heroTextRef.current?.querySelectorAll('.hero-animate') || [],
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power2.out',
          delay: 0.3,
        }
      );

      // Features section
      gsap.fromTo(
        featuresRef.current?.querySelectorAll('.feature-card') || [],
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: featuresRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Gallery section
      gsap.fromTo(
        galleryRef.current?.querySelectorAll('.gallery-preview-item') || [],
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: galleryRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Testimonials section
      gsap.fromTo(
        testimonialsRef.current?.querySelectorAll('.testimonial-card') || [],
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: testimonialsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // CTA section
      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: ctaRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const features = [
    {
      icon: Droplets,
      title: t('home.features.waterproof.title'),
      description: t('home.features.waterproof.description'),
    },
    {
      icon: Infinity,
      title: t('home.features.seamless.title'),
      description: t('home.features.seamless.description'),
    },
    {
      icon: Leaf,
      title: t('home.features.natural.title'),
      description: t('home.features.natural.description'),
    },
    {
      icon: Shield,
      title: t('home.features.durable.title'),
      description: t('home.features.durable.description'),
    },
  ];

  const galleryImages = [
    { src: heroImg, alt: 'Salle de bain Tadelakt' },
    { src: projectArchImg, alt: 'Architecture courbe' },
    { src: projectShowerImg, alt: 'Douche seamless' },
    { src: projectTextureImg, alt: 'Texture Tadelakt' },
  ];

  const testimonials = [
    {
      name: t('home.testimonials.t1.name'),
      role: t('home.testimonials.t1.role'),
      text: t('home.testimonials.t1.text'),
    },
    {
      name: t('home.testimonials.t2.name'),
      role: t('home.testimonials.t2.role'),
      text: t('home.testimonials.t2.text'),
    },
    {
      name: t('home.testimonials.t3.name'),
      role: t('home.testimonials.t3.role'),
      text: t('home.testimonials.t3.text'),
    },
  ];

  return (
    <div className="bg-stone">
      <Helmet>
        <title>{t('seo.home.title')}</title>
        <meta name="description" content={t('seo.home.description')} />
      </Helmet>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="min-h-screen flex items-center pt-24 pb-16 section-padding"
      >
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Hero Image */}
          <div ref={heroImageRef} className="order-2 lg:order-1">
            <div className="hero-image-frame relative aspect-[4/5] max-w-lg mx-auto lg:mx-0">
              <img
                src={heroImg}
                alt="Salle de bain Tadelakt traditionnelle à Marrakech - Tadelakt Elbahja"
                className="w-full h-full object-cover img-warm"
                loading="lazy"
              />
            </div>
          </div>

          {/* Hero Text */}
          <div ref={heroTextRef} className="order-1 lg:order-2 lg:pl-8">
            <span className="micro-label block mb-6 hero-animate">
              {t('home.hero.subtitle')}
            </span>
            <h1 className="headline-xl mb-6 hero-animate">
              {t('home.hero.title_part1')}
              <br />
              <span className="text-gold">{t('home.hero.title_part2')}</span>
            </h1>
            <p className="body-text max-w-md mb-8 hero-animate">
              {t('home.hero.description')}
            </p>
            <div className="flex flex-wrap items-center gap-4 hero-animate">
              <Link to="/devis" className="btn-primary">
                {t('common.request_quote', 'Demander un Devis')}
              </Link>
              <Link
                to="/gallery"
                className="inline-flex items-center gap-2 font-ui text-sm uppercase tracking-widest hover:text-gold transition-colors"
              >
                {t('common.see_projects', 'Voir nos Réalisations')}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="py-20 md:py-28 section-padding">
        <div className="text-center mb-16">
          <span className="micro-label block mb-4">{t('home.features.label')}</span>
          <h2 className="headline-lg">{t('home.features.title')}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card p-8 bg-warm-white/5 border border-current border-opacity-10 transition-all duration-500 hover:border-gold/50 hover:-translate-y-2"
            >
              <feature.icon className="w-10 h-10 text-gold mb-6" strokeWidth={1.5} />
              <h3 className="font-display text-xl mb-3">{feature.title}</h3>
              <p className="font-body text-sm opacity-70 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery Preview Section */}
      <section ref={galleryRef} className="py-20 md:py-28 section-padding">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <span className="micro-label block mb-4">{t('home.gallery_preview.label')}</span>
            <h2 className="headline-lg">{t('home.gallery_preview.title')}</h2>
          </div>
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 font-ui text-sm uppercase tracking-widest hover:text-gold transition-colors mt-4 md:mt-0"
          >
            {t('common.see_all')}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="gallery-preview-item gallery-item aspect-[3/4] rounded-lg overflow-hidden"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover img-warm"
                loading="lazy"
              />
              <div className="gallery-overlay">
                <span className="font-ui text-xs uppercase tracking-widest text-warm-white opacity-0 group-hover:opacity-100 transition-opacity">
                  {t('common.learn_more')}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialsRef} className="py-20 md:py-28 section-padding bg-sage">
        <div className="text-center mb-16">
          <span className="micro-label block mb-4 text-warm-white/70">{t('home.testimonials.label')}</span>
          <h2 className="headline-lg text-warm-white">{t('home.testimonials.title')}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial-card p-8 bg-warm-white/5 backdrop-blur-sm"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-gold">★</span>
                ))}
              </div>
              <p className="font-body text-warm-white/90 leading-relaxed mb-6">
                "{testimonial.text}"
              </p>
              <div>
                <p className="font-display text-sm text-warm-white">
                  {testimonial.name}
                </p>
                <p className="font-ui text-xs text-warm-white/50 uppercase tracking-wider">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="py-20 md:py-28 section-padding">
        <div className="max-w-3xl mx-auto text-center">
          <span className="micro-label block mb-4">{t('home.cta.label')}</span>
          <h2 className="headline-lg mb-6">
            {t('home.cta.title')}
          </h2>
          <p className="body-text max-w-xl mx-auto mb-10">
            {t('home.cta.description')}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/devis" className="btn-primary">
              {t('common.request_quote_free')}
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

export default Home;
