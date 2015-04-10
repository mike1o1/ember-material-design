import Ember from 'ember';

export default Ember.Route.extend({

	demoName: 'Progress Circular',

    setupController: function(controller, model) {
        this._super(controller, model);

        controller.setupTimer();

        this.controllerFor('application').set('demoName', this.get('demoName'));

    }
});
