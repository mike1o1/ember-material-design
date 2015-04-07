import Ember from 'ember';
import HasLayoutMixin from 'ember-material-design/mixins/has-layout';
import { module, test } from 'qunit';

module('HasLayoutMixin');

// Replace this with your real tests.
test('it works', function(assert) {
  var HasLayoutObject = Ember.Object.extend(HasLayoutMixin);
  var subject = HasLayoutObject.create();
  assert.ok(subject);
});
