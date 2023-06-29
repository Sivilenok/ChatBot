import { Dispatch, ReactElement, SetStateAction } from 'react';

import { Portal } from 'components';

import { TargetPortal } from 'shared';

import styles from './styles.module.scss';

import buttonStyle from '../../styles/button.style.module.scss';

interface IModal {
  setActive: Dispatch<SetStateAction<boolean>>;
  handleclick: () => void;
  children: ReactElement;
}

export const Modal = ({ setActive, handleclick, children }: IModal) => (
  <Portal target={TargetPortal.MODAL}>
    <div className={styles.modal} onClick={() => setActive(false)}>
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        {children}
        <div>
          <button className={buttonStyle.button} onClick={() => setActive(false)} type="button">
            Отмена
          </button>
          <button className={buttonStyle.buttonDark} onClick={handleclick} type="button">
            Удалить
          </button>
        </div>
      </div>
    </div>
  </Portal>
);
