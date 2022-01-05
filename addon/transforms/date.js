import { DateTransform as BaseDateTransform } from '@ember-data/serializer/-private';

export default class DateTransform extends BaseDateTransform {
  serialize(date) {
    if (date instanceof Date) {
      return formatISODate(date);
    } else {
      return null;
    }
  }
}

function formatISODate(date) {
  let month = `${date.getMonth() + 1}`.padStart(2, '0');
  let day = `${date.getDate()}`.padStart(2, '0');
  return `${date.getFullYear()}-${month}-${day}`;
}
