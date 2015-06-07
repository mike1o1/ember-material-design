import Ember from 'ember';

var ToastModel = Ember.Object.extend({
  position: 'bottom left',
  hideDelay: 3000,
  capsule: false,
  highlightAction: false,
  content: '',
  action: '',
  resolve: null,
  open: false

});

export default ToastModel;
