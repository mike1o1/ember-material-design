import Ember from 'ember';

var SidenavController = Ember.Controller.extend({

  mediaQueries: Ember.inject.service('media-queries'),



  init: function() {
    this.get('mediaQueries').match('gt-md', '(min-width: 960px)');
    //this.set('sidebarLocked', this.get('mediaQueries.isGtSm'));
  },

  sidebarLeftVisible: false,
  sidebarRightVisible: false,

  sidebarLeftLocked: Ember.computed('mediaQueries.isGtMd', function() {
    return this.get('mediaQueries.isGtMd');
  }),

  actions: {
    toggleSidebarLeft: function() {
      this.toggleProperty('sidebarLeftVisible');
    },

    toggleSidebarRight: function() {
      this.toggleProperty('sidebarRightVisible');
    }
  }

});

export default SidenavController;
