import Ember from 'ember';
import layout from '../templates/components/md-progress-linear';
import LayoutRules from '../mixins/layout-rules';

function makeTransform(value) {
    let scale = value / 100;
    let translateX = (value - 100) / 2;
    return 'translateX(' + translateX.toString() + '%) scale(' + scale.toString() + ', 1)';
}

let MdProgressLinear = Ember.Component.extend(LayoutRules, {
	layout: layout,

    isInserted: false,

    didInsertElement: function() {
        this._super();

        if (this.get('invalidMinMax')) {
            this.setProperties({
                min: null,
                max: null
            }); // force indeterminate state on progress with invalid min/max
            Ember.Logger.error(`Could not set min or max on component ${this.$()}, as min ${this.get('min')} exceeds max ${this.get('max')}`);
        }
        this.set('isInserted', true);
        this.$('.md-container').addClass('md-ready');
    },

    constants: Ember.inject.service('constants'),

    tagName: 'progress',

    classNameBindings: [':md-progress-linear', 'hasValue:determinate:indeterminate'],

    attributeBindings: ['value', 'md-mode', 'md-buffer-value', 'min', 'max'],

    value: 0,

    hasValue: Ember.computed.notEmpty('value'),

    min: 0,

    max: 100,

    invalidMinMax: Ember.computed.gt('min', 'max'),

    transforms: [],

    setupTransforms: Ember.on('init', function() {
        let maxTransforms = this.get('max') + 1, minTransforms = this.get('min');
        for (let i = minTransforms; i < maxTransforms; i++) {
            this.transforms.push(makeTransform(i));
        }
    }),

    "md-mode": null,

    bar1Style: Ember.computed('clampedBufferValue', function() {
        return Ember.String.htmlSafe(this.get('constants.CSS.TRANSFORM') + ': ' + this.transforms[this.get('clampedBufferValue')]);
    }),

    bar2Style: Ember.computed('clampedValue', function() {

        if (this.get('md-mode') === 'query') {
            return '';
        }

        return Ember.String.htmlSafe(this.get('constants.CSS.TRANSFORM') + ': ' + this.transforms[this.get('clampedValue')]);
    }),

    getBuffer: function(value, min, max) {
        if (value > max) {
            return max;
        }

        if (value < min) {
            return min;
        }

        return Math.ceil(value || min);
    },
    clampedValue: Ember.computed('value', 'min', 'max', function() {
        let value = this.get('value'), min = this.get('min'), max = this.get('max');
        return this.getBuffer(value, min, max);
    }),

    clampedBufferValue: Ember.computed('md-buffer-value', 'min', 'max', function() {
        let value = this.get('md-buffer-value'), min = this.get('min'), max = this.get('max');
        return this.getBuffer(value, min, max);
    })

});

export default MdProgressLinear;

