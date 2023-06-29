import { SolutionCard } from 'components/SolutionCard/SolutionCard';
import { getPlatform, useAppSelector } from 'store';

import styles from './styles.module.scss';

export const SolutionList = () => {
  const platform = useAppSelector(getPlatform);

  return (
    <div className={styles.solutionList}>
      {platform.solutions.map((item) => (
        <SolutionCard
          isAuth={false}
          key={`review${item.id}`}
          title={item.title}
          picture={item.picture}
          text={item.text}
          id={item.id}
          isFavorite={false}
          link={item.link}
          price={item.price}
        />
      ))}
    </div>
  );
};
