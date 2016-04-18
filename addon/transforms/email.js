import Transform from 'ember-data/transform';

export default Transform.extend({
  deserialize(serialized) {
    if(serialized && serialized.match(/^mailto:/)) {
      return serialized.substring('mailto:'.length);
    } else {
      return serialized;
    }
  },

  serialize(deserialized) {
    if (deserialized) {
      return 'mailto:' + deserialized;
    } else {
      return deserialized;
    }
  }
});
