import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Transform | string set', function (hooks) {
  setupTest(hooks);

  test('deserialize', function (assert) {
    let transform = this.owner.lookup('transform:string-set');

    let stringSet = ['foo', 'bar'];
    assert.strictEqual(transform.deserialize(stringSet), stringSet);

    let deserialized = transform.deserialize(false);
    assert.true(
      Array.isArray(deserialized),
      'deserializing falsy values returns an empty array'
    );
    assert.strictEqual(deserialized.length, 0);

    assert.throws(
      () => {
        transform.deserialize('foo');
      },
      /Expected array but got string/,
      'it asserts that it received an array'
    );
  });

  test('serialize', function (assert) {
    let transform = this.owner.lookup('transform:string-set');

    let stringSet = ['foo', 'bar'];
    assert.strictEqual(transform.serialize(stringSet), stringSet);

    let serialized = transform.serialize(false);
    assert.true(
      Array.isArray(serialized),
      'serializing falsy values returns an empty array'
    );
    assert.strictEqual(serialized.length, 0);

    assert.throws(
      () => {
        transform.serialize('foo');
      },
      /Expected array but got string/,
      'it asserts that it received an array'
    );
  });
});
