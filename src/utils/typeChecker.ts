export const isObject = (val: any): boolean => {
  // is object
  if (typeof val !== 'object') return false;
  // not null
  if (!val) return false;
  // not array
  if (Array.isArray(val)) return false;

  return true;
};

export const isString = (val: any): boolean => typeof val === 'string';
export const isBoolean = (val: any): boolean => typeof val === 'boolean';
