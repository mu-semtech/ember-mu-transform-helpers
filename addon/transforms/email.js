import Transform from '@ember-data/serializer/transform';
import { warn } from '@ember/debug';

export default class EmailTransform extends Transform {
  deserialize(serialized) {
    if (serialized) {
      if (serialized.match(/^mailto:/)) {
        return serialized.substring('mailto:'.length);
      } else {
        warn(
          `Expected email URI but got ${JSON.stringify(serialized)} as value`
        );
      }
    }
    return serialized;
  }

  serialize(deserialized) {
    if (deserialized) {
      return 'mailto:' + deserialized;
    } else {
      return null;
    }
  }
}
