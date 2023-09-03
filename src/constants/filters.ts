export const FILTER_SORT_BY_ASC = 'asc';
export const FILTER_SORT_BY_DESC = 'desc';
export const FILTER_SORT_BY_TIME_ASC = 'time-asc';

export const FILTER_FLAG_1_TRANSFER = '1-transfer';
export const FILTER_FLAG_NO_TRANSFER = 'no-transfer';

export const FILTER_PRICE_DEFAULT_MIN = 0;
export const FILTER_PRICE_DEFAULT_MAX = 1_000_000;

export const SORT_FILTER_TEXT_BY_FILTER = {
  [FILTER_SORT_BY_ASC]: ' - по возрастанию цены',
  [FILTER_SORT_BY_DESC]: ' - по убыванию цены',
  [FILTER_SORT_BY_TIME_ASC]: ' - по времени пути',
};

export const FLAG_FILTER_TEXT_BY_FILTER = {
  [FILTER_FLAG_1_TRANSFER]: ' - 1 пересадка',
  [FILTER_FLAG_NO_TRANSFER]: ' - без пересадок',
};
