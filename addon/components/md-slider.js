import Ember from 'ember';
import EventsMixin from '../mixins/events';
import layout from '../templates/components/md-slider';

var MdSlider = Ember.Component.extend(EventsMixin, {

	layout: layout,
    constants: Ember.inject.service('constants'),

    tagName: 'md-slider',

    attributeBindings: ['min', 'max', 'step', 'md-discrete', 'disabled', 'flex', 'tabindex'],

    classNameBindings: ['isMinimum:md-min', 'active', 'dragging'],

    min: 0,
    max: 100,
    step: 1,
    tabindex: 0,

    trackContainer: Ember.computed('', function() {
        var element = this.$()[0];

        return this.$(element.querySelector('.md-track-container'));
    }),

    activeTrackStyle: Ember.computed('percent', function() {
        var percent = this.get('percent') || 0;
        return Ember.String.htmlSafe("width: " + (percent * 100) + "%");
    }),

    thumbContainerStyle: Ember.computed('percent', function() {
        var percent = this.get('percent') || 0;
        return Ember.String.htmlSafe("left: " + (percent * 100) + "%");
    }),

    isMinimum: Ember.computed('percent', function() {
        return this.get('percent') === 0;
    }),

    percent: Ember.computed('value', function() {
        var min = parseInt(this.get('min'));
        var max = parseInt(this.get('max'));

        return (this.get('value') - min) / (max - min);
    }),

    positionToPercent: function(x) {
        return Math.max(0, Math.min(1, (x - this.get('sliderDimensions.left')) / this.get('sliderDimensions.width')));
    },

    percentToValue: function(x) {
        var min = parseInt(this.get('min'));
        var max = parseInt(this.get('max'));
        return (min + x * (max - min));
    },

    minMaxValidator: function(value) {
        var min = parseInt(this.get('min'));
        var max = parseInt(this.get('max'));
        return Math.max(min, Math.min(max, value));
    },

    stepValidator: function(value) {
        var step = parseInt(this.get('step'));
        return Math.round(value / step) * step;
    },

    active: false,
    dragging: false,

    sliderDimensions: Ember.computed('', function() {
        return this.get('trackContainer')[0].getBoundingClientRect();
    }),

    setValueFromEvent: function(event) {
        var exactVal = this.percentToValue(this.positionToPercent(event.clientX || event.originalEvent.touches[0].clientX));
        var closestVal = this.minMaxValidator( this.stepValidator(exactVal));

        this.set('value', closestVal);
    },

    start: function(event) {
        if (this.get('disabled')) {
            return;
        }

        this.set('active', true);
        this.set('dragging', true);
        this.$().focus();

        this.get('sliderDimensions');

        this.setValueFromEvent(event);
    },

    end: function(event) {
        if (this.get('disabled')) {
            return;
        }

        event.stopPropagation();

        this.beginPropertyChanges();
        this.set('active', false);
        this.set('dragging', false);
        this.endPropertyChanges();
    },

    move: function(event) {
        if (this.get('disabled') || !this.get('dragging')) {
            return;
        }

        event.stopPropagation();

        this.setValueFromEvent(event);

    },

    keyDown: function(event) {
        if (this.get('disabled')) {
            return;
        }

        var changeAmount;

        if (event.keyCode === this.get('constants.KEY_CODE.LEFT_ARROW')) {
            changeAmount = this.get('step') * -1;
        } else if (event.keyCode === this.get('constants.KEY_CODE.RIGHT_ARROW')) {
            changeAmount = this.get('step');
        }
        if (changeAmount) {
            if (event.metaKey || event.ctrlKey || event.altKey) {
                changeAmount *= 4;
            }

            this.incrementProperty('value', changeAmount);

            event.preventDefault();
            event.stopPropagation();
        }
    }

});

export default MdSlider;
