import jsonData from '../json/flights.json';
import { Flight, Flight2, Root } from '../models/flights';
import aircompanyStorageService from './aircompanyStorage.service';
import filterFlightsService from './filterFlights.service';
import { ObserverService } from './observer.service';

const flightsResult = jsonData as Root;

class FlightService extends ObserverService {
  public flights: Flight2[] = [];
  public limit = 10;
  public offset = 0;

  public getFlights(): Flight2[] {
    const flights = this.allFlights.map((flight) => flight.flight);

    const sortedFlights = filterFlightsService.filterFlights(flights);
    const slicedFlights = sortedFlights.slice(0, this.offset + this.limit);

    aircompanyStorageService.buildAirlinesStorage(slicedFlights);

    this.flights.push(...slicedFlights);
    this.offset += this.limit;

    this.notify();

    return this.flights;
  }

  public updateFlightsWithFilter(): void {
    const flights = this.allFlights.map((flight) => flight.flight);

    const sortedFlights = filterFlightsService.filterFlights(flights);
    const slicedFlights = sortedFlights.slice(0, this.offset + this.limit);

    aircompanyStorageService.buildAirlinesStorage(slicedFlights);

    this.flights = slicedFlights;
    this.notify();
  }

  private allFlights: Flight[] = flightsResult.result.flights;
}

const flightService = new FlightService();

export default flightService;
