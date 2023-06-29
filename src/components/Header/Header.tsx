import { useWindowSize } from 'hooks';
import { Link } from 'react-router-dom';
import { getCurrentLanguage } from 'store/selectors/languageSelector';
import { ROUTE } from 'router';
import { useState } from 'react';
import { logoIcon, phoneIcon, ProfileIcon, StarIcon } from 'assets';
import { BurgerMenu, MenuNav, Profile } from 'components';
import { changeLanguage, getUser, LANGUAGES, logout, useAppDispatch, useAppSelector } from 'store';

import styles from './styles.module.scss';

export const Header = () => {
  const { width } = useWindowSize();
  const { isAuth } = useAppSelector(getUser);

  const dispatch = useAppDispatch();
  const selectedLanguage = useAppSelector(getCurrentLanguage);
  const [isOpenProfile, setIsOpenProfile] = useState<boolean>(false);
  const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(changeLanguage(event.target.value));
  };
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header className={`${styles.header} containerWrapper`}>
      {width && width <= 768 ? (
        <div className={styles.header__wrapper}>
          <Link to={ROUTE.HOME}>
            <img src={logoIcon} className={styles.logo} alt="Townsend logo" />
          </Link>
          <BurgerMenu />
        </div>
      ) : (
        <>
          <div className={styles.subheader}>
            <div className={styles.phoneWrapper}>
              <img src={phoneIcon} alt="Phone logo" />
              <p>+375(29) 874-59-80</p>
            </div>
            {!isAuth ? (
              <div className={styles.linkWrapper}>
                <div className={styles.dropdown}>
                  <select className={styles.lang} defaultValue={selectedLanguage} onChange={handleLanguageChange}>
                    <option value={LANGUAGES.RU}>{LANGUAGES.RU}</option>
                    <option value={LANGUAGES.EN}>{LANGUAGES.EN}</option>
                  </select>
                </div>
                <Link to={ROUTE.SIGN_IN} className={styles.signIn} type="button">
                  Вход
                </Link>
                <Link to={ROUTE.SIGN_UP} className={styles.signUp} type="button">
                  Регистрация
                </Link>
              </div>
            ) : (
              <div className={styles.linkWrapper}>
                <div className={styles.dropdown}>
                  <select className={styles.lang} defaultValue={selectedLanguage} onChange={handleLanguageChange}>
                    <option value={LANGUAGES.RU}>{LANGUAGES.RU}</option>
                    <option value={LANGUAGES.EN}>{LANGUAGES.EN}</option>
                  </select>
                </div>
                <Link to={`${ROUTE.PROFILE}/${ROUTE.PROFILE_FAVORITES}`} className={styles.signUp} type="button">
                  <StarIcon className={styles.star} /> Избранное
                </Link>
                <div className={styles.signUp} onClick={() => setIsOpenProfile((prev) => !prev)}>
                  <ProfileIcon />
                  Кабинет
                  {isAuth && isOpenProfile && <Profile onLogout={handleLogout} />}
                </div>
              </div>
            )}
          </div>
          <MenuNav />
        </>
      )}
    </header>
  );
};
