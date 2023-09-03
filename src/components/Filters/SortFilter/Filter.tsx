import { useId } from 'react';
import { RadioButton } from '../../../controls/RadioButton';
import styles from './SortFilter.module.css';

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
      <RadioButton id={id} name={name} value={value} onChange={onChange} />
      <label htmlFor={id}>{text}</label>
    </div>
  );
}
