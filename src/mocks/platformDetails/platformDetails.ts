import { IPlatformDetails, IReviewCard } from 'store/types';

import {
  aiMyLogicIcon,
  artsendIcon,
  botHelpIcon,
  botKitsIcon,
  botmakerIcon,
  botsifyIcon,
  buisnessbotIcon,
  botvsemIcon,
  sberbIcon,
} from '../assets';

const solutions = [
  {
    title: 'Вебинарная воронка',
    picture: aiMyLogicIcon,
    text: 'Позволяет увеличивать доходимость до вебинара до 80%',
    id: '1',
    isFavorite: false,
    link: 'https://townsend.pro/',
    price: 'Цена от 50 000 ₽',
  },
  {
    title: 'Решение 4',
    picture: aiMyLogicIcon,
    text: 'Решение для образовательных услуг, можно подключить платежные системы, организовать работу с подписчиками, широкий дополнительный  функционал',
    id: '2',
    isFavorite: false,
    link: 'https://townsend.pro/',
    price: 'Цена от 30 000 ₽',
  },
  {
    title: 'Решение 3',
    picture: aiMyLogicIcon,
    text: 'Решение для цветочных магазинов, отслеживание потока клиентов, подключение чат-бота в самых популярных мессенджерах, рассылка писем, оповещения о готовности заказов и другие необходимые настройки для вашего бизнеса',
    id: '3',
    isFavorite: false,
    link: 'https://townsend.pro/',
    price: 'Цена от 80 000 ₽',
  },
  {
    title: 'Решение 4',
    picture: aiMyLogicIcon,
    text: 'Решение для цветочных магазинов, отслеживание потока клиентов, подключение чат-бота в самых популярных мессенджерах, рассылка писем, оповещения о готовности заказов и другие необходимые настройки для вашего бизнеса',
    id: '4',
    isFavorite: false,
    link: 'https://townsend.pro/',
    price: 'Цена от 20 000 ₽',
  },
  {
    title: 'Решение 5',
    picture: aiMyLogicIcon,
    text: 'Позволяет увеличивать доходимость до вебинара до 80%',
    id: '5',
    isFavorite: false,
    link: 'https://townsend.pro/',
    price: 'Цена от 50 000 ₽',
  },
  {
    title: 'Решение 6',
    picture: aiMyLogicIcon,
    text: 'Решение для цветочных магазинов, отслеживание потока клиентов, подключение чат-бота в самых популярных мессенджерах, рассылка писем, оповещения о готовности заказов и другие необходимые настройки для вашего бизнеса',
    id: '6',
    isFavorite: false,
    link: 'https://townsend.pro/',
    price: 'Цена от 60 000 ₽',
  },
];

const reviews: Array<IReviewCard> = [
  {
    rating: '5',
    text: 'Рекомендую всем, кто сейчас уже работает или только собирается окунуться в социальные сети, кто имеет или собирается делать воронку продаж в своём бизнесе.',
    id: '1',
    name: 'Петр Ян',
  },
  {
    rating: '4',
    text: 'Работая с чат-ботом, мне намного легче стало привлекать партнеров и клиентов в свой бизнес.',
    id: '2',
    name: 'Александр Григорьевич',
  },
  {
    rating: '4',
    text: 'Работая с чат-ботом, мне намного легче стало привлекать партнеров и клиентов в свой бизнес.',
    id: '3',
    name: 'Филипп Киркоров',
  },
  {
    rating: '5',
    text: 'Все отлично. Спасибо фронтам на слайдер',
    id: '4',
    name: 'Джон Уик',
  },
  {
    rating: '4',
    text: 'Работая с чат-ботом, мне намного легче стало привлекать партнеров и клиентов в свой бизнес.',
    id: '5',
    name: 'Арнольд Шварцнеггер',
  },
  {
    rating: '5',
    text: 'Рекомендую всем, кто сейчас уже работает или только собирается окунуться в социальные сети, кто имеет или собирается делать воронку продаж в своём бизнесе.',
    id: '6',
    name: 'Флойд Мейвейзер',
  },
  {
    rating: '0',
    text: 'Работая с чат-ботом, мне намного легче стало привлекать партнеров и клиентов в свой бизнес.',
    id: '7',
    name: 'Хабиб Нурмагомедов',
  },
  {
    rating: '2',
    text: 'Работая с чат-ботом, мне намного легче стало привлекать партнеров и клиентов в свой бизнес.',
    id: '8',
    name: 'Konor McGregor',
  },
  {
    rating: '1',
    text: 'Все отлично. Спасибо фронтам на слайдер',
    id: '9',
    name: 'Хамзат Чимаев',
  },
  {
    rating: '4',
    text: 'Работая с чат-ботом, мне намного легче стало привлекать партнеров и клиентов в свой бизнес.',
    id: '10',
    name: 'Арнольд Шварцнеггер',
  },
];

