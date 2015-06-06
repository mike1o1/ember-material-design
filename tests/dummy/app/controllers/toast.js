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

  toastPositionText: Ember.computed('toastPosition.@each.enabled', function() {
    var tp = this.get('toastPosition'),
        tpString = '';

    tp.forEach((position) => {
      if (position.enabled) {
        tpString = tpString + position.name + ' ';
      }
    });

    return tpString;
  })
});

export default ToastController;
