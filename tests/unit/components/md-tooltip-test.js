import {
    moduleForComponent,
    test
    } from 'ember-qunit';

import Ember from 'ember';
import config from '../../../config/environment';

moduleForComponent('md-tooltip', {
    // Specify the other units that are required for this test
    needs: ['service:utility']
});

var template = Ember.HTMLBars.compile(
    'test'
);

var rootElement = Ember.$(config.APP.rootElement);

test('it renders', function(assert) {

    assert.expect(2);

    // Creates the component instance
    var component = this.subject({
        rootElement: rootElement,
        template: template
    });
    assert.equal(component._state, 'preRender');

    // Renders the component to the page
    this.render();
    assert.equal(component._state, 'inDOM');

});

test('it is visible on mouseover', function(assert) {
    var component = this.subject({
        rootElement: rootElement,
        template: template,
        delay: 0
    });

    this.render();

    var e = Ember.$.Event('mouseenter');
    Ember.run(() => {
        Ember.$(component.get('parent')).trigger(e);

        Ember.run.later(this, () => {
            assert.equal(component.get('visible'), true);
        }, 1);
    });
});

