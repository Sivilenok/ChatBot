import { Link } from 'react-router-dom';

import styles from './styles.module.scss';

interface IProps {
  link: string;
  title: string;
}

export const DashboardBlock = ({ link, title }: IProps) => (
  <Link to={`/admin/${link}`}>
    <div className={styles.wrapper}>
      <h6 className={styles.title}>{title}</h6>
    </div>
  </Link>
);
