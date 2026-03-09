import React, { useState } from 'react';
import { X, Play, Clock, BarChart3, Sparkles, Zap } from 'lucide-react';

interface IntensiveItem {
  level: string;
  title: string;
  description: string;
  lessons: number;
  genres?: string[];
  detailedInfo: string;
  topics: string[];
  icon: string;
}

export function IntensivesSection() {
  const [selectedItem, setSelectedItem] = useState<IntensiveItem | null>(null);

  const intensives: IntensiveItem[] = [
    {
      level: 'A1–A2',
      title: 'Present Simple & Present Continuous',
      description: 'Разбираем основные времена через сцены из фильмов',
      lessons: 4,
      genres: ['Грамматика', 'Начальный'],
      icon: '⚡',
      detailedInfo: 'Короткий курс по базовым временам через яркие сцены из фильмов. За 4 занятия научитесь различать и использовать оба времени в речи.',
      topics: ['Present Simple', 'Present Continuous', 'Разница между временами', 'Практика в диалогах']
    },
    {
      level: 'A2–B1',
      title: 'Past Simple & Past Continuous',
      description: 'Рассказываем истории в прошедшем времени',
      lessons: 4,
      genres: ['Грамматика', 'Средний'],
      icon: '⏮️',
      detailedInfo: 'Учимся рассказывать истории в прошедшем времени на примере киносцен. Разбираем правильные и неправильные глаголы в контексте.',
      topics: ['Past Simple', 'Past Continuous', 'Рассказы о прошлом', 'Неправильные глаголы']
    },
    {
      level: 'A2–B1',
      title: 'Future Forms',
      description: 'Планы, предсказания и обещания героев',
      lessons: 3,
      genres: ['Грамматика', 'Средний'],
      icon: '🔮',
      detailedInfo: 'Разбираем будущее время через планы и мечты героев фильмов. Will, going to, Present Continuous для будущего — всё становится понятным.',
      topics: ['Will vs Going to', 'Планы на будущее', 'Предсказания', 'Обещания']
    },
    {
      level: 'B1–B2',
      title: 'Modal Verbs',
      description: 'Модальные глаголы в живых диалогах',
      lessons: 5,
      genres: ['Грамматика', 'Продвинутый'],
      icon: '🎭',
      detailedInfo: 'Модальные глаголы в действии: can, must, should и другие в живых диалогах. Учимся выражать разрешение, обязанность и советы как носители.',
      topics: ['Can, Could, May', 'Must, Should, Have to', 'Советы и рекомендации', 'Вежливые просьбы']
    }
  ];

  return (
    <>
      <section id="intensives" className="py-12 px-6 bg-gradient-to-br from-[#0f1629]/50 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-purple-500/10 px-4 py-2 rounded-full border border-purple-500/30 mb-4">
              <Zap size={18} className="text-purple-400" />
              <span className="text-sm text-purple-300">Быстрый результат</span>
            </div>
            <h2 className="mb-4">Интенсивы через фильмы</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Короткие курсы по конкретным грамматическим темам. Изучайте правила через яркие сцены и запоминающиеся диалоги.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {intensives.map((intensive, index) => (
              <div
                key={index}
                onClick={() => setSelectedItem(intensive)}
                className="group cursor-pointer bg-gradient-to-br from-[#2a3557]/50 to-[#1f2740]/50 rounded-2xl p-6 backdrop-blur-sm border border-white/10 hover:border-purple-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 hover:scale-105"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-xs bg-purple-500/10 text-purple-300 px-3 py-1 rounded-full border border-purple-500/30">
                    {intensive.level}
                  </span>
                </div>

                <h4 className="mb-3 group-hover:text-purple-400 transition-colors">{intensive.title}</h4>
                <p className="text-sm text-gray-300 mb-4 line-clamp-2">{intensive.description}</p>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  {intensive.genres && intensive.genres.length > 0 ? (
                    <div className="flex gap-1.5 flex-wrap">
                      {intensive.genres.map((genre, idx) => (
                        <span key={idx} className="text-xs text-gray-400">
                          {genre}{idx < intensive.genres!.length - 1 && ' •'}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <span className="text-sm text-gray-400">{intensive.lessons} занятия</span>
                  )}
                  <button className="flex items-center gap-1.5 text-sm text-purple-400 bg-purple-500/10 px-3 py-1.5 rounded-full border border-purple-500/30 hover:bg-purple-500/20 transition-all">
                    <Zap size={14} />
                    <span>Открыть</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-6"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="bg-gradient-to-br from-[#1a2347] to-[#0f1629] rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-purple-500/30 shadow-2xl shadow-purple-500/20"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 bg-gradient-to-br from-[#1a2347] to-[#0f1629] border-b border-white/10 p-6 flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-4xl">{selectedItem.icon}</span>
                  <div className="flex gap-2 flex-wrap">
                    <span className="text-xs bg-purple-500/10 text-purple-300 px-3 py-1 rounded-full border border-purple-500/30">
                      {selectedItem.level}
                    </span>
                    <span className="text-xs bg-purple-500/20 text-purple-200 px-3 py-1 rounded-full border border-purple-500/40 flex items-center gap-1">
                      <Zap size={12} />
                      Интенсив
                    </span>
                  </div>
                </div>
                <h3 className="mb-2">{selectedItem.title}</h3>
                <p className="text-gray-300">{selectedItem.description}</p>
              </div>
              <button
                onClick={() => setSelectedItem(null)}
                className="ml-4 p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Detailed Info */}
              <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles size={18} className="text-purple-400" />
                  <h4 className="text-sm">О программе</h4>
                </div>
                <p className="text-gray-300">{selectedItem.detailedInfo}</p>
              </div>

              {/* Topics */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <BarChart3 size={18} className="text-purple-400" />
                  <h4 className="text-sm">Что будем изучать</h4>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {selectedItem.topics.map((topic, idx) => (
                    <div
                      key={idx}
                      className="bg-gradient-to-br from-[#2a3557]/50 to-[#1f2740]/50 rounded-lg p-3 border border-purple-500/20"
                    >
                      <span className="text-sm text-gray-300">• {topic}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Lessons Count */}
              <div className="bg-gradient-to-r from-purple-500/10 to-transparent rounded-xl p-5 border border-purple-500/20">
                <div className="flex items-center gap-2">
                  <Clock size={20} className="text-purple-400" />
                  <div>
                    <div className="text-sm text-gray-400">Продолжительность</div>
                    <div className="text-lg">
                      {selectedItem.lessons} занятия • 50–60 минут каждое
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Button */}
              <button className="w-full bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 flex items-center justify-center gap-2 group">
                <span className="text-lg">Хочу на интенсив!</span>
                <Zap size={20} className="group-hover:rotate-12 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}