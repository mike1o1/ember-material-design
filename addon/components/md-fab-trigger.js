import Ember from 'ember';
import layout from '../templates/components/md-fab-trigger';

export default Ember.Component.extend({
  layout: layout,
  tagName: 'md-fab-trigger',

  didInsertElement() {
    this._super(...arguments);
    this.setupComponent();
  },

  setupComponent() {
    Ember.EnumerableUtils.forEach(this.$().children(), (child) => {
      Ember.$(child).on('focus', this.set('parentView.md-open', true));
      Ember.$(child).on('blur', this.set('parentView.md-open', false));
    })
  }

});
