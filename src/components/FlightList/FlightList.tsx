import { useEffect } from 'react';
import flightService from '../../services/flights.service';
import styles from './FlightList.module.css';
import { useObserverService } from '../../hooks/useObserverService';
import { FlightItem } from '../FlightItem';

export function FlightList() {
  useObserverService(flightService);

  const flights = flightService.flights;

  useEffect(() => {
    flightService.getFlights();
  }, []);

  return (
    <div className={styles.flightList}>
      {flights.map((flight, i) => (
        <FlightItem flight={flight} key={i} />
      ))}
    </div>
  );
}
