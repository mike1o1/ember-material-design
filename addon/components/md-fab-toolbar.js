import Ember from 'ember';
import layout from '../templates/components/md-fab-toolbar';

export default Ember.Component.extend({
  layout: layout,
  tagName: 'md-fab-toolbar',
  classNames: ['md-fab-toolbar'],
  classNameBindings: ['md-open:md-is-open'],
  'md-open': false,

  didInsertElement() {
    this._super(...arguments);
    this.setupComponent();
  },

  setupComponent() {
    var fabTrigger = this.$().find('md-fab-trigger');

    fabTrigger.find('button').attr('tabindex', '-1');
    fabTrigger.find('button').prepend('<div class="md-fab-toolbar-background"></div>');

    this.addObserver('md-open', function() {
      this.runAnimation();
    });

    this.runAnimation();
  },

  mouseEnter() {
    this.set('md-open', true);
  },

  mouseLeave() {
    this.set('md-open', false);
  },

  runAnimation() {
    var el = this.$()[0];
    var element = this.$();

    // Grab the relevant child elements
    var backgroundElement = el.querySelector('.md-fab-toolbar-background');
    var triggerElement = el.querySelector('md-fab-trigger button');
    var iconElement = el.querySelector('md-fab-trigger button md-icon');
    var actions = element.find('md-fab-actions').children();

    // If we have both elements, use them to position the new background
    if (triggerElement && backgroundElement) {
      // Get our variables
      var color = window.getComputedStyle(triggerElement).getPropertyValue('background-color');
      var width = el.offsetWidth;

      // Make a square
      var scale = width * 2;

      // Set some basic styles no matter what animation we're doing
      backgroundElement.style.backgroundColor = color;
      backgroundElement.style.borderRadius = `${width}px`;

      // If we're open
      if (this.get('md-open')) {

        // Set the width/height to take up the full toolbar width
        backgroundElement.style.width = `${scale}px`;
        backgroundElement.style.height = `${scale}px`;

        // Set the top/left to move up/left (or right) by the scale width/height
        backgroundElement.style.top = `${-(scale / 2)}px`;

        if (element.hasClass('md-left')) {
          backgroundElement.style.left = `${-(scale / 2)}px`;
          backgroundElement.style.right = null;
        }

        if (element.hasClass('md-right')) {
          backgroundElement.style.right = `${-(scale / 2)}px`;
          backgroundElement.style.left = null;
        }

        // Set the next close animation to have the proper delays
        backgroundElement.style.transitionDelay = '0ms';
        iconElement.style.transitionDelay = '.3s';

        // Apply a transition delay to actions
        Ember.EnumerableUtils.forEach(actions, (action, index) => {
          action.style.transitionDelay = `${(actions.length - index) * 25}ms`;
        });

      } else {
        // Otherwise, set the width/height to the trigger's width/height
        backgroundElement.style.width = `${triggerElement.offsetWidth}px`;
        backgroundElement.style.height = `${triggerElement.offsetHeight}px`;

        // Reset the position
        backgroundElement.style.top = '0px';

        if (element.hasClass('md-left')) {
          backgroundElement.style.left = '0px';
          backgroundElement.style.right = null;
        }

        if (element.hasClass('md-right')) {
          backgroundElement.style.right = '0px';
          backgroundElement.style.left = null;
        }

        // Set the next open animation to have the proper delays
        backgroundElement.style.transitionDelay = '200ms';
        iconElement.style.transitionDelay = '0ms';

        // Apply a transition delay to actions
        Ember.EnumerableUtils.forEach(actions, (action, index) => {
          action.style.transitionDelay = `${(index * 25)}ms`;
        });
      }
    }
  }
});
