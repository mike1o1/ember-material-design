import Ember from 'ember';
import EventsMixin from 'ember-material-design/mixins/events';
import { module, test } from 'qunit';

module('EventsMixin');

// Replace this with your real tests.
test('it works', function(assert) {
  var EventsObject = Ember.Object.extend(EventsMixin);
  var subject = EventsObject.create();
  assert.ok(subject);
});
