import {
  macroCondition,
  dependencySatisfies,
  importSync,
} from '@embroider/macros';

let DateTimeTransform;

if (macroCondition(dependencySatisfies('ember-data', '^5.3.4'))) {
  DateTimeTransform = importSync(
    '@ember-data/serializer/transform'
  ).DateTransform;
} else {
  DateTimeTransform = importSync(
    '@ember-data/serializer/-private'
  ).DateTransform;
}

export default DateTimeTransform;
