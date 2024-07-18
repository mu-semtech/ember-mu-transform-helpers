import { warn } from '@ember/debug';
import Transform from '@ember-data/serializer/transform';

export default class PhoneTransform extends Transform {
  deserialize(serialized) {
    if (serialized) {
      if (serialized.match(/^tel:/)) {
        return serialized.substring('tel:'.length);
      } else {
        warn(
          `Expected telephone URI but got ${JSON.stringify(
            serialized
          )} as value`,
          { id: 'ember-mu-transform-helpers:phone' }
        );
      }
    }
    return serialized;
  }

  serialize(deserialized) {
    if (deserialized) {
      return 'tel:' + deserialized;
    } else {
      return null;
    }
  }
}
