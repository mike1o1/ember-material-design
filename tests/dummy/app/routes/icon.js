import Ember from 'ember';

export default Ember.Route.extend({
  iconService: Ember.inject.service('icon'),

  setupController: function(controller, model) {
    this._super(controller, model);

    var is = this.get('iconService');

    is.iconSet('social', 'images/icons/sets/social-icons.svg', 24);
    is.defaultIconSet('images/icons/sets/core-icons.svg', 24);

  }
});
