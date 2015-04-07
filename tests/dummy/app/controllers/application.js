import Ember from 'ember';

var ApplicationController = Ember.Controller.extend({

  actions: {
    toggleSidebar: function() {
      this.toggleProperty('sidebarVisible');
    }
  }

});

export default ApplicationController;
