import { useEffect } from 'react';
import flightService from '../../services/flights.service';
import { Button } from '../../controls/Button';
import styles from './FlightList.module.css';
import { useObserverService } from '../../hooks/useObserverService';
import { FlightItem } from '../FlightItem';
import { ErrorBoundary } from '../ErrorBoundary';

export function FlightList() {
  useObserverService(flightService);

  const flights = flightService.flights;
  const hasMoreFlights = flightService.hasMoreFlights;

  const handleClickMoreFlightsBtn = () => {
    void flightService.getFlights();
  };

  useEffect(() => {
    void flightService.getFlights();

    return () => {
      void flightService.clearService();
    };
  }, []);

  if (!flights.length) return <div className={styles.flightList}>По данным фильтрам, полёты отсутствуют</div>;

  return (
    <div className={styles.flightList}>
      <ErrorBoundary>
        {flights.map((flight, i) => (
          <FlightItem flight={flight} key={i} />
        ))}

        {hasMoreFlights && (
          <Button className={styles.moreFlightsBtn} onClick={handleClickMoreFlightsBtn}>
            Показать ещё
          </Button>
        )}
      </ErrorBoundary>
    </div>
  );
}
