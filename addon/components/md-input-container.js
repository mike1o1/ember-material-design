import Ember from 'ember';
import LayoutRules from '../mixins/layout-rules';
import StyleSafe from '../mixins/style-safe';

var MdInputContainer = Ember.Component.extend(LayoutRules, StyleSafe, {
    tagName: 'md-input-container',

    attributeBindings: ['md-no-float'],

    classNameBindings: ['isFocused:md-input-focused',
        'hasValue:md-input-has-value',
        'displayInvalid:md-input-invalid',
        'mdIconFloat:md-icon-float'],

    isInvalid: false,
    displayInvalid: Ember.computed('isInvalid', 'isTouched', function() {
      if (!this.get('isTouched')) {
        return false;
      }

      if (this.get('isInvalid')) {
        return true;
      }

      return false;

    }),
    isFocused: false,
    mdIconFloat: false,

    isTouched: false,

    placeholder: '',

    hasValue: Ember.computed('value', function() {
        return !Ember.isNone(this.get('value')) && !Ember.isEmpty(this.get('value'));
    })


});

export default MdInputContainer;
