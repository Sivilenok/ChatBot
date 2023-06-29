import { addPlatformInFavorites, deletePlatformFromFavorites } from 'api';
import { PlatformCard } from 'components';
import { getUser, IPlatfromCard, useAppSelector } from 'store';

import styles from './styles.module.scss';

interface IProps {
  platforms: IPlatfromCard[];
  reloadCardList: () => void;
  onlyFavorites?: boolean;
}

export const PlatformList = ({ platforms, onlyFavorites = false, reloadCardList }: IProps) => {
  const { isAuth, id } = useAppSelector(getUser);

  const toggleFavorite = (isFavorite: boolean, cardId: string) => {
    if (id) {
      if (isFavorite) {
        deletePlatformFromFavorites(id, cardId).then(() => reloadCardList());
      } else {
        addPlatformInFavorites(id, cardId).then(() => reloadCardList());
      }
    }
  };

  return (
    <div className={styles.platformList}>
      {platforms.map((platform) => (
        <PlatformCard
          platform={platform}
          isAuth={isAuth}
          key={platform.id}
          onlyFavorites={onlyFavorites}
          toggleFavorite={toggleFavorite}
        />
      ))}
    </div>
  );
};
