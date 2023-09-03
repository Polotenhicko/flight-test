import { CURRENCY_SYMBOL_RUB } from '../../../constants/currency';
import filterStyles from '../Filters.module.css';
import styles from './AircompanyFilter.module.css';
import { Filter } from './Filter';

interface IAircompanyWithMinPrice {
  [uid: string]: {
    title: string;
    min: number;
    currency: string;
  };
}

const aircompanyWithMinPrice: IAircompanyWithMinPrice = {
  LO: {
    title: 'LOT Polish Airlines',
    min: 21049,
    currency: CURRENCY_SYMBOL_RUB,
  },
  SU: {
    title: 'Аэрофлот - российские авиалинии',
    min: 31733,
    currency: CURRENCY_SYMBOL_RUB,
  },
};

export function AircompanyFilter() {
  const onChange = (e: any) => console.log(e.target.value, e.target.checked);

  return (
    <div className={filterStyles.filter}>
      <div className={filterStyles.title}>Авиакомпании</div>
      <div className={styles.filters}>
        {Object.entries(aircompanyWithMinPrice).map(([uid, aircompanyObj]) => (
          <Filter
            name="air"
            aircompany={aircompanyObj.title}
            price={aircompanyObj.min}
            currency={aircompanyObj.currency}
            value={uid}
            key={uid}
            onChange={onChange}
          />
        ))}
      </div>
    </div>
  );
}
