import jsonData from '../json/flights.json';
import { Flight, Flight2, Root } from '../models/flights';
import { ObserverService } from './observer.service';

const flightsResult = jsonData as Root;

class FlightService extends ObserverService {
  public flights: Flight2[] = [];
  public limit = Infinity;
  public offset = 0;

  public getFlights() {
    const slicedFlights = this.allFlights.slice(this.offset, this.limit).map((flight) => flight.flight);

    this.flights.push(...slicedFlights);
    this.offset += this.limit;

    this.notify();

    return slicedFlights;
  }

  private allFlights: Flight[] = flightsResult.result.flights;
}

const flightService = new FlightService();

export default flightService;
