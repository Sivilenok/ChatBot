import { MenuListType } from 'modules/Admin/config';

import styles from './styles.module.scss';

import { DashboardBlock } from '../DashboardBlock/DashboardBlock';

interface IProps {
  menu: MenuListType[];
}

export const DashboardList = ({ menu }: IProps) => (
  <ul className={styles.list}>
    {menu.map((item) => (
      <DashboardBlock key={item.id} link={item.url} title={item.text} />
    ))}
  </ul>
);
