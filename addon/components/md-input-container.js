import Ember from 'ember';
import layout from '../templates/components/md-input-container';

var MdInputContainer = Ember.Component.extend({
	layout: layout,
    tagName: 'md-input-container',

    attributeBindings: ['style', 'md-no-float'],

    classNameBindings: ['isFocused:md-input-focused',
        'hasValue:md-input-has-value',
        'isInvalid:md-input-invalid'],

    isFocused: false,

    placeholder: '',

    hasValue: Ember.computed('value', function() {
        return !Ember.isNone(this.get('value')) && !Ember.isEmpty(this.get('value'));
    }),

    iInvalid: false
});

export default MdInputContainer;