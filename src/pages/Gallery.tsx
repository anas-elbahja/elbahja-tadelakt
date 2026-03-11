import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { X, ZoomIn } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
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
      src: '/images/hero_bathroom.jpg',
      alt: 'Salle de bain Tadelakt élégante',
      category: 'Salle de Bain',
    },
    {
      src: '/images/project_arch.jpg',
      alt: 'Architecture courbe en Tadelakt',
      category: 'Murs',
    },
    {
      src: '/images/project_shower.jpg',
      alt: 'Douche seamless Tadelakt',
      category: 'Douche',
    },
    {
      src: '/images/project_texture.jpg',
      alt: 'Texture Tadelakt détaillée',
      category: 'Détail',
    },
    {
      src: '/images/project_modern.jpg',
      alt: 'Salle de bain moderne Tadelakt',
      category: 'Salle de Bain',
    },
    {
      src: '/images/project_green.jpg',
      alt: 'Salle de bain avec accents verts',
      category: 'Salle de Bain',
    },
    {
      src: '/images/project_niche.jpg',
      alt: 'Niche intégrée Tadelakt',
      category: 'Détail',
    },
    {
      src: '/images/project_detail.jpg',
      alt: 'Détail finition Tadelakt',
      category: 'Détail',
    },
    {
      src: '/images/gallery1.jpg',
      alt: 'Salle de bain luxueuse Tadelakt',
      category: 'Salle de Bain',
    },
    {
      src: '/images/gallery2.jpg',
      alt: 'Douche minimaliste Tadelakt',
      category: 'Douche',
    },
    {
      src: '/images/gallery3.jpg',
      alt: 'Vanity Tadelakt organique',
      category: 'Vanity',
    },
    {
      src: '/images/gallery4.jpg',
      alt: 'Niche décorative Tadelakt',
      category: 'Décoratif',
    },
    {
      src: '/images/sage_oasis.jpg',
      alt: 'Spa Tadelakt',
      category: 'Spa',
    },
    {
      src: '/images/craftsmanship.jpg',
      alt: 'Artisanat Tadelakt',
      category: 'Processus',
    },
  ];

  const categories = ['Tous', ...Array.from(new Set(galleryImages.map((img) => img.category)))];
  const [activeCategory, setActiveCategory] = useState('Tous');

  const filteredImages =
    activeCategory === 'Tous'
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <div className="bg-stone">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="pt-32 pb-16 md:pt-40 md:pb-20 section-padding"
      >
        <div className="max-w-4xl mx-auto text-center">
          <span className="micro-label block mb-6 hero-animate">NOTRE PORTFOLIO</span>
          <h1 className="headline-xl mb-6 hero-animate">
            Galerie de <span className="text-gold">Réalisations</span>
          </h1>
          <p className="body-text max-w-2xl mx-auto hero-animate">
            Découvrez nos projets de Tadelakt, du simple mur à la salle de bain
            complète. Chaque réalisation est unique, façonnée à la main selon la
            tradition marocaine.
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
              {category}
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
              />
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/40 transition-all duration-500 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                  <ZoomIn className="w-8 h-8 text-warm-white mx-auto mb-2" strokeWidth={1.5} />
                  <span className="font-ui text-xs uppercase tracking-widest text-warm-white">
                    {image.category}
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
          </button>
          <img
            src={selectedImage}
            alt="Vue agrandie"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 md:py-28 section-padding">
        <div className="max-w-3xl mx-auto text-center">
          <span className="micro-label block mb-4">VOTRE PROJET</span>
          <h2 className="headline-lg mb-6">
            Envie d'un Résultat <span className="text-gold">Similaire</span>?
          </h2>
          <p className="body-text max-w-xl mx-auto mb-10">
            Chaque projet est unique. Contactez-nous pour discuter de vos idées
            et recevoir un devis personnalisé.
          </p>
          <a href="/devis" className="btn-primary">
            Demander un Devis
          </a>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
