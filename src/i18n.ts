import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  fr: {
    translation: {
      "nav": {
        "home": "Accueil",
        "services": "Services",
        "gallery": "Réalisations",
        "about": "À Propos",
        "contact": "Contact",
        "devis": "Devis",
        "devis_btn": "Devis Gratuit"
      },
      "common": {
        "whatsapp_button": "Discuter sur WhatsApp",
        "whatsapp_message": "Bonjour, je suis intéressé par vos services Tadelakt. Pourriez-vous m'en dire plus ?",
        "request_quote": "Demander un Devis",
        "request_quote_free": "Demander un Devis Gratuit",
        "see_projects": "Voir nos Réalisations",
        "learn_more": "En Savoir Plus",
        "see_all": "Voir Tout",
        "contact_us": "Contactez-nous",
        "our_info": "Nos Infos",
        "loading": "Chargement...",
        "start_now": "Commencez dès maintenant",
        "douches": "Douches"
      },
      "seo": {
        "home": {
          "title": "Tadelakt Elbahja | Artisanat Marocain Authentique",
          "description": "Spécialiste du Tadelakt traditionnel à Marrakech. Découvrez l'élégance du plâtre à la chaux pour vos salles de bain et murs."
        },
        "services": {
          "title": "Nos Services Tadelakt | Tadelakt Elbahja",
          "description": "De la salle de bain au projet sur mesure, découvrez nos services d'application de Tadelakt authentique."
        },
        "gallery": {
          "title": "Galerie Réalisations Tadelakt | Tadelakt Elbahja",
          "description": "Découvrez nos projets de Tadelakt en photos : douches, murs, vasques et finitions décoratives."
        },
        "about": {
          "title": "À Propos de Nous | Tadelakt Elbahja",
          "description": "L'histoire et les valeurs de Tadelakt Elbahja, artisans passionnés par le plâtre de chaux traditionnel marocain."
        },
        "contact": {
          "title": "Contactez-nous | Tadelakt Elbahja",
          "description": "Besoin d'un renseignement ou d'une visite ? Contactez Tadelakt Elbahja à Marrakech."
        },
        "devis": {
          "title": "Devis Gratuit Tadelakt | Tadelakt Elbahja",
          "description": "Estimez le prix de votre projet Tadelakt en ligne et recevez un devis personnalisé gratuitement."
        }
      },
      "footer": {
        "brand_desc": "L'art ancestral du Tadelakt marocain, réinventé pour les intérieurs contemporains.",
        "rights": "Tous droits réservés.",
        "privacy": "Politique de Confidentialité",
        "terms": "Conditions d'Utilisation"
      },
      "features": {
        "water_reg": "Régulation naturelle de l'humidité",
        "mold_res": "Résistant aux moisissures",
        "color_range": "Large gamme de couleurs",
        "no_joints": "Sans joints de carrelage",
        "heated_floor": "Compatible chauffage au sol",
        "niches": "Niches intégrées",
        "arches": "Arches et courbes",
        "textured": "Effets texturés",
        "patina": "Patine personnalisée",
        "consult": "Consultation personnalisée",
        "custom_plans": "Plans sur mesure",
        "arch_collaboration": "Collaboration architecte",
        "dedicated_followup": "Suivi de projet dédié"
      },
      "home": {
        "hero": {
          "subtitle": "TADELAKT • PLÂTRE MAROCAIN",
          "title_part1": "Tadelakt Authentique",
          "title_part2": "Élégance Moderne",
          "description": "Murs et baignoires sans couture, étanches et finis à la main selon la tradition millénaire du plâtre de chaux marocain."
        },
        "features": {
          "label": "POURQUOI CHOISIR LE TADELAKT?",
          "title": "Avantages Uniques",
          "waterproof": {
            "title": "Imperméable",
            "description": "Surface naturellement étanche, idéale pour douches et salles de bain."
          },
          "seamless": {
            "title": "Sans Joint",
            "description": "Finition continue sans joints de carrelage pour un aspect luxueux."
          },
          "natural": {
            "title": "100% Naturel",
            "description": "Chaux, pigments naturels et savon noir—sans COV ni produits chimiques."
          },
          "durable": {
            "title": "Durable",
            "description": "Développe une patine unique tout en restant étanche pendant des décennies."
          }
        },
        "gallery_preview": {
          "label": "NOTRE PORTFOLIO",
          "title": "Galerie de Projets"
        },
        "testimonials": {
          "label": "TÉMOIGNAGES",
          "title": "Ce Que Disent Nos Clients",
          "t1": { "name": "Fatima B.", "role": "Propriétaire, Marrakech", "text": "Notre salle de bain est devenue un véritable sanctuaire. La qualité du travail est exceptionnelle et le résultat dépasse nos attentes." },
          "t2": { "name": "Pierre L.", "role": "Architecte d'Intérieur, Casablanca", "text": "Je recommande Tadelakt Elbahja à tous mes clients. Leur maîtrise de cette technique ancestrale est remarquable." },
          "t3": { "name": "Sophie M.", "role": "Propriétaire, Rabat", "text": "Un travail d'artisan véritable. L'équipe a transformé notre salle de bain en un espace de bien-être unique." }
        },
        "cta": {
          "label": "COMMENCEZ VOTRE PROJET",
          "title": "Prêt à Transformer Votre Espace?",
          "description": "Contactez-nous dès aujourd'hui pour discuter de votre projet et recevoir un devis personnalisé gratuitement."
        }
      },
      "services": {
        "hero": {
          "label": "NOS SERVICES",
          "title_part1": "L'Art du",
          "title_part2": "Tadelakt",
          "description": "Du savoir-faire ancestral marocain aux techniques contemporaines, nous offrons une gamme complète de services pour transformer vos espaces en œuvres d'art vivantes."
        },
        "list": {
          "walls": {
            "title": "Murs en Tadelakt",
            "desc": "Transformez vos murs en surfaces d'art vivantes. Notre application experte du Tadelakt crée des finitions lisses et veloutées qui respirent et régulent l'humidité naturellement."
          },
          "bathrooms": {
            "title": "Salles de Bain & Douches",
            "desc": "L'application par excellence du Tadelakt. Créez des espaces de bain étanches, sans joints de carrelage, d'une beauté intemporelle et d'une facilité d'entretien incomparable."
          },
          "decorative": {
            "title": "Finitions Décoratives",
            "desc": "Du simple au sophistiqué, nos finitions décoratives mettent en valeur la beauté naturelle du Tadelakt. Niches, arches, et détails architecturales sur mesure."
          },
          "custom": {
            "title": "Projets Sur Mesure",
            "desc": "Chaque espace est unique. Nous travaillons en étroite collaboration avec vous et vos architectes pour créer des solutions Tadelakt parfaitement adaptées à votre vision."
          }
        },
        "process": {
          "label": "NOTRE PROCESSUS",
          "title_part1": "Comment Nous",
          "title_part2": "Travaillons",
          "desc": "Chaque projet suit un processus rigoureux pour garantir une finition exceptionnelle qui respecte la tradition tout en répondant aux exigences modernes.",
          "step1": { "title": "Consultation", "desc": "Nous discutons de votre projet, vos besoins et votre vision." },
          "step2": { "title": "Évaluation", "desc": "Visite sur site et évaluation technique des surfaces." },
          "step3": { "title": "Devis", "desc": "Proposition détaillée avec estimation des coûts et délais." },
          "step4": { "title": "Préparation", "desc": "Préparation minutieuse des surfaces pour une adhérence optimale." },
          "step5": { "title": "Application", "desc": "Application artisanale du Tadelakt en plusieurs couches." },
          "step6": { "title": "Finition", "desc": "Polissage au savon noir pour une étanchéité parfaite." }
        },
        "cta": {
          "title": "Votre Projet Mérite l'Excellence",
          "description": "Contactez-nous pour discuter de votre projet et recevoir un devis personnalisé adapté à vos besoins."
        }
      },
      "about": {
        "hero": {
          "label": "À PROPOS",
          "title_part1": "L'Art du",
          "title_part2": "Tadelakt",
          "p1": "Tadelakt Elbahja est né d'une passion pour l'artisanat marocain et le désir de partager cette technique millénaire avec le monde.",
          "p2": "Fondée à Marrakech, notre entreprise perpétue une tradition qui remonte à plus de 2 000 ans, tout en l'adaptant aux besoins des intérieurs contemporains."
        },
        "story": {
          "label": "NOTRE HISTOIRE",
          "title_part1": "Une Tradition",
          "title_part2": "Millénaire",
          "p1": "Le mot Tadelakt vient de l'arabe \"dleka\", signifiant \"masser\" ou \"frotter\". Cette technique de plâtre de chaux, originaire de la région de Marrakech, était traditionnellement utilisée pour revêtir les citernes, les hammams et les palais.",
          "p2": "Ce qui rend le Tadelakt unique, c'est son processus d'application méticuleux : le plâtre est appliqué en couches fines, puis poli avec une pierre et traité au savon noir d'olive pour créer une surface étanche d'une douceur inégalée.",
          "p3": "Chez Tadelakt Elbahja, nous avons fait le choix de préserver cette authenticité. Chacun de nos artisans a été formé aux techniques traditionnelles, garantissant une finition qui respecte l'héritage de cet art ancestral."
        },
        "values": {
          "label": "NOS VALEURS",
          "title": "Ce Qui Nous Anime",
          "v1": { "title": "Authenticité", "desc": "Nous respectons les techniques ancestrales du Tadelakt, transmises de génération en génération au Maroc." },
          "v2": { "title": "Excellence", "desc": "Chaque projet est réalisé avec le plus grand soin, du premier geste à la finition finale." },
          "v3": { "title": "Innovation", "desc": "Nous adaptons cette technique millénaire aux exigences contemporaines de design et de durabilité." },
          "v4": { "title": "Durabilité", "desc": "Matériaux naturels et processus écologiques pour des surfaces belles et responsables." }
        },
        "stats": {
          "exp": "Années d'Expérience",
          "projects": "Projets Réalisés",
          "clients": "Clients Satisfatits",
          "location": "& International"
        },
        "commitment": {
          "label": "NOTRE ENGAGEMENT",
          "title_part1": "Qualité &",
          "title_part2": "Attention au Détail",
          "p1": "Chaque projet commence par une évaluation minutieuse des surfaces et une discussion approfondie de vos attentes. Nous croyons que la préparation est la clé d'une finition parfaite.",
          "p2": "Nos artisans utilisent uniquement des matériaux de première qualité : chaux de Marrakech, pigments naturels et savon noir d'olive traditionnel.",
          "p3": "Nous ne considérons un projet terminé que lorsque chaque détail correspond à nos standards exigeants et à vos attentes."
        },
        "cta": {
          "label": "TRAVAILLONS ENSEMBLE",
          "title": "Prêt à Découvrir l'Art du Tadelakt?",
          "description": "Que vous ayez un projet précis en tête ou simplement envie d'en savoir plus, nous serions ravis d'échanger avec vous."
        }
      },
      "gallery": {
        "hero": {
          "label": "NOTRE PORTFOLIO",
          "title_part1": "Galerie de",
          "title_part2": "Réalisations",
          "description": "Découvrez nos projets de Tadelakt, du simple mur à la salle de bain complète. Chaque réalisation est unique, façonnée à la main selon la tradition marocaine."
        },
        "categories": {
          "all": "Tous",
          "bathroom": "Salle de Bain",
          "walls": "Murs",
          "shower": "Douche",
          "detail": "Détail",
          "vanity": "Vanity",
          "decor": "Décoratif",
          "spa": "Spa",
          "process": "Processus"
        },
        "lightbox": {
          "close": "Fermer",
          "zoom": "Vue agrandie"
        },
        "cta": {
          "label": "VOTRE PROJET",
          "title_part1": "Envie d'un Résultat",
          "title_part2": "Similaire?",
          "description": "Chaque projet est unique. Contactez-nous pour discuter de vos idées et recevoir un devis personnalisé."
        }
      },
      "contact": {
        "hero": {
          "label": "CONTACT",
          "title_part1": "Parlons de Votre",
          "title_part2": "Projet",
          "description": "Que vous ayez une question, besoin d'un devis, ou simplement envie d'en savoir plus sur le Tadelakt, nous sommes là pour vous aider."
        },
        "info": {
          "title": "Informations de Contact",
          "phone": "Téléphone",
          "email": "Email",
          "address": "Adresse",
          "hours": "Horaires",
          "hours_val": "Lun - Sam: 9h00 - 18h00"
        },
        "whatsapp_cta": {
          "title": "Préférez WhatsApp?",
          "description": "Contactez-nous directement sur WhatsApp pour une réponse rapide."
        },
        "map_title": "Localisation Tadelakt Elbahja"
      },
      "devis": {
        "hero": {
          "label": "DEVIS GRATUIT",
          "title_part1": "Calculez Votre",
          "title_part2": "Devis",
          "description": "Obtenez une estimation instantanée pour votre projet Tadelakt. Entrez simplement la surface en mètres carrés et découvrez le prix indicatif."
        },
        "calculator": {
          "title": "Calculateur de Prix",
          "internal": "Intérieur",
          "external": "Extérieur",
          "surface_label": "Surface en m²",
          "price_per_m2": "Prix par m²",
          "calculate": "Calculer",
          "reset": "Réinitialiser",
          "total_est": "Estimation Totale",
          "surface_for": "Pour {{surface}} m² de surface Tadelakt",
          "success": "Calcul effectué avec succès!",
          "reset_info": "Calculateur réinitialisé",
          "error_surface": "Veuillez entrer une surface valide"
        },
        "details": {
          "includes": "Ce Prix Inclut",
          "important": "Informations Importantes",
          "items": {
            "app": "Application du Tadelakt (2-3 couches)",
            "soap": "Polissage au savon noir",
            "waterproof": "Finition étanche"
          },
          "notes": {
            "complexity": "Le prix peut varier selon la complexité du projet",
            "small": "Les surfaces inférieures à 100m² peuvent avoir un tarif majoré",
            "travel": "Transport et hébergement en dehors de Marrakech en sus"
          }
        },
        "cta": {
          "title_part1": "Prêt à Passer à l'",
          "title_part2": "Action?",
          "description": "Ce calculateur vous donne une estimation indicative. Pour un devis précis et personnalisé, contactez-nous directement."
        },
        "faq": {
          "title_part1": "Questions",
          "title_part2": "Fréquentes",
          "q1": { "q": "Combien de temps dure l'application?", "a": "Une salle de bain standard prend environ 4-5 jours à appliquer." },
          "q2": { "q": "Le Tadelakt nécessite-t-il beaucoup d'entretien?", "a": "Non, un entretien minimal suffit. Un nettoyage régulier avec un savon pH neutre et une réapplication de savon noir tous les 2-3 ans." },
          "q3": { "q": "Puis-je choisir n'importe quelle couleur?", "a": "Oui! Nous pouvons créer pratiquement n'importe quelle teinte en mélangeant des pigments naturels à la chaux." },
          "q4": { "q": "Le Tadelakt est-il vraiment étanche?", "a": "Oui, lorsqu'il est correctement appliqué et traité au savon noir, le Tadelakt est 100% étanche." }
        },
        "categories": {
          "facades": "Façades",
          "exterior_walls": "Murs Extérieurs",
          "pools": "Piscines",
          "terraces": "Terrasses",
          "rooms": "Chambres"
        }
      }
    }
  },
  en: {
    translation: {
      "nav": {
        "home": "Home",
        "services": "Services",
        "gallery": "Portfolio",
        "about": "About Us",
        "contact": "Contact",
        "devis": "Quote",
        "devis_btn": "Free Quote"
      },
      "common": {
        "whatsapp_button": "Chat on WhatsApp",
        "whatsapp_message": "Hello, I am interested in your Tadelakt services. Could you please tell me more?",
        "request_quote": "Request a Quote",
        "request_quote_free": "Request a Free Quote",
        "see_projects": "View our Portfolio",
        "learn_more": "Learn More",
        "see_all": "View All",
        "contact_us": "Contact Us",
        "our_info": "Our Details",
        "loading": "Loading...",
        "start_now": "Start Now",
        "douches": "Showers"
      },
      "seo": {
        "home": {
          "title": "Tadelakt Elbahja | Authentic Moroccan Craftsmanship",
          "description": "Specialist in traditional Tadelakt in Marrakech. Discover the elegance of lime plaster for your bathrooms and walls."
        },
        "services": {
          "title": "Our Tadelakt Services | Tadelakt Elbahja",
          "description": "From bathrooms to custom projects, discover our authentic Tadelakt application services."
        },
        "gallery": {
          "title": "Tadelakt Project Gallery | Tadelakt Elbahja",
          "description": "Discover our Tadelakt projects in photos: showers, walls, sinks, and decorative finishes."
        },
        "about": {
          "title": "About Us | Tadelakt Elbahja",
          "description": "The history and values of Tadelakt Elbahja, artisans passionate about traditional Moroccan lime plaster."
        },
        "contact": {
          "title": "Contact Us | Tadelakt Elbahja",
          "description": "Need information or a visit? Contact Tadelakt Elbahja in Marrakech."
        },
        "devis": {
          "title": "Free Tadelakt Quote | Tadelakt Elbahja",
          "description": "Estimate the price of your Tadelakt project online and receive a personalized quote for free."
        }
      },
      "footer": {
        "brand_desc": "The ancestral art of Moroccan Tadelakt, reinvented for contemporary interiors.",
        "rights": "All rights reserved.",
        "privacy": "Privacy Policy",
        "terms": "Terms of Use"
      },
      "features": {
        "water_reg": "Natural humidity regulation",
        "mold_res": "Mold resistant",
        "color_range": "Wide range of colors",
        "no_joints": "No tile joints",
        "heated_floor": "Underfloor heating compatible",
        "niches": "Integrated niches",
        "arches": "Arches and curves",
        "textured": "Textured effects",
        "patina": "Custom patina",
        "consult": "Personalized consultation",
        "custom_plans": "Bespoke plans",
        "arch_collaboration": "Architect collaboration",
        "dedicated_followup": "Dedicated project follow-up"
      },
      "home": {
        "hero": {
          "subtitle": "TADELAKT • MOROCCAN PLASTER",
          "title_part1": "Authentic Tadelakt",
          "title_part2": "Modern Elegance",
          "description": "Seamless, waterproof, and hand-finished walls and bathtubs according to the millenary tradition of Moroccan lime plaster."
        },
        "features": {
          "label": "WHY CHOOSE TADELAKT?",
          "title": "Unique Benefits",
          "waterproof": {
            "title": "Waterproof",
            "description": "Naturally waterproof surface, ideal for showers and bathrooms."
          },
          "seamless": {
            "title": "Seamless",
            "description": "Continuous finish without tile joints for a luxurious look."
          },
          "natural": {
            "title": "100% Natural",
            "description": "Lime, natural pigments, and black soap—no VOCs or chemicals."
          },
          "durable": {
            "title": "Durable",
            "description": "Develops a unique patina while remaining waterproof for decades."
          }
        },
        "gallery_preview": {
          "label": "OUR PORTFOLIO",
          "title": "Project Gallery"
        },
        "testimonials": {
          "label": "TESTIMONIALS",
          "title": "What Our Clients Say",
          "t1": { "name": "Fatima B.", "role": "Owner, Marrakech", "text": "Our bathroom has become a true sanctuary. The quality of work is exceptional and the result exceeds our expectations." },
          "t2": { "name": "Pierre L.", "role": "Interior Architect, Casablanca", "text": "I recommend Tadelakt Elbahja to all my clients. Their mastery of this ancestral technique is remarkable." },
          "t3": { "name": "Sophie M.", "role": "Owner, Rabat", "text": "A project of true craftsmanship. The team transformed our bathroom into a unique wellness space." }
        },
        "cta": {
          "label": "START YOUR PROJECT",
          "title": "Ready to Transform Your Space?",
          "description": "Contact us today to discuss your project and receive a personalized quote for free."
        }
      },
      "services": {
        "hero": {
          "label": "OUR SERVICES",
          "title_part1": "The Art of",
          "title_part2": "Tadelakt",
          "description": "From ancestral Moroccan know-how to contemporary techniques, we offer a full range of services to transform your spaces into living works of art."
        },
        "list": {
          "walls": {
            "title": "Tadelakt Walls",
            "desc": "Transform your walls into living surfaces of art. Our expert application of Tadelakt creates smooth, velvety finishes that breathe and regulate humidity naturally."
          },
          "bathrooms": {
            "title": "Bathrooms & Showers",
            "desc": "The ultimate application of Tadelakt. Create waterproof spaces without tile joints, of timeless beauty and incomparable ease of maintenance."
          },
          "decorative": {
            "title": "Decorative Finishes",
            "desc": "From simple to sophisticated, our decorative finishes highlight the natural beauty of Tadelakt. Bespoke niches, arches, and architectural details."
          },
          "custom": {
            "title": "Custom Projects",
            "desc": "Every space is unique. We work closely with you and your architects to create Tadelakt solutions perfectly adapted to your vision."
          }
        },
        "process": {
          "label": "OUR PROCESS",
          "title_part1": "How We",
          "title_part2": "Work",
          "desc": "Every project follows a rigorous process to guarantee an exceptional finish that respects tradition while meeting modern requirements.",
          "step1": { "title": "Consultation", "desc": "We discuss your project, your needs and your vision." },
          "step2": { "title": "Evaluation", "desc": "On-site visit and technical evaluation of surfaces." },
          "step3": { "title": "Quote", "desc": "Detailed proposal with estimation of costs and deadlines." },
          "step4": { "title": "Preparation", "desc": "Meticulous preparation of surfaces for optimal adhesion." },
          "step5": { "title": "Application", "desc": "Artisan application of Tadelakt in several layers." },
          "step6": { "title": "Finishing", "desc": "Polishing with black soap for perfect waterproofing." }
        },
        "cta": {
          "title": "Your Project Deserves Excellence",
          "description": "Contact us to discuss your project and receive a personalized quote tailored to your needs."
        }
      },
      "about": {
        "hero": {
          "label": "ABOUT US",
          "title_part1": "The Art of",
          "title_part2": "Tadelakt",
          "p1": "Tadelakt Elbahja was born from a passion for Moroccan craftsmanship and the desire to share this millenary technique with the world.",
          "p2": "Founded in Marrakech, our company perpetuates a tradition dating back more than 2,000 years, while adapting it to the needs of contemporary interiors."
        },
        "story": {
          "label": "OUR STORY",
          "title_part1": "A Millenary",
          "title_part2": "Tradition",
          "p1": "The word Tadelakt comes from the Arabic \"dleka\", meaning \"to massage\" or \"to rub\". This lime plaster technique, original from the Marrakech region, was traditionally used to coat cisterns, hammams, and palaces.",
          "p2": "What makes Tadelakt unique is its meticulous application process: the plaster is applied in thin layers, then polished with a stone and treated with black olive soap to create a waterproof surface of unequaled softness.",
          "p3": "At Tadelakt Elbahja, we have chosen to preserve this authenticity. Each of our craftsmen has been trained in traditional techniques, guaranteeing a finish that respects the heritage of this ancestral art."
        },
        "values": {
          "label": "OUR VALUES",
          "title": "What Drives Us",
          "v1": { "title": "Authenticity", "desc": "We respect the ancestral techniques of Tadelakt, passed down from generation to generation in Morocco." },
          "v2": { "title": "Excellence", "desc": "Each project is carried out with the greatest care, from the first gesture to the final finish." },
          "v3": { "title": "Innovation", "desc": "We adapt this millenary technique to contemporary requirements of design and durability." },
          "v4": { "title": "Sustainability", "desc": "Natural materials and ecological processes for beautiful and responsible surfaces." }
        },
        "stats": {
          "exp": "Years of Experience",
          "projects": "Completed Projects",
          "clients": "Satisfied Clients",
          "location": "& International"
        },
        "commitment": {
          "label": "OUR COMMITMENT",
          "title_part1": "Quality &",
          "title_part2": "Attention to Detail",
          "p1": "Each project starts with a meticulous evaluation of the surfaces and an in-depth discussion of your expectations. We believe that preparation is the key to a perfect finish.",
          "p2": "Our craftsmen use only top quality materials: Marrakech lime, natural pigments and traditional black olive soap.",
          "p3": "We only consider a project finished when every detail corresponds to our demanding standards and your expectations."
        },
        "cta": {
          "label": "WORKING TOGETHER",
          "title": "Ready to Discover the Art of Tadelakt?",
          "description": "Whether you have a specific project in mind or simply want to know more, we would be delighted to exchange with you."
        }
      },
      "gallery": {
        "hero": {
          "label": "OUR PORTFOLIO",
          "title_part1": "Project",
          "title_part2": "Gallery",
          "description": "Discover our Tadelakt projects, from a simple wall to a complete bathroom. Each achievement is unique, hand-fashioned according to Moroccan tradition."
        },
        "categories": {
          "all": "All",
          "bathroom": "Bathroom",
          "walls": "Walls",
          "shower": "Shower",
          "detail": "Detail",
          "vanity": "Vanity",
          "decor": "Decorative",
          "spa": "Spa",
          "process": "Process"
        },
        "lightbox": {
          "close": "Close",
          "zoom": "Zoomed view"
        },
        "cta": {
          "label": "YOUR PROJECT",
          "title_part1": "Want a Similar",
          "title_part2": "Result?",
          "description": "Each project is unique. Contact us to discuss your ideas and receive a personalized quote."
        }
      },
      "contact": {
        "hero": {
          "label": "CONTACT",
          "title_part1": "Let's Talk About",
          "title_part2": "Your Project",
          "description": "Whether you have a question, need a quote, or simply want to know more about Tadelakt, we are here to help you."
        },
        "info": {
          "title": "Contact Information",
          "phone": "Phone",
          "email": "Email",
          "address": "Address",
          "hours": "Operating Hours",
          "hours_val": "Mon - Sat: 9:00 AM - 6:00 PM"
        },
        "whatsapp_cta": {
          "title": "Prefer WhatsApp?",
          "description": "Contact us directly on WhatsApp for a quick response."
        },
        "map_title": "Tadelakt Elbahja Location"
      },
      "devis": {
        "hero": {
          "label": "FREE QUOTE",
          "title_part1": "Calculate Your",
          "title_part2": "Quote",
          "description": "Get an instant estimate for your Tadelakt project. Simply enter the surface area in square meters and discover the indicative price."
        },
        "calculator": {
          "title": "Price Calculator",
          "internal": "Internal",
          "external": "External",
          "surface_label": "Surface in m²",
          "price_per_m2": "Price per m²",
          "calculate": "Calculate",
          "reset": "Reset",
          "total_est": "Total Estimation",
          "surface_for": "For {{surface}} m² of Tadelakt surface",
          "success": "Calculation successful!",
          "reset_info": "Calculator reset",
          "error_surface": "Please enter a valid surface area"
        },
        "details": {
          "includes": "This Price Includes",
          "important": "Important Information",
          "items": {
            "app": "Tadelakt application (2-3 layers)",
            "soap": "Black soap polishing",
            "waterproof": "Waterproof finish"
          },
          "notes": {
            "complexity": "The price may vary depending on the complexity of the project",
            "small": "Surfaces smaller than 100m² may have an increased rate",
            "travel": "Transport and accommodation outside Marrakech extra"
          }
        },
        "cta": {
          "title_part1": "Ready to Take",
          "title_part2": "Action?",
          "description": "This calculator gives you an indicative estimate. For a precise and personalized quote, contact us directly."
        },
        "faq": {
          "title_part1": "Frequently Asked",
          "title_part2": "Questions",
          "q1": { "q": "How long does the application take?", "a": "A standard bathroom takes about 4-5 days to apply." },
          "q2": { "q": "Does Tadelakt require a lot of maintenance?", "a": "No, minimal maintenance is enough. Regular cleaning with a pH-neutral soap and reapplication of black soap every 2-3 years." },
          "q3": { "q": "Can I choose any color?", "a": "Yes! We can create virtually any shade by mixing natural pigments with lime." },
          "q4": { "q": "Is Tadelakt really waterproof?", "a": "Yes, when correctly applied and treated with black soap, Tadelakt is 100% waterproof." }
        },
        "categories": {
          "facades": "Façades",
          "exterior_walls": "Exterior Walls",
          "pools": "Swimming Pools",
          "terraces": "Terraces",
          "rooms": "Bedrooms"
        }
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'fr',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

export default i18n;
