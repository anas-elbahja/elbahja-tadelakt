import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);

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


      // Info animation
      gsap.fromTo(
        infoRef.current?.querySelectorAll('.info-item') || [],
        { opacity: 0, x: 30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: infoRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);


  const contactInfo = [
    {
      icon: Phone,
      title: 'Téléphone',
      content: '+212 669337793',
      link: 'tel:+212669337793',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'elbahjaanas61@gmail.com',
      link: 'mailto:elbahjaanas61@gmail.com',
    },
    {
      icon: MapPin,
      title: 'Adresse',
      content: 'Marrakech, Maroc',
      link: '#',
    },
    {
      icon: Clock,
      title: 'Horaires',
      content: 'Lun - Sam: 9h00 - 18h00',
      link: '#',
    },
  ];

  return (
    <div className="bg-stone">
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="pt-32 pb-20 md:pt-40 md:pb-28 section-padding"
      >
        <div className="max-w-4xl mx-auto text-center">
          <span className="micro-label block mb-6 hero-animate">CONTACT</span>
          <h1 className="headline-xl mb-6 hero-animate">
            Parlons de Votre <span className="text-gold">Projet</span>
          </h1>
          <p className="body-text max-w-2xl mx-auto hero-animate">
            Que vous ayez une question, besoin d'un devis, ou simplement envie
            d'en savoir plus sur le Tadelakt, nous sommes là pour vous aider.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20 section-padding">
        <div className="max-w-xl mx-auto">
          {/* Contact Info */}
          <div ref={infoRef}>
            <h2 className="headline-md mb-8 text-center">Informations de Contact</h2>
            <div className="space-y-6 mb-10">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="info-item flex items-start gap-4 p-4 bg-warm-white/5 border border-current border-opacity-10 transition-all duration-300 hover:border-gold/50"
                >
                  <div className="w-12 h-12 flex items-center justify-center bg-gold/10 rounded-full flex-shrink-0">
                    <info.icon className="w-5 h-5 text-gold" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-display text-sm mb-1">{info.title}</h3>
                    <p className="font-body text-sm opacity-70">{info.content}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <div className="p-6 bg-warm-white/5 border border-current border-opacity-10 text-center">
              <h3 className="font-display text-lg mb-3">
                Préférez WhatsApp?
              </h3>
              <p className="font-body text-sm opacity-70 mb-4">
                Contactez-nous directement sur WhatsApp pour une réponse rapide.
              </p>
              <a
                href="https://wa.me/212669337793"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-btn w-full justify-center"
              >
                <MessageCircle className="w-5 h-5" />
                Discuter sur WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 md:py-20 section-padding">
        <div className="aspect-[21/9] rounded-2xl overflow-hidden bg-charcoal/10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108703.13118407613!2d-8.0778939!3d31.6346023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafee8d96179e51%3A0x5950b6534f87adb8!2sMarrakech%2C%20Morocco!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'grayscale(30%)' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localisation Tadelakt Elbahja"
          />
        </div>
      </section>
    </div>
  );
};

export default Contact;
