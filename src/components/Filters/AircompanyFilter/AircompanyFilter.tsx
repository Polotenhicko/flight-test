import { CURRENCY_SYMBOL_RUB } from '../../../constants/currency';
import { FILTER_NAME_AIRCOMPANY } from '../../../constants/filters';
import { useObserverService } from '../../../hooks/useObserverService';
import aircompanyStorageService from '../../../services/aircompanyStorage.service';
import filterFlightsService from '../../../services/filterFlights.service';
import filterStyles from '../Filters.module.css';
import styles from './AircompanyFilter.module.css';
import { Filter } from './Filter';

export function AircompanyFilter() {
  useObserverService(aircompanyStorageService);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    filterFlightsService.changeFilter(FILTER_NAME_AIRCOMPANY, {
      flag: e.target.value,
      checked: e.target.checked,
    });
  };

  const aircompanysStorage = aircompanyStorageService.airlinesStorage;
  const hasAnyAircompanyFilter = aircompanysStorage ? !!Object.keys(aircompanysStorage).length : false;

  if (!hasAnyAircompanyFilter) return null;

  return (
    <div className={filterStyles.filter}>
      <div className={filterStyles.title}>Авиакомпании</div>
      <div className={styles.filters}>
        {aircompanysStorage &&
          Object.entries(aircompanysStorage).map(([airlineCode, aircompanyObj]) => (
            <Filter
              name="air"
              aircompany={aircompanyObj.caption}
              price={aircompanyObj.min}
              currency={aircompanyObj.currency}
              value={airlineCode}
              key={airlineCode}
              onChange={onChange}
            />
          ))}
      </div>
    </div>
  );
}
