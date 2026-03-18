import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Calculator, Info, MessageCircle, RotateCcw, Check, ZoomIn, X } from 'lucide-react';
import { toast } from 'sonner';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';
import spa from '../assets/images/gallery1.webp';
import bathroom from '../assets/images/hero_bathroom.webp';
import facade from '../assets/images/33.jpg';
import exteriorWall from '../assets/images/44.jpg';



gsap.registerPlugin(ScrollTrigger);

const Devis = () => {
  const { t, i18n } = useTranslation();
  const heroRef = useRef<HTMLDivElement>(null);
  const calculatorRef = useRef<HTMLDivElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const [surface, setSurface] = useState<string>('');
  const [surfaceType, setSurfaceType] = useState<'internal' | 'external'>('internal');
  const [price, setPrice] = useState<number | null>(null);
  const [showDetails, setShowDetails] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [fixedPriceMessage, setFixedPriceMessage] = useState<string | null>(null);

  const PRICE_INTERNAL = 110; // MAD per m²
  const PRICE_EXTERNAL = 70; // MAD per m²

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

      // Calculator animation
      gsap.fromTo(
        calculatorRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: calculatorRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Details animation
      gsap.fromTo(
        detailsRef.current?.querySelectorAll('.detail-item') || [],
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: detailsRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const calculatePrice = () => {
    const surfaceValue = parseFloat(surface);
    if (isNaN(surfaceValue) || surfaceValue <= 0) {
      toast.error(i18n.language === 'ar' ? 'يرجى إدخال مساحة صحيحة' : 'Veuillez entrer une surface valide');
      return;
    }

    if (surfaceValue < 100) {
      setPrice(null);
      setShowDetails(false);
      setFixedPriceMessage(
        i18n.language === 'ar'
          ? 'بالنسبة للمساحات التي تقل عن 100 متر مربع، يتم تطبيق سعر ثابت بسبب التكاليف التشغيلية. من 100 متر مربع فما فوق، يتم حساب السعر لكل متر مربع.'
          : i18n.language === 'fr'
            ? "Pour les surfaces inférieures à 100 m², un prix fixe s'applique en raison des coûts opérationnels. À partir de 100 m² et plus, la tarification est calculée au mètre carré."
            : "For surfaces under 100 m², a fixed price applies due to operational costs. From 100 m² and above, pricing is calculated per square meter."
      );
      return;
    }

    setFixedPriceMessage(null);
    const currentPricePerM2 = surfaceType === 'internal' ? PRICE_INTERNAL : PRICE_EXTERNAL;
    const totalPrice = surfaceValue * currentPricePerM2;
    setPrice(totalPrice);
    setShowDetails(true);
    toast.success(t('devis.calculator.success'));
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!calculatorRef.current) return;
    const rect = calculatorRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setMousePos({ x, y });

    // GSAP Tilt Effect
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -5; // tilt up to 5 degrees
    const rotateY = ((x - centerX) / centerX) * 5;

    gsap.to(calculatorRef.current.querySelector('.calculator-card'), {
      rotateX: rotateX,
      rotateY: rotateY,
      duration: 0.5,
      ease: 'power2.out',
      transformPerspective: 1000,
    });
  };

  const handleMouseLeave = () => {
    if (!calculatorRef.current) return;
    gsap.to(calculatorRef.current.querySelector('.calculator-card'), {
      rotateX: 0,
      rotateY: 0,
      duration: 0.5,
      ease: 'power2.out',
    });
  };

  const resetCalculator = () => {
    setSurface('');
    setPrice(null);
    setFixedPriceMessage(null);
    setShowDetails(false);
    toast.info(t('devis.calculator.reset_info'));
  };

  const formatPrice = (value: number) => {
    return new Intl.NumberFormat(i18n.language === 'ar' ? 'ar-MA' : 'fr-MA', {
      style: 'currency',
      currency: 'MAD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const inclusions = [
    t('devis.details.items.app'),
    t('devis.details.items.soap'),
    t('devis.details.items.waterproof'),
  ];

  const notes = [
    t('devis.details.notes.complexity'),
    t('devis.details.notes.small'),
    t('devis.details.notes.travel'),
  ];

  const internalImages = [
    { title: t('gallery.categories.spa'), url: spa },
    { title: t('gallery.categories.bathroom'), url: bathroom },
  ];

  const galleryPreviews = [
    { title: t('devis.categories.facades'), url: facade },
    { title: t('devis.categories.exterior_walls'), url: exteriorWall },
  ];

  return (
    <div className="bg-stone">
      <Helmet>
        <title>{t('seo.devis.title')}</title>
        <meta name="description" content={t('seo.devis.description')} />
      </Helmet>

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="pt-32 pb-20 md:pt-40 md:pb-28 section-padding"
      >
        <div className="max-w-4xl mx-auto text-center">
          <span className="micro-label block mb-6 hero-animate">{t('devis.hero.label')}</span>
          <h1 className="headline-xl mb-6 hero-animate">
            {t('devis.hero.title_part1')} <span className="text-gold">{t('devis.hero.title_part2')}</span>
          </h1>
          <p className="body-text max-w-2xl mx-auto hero-animate">
            {t('devis.hero.description')}
          </p>
        </div>
      </section>

      {/* Calculator Section */}
      <section ref={calculatorRef} className="py-12 md:py-20 section-padding">
        <div className="max-w-2xl mx-auto" style={{ perspective: '1000px' }}>
          <div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="calculator-card bg-charcoal rounded-3xl p-8 md:p-12 relative overflow-hidden group border border-white/5 transition-shadow duration-300 hover:shadow-2xl hover:shadow-gold/10"
          >
            {/* Border Highlight Effect */}
            <div
              className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition duration-300 z-0"
              style={{
                background: `radial-gradient(300px circle at ${mousePos.x}px ${mousePos.y}px, rgba(199, 141, 78, 0.45), transparent 80%)`,
              }}
            />

            {/* Spotlight Glow (Directly behind cursor) */}
            <div
              className="pointer-events-none absolute inset-0 transition duration-300 opacity-0 group-hover:opacity-100 z-0"
              style={{
                background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(199, 141, 78, 0.12), transparent 50%)`,
              }}
            />

            <div className="relative z-10 flex items-center justify-center gap-3 mb-8">
              <Calculator className="w-8 h-8 text-gold" strokeWidth={1.5} />
              <h2 className="font-display text-2xl md:text-3xl text-warm-white">
                {t('devis.calculator.title')}
              </h2>
            </div>

            <div className="space-y-8">
              {/* Type Selection */}
              <div className="flex bg-warm-white/5 border border-white/10 rounded-lg p-1">
                <button
                  onClick={() => { setSurfaceType('internal'); setPrice(null); setFixedPriceMessage(null); setShowDetails(false); }}
                  className={`flex-1 py-3 text-sm font-ui uppercase tracking-widest transition-all rounded-md ${surfaceType === 'internal'
                    ? 'bg-gold text-charcoal'
                    : 'text-warm-white/70 hover:text-warm-white hover:bg-white/5'
                    }`}
                >
                  {t('devis.calculator.internal')}
                </button>
                <button
                  onClick={() => { setSurfaceType('external'); setPrice(null); setFixedPriceMessage(null); setShowDetails(false); }}
                  className={`flex-1 py-3 text-sm font-ui uppercase tracking-widest transition-all rounded-md ${surfaceType === 'external'
                    ? 'bg-gold text-charcoal'
                    : 'text-warm-white/70 hover:text-warm-white hover:bg-white/5'
                    }`}
                >
                  {t('devis.calculator.external')}
                </button>
              </div>

              <div className="grid grid-cols-2 gap-3 mt-4">
                {(surfaceType === 'internal' ? internalImages : galleryPreviews).map((img, idx) => (
                  <div
                    key={idx}
                    className="relative group overflow-hidden rounded-lg aspect-[4/3] border border-warm-white/10 cursor-pointer"
                    onClick={() => setSelectedImage(img.url)}
                  >
                    <img
                      src={img.url}
                      alt={img.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-charcoal/60 flex items-end justify-between p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-white text-xs font-ui uppercase tracking-wider">{img.title}</span>
                      <ZoomIn className="w-5 h-5 text-white" strokeWidth={1.5} />
                    </div>
                  </div>
                ))}
              </div>

              {/* Input */}
              <div>
                <label
                  htmlFor="surface"
                  className="block font-ui text-xs uppercase tracking-widest text-warm-white/70 mb-4 text-center"
                >
                  {t('devis.calculator.surface_label')}
                </label>
                <div className="relative">
                  <input
                    type="number"
                    id="surface"
                    value={surface}
                    onChange={(e) => setSurface(e.target.value)}
                    placeholder="0"
                    min="0"
                    step="0.1"
                    className="calculator-input text-warm-white"
                  />
                  <span className="absolute right-6 top-1/2 -translate-y-1/2 font-display text-xl text-warm-white/50">
                    m²
                  </span>
                </div>
              </div>

              {/* Price per m² info */}
              <div className="text-center">
                <p className="font-ui text-xs uppercase tracking-widest text-warm-white/50 mb-2">
                  {t('devis.calculator.price_per_m2')}
                </p>
                <p className="font-display text-3xl text-gold">
                  {surfaceType === 'internal' ? PRICE_INTERNAL : PRICE_EXTERNAL} MAD
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={calculatePrice}
                  className="flex-1 btn-primary flex items-center justify-center gap-2 group"
                >
                  {t('devis.calculator.calculate')}
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
                <button
                  onClick={resetCalculator}
                  className="flex items-center justify-center gap-2 px-6 py-4 border border-warm-white/30 text-warm-white font-ui text-sm uppercase tracking-widest transition-all duration-300 hover:bg-warm-white/10"
                >
                  <RotateCcw className="w-4 h-4" />
                  {t('devis.calculator.reset')}
                </button>
              </div>

              {/* Result */}
              {price !== null && (
                <div className="mt-8 p-6 bg-gold/10 rounded-2xl text-center animate-fade-in">
                  <p className="font-ui text-xs uppercase tracking-widest text-warm-white/70 mb-2">
                    {t('devis.calculator.total_est')}
                  </p>
                  <p className="price-display text-gold">
                    {formatPrice(price)}
                  </p>
                  <p className="font-body text-sm text-warm-white/50 mt-2">
                    {t('devis.calculator.surface_for', { surface })}
                  </p>
                </div>
              )}

              {fixedPriceMessage && (
                <div className="mt-8 p-6 bg-warm-white/5 border border-gold/30 rounded-2xl text-center animate-fade-in flex flex-col items-center">
                  <Info className="w-6 h-6 text-gold mb-3" />
                  <p className="font-body text-sm text-warm-white/90 mb-4">
                    {fixedPriceMessage}
                  </p>
                  <p className="font-body text-sm text-warm-white/70 mb-4">
                    {i18n.language === 'ar'
                      ? 'للحصول على السعر الدقيق، يرجى التواصل معنا عبر الواتساب.'
                      : i18n.language === 'fr'
                        ? 'Pour obtenir le prix exact, veuillez nous contacter via WhatsApp.'
                        : 'To get the exact price, please contact us via WhatsApp.'}
                  </p>
                  <a
                    href="https://wa.me/212669337793"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whatsapp-btn text-sm py-2 px-6"
                  >
                    <MessageCircle className="w-4 h-4" />
                    {t('common.whatsapp_button')}
                  </a>
                </div>
              )}
            </div>
          </div>
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
            <span className="sr-only">{t('gallery.lightbox.close', 'Fermer')}</span>
          </button>
          <img
            src={selectedImage}
            alt={t('gallery.lightbox.zoom', 'Aperçu')}
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
            loading="lazy"
          />
        </div>
      )}

      {/* Details Section */}
      {showDetails && (
        <section ref={detailsRef} className="py-12 md:py-20 section-padding">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            {/* Inclusions */}
            <div className="detail-item p-8 bg-warm-white/5 border border-current border-opacity-10">
              <h3 className="font-display text-xl mb-6 flex items-center gap-3">
                <Check className="w-6 h-6 text-gold" strokeWidth={1.5} />
                {t('devis.details.includes')}
              </h3>
              <ul className="space-y-4">
                {inclusions.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-gold rounded-full mt-2 flex-shrink-0" />
                    <span className="font-body text-sm opacity-80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Notes */}
            <div className="detail-item p-8 bg-warm-white/5 border border-current border-opacity-10">
              <h3 className="font-display text-xl mb-6 flex items-center gap-3">
                <Info className="w-6 h-6 text-gold" strokeWidth={1.5} />
                {t('devis.details.important')}
              </h3>
              <ul className="space-y-4">
                {notes.map((note, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-gold/50 rounded-full mt-2 flex-shrink-0" />
                    <span className="font-body text-sm opacity-70">{note}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 md:py-28 section-padding bg-sage">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="headline-lg text-warm-white mb-6">
            {t('devis.cta.title_part1')} <span className="text-gold">{t('devis.cta.title_part2')}</span>
          </h2>
          <p className="font-body text-warm-white/80 max-w-xl mx-auto mb-10">
            {t('devis.cta.description')}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://wa.me/212669337793"
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-btn"
            >
              <MessageCircle className="w-5 h-5" />
              {t('common.whatsapp_button')}
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 border border-warm-white/30 text-warm-white font-ui text-sm uppercase tracking-widest transition-all duration-300 hover:bg-warm-white/10 group"
            >
              {t('common.our_info')}
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-28 section-padding">
        <div className="max-w-3xl mx-auto">
          <h2 className="headline-md text-center mb-12">
            {t('devis.faq.title_part1')} <span className="text-gold">{t('devis.faq.title_part2')}</span>
          </h2>
          <div className="space-y-6">
            {[
              {
                q: t('devis.faq.q1.q'),
                a: t('devis.faq.q1.a'),
              },
              {
                q: t('devis.faq.q2.q'),
                a: t('devis.faq.q2.a'),
              },
              {
                q: t('devis.faq.q3.q'),
                a: t('devis.faq.q3.a'),
              },
              {
                q: t('devis.faq.q4.q'),
                a: t('devis.faq.q4.a'),
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="p-6 bg-warm-white/5 border border-current border-opacity-10"
              >
                <h3 className="font-display text-lg mb-3">{faq.q}</h3>
                <p className="font-body text-sm opacity-70">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Devis;
