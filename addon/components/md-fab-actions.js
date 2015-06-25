import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'md-fab-actions',

  didInsertElement() {
    this._super(...arguments);
    this.setupComponent();
  },

  setupComponent() {



    this.$().children().wrap('<div class="md-fab-action-item">');
  }

});
