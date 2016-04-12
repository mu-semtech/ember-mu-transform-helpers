import Transform from 'ember-data/transform';

export default Transform.extend({
  deserialize(serialized) {
    if(serialized.match(/^tel:/)) {
      return serialized.substring('tel:'.length);
    } else {
      return serialized;
    }
  },

  serialize(deserialized) {
    return 'tel:' + deserialized;
  }
});
