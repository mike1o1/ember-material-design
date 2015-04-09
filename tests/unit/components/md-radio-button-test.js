import {
    moduleForComponent,
    test
    } from 'ember-qunit';

import Ember from 'ember';

moduleForComponent('md-radio-button', {
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

test('it sets checked class if checked', function(assert) {
    var component = this.subject({
        checked: true
    });

    this.render();

    assert.ok(this.$().hasClass('md-checked'), 'Radio button has md-checked class');
});

test('it sets checked if selected', function(assert) {
    var val = 'Hooray';

    var component = this.subject({
        value: 'Hooray',
        selected: val
    });

    this.render();

    assert.ok(this.$().hasClass('md-checked'), 'Radio button has md-checked class');
});

test('it updates if value == selected', function(assert) {
    var value = 'Hooray';

    var component = this.subject({
        value: 'Yesso',
        selected: value
    });

    this.render();

    assert.ok(!this.$().hasClass('md-checked'), 'Radio button does not have md-checked class');

    Ember.run(() => {
        component.set('value', 'Hooray');
    });

    assert.ok(this.$().hasClass('md-checked'), 'Radio button has md-checked class');
});

test('clicking the radio button updates the selected value', function(assert) {
    var component = this.subject({
        value: 'Yesso',
        selected: 'Hooray'
    });

    this.render();

    this.$().trigger('click');

    assert.equal(component.get('selected'), 'Yesso', 'Value updated correctly');

});

test('clicking the radio button does not update selected value if disabled', function(assert) {
    var component = this.subject({
        value: 'Yesso',
        selected: 'Hooray',
        disabled: true
    });

    this.render();


    this.$().trigger('click');

    assert.equal(component.get('selected'), 'Hooray', 'Value did not update');

});
