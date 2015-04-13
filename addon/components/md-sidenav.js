import Ember from 'ember';
import LayoutRules from '../mixins/layout-rules';

var MdSidenav = Ember.Component.extend(LayoutRules, {
    tagName: 'md-sidenav',

    classNames: ['md-closed'],
    classNameBindings: ['isLockedOpen:md-locked-open'],

    isLockedOpen: null,

    backdrop: Ember.computed('', function() {
        return Ember.$('<md-backdrop class="md-sidenav-backdrop md-opaque">');
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
