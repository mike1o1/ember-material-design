import Ember from 'ember';
import BaseDemoController from '../controllers/base-demo-controller';

export default BaseDemoController.extend({

  demo: {
    topDirections: ['left', 'up'],
    bottomDirections: ['down', 'right'],

    isOpen: false,

    availableModes: Ember.A(['md-fling', 'md-scale']),
    selectedMode: 'md-fling',

    availableDirections: Ember.A(['up', 'down', 'left', 'right']),
    selectedDirection: 'up'
  }
});
