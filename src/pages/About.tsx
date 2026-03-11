import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import { Award, Users, Clock, MapPin } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
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
      title: 'Authenticité',
      description:
        'Nous respectons les techniques ancestrales du Tadelakt, transmises de génération en génération au Maroc.',
    },
    {
      title: 'Excellence',
      description:
        'Chaque projet est réalisé avec le plus grand soin, du premier geste à la finition finale.',
    },
    {
      title: 'Innovation',
      description:
        'Nous adaptons cette technique millénaire aux exigences contemporaines de design et de durabilité.',
    },
    {
      title: 'Durabilité',
      description:
        'Matériaux naturels et processus écologiques pour des surfaces belles et responsables.',
    },
  ];

  const stats = [
    { icon: Clock, value: '15+', label: 'Années d\'Expérience' },
    { icon: Users, value: '500+', label: 'Projets Réalisés' },
    { icon: Award, value: '100%', label: 'Clients Satisfaits' },
    { icon: MapPin, value: 'Maroc', label: '& International' },
  ];

  return (
    <div className="bg-stone">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="pt-32 pb-20 md:pt-40 md:pb-28 section-padding"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <span className="micro-label block mb-6 hero-animate">À PROPOS</span>
            <h1 className="headline-xl mb-6 hero-animate">
              L'Art du <span className="text-gold">Tadelakt</span>
            </h1>
            <p className="body-text mb-6 hero-animate">
              Tadelakt Elbahja est né d'une passion pour l'artisanat marocain et
              le désir de partager cette technique millénaire avec le monde.
            </p>
            <p className="body-text hero-animate">
              Fondée à Marrakech, notre entreprise perpétue une tradition qui
              remonte à plus de 2 000 ans, tout en l'adaptant aux besoins des
              intérieurs contemporains.
            </p>
          </div>
          <div className="hero-animate">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <img
                src="/images/craftsmanship.jpg"
                alt="Artisanat Tadelakt"
                className="w-full h-full object-cover img-warm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section ref={storyRef} className="py-20 md:py-28 section-padding bg-sage">
        <div className="max-w-4xl mx-auto text-center">
          <span className="micro-label block mb-6 text-warm-white/70 story-animate">
            NOTRE HISTOIRE
          </span>
          <h2 className="headline-lg text-warm-white mb-8 story-animate">
            Une Tradition <span className="text-gold">Millénaire</span>
          </h2>
          <div className="space-y-6 text-warm-white/90">
            <p className="font-body text-lg leading-relaxed story-animate">
              Le mot Tadelakt vient de l'arabe "dleka", signifiant "masser" ou
              "frotter". Cette technique de plâtre de chaux, originaire de la
              région de Marrakech, était traditionnellement utilisée pour
              revêtir les citernes, les hammams et les palais.
            </p>
            <p className="font-body text-lg leading-relaxed story-animate">
              Ce qui rend le Tadelakt unique, c'est son processus d'application
              méticuleux : le plâtre est appliqué en couches fines, puis poli
              avec une pierre et traité au savon noir d'olive pour créer une
              surface étanche d'une douceur inégalée.
            </p>
            <p className="font-body text-lg leading-relaxed story-animate">
              Chez Tadelakt Elbahja, nous avons fait le choix de préserver cette
              authenticité. Chacun de nos artisans a été formé aux techniques
              traditionnelles, garantissant une finition qui respecte
              l'héritage de cet art ancestral.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={valuesRef} className="py-20 md:py-28 section-padding">
        <div className="text-center mb-16">
          <span className="micro-label block mb-4">NOS VALEURS</span>
          <h2 className="headline-lg">Ce Qui Nous Anime</h2>
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
                src="/images/project_green.jpg"
                alt="Qualité Tadelakt"
                className="w-full h-full object-cover img-warm"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <span className="micro-label block mb-6">NOTRE ENGAGEMENT</span>
            <h2 className="headline-lg mb-6">
              Qualité & <span className="text-gold">Attention au Détail</span>
            </h2>
            <div className="space-y-4">
              <p className="body-text">
                Chaque projet commence par une évaluation minutieuse des
                surfaces et une discussion approfondie de vos attentes. Nous
                croyons que la préparation est la clé d'une finition parfaite.
              </p>
              <p className="body-text">
                Nos artisans utilisent uniquement des matériaux de première
                qualité : chaux de Marrakech, pigments naturels et savon noir
                d'olive traditionnel. Ce choix garantit non seulement une
                esthétique exceptionnelle, mais aussi une durabilité à toute
                épreuve.
              </p>
              <p className="body-text">
                Nous ne considérons un projet terminé que lorsque chaque détail
                correspond à nos standards exigeants et à vos attentes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 section-padding">
        <div className="max-w-3xl mx-auto text-center">
          <span className="micro-label block mb-4">TRAVAILLONS ENSEMBLE</span>
          <h2 className="headline-lg mb-6">
            Prêt à Découvrir l'Art du <span className="text-gold">Tadelakt</span>?
          </h2>
          <p className="body-text max-w-xl mx-auto mb-10">
            Que vous ayez un projet précis en tête ou simplement envie d'en
            savoir plus, nous serions ravis d'échanger avec vous.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/contact" className="btn-primary">
              Nos Infos
            </Link>
            <Link
              to="/gallery"
              className="btn-secondary border-charcoal text-charcoal"
            >
              Voir Nos Réalisations
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
