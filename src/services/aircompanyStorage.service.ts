import { Flight2 } from '../models/flights';
import { ObserverService } from './observer.service';

interface IAirlines {
  [airlineCode: string]: {
    caption: string;
    min: number;
    currency: string;
  };
}

class AircompanyStorageService extends ObserverService {
  public airlinesStorage: IAirlines | undefined = {};

  public buildAirlinesStorage(flights: Flight2[]): void {
    if (!this.airlinesStorage) this.airlinesStorage = {};

    for (const flight of flights) {
      const currentAirlineCode = flight.carrier.airlineCode;
      const currentAirline = this.airlinesStorage[currentAirlineCode];

      const flightPrice = Number(flight.price.total.amount);

      if (currentAirline) {
        if (flightPrice < currentAirline.min) {
          currentAirline.min = flightPrice;
        }
      } else {
        this.airlinesStorage[currentAirlineCode] = {
          caption: flight.carrier.caption,
          min: flightPrice,
          currency: flight.price.total.currency,
        };
      }
    }

    void this.notify();
  }
}

const aircompanyStorageService = new AircompanyStorageService();

export default aircompanyStorageService;
