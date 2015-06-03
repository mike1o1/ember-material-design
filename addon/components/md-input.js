import Ember from 'ember';
import layout from '../templates/components/md-input';
import LayoutRules from '../mixins/layout-rules';

var MdInputComponent = Ember.TextField.extend(LayoutRules, {

	layout: layout,
    classNames: ['md-input'],

    inputContainer: Ember.computed.alias('parentView'),
    value: Ember.computed.alias('parentView.value'),

    attributeBindings: ['style'],

    originalPlaceholder: '',

    willDestroyElement() {
        this._super(...arguments);
        this.resetContainer();
    },

    didInsertElement() {
        this._super(...arguments);
        this.setupPlaceholder();
    },

    setupPlaceholder() {

        this.set('originalPlaceholder', this.get('placeholder'));

        if (!this.get('inputContainer') || !this.get('placeholder')) {
            return;
        }

        if (typeof this.get('inputContainer.md-no-float') !== 'undefined') {

            return;
        }

        this.set('inputContainer.placeholder', this.get('placeholder'));
        //var placeholderText = this.get('placeholder');
        //
        //this.get('inputContainer').$().append('<div class="md-placeholder">' + this.get('placeholder') + '</div>');
        //
        //// we don't need this on the element anymore, so get rid of it
        this.set('placeholder', '');

        var inputContainerJquery = this.get('inputContainer').$();
        if (inputContainerJquery.find('label').length === 0) {
            var placeHolder = '<label>' + this.get('originalPlaceholder') + '</label>';
            inputContainerJquery.addClass('md-icon-float');
            inputContainerJquery.prepend(placeHolder);
        }

        this.processInput();

    },


    resetContainer() {
        this.get('inputContainer').set('isFocused', false);
    },

    setFocused: Ember.on('focusIn', 'focusOut', function(ev) {
        var focused = ev.type === 'focusin';
        this.get('inputContainer').set('isFocused', focused);
    }),

    processInput: Ember.on('input', function() {

        if (this.get('value') && this.get('value').length > 0) {
            this.get('inputContainer').set('value', this.get('value'));
            this.set('inputContainer.placeholder', '');

        } else {
            this.get('inputContainer').set('placeholder', this.get('originalPlaceholder'));
        }


    })


});

export default MdInputComponent;
