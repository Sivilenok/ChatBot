import { ROUTE } from 'router';
import { TelegramIcon, VkIcon, WhatsAppIcon } from 'assets';

export const footerRoutes = [
  {
    to: ROUTE.SIGN_UP,
    text: 'Отзывы',
  },
  {
    to: ROUTE.SIGN_UP,
    text: 'FAQ',
  },
  {
    to: ROUTE.SIGN_UP,
    text: 'Поддержка',
  },
];

export const socials = [
  {
    to: 'https://whatsapp.com',
    img: WhatsAppIcon,
  },
  {
    to: 'https://vk.com',
    img: VkIcon,
  },
  {
    to: 'https://t.me',
    img: TelegramIcon,
  },
];
