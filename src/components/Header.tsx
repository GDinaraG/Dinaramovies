import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { ArrowUpRight, ChevronLeft, Heart, Menu, MessageCircle, MessageSquare, Send, X } from 'lucide-react';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileMenuPosition, setMobileMenuPosition] = useState({ top: 72, right: 16 });
  const mobileMenuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const positionMenu = () => {
      const button = mobileMenuButtonRef.current;
      if (!button) return;

      const rect = button.getBoundingClientRect();
      setMobileMenuPosition({
        top: rect.bottom + 8,
        right: Math.max(12, window.innerWidth - rect.right)
      });
    };

    positionMenu();
    window.addEventListener('resize', positionMenu);
    return () => window.removeEventListener('resize', positionMenu);
  }, [mobileMenuOpen]);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
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
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a 
            href="https://dinara-english.ru/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex min-w-0 flex-col group"
          >
            <div className="flex items-center gap-1.5 sm:gap-2 whitespace-nowrap text-xs sm:text-base">
              <span className="text-green-400 tracking-wide underline decoration-green-400/50 decoration-1 underline-offset-4">DINARA ENGLISH</span>
              <span className="text-[#ffd700]">•</span>
              <span className="text-[#ffd700]">ФИЛЬМЫ</span>
            </div>
            <div className="flex items-center gap-1.5 mt-0.5 text-sm sm:text-base">
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
            <button onClick={() => scrollToSection('about')} className="text-sm text-gray-300 hover:text-white transition-colors">
              Обо мне
            </button>
            <button onClick={() => scrollToSection('catalog')} className="text-sm text-gray-300 hover:text-white transition-colors">
              Фильмы
            </button>
            <button onClick={() => scrollToSection('pricing')} className="text-sm text-gray-300 hover:text-white transition-colors">
              Стоимость
            </button>
          </nav>

          {/* CTA Button */}
          <button 
            onClick={() => setBookingOpen(true)}
            className="hidden lg:block px-6 py-2.5 rounded-full bg-gradient-to-r from-[#ff6b9d] to-[#ff8fab] hover:shadow-lg hover:shadow-pink-500/50 transition-all duration-300"
          >
            Записаться
          </button>

          <button
            ref={mobileMenuButtonRef}
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="lg:hidden inline-flex h-11 flex-shrink-0 items-center justify-center gap-2 rounded-full border border-[#ff8fab] bg-gradient-to-r from-[#ff5f98] to-[#ff82aa] px-4 text-sm font-semibold text-white shadow-lg shadow-pink-500/30"
            style={{ color: '#ffffff', background: 'linear-gradient(90deg, #ff5f98 0%, #ff82aa 100%)' }}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={21} />}
            <span>{mobileMenuOpen ? 'Закрыть' : 'Меню'}</span>
          </button>
        </div>

        {mobileMenuOpen && createPortal(
          <nav
            className="fixed z-50 overflow-hidden rounded-2xl border border-white/15 p-3 shadow-2xl lg:hidden"
            style={{
              top: `${mobileMenuPosition.top}px`,
              right: `${mobileMenuPosition.right}px`,
              width: 'min(240px, calc(100vw - 32px))',
              color: '#f8fafc',
              backgroundColor: 'rgba(15, 22, 50, 0.42)',
              backdropFilter: 'blur(24px) saturate(145%)',
              WebkitBackdropFilter: 'blur(24px) saturate(145%)',
              isolation: 'isolate'
            }}
          >
            <button onClick={() => scrollToSection('format')} className="block w-full rounded-xl px-4 py-3 hover:bg-white/10" style={{ color: '#f8fafc', textAlign: 'center' }}>О формате</button>
            <button onClick={() => scrollToSection('about')} className="block w-full rounded-xl px-4 py-3 hover:bg-white/10" style={{ color: '#f8fafc', textAlign: 'center' }}>Обо мне</button>
            <button onClick={() => scrollToSection('catalog')} className="block w-full rounded-xl px-4 py-3 hover:bg-white/10" style={{ color: '#f8fafc', textAlign: 'center' }}>Фильмы</button>
            <button onClick={() => scrollToSection('pricing')} className="block w-full rounded-xl px-4 py-3 hover:bg-white/10" style={{ color: '#f8fafc', textAlign: 'center' }}>Стоимость</button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setBookingOpen(true);
              }}
              className="mx-auto mt-2 flex w-fit min-w-36 justify-center rounded-full bg-gradient-to-r from-[#ff6b9d] to-[#ff8fab] px-6 py-3 font-medium text-white"
              style={{ color: '#ffffff', background: 'linear-gradient(90deg, #ff6b9d 0%, #ff8fab 100%)' }}
            >
              Записаться
            </button>
          </nav>,
          document.body
        )}
      </div>

      {bookingOpen && createPortal(
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
          style={{ zIndex: 80 }}
          onClick={() => setBookingOpen(false)}
        >
          <div
            className="bg-gradient-to-br from-[#1a2347] to-[#0f1629] rounded-3xl w-full my-auto border border-white/20 shadow-2xl relative text-white"
            style={{ maxWidth: '650px' }}
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Запись на занятия"
          >
            <button
              type="button"
              onClick={() => setBookingOpen(false)}
              className="absolute top-3 right-3 p-2 hover:bg-white/10 rounded-full transition-colors"
              aria-label="Закрыть"
            >
              <X size={24} />
            </button>

            <div className="p-5 sm:p-6 space-y-6" style={{ paddingTop: '64px' }}>
              <ol
                className="space-y-3"
                style={{ width: 'fit-content', maxWidth: '100%', margin: '0 auto' }}
              >
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex-shrink-0 w-7 h-7 rounded-full bg-[#ff6b9d] text-white flex items-center justify-center text-sm">1</span>
                  <span>Выберите удобный мессенджер</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex-shrink-0 w-7 h-7 rounded-full bg-[#ff6b9d] text-white flex items-center justify-center text-sm">2</span>
                  <span>Напишите название фильма или желаемый формат</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-0.5 flex-shrink-0 w-7 h-7 rounded-full bg-[#ff6b9d] text-white flex items-center justify-center text-sm">3</span>
                  <span>
                    Я отвечу на вопросы, уточню уровень и помогу выбрать подходящий вариант
                    <Heart
                      size={18}
                      className="inline-block text-[#ff6b9d] fill-[#ff6b9d]"
                      style={{ marginLeft: '10px', verticalAlign: '-3px' }}
                      aria-hidden="true"
                    />
                  </span>
                </li>
              </ol>

              <div className="flex flex-wrap justify-center gap-3" style={{ paddingTop: '16px' }}>
                <a
                  href="https://t.me/DinaraEng"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-white hover:scale-105 hover:shadow-lg transition-all"
                  style={{ backgroundColor: '#2AABEE' }}
                >
                  <Send size={20} />
                  <span>Telegram</span>
                </a>
                <a
                  href="https://vk.ru/dinaraeng"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-white hover:scale-105 hover:shadow-lg transition-all"
                  style={{ backgroundColor: '#2787F5' }}
                >
                  <MessageCircle size={20} />
                  <span>ВКонтакте</span>
                </a>
                <a
                  href="https://max.ru/u/f9LHodD0cOJBxAYv1kH4C_VktHo_U9FZgNO-Ip1Wbeiz_L7MdDSBsA9UL8k"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-white hover:scale-105 hover:shadow-lg transition-all"
                  style={{ backgroundColor: '#A855F7' }}
                >
                  <MessageSquare size={20} />
                  <span>Макс</span>
                </a>
              </div>

              <button
                type="button"
                onClick={() => setBookingOpen(false)}
                className="mx-auto flex items-center gap-1.5 text-sm text-[#ff6b9d] bg-[#ff6b9d]/10 px-4 py-2 rounded-full border border-[#ff6b9d]/30 hover:bg-[#ff6b9d]/20 transition-all"
              >
                <ChevronLeft size={14} />
                <span>Назад</span>
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </header>
  );
}
