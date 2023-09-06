import { DEFAULT_LIMIT, DEFAULT_OFFSET } from '../constants/flightsStorage';
import jsonData from '../json/flights.json';
import { Flight2, Root } from '../models/flights';
import aircompanyStorageService from './aircompanyStorage.service';
import filterFlightsService from './filterFlights.service';
import { ObserverService } from './observer.service';

const flightsResult = jsonData as Root;

class FlightService extends ObserverService {
  public flights: Flight2[] = [];
  public limit = DEFAULT_LIMIT;
  public offset = DEFAULT_OFFSET;
  public hasMoreFlights = false;

  public getFlights(): Flight2[] {
    const flights = this.allFlights;

    const sortedFlights = filterFlightsService.filterFlights(flights);
    const slicedFlights = sortedFlights.slice(0, this.offset + this.limit);

    void this.checkHasMoreFlights(sortedFlights, slicedFlights);
    void aircompanyStorageService.buildAirlinesStorage(slicedFlights);

    this.flights = slicedFlights;
    this.offset += this.limit;

    void this.notify();

    return this.flights;
  }

  public updateFlightsWithFilter(): void {
    const flights = this.allFlights;

    const sortedFlights = filterFlightsService.filterFlights(flights);
    const slicedFlights = sortedFlights.slice(0, this.offset + this.limit);

    void this.checkHasMoreFlights(sortedFlights, slicedFlights);
    void aircompanyStorageService.buildAirlinesStorage(slicedFlights);

    this.flights = slicedFlights;
    void this.notify();
  }

  public clearService(): void {
    this.limit = DEFAULT_LIMIT;
    this.offset = DEFAULT_OFFSET;
    this.hasMoreFlights = false;

    this.flights = [];
    void aircompanyStorageService.buildAirlinesStorage(this.flights);
  }

  public checkHasMoreFlights(sortedFlights: Flight2[], slicedFlights: Flight2[]): boolean {
    const sortedLength = sortedFlights.length;
    const slicedLength = slicedFlights.length;

    const hasMoreFlights = sortedLength > slicedLength;
    this.hasMoreFlights = hasMoreFlights;

    return hasMoreFlights;
  }

  private allFlights: Flight2[] = flightsResult.result.flights.map((flight) => flight.flight);
}

const flightService = new FlightService();

export default flightService;
