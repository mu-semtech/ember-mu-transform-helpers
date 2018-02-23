import { assert } from '@ember/debug';
import { typeOf } from '@ember/utils';
import Transform from 'ember-data/transform';

const LangString = function(content, lang) {
  this.content = content;
  this.language = lang;
  this.toString = function() { return `${this['content']} (${this['language']})`; };
};

const LangStringTransform = Transform.extend({
  deserialize(serialized) {
    assert(`Expected object but got ${typeOf(serialized)}`, (!serialized) || (typeOf(serialized) === 'object'));
    if (serialized != null)
      return new LangString(serialized['content'], serialized['language']);
    else
      return null;
  },

  serialize(deserialized) {
    assert(`Expected object but got ${typeOf(deserialized)}`, (!deserialized) || (typeOf(deserialized) === 'object'));
    return deserialized;
  }
});

export {
  LangStringTransform as default,
  LangString
};
