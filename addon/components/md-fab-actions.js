import Ember from 'ember';
import layout from '../templates/components/md-fab-actions';

export default Ember.Component.extend({
  layout: layout,
  tagName: 'md-fab-actions',

  didInsertElement() {
    this._super(...arguments);
    this.setupComponent();
  },

  setupComponent() {
    this.$().children().wrap('<div class="md-fab-action-item">');
  }

});
