import DateTransform from 'ember-data/transforms/date';

export default DateTransform.extend({
  serialize: function(date) {
    if (date instanceof Date) {
      return date.toISOString().substring(0, 10); // only keep 'YYYY-MM-DD' portion of the string
    } else {
      return null;
    }
  }
});
