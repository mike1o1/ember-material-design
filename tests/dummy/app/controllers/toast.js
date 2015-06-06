import Ember from 'ember';
import BaseDemoController from '../controllers/base-demo-controller';

var ToastController = BaseDemoController.extend({
  demoName: 'toast',

  init: function() {
    var content = [
      {name: 'hbs', content: 'toast.hbs'},
      {name: 'controller', content: 'toast-controller.js'}
    ];

    this.setSourceFiles(content);
  },

  toastService: Ember.inject.service('toasts'),

  toastPosition: Ember.A([
    {
      name: 'bottom',
      enabled: false
    }, {
      name: 'top',
      enabled: true
    }, {
      name: 'left',
      enabled: false
    }, {
      name: 'right',
      enabled: true
    }
  ]),

  toastNotifications: Ember.computed('toastService.toasts.[]', function() {
    var toasts = this.get('toastService.toasts');

    return toasts;
  }),

  toastPositionText: Ember.computed('toastPosition.@each.enabled', function() {
    var tp = this.get('toastPosition'),
      tpString = '';

    tp.forEach((position) => {
      if (position.enabled) {
        tpString = tpString + position.name + ' ';
      }
    });

    return tpString;
  }),

  actions: {
    showCustomToast: function() {
      var ts = this.get('toastService');

      ts.addToast({
        position: this.get('toastPositionText'),
        action: 'Custom',
        content: 'Not implemented yet! :(',
        hideDelay: 5000
      });
    },

    showSimpleToast: function() {
      this.get('toastService').addToast({
        content: 'Simple Toast!',
        position: this.get('toastPositionText')
      });
    },


    showActionToast: function() {
      var ts = this.get('toastService');

      ts.addToast({
        position: this.get('toastPositionText'),
        action: 'OK',
        content: 'Action Toast!',
        resolve: 'actionAction'
      })
    },

    actionAction: function() {
      alert('You clicked \'OK\'.');
    }
  }
});

export default ToastController;
