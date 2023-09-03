import { AircompanyFilter, FlagFilter, PriceFilter, SortFilter } from '../Filters';
import styles from './FlightFilters.module.css';

export function FlightFilters() {
  return (
    <div className={styles.flightFilters}>
      <SortFilter />
      <FlagFilter />
      <PriceFilter />
      <AircompanyFilter />
    </div>
  );
}
