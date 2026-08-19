import React from 'react';
import { ArrowUpRight, Award, BriefcaseBusiness, GraduationCap, Languages } from 'lucide-react';
import lessonImage from '../assets/dinara-movies-about.png';

export function AboutSection() {
  const facts = [
    { icon: Languages, text: 'Преподаю с 2014 года' },
    { icon: GraduationCap, text: 'Диплом учителя английского и французского' },
    { icon: Award, text: 'Методическая квалификация Cambridge TKT' },
    { icon: BriefcaseBusiness, text: 'Опыт переводчика компьютерных игр' }
  ];

  return (
    <section id="about" className="movies-about">
      <div className="movies-about__container">
        <div className="movies-about__card">
          <div className="movies-about__grid">
            <figure className="movies-about__figure">
              <img
                src={lessonImage}
                alt="Динара - преподаватель английского по фильмам и сериалам"
                className="movies-about__image"
              />
            </figure>

            <div className="movies-about__content">
              <div className="movies-about__heading">
                <h2>Кто ведёт занятия</h2>
                <div className="movies-about__line" />
              </div>

              <p className="movies-about__intro">
                Я Динара, преподаватель английского. Работаю с подростками и взрослыми с 2014 года.
              </p>
              <p className="movies-about__text">
                Для занятий я подбираю готовую программу по уровню и интересам ученика. Моя задача - объяснить сложное, обратить внимание на живые фразы, дать обратную связь и помочь использовать английский в речи.
              </p>

              <div className="movies-about__facts">
                {facts.map(({ icon: Icon, text }) => (
                  <div key={text} className="movies-about__fact">
                    <Icon size={18} />
                    <span>{text}</span>
                  </div>
                ))}
              </div>

              <a
                href="https://dinara-english.ru/#about"
                target="_blank"
                rel="noopener noreferrer"
                className="movies-about__link"
              >
                Подробнее обо мне
                <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
