import { ExitIcon } from 'assets';

import { Link } from 'react-router-dom';

import { routes } from './config/routes';

import styles from './styles.module.scss';

interface IProps {
  onLogout: () => void;
}

export const Profile = ({ onLogout }: IProps) => (
  <div className={styles.profile}>
    <div className={styles.dropdown}>
      {routes.map(({ icon, text, to }) => {
        const Icon = icon;
        return (
          <Link className={styles.link} to={to} key={text}>
            <Icon width="20" height="20" />
            {text}
          </Link>
        );
      })}
      <button className={styles.button} type="button" onClick={onLogout}>
        <ExitIcon width="20" height="20" />
        Выйти
      </button>
    </div>
  </div>
);
