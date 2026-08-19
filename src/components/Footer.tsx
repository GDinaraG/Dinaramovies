import React from 'react';
import vkIcon from '../assets/vk-white.svg';
import telegramIcon from '../assets/telegram-white.svg';
import maxIcon from '../assets/max-white.png';

export function Footer() {
  return (
    <footer className="movies-footer">
      <div className="movies-footer__inner">
        <div className="movies-footer__grid">
          <div className="movies-footer__about">
            <a className="movies-footer__brand" href="https://dinara-english.ru/" target="_blank" rel="noopener noreferrer" aria-label="Перейти на основной сайт Dinara English">
              <span>DINARA ENGLISH</span>
              <b>·</b>
              <strong>ФИЛЬМЫ</strong>
            </a>
            <p>Английский через фильмы и сериалы для подростков и взрослых. Выберите фильм и проведите время с пользой ♡</p>
          </div>

          <nav className="movies-footer__nav" aria-label="Навигация внизу страницы">
            <h2>Разделы</h2>
            <a href="#format">Как проходит обучение</a>
            <a href="#about">Кто ведёт занятия</a>
            <a href="#catalog">Каталог фильмов</a>
            <a href="#pricing">Форматы и стоимость</a>
          </nav>

          <div className="movies-footer__contacts">
            <h2>Контакты</h2>
            <p>Напишите мне удобным способом</p>
            <div className="movies-footer__socials" aria-label="Личные контакты">
              <a className="movies-footer__social movies-footer__social--vk" href="https://vk.ru/dinaraeng" target="_blank" rel="noopener noreferrer" aria-label="Написать ВКонтакте">
                <img src={vkIcon} alt="" />
              </a>
              <a className="movies-footer__social movies-footer__social--telegram" href="https://t.me/DinaraEng" target="_blank" rel="noopener noreferrer" aria-label="Написать в Telegram">
                <img src={telegramIcon} alt="" />
              </a>
              <a className="movies-footer__social movies-footer__social--max" href="https://max.ru/u/f9LHodD0cOJBxAYv1kH4C_VktHo_U9FZgNO-Ip1Wbeiz_L7MdDSBsA9UL8k" target="_blank" rel="noopener noreferrer" aria-label="Написать в MAX">
                <img src={maxIcon} alt="" />
              </a>
            </div>
          </div>
        </div>

        <div className="movies-footer__bottom">
          <p>© 2025 Динара | Dinara English</p>
          <a href="#top">Наверх ↑</a>
        </div>
      </div>
    </footer>
  );
}
