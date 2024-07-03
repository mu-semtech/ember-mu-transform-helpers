import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { LangString } from 'ember-mu-transform-helpers/transforms/language-string';

module('Unit | Transform | language string', function (hooks) {
  setupTest(hooks);

  test('deserialize', function (assert) {
    let transform = this.owner.lookup('transform:language-string');

    let deserialized = transform.deserialize({
      content: 'foo',
      language: 'nl',
    });
    assert.true(deserialized instanceof LangString);
    assert.strictEqual(deserialized.content, 'foo');
    assert.strictEqual(deserialized.language, 'nl');

    assert.throws(() => {
      transform.deserialize('foo');
    }, /Expected object but got string/);
  });

  test('serialize', function (assert) {
    let transform = this.owner.lookup('transform:language-string');

    let langString = new LangString('foo', 'nl');
    let serialized = transform.serialize(langString);
    assert.true(serialized instanceof LangString);
    assert.strictEqual(
      serialized,
      langString,
      'it passes the lang string as-is'
    );

    assert.throws(() => {
      transform.serialize('foo');
    }, /Expected object but got string/);
  });
});
