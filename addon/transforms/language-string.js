import { assert } from '@ember/debug';
import { typeOf } from '@ember/utils';
import Transform from '@ember-data/serializer/transform';

const LangString = function (content, lang) {
  this.content = content;
  this.language = lang;
  this.toString = function () {
    return `${this['content']} (${this['language']})`;
  };
};

export default class LangStringTransform extends Transform {
  deserialize(serialized) {
    assert(
      `Expected object but got ${typeOf(serialized)}`,
      !serialized || typeOf(serialized) === 'object'
    );
    if (serialized != null)
      return new LangString(serialized['content'], serialized['language']);
    else return null;
  }

  serialize(deserialized) {
    assert(
      `Expected object but got ${typeOf(deserialized)}`,
      !deserialized || typeOf(deserialized) === 'object'
    );
    return deserialized;
  }
}

export { LangString };
