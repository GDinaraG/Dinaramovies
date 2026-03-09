import React from 'react';

export function FormatSection() {
  const formats = [
    {
      title: 'Английский как в кино',
      description: 'Учите язык через эмоции и истории. Запоминайте фразы в контексте реальных сцен, а не через скучные учебники.'
    },
    {
      title: 'Максимум практики',
      description: 'Говорите с первых минут. Повторяйте диалоги, отвечайте на вопросы, обсуждайте сюжет — всё это развивает разговорные навыки.'
    },
    {
      title: 'Фокус на уверенности',
      description: 'Цель — не зубрить грамматику, а научиться говорить свободно и понимать живую речь без страха и напряжения.'
    }
  ];

  return (
    <section id="format" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center mb-12">О формате занятий</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {formats.map((format, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-[#1a2347]/60 to-[#0f1629]/60 rounded-2xl p-8 backdrop-blur-sm border border-white/10 hover:border-[#ffd700]/30 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/10 relative"
            >
              <h3 className="mb-4">{format.title}</h3>
              <p className="text-gray-300 mb-6">{format.description}</p>
              
              <div className="absolute bottom-6 right-6">
                <span className="text-xs text-gray-400 bg-white/5 px-3 py-1.5 rounded-full border border-white/10">
                  Онлайн в Zoom • 50–60 минут
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
