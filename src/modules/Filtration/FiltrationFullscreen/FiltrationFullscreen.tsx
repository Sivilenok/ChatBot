import { useState } from 'react';

import { ArrowDownIcon, ArrowUpIcon, DescriptionIcon } from 'assets';

import { filterOptionsAll, IFilterAll, INPUTTYPE } from 'mocks';

import { toggleFilter, useAppDispatch } from 'store';

import styles from './styles.module.scss';
import { InputFilter } from './InputFilter/InputFilter';

import { SyntheticEvent } from '../types';
import { ButtonOpen } from '../ButtonOpen/ButtonOpen';
import { ButtonHide } from '../ButtonHide/ButtonHide';
import { List } from '../List/List';

export const FiltrationFullscreen = () => {
  const [openedFilters, setOpenedFilters] = useState<Array<string>>([]);
  const [openedFullFilters, setOpenedFullFilters] = useState<Array<string>>([]);
  const dispatch = useAppDispatch();

  const isOpened = (id: string): boolean => openedFilters.includes(id);
  const isFullOpened = (id: string): boolean => openedFullFilters.includes(id);

  const toggleFullOpen = ({ currentTarget: { id } }: SyntheticEvent<HTMLButtonElement>) =>
    isFullOpened(id)
      ? setOpenedFullFilters(openedFullFilters.filter((item) => item !== id))
      : setOpenedFullFilters([...openedFullFilters, id]);

  const toggleOpen = ({ currentTarget: { id } }: SyntheticEvent<HTMLButtonElement>) =>
    isOpened(id)
      ? setOpenedFilters(openedFilters.filter((item) => item !== id))
      : setOpenedFilters([...openedFilters, id]);

  return (
    <form>
      <h4>Все фильтры</h4>
      <div className={styles.wrapper}>
        {filterOptionsAll.map((column, i) => (
          <div className={styles.column} key={`column + ${i}`}>
            {column.map((filterGroup: IFilterAll) => (
              <div className={styles.filterGroup} key={filterGroup.group}>
                <h6 className={styles.groupName}>{filterGroup.group}</h6>
                {filterGroup.filters.map((filter, ind) => (
                  <div key={`Input1 ${ind}`}>
                    {(filter.type === INPUTTYPE.TEXT || filter.type === INPUTTYPE.NUMBER) && (
                      <InputFilter filter={filter} />
                    )}
                    <div className={styles.groupItem}>
                      {filter.type !== INPUTTYPE.TEXT && filter.type !== INPUTTYPE.NUMBER && (
                        <button type="button" className={styles.filterName} id={filter.id} onClick={toggleOpen}>
                          {isOpened(filter.id) ? <ArrowUpIcon /> : <ArrowDownIcon />}
                          <span className={styles.filterNameText}>{filter.title}</span>
                          {filter.description && <DescriptionIcon />}
                        </button>
                      )}
                      {isOpened(filter.id) && (
                        <div className={styles.filterOptions}>
                          <ul className={styles.filterOptions}>
                            {filter.options.map(
                              (option, index) =>
                                (isFullOpened(filter.id) || index <= 4) && (
                                  <List filter={filter} option={option} index={index} key={`FullList ${index}`} />
                                ),
                            )}
                          </ul>
                          {filter.options.length > 5 && !isFullOpened(filter.id) && (
                            <ButtonOpen count={filter.options.length - 5} id={filter.id} onClick={toggleFullOpen} />
                          )}
                          {filter.options.length > 5 && isFullOpened(filter.id) && (
                            <ButtonHide id={filter.id} onClick={toggleFullOpen} />
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className={styles.buttonWrapper}>
        <button
          className="button buttonSecondary"
          type="button"
          onClick={() => {
            dispatch(toggleFilter());
            window.scrollTo(0, 0);
          }}
        >
          Показать платформы
        </button>
      </div>
    </form>
  );
};
