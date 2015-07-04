import Ember from 'ember';
import BaseDemoController from '../controllers/base-demo-controller';

export default BaseDemoController.extend({

  actions: {
    announceClick(number) {
      console.log('click ', number);
    },

    toggleMenu(menu) {
      menu.toggleProperty('isOpen');
    }
  }
});