export const platformDetailsData: Array<IPlatformDetails> = [
  {
    title: 'Aimylogic',
    picture: aiMyLogicIcon,
    text: 'Платформа для оформления каталога товаров с описанием продуктов компании и возможностью бронирования и оформления заказа. Платформа для оформления каталога товаров с подразделами, описанием продуктов компании и возможностью бронирования и оформления заказа.',
    link: 'https://townsend.pro/',
    id: '1',
    isFavorite: false,
    CRM: 'Битрикс 24',
    services: ['ApiX-Drive', 'Zapier', 'Integromat', 'IFTTТ'],
    voiceHelpers: ['Алиса', 'Маруся', 'Aimybox Googlt Assistant', 'Салют'],
    API: 'открытое API',
    paymentSystems:
      'нет. В блоке "Оплата в Telegram" используется встроенная функция мессенджера. В других каналах можно использовать сторонние сервисы',
    solutions,
    reviews,
  },
  {
    title: 'Buisnessbot',
    picture: buisnessbotIcon,
    text: 'Мультиканальная платформа для создания чат-ботов.',
    link: 'https://townsend.pro/',
    id: '2',
    isFavorite: false,
    CRM: 'Битрикс 24',
    services: ['ApiX-Drive', 'Zapier'],
    voiceHelpers: ['Алиса', 'Маруся'],
    API: 'открытое API',
    paymentSystems: 'нет. В других каналах можно использовать сторонние сервисы',
    solutions,
    reviews,
  },
  {
    title: 'Botvsem',
    picture: botvsemIcon,
    text: 'Мультиканальная платформа для создания чат-ботов.',
    link: 'https://townsend.pro/',
    id: '3',
    isFavorite: false,
    CRM: 'Битрикс 24',
    services: ['ApiX-Drive', 'Zapier', 'Integromat', 'IFTTТ'],
    voiceHelpers: ['Алиса', 'Маруся', 'Aimybox Googlt Assistant', 'Салют'],
    API: 'открытое API',
    paymentSystems:
      'нет. В блоке "Оплата в Telegram" используется встроенная функция мессенджера. В других каналах можно использовать сторонние сервисы',
    solutions,
    reviews,
  },
  {
    title: 'Artsend',
    picture: artsendIcon,
    text: 'Сервис массовых рассылок сообщений и автоворонок',
    link: 'https://townsend.pro/',
    id: '4',
    isFavorite: false,
    CRM: 'Битрикс 24',
    services: ['ApiX-Drive', 'Zapier', 'Integromat', 'IFTTТ'],
    voiceHelpers: ['Алиса', 'Маруся', 'Aimybox Googlt Assistant', 'Салют'],
    API: 'открытое API',
    paymentSystems:
      'нет. В блоке "Оплата в Telegram" используется встроенная функция мессенджера. В других каналах можно использовать сторонние сервисы',
    solutions,
    reviews,
  },

  {
    title: 'BotKits',
    picture: botKitsIcon,
    text: 'Мультиканальная платформа для автоматизации общения с клиентами в социальных сетях и мессенджерах.',
    link: 'https://townsend.pro/',
    id: '5',
    isFavorite: false,
    CRM: 'Битрикс 24',
    services: ['ApiX-Drive', 'Zapier', 'Integromat', 'IFTTТ'],
    voiceHelpers: ['Алиса', 'Маруся', 'Aimybox Googlt Assistant', 'Салют'],
    API: 'открытое API',
    paymentSystems:
      'нет. В блоке "Оплата в Telegram" используется встроенная функция мессенджера. В других каналах можно использовать сторонние сервисы',
    solutions,
    reviews,
  },
  {
    title: 'Botmaker',
    picture: botmakerIcon,
    text: 'Одноканальная платформа для создания чат-ботов.',
    link: 'https://townsend.pro/',
    id: '6',
    isFavorite: false,
    CRM: 'Битрикс 24',
    services: ['ApiX-Drive', 'Zapier', 'Integromat', 'IFTTТ'],
    voiceHelpers: ['Алиса', 'Маруся', 'Aimybox Googlt Assistant', 'Салют'],
    API: 'открытое API',
    paymentSystems:
      'нет. В блоке "Оплата в Telegram" используется встроенная функция мессенджера. В других каналах можно использовать сторонние сервисы',
    solutions,
    reviews,
  },
  {
    title: 'Botsify',
    picture: botsifyIcon,
    text: 'Мультиканальная платформа для автоматизации общения с клиентами в мессенджерах.',
    link: 'https://townsend.pro/',
    id: '7',
    isFavorite: false,
    CRM: 'Битрикс 24',
    services: ['ApiX-Drive', 'Zapier', 'Integromat', 'IFTTТ'],
    voiceHelpers: ['Алиса', 'Маруся', 'Aimybox Googlt Assistant', 'Салют'],
    API: 'открытое API',
    paymentSystems:
      'нет. В блоке "Оплата в Telegram" используется встроенная функция мессенджера. В других каналах можно использовать сторонние сервисы',
    solutions,
    reviews,
  },
  {
    title: 'Sberbb',
    picture: sberbIcon,
    text: 'Мультиканальная платформа для создания чат-ботов с "искусственным интеллектом" и голосовых ботов.',
    link: 'https://townsend.pro/',
    id: '8',
    isFavorite: false,
    CRM: 'Битрикс 24',
    services: ['ApiX-Drive', 'Zapier', 'Integromat', 'IFTTТ'],
    voiceHelpers: ['Алиса', 'Маруся', 'Aimybox Googlt Assistant', 'Салют'],
    API: 'открытое API',
    paymentSystems:
      'нет. В блоке "Оплата в Telegram" используется встроенная функция мессенджера. В других каналах можно использовать сторонние сервисы',
    solutions,
    reviews,
  },
  {
    title: 'BotHelp1',
    picture: botHelpIcon,
    text: 'Мультиканальная платформа.',
    link: 'https://townsend.pro/',
    id: '9',
    isFavorite: false,
    CRM: 'Битрикс 24',
    services: ['ApiX-Drive', 'Zapier', 'Integromat', 'IFTTТ'],
    voiceHelpers: ['Алиса', 'Маруся', 'Aimybox Googlt Assistant', 'Салют'],
    API: 'открытое API',
    paymentSystems:
      'нет. В блоке "Оплата в Telegram" используется встроенная функция мессенджера. В других каналах можно использовать сторонние сервисы',
    solutions,
    reviews,
  },
  {
    title: 'Aimylogic',
    picture: aiMyLogicIcon,
    text: 'Мультиканальная платформа для создания чат- ботов с искусственным интеллектом и голосовых ботов.',
    link: 'https://townsend.pro/',
    id: '10',
    isFavorite: false,
    CRM: 'Битрикс 24',
    services: ['ApiX-Drive', 'Zapier', 'Integromat', 'IFTTТ'],
    voiceHelpers: ['Алиса', 'Маруся', 'Aimybox Googlt Assistant', 'Салют'],
    API: 'открытое API',
    paymentSystems:
      'нет. В блоке "Оплата в Telegram" используется встроенная функция мессенджера. В других каналах можно использовать сторонние сервисы',
    solutions,
    reviews,
  },
  {
    title: 'Buisnessbot',
    picture: buisnessbotIcon,
    text: 'Мультиканальная платформа для создания чат-ботов.',
    link: 'https://townsend.pro/',
    id: '11',
    isFavorite: false,
    CRM: 'Битрикс 24',
    services: ['ApiX-Drive', 'Zapier', 'Integromat', 'IFTTТ'],
    voiceHelpers: ['Алиса', 'Маруся', 'Aimybox Googlt Assistant', 'Салют'],
    API: 'открытое API',
    paymentSystems:
      'нет. В блоке "Оплата в Telegram" используется встроенная функция мессенджера. В других каналах можно использовать сторонние сервисы',
    solutions,
    reviews,
  },
  {
    title: 'Botvsem',
    picture: botvsemIcon,
    text: 'Мультиканальная платформа для создания чат-ботов.',
    link: 'https://townsend.pro/',
    id: '12',
    isFavorite: false,
    CRM: 'Битрикс 24',
    services: ['ApiX-Drive', 'Zapier', 'Integromat', 'IFTTТ'],
    voiceHelpers: ['Алиса', 'Маруся', 'Aimybox Googlt Assistant', 'Салют'],
    API: 'открытое API',
    paymentSystems:
      'нет. В блоке "Оплата в Telegram" используется встроенная функция мессенджера. В других каналах можно использовать сторонние сервисы',
    solutions,
    reviews,
  },
  {
    title: 'Artsend',
    picture: artsendIcon,
    text: 'Сервис массовых рассылок сообщений и автоворонок',
    link: 'https://townsend.pro/',
    id: '13',
    isFavorite: false,
    CRM: 'Битрикс 24',
    services: ['ApiX-Drive', 'Zapier', 'Integromat', 'IFTTТ'],
    voiceHelpers: ['Алиса', 'Маруся', 'Aimybox Googlt Assistant', 'Салют'],
    API: 'открытое API',
    paymentSystems:
      'нет. В блоке "Оплата в Telegram" используется встроенная функция мессенджера. В других каналах можно использовать сторонние сервисы',
    solutions,
    reviews,
  },

  {
    title: 'BotKits',
    picture: botKitsIcon,
    text: 'Мультиканальная платформа для автоматизации общения с клиентами в социальных сетях и мессенджерах.',
    link: 'https://townsend.pro/',
    id: '14',
    isFavorite: false,
    CRM: 'Битрикс 24',
    services: ['ApiX-Drive', 'Zapier', 'Integromat', 'IFTTТ'],
    voiceHelpers: ['Алиса', 'Маруся', 'Aimybox Googlt Assistant', 'Салют'],
    API: 'открытое API',
    paymentSystems:
      'нет. В блоке "Оплата в Telegram" используется встроенная функция мессенджера. В других каналах можно использовать сторонние сервисы',
    solutions,
    reviews,
  },
  {
    title: 'Botmaker',
    picture: botmakerIcon,
    text: 'Одноканальная платформа для создания чат-ботов.',
    link: 'https://townsend.pro/',
    id: '15',
    isFavorite: false,
    CRM: 'Битрикс 24',
    services: ['ApiX-Drive', 'Zapier', 'Integromat', 'IFTTТ'],
    voiceHelpers: ['Алиса', 'Маруся', 'Aimybox Googlt Assistant', 'Салют'],
    API: 'открытое API',
    paymentSystems:
      'нет. В блоке "Оплата в Telegram" используется встроенная функция мессенджера. В других каналах можно использовать сторонние сервисы',
    solutions,
    reviews,
  },
  {
    title: 'Азбука',
    picture: botmakerIcon,
    text: 'Одноканальная платформа для создания чат-ботов.',
    link: 'https://townsend.pro/',
    id: '16',
    isFavorite: false,
    CRM: 'Битрикс 24',
    services: ['ApiX-Drive', 'Zapier', 'Integromat', 'IFTTТ'],
    voiceHelpers: ['Алиса', 'Маруся', 'Aimybox Googlt Assistant', 'Салют'],
    API: 'открытое API',
    paymentSystems:
      'нет. В блоке "Оплата в Telegram" используется встроенная функция мессенджера. В других каналах можно использовать сторонние сервисы',
    solutions,
    reviews,
  },
  {
    title: 'Яндекс',
    picture: botmakerIcon,
    text: 'Одноканальная платформа для создания чат-ботов.',
    link: 'https://townsend.pro/',
    id: '17',
    isFavorite: false,
    CRM: 'Битрикс 24',
    services: ['ApiX-Drive', 'Zapier', 'Integromat', 'IFTTТ'],
    voiceHelpers: ['Алиса', 'Маруся', 'Aimybox Googlt Assistant', 'Салют'],
    API: 'открытое API',
    paymentSystems:
      'нет. В блоке "Оплата в Telegram" используется встроенная функция мессенджера. В других каналах можно использовать сторонние сервисы',
    solutions,
    reviews,
  },
];
