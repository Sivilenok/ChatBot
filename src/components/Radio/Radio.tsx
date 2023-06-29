import styles from './styles.module.scss';

interface IRadio extends React.InputHTMLAttributes<HTMLInputElement> {
  text: string;
}

export const Radio = ({ text, id, name, ...other }: IRadio) => (
  <li>
    <label htmlFor={id} className={styles.label}>
      <input className={styles.input} id={id} type="radio" name={name} {...other} />
      <span className={styles.span}>{text}</span>
    </label>
  </li>
);
