import Ember from 'ember';
import layout from '../templates/components/md-toast';
import LayoutRules from '../mixins/layout-rules';

var MdToast = Ember.Component.extend(LayoutRules, {
  layout: layout,
  tagName: 'md-toast',
  classNameBindings: ['toast.capsule:md-capsule',
    'toast.open:ng-enter-active',
    'toast.opening:ng-enter',
    'positionBinding',
    'destroyingClass'],

  didInsertElement() {
    this._super(...arguments);
    this.setupToast();
  },

  willDestroyElement() {
    this._super(...arguments);
    this.removeToast();
  },

  setupToast() {
    Ember.run.schedule('afterRender', () => {
      this.set('toast.open', true);
    });

    var delay = this.get('toast.hideDelay');

    if (delay && delay > 0) {
      Ember.run.later(this, () => {
        // destroy myself if I haven't been destroyed already.
        if (this.get('toast')) {
          this.set('toast.destroying', true);
        }
      }, delay);
    }
  },

  removeToast() {
    if (this.get('actionClicked')) {
      this.sendAction('toast.resolve');
    }
  },

  positionBinding: Ember.computed('toast.position', function() {
    var position = this.get('toast.position'),
        positions = '';

    if (!position) {
      return '';
    }

    position.split(' ').forEach((p) => {
      if (p.trim().length > 0) {
        positions = positions + 'md-' + p + ' ';
      }

    });

    return positions;
  }),

  openClass: Ember.computed('toast.open', function() {
    if (this.get('toast.open')) {
      return 'ng-enter-active';
    }

    return '';
  }),

  destroyingClass: Ember.computed('toast.destroying', function() {
    if (this.get('toast.destroying')) {
      return 'ng-leave ng-leave-active';
    }

    return '';
  }),

  destroying: Ember.observer('toast.destroying', function() {
    if (!this.get('toast.destroying')) {
      return;
    }

    this.beginPropertyChanges();
    this.set('toast.open', false);
    this.set('toast.opening', false);
    this.endPropertyChanges();

    Ember.run.later(this, () => {
      this.set('toast.destroyed', true);
    }, 400);
  }),

  buttonClass: Ember.computed('toast.highlightAction', function() {

    var highlight = this.get('toast.highlightAction');

    if (highlight) {

      return 'md-action md-highlight';
    }

    return 'md-action';
  }),

  toastOpenClass: Ember.computed('toast.position', function() {
    var position = this.get('toast.position');

    return 'md-toast-open' + (position.indexOf('top') > -1 ? 'top' : 'bottom');

  }),

  actions: {
    action: function() {
      this.beginPropertyChanges();

      this.set('actionClicked', true);
      this.set('toast.destroying', true);

      this.endPropertyChanges();
    }
  }

});

export default MdToast;
