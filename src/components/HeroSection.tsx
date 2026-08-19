import React from 'react';
import heroImage from '../assets/hero-movie-collage.png';

export function HeroSection() {
  const scrollToCatalog = () => {
    const catalog = document.getElementById('catalog');
    if (catalog) {
      const offsetPosition = catalog.getBoundingClientRect().top + window.pageYOffset - 100;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="top" className="pt-32 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-[#1a2347]/60 to-[#0f1629]/60 rounded-3xl p-4 lg:px-6 lg:py-2 backdrop-blur-sm border border-white/10 shadow-2xl shadow-purple-900/20">
          <div className="grid lg:grid-cols-2 gap-3 lg:gap-4 items-center">
            {/* Left Card - Image */}
            <div className="flex flex-col items-center justify-center">
              <img 
                src={heroImage} 
                alt="Коллаж из фильмов и сериалов для изучения английского"
                className="w-[75%] h-auto object-contain rounded-2xl"
              />
            </div>

            {/* Right Card - Text */}
            <div className="flex flex-col justify-center">
              <div className="inline-block mb-6">
                <span
                  className="text-xs uppercase tracking-wider px-4 py-1.5 rounded-full border"
                  style={{ color: '#ff8fab', backgroundColor: 'rgba(255, 107, 157, 0.08)', borderColor: 'rgba(255, 143, 171, 0.35)' }}
                >
                  Английский через фильмы и сериалы
                </span>
              </div>
              
              <h1
                className="text-white max-w-xl"
                style={{ fontSize: 'clamp(2rem, 3vw, 2.75rem)', lineHeight: 1.18, fontWeight: 600, letterSpacing: '-0.025em' }}
              >
                Любимый фильм или сериал превращается в практику английского
              </h1>
              <p
                className="text-gray-300 max-w-xl"
                style={{ marginTop: '1rem', fontSize: '1.05rem', lineHeight: 1.65 }}
              >
                Смотрите эпизоды, разбирайте живые фразы и закрепляйте их в заданиях и собственной речи.
              </p>
              <button
                type="button"
                onClick={scrollToCatalog}
                className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#ff6b9d] to-[#ff8fab] hover:shadow-lg hover:shadow-pink-500/50 transition-all duration-300"
                style={{ alignSelf: 'flex-start', marginTop: '1.75rem' }}
              >
                Выбрать фильм
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
