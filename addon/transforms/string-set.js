import { typeOf } from '@ember/utils';
import { assert } from '@ember/debug';
import Transform from 'ember-data/transform';

const StringSet = Transform.extend({
  deserialize(serialized) {
    assert(`Expected array but got ${typeOf(serialized)}`, (!serialized) || (typeOf(serialized) === "array"));
    return serialized || [];
  },
  serialize(deserialized) {
    assert(`Expected array but got ${typeOf(deserialized)}`, (!deserialized) || (typeOf(deserialized) === "array"));
    return deserialized || [];
  }});
export default StringSet;
