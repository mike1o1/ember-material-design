import Ember from 'ember';
import RipplesMixin from '../mixins/ripples';
import LayoutRules from '../mixins/layout-rules';
import setupRipples from '../utils/setup-ripples';

var MdButtonComponent = Ember.Component.extend(LayoutRules, RipplesMixin, {

    tagName: 'button',

    classNames: ['md-button'],

    attributeBindings: ['disabled', 'href', 'type', 'target'],

    didInsertElement() {
        this._super(...arguments);
        setupRipples(this, this.$());
    },

    setupRipples() {
        if (this.get('mdNoInk')) {
            return;
        }
        this.get('rippleService').attachButtonBehavior(this.$());
    },

    buttonClassNames: Ember.computed('classNames', function() {

        var classNames = '';

        this.get('classNames').forEach((cn) => {
            classNames = classNames + " " + (cn);
        });

        return classNames;

    }),

    click() {
        this.sendAction();
    }

});

export default MdButtonComponent;
