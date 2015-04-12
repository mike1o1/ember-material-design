import Ember from 'ember';
import RipplesMixin from '../mixins/ripples';
import layout from '../templates/components/md-radio-button';
import LayoutRules from '../mixins/layout-rules';

var MdRadioButton = Ember.Component.extend(LayoutRules, RipplesMixin, {
	layout: layout,

    attributeBindings: ['disabled'],

    classNameBindings: ['checked:md-checked'],

    tagName: 'md-radio-button',



    setupRipples: Ember.on('didInsertElement', function() {
        if (this.get('mdNoInk')) {
            return;
        }
        this.get('rippleService').attachCheckboxBehavior(this.$('.md-container'));

    }),

    checked: Ember.computed('value', 'selected', function() {
        return this.get('value') === this.get('selected');
    }),

    checkedDidChange: Ember.observer('checked', function() {
        if (this.get('checked')) {
            this.set('selected', this.get('value'));
        }
    }),

    click: function() {
        if (this.get('disabled')) {
            return;
        }

        this.set('selected', this.get('value'));
    }

});

export default MdRadioButton;
