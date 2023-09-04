import classNames from 'classnames';
import { Leg } from '../../models/flights';
import styles from './FlightLeg.module.css';
import { FlightDuration } from '../FlightDuration';
import { FlightOperating } from '../FlightOperating';

interface IFlightLegProps {
  leg: Leg;
}

export function FlightLeg({ leg }: IFlightLegProps) {
  const departureCity = leg.segments[0].departureCity?.caption;
  const departureAirport = leg.segments[0].departureAirport;

  const arrivalCity = leg.segments[leg.segments.length - 1].arrivalCity?.caption;
  const arrivalAirport = leg.segments[leg.segments.length - 1].arrivalAirport;

  return (
    <div className={styles.leg}>
      <div className={styles.transfer}>
        <div className={classNames(styles.transferInfo, styles.transferLeft)}>
          {departureCity && <span className={styles.transferCity}>{departureCity}, </span>}
          <span className={styles.transferAirport}>{departureAirport.caption} </span>
          <span className={styles.transferAirportUid}>({departureAirport.uid})</span>
        </div>
        <div className={styles.legArrow}>→</div>
        <div className={classNames(styles.transferInfo, styles.transferRight)}>
          {arrivalCity && <span className={styles.transferCity}>{arrivalCity}, </span>}
          <span className={styles.transferAirport}>{arrivalAirport.caption} </span>
          <span className={styles.transferAirportUid}>({arrivalAirport.uid})</span>
        </div>
      </div>

      <FlightDuration segments={leg.segments} durationMins={leg.duration} />
      <FlightOperating segments={leg.segments} />
    </div>
  );
}
