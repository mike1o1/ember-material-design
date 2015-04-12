import Ember from 'ember';
import LayoutMixin from '../../../mixins/layout-rules';
import { module, test } from 'qunit';

module('LayoutRulesMixin');

// Replace this with your real tests.
test('it works', function(assert) {
  var LayoutObject = Ember.Object.extend(LayoutMixin);
  var subject = LayoutObject.create();
  assert.ok(subject);
});
