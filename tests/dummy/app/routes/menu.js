import Ember from 'ember';
import BaseRoute from './base-route';

export default BaseRoute.extend({

  demoName: 'Menu',

  iconService: Ember.inject.service('icon'),

  setupController(controller, model) {
    this._super(...arguments);

    var is = this.get('iconService');

    is.iconSet('social', 'images/icons/sets/social-icons.svg', 24);
    is.iconSet('call', 'images/icons/sets/communication-icons.svg', 24);
  }


});
