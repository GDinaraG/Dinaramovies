import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Check, Clapperboard, Copy, Gift, MessageCircle, MessageSquare, Send, Ticket, X } from 'lucide-react';
import insideOutPoster from '../assets/0f307264768885e16d5ab8cb0e8f03a2a63bc820.png';
import silverpointPoster from '../assets/b20222c4b1e1077f58c91f08f2dae2dffb537c4f.png';
import sulphurSpringsPoster from '../assets/sulphur-springs-season-1-poster.jpg';
import gravityFallsPoster from '../assets/275c84899f75200e3bdb740d189e6091e98f43f0.png';
import wednesdayPoster from '../assets/4303c71c42d5e4c013df3a40cc7bf437a523b216.png';

type Prize = {
  title: string;
  ticketLabel: string;
  description: string;
  code: string;
  accent: string;
};

type StoredBonus = {
  prizeIndex: number;
  wonAt: number;
};

const STORAGE_KEY = 'dinara-movies-ticket-bonus-v4';
const BONUS_LIFETIME = 7 * 24 * 60 * 60 * 1000;
const PREVIEW_ALL_BONUSES = import.meta.env.DEV;
const ticketImages = [insideOutPoster, silverpointPoster, sulphurSpringsPoster, gravityFallsPoster, wednesdayPoster];

const prizes: Prize[] = [
  {
    title: 'Скидка 10%',
    ticketLabel: '10%',
    description: 'Сделаю скидку 10% на выбранный формат.',
    code: 'КИНО10',
    accent: '#ff6b9d'
  },
  {
    title: 'Скидка 500 ₽',
    ticketLabel: '500 ₽',
    description: 'Вычту 500 ₽ из стоимости выбранного формата.',
    code: 'ПРЕМЬЕРА500',
    accent: '#b878f4'
  },
  {
    title: 'Дополнительная неделя доступа',
    ticketLabel: '+7 дней',
    description: 'Добавлю 7 дней к доступу для самостоятельного прохождения.',
    code: 'КИНОНЕДЕЛЯ',
    accent: '#45bff3'
  },
  {
    title: 'Секретный киноурок',
    ticketLabel: 'Секретный урок',
    description: 'Подарю доступ к небольшому уроку по фильму или сериалу, которого нет в каталоге.',
    code: 'СЕКРЕТНЫЙУРОК',
    accent: '#f0bd32'
  },
  {
    title: 'Урок из курса в подарок',
    ticketLabel: '1 урок',
    description: 'Подарю один урок из асинхронного курса на ваш выбор, чтобы вы попробовали формат.',
    code: 'КИНОУРОК',
    accent: '#4fd1a1'
  }
];

