import {
  moduleForComponent,
  test
} from 'ember-qunit';

moduleForComponent('md-checkbox', {
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

test('it should have md-checked class when checked', function(assert) {
  assert.expect(1);

  var component = this.subject();

  Ember.run(() => {
    component.set('checked', true);
  });

  assert.ok(this.$().hasClass('md-checked'));

});

test('it should be able to be checked using space bar', function(assert) {
  assert.expect(2);
  var component = this.subject();

  var e = Ember.$.Event('keypress');
  e.which = 32;

  Ember.run(() => {
    this.$().trigger(e);
  });

  assert.ok(this.$().hasClass('md-checked'));
  assert.equal(component.get('checked'), true);

});

test('it should be able to be unchecked using space bar', function(assert) {
  assert.expect(2);
  var component = this.subject({
    checked: true
  });

  var e = Ember.$.Event('keypress');
  e.which = 32;

  Ember.run(() => {
    this.$().trigger(e);
  });

  assert.ok(!this.$().hasClass('md-checked'));
  assert.equal(component.get('checked'), false);

});

test('it should be able to be checked using enter key', function(assert) {
  assert.expect(2);
  var component = this.subject();

  var e = Ember.$.Event('keypress');
  e.which = 13;

  Ember.run(() => {
    this.$().trigger(e);
  });

  assert.ok(this.$().hasClass('md-checked'));
  assert.equal(component.get('checked'), true);

});

test('it should be able to be unchecked using enter key', function(assert) {
  assert.expect(2);
  var component = this.subject({
    checked: true
  });

  var e = Ember.$.Event('keypress');
  e.which = 13;

  Ember.run(() => {
    this.$().trigger(e);
  });

  assert.ok(!this.$().hasClass('md-checked'));
  assert.equal(component.get('checked'), false);

});
