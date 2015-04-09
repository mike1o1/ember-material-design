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

test('it becomes invisible on mouseleave', function(assert) {
    assert.expect(2);

    var done = assert.async();

    var component = this.subject({
        rootElement: rootElement,
        template: template,
        delay: 1
    });

    this.render();

    var e = Ember.$.Event('mouseenter');
    Ember.run(() => {
        Ember.$(component.get('parent')).trigger(e);

        Ember.run.later(this, () => {
            assert.equal(component.get('visible'), true, 'Tooltip is visible');
        }, 5);
    });

    Ember.run(() => {
        var e2 = Ember.$.Event('mouseleave');
        Ember.run.later(this, () => {
            Ember.$(component.get('parent')).trigger(e2);
        }, 10);
    });

    Ember.run.later(this, () => {
        assert.equal(component.get('visible'), false, 'Tooltip is hidden');
        done();
    }, 20);


});

test('it should wait for delay before being visible on mouseenter', function(assert) {

    var done = assert.async();

    assert.expect(2);

    var component = this.subject({
        rootElement: rootElement,
        template: template,
        delay: 7
    });

    this.render();

    var e = Ember.$.Event('mouseenter');

    Ember.run(() => {
        Ember.$(component.get('parent')).trigger(e);
    });

    Ember.run.later(this, () => {
        assert.equal(component.get('visible'), false, 'Tooltip still invisible');
    }, 2);

    Ember.run.later(this, () => {

        assert.equal(component.get('visible'), true, 'Tooltip is visible');
        done();
    }, 15);
});

test('it should show if setVisible is set to true', function(assert) {
    var component = this.subject({
        rootElement: rootElement,
        template: template,
        delay: 1
    });

    this.render();

    Ember.run(() => {
        component.set('visible', true);
    });

    Ember.run.later(this, () => {
        var tooltipContent = Ember.$(document.body).find('md-tooltip').find('.md-content');
        assert.ok(tooltipContent.hasClass('md-show'), 'Tooltip is visible');
    }, 2);

});

