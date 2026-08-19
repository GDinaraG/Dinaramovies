import React from 'react';
import { Film, Captions, MessageCircle, Sparkles, Users, TrendingUp } from 'lucide-react';

export function CombinedFormatSection() {
  const formats = [
    {
      icon: Film,
      title: 'Выбираете фильм или сериал',
      description: 'Подбираем историю по возрасту, уровню и интересам.',
      pill: 'Материалы уже готовы',
      accent: '#ffd700'
    },
    {
      icon: Captions,
      title: 'Разбираете живой английский',
      description: 'Смотрите эпизоды, работаете с лексикой, пониманием речи и грамматикой в контексте.',
      pill: 'Со мной или в своём темпе',
      accent: '#ff6b9d'
    },
    {
      icon: MessageCircle,
      title: 'Закрепляете в практике',
      description: 'Выполняете задания, отвечаете на вопросы и используете новые фразы в речи.',
      pill: 'Самостоятельно или с преподавателем',
      accent: '#9f7aea'
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
      description: 'Кто хочет заниматься английским регулярно, но быстро теряет мотивацию на стандартных темах и упражнениях.',
      emoji: '🎬'
    }
  ];

  return (
    <section id="format" className="py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Как проходит обучение */}
          <div>
            <div className="mb-8">
              <h2 className="mb-2">Как проходит обучение</h2>
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
                          <span className="text-xs text-gray-400 bg-white/5 px-3 py-1 rounded-full border border-white/10">
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

          {/* Кому подойдёт этот формат */}
          <div id="forwho">
            <div className="mb-8">
              <h2 className="mb-2">Кому подойдёт этот формат</h2>
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
