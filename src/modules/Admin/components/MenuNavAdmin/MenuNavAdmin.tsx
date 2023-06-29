import { ExitIcon } from 'assets';
import { menuList } from 'modules/Admin/config';

import { Link, NavLink } from 'react-router-dom';

import { ROUTE } from 'router';

import styles from './styles.module.scss';

export const MenuNavAdmin = () => (
  <nav className={styles.nav}>
    <ul className={styles.linksWrapper}>
      {menuList.map(({ url, id, image, text }) => {
        const Image = image;
        return (
          <NavLink to={url} key={id} className={({ isActive }) => (isActive ? styles.active : styles.links)}>
            <Image /> {text}
          </NavLink>
        );
      })}
    </ul>
    <Link to={ROUTE.HOME} className={styles.exit}>
      <ExitIcon />
      <span>Выйти</span>
    </Link>
  </nav>
);
