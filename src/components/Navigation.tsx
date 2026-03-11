import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { path: '/', label: 'Accueil' },
    { path: '/services', label: 'Services' },
    { path: '/gallery', label: 'Galerie' },
    { path: '/about', label: 'À Propos' },
    { path: '/contact', label: 'Contact' },
    { path: '/devis', label: 'Devis' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? 'bg-stone/95 backdrop-blur-sm py-4'
          : 'bg-transparent py-6'
          }`}
      >
        <div className="section-padding flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="font-display text-xl md:text-2xl tracking-wide logo-effect-dark"
          >
            Tadelakt Elbahja
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative nav-link transition-all duration-300 py-2 ${active ? 'text-gold opacity-100 font-medium' : 'opacity-70 hover:opacity-100'
                    }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gold rounded-full transform origin-left transition-transform duration-300" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* CTA Button - Desktop */}
          <Link
            to="/devis"
            className="hidden lg:inline-flex btn-primary text-xs py-3 px-6"
          >
            Devis Gratuit
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 -mr-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-stone transition-all duration-500 lg:hidden ${isMobileMenuOpen
          ? 'opacity-100 pointer-events-auto'
          : 'opacity-0 pointer-events-none'
          }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link, index) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-display text-2xl tracking-wide transition-all duration-300 ${isActive(link.path) ? 'text-gold' : 'text-current'
                }`}
              style={{
                transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : '0ms',
                opacity: isMobileMenuOpen ? 1 : 0,
                transform: isMobileMenuOpen
                  ? 'translateY(0)'
                  : 'translateY(20px)',
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/devis"
            className="btn-primary mt-4"
            style={{
              transitionDelay: isMobileMenuOpen ? `${navLinks.length * 50}ms` : '0ms',
              opacity: isMobileMenuOpen ? 1 : 0,
              transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(20px)',
            }}
          >
            Devis Gratuit
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navigation;
