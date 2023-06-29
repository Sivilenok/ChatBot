import { generatePath, Link } from 'react-router-dom';

import { ROUTE } from 'router';
import { IPlatfromCard } from 'store';

import { FavoriteIcon } from 'assets';

import styles from './styles.module.scss';

interface IProps {
  platform: IPlatfromCard;
  isAuth: boolean;
  onlyFavorites: boolean;
  toggleFavorite: (isFavorite: boolean, cardId: string) => void;
}

export const PlatformCard = ({ platform, isAuth, onlyFavorites, toggleFavorite }: IProps) => {
  const { name, description, id, logoUrl, usersFavorites, numberOfSolution } = platform;
  const isFavorite = usersFavorites?.length > 0 || onlyFavorites;

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.image}>
          <img src={`http://${logoUrl}`} alt={`logo platform ${name}`} />
        </div>
        <div className={styles.titleWrapper}>
          <h2 className={styles.title}>{name}</h2>
          <p className={styles.solution}>Готовых решений ({numberOfSolution})</p>
        </div>
        {isAuth && (
          <button className={styles.flag} type="button">
            <FavoriteIcon
              className={isFavorite ? styles.favorite : styles.notFavorite}
              onClick={() => toggleFavorite(isFavorite, id)}
            />
          </button>
        )}
      </div>
      <p className={styles.text}>{description}</p>
      <div className={styles.linkWrapper}>
        <Link className={styles.link} to={generatePath(ROUTE.PLATFORMS_DETAILS, { platformId: id })}>
          Перейти к платформe
        </Link>
      </div>
    </div>
  );
};
