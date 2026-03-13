import React from 'react';

export function ForWhoSection() {
  const audiences = [
    {
      title: 'Подростки 11–17 лет',
      description: 'Которые хотят учить английский не по учебникам, а через любимые фильмы, мультфильмы и сериалы.'
    },
    {
      title: 'Взрослые A1–B2',
      description: 'Которые хотят подтянуть разговорный английский, понимать речь на слух и говорить увереннее в реальных ситуациях.'
    },
    {
      title: 'Любители историй и сериалов',
      description: 'Которые любят кино и хотят совместить приятное с полезным — смотреть и одновременно прокачивать английский.'
    }
  ];

  return (
    <section id="forwho" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center mb-12">Для кого эти занятия</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {audiences.map((audience, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-[#2a3557]/50 to-[#1f2740]/50 rounded-2xl p-8 backdrop-blur-sm border border-white/10 hover:border-pink-500/30 transition-all duration-300"
            >
              <h3 className="mb-4">{audience.title}</h3>
              <p className="text-gray-300">{audience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
