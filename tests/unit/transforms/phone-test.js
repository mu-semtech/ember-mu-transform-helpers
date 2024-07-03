import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { getWarnings } from '@ember/test-helpers';

module('Unit | Transform | phone', function (hooks) {
  setupTest(hooks);

  test('deserialize', function (assert) {
    let transform = this.owner.lookup('transform:phone');

    assert.strictEqual(transform.deserialize('tel:0123456789'), '0123456789');
    assert.strictEqual(
      transform.deserialize('0123456789'),
      '0123456789',
      "strings are returned as-is if they aren't tel: URIs"
    );
    const warnings = getWarnings();

    assert.strictEqual(warnings.length, 1);
    assert.strictEqual(
      warnings.at(0).message,
      'Expected telephone URI but got "0123456789" as value',
      'it displays a warning in the console if it receives a regular string instead of a tel: URI'
    );
  });

  test('serialize', function (assert) {
    let transform = this.owner.lookup('transform:phone');

    assert.strictEqual(transform.serialize('0123456789'), 'tel:0123456789');
    assert.strictEqual(transform.serialize(123), 'tel:123');
    assert.strictEqual(transform.serialize(undefined), null);
    assert.strictEqual(transform.serialize(null), null);
    assert.strictEqual(transform.serialize(false), null);
  });
});
