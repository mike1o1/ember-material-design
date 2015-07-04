import Ember from 'ember';

var ApplicationRoute = Ember.Route.extend({

  actions: {
    showInterimElement(elementName, context) {
      var applicationController = this.controller;

      applicationController.setProperties({
        interimElementName: elementName,
        interimContext: context,
        isInterimElementVisible: true
      });
    },

    closeInterimElement() {
      var applicationController = this.controller;

      applicationController.set('isInterimElementVisible', false);
    }
  }

});

export default ApplicationRoute;
