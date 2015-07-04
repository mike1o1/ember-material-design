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
  isTargetModeMenuOpen: false,

  actions: {
    announceClick(number) {
      console.log('click ', number);
    },

    toggleMenu(menu) {
      menu.toggleProperty('isOpen');
    },

    toggleTargetModeMenu() {
      this.toggleProperty('isTargetModeMenuOpen');
    },

    toggleTargetModeWithOffsetMenu() {
      this.toggleProperty('isTargetModeWithOffsetMenuOpen');
    },

    toggleTargetModeWithPositionModeMenu() {
      this.toggleProperty('isTargetModeWithPositionModeOpen');
    }

  }



})
