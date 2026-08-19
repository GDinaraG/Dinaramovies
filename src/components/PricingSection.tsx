import React, { useEffect, useState } from 'react';
import { Sparkles, Users, BookOpen, X, Send, MessageCircle, MessageSquare, Heart, ChevronLeft } from 'lucide-react';

export function PricingSection() {
  const [selectedFormat, setSelectedFormat] = useState<string | null>(null);
  const discountEndsAt = new Date('2026-08-31T23:59:59+03:00').getTime();
  const [discountTimeLeft, setDiscountTimeLeft] = useState(() => Math.max(0, discountEndsAt - Date.now()));

  useEffect(() => {
    const updateTimer = () => {
      setDiscountTimeLeft(Math.max(0, discountEndsAt - Date.now()));
    };

    updateTimer();
    const timerId = window.setInterval(updateTimer, 60_000);
    return () => window.clearInterval(timerId);
  }, [discountEndsAt]);

  const discountActive = discountTimeLeft > 0;
  const totalMinutesLeft = Math.floor(discountTimeLeft / 60_000);
  const discountDays = Math.floor(totalMinutesLeft / (60 * 24));
  const discountHours = Math.floor((totalMinutesLeft % (60 * 24)) / 60);
  const discountMinutes = totalMinutesLeft % 60;

  return (
    <>
    <section id="pricing" className="py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center mb-12">Форматы и стоимость</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Group */}
          <div className="pricing-format-card bg-gradient-to-br from-[#1a2347]/60 to-[#0f1629]/60 rounded-2xl p-8 backdrop-blur-sm border border-white/10 hover:border-[#ffd700]/30 transition-all duration-300 relative overflow-hidden flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              <Users size={20} className="text-[#ffd700]" />
              <span className="text-xs uppercase tracking-wider text-[#ffd700] bg-[#ffd700]/10 px-4 py-1.5 rounded-full border border-[#ffd700]/30">
                Вместе
              </span>
            </div>
            
            <h3 className="mb-4">Пары и мини-группы</h3>
            <p className="text-gray-300 mb-6">
              Занятия в паре или мини-группе до 4 человек. Общение с единомышленниками, 
              взаимная мотивация и более доступная цена.
            </p>
            
            {/* Price */}
            <div className="mb-6 pb-6 border-b border-white/10">
              <div className="flex items-baseline gap-3">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl text-white">1200</span>
                  <span className="text-xl text-gray-400">₽</span>
                </div>
              </div>
              <p className="text-sm text-gray-400 mt-2">с человека</p>
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

            <p
              className="text-sm text-gray-200"
              style={{
                marginTop: '18px',
                marginBottom: '12px',
                padding: '7px 12px',
                borderRadius: '12px',
                backgroundColor: 'rgba(255, 215, 0, 0.07)',
                border: '1px solid rgba(255, 215, 0, 0.2)',
                fontSize: '13px',
                lineHeight: '1.35'
              }}
            >
              Можно прийти вместе с другом или оставить заявку на подбор.
            </p>

            <button
              type="button"
              onClick={() => setSelectedFormat('Мини-группы и пары')}
              className="inline-flex items-center justify-center px-6 py-3 rounded-full hover:scale-105 transition-all"
              style={{
                marginTop: 'auto',
                backgroundColor: '#D3B52B',
                color: '#111827',
                boxShadow: '0 8px 22px rgba(211, 181, 43, 0.2)'
              }}
            >
              Выбрать
            </button>
          </div>

          {/* Individual */}
          <div className="pricing-format-card bg-gradient-to-br from-[#2a3557]/50 to-[#1f2740]/50 rounded-2xl p-8 backdrop-blur-sm border border-white/10 hover:border-[#ff6b9d]/30 transition-all duration-300 relative overflow-hidden flex flex-col">
            {/* Discount Badge */}
            {discountActive && (
              <div className="absolute top-4 right-4 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs px-3 py-1 rounded-full shadow-lg">
                -20%
              </div>
            )}
            
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
                  <span className="text-4xl text-white">{discountActive ? '1600' : '2000'}</span>
                  <span className="text-xl text-gray-400">₽</span>
                </div>
                {discountActive && (
                  <div className="flex items-center gap-2">
                    <span className="text-lg text-gray-500 line-through">2000</span>
                    <span className="text-xs text-red-400">специальная цена</span>
                  </div>
                )}
              </div>
              {discountActive && (
                <div
                  style={{
                    marginTop: '16px',
                    padding: '12px 14px',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(255, 107, 157, 0.09)',
                    border: '1px solid rgba(255, 107, 157, 0.25)'
                  }}
                >
                  <p className="text-xs text-[#ff8fab]" style={{ marginBottom: '5px' }}>
                    При записи до 31 августа: 8 занятий со скидкой<br />Кодовое слово «Август»
                  </p>
                  <p className="text-sm text-white">
                    {discountDays} дн. <span className="timer-dot text-[#ff8fab]" aria-hidden="true">:</span> {discountHours} ч. <span className="timer-dot text-[#ff8fab]" aria-hidden="true">:</span> {discountMinutes} мин.
                  </p>
                </div>
              )}
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

            <button
              type="button"
              onClick={() => setSelectedFormat('Индивидуальные занятия')}
              className="inline-flex items-center justify-center px-6 py-3 rounded-full text-white hover:scale-105 transition-all"
              style={{
                marginTop: 'auto',
                backgroundColor: '#D85F8E',
                boxShadow: '0 8px 22px rgba(216, 95, 142, 0.22)'
              }}
            >
              Выбрать
            </button>
          </div>

          {/* Course */}
          <div className="pricing-format-card bg-gradient-to-br from-[#3a4567]/50 to-[#2f3750]/50 rounded-2xl p-8 backdrop-blur-sm border border-white/10 hover:border-[#c084fc]/30 transition-all duration-300 relative overflow-hidden flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen size={20} className="text-[#c084fc]" />
              <span className="text-xs uppercase tracking-wider text-white bg-gradient-to-r from-purple-500 to-violet-500 px-4 py-1.5 rounded-full shadow-lg shadow-purple-500/50 border border-purple-400/50">
                Самостоятельно
              </span>
            </div>
            
            <h3 className="mb-4">Асинхронные занятия</h3>
            <p className="text-gray-300 mb-6">
              Полная программа с готовыми заданиями и автопроверкой для самостоятельного просмотра и прохождения. Можно проходить в удобное время. Я даю обратную связь по устным заданиям и отвечаю на вопросы в чате.
            </p>
            
            {/* Price */}
            <div className="mb-6 pb-6 border-b border-white/10">
              <div className="flex items-baseline gap-3">
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl text-white">3499</span>
                  <span className="text-xl text-gray-400">₽</span>
                </div>
              </div>
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

            <button
              type="button"
              onClick={() => setSelectedFormat('Самостоятельное прохождение')}
              className="inline-flex items-center justify-center px-6 py-3 rounded-full text-white hover:scale-105 transition-all"
              style={{
                marginTop: 'auto',
                backgroundColor: '#8B5BD6',
                boxShadow: '0 8px 22px rgba(139, 91, 214, 0.24)'
              }}
            >
              Выбрать
            </button>
          </div>
        </div>
      </div>
    </section>

    {selectedFormat && (
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-6 overflow-y-auto"
        onClick={() => setSelectedFormat(null)}
      >
        <div
          className="bg-gradient-to-br from-[#1a2347] to-[#0f1629] rounded-3xl w-full my-auto border border-white/20 shadow-2xl relative"
          style={{ maxWidth: '620px' }}
          onClick={(event) => event.stopPropagation()}
        >
          <button
            type="button"
            onClick={() => setSelectedFormat(null)}
            className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-full transition-colors"
            aria-label="Закрыть"
          >
            <X size={24} />
          </button>

          <div className="p-6 pt-14 space-y-6">
            <ol
              className="space-y-3"
              style={{
                width: 'fit-content',
                maxWidth: 'calc(100% - 32px)',
                margin: '0 auto'
              }}
            >
              <li className="flex items-center gap-3">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#ff6b9d] text-white flex items-center justify-center text-sm">1</span>
                <span>Выберите удобный мессенджер</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#ff6b9d] text-white flex items-center justify-center text-sm">2</span>
                <span>Напишите название фильма или сериала</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex-shrink-0 w-7 h-7 rounded-full bg-[#ff6b9d] text-white flex items-center justify-center text-sm">3</span>
                <span className="flex flex-wrap items-center gap-2">
                  Я отвечу на вопросы и уточню детали
                  <Heart size={18} className="text-[#ff6b9d] fill-[#ff6b9d]" aria-hidden="true" />
                </span>
              </li>
            </ol>

            <div className="flex flex-wrap justify-center gap-3" style={{ paddingTop: '20px' }}>
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
                href="https://vk.com/dinaraeng"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-white hover:scale-105 hover:shadow-lg transition-all"
                style={{ backgroundColor: '#2787F5' }}
              >
                <MessageCircle size={20} />
                <span>ВКонтакте</span>
              </a>
              <a
                href="https://max.ru/u/f9LHodD0cOLhbGCH7SAovsVCzNCspvleqRZ9MPJCpqZjgELEYNfkRENbaXw"
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
              onClick={() => setSelectedFormat(null)}
              className="mx-auto flex items-center gap-1.5 text-sm text-[#ff6b9d] bg-[#ff6b9d]/10 px-4 py-2 rounded-full border border-[#ff6b9d]/30 hover:bg-[#ff6b9d]/20 transition-all"
            >
              <ChevronLeft size={14} />
              <span>Назад</span>
            </button>
          </div>
        </div>
      </div>
    )}
    </>
  );
}
