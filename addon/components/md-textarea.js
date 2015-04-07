import Ember from 'ember';
import layout from '../templates/components/md-textarea';

var MdTextArea = Ember.TextArea.extend({
	layout: layout,
    classNames: ['md-input'],

    inputContainer: Ember.computed.alias('parentView'),
    value: Ember.computed.alias('parentView.value'),

    resetContainer: Ember.on('willDestroyElement', function() {
        this.get('inputContainer').set('isFocused', false);
    }),

    setupTextArea: Ember.on('didInsertElement', function() {
        if (this.get('value')) {
            this.processInput();
        }


        this.changeTextArea();
    }),


    setFocused: Ember.on('focusIn', 'focusOut', function(ev) {
        var focused = ev.type === 'focusin';
        this.get('inputContainer').set('isFocused', focused);
    }),

    processInput: Ember.on('input', function() {
        var hasValue = this.get('value').length > 0;
        this.get('inputContainer').set('hasValue', hasValue);

    }),

    changeTextArea: Ember.on('keydown', 'input', function() {
        var node = this.$()[0];
        node.style.height = 'auto';
        node.scrollTop = 0;
        var height = this.getHeight(node);
        if (height) {
            node.style.height = height + 'px';
        }
    }),

    getHeight: function(node) {
        var line = node.scrollHeight - node.offsetHeight;
        return node.offsetHeight + (line > 0 ? line : 0);
    },

    scroll: function() {
        var node = this.$()[0];
        var line = node.scrollheight - node.offsetHeight;
        var height = node.offsetHeight + line;
        node.style.height = height + 'px';
    }
});

export default MdTextArea;
