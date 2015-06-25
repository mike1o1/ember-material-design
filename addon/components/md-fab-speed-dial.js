import Ember from 'ember';
import layout from '../templates/components/md-fab-speed-dial';

export default Ember.Component.extend({
  layout: layout,
  tagName: 'md-fab-speed-dial',
  'md-direction': 'down',
  classNameBindings: ['md-open:md-is-open', 'directionClass'],

  didInsertElement() {
    this._super(...arguments);
    this.setupComponent();
  },


  setupComponent() {
    this.addObserver('md-open', function() {
      this.processAnimations();
    });

    this.addObserver('md-direction', function() {
      this.processAnimations();
    });

    this.processAnimations();


  },

  processAnimations() {
    if (this.$().hasClass('md-fling')) {
      this.flingAnimation();
    }

    if (this.$().hasClass('md-scale')) {
      this.scaleAnimation();
    }
  },


  mouseEnter() {
    this.set('md-open', true);
  },

  mouseLeave() {
    this.set('md-open', false);
  },

  directionClass: Ember.computed('md-direction', function() {
    var direction = this.get('md-direction');
    return `md-${direction}`;
  }),

  flingAnimation() {

    if (!this.$().hasClass('md-fling')) {
      return;
    }

    var element = this.$();
    var el = element[0];
    var items = el.querySelectorAll('.md-fab-action-item');

    // Grab our element which stores CSS variables
    var variablesElement = el.querySelector('.md-css-variables');

    // Setup JS variables based on our CSS variables
    var startZIndex = variablesElement.style.zIndex;

    // Always reset the items to their natural position/state
    Ember.EnumerableUtils.forEach(items, (item, index) => {
      var styles = item.style;

      styles.transform = '';
      styles.transitionDelay = '';
      styles.opacity = 1;

      // Make the items closest to the trigger have the highest z-index
      item.style.zIndex = (items.length - index) + startZIndex;
    });

    // If the control is closed, hide the items behind the trigger
    if (!this.get('md-open')) {
      Ember.EnumerableUtils.forEach(items, (item, index) => {
        var newPosition, axis;

        switch (this.get('md-direction')) {
          case 'up':
            newPosition = item.scrollHeight * (index + 1);
            axis = 'Y';
            break;
          case 'down':
            newPosition = -item.scrollHeight * (index + 1);
            axis = 'Y';
            break;
          case 'left':
            newPosition = item.scrollWidth * (index + 1);
            axis = 'X';
            break;
          case 'right':
            newPosition = -item.scrollWidth * (index + 1);
            axis = 'X';
            break;
        }

        item.style.transform = `translate${axis}(${newPosition}px)`;

      });
    }
  },

  scaleAnimation() {
    var delay = 65;

    var element = this.$();
    var el = element[0];
    var items = el.querySelectorAll('.md-fab-action-item');

    // Always reset the items to their natural position/state
    Ember.EnumerableUtils.forEach(items, (item, index) => {
      var styles = item.style,
        offsetDelay = index * delay;

      styles.opacity = this.get('md-open') ? 1 : 0;
      styles.transform = this.get('md-open') ? 'scale(1)' : 'scale(0)';
      styles.transitionDelay = `${this.get('md-open') ? offsetDelay : (items.length - offsetDelay)}ms`;
    });
  }

});
