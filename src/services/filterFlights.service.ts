import {
  FILTER_FLAG_1_TRANSFER,
  FILTER_FLAG_NO_TRANSFER,
  FILTER_NAME_AIRCOMPANY,
  FILTER_NAME_FLAG,
  FILTER_NAME_PRICE_MAX,
  FILTER_NAME_PRICE_MIN,
  FILTER_NAME_SORT,
  FILTER_SORT_BY_PRICE_ASC,
  FILTER_SORT_BY_PRICE_DESC,
  FILTER_SORT_BY_TIME_ASC,
} from '../constants/filters';
import { Flight2 } from '../models/flights';
import { isBoolean, isObject, isString } from '../utils/typeChecker';
import flightService from './flights.service';

interface IFlag {
  flag: string;
  checked: boolean;
}

export interface IFilters {
  [FILTER_NAME_SORT]: string | undefined;
  [FILTER_NAME_AIRCOMPANY]: IFlag[];
  [FILTER_NAME_FLAG]: IFlag[];
  [FILTER_NAME_PRICE_MAX]: string;
  [FILTER_NAME_PRICE_MIN]: string;
}

class FilterFlightsService {
  public filterFlights(flights: Flight2[]): Flight2[] {
    const filteredByAircompany = this.filterByAircompany(flights);
    const filteredByFlags = this.filterByFlags(filteredByAircompany);
    const filteredByPrice = this.filterByPrice(filteredByFlags);
    const sortedFlights = this.filterBySort(filteredByPrice);

    return sortedFlights;
  }

  public changeFilter(filter: string, value: string | IFlag): void {
    switch (filter) {
      case FILTER_NAME_FLAG:
      case FILTER_NAME_AIRCOMPANY:
        if (!isObject(value)) return;

        const val = value as IFlag;
        if (!isString(val.flag) || !isBoolean(val.checked)) return;

        const flag = this.filters[filter].find((filter) => filter.flag === val.flag);

        if (!flag) {
          this.filters[filter].push(val);
        } else {
          flag.checked = val.checked;
        }
        break;
      case FILTER_NAME_SORT:
        if (typeof value !== 'string') return;
        this.filters[FILTER_NAME_SORT] = value;
        break;
      case FILTER_NAME_PRICE_MAX:
      case FILTER_NAME_PRICE_MIN:
        if (typeof value !== 'string') return;
        this.filters[filter] = value;
        break;
      default:
        return;
    }

    void flightService.updateFlightsWithFilter();
  }

  public filterBySort(flights: Flight2[]): Flight2[] {
    const copyFlights = [...flights];

    switch (this.filters[FILTER_NAME_SORT]) {
      case FILTER_SORT_BY_PRICE_ASC:
        copyFlights.sort(
          (flightA, flightB) => Number(flightA.price.total.amount) - Number(flightB.price.total.amount)
        );
        break;
      case FILTER_SORT_BY_PRICE_DESC:
        copyFlights.sort(
          (flightA, flightB) => Number(flightB.price.total.amount) - Number(flightA.price.total.amount)
        );
        break;
      case FILTER_SORT_BY_TIME_ASC:
        copyFlights.sort(
          (flightA, flightB) => Number(flightB.legs[0].duration) - Number(flightA.legs[0].duration)
        );
        break;
      default:
        return copyFlights;
    }

    return copyFlights;
  }

  public filterByFlags(flights: Flight2[]): Flight2[] {
    const currentFilter = this.filters[FILTER_NAME_FLAG];
    const everyFlagsNotChecked = currentFilter.every((flag) => !flag.checked);
    if (everyFlagsNotChecked) return flights;

    return flights.filter((flight) => {
      const isSatisfiesFlag = this.filters[FILTER_NAME_FLAG].some((flag) => {
        if (!flag.checked) return false;

        switch (flag.flag) {
          case FILTER_FLAG_1_TRANSFER:
            return flight.legs.every((leg) => leg.segments.length === 2);
          case FILTER_FLAG_NO_TRANSFER:
            return flight.legs.every((leg) => leg.segments.length === 1);
          default:
            return false;
        }
      });

      return isSatisfiesFlag;
    });
  }

  public filterByPrice(flights: Flight2[]): Flight2[] {
    const min = isNaN(+this.filters[FILTER_NAME_PRICE_MIN]) ? 0 : this.filters[FILTER_NAME_PRICE_MIN];
    const max = isNaN(+this.filters[FILTER_NAME_PRICE_MAX]) ? Infinity : this.filters[FILTER_NAME_PRICE_MAX];
    const priceMin = Number(min);
    const priceMax = Number(max !== '' ? max : Infinity);

    return flights.filter((flight) => {
      const price = Number(flight.price.total.amount);
      return price >= priceMin && price <= priceMax;
    });
  }

  public filterByAircompany(flights: Flight2[]): Flight2[] {
    const currentFilter = this.filters[FILTER_NAME_AIRCOMPANY];
    const everyAircompanyNotChecked = currentFilter.every((flag) => !flag.checked);
    if (everyAircompanyNotChecked) return flights;

    return flights.filter((flight) =>
      currentFilter.some((airlineFlag) => {
        if (!airlineFlag.checked) return false;
        return flight.carrier.airlineCode === airlineFlag.flag;
      })
    );
  }

  private filters: IFilters = {
    sort: undefined,
    flags: [],
    aircompany: [],
    priceMax: '',
    priceMin: '',
  };
}

const filterFlightsService = new FilterFlightsService();

export default filterFlightsService;
