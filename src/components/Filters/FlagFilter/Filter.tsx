import { useId } from 'react';
import styles from './FlagFilter.module.css';
import { Checkbox } from '../../../controls/Checkbox';

interface IFilterProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  value?: string;
  text?: string;
}

export function Filter({ onChange, name, value, text }: IFilterProps) {
  const id = useId();

  return (
    <div className={styles.filter}>
      <Checkbox id={id} name={name} value={value} onChange={onChange} />
      <label htmlFor={id}>{text}</label>
    </div>
  );
}
