import Ember from 'ember';
import Transform from 'ember-data/transform';

export default Transform.extend({
  deserialize: function (serialized) {
    if (serialized && Ember.typeOf(serialized) === 'array') {
      return serialized.map(function(o) { Ember.Object.create(o); });
    } else {
      throw "lang string set should be an array";
    }
  },
  serialize: function (deserialized) {
    return deserialized;
  }
});
