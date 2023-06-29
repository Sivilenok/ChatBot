import { NavLink } from 'react-router-dom';

import styles from './styles.module.scss';

export const Tab = ({ text, url }: { text: string; url: string }) => (
  <NavLink to={url} className={styles.tab}>
    {text}
  </NavLink>
);
