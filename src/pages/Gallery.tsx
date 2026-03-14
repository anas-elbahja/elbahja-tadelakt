import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { X, ZoomIn, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import heroBathroomImg from '../assets/images/hero_bathroom.jpg';
import projectArchImg from '../assets/images/project_arch.jpg';
import projectShowerImg from '../assets/images/project_shower.jpg';
import projectTextureImg from '../assets/images/project_texture.jpg';
import projectModernImg from '../assets/images/project_modern.jpg';
import projectGreenImg from '../assets/images/project_green.jpg';
import projectNicheImg from '../assets/images/project_niche.jpg';
import projectDetailImg from '../assets/images/project_detail.jpg';
import gallery1Img from '../assets/images/gallery1.jpg';
import gallery2Img from '../assets/images/gallery2.jpg';
import gallery3Img from '../assets/images/gallery3.jpg';
import gallery4Img from '../assets/images/gallery4.jpg';
import sageOasisImg from '../assets/images/sage_oasis.jpg';
import craftsmanshipImg from '../assets/images/craftsmanship.jpg';

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  const { t } = useTranslation();
  const heroRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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

      // Gallery items
      gsap.fromTo(
        galleryRef.current?.querySelectorAll('.gallery-item') || [],
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: galleryRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const galleryImages = [
    {
      src: heroBathroomImg,
      alt: t('gallery.images.bathroom_ele'),
      category: 'bathroom',
    },
    {
      src: projectArchImg,
      alt: t('gallery.images.arch_curve'),
      category: 'walls',
    },
    {
      src: projectShowerImg,
      alt: t('gallery.images.shower_seamless'),
      category: 'shower',
    },
    {
      src: projectTextureImg,
      alt: t('gallery.images.texture_detail'),
      category: 'detail',
    },
    {
      src: projectModernImg,
      alt: t('gallery.images.bathroom_modern'),
      category: 'bathroom',
    },
    {
      src: projectGreenImg,
      alt: t('gallery.images.bathroom_green'),
      category: 'bathroom',
    },
    {
      src: projectNicheImg,
      alt: t('gallery.images.niche_integrated'),
      category: 'detail',
    },
    {
      src: projectDetailImg,
      alt: t('gallery.images.finish_detail'),
      category: 'detail',
    },
    {
      src: gallery1Img,
      alt: t('gallery.images.bathroom_lux'),
      category: 'bathroom',
    },
    {
      src: gallery2Img,
      alt: t('gallery.images.shower_minimalist'),
      category: 'shower',
    },
    {
      src: gallery3Img,
      alt: t('gallery.images.vanity_organic'),
      category: 'vanity',
    },
    {
      src: gallery4Img,
      alt: t('gallery.images.niche_decor'),
      category: 'decor',
    },
    {
      src: sageOasisImg,
      alt: t('gallery.images.spa_tadelakt'),
      category: 'spa',
    },
    {
      src: craftsmanshipImg,
      alt: t('gallery.images.artisanat'),
      category: 'process',
    },
  ];

  const categories = ['all', ...Array.from(new Set(galleryImages.map((img) => img.category)))];
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredImages =
    activeCategory === 'all'
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <div className="bg-stone">
      <Helmet>
        <title>{t('seo.gallery.title')}</title>
        <meta name="description" content={t('seo.gallery.description')} />
      </Helmet>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="pt-32 pb-16 md:pt-40 md:pb-20 section-padding"
      >
        <div className="max-w-4xl mx-auto text-center">
          <span className="micro-label block mb-6 hero-animate">{t('gallery.hero.label')}</span>
          <h1 className="headline-xl mb-6 hero-animate">
            {t('gallery.hero.title_part1')} <span className="text-gold">{t('gallery.hero.title_part2')}</span>
          </h1>
          <p className="body-text max-w-2xl mx-auto hero-animate">
            {t('gallery.hero.description')}
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="pb-8 section-padding">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 font-ui text-xs uppercase tracking-widest transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gold text-warm-white'
                  : 'bg-transparent border border-current border-opacity-30 hover:border-gold'
              }`}
            >
              {t(`gallery.categories.${category}`)}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section ref={galleryRef} className="py-12 md:py-16 section-padding">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="gallery-item group relative aspect-[3/4] rounded-lg overflow-hidden cursor-pointer"
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover img-warm transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/40 transition-all duration-500 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                  <ZoomIn className="w-8 h-8 text-warm-white mx-auto mb-2" strokeWidth={1.5} />
                  <span className="font-ui text-xs uppercase tracking-widest text-warm-white">
                    {t(`gallery.categories.${image.category}`)}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-charcoal/95 flex items-center justify-center p-4 md:p-8"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center text-warm-white hover:text-gold transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" strokeWidth={1.5} />
            <span className="sr-only">{t('gallery.lightbox.close')}</span>
          </button>
          <img
            src={selectedImage}
            alt={t('gallery.lightbox.zoom')}
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
            loading="lazy"
          />
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 md:py-28 section-padding">
        <div className="max-w-3xl mx-auto text-center">
          <span className="micro-label block mb-4">{t('gallery.cta.label')}</span>
          <h2 className="headline-lg mb-6">
            {t('gallery.cta.title_part1')} <span className="text-gold">{t('gallery.cta.title_part2')}</span>
          </h2>
          <p className="body-text max-w-xl mx-auto mb-10">
            {t('gallery.cta.description')}
          </p>
          <a href="/devis" className="btn-primary group">
            {t('common.request_quote')}
            <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