export function BonusWheelSection() {
  const [pickerOpen, setPickerOpen] = useState(PREVIEW_ALL_BONUSES);
  const [resultOpen, setResultOpen] = useState(false);
  const [revealing, setRevealing] = useState(false);
  const [wonPrizeIndex, setWonPrizeIndex] = useState<number | null>(null);
  const [chosenTicket, setChosenTicket] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (PREVIEW_ALL_BONUSES) {
      window.localStorage.removeItem(STORAGE_KEY);
      return;
    }
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (!saved) return;
      const parsed = JSON.parse(saved) as StoredBonus;
      const isValid = Number.isInteger(parsed.prizeIndex)
        && parsed.prizeIndex >= 0
        && parsed.prizeIndex < prizes.length
        && Date.now() - parsed.wonAt < BONUS_LIFETIME;

      if (isValid) setWonPrizeIndex(parsed.prizeIndex);
      else window.localStorage.removeItem(STORAGE_KEY);
    } catch {
      window.localStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  useEffect(() => {
    if (!pickerOpen && !resultOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      setPickerOpen(false);
      setResultOpen(false);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [pickerOpen, resultOpen]);

  const wonPrize = wonPrizeIndex === null ? null : prizes[wonPrizeIndex];

  const openBonus = () => {
    if (PREVIEW_ALL_BONUSES) {
      setWonPrizeIndex(null);
      setChosenTicket(null);
      setPickerOpen(true);
      return;
    }
    if (wonPrize) setResultOpen(true);
    else setPickerOpen(true);
  };

  const chooseTicket = (ticketIndex: number) => {
    if (revealing) return;
    const prizeIndex = PREVIEW_ALL_BONUSES
      ? ticketIndex
      : Math.floor(Math.random() * prizes.length);
    setChosenTicket(ticketIndex);
    setWonPrizeIndex(prizeIndex);
    setRevealing(true);

    window.setTimeout(() => {
      if (!PREVIEW_ALL_BONUSES) {
        const storedBonus: StoredBonus = { prizeIndex, wonAt: Date.now() };
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(storedBonus));
      }
      setPickerOpen(false);
      setRevealing(false);
      setChosenTicket(null);
      setResultOpen(true);
    }, 2200);
  };

  const copyCode = async () => {
    if (!wonPrize) return;
    try {
      await navigator.clipboard.writeText(wonPrize.code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  const copyCodeBeforeOpeningMessenger = () => {
    if (!wonPrize) return;
    navigator.clipboard?.writeText(wonPrize.code).catch(() => undefined);
  };

  const closeResult = () => {
    setResultOpen(false);
    if (PREVIEW_ALL_BONUSES) {
      setWonPrizeIndex(null);
      setChosenTicket(null);
      setPickerOpen(true);
    }
  };

  return (
    <>
      <button type="button" className="cinema-bonus-tab" onClick={openBonus} aria-label="Получить бонус">
        <span className="cinema-bonus-tab__icon"><Ticket size={23} /></span>
        <span className="cinema-bonus-tab__copy">
          <small>{wonPrize ? 'Ваш билет' : 'Счастливый билет'}</small>
          <strong>{wonPrize ? 'Мой бонус' : 'Получить бонус'}</strong>
        </span>
      </button>

      {pickerOpen && createPortal(
        <div className="ticket-picker-backdrop" onClick={() => !revealing && setPickerOpen(false)}>
          <div className="ticket-picker" role="dialog" aria-modal="true" aria-labelledby="ticket-picker-title" onClick={(event) => event.stopPropagation()}>
            <button type="button" className="ticket-modal-close" onClick={() => setPickerOpen(false)} disabled={revealing} aria-label="Закрыть">
              <X size={23} />
            </button>

            <div className="ticket-picker__heading">
              <span><Clapperboard size={19} /> Касса бонусов</span>
              <h2 id="ticket-picker-title">Вытяните счастливый билет</h2>
              <p>За каждым билетом спрятан подарок. Какой достанется вам?</p>
            </div>

            <div className="ticket-deck">
              {prizes.map((_, index) => (
                <button
                  type="button"
                  className={`vintage-ticket${chosenTicket === index ? ' vintage-ticket--chosen' : ''}${revealing && chosenTicket !== index ? ' vintage-ticket--dimmed' : ''}`}
                  key={index}
                  onClick={() => chooseTicket(index)}
                  disabled={revealing}
                  aria-label={`Выбрать билет ${index + 1}`}
                  style={{ '--ticket-image': `url(${ticketImages[index]})` } as React.CSSProperties}
                >
                  <span className="vintage-ticket__inner">
                    <span className="vintage-ticket__face vintage-ticket__face--front">
                      <span className="vintage-ticket__main">
                        <strong>БОНУС</strong>
                      </span>
                    </span>
                    <span className="vintage-ticket__face vintage-ticket__face--back">
                      <small>ВАШ БОНУС</small>
                      <strong>{chosenTicket === index && wonPrize ? wonPrize.ticketLabel : 'СЮРПРИЗ'}</strong>
                      <span>{chosenTicket === index && wonPrize ? wonPrize.title : 'Счастливый билет'}</span>
                    </span>
                  </span>
                </button>
              ))}
            </div>

            <p className="ticket-picker__note">Каждый билет выигрышный. Бонус действует 7 дней.</p>
          </div>
        </div>,
        document.body
      )}

      {resultOpen && wonPrize && createPortal(
        <div className="bonus-result-backdrop" onClick={closeResult}>
          <div className="bonus-result ticket-result" role="dialog" aria-modal="true" aria-labelledby="bonus-result-title" onClick={(event) => event.stopPropagation()}>
            <button type="button" className="bonus-result__close" onClick={closeResult} aria-label="Закрыть">
              <X size={23} />
            </button>

            <div
              className="ticket-result__ticket"
              style={{
                '--ticket-accent': wonPrize.accent,
                '--ticket-image': `url(${ticketImages[wonPrizeIndex]})`
              } as React.CSSProperties}
            >
              <span className="ticket-result__admit">СЧАСТЛИВЫЙ БИЛЕТ</span>
              <div>
                <small>Ваш бонус</small>
                <strong>{wonPrize.ticketLabel}</strong>
              </div>
              <Gift size={30} />
            </div>

            <h2 id="bonus-result-title">{wonPrize.title}</h2>
            <p className="bonus-result__description">{wonPrize.description}</p>

            <div className="bonus-result__code-box">
              <span>Кодовое слово</span>
              <strong>{wonPrize.code}</strong>
              <button type="button" onClick={copyCode}>
                {copied ? <Check size={18} /> : <Copy size={18} />}
                {copied ? 'Скопировано' : 'Скопировать'}
              </button>
            </div>

            <p className="bonus-result__instruction">Выберите мессенджер и отправьте мне кодовое слово. Я подтвержу бонус и отвечу на вопросы <span className="bonus-result__heart" aria-hidden="true">♡</span></p>

            <div className="bonus-result__messengers">
              <a href="https://t.me/DinaraEng" target="_blank" rel="noopener noreferrer" className="bonus-result__messenger bonus-result__messenger--telegram" onClick={copyCodeBeforeOpeningMessenger}>
                <Send size={20} /> Telegram
              </a>
              <a href="https://vk.ru/dinaraeng" target="_blank" rel="noopener noreferrer" className="bonus-result__messenger bonus-result__messenger--vk" onClick={copyCodeBeforeOpeningMessenger}>
                <MessageCircle size={20} /> ВКонтакте
              </a>
              <a href="https://max.ru/u/f9LHodD0cOJBxAYv1kH4C_VktHo_U9FZgNO-Ip1Wbeiz_L7MdDSBsA9UL8k" target="_blank" rel="noopener noreferrer" className="bonus-result__messenger bonus-result__messenger--max" onClick={copyCodeBeforeOpeningMessenger}>
                <MessageSquare size={20} /> Макс
              </a>
            </div>

            <p className="bonus-result__terms">Один бонус на человека. Не суммируется с другими предложениями.</p>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
