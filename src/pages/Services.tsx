import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { Home, Bath, Palette, Sparkles, Check, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);

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
      title: 'Murs en Tadelakt',
      description:
        'Transformez vos murs en surfaces d\'art vivantes. Notre application experte du Tadelakt crée des finitions lisses et veloutées qui respirent et régulent l\'humidité naturellement.',
      features: [
        'Finition sans couture',
        'Régulation naturelle de l\'humidité',
        'Résistant aux moisissures',
        'Large gamme de couleurs',
      ],
      image: '/images/project_modern.jpg',
    },
    {
      icon: Bath,
      title: 'Salles de Bain & Douches',
      description:
        'L\'application par excellence du Tadelakt. Créez des espaces de bain étanches, sans joints de carrelage, d\'une beauté intemporelle et d\'une facilité d\'entretien incomparable.',
      features: [
        '100% étanche',
        'Sans joints de carrelage',
        'Compatible chauffage au sol',
        'Durabilité exceptionnelle',
      ],
      image: '/images/project_shower.jpg',
    },
    {
      icon: Palette,
      title: 'Finitions Décoratives',
      description:
        'Du simple au sophistiqué, nos finitions décoratives mettent en valeur la beauté naturelle du Tadelakt. Niches, arches, et détails architecturaux sur mesure.',
      features: [
        'Niches intégrées',
        'Arches et courbes',
        'Effets texturés',
        'Patine personnalisée',
      ],
      image: '/images/project_niche.jpg',
    },
    {
      icon: Sparkles,
      title: 'Projets Sur Mesure',
      description:
        'Chaque espace est unique. Nous travaillons en étroite collaboration avec vous et vos architectes pour créer des solutions Tadelakt parfaitement adaptées à votre vision.',
      features: [
        'Consultation personnalisée',
        'Plans sur mesure',
        'Collaboration architecte',
        'Suivi de projet dédié',
      ],
      image: '/images/gallery1.jpg',
    },
  ];

  const process = [
    {
      step: '01',
      title: 'Consultation',
      description: 'Nous discutons de votre projet, vos besoins et votre vision.',
    },
    {
      step: '02',
      title: 'Évaluation',
      description: 'Visite sur site et évaluation technique des surfaces.',
    },
    {
      step: '03',
      title: 'Devis',
      description: 'Proposition détaillée avec estimation des coûts et délais.',
    },
    {
      step: '04',
      title: 'Préparation',
      description: 'Préparation minutieuse des surfaces pour une adhérence optimale.',
    },
    {
      step: '05',
      title: 'Application',
      description: 'Application artisanale du Tadelakt en plusieurs couches.',
    },
    {
      step: '06',
      title: 'Finition',
      description: 'Polissage au savon noir pour une étanchéité parfaite.',
    },
  ];

  return (
    <div className="bg-stone">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="pt-32 pb-20 md:pt-40 md:pb-28 section-padding"
      >
        <div className="max-w-4xl">
          <span className="micro-label block mb-6 hero-animate">NOS SERVICES</span>
          <h1 className="headline-xl mb-6 hero-animate">
            L'Art du <span className="text-gold">Tadelakt</span>
          </h1>
          <p className="body-text max-w-2xl mb-8 hero-animate">
            Du savoir-faire ancestral marocain aux techniques contemporaines,
            nous offrons une gamme complète de services pour transformer vos
            espaces en œuvres d'art vivantes.
          </p>
          <Link to="/devis" className="btn-primary hero-animate">
            Demander un Devis
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
                  En Savoir Plus
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
              NOTRE PROCESSUS
            </span>
            <h2 className="headline-lg text-warm-white mb-6">
              Comment Nous <span className="text-gold">Travaillons</span>
            </h2>
            <p className="font-body text-warm-white/70 leading-relaxed max-w-md">
              Chaque projet suit un processus rigoureux pour garantir une finition
              exceptionnelle qui respecte la tradition tout en répondant aux
              exigences modernes.
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
          <span className="micro-label block mb-4">COMMENCEZ DÈS MAINTENANT</span>
          <h2 className="headline-lg mb-6">
            Votre Projet Mérite l'<span className="text-gold">Excellence</span>
          </h2>
          <p className="body-text max-w-xl mx-auto mb-10">
            Contactez-nous pour discuter de votre projet et recevoir un devis
            personnalisé adapté à vos besoins.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/devis" className="btn-primary">
              Demander un Devis
            </Link>
            <Link
              to="/contact"
              className="btn-secondary border-charcoal text-charcoal"
            >
              Nos Infos
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
