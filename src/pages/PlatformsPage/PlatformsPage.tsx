import {
  useAppSelector,
  useAppDispatch,
  getPlatforms,
  getIsFilterFullscreen,
  getCountOfPlatforms,
  getIsLoaderVisible,
} from 'store';
import { PlatformList, Pagination, Sort } from 'components';
import { FiltrationBar, FiltrationFullscreen } from 'modules';
import { useEffect } from 'react';
import { setPlatformsAction } from 'store/actions';
import { useSearchParams } from 'react-router-dom';
import { Loading } from 'components/Loading/Loading';

import styles from './styles.module.scss';

const ELEMENTS_FOR_PAGE = 24;

export const PlatformsPage = () => {
  const isFilterFullscreen = useAppSelector(getIsFilterFullscreen);
  const platforms = useAppSelector(getPlatforms);
  const isLoaderVisible = useAppSelector(getIsLoaderVisible);
  const countOfPlatforms = useAppSelector(getCountOfPlatforms);
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = searchParams.get('page') || '1';
  const totalPages = Math.ceil(+countOfPlatforms / ELEMENTS_FOR_PAGE) || 1; // будет рассчитываться на бэке, попросил внести изменения

  const handlePageChange = (pageNumber: number) => {
    setSearchParams(`page=${pageNumber}`);
    window.scrollTo(0, 0);
  };

  const reloadCardList = () =>
  dispatch(
    setPlatformsAction({
      amount: currentPage,
      count: ELEMENTS_FOR_PAGE.toString(),
      sortKey: "name",
      sortDirection: "asc",
    })
  );

  useEffect(() => {
    // проверка на то, что значение текущей страницы является числом  больше или равно 1 (при вводе номера страницы вручную в URL)
    if (!Number.isNaN(+currentPage) && +currentPage >= 1) {
      reloadCardList();
    } else {
      setSearchParams(`page=1`);
    } // eslint-disable-next-line
  }, [currentPage]);

  // проверка на то, что значение текущей страницы в пределах от 1 до максимального в соответствии с пагинацией (при вводе номера страницы вручную в URL)
  useEffect(() => {
    if (totalPages !== 1 && +currentPage > totalPages) {
      setSearchParams(`page=1`);
    } // eslint-disable-next-line
  }, [countOfPlatforms]);

  return (
    <section className={styles.section}>
      <div className={styles.contentWrapper}>
        {isFilterFullscreen ? (
          <FiltrationFullscreen />
        ) : (
          <div className={styles.wrapper}>
            <h4>Платформы</h4>
            <p>
              Платформа это конструктор чат-ботов, который помогает бизнесу автоматизировать процесс коммуникации с
              клиентами по продуманному сценарию. С помощью чат-бота можно отправлять новости, напоминания или
              обновления, обрабатывать заказы, обеспечивать поддержку клиентов круглосуточно и многое другое.
            </p>
            <Sort />
            <div className={styles.content}>
              <FiltrationBar />
              <div className={styles.cardsWrapper}>
                {!isLoaderVisible ? (
                  <>
                    <PlatformList platforms={platforms} reloadCardList={reloadCardList} />
                    {totalPages > 1 && (
                      <Pagination
                        currentPage={Number(currentPage)}
                        totalPages={totalPages}
                        onPageChange={handlePageChange}
                      />
                    )}
                  </>
                ) : (
                  <Loading delay={500} />
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
