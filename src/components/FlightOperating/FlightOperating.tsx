import { Segment } from '../../models/flights';
import styles from './FlightOperating.module.css';

interface IFlightOperatingProps {
  segments: Segment[];
}

export function FlightOperating({ segments }: IFlightOperatingProps) {
  const segmentWithOperatingAirline = segments.find((segment) => segment.operatingAirline);
  const carrierAirlineCaption = segments[0].airline.caption;

  // берём operatingAirline если есть
  // иначе carrier
  const operatingAirlineCaption = segmentWithOperatingAirline
    ? segmentWithOperatingAirline.operatingAirline?.caption
    : carrierAirlineCaption;

  return <div className={styles.operating}>Рейс выполняет: {operatingAirlineCaption}</div>;
}
