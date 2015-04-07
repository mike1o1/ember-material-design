import Ember from 'ember';

import {
  moduleForComponent,
  test
} from 'ember-qunit';

moduleForComponent('md-button', {
  // Specify the other units that are required for this test
   needs: ['service:ripple', 'service:constants', 'service:sniffer']
});

test('it renders', function(assert) {
  assert.expect(2);

  // Creates the component instance
  var component = this.subject();
  assert.equal(component._state, 'preRender');

  // Renders the component to the page
  this.render();
  assert.equal(component._state, 'inDOM');
});

test('it should have md-ripple-container after click', function(assert) {

  var component = this.subject();

  this.render();

  var position = this.$().position();

  Ember.run(() => {
    this.$().triggerHandler({type: 'mousedown', clientX: position.left, clientY: position.top});
  });

  assert.equal(this.$()[0].getElementsByClassName('md-ripple-container').length, 1, 'Ripple is added');
});

test('it should not have md-ripple-container if mdNoInk attribute is set', function(assert) {
  var component = this.subject({
    mdNoInk: true
  });

  this.render();

  var position = this.$().position();

  Ember.run(() => {
    this.$().triggerHandler({type: 'mousedown', clientX: position.left, clientY: position.top});
  });

  assert.equal(this.$()[0].getElementsByClassName('md-ripple-container').length, 0, 'Ripple is not present');
});