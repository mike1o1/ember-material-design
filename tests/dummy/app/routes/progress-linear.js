import Ember from 'ember';

export default Ember.Route.extend({

	demoName: 'Progress Linear',

    setupController: function(controller, model) {
        this._super(controller, model);

        controller.setupTimer();
        controller.setupTimer2();

        this.controllerFor('application').set('demoName', this.get('demoName'));
    } 
}); 