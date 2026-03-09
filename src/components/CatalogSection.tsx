import React, { useState } from 'react';
import { X, Play, Clock, BarChart3, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageCarousel } from './ImageCarousel';
import insideOut2Poster from '../assets/0f307264768885e16d5ab8cb0e8f03a2a63bc820.png';
import insideOut2Image1 from '../assets/7514af2591455042492ca6c1a5d6612c8415bd27.png';
import insideOut2Image2 from '../assets/cbf21d473cc5c0578fa8bd45a53e3835bf912e25.png';
import insideOut2Image3 from '../assets/5520d63e3a6937241b7cc92bb867aa4be94db3df.png';
import wednesday2Image1 from '../assets/65ada6d6fb8af5ffb5fc4f71127536d688dbaca8.png';
import wednesday2Image2 from '../assets/55d08ae6467358b47b9a70f330901a3222b2d787.png';
import wednesday2Image3 from '../assets/c550a3809fd241f21e49f96d50c8273c94dcd749.png';
import wednesday2Poster from '../assets/4303c71c42d5e4c013df3a40cc7bf437a523b216.png';
import intensiveA1Image1 from '../assets/6c5aca6419768fad32d0253d0b6ed044bae7be9a.png';
import intensiveA1Image2 from '../assets/2c5bb64580297b41bc3887a94f25641116d91a03.png';
import intensiveA1Image3 from '../assets/e11d69ee0e6dd1d029540ab592628257c6326224.png';
import intensiveA1A2Image1 from '../assets/e0981c8012b6fa686ebb9242c87b10e3e5f46b8b.png';
import intensiveA1A2Image2 from '../assets/382c62fecd329f4a3f69850c216f7e6218642149.png';
import intensiveA1A2Image3 from '../assets/96d74d3b720ec1d501f7eae81f39696f5f5673b2.png';
import intensiveA2B1Image1 from '../assets/36b1b3745797ebdcc5d009531286eff477e77f59.png';
import intensiveA2B1Image2 from '../assets/385c83dddb06e9a131e60b3cdc22b6ad5386a550.png';
import intensiveA2B1Image3 from '../assets/9aa184c860ccd189a84a6588aa16b5d7a1682d52.png';
import benedictImage1 from '../assets/5bf17641527543936bdf9cf9cd1b2e8126c1689c.png';
import benedictImage2 from '../assets/a3dc00f63aa896ac4666863eb5fe7ef99828a6fd.png';
import benedictImage3 from '../assets/2593d20426b9cdc5a7cab719833a7b4be644c3d8.png';
import silverpointImage1 from '../assets/97ee57309eb604cb5d1fd5b631612955a71633b4.png';
import silverpointImage2 from '../assets/6a9c882ed3a6934aa3b404c9d40e61471af37627.png';
import silverpointImage3 from '../assets/caf377c651b79138326cb8a94b17acca509e7954.png';
import gravityFallsImage1 from '../assets/ae6028665af44290fcc9f296ab480b2681be88c1.png';
import gravityFallsImage2 from '../assets/fa88721b4f555fb7c8358958abfb260c058df22a.png';
import gravityFallsImage3 from '../assets/38cb7421b2eef3fc9f62f983fc4439c89cf33a09.png';
import charmedImage1 from '../assets/03352d978d440b5cf3b85b75a69b5d2aecaa1bed.png';
import charmedImage2 from '../assets/d5e9363fcd16a6fa908d3652f74d0f7f2c48cbd2.png';
import charmedImage3 from '../assets/247efd2670d131650c3377522199109a02e15173.png';
import walkingDeadImage1 from '../assets/3de77a6c03e08a6fed43ff9a8e5f5987731ea166.png';
import walkingDeadImage2 from '../assets/ec3c39cb8ae758fd45291850596d169eb5523a2f.png';
import walkingDeadImage3 from '../assets/8619f5692d2194ab8155b98b16732cdaac1e7205.png';
import theHollowImage1 from '../assets/d379dfc8f18c578bb2ee0ecf6929459228846cd8.png';
import theHollowImage2 from '../assets/2cb7e8099d2b8e19a332f1b38efe1b7f46920249.png';
import theHollowImage3 from '../assets/baef6973fba402d19aa5522e1ebdf3f87583c230.png';
import christmasImage1 from '../assets/a56e400cafae6b3eee4b6ec893b6882deb3516bf.png';
import christmasImage2 from '../assets/a6659865715dd6779be9efd477655a9780c7f11d.png';
import christmasImage3 from '../assets/08d4ec49c38c3c3f6deecc02bb5dca8a4894c6af.png';
import strangerThingsImage1 from '../assets/1b68a9a3ec52047e31621ff40bb79161b3575faf.png';
import strangerThingsImage2 from '../assets/9ec1b87a0c6854c458c10433f687feec7d9870fd.png';
import strangerThingsImage3 from '../assets/91da6024753e9abc9c436962e71c728fcf1624ae.png';
import breakingBadImage1 from '../assets/1cff73af79d2d08b3b0f4771ab0c66bb9e67495d.png';
import breakingBadImage2 from '../assets/2af0f7698877a4f6f33370fe80c2c2a814d37579.png';
import breakingBadImage3 from '../assets/f3c617d0cb747e9653a48d490e0d0592dbc003da.png';
import vanityFairImage1 from '../assets/5ae2cf988b6648ecde86f115477f48aaedcea10c.png';
import vanityFairImage2 from '../assets/30c395e6430969f4b0012a8d8d22fbb7ea737112.png';
import vanityFairImage3 from '../assets/13c087aeef06b6ce2e57b271ce47dfe6d5dd4c7c.png';
import silverpointPoster from '../assets/b20222c4b1e1077f58c91f08f2dae2dffb537c4f.png';
import walkingDeadPoster from '../assets/75c7a442c28ec0c782aaa02399e0fbb8f3602585.png';
import benedictPoster from '../assets/372ba824431b9780cc5516ceb81a212a69d43564.png';
import gravityFallsPoster from '../assets/275c84899f75200e3bdb740d189e6091e98f43f0.png';
import charmedPoster from '../assets/e33056b7d252e4590e7255fe1e6c4b9670d98fe0.png';
import christmasChroniclesPoster from '../assets/c670c69af85401b538ff73f46ac56f036441c064.png';
import theHollowPoster from '../assets/9f15d8c972d631c74306014fc15a3c46ff836201.png';
import strangerThingsPoster from '../assets/b93338ac00cd780d2a39d0343c267a0fe7d65ba8.png';
import breakingBadPoster from '../assets/3783a473818dfd4aefd692059d75a051dbd10f8e.png';
import vanityFairPoster from '../assets/04d81068d9cb83f695aeb8f814809e5edb445fd9.png';
import intensiveA2B1Poster from '../assets/233e5e91e3632645cb844cb9ce140633fbbc672e.png';
import intensiveA1A2Poster from '../assets/a9181221ee682f1cc4631562f904cfb6562cca74.png';
import intensiveA1Poster from '../assets/d1ac489a35dac4cc76b8a15a53f34033593aa021.png';

