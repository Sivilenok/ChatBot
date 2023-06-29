import { StarEmptyIcon, StarIcon } from 'assets';
import React from 'react';
import { IReviewCard } from 'store/types';

import styles from './styles.module.scss';

export const Review = ({ name, rating, text }: IReviewCard) => {
  const ratingStars: Array<React.ReactElement> = [];
  const currentRating = +rating;
  const maxRating = 5;
  if (maxRating >= currentRating) {
    for (let i = 1; i <= currentRating; i++) {
      ratingStars.push(<StarIcon key={i} />);
    }
    for (let i = currentRating + 1; i <= maxRating; i++) {
      ratingStars.push(<StarEmptyIcon key={i} />);
    }
  }

  return (
    <div className={styles.review}>
      <div className={styles.rating}>{ratingStars}</div>
      <p className={styles.text}>{text}</p>
      <p className={styles.name}>{name}</p>
    </div>
  );
};
