import Ember from 'ember';
import RipplesMixin from '../mixins/ripples';
import LayoutRules from '../mixins/layout-rules';

var MdButtonComponent = Ember.Component.extend(LayoutRules, RipplesMixin, {

    tagName: 'button',

    classNames: ['md-button'],

    attributeBindings: ['disabled', 'href', 'type', 'target'],

    setupRipples: Ember.on('didInsertElement', function() {
        if (this.get('mdNoInk')) {
            return;
        }
        this.get('rippleService').attachButtonBehavior(this.$());
    }),

    buttonClassNames: Ember.computed('classNames', function() {

        var classNames = '';

        this.get('classNames').forEach((cn) => {
            classNames = classNames + " " + (cn);
        });

        return classNames;

    }),

    click: function() {
        this.sendAction();
    }

});

export default MdButtonComponent;
