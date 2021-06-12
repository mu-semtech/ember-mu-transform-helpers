import { typeOf } from '@ember/utils';
import { assert } from '@ember/debug';
import { LangString } from '../transforms/language-string';
import Transform from '@ember-data/serializer/transform';

export default class LanguageStringSetTransform extends Transform {
  deserialize(serialized) {
    assert(
      `Expected array but got ${typeOf(serialized)}`,
      !serialized || typeOf(serialized) === 'array'
    );
    serialized = serialized.map(function (item) {
      return new LangString(item['content'], item['language']);
    });

    return serialized;
  }

  serialize(deserialized) {
    assert(
      `Expected array but got ${typeOf(deserialized)}`,
      !deserialized || typeOf(deserialized) === 'array'
    );
    return deserialized;
  }
}
