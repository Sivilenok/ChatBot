import { MonitorIcon, ThumbsUpIcon, UsersIcon, SettingsIcon, DashboardIcon } from '../assets';

import { ROUTE } from '../router/routes';

export interface MenuListType {
  text: string;
  url: string;
  image: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  id: string;
}

export const menuList: MenuListType[] = [
  { text: 'Дашборд', url: ROUTE.DASHBOARD, image: DashboardIcon, id: '1' },
  { text: 'Пользователи', url: ROUTE.USERS, image: UsersIcon, id: '3' },
  { text: 'Администраторы', url: ROUTE.ADMINS, image: UsersIcon, id: '2' },
  { text: 'Платформы', url: ROUTE.PLATFORMS, image: MonitorIcon, id: '4' },
  { text: 'Решения', url: ROUTE.SOLUTIONS, image: ThumbsUpIcon, id: '5' },
  { text: 'Настройки', url: ROUTE.SETTINGS, image: SettingsIcon, id: '6' },
];
