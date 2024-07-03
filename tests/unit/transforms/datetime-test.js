import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Transform | datetime', function (hooks) {
  setupTest(hooks);

  test('it deserializes date strings properly', function (assert) {
    let transform = this.owner.lookup('transform:datetime');

    let deserialized = transform.deserialize('2024-07-03');

    assert.ok(deserialized instanceof Date);
    assert.strictEqual(deserialized.getDate(), 3);
    assert.strictEqual(deserialized.getMonth(), 7 - 1);
    assert.strictEqual(deserialized.getFullYear(), 2024);
  });

  test('it serializes dates to ISO 8601 format', function (assert) {
    let transform = this.owner.lookup('transform:datetime');

    let date = new Date('2024-07-03');
    let serialized = transform.serialize(date);

    assert.strictEqual(serialized, '2024-07-03T00:00:00.000Z');
  });
});
