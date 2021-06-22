import { DateTransform as BaseDateTransform } from '@ember-data/serializer/-private';

export default class DateTransform extends BaseDateTransform {
  serialize(date) {
    if (date instanceof Date) {
      return date.toISOString().substring(0, 10); // only keep 'YYYY-MM-DD' portion of the string
    } else {
      return null;
    }
  }
}
