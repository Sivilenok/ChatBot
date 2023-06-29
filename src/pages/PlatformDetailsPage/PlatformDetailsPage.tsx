import { useEffect } from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { getFavoritePlatforms, getPlatform, getUser, setPlatform, useAppDispatch, useAppSelector } from 'store';

import { platformDetailsData } from 'mocks';

import { arrow_forwardLightIcon, arrow_forwardIcon, StarIcon } from 'assets';

import { SolutionList } from 'components';

import { ROUTE } from 'router';

import styles from './styles.module.scss';
import { navList } from './navList';
import { sliderSettings } from './sliderSettings';

export const PlatformDetailsPage = () => {
  const { platformId } = useParams();
  const { isAuth } = useAppSelector(getUser);
  const platform = useAppSelector(getPlatform);
  const favoritesPlatforms = useAppSelector(getFavoritePlatforms);
  const isFavorite = favoritesPlatforms.find((item) => item.id === platformId);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (platformId) {
      dispatch(setPlatform(platformDetailsData.find((item) => item.id === platformId)));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, platformId]);

  if (platform) {
    return (
      <div>
        {/* С навигацией это временное решение. Нужно будет переделать */}
        <nav className={styles.nav}>
          <NavLink
            to={ROUTE.HOME}
            className={({ isActive }) => (isActive ? `${styles.navItem} ${styles.activeTab}` : `${styles.navItem}`)}
          >
            Главная
          </NavLink>
          <NavLink
            to={ROUTE.PLATFORMS}
            className={({ isActive }) => (isActive ? `${styles.navItem} ${styles.activeTab}` : `${styles.navItem}`)}
          >
            <img src={arrow_forwardLightIcon} alt="Стрелка вперед" /> Платформы
          </NavLink>
          <NavLink
            to=""
            className={({ isActive }) => (isActive ? `${styles.navItem} ${styles.activeTab}` : `${styles.navItem}`)}
          >
            <img src={arrow_forwardIcon} alt="Стрелка вперед" />
            Платформа {platform.title}
          </NavLink>
        </nav>
        <div className={styles.wrapper}>
          <h2>Платформа {platform.title}</h2>
          <section className={styles.header}>
            <img className={styles.logo} src={platform.picture} alt="Логотип платформы" />
            <div>
              <p className={styles.text}>{platform.text}</p>
              {isAuth && (
                <button className={styles.favoriteButton} type="button">
                  Добавить в избранное <StarIcon className={!isFavorite ? styles.starEmpty : ''} />
                </button>
              )}
            </div>
          </section>
          <section>
            <ul className={styles.navInfo}>
              {navList.map((item, i) => (
                // eslint-disable-next-line react/no-array-index-key
                <li key={i}>
                  <NavLink to={`tab=${i + 1}`} className={({ isActive }) => (isActive ? `${styles.active}` : '')}>
                    {item}
                  </NavLink>
                </li>
              ))}
            </ul>
            <Outlet />
          </section>
          <section>
            <h5 className={styles.sectionHeader}>{`Предлагаем решения на базе "${platform.title}"`}</h5>
            <SolutionList />
          </section>
          <section>
            <h5 className={styles.sectionHeader}>Отзывы о платформе</h5>
            <Slider {...sliderSettings} />
          </section>
        </div>
      </div>
    );
  }
  return <div>{platformId}</div>;
};
