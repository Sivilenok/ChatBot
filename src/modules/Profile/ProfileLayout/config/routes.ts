import { FunctionComponent, SVGProps } from 'react';
import { ROUTE } from 'router';

import { HistoryIcon, ExitProfileIcon, FaqIcon, FavoritesIcon, MyPageIcon, SettingsIcon } from '../../assets';

export interface INavBar {
  to: string;
  icon: FunctionComponent<SVGProps<SVGSVGElement>>;
  text: string;
}

export const routes: INavBar[] = [
  {
    to: ROUTE.PROFILE,
    icon: MyPageIcon,
    text: 'Персональные данные',
  },
  {
    to: ROUTE.PROFILE_HISTORY,
    icon: HistoryIcon,
    text: 'История просмотра',
  },
  {
    to: ROUTE.PROFILE_FAVORITES,
    icon: FavoritesIcon,
    text: 'Избранное',
  },
  {
    to: ROUTE.PLATFORMS,
    icon: FaqIcon,
    text: 'FAQ',
  },
  {
    to: ROUTE.PROFILE_SETTINGS,
    icon: SettingsIcon,
    text: 'Настройки',
  },
  {
    to: ROUTE.PROFILE,
    icon: ExitProfileIcon,
    text: 'Выйти',
  },
];
