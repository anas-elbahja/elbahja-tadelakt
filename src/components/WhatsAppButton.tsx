import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = '212669337793';
  const message = 'Bonjour, je suis intéressé par vos services Tadelakt. Pourriez-vous m\'en dire plus ?';

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-4 bg-[#25D366] text-white rounded-full shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group"
      aria-label="Contactez-nous sur WhatsApp"
    >
      <MessageCircle className="w-6 h-6" strokeWidth={2} />
      <span className="font-ui text-sm font-medium max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300">
        Discuter sur WhatsApp
      </span>
    </a>
  );
};

export default WhatsAppButton;
