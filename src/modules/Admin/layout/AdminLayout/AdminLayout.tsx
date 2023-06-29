import { getUser, useAppSelector } from 'store';

import { Outlet } from 'react-router';

import { MenuNavAdmin } from 'modules/Admin/components';

import { Link } from 'react-router-dom';
import { ROUTE } from 'router';

import { logoIcon } from 'assets';

import styles from './styles.module.scss';

export const AdminLayout = () => {
  const { name } = useAppSelector(getUser);
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <MenuNavAdmin />
        <header className={styles.header}>
          <Link to={ROUTE.HOME}>
            <img src={logoIcon} className={styles.logo} alt="Townsend logo" />
          </Link>
          <p>{name || 'Admin'}</p>
        </header>
        <div className={styles.main}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};
