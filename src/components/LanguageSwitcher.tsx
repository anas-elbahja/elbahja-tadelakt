import { useTranslation } from 'react-i18next';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Globe } from 'lucide-react';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const languages = [
    { code: 'fr', name: 'Français', flag: 'FR' },
    { code: 'en', name: 'English', flag: 'EN' },
  ];

  const currentLanguage = languages.find((lang) => lang.code === i18n.language) || languages[0];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className="flex items-center gap-2 px-4 py-3 bg-white/90 backdrop-blur-md text-charcoal rounded-full shadow-lg border border-stone/20 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 focus:outline-none"
          aria-label="Changer de langue"
        >
          <Globe className="w-5 h-5 text-gold" strokeWidth={2} />
          <span className="font-ui text-sm font-medium uppercase tracking-wider">
            {currentLanguage.code}
          </span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-white/95 backdrop-blur-md border-stone/20 rounded-xl p-2 shadow-2xl min-w-[140px]">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            className={`flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer transition-colors ${
              i18n.language === lang.code ? 'bg-stone/10 text-gold' : 'hover:bg-stone/5'
            }`}
          >
            <span className="font-ui text-sm font-medium">{lang.name}</span>
            <span className="text-[10px] opacity-40 font-bold">{lang.flag}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSwitcher;
