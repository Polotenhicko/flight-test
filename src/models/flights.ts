export interface Root {
  result: Result;
}

export interface Result {
  // Массив объектов типа Flight, представляющих информацию о полетах.
  flights: Flight[];
  // Объект, содержащий лучшие цены.
  bestPrices: BestPrices;
}

export interface Flight {
  // Булевое значение, указывающее, есть ли расширенная информация о тарифе для данного полета.
  hasExtendedFare: boolean;
  // Объект типа Flight2, представляющий информацию о полете.
  flight: Flight2;
  // Строка, содержащая токен полета.
  flightToken: string;
}

export interface Flight2 {
  // Объект типа Carrier, представляющий информацию о перевозчике.
  carrier: Carrier;
  // Объект типа Price, содержащий информацию о цене и тарифах.
  price: Price;
  // Объект типа ServicesStatuses, представляющий статусы услуг (багаж, обмен, возврат).
  servicesStatuses: ServicesStatuses;
  // Массив объектов типа Leg, представляющих информацию о сегментах полета.
  legs: Leg[];
  // Объект типа Exchange2, содержащий информацию о возможности обмена билета.
  exchange: Exchange2;
  // Булевое значение, указывающее, применяется ли скидка третьего лица.
  isTripartiteContractDiscountApplied: boolean;
  // Булевое значение, указывающее, является ли полет международным.
  international: boolean;
  // Массив объектов типа Seat, представляющих информацию о местах в самолете.
  seats: Seat[];
  // Объект типа Refund2, содержащий информацию о возможности возврата билета.
  refund: Refund2;
  // Объект типа AirlineAlliance, представляющий информацию об альянсе авиакомпаний (необязательно).
  airlineAlliance?: AirlineAlliance;
}

export interface Carrier {
  // Уникальный идентификатор перевозчика.
  uid: string;
  // Название перевозчика.
  caption: string;
  // Код авиакомпании.
  airlineCode: string;
}

export interface Price {
  total: Total;
  totalFeeAndTaxes: TotalFeeAndTaxes;
  rates: Rates;
  passengerPrices: PassengerPrice[];
}

export interface Total {
  amount: string;
  currency: string;
  currencyCode: string;
}

export interface TotalFeeAndTaxes {
  amount: string;
  currency: string;
  currencyCode: string;
}

export interface Rates {
  totalUsd: TotalUsd;
  totalEur: TotalEur;
}

export interface TotalUsd {
  amount: string;
  currencyCode: string;
}

export interface TotalEur {
  amount: string;
  currencyCode: string;
}

export interface PassengerPrice {
  total: Total2;
  passengerType: PassengerType;
  singlePassengerTotal: SinglePassengerTotal;
  passengerCount: number;
  tariff: Tariff;
  feeAndTaxes: FeeAndTaxes;
}

export interface Total2 {
  amount: string;
  currency: string;
  currencyCode: string;
}

export interface PassengerType {
  uid: string;
  caption: string;
}

export interface SinglePassengerTotal {
  amount: string;
  currency: string;
  currencyCode: string;
}

export interface Tariff {
  amount: string;
  currency: string;
  currencyCode: string;
}

export interface FeeAndTaxes {
  amount: string;
  currency: string;
  currencyCode: string;
}

export interface ServicesStatuses {
  baggage: Baggage;
  exchange: Exchange;
  refund: Refund;
}

export interface Baggage {
  uid: string;
  caption: string;
}

export interface Exchange {
  uid: string;
  caption: string;
}

export interface Refund {
  uid: string;
  caption: string;
}

export interface Leg {
  duration: number;
  segments: Segment[];
}

export interface Segment {
  classOfServiceCode: string;
  classOfService: ClassOfService;
  departureAirport: DepartureAirport;
  departureCity?: DepartureCity;
  aircraft: Aircraft;
  travelDuration: number;
  arrivalCity?: ArrivalCity;
  arrivalDate: string;
  flightNumber: string;
  techStopInfos: any[];
  departureDate: string;
  stops: number;
  servicesDetails: ServicesDetails;
  airline: Airline;
  starting: boolean;
  arrivalAirport: ArrivalAirport;
  operatingAirline?: OperatingAirline;
}

export interface ClassOfService {
  uid: string;
  caption: string;
}

export interface DepartureAirport {
  uid: string;
  caption: string;
}

export interface DepartureCity {
  uid: string;
  caption: string;
}

export interface Aircraft {
  uid: string;
  caption: string;
}

export interface ArrivalCity {
  uid: string;
  caption: string;
}

export interface ServicesDetails {
  freeCabinLuggage: FreeCabinLuggage;
  paidCabinLuggage: PaidCabinLuggage;
  tariffName?: string;
  fareBasis: FareBasis;
  freeLuggage: FreeLuggage;
  paidLuggage: PaidLuggage;
}

export interface FreeCabinLuggage {}

export interface PaidCabinLuggage {}

export interface FareBasis {
  ADULT: string;
}

export interface FreeLuggage {
  ADULT: Adult;
}

export interface Adult {
  nil: boolean;
  pieces?: number;
  unit?: string;
}

export interface PaidLuggage {}

export interface Airline {
  uid: string;
  caption: string;
  airlineCode: string;
}

export interface ArrivalAirport {
  uid: string;
  caption: string;
}

export interface OperatingAirline {
  uid: string;
  caption: string;
  airlineCode: string;
}

export interface Exchange2 {
  ADULT: Adult2;
}

export interface Adult2 {
  exchangeableBeforeDeparture: boolean;
  exchangeAfterDeparture: ExchangeAfterDeparture;
  exchangeBeforeDeparture: ExchangeBeforeDeparture;
  exchangeableAfterDeparture: boolean;
}

export interface ExchangeAfterDeparture {
  amount: string;
  currency: string;
  currencyCode: string;
}

export interface ExchangeBeforeDeparture {
  amount: string;
  currency: string;
  currencyCode: string;
}

export interface Seat {
  count: number;
  type: Type;
}

export interface Type {
  uid: string;
  caption: string;
}

export interface Refund2 {
  ADULT: Adult3;
}

export interface Adult3 {
  refundableBeforeDeparture: boolean;
  refundableAfterDeparture: boolean;
  refundBeforeDeparture?: RefundBeforeDeparture;
  refundAfterDeparture?: RefundAfterDeparture;
}

export interface RefundBeforeDeparture {
  amount: string;
  currency: string;
  currencyCode: string;
}

export interface RefundAfterDeparture {
  amount: string;
  currency: string;
  currencyCode: string;
}

export interface AirlineAlliance {
  uid: string;
  caption: string;
}

export interface BestPrices {
  ONE_CONNECTION: OneConnection;
  DIRECT: Direct;
}

export interface OneConnection {
  bestFlights: BestFlight[];
}

export interface BestFlight {
  carrier: Carrier2;
  price: Price2;
}

export interface Carrier2 {
  uid: string;
  caption: string;
  airlineCode: string;
}

export interface Price2 {
  amount: string;
  currency: string;
  currencyCode: string;
}

export interface Direct {
  bestFlights: BestFlight2[];
}

export interface BestFlight2 {
  carrier: Carrier3;
  price: Price3;
}

export interface Carrier3 {
  uid: string;
  caption: string;
  airlineCode: string;
}

export interface Price3 {
  amount: string;
  currency: string;
  currencyCode: string;
}
