import Ember from 'ember';
import LayoutRules from '../mixins/layout-rules';

var MdSidenav = Ember.Component.extend(LayoutRules, {
  tagName: 'md-sidenav',

  mediaQueries: Ember.inject.service('media-queries'),

  classNames: ['md-closed'],
  classNameBindings: ['mediaQueries.isGtSm:md-locked-open'],

  setupMediaQuery: Ember.on('didInsertElement', function() {
    this.get('mediaQueries').match('gt-sm', '(min-width: 600px)');
  }),

  backdrop: Ember.computed('', function() {
    return Ember.$('<md-backdrop class="md-sidenav-backdrop md-opaque">');
  }),

  isLocked: Ember.observer('mediaQueries.isGtSm', function() {
    // how to animate?
    if (this.get('mediaQueries.isGtSm')) {
      this.$().addClass('md-locked-open');
    } else {
      this.$().removeClass('md-locked-open');
    }

  }),

  toggleSidebar: Ember.observer('sidebarVisible', function() {

    var sidebarVisible = this.get('sidebarVisible');

    var backdrop = this.get('backdrop');

    var closeBackdrop = (ev) => {
      ev.preventDefault();
      ev.stopPropagation();

      this.set('sidebarVisible', false);
    };

    backdrop[sidebarVisible ? 'on' : 'off']('click', closeBackdrop);

    if (sidebarVisible) {
      this.$().removeClass('md-closed');
      this.get('parentView').$().prepend(backdrop);
      backdrop.addClass('ng-enter');
      backdrop.removeClass('ng-leave');
    } else {
      this.$().addClass('md-closed');
      backdrop.removeClass('ng-enter');
      backdrop.addClass('ng-leave');

      Ember.run.later(() => {
        backdrop.remove();
      }, 0.2 * 1000);
      //backdrop.remove();
    }
  })


});

export default MdSidenav;
