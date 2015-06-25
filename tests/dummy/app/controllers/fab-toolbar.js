import Ember from 'ember';
import BaseDemoController from '../controllers/base-demo-controller';

export default BaseDemoController.extend({

  init: function() {
    var content = [
      {name: 'hbs', content: 'fab-toolbar.hbs' },
      {name: 'controller', content: 'fab-toolbar.js' }
    ];

    this.setSourceFiles(content);
  },

  demo: {
    isOpen: false,
    count: 0,
    selectedAlignment: 'md-left'
  }
});
