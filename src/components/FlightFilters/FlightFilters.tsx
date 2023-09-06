import { ErrorBoundary } from '../ErrorBoundary';
import { AircompanyFilter, FlagFilter, PriceFilter, SortFilter } from '../Filters';
import styles from './FlightFilters.module.css';

export function FlightFilters() {
  return (
    <div className={styles.flightFilters}>
      <ErrorBoundary>
        <SortFilter />
        <FlagFilter />
        <PriceFilter />
        <AircompanyFilter />
      </ErrorBoundary>
    </div>
  );
}
