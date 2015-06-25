import Ember from 'ember';
import BaseDemoController from '../controllers/base-demo-controller';

export default BaseDemoController.extend({

  demo: {
    isOpen: false,
    count: 0,
    selectedAlignment: 'md-left'
  }
});
