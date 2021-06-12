import Transform from '@ember-data/serializer/transform';

export default class DateTransform extends Transform {
  serialize(date) {
    if (date instanceof Date) {
      return date.toISOString().substring(0, 10); // only keep 'YYYY-MM-DD' portion of the string
    } else {
      return null;
    }
  }
}
