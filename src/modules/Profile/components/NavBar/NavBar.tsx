import { NavLink } from 'react-router-dom';

import styles from './styles.module.scss';

import { INavBar } from '../../ProfileLayout/config/routes';

export const NavBar = ({ routes }: { routes: INavBar[] }) => (
  <nav className={styles.nav}>
    {routes.map(({ to, icon: Icon, text }) => (
      <NavLink to={to} className={styles.link} key={text}>
        <Icon width="24" height="24" />
        {text}
      </NavLink>
    ))}
  </nav>
);
