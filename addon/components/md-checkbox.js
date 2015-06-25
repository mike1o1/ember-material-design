import Ember from 'ember';
import RippleMixin from '../mixins/ripples';
import LayoutRules from '../mixins/layout-rules';

var MdCheckbox = Ember.Component.extend(LayoutRules, RippleMixin, {
  constants: Ember.inject.service('constants'),
  tagName: 'md-checkbox',
  classNames: ['md-checkbox'],
  classNameBindings: ['checked:md-checked'],

  attributeBindings: ['isDisabled:disabled', 'aria-label', 'mdNoInk', 'tabindex'],
  tabindex: 0,
  checked: false,

  didInsertElement() {
    this._super(...arguments);
    this.get('rippleService').setupCheckbox(this, this.$('.md-container'));
  },

  isDisabled: Ember.computed('disabled', function() {
    return this.get('disabled') ? 'disabled' : null;
  }),

  click() {
    if (this.get('disabled')) {
      return;
    }

    this.toggleProperty('checked');
  },

  keyPress(event) {
    if (event.which === this.get('constants.KEYCODE.SPACE') || event.which === this.get('constants.KEYCODE.ENTER')) {
      this.click();
    }
  }


});

export default MdCheckbox;
