import { useId, useState } from 'react';
import { Input } from '../../../controls/Input';
import filterStyles from '../Filters.module.css';
import styles from './PriceFilter.module.css';
import { FILTER_NAME_PRICE_MAX, FILTER_NAME_PRICE_MIN } from '../../../constants/filters';
import filterFlightsService from '../../../services/filterFlights.service';

export function PriceFilter() {
  const [minPriceText, setMinPriceText] = useState('');
  const [maxPriceText, setMaxPriceText] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const name = e.target.name;

    const isNumberPrice = value.split('').every((letter) => letter >= '0' && letter <= '9');

    if (isNumberPrice) {
      if (name === FILTER_NAME_PRICE_MIN) {
        setMinPriceText(value);
      } else if (name === FILTER_NAME_PRICE_MAX) {
        setMaxPriceText(value);
      } else {
        return;
      }

      filterFlightsService.changeFilter(name, value);
    }
  };

  const fromId = useId();
  const toId = useId();

  return (
    <div className={filterStyles.filter}>
      <div className={filterStyles.title}>Сортировать</div>
      <div className={styles.filters}>
        <div className={styles.filter}>
          <label htmlFor={fromId}>От</label>
          <Input id={fromId} value={minPriceText} onChange={onChange} name={FILTER_NAME_PRICE_MIN} />
        </div>
        <div className={styles.filter}>
          <label htmlFor={toId}>До</label>
          <Input id={toId} value={maxPriceText} onChange={onChange} name={FILTER_NAME_PRICE_MAX} />
        </div>
      </div>
    </div>
  );
}
