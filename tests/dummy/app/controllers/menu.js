import Ember from 'ember';
import BaseDemoController from '../controllers/base-demo-controller';

export default BaseDemoController.extend({

  init() {
    var content = [
      {name: 'hbs', content: 'menu.hbs'},
      {name: 'controller', content: 'menu-controller.js'}
    ];

    this.setSourceFiles(content);
  },

  isMenuOpen: false,

  actions: {
    toggleMenu() {
      this.toggleProperty('isMenuOpen');
    }
  }



})
