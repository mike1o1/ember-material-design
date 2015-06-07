import Ember from 'ember';
import Toast from '../models/toast';

var ToastService = Ember.Service.extend({

  toasts: Ember.A([]),

  showToast: function(toast) {

    // check to see if there are existing toast and destroy them
    var existingToasts = this.get('toasts').filterBy('open');

    existingToasts.forEach((t) => {
      t.set('destroying', true);
    });

    toast.opening = true;
    var newToast = Toast.createWithMixins(toast);

    var delay = existingToasts.length > 0 ? 400 : 0;

    Ember.run.later(this, () => {
      this.get('toasts').pushObject(newToast);
      return newToast;
    }, delay);


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
