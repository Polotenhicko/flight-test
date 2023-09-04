import { CURRENCY_SYMBOLS } from '../../constants/currency';
import { Flight2 } from '../../models/flights';
import { FlightLeg } from '../FlightLeg';
import styles from './FlightItem.module.css';

interface IFlightItemProps {
  flight: Flight2;
}

export function FlightItem({ flight }: IFlightItemProps) {
  const currency = flight.price.total.currencyCode as 'RUB' | 'USD';
  const currencySymbol = CURRENCY_SYMBOLS[currency];

  return (
    <div className={styles.flight}>
      <div className={styles.banner}>
        <img src="" alt={`BANNER: ${flight.carrier.caption}`} />
        <div className={styles.priceWrap}>
          <div className={styles.price}>
            {flight.price.total.amount} {currencySymbol}.
          </div>
          <div>Стоимость одного взрослого пассажира</div>
        </div>
      </div>

      <div className={styles.legs}>
        {flight.legs.map((leg, i) => (
          <FlightLeg leg={leg} key={i} />
        ))}
      </div>
    </div>
  );
}
