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

  showSourcePositionModes: false,

  setSourcePositionModes: Ember.on('init', function() {
    var sourceFiles = Ember.ArrayProxy.create({
      content: Ember.A([
        {name: 'hbs', content: 'menu-position-modes.hbs'},
        {name: 'controller', content: 'menu-controller.js'}
      ])
    });

    this.set('sourceFilesPositionModes', sourceFiles);
  }),


  isMenuOpen: false,
  isTargetModeMenuOpen: false,

  actions: {
    announceClick(number) {
      console.log('click ', number);
    },

    toggleMenu(menu) {
      menu.toggleProperty('isOpen');
    },

    showSourcePositionModes() {
      this.toggleProperty('showSourcePositionModes');
    }
  }
});
