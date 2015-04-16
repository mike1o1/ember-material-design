import {
    moduleForComponent,
    test
    } from 'ember-qunit';

import Ember from 'ember';

moduleForComponent('md-progress-linear', {
    // Specify the other units that are required for this test
    needs: ['service:constants', 'service:sniffer']
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

test('it sets transform based on value', function(assert) {

    var component = this.subject({
        value: 50
    });

    this.render();

    var bar2 = this.$().find('.md-bar2')[0];

    var bar2style = bar2.style[component.get('constants.CSS.TRANSFORM')];

    assert.equal(bar2style, 'translateX(-25%) scale(0.5, 1)', 'Transition set correctly');

});

test('it sets transform based on buffer value', function(assert) {
    var component = this.subject({
        value: 50,
        'md-buffer-value': 75

    });

    this.render();

    var bar1 = this.$().find('.md-bar1')[0];

    var bar1style = bar1.style[component.get('constants.CSS.TRANSFORM')];

    assert.equal(bar1style, 'translateX(-12.5%) scale(0.75, 1)', 'Buffer bar transition set correctly');
});

test('it should not set transition in query mode', function(assert) {
    var component = this.subject({
        value: 80,
        'md-mode': 'query'
    });

    this.render();

    var bar2 = this.$().find('.md-bar2')[0];

    var bar2style = bar2.style[component.get('constants.CSS.TRANSFORM')];

    assert.ok(!bar2style, 'Buffer bar not set');

});

test('it should have min attribute', function(assert) {
    let component = this.subject();

    this.render();

    assert.ok(component.$().attr('min'));
});

test('it should have max attribute', function(assert) {
    let component = this.subject();

    this.render();

    assert.ok(component.$().attr('max'));
});

test('it should not have min or max attributes when min exceeds max', function(assert) {
    assert.expect(3);
    let component = this.subject(
        {
            min: 100,
            max: 40
        }
    );

    this.render();

    assert.equal(component.$().attr('min'), undefined);
    assert.equal(component.$().attr('max'), undefined);
    assert.ok(component.get('invalidMinMax'));
});

test('it should not have invalidMinMax when min and max are valid', function(assert) {
    let component = this.subject(
        {
            min: 0,
            max: 100
        }
    );

    this.render();

    assert.equal(component.get('invalidMinMax'), false);
});

test('it should have indeterminate class when no value present', function(assert) {
    let component = this.subject();

    this.render();

    assert.ok(component.$().hasClass('indeterminate'));
});

test('it should have determinate class when value is present', function(assert) {
    let component = this.subject(
        {
            value: 50
        }
    );

    this.render();

    assert.ok(component.$().hasClass('determinate'));
});
