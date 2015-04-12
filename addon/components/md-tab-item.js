import Ember from 'ember';
import layout from '../templates/components/md-tab-item';
import LayoutRules from '../mixins/layout-rules';

var MdTabItem = Ember.Component.extend(LayoutRules, {
	layout: layout,
    tagName: 'md-tab-item',

    attributeBindings: ['tab', 'role', 'disabled', 'label'],
    classNameBindings: ['isActive:md-active', 'isFocused:md-focus', 'isDisabled:md-disabled'],

    tabWrapperComponent: Ember.computed.alias('parentView'),
    tabsComponent: Ember.computed.alias('tabWrapperComponent.parentView'),

    setupRipples: Ember.on('didInsertElement', function() {
        this.get('tabsComponent').attachRipple(this.$());
    }),

    click: function() {
        this.get('tabsComponent').select(this.get('tab').getIndex());
    },

    isActive: Ember.computed('tabsComponent.selectedIndex', function() {
        return this.get('tab').isActive();
    }),

    isFocused: Ember.computed('tabsComponent.selectedIndex', function() {
        return this.get('tab').hasFocus();
    })

});

export default MdTabItem;
