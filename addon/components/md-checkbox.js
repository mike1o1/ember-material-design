import Ember from 'ember';
import RippleMixin from '../mixins/ripples';
import layout from '../templates/components/md-checkbox';

var MdCheckbox = Ember.Component.extend(RippleMixin, {
	layout: layout,
    constants: Ember.inject.service('constants'),
    tagName: 'md-checkbox',
    classNames: ['md-checkbox'],
    classNameBindings: ['checked:md-checked'],

    attributeBindings: ['isDisabled:disabled', 'aria-label', 'mdNoInk', 'tabindex'],
    tabindex: 0,

    isDisabled: Ember.computed('disabled', function() {
        return this.get('disabled') ? 'disabled' : null;
    }),

    setupRipples: Ember.on('didInsertElement', function() {
        if (this.get('mdNoInk')) {
            return;
        }
        this.get('rippleService').attachCheckboxBehavior(this.$('.md-container'));

    }),

    checked: false,

    click: function() {
        if (this.get('disabled')) {
            return;
        }

        this.toggleProperty('checked');
    },

    keyPress: function(event) {
        if (event.which === this.get('constants.KEYCODE.SPACE') || event.which === this.get('constants.KEYCODE.ENTER')) {
            this.click();
        }
    }


});

export default MdCheckbox;
