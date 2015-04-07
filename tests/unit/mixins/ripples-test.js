import Ember from 'ember';
import RipplesMixin from 'ember-material-design/mixins/ripples';
import { module, test } from 'qunit';

module('RipplesMixin');

// Replace this with your real tests.
test('it works', function(assert) {
  var RipplesObject = Ember.Object.extend(RipplesMixin);
  var subject = RipplesObject.create();
  assert.ok(subject);
});
