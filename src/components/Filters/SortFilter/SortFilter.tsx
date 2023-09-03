import filterStyles from '../Filters.module.css';
import styles from './SortFilter.module.css';
import { SORT_FILTER_TEXT_BY_FILTER } from '../../../constants/filters';
import { Filter } from './Filter';

export function SortFilter() {
  const onChange = (e: any) => console.log(e.target.value);

  return (
    <div className={filterStyles.filter}>
      <div className={filterStyles.title}>Сортировать</div>
      <div className={styles.filters}>
        {Object.entries(SORT_FILTER_TEXT_BY_FILTER).map(([filter, text], i) => (
          <Filter name="sort" text={text} value={filter} key={i} onChange={onChange} />
        ))}
      </div>
    </div>
  );
}
