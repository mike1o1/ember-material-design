import Ember from 'ember';

var BaseRoute = Ember.Route.extend({
	setupController: function(controller, model) {
		this._super(controller, model);

		this.controllerFor('application').set('demoName', this.get('demoName'));
	}

});

export default BaseRoute;