import { useId } from 'react';
import { Input } from '../../../controls/Input';
import filterStyles from '../Filters.module.css';
import styles from './PriceFilter.module.css';
import { FILTER_NAME_PRICE_MAX, FILTER_NAME_PRICE_MIN } from '../../../constants/filters';
import filterFlightsService from '../../../services/filterFlights.service';

export function PriceFilter() {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    filterFlightsService.changeFilter(e.target.name, e.target.value);
  };

  const fromId = useId();
  const toId = useId();

  return (
    <div className={filterStyles.filter}>
      <div className={filterStyles.title}>Сортировать</div>
      <div className={styles.filters}>
        <div className={styles.filter}>
          <label htmlFor={fromId}>От</label>
          <Input id={fromId} onChange={onChange} name={FILTER_NAME_PRICE_MIN} />
        </div>
        <div className={styles.filter}>
          <label htmlFor={toId}>До</label>
          <Input id={toId} onChange={onChange} name={FILTER_NAME_PRICE_MAX} />
        </div>
      </div>
    </div>
  );
}
