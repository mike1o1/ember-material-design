import Ember from 'ember';

var ToastView = Ember.View.extend({
  toastService: Ember.inject.service('toasts'),

  classNameBindings: ''
});

export default ToastView;
