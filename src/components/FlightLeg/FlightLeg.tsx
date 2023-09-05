import { Leg } from '../../models/flights';
import styles from './FlightLeg.module.css';
import { FlightOperating } from '../FlightOperating';
import { FlightTransferInfo } from '../FlightTransferInfo';

interface IFlightLegProps {
  leg: Leg;
}

export function FlightLeg({ leg }: IFlightLegProps) {
  return (
    <div className={styles.leg}>
      <FlightTransferInfo leg={leg} />
      <FlightOperating segments={leg.segments} />
    </div>
  );
}
