import { useEffect, useState } from 'react';

import styles from './styles.module.scss';

export const Loading = ({ delay = 0 }: { delay: number }) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // отложенное отображение loader
    const timeout = setTimeout(() => {
      setIsActive(true);
    }, delay);
    return () => clearTimeout(timeout);
  }, [delay]);

  return isActive ? (
    <div className={styles.loading}>
      <div className={styles.spinner} />
    </div>
  ) : null;
};
