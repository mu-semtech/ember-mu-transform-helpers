import { warn } from '@ember/debug';
import Transform from 'ember-data/transform';

export default Transform.extend({
  deserialize(serialized) {
    if (serialized) {
      if (serialized.match(/^tel:/)) {
        return serialized.substring('tel:'.length);
      } else {
        warn(`Expected telephone URI but got ${JSON.stringify(serialized)} as value`);
      }
    }
    return serialized;
  },

  serialize(deserialized) {
    if (deserialized) {
      return 'tel:' + deserialized;
    } else {
      return null;
    }
  }
});
