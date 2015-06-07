import Ember from 'ember';
import Toast from '../models/toast';

var ToastService = Ember.Service.extend({

  toasts: Ember.A([]),

  showToast: function(toast) {

    toast.opening = true;
    var newToast = Toast.createWithMixins(toast);

    this.get('toasts').pushObject(newToast);

    return newToast;
  },

  activeToasts: Ember.computed('toasts.@each.open', function() {
    return Ember.A(this.get('toasts').filterBy('open', true));
  }),

  removeToast: function(toast) {
    toast.set('destroying', true);
  },

  destroyToasts: Ember.observer('toasts.@each.destroyed', function() {
    var destroyedToasts = this.get('toasts').filterBy('destroyed');
    destroyedToasts.forEach((dt) => {
      this.get('toasts').removeObject(dt);
    });
  })

});

export default ToastService;
