import { filterOptions, IFilter, INPUTTYPE } from 'mocks';
import { useState } from 'react';
import { toggleFilter, useAppDispatch } from 'store';
import { DescriptionIcon } from 'assets';

import { InputFilter } from './InputFilter/InputFilter';
import styles from './styles.module.scss';

import { ButtonHide } from '../ButtonHide/ButtonHide';
import { ButtonOpen } from '../ButtonOpen/ButtonOpen';
import { SyntheticEvent } from '../types';
import { List } from '../List/List';

export const FiltrationBar = () => {
  const [openedFilters, setOpendFilters] = useState<string[]>([]);
  const dispatch = useAppDispatch();
  const isOpened = (id: string): boolean => openedFilters.includes(id);

  const toggleOpen = ({ currentTarget: { id } }: SyntheticEvent<HTMLButtonElement>) =>
    isOpened(id)
      ? setOpendFilters(openedFilters.filter((item) => item !== id))
      : setOpendFilters([...openedFilters, id]);

  const countOfOptions = (id: string) => filterOptions.filter((item) => item.id === id)[0]?.options?.length;

  return (
    <form className={styles.wrapper}>
      {filterOptions.map((filter: IFilter, i) => (
        <div className={styles.filterGroup} key={i}>
          {filter.title && (
            <h6 className={styles.filterName}>
              {filter.title}
              {filter.description && <DescriptionIcon />}
            </h6>
          )}
          {(filter.type === INPUTTYPE.TEXT || filter.type === INPUTTYPE.NUMBER) && <InputFilter filter={filter} />}

          <ul className={styles.filterOptions}>
            {filter.options.map(
              (option, index) =>
                (isOpened(filter.id) || index <= 4) && (
                  <List filter={filter} option={option} index={index} key={`List ${index}`} />
                ),
            )}
          </ul>
          {filter.options.length > 5 && isOpened(filter.id) && <ButtonHide id={filter.id} onClick={toggleOpen} />}
          {countOfOptions(filter.id) > 5 && !isOpened(filter.id) && (
            <ButtonOpen count={countOfOptions(filter.id) - 5} id={filter.id} onClick={toggleOpen} />
          )}
        </div>
      ))}

      <button
        className="button buttonSecondary"
        type="button"
        onClick={() => {
          dispatch(toggleFilter());
          window.scrollTo(0, 0);
        }}
      >
        Все фильтры
      </button>
    </form>
  );
};
