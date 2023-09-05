export const FILTER_SORT_BY_PRICE_ASC = 'price-asc';
export const FILTER_SORT_BY_PRICE_DESC = 'price-desc';
export const FILTER_SORT_BY_TIME_ASC = 'time-asc';

export const FILTER_FLAG_1_TRANSFER = '1-transfer';
export const FILTER_FLAG_NO_TRANSFER = 'no-transfer';

export const FILTER_PRICE_DEFAULT_MIN = 0;
export const FILTER_PRICE_DEFAULT_MAX = 1_000_000;

export const SORT_FILTER_TEXT_BY_FILTER = {
  [FILTER_SORT_BY_PRICE_ASC]: ' - по возрастанию цены',
  [FILTER_SORT_BY_PRICE_DESC]: ' - по убыванию цены',
  [FILTER_SORT_BY_TIME_ASC]: ' - по времени пути',
};

export const FLAG_FILTER_TEXT_BY_FILTER = {
  [FILTER_FLAG_1_TRANSFER]: ' - 1 пересадка',
  [FILTER_FLAG_NO_TRANSFER]: ' - без пересадок',
};

export const FILTER_NAME_SORT = 'sort';
export const FILTER_NAME_FLAG = 'flags';
export const FILTER_NAME_PRICE_MIN = 'priceMin';
export const FILTER_NAME_PRICE_MAX = 'priceMax';
export const FILTER_NAME_AIRCOMPANY = 'aircompany';