interface CatalogItem {
  level: string;
  format: string;
  title: string;
  titleRu: string;
  description: string;
  lessons: number | string;
  genres?: string[];
  detailedInfo?: string;
  topics?: string[];
  icon?: string;
  poster?: string;
  selfStudyAvailable?: boolean;
}

export function CatalogSection() {
  const [selectedItem, setSelectedItem] = useState<CatalogItem | null>(null);

  // Image collections for each catalog item
  const catalogImages: { [key: string]: string[] } = {
    'Inside Out 2': [insideOut2Image1, insideOut2Image2, insideOut2Image3],
    'Silverpoint (Season 1)': [silverpointImage1, silverpointImage2, silverpointImage3], // Готово к добавлению изображений
    'The Walking Dead': [walkingDeadImage1, walkingDeadImage2, walkingDeadImage3], // Готово к добавлению изображений
    'The Mysterious Benedict Society': [benedictImage1, benedictImage2, benedictImage3],
    'Wednesday 2': [wednesday2Image1, wednesday2Image2, wednesday2Image3],
    'Gravity Falls (Season 1)': [gravityFallsImage1, gravityFallsImage2, gravityFallsImage3], // Готово к добавлению изображений
    'Charmed (Season 1)': [charmedImage1, charmedImage2, charmedImage3], // Готово к добавлению изображений
    'The Christmas Chronicles': [christmasImage1, christmasImage2, christmasImage3], // Готово к добавлению изображений
    'The Hollow': [theHollowImage1, theHollowImage2, theHollowImage3], // Готово к добавлению изображений
    'Stranger Things (Season 1)': [strangerThingsImage1, strangerThingsImage2, strangerThingsImage3], // Готово к добавлению изображений
    'Breaking Bad': [breakingBadImage1, breakingBadImage2, breakingBadImage3], // Готово к добавлению изображений
    'Vanity Fair': [vanityFairImage1, vanityFairImage2, vanityFairImage3], // Готово к добавлению изображений
    'Intensive A1': [intensiveA1Image1, intensiveA1Image2, intensiveA1Image3], // Готово к добавлению изображений
    'Intensive A1–A2': [intensiveA1A2Image1, intensiveA1A2Image2, intensiveA1A2Image3],
    'Intensive A2–B1': [intensiveA2B1Image1, intensiveA2B1Image2, intensiveA2B1Image3],
  };

  const catalogItems: CatalogItem[] = [
    {
      level: 'A1–A2',
      format: 'Фильм',
      title: 'Inside Out 2',
      titleRu: 'Головоломка 2',
      description: 'Продолжение истории об эмоциях и взрослении',
      lessons: 10,
      genres: ['Мультфильм', 'Семейный', 'Приключения'],
      poster: insideOut2Poster,
      detailedInfo: 'Райли стала подростком, и вместе с этим в её голове появляются новые эмоции: Тревожность, Зависть, Скука и Смущение. Привычные эмоции — Радость, Печаль, Гнев, Страх и Брезгливость — должны научиться работать с новыми «гостями», пока Райли переживает важные изменения в своей жизни.',
      topics: ['Эмоции и чувства', 'Взросление', 'Дружба', 'Семейные отношения'],
      selfStudyAvailable: true
    },
    {
      level: 'A2–B1',
      format: 'Сериал',
      title: 'Silverpoint (Season 1)',
      titleRu: 'Сильверпойнт (Сезон 1)',
      description: 'Приключения подростков в летнем лагере',
      lessons: 12,
      genres: ['Приключения', 'Драма', 'Молодёжный'],
      poster: silverpointPoster,
      detailedInfo: 'Четверо подростков приезжают в летний лагерь Сильверпойнт, где 15 лет назад пропали четверо других детей. Когда начинают происходить странные события, друзья понимают, что прошлое лагеря хранит темные секреты, и им предстоит разгадать эту загадку.',
      topics: ['Лагерь и отдых', 'Подростковая жизнь', 'Тайны и загадки', 'Дружба'],
      selfStudyAvailable: true
    },
    {
      level: 'B1–B2',
      format: 'Сериал',
      title: 'The Walking Dead',
      titleRu: 'Ходячие мертвецы',
      description: 'Выживание в мире зомби-апокалипсиса',
      lessons: 16,
      genres: ['Ужасы', 'Драма', 'Триллер'],
      poster: walkingDeadPoster,
      detailedInfo: 'После зомби-апокалипсиса шериф Рик Граймс просыпается из комы и обнаруживает, что мир изменился навсегда. Он ищет свою семью и объединяется с группой выживших, которые пытаются найти безопасное убежище в мире, где угроза исходит не только от ходячих мертвецов, но и от живых людей.',
      topics: ['Выживание', 'Лидерство', 'Моральные дилеммы', 'Командная работа'],
      selfStudyAvailable: true
    },
    {
      level: 'A2–B1',
      format: 'Сериал',
      title: 'The Mysterious Benedict Society',
      titleRu: 'Таинственное общество Бенедикта',
      description: 'Одарённые дети спасают мир',
      lessons: 10,
      genres: ['Приключения', 'Семейный', 'Детектив'],
      poster: benedictPoster,
      detailedInfo: 'Четверо необычных детей-сирот проходят серию сложных испытаний и получают приглашение от загадочного мистера Бенедикта. Им предстоит тайная миссия — проникнуть в закрытый институт и остановить злодея, который угрожает всему миру с помощью скрытых сообщений.',
      topics: ['Загадки и головоломки', 'Дружба', 'Приключения', 'Интеллект'],
      selfStudyAvailable: true
    },
    {
      level: 'A2–B1',
      format: 'Фильм',
      title: 'Wednesday 2',
      titleRu: 'Уэнсдей 2',
      description: 'Новые приключения Уэнсдей Аддамс',
      lessons: 8,
      genres: ['Комедия', 'Мистика', 'Семейный'],
      poster: wednesday2Poster,
      detailedInfo: 'Уэнсдей Аддамс продолжает учёбу в академии Nevermore, где сталкивается с новыми загадками и мистическими событиями. Развивая свои психические способности, она пытается раскрыть тайны, которые угрожают её друзьям и всей академии.',
      topics: ['Школа', 'Мистика', 'Чёрный юмор', 'Семейные ценности'],
      selfStudyAvailable: true
    },
    {
      level: 'A1–A2',
      format: 'Сериал',
      title: 'Gravity Falls (Season 1)',
      titleRu: 'Гравити Фолз (Сезон 1)',
      description: 'Мистические приключения близнецов',
      lessons: 12,
      genres: ['Мультсериал', 'Комедия', 'Мистика'],
      poster: gravityFallsPoster,
      detailedInfo: 'Близнецы Диппер и Мэйбл приезжают на лето к двоюродному дедушке Стэну в загадочный городок Гравити Фолз. Здесь они находят таинственный дневник, полный записей о паранормальных явлениях, и начинают расследовать странные события, происходящие в городе.',
      topics: ['Приключения', 'Тайны', 'Семья', 'Юмор'],
      selfStudyAvailable: true
    },
    {
      level: 'B1–B2',
      format: 'Сериал',
      title: 'Charmed (Season 1)',
      titleRu: 'Зачарованные (Сезон 1)',
      description: 'Три сестры-ведьмы защищают мир',
      lessons: 14,
      genres: ['Фэнтези', 'Драма', 'Мистика'],
      poster: charmedPoster,
      detailedInfo: 'Три сестры Хэллиуэлл узнают, что они — потомственные ведьмы с уникальными способностями. Объединив свои силы, они становятся «Зачарованными» — самыми могущественными добрыми ведьмами. Теперь им предстоит защищать невинных людей от демонов и тёмных сил, при этом пытаясь вести нормальную жизнь.',
      topics: ['Магия', 'Семейные узы', 'Борьба добра и зла', 'Женская сила'],
      selfStudyAvailable: true
    },
    {
      level: 'A1–A2',
      format: 'Фильм',
      title: 'The Christmas Chronicles',
      titleRu: 'Рождественские хроники',
      description: 'Приключения с Санта-Клаусом в канун Рождества',
      lessons: 8,
      genres: ['Фэнтези', 'Комедия', 'Семейный'],
      poster: christmasChroniclesPoster,
      detailedInfo: 'Брат и сестра Кейт и Тедди решают поймать Санта-Клауса на камеру в рождественскую ночь. Их план оборачивается невероятным приключением, когда они случайно разрушают сани Санты, и теперь им предстоит помочь спасти Рождество, пока не наступило утро.',
      topics: ['Приключения', 'Семья', 'Рождество', 'Дружба'],
      selfStudyAvailable: true
    },
    {
      level: 'A1–A2',
      format: 'Сериал',
      title: 'The Hollow',
      titleRu: 'Лощина',
      description: 'Подростки ищут дорогу домой из незнакомого бункера',
      lessons: 10,
      genres: ['Мультсериал', 'Приключения', 'Мистика'],
      poster: theHollowPoster,
      detailedInfo: 'Трое подростков — Адам, Мира и Кай — просыпаются в странной комнате без каких-либо воспоминаний о том, кто они и как сюда попали. Чтобы выбраться и вернуть память, им придётся пройти через серию испытаний в мире, полном загадок и опасностей.',
      topics: ['Приключения', 'Загадки', 'Дружба', 'Выживание'],
      selfStudyAvailable: true
    },
    {
      level: 'A2–B2',
      format: 'Сериал',
      title: 'Stranger Things (Season 1)',
      titleRu: 'Очень странные дела (Сезон 1)',
      description: 'Мистические события в маленьком городке 80-х',
      lessons: 14,
      genres: ['Фантастика', 'Триллер', 'Драма'],
      poster: strangerThingsPoster,
      detailedInfo: 'В маленьком городке Хокинс таинственным образом исчезает мальчик по имени Уилл. Его друзья начинают поиски и встречают странную девочку с необычными способностями по имени Одиннадцать. Вместе они обнаруживают секретные правительственные эксперименты и пугающий параллельный мир под названием Изнанка.',
      topics: ['Дружба', 'Загадки и тайны', '80-е годы', 'Сверхъестественное'],
      selfStudyAvailable: true
    },
    {
      level: 'B1–B2',
      format: 'Сериал',
      title: 'Breaking Bad',
      titleRu: 'Во все тяжкие',
      description: 'История превращения учителя химии в наркобарона',
      lessons: 16,
      genres: ['Драма', 'Триллер', 'Криминал'],
      poster: breakingBadPoster,
      detailedInfo: 'Учитель химии Уолтер Уайт узнаёт, что у него неоперабельный рак лёгких. Отчаявшись обеспечить будущее своей семьи, он использует свои знания химии для производства запрещенных веществ вместе со своим бывшим учеником Джесси. Так начинается его путь от обычного учителя к опасному преступнику.',
      topics: ['Моральные дилеммы', 'Семья', 'Выбор и последствия', 'Криминальный мир'],
      selfStudyAvailable: true
    },
    {
      level: 'B1–B2',
      format: 'Сериал',
      title: 'Vanity Fair',
      titleRu: 'Ярмарка тщеславия',
      description: 'Интриги и амбиции в викторианской Англии',
      lessons: 14,
      genres: ['Драма', 'Исторический', 'Романтика'],
      poster: vanityFairPoster,
      detailedInfo: 'Бекки Шарп — умная и амбициозная девушка без состояния и связей, мечтающая пробиться в высшее общество викторианской Англии. Используя своё остроумие и обаяние, она манипулирует окружающими, чтобы достичь богатства и положения в общесте, где всё решают деньги и происхождение.',
      topics: ['Светское общество', 'Амбиции', 'Социальные интриги', 'Исторический период'],
      selfStudyAvailable: true
    },
    {
      level: 'A2–B1',
      format: 'Интенсив',
      title: 'Intensive A2–B1',
      titleRu: 'Интенсив A2–B1',
      description: 'Ускоренный курс для продолжающих',
      lessons: 10,
      genres: ['Интенсив'],
      poster: intensiveA2B1Poster,
      detailedInfo: 'Ускоренный курс для продолжающих. Изучаем Past Continuous и сравниваем его с Past Simple, вопросы и вопросительные слова, время Present Perfect, сравниваем Present Perfect и Past Simple, разбираем First Conditional и Defining relative clauses.',
      topics: ['Past Continuous', 'Past Continuous vs Past Simple', 'Questions', 'Present Perfect', 'Present Perfect vs Past Simple', 'First Conditional', 'Relative clauses'],
      selfStudyAvailable: true
    },
    {
      level: 'A1–A2',
      format: 'Интенсив',
      title: 'Intensive A1–A2',
      titleRu: 'Интенсив A1–A2',
      description: 'Ускоренный курс от базы до A2',
      lessons: 10,
      genres: ['Интенсив'],
      poster: intensiveA1A2Poster,
      detailedInfo: 'Ускоренный курс для тех, кто уже знаком с основами. Углубляем знания глагола to be, осваиваем Present Continuous и Present Simple, учимся различать эти времена, изучаем прошедшее время (was/were и Past Simple) с правильными и неправильными глаголами. Бонусная тема: Food (еда).',
      topics: ['To be', 'Present Continuous', 'Present Simple', 'Present Simple vs Continuous', 'Was/were', 'Past Simple (regular)', 'Past Simple (irregular)', 'Food'],
      selfStudyAvailable: true
    },
    {
      level: 'A1',
      format: 'Интенсив',
      title: 'Intensive A1',
      titleRu: 'Интенсив A1',
      description: 'Ускоренный курс для начинающих',
      lessons: 10,
      genres: ['Интенсив'],
      poster: intensiveA1Poster,
      detailedInfo: 'Ускоренный курс для начинающих с нуля. Изучаем глагол to be, одежду, предметы (this/that), описание дома, конструкцию there is/are, части тела и лица с have got, модальный глагол can с глаголами действия, распорядок дня и все формы Present Simple.',
      topics: ['To be', 'Одежда и предметы', 'Дом', 'There is/are', 'Части тела', 'Can + действия', 'Мой день', 'Present Simple'],
      selfStudyAvailable: true
    }
  ];

  const getFormatColor = (format: string) => {
    switch (format) {
      case 'Фильм':
        return { bg: 'bg-pink-500/10', text: 'text-pink-300', border: 'border-pink-500/30' };
      case 'Сериал':
        return { bg: 'bg-blue-500/10', text: 'text-blue-300', border: 'border-blue-500/30' };
      case 'Самостоятельно':
        return { bg: 'bg-emerald-500/10', text: 'text-emerald-300', border: 'border-emerald-500/30' };
      case 'Интенсив':
        return { bg: 'bg-purple-500/10', text: 'text-purple-300', border: 'border-purple-500/30' };
      case 'Пробный урок':
        return { bg: 'bg-green-500/10', text: 'text-green-300', border: 'border-green-500/30' };
      default:
        return { bg: 'bg-white/5', text: 'text-gray-300', border: 'border-white/10' };
    }
  };

  const handleNavigate = (direction: 'prev' | 'next') => {
    const currentIndex = catalogItems.findIndex(item => item.title === selectedItem?.title);
    if (currentIndex === -1) return;

    let newIndex;
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : catalogItems.length - 1;
    } else {
      newIndex = currentIndex < catalogItems.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedItem(catalogItems[newIndex]);
  };

  return (
    <>
      <section id="catalog" className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-gradient-to-r from-[#ff6b9d]/20 to-[#ffd700]/20 rounded-2xl px-8 py-4 border border-[#ff6b9d]/30 shadow-lg shadow-pink-500/20">
              <h2 className="text-xl md:text-2xl mb-0 bg-gradient-to-r from-[#ff6b9d] to-[#ffd700] bg-clip-text text-transparent">
                Каталог занятий
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {catalogItems.map((item, index) => {
              const colors = getFormatColor(item.format);
              return (
                <div
                  key={index}
                  onClick={() => setSelectedItem(item)}
                  className="group cursor-pointer bg-gradient-to-br from-[#1a2347]/60 to-[#0f1629]/60 rounded-2xl overflow-hidden backdrop-blur-sm border border-white/10 hover:border-[#ff6b9d]/40 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/20 hover:scale-105"
                >
                  {/* Poster Image */}
                  {item.poster && (
                    <div className={`relative overflow-hidden ${item.format === 'Интенсив' ? 'h-64' : 'h-48'}`}>
                      <img 
                        src={item.poster} 
                        alt={item.title}
                        className={`w-full h-full ${
                          item.format === 'Интенсив' ? 'object-contain scale-110' : 'object-cover'
                        } group-hover:scale-110 transition-transform duration-300 ${
                          item.title === 'Charmed (Season 1)' ? 'object-[center_25%]' : 
                          item.title === 'Vanity Fair' ? 'object-[center_40%]' : 
                          item.format === 'Интенсив' ? '' : 'object-center'
                        }`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0f1629]/90 via-[#0f1629]/20 to-transparent"></div>
                    </div>
                  )}
                  
                  <div className="p-4">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex gap-2 flex-wrap">
                        <span className="text-xs bg-[#ffd700]/10 text-[#ffd700] px-3 py-1 rounded-full border border-[#ffd700]/30">
                          {item.level}
                        </span>
                        <span className={`text-xs ${colors.bg} ${colors.text} px-3 py-1 rounded-full border ${colors.border}`}>
                          {item.format}
                        </span>
                      </div>
                      {item.selfStudyAvailable && (
                        <span 
                          className="text-xs bg-[#c084fc]/20 text-[#c084fc] px-2.5 py-1 rounded-full border border-[#c084fc]/50 shadow-[0_0_10px_rgba(192,132,252,0.3)] whitespace-nowrap" 
                          style={{ textShadow: '0 0 8px rgba(192, 132, 252, 0.6)' }}
                        >
                          + готовый курс
                        </span>
                      )}
                    </div>

                    <h4 className="mb-3 group-hover:text-[#ff6b9d] transition-colors">{item.titleRu}</h4>
                    <p className="text-sm text-gray-400 mb-2">{item.title}</p>
                    <p className="text-sm text-gray-300 mb-4 line-clamp-2">{item.description}</p>

                    <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                      {item.genres && item.genres.length > 0 ? (
                        <div className="flex gap-1.5 flex-wrap">
                          {item.genres.map((genre, idx) => (
                            <span key={idx} className="text-xs text-gray-400">
                              {genre}{idx < item.genres!.length - 1 && ' •'}
                            </span>
                          ))}
                        </div>
                      ) : (
                        <span className="text-sm text-gray-400">Подробнее →</span>
                      )}
                      <button className="flex items-center gap-1.5 text-sm text-[#ff6b9d] bg-[#ff6b9d]/10 px-3 py-1.5 rounded-full border border-[#ff6b9d]/30 hover:bg-[#ff6b9d]/20 transition-all">
                        <Play size={14} />
                        <span>Открыть</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-6 overflow-y-auto"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="bg-gradient-to-br from-[#1a2347] to-[#0f1629] rounded-3xl max-w-2xl w-full my-auto border border-white/20 shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-full transition-colors z-10"
            >
              <X size={24} />
            </button>

            {/* Content */}
            <div className="p-6 space-y-6">
              {/* Detailed Info */}
              {selectedItem.detailedInfo && (
                <div className="bg-white/5 rounded-xl p-5 border border-white/10">
                  <div className="flex items-center gap-2 mb-3">
                    <Sparkles size={18} className="text-[#ffd700]" />
                    <h4 className="text-sm">
                      {selectedItem.format === 'Интенсив' ? 'О программе' : 'О чём сюжет'}
                    </h4>
                    <span className="text-sm text-cyan-300">{selectedItem.titleRu}</span>
                  </div>
                  <p className="text-gray-300">{selectedItem.detailedInfo}</p>
                </div>
              )}

              {/* Image Carousel - Show if images are available */}
              {catalogImages[selectedItem.title] && catalogImages[selectedItem.title].length > 0 && (
                <ImageCarousel images={catalogImages[selectedItem.title]} />
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between">
                <button
                  onClick={() => handleNavigate('prev')}
                  className="flex items-center gap-1.5 text-sm text-[#ff6b9d] bg-[#ff6b9d]/10 px-3 py-1.5 rounded-full border border-[#ff6b9d]/30 hover:bg-[#ff6b9d]/20 transition-all"
                >
                  <ChevronLeft size={14} />
                  <span>Предыдущий</span>
                </button>
                <button
                  onClick={() => handleNavigate('next')}
                  className="flex items-center gap-1.5 text-sm text-[#ff6b9d] bg-[#ff6b9d]/10 px-3 py-1.5 rounded-full border border-[#ff6b9d]/30 hover:bg-[#ff6b9d]/20 transition-all"
                >
                  <span>Следующий</span>
                  <ChevronRight size={14} />
                </button>
              </div>

              {/* CTA Button */}
              <a 
                href="#contact" 
                onClick={() => setSelectedItem(null)}
                className="w-full bg-gradient-to-r from-[#ff6b9d] to-[#ff8fab] hover:from-[#ff5a8f] hover:to-[#ff7a9d] text-white py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-pink-500/50 flex items-center justify-center gap-2 group"
              >
                <span className="text-lg">Хочу смотреть!</span>
                <Play size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}