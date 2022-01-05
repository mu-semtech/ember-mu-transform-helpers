import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('transform:date', 'Unit | Transform | date', function (hooks) {
  setupTest(hooks);

  test('it deserializes date strings properly', function (assert) {
    let transform = this.owner.lookup(
      'transform:ember-mu-transform-helpers@date'
    );

    let deserialized = transform.deserialize('2021-12-21');

    assert.ok(deserialized instanceof Date);
    assert.strictEqual(deserialized.getDate(), 21);
    assert.strictEqual(deserialized.getMonth(), 11);
    assert.strictEqual(deserialized.getFullYear(), 2021);
  });

  test('it serializes dates to ISO 8601 format without time information', function (assert) {
    let transform = this.owner.lookup(
      'transform:ember-mu-transform-helpers@date'
    );

    let date = new Date('2020-05-18');
    let serialized = transform.serialize(date);

    assert.strictEqual(serialized, '2020-05-18');

    date = new Date('2022-01-05T00:00:00');
    serialized = transform.serialize(date);

    assert.strictEqual(serialized, '2022-01-05');
  });
});
