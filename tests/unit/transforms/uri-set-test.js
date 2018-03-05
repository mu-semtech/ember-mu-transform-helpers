import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('transform:uri-set', 'Unit | Transform | uri set', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let transform = this.owner.lookup('transform:uri-set');
    assert.ok(transform);
  });
});
