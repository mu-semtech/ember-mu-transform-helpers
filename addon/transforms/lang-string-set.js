import DS from 'ember-data'

LangString = Ember.Object.extend();
LangStringSet = DS.Transform.extend({
  deserialize: function (serialized) {
    if (serialized && Ember.typeof(serialized) == 'array')
      serialized.map((o) -> LangString.create(o));
    else
      throw "lang string set should be an array"
  },
  serialize: function (deserialized) {
    deserialized
});
export default LangStringSet
