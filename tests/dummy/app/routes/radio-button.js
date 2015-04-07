import Ember from 'ember';

export default Ember.Route.extend({

    icons: Ember.inject.service('icon'),

    setupController: function(controller, setup) {
        this._super(controller, setup);

        var iconService = this.get('icons');

        iconService.iconSet('avatars', 'icons/avatar-icons.svg', 128);
    }
});
