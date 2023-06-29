import { StarIcon, arrow_forwardIcon } from 'assets';
import { Link } from 'react-router-dom';
import { ISolutionCard } from 'store/types';

import styles from './styles.module.scss';

interface IProps extends ISolutionCard {
  isAuth: boolean;
}

export const SolutionCard = ({ title, picture, text, price, link, isAuth }: IProps) => (
  <div className={styles.card}>
    <div className={styles.wrap}>
      <div className={styles.list}>
        <div className={styles.title}>{title}</div>
        {!isAuth && <StarIcon className={`${styles.favorite} ${styles.star}`} />}
      </div>
      <img className={`${styles.icon}`} src={picture} alt="logo card" />
      <span className={styles.iconText}>{title}</span>
    </div>
    <div className={styles.item}>
      <div className={styles.text}>{text} Позволяет увеличивать доходимость до вебинара до 80%</div>
      <div className={styles.price}>{price}</div>
      <div className={styles.link}>
        <Link to={link} className={styles.link_desc}>
          Перейти к решению
        </Link>
        <img className={styles.arrow} src={arrow_forwardIcon} alt="forward icon" />
      </div>
    </div>
  </div>
);
