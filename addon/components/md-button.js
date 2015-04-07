import Ember from 'ember';
import RipplesMixin from '../mixins/ripples';

var MdButtonComponent = Ember.Component.extend(RipplesMixin, {

    tagName: 'button',

    classNames: ['md-button'],

    attributeBindings: ['disabled', 'href', 'style', 'type'],

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
