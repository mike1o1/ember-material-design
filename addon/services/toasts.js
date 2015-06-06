import Ember from 'ember';

var ToastService = Ember.Service.extend({

  toasts: Ember.A([]),

  defaultToast: {
    position: 'bottom left',
    hideDelay: 3000,
    opening: true,
    capsule: false,
    highlightAction: false
  },

  addToast: function(toast) {

    toast = Ember.$.extend({}, this.defaultToast, toast);
    console.log(toast);
    this.get('toasts').pushObject(toast);
  },

  destroyToasts: Ember.observer('toasts.@each.destroyed', function() {
    var destroyedToasts = this.get('toasts').filterBy('destroyed');
    destroyedToasts.forEach((dt) => {
      this.get('toasts').removeObject(dt);
    });
  })

});

export default ToastService;
