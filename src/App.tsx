import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import About from './pages/About';
import Contact from './pages/Contact';
import Devis from './pages/Devis';
import ScrollToTop from './components/ScrollToTop';
import LanguageSwitcher from './components/LanguageSwitcher';
import './i18n';
import { useTranslation } from 'react-i18next';
import { Suspense } from 'react';
import './App.css';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.lang = i18n.language;
    
    // Initialize scroll-triggered animations
    ScrollTrigger.refresh();

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [i18n.language]);

  return (
    <Suspense fallback={<div className="min-h-screen bg-stone flex items-center justify-center font-display">{t('common.loading')}</div>}>
      <Router>
        <ScrollToTop />
        <div className="app">
          <Navigation />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/devis" element={<Devis />} />
            </Routes>
          </main>
          <Footer />
          <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-end">
            <LanguageSwitcher />
            <WhatsAppButton />
          </div>
        </div>
      </Router>
    </Suspense>
  );
}

export default App;
