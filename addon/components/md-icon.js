import Ember from 'ember';
import layout from '../templates/components/md-icon';
import LayoutRules from '../mixins/layout-rules';

var MdIcon = Ember.Component.extend(LayoutRules, {
    layout: layout,
    iconService: Ember.inject.service('icon'),

    tagName: 'md-icon',

    attributeBindings: ['style'],

    iconName: Ember.computed('md-svg-icon', 'md-svg-src', function() {
        return this.get('md-svg-icon') || this.get('md-svg-src') || '';
    }),

    classNameBindings: ['iconClass'],

    fontIcon: Ember.computed('mdFontIcon', function() {
        return 'md-font ' + this.get('mdFontIcon');
    }),

    loadIcon: Ember.observer('iconName', function() {
        var iconName = this.get('iconName'),
            element = this.$();

        element.empty();
        if (iconName) {
            var is = this.get('iconService');
            is.getIcon(iconName)
                .then(function(svg) {
                    element.append(svg);
                });
        }
    }),

    setupIcon: Ember.on('didInsertElement', function() {
        if (!this.get('mdFontIcon')) {
            this.loadIcon();
        }
    })

});

export default MdIcon;
