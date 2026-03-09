import React from 'react';
import heroImage from 'figma:asset/e2a828e6413fb8cdd47b8d792cc96b1ffc5458d9.png';

export function HeroSection() {
  return (
    <section className="pt-32 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-[#1a2347]/60 to-[#0f1629]/60 rounded-3xl p-4 lg:px-6 lg:py-2 backdrop-blur-sm border border-white/10 shadow-2xl shadow-purple-900/20">
          <div className="grid lg:grid-cols-2 gap-3 lg:gap-4 items-center">
            {/* Left Card - Image */}
            <div className="flex flex-col items-center justify-center">
              <img 
                src={heroImage} 
                alt="Смотри фильмы говори на английском" 
                className="w-[75%] h-auto object-contain rounded-2xl"
              />
            </div>

            {/* Right Card - Text */}
            <div className="flex flex-col justify-center">
              <div className="inline-block mb-6">
                <span className="text-xs uppercase tracking-wider text-[#ffd700] bg-[#ffd700]/10 px-4 py-1.5 rounded-full border border-[#ffd700]/30">
                  Английский через фильмы и сериалы
                </span>
              </div>
              
              <p className="text-gray-300 max-w-xl text-3xl leading-snug" style={{ fontFamily: "'Caveat', cursive", fontWeight: 600 }}>
                Учите английский через любимые фильмы и сериалы. Говорите с первого занятия и применяйте язык в живых диалогах.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}