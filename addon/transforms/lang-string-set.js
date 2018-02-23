import EmberObject from '@ember/object';
import { typeOf } from '@ember/utils';
import Transform from 'ember-data/transform';

export default Transform.extend({
  deserialize: function (serialized) {
    if (serialized && typeOf(serialized) === 'array') {
      return serialized.map(function(o) { return EmberObject.create(o); });
    } else {
      throw "lang string set should be an array";
    }
  },
  serialize: function (deserialized) {
    return deserialized;
  }
});
