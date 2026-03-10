import React from 'react';
import { Sparkles, Users, BookOpen } from 'lucide-react';

export function PricingSection() {
  return (
    <section id="pricing" className="py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center mb-12">Стоимость занятий</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Group */}
          <div className="bg-gradient-to-br from-[#1a2347]/60 to-[#0f1629]/60 rounded-2xl p-8 backdrop-blur-sm border border-white/10 hover:border-[#ffd700]/30 transition-all duration-300 relative overflow-hidden">
            {/* Discount Badge */}
            <div className="absolute top-4 right-4 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs px-3 py-1 rounded-full shadow-lg">
              -27%
            </div>
            
            <div className="flex items-center gap-2 mb-4">
              <Users size={20} className="text-[#ffd700]" />
              <span className="text-xs uppercase tracking-wider text-[#ffd700] bg-[#ffd700]/10 px-4 py-1.5 rounded-full border border-[#ffd700]/30">
                Вместе
              </span>
            </div>
            
            <h3 className="mb-4">Мини-группы и пары</h3>
            <p className="text-gray-300 mb-6">
              Занятия в паре или мини-группе до 4 человек. Общение с единомышленниками, 
              взаимная мотивация и более доступная цена.
            </p>
            
            {/* Price */}
            <div className="mb-6 pb-6 border-b border-white/10">
              <div className="flex items-baseline gap-3">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl text-white">1100</span>
                  <span className="text-xl text-gray-400">₽</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-lg text-gray-500 line-through">1500</span>
                  <span className="text-xs text-red-400">специальная цена</span>
                </div>
              </div>
              <p className="text-sm text-gray-400 mt-2">за одно занятие</p>
            </div>
            
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-[#ffd700] mt-1">✓</span>
                <span className="text-gray-300">2–4 человека</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#ffd700] mt-1">✓</span>
                <span className="text-gray-300">Общение в группе</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#ffd700] mt-1">✓</span>
                <span className="text-gray-300">Доступная стоимость</span>
              </li>
            </ul>
          </div>

          {/* Individual */}
          <div className="bg-gradient-to-br from-[#2a3557]/50 to-[#1f2740]/50 rounded-2xl p-8 backdrop-blur-sm border border-white/10 hover:border-[#ff6b9d]/30 transition-all duration-300 relative overflow-hidden">
            {/* Discount Badge */}
            <div className="absolute top-4 right-4 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs px-3 py-1 rounded-full shadow-lg">
              -25%
            </div>
            
            <div className="flex items-center gap-2 mb-4">
              <Sparkles size={20} className="text-[#ff6b9d]" />
              <span className="text-xs uppercase tracking-wider text-[#ff6b9d] bg-[#ff6b9d]/10 px-4 py-1.5 rounded-full border border-[#ff6b9d]/30">
                Персонально
              </span>
            </div>
            
            <h3 className="mb-4">Индивидуальные занятия</h3>
            <p className="text-gray-300 mb-6">
              Занятия один на один. Полное внимание преподавателя, программа под ваши цели, 
              гибкий график и темп обучения.
            </p>
            
            {/* Price */}
            <div className="mb-6 pb-6 border-b border-white/10">
              <div className="flex items-baseline gap-3">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl text-white">1500</span>
                  <span className="text-xl text-gray-400">₽</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-lg text-gray-500 line-through">2000</span>
                  <span className="text-xs text-red-400">специальная цена</span>
                </div>
              </div>
              <p className="text-sm text-gray-400 mt-2">за одно занятие</p>
            </div>
            
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-[#ff6b9d] mt-1">✓</span>
                <span className="text-gray-300">Индивидуальная программа</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#ff6b9d] mt-1">✓</span>
                <span className="text-gray-300">Гибкое расписание</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#ff6b9d] mt-1">✓</span>
                <span className="text-gray-300">Максимум внимания</span>
              </li>
            </ul>
          </div>

          {/* Course */}
          <div className="bg-gradient-to-br from-[#3a4567]/50 to-[#2f3750]/50 rounded-2xl p-8 backdrop-blur-sm border border-white/10 hover:border-[#c084fc]/30 transition-all duration-300 relative overflow-hidden">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen size={20} className="text-[#c084fc]" />
              <span className="text-xs uppercase tracking-wider text-white bg-gradient-to-r from-purple-500 to-violet-500 px-4 py-1.5 rounded-full shadow-lg shadow-purple-500/50 border border-purple-400/50">
                Самостоятельно
              </span>
            </div>
            
            <h3 className="mb-4">Готовые курсы</h3>
            <p className="text-gray-300 mb-6">
              Готовые материалы для самостоятельного изучения. Полный курс по фильму или сериалу с заданиями, словарями и объяснениями.
            </p>
            
            {/* Price */}
            <div className="mb-6 pb-6 border-b border-white/10">
              <div className="flex items-baseline gap-3">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl text-white">2500</span>
                  <span className="text-xl text-gray-400">₽</span>
                </div>
              </div>
              <p className="text-sm text-gray-400 mt-2">за курс</p>
            </div>
            
            <ul className="space-y-3">
              <li className="flex gap-3">
                <span className="text-[#c084fc] mt-1">✓</span>
                <span className="text-gray-300">Доступ на месяц</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#c084fc] mt-1">✓</span>
                <span className="text-gray-300">Свой темп обучения</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#c084fc] mt-1">✓</span>
                <span className="text-gray-300">Обратная связь</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
