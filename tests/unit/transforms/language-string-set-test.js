import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { LangString } from 'ember-mu-transform-helpers/transforms/language-string';

module('Unit | Transform | language string set', function (hooks) {
  setupTest(hooks);

  test('deserialize', function (assert) {
    let transform = this.owner.lookup('transform:language-string-set');

    let deserialized = transform.deserialize([
      { content: 'foo', language: 'nl' },
      { content: 'bar', language: 'en' },
    ]);
    assert.deepEqual(deserialized, [
      new LangString('foo', 'nl'),
      new LangString('bar', 'en'),
    ]);
    assert.true(
      deserialized.every((langString) => langString instanceof LangString),
      'it converts objects to LongString instances'
    );

    assert.throws(
      () => {
        transform.deserialize({ content: 'foo', language: 'nl' });
      },
      /Expected array but got object/,
      'it asserts that the value is an array'
    );
  });

  test('serialize', function (assert) {
    let transform = this.owner.lookup('transform:language-string-set');

    const langStrings = [
      new LangString('foo', 'nl'),
      new LangString('bar', 'en'),
    ];
    assert.strictEqual(
      transform.serialize(langStrings),
      langStrings,
      'it passes the lang string array as-is'
    );

    assert.throws(
      () => {
        transform.serialize({ content: 'foo', language: 'nl' });
      },
      /Expected array but got object/,
      'it asserts that the value is an array'
    );
  });
});
