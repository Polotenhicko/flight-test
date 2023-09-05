import { Segment } from '../../models/flights';
import { ReactComponent as TimeSvg } from '../../assets/icons/time.svg';
import dateService from '../../services/date.service';
import styles from './FlightDuration.module.css';
import { getWordTransferWithCorrectSuffix } from '../../utils/suffix';

interface IFlightDirationProps {
  segments: Segment[];
  durationMins: number;
}

export function FlightDuration({ segments, durationMins }: IFlightDirationProps) {
  const hasTransfer = segments.length > 1;
  const countTransfer = segments.length - 1;
  const wordTransfer = getWordTransferWithCorrectSuffix(countTransfer);

  const departureDate = segments[0].departureDate;
  const arrivalDate = segments[segments.length - 1].arrivalDate;

  const departureTime = dateService.getShortTime(departureDate);
  const departureDateText = dateService.getShortDate(departureDate);

  const arrivalTime = dateService.getShortTime(arrivalDate);
  const arrivalDateText = dateService.getShortDate(arrivalDate);

  const duration = dateService.getDurationTime(durationMins);

  return (
    <div className={styles.duration}>
      <div className={styles.durationTimeWrap}>
        <div className={styles.departureDateWrap}>
          <div className={styles.departureTime}>{departureTime}</div>
          <div className={styles.departureDate}>{departureDateText}</div>
        </div>
        <div className={styles.durationTime}>
          <TimeSvg />
          {duration}
        </div>
        <div className={styles.arrivalDateWrap}>
          <div className={styles.arrivalDate}>{arrivalDateText}</div>
          <div className={styles.arrivalTime}>{arrivalTime}</div>
        </div>
      </div>
      <div className={styles.transferInfo}>
        {/* {segments[0].flightNumber + ' ' + durationMins} */}
        <hr />
        {hasTransfer && <div className={styles.transferCount}>{`${countTransfer} ${wordTransfer}`}</div>}
        <hr />
      </div>
    </div>
  );
}
