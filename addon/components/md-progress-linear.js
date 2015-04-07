import Ember from 'ember';
import layout from '../templates/components/md-progress-linear';

function makeTransform(value) {
    var scale = value / 100;
    var translateX = (value - 100) / 2;
    return 'translateX(' + translateX.toString() + '%) scale(' + scale.toString() + ', 1)';
}

var MdProgressLinear = Ember.Component.extend({
	layout: layout,

    isInserted: false,

    didInsertElement: function() {
        this._super();

        this.set('isInserted', true);
    },

    constants: Ember.inject.service('constants'),

    tagName: 'md-progress-linear',

    attributeBindings: ['value', 'md-mode', 'md-buffer-value'],

    transforms: new Array(101),

    setupTransforms: Ember.on('didInsertElement', function() {
        for (var i = 0; i < 101; i++) {
            this.transforms[i] = makeTransform(i);
        }

        this.$('.md-container').addClass('md-ready');
    }),

    bar1Style: Ember.computed('clampedBufferValue', function() {
        return Ember.String.htmlSafe(this.get('constants.CSS.TRANSFORM') + ': ' + this.transforms[this.get('clampedBufferValue')]);
    }),

    bar2Style: Ember.computed('clampedValue', function() {
        return Ember.String.htmlSafe(this.get('constants.CSS.TRANSFORM') + ': ' + this.transforms[this.get('clampedValue')]);
    }),

    clampedValue: Ember.computed('value', function() {
        var value = this.get('value');
        if (value > 100) {
            return 100;
        }

        if (value < 0) {
            return 0;
        }

        return Math.ceil(value || 0);
    }),

    clampedBufferValue: Ember.computed('md-buffer-value', function() {
        var value = this.get('md-buffer-value');
        if (value > 100) {
            return 100;
        }

        if (value < 0) {
            return 0;
        }

        return Math.ceil(value || 0);
    })

});

export default MdProgressLinear;

