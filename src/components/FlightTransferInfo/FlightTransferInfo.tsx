import { Leg } from '../../models/flights';
import { FlightDuration } from '../FlightDuration';
import styles from './FlightTransferInfo.module.css';

interface IFlightTransferInfoProps {
  leg: Leg;
}

export function FlightTransferInfo({ leg }: IFlightTransferInfoProps) {
  const departureCity = leg.segments[0].departureCity?.caption;
  const departureAirportObj = leg.segments[0].departureAirport;

  const arrivalCity = leg.segments[leg.segments.length - 1].arrivalCity?.caption;
  const arrivalAirportObj = leg.segments[leg.segments.length - 1].arrivalAirport;

  return (
    <div className={styles.transferInfo}>
      <div className={styles.transfer}>
        <div className={styles.transferLeft}>
          {departureCity && <span className={styles.transferCity}>{departureCity}, </span>}
          <span className={styles.transferAirport}>{departureAirportObj.caption} </span>
          <span className={styles.transferAirportUid}>({departureAirportObj.uid})</span>
        </div>
        <div className={styles.legArrow}>→</div>
        <div className={styles.transferRight}>
          {arrivalCity && <span className={styles.transferCity}>{arrivalCity}, </span>}
          <span className={styles.transferAirport}>{arrivalAirportObj.caption} </span>
          <span className={styles.transferAirportUid}>({arrivalAirportObj.uid})</span>
        </div>
      </div>

      <FlightDuration segments={leg.segments} durationMins={leg.duration} />
    </div>
  );
}
