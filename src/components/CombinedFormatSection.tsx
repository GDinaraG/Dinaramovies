import React from 'react';
import { Film, MessageCircle, Heart, Sparkles, Users, TrendingUp } from 'lucide-react';

export function CombinedFormatSection() {
  const formats = [
    {
      icon: Film,
      title: 'Английский как в кино',
      description: 'Учите язык через эмоции и истории. Запоминайте фразы в контексте реальных сцен, а не через скучные учебники.',
      accent: '#ffd700',
      pill: 'Solo или с наставником'
    },
    {
      icon: MessageCircle,
      title: 'Максимум практики',
      description: 'Говорите с первых минут. Повторяйте диалоги, отвечайте на вопросы, обсуждайте сюжет — всё это развивает разговорные навыки.',
      accent: '#ff6b9d',
      pill: 'Онлайн в Zoom • 50–60 минут'
    },
    {
      icon: Heart,
      title: 'Фокус на уверенности',
      description: 'Цель — не зубрить грамматику, а научиться говорить свободно и понимать живую речь без страха и напряжения.',
      accent: '#9f7aea',
      pill: 'Курсы и интенсивы'
    }
  ];

  const audiences = [
    {
      icon: Sparkles,
      title: 'Подростки 11–17 лет',
      description: 'Которые хотят учить английский не по учебникам, а через любимые фильмы, мультфильмы и сериалы.',
      emoji: '⚡'
    },
    {
      icon: TrendingUp,
      title: 'Взрослые A1–B2',
      description: 'Которые хотят подтянуть разговорный английский, понимать речь на слух и говорить увереннее в реальных ситуациях.',
      emoji: '🍿'
    },
    {
      icon: Users,
      title: 'Любители историй и сериалов',
      description: 'Которые любят кино и хотят совместить приятное с полезным — смотреть и одновременно прокачивать английский.',
      emoji: '🎬'
    }
  ];

  return (
    <section id="format" className="py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* О формате занятий */}
          <div>
            <div className="mb-8">
              <h2 className="mb-2">О формате занятий</h2>
              <div className="h-1 w-12 bg-gradient-to-r from-[#ffd700] to-transparent rounded-full"></div>
            </div>
            
            <div className="space-y-4">
              {formats.map((format, index) => {
                const Icon = format.icon;
                return (
                  <div 
                    key={index}
                    className="group bg-gradient-to-br from-[#1a2347]/60 to-[#0f1629]/60 rounded-2xl p-6 backdrop-blur-sm border border-white/10 hover:border-[#ffd700]/30 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/10 hover:translate-x-1"
                  >
                    <div className="flex gap-4">
                      <div 
                        className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                        style={{ 
                          background: `linear-gradient(135deg, ${format.accent}20, ${format.accent}10)`,
                          border: `1px solid ${format.accent}30`
                        }}
                      >
                        <Icon size={24} style={{ color: format.accent }} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2 flex-wrap">
                          <h4>{format.title}</h4>
                          <span className="inline-block text-xs text-gray-400 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                            {format.pill}
                          </span>
                        </div>
                        <p className="text-sm text-gray-300">{format.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Для кого эти занятия */}
          <div id="forwho">
            <div className="mb-8">
              <h2 className="mb-2">Для кого эти занятия</h2>
              <div className="h-1 w-12 bg-gradient-to-r from-[#ff6b9d] to-transparent rounded-full"></div>
            </div>
            
            <div className="space-y-4">
              {audiences.map((audience, index) => {
                const Icon = audience.icon;
                return (
                  <div 
                    key={index}
                    className="group bg-gradient-to-br from-[#2a3557]/50 to-[#1f2740]/50 rounded-2xl p-6 backdrop-blur-sm border border-white/10 hover:border-pink-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/10 hover:translate-x-1"
                  >
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="text-4xl transition-all duration-300 group-hover:scale-125 group-hover:rotate-12">
                          {audience.emoji}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="mb-2 flex items-center gap-2">
                          {audience.title}
                          <Icon size={18} className="text-[#ff6b9d] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </h4>
                        <p className="text-sm text-gray-300">{audience.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
