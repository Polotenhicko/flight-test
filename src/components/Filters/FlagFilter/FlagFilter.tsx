import styles from './FlagFilter.module.css';
import filterStyles from '../Filters.module.css';
import { FLAG_FILTER_TEXT_BY_FILTER } from '../../../constants/filters';
import { Filter } from './Filter';
import filterFlightsService from '../../../services/filterFlights.service';

export function FlagFilter() {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    filterFlightsService.changeFilter('flags', e.target.value);
  };

  return (
    <div className={filterStyles.filter}>
      <div className={filterStyles.title}>Фильтровать</div>
      <div className={styles.filters}>
        {Object.entries(FLAG_FILTER_TEXT_BY_FILTER).map(([filter, text], i) => (
          <Filter name="flag" text={text} value={filter} key={i} onChange={onChange} />
        ))}
      </div>
    </div>
  );
}
