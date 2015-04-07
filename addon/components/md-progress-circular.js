import Ember from 'ember';
import layout from '../templates/components/md-progress-circular';

var MdProgressCircular = Ember.Component.extend({
	layout: layout,
    constants: Ember.inject.service('constants'),

    tagName: 'md-progress-circular',

    attributeBindings: ['value', 'md-mode'],

    mdDiameter: 48,

    scale: Ember.computed('mdDiameter', function() {
        return this.get('mdDiameter') / 48;
    }),

    clampedValue: Ember.computed('value', function() {

        var value = this.get('value');

        return Math.max(0, Math.min(value || 0, 100));
        
    }),

    circleStyle: Ember.computed('scale', function() {
        return Ember.String.htmlSafe(this.get('constants.CSS.TRANSFORM') + ': ' + 'scale(' + this.get('scale').toString() + ')');
    })

});

export default MdProgressCircular;
