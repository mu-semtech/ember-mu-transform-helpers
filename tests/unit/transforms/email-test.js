import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import { getWarnings } from '@ember/test-helpers';

module('Unit | Transform | email', function (hooks) {
  setupTest(hooks);

  test('deserialize', function (assert) {
    let transform = this.owner.lookup('transform:email');

    assert.strictEqual(
      transform.deserialize('mailto:some@email.test'),
      'some@email.test'
    );
    assert.strictEqual(
      transform.deserialize('some@email.test'),
      'some@email.test',
      "strings are returned as-is if they aren't mailto: URIs"
    );
    const warnings = getWarnings();

    assert.strictEqual(warnings.length, 1);
    assert.strictEqual(
      warnings.at(0).message,
      'Expected email URI but got "some@email.test" as value',
      'it displays a warning in the console if it receives a regular string instead of an mailto: URI'
    );
  });

  test('serialize', function (assert) {
    let transform = this.owner.lookup('transform:email');

    assert.strictEqual(
      transform.serialize('some@email.test'),
      'mailto:some@email.test'
    );
    assert.strictEqual(transform.serialize(123), 'mailto:123');
    assert.strictEqual(transform.serialize(undefined), null);
    assert.strictEqual(transform.serialize(null), null);
    assert.strictEqual(transform.serialize(false), null);
  });
});
