import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0a0e27]/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a 
            href="https://dinara-english.ru/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex flex-col group"
          >
            <div className="flex items-center gap-2">
              <span className="text-green-400 tracking-wide underline decoration-green-400/50 decoration-1 underline-offset-4">DINARA ENGLISH</span>
              <span className="text-[#ffd700]">•</span>
              <span className="text-[#ffd700]">ФИЛЬМЫ</span>
            </div>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="text-white group-hover:opacity-80 transition-opacity" style={{ fontFamily: "'Caveat', cursive" }}>
                Ваш Репетитор
              </span>
              <ArrowUpRight className="text-green-400 w-4 h-4 group-hover:opacity-80 group-hover:-translate-y-0.5 transition-all" />
            </div>
          </a>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <button onClick={() => scrollToSection('format')} className="text-sm text-gray-300 hover:text-white transition-colors">
              О формате
            </button>
            <button onClick={() => scrollToSection('catalog')} className="text-sm text-gray-300 hover:text-white transition-colors">
              Каталог
            </button>
            <button onClick={() => scrollToSection('pricing')} className="text-sm text-gray-300 hover:text-white transition-colors">
              Стоимость
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-sm text-gray-300 hover:text-white transition-colors">
              Записаться
            </button>
          </nav>

          {/* CTA Button */}
          <button 
            onClick={() => scrollToSection('catalog')}
            className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#ff6b9d] to-[#ff8fab] hover:shadow-lg hover:shadow-pink-500/50 transition-all duration-300"
          >
            Каталог
          </button>
        </div>
      </div>
    </header>
  );
}
