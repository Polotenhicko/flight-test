import { useId } from 'react';
import styles from './AircompanyFilter.module.css';
import { Checkbox } from '../../../controls/Checkbox';
import { CURRENCY_SYMBOLS } from '../../../constants/currency';

interface IFilterProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  price: number;
  currency: string;
  aircompany: string;
  value?: string;
}

export function Filter({ onChange, name, value, price, aircompany, currency, ...rest }: IFilterProps) {
  const id = useId();

  return (
    <div className={styles.filter}>
      <Checkbox id={id} name={name} value={value} onChange={onChange} {...rest} />
      <label htmlFor={id}>
        <div> - {aircompany}</div>
        <div>от {`${price} ${currency}.`}</div>
      </label>
    </div>
  );
}
