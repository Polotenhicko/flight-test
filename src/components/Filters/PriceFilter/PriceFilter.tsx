import { useId } from 'react';
import { Input } from '../../../controls/Input';
import filterStyles from '../Filters.module.css';
import styles from './PriceFilter.module.css';

export function PriceFilter() {
  const onChange = (e: any) => console.log(e.target.value);

  const fromId = useId();
  const toId = useId();

  return (
    <div className={filterStyles.filter}>
      <div className={filterStyles.title}>Сортировать</div>
      <div className={styles.filters}>
        <div className={styles.filter}>
          <label htmlFor={fromId}>От</label>
          <Input id={fromId} onChange={onChange} />
        </div>
        <div className={styles.filter}>
          <label htmlFor={toId}>До</label>
          <Input id={toId} onChange={onChange} />
        </div>
      </div>
    </div>
  );
}
