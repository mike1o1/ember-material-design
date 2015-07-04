import Ember from 'ember';

function findParent($rootElement) {
  var el;
  if ($rootElement[0] && $rootElement[0].querySelector) {
    el = $rootElement[0].querySelector(':not(svg) > body');
  }
  if (!el) {
    el = $rootElement[0];
  }

  if (el.nodeName === '#comment') {
    el = document[0].body;
  }

  return Ember.$(el);

}

function clamp(pos, bounds, containerNode) {
  pos.top = Math.max(Math.min(pos.top, bounds.bottom - containerNode.offsetHeight), bounds.top);
  pos.left = Math.max(Math.min(pos.left, bounds.right - containerNode.offsetWidth), bounds.left);
}

const MENU_EDGE_MARGIN = 8;

var MdMenuComponent = Ember.Component.extend({

  tagName: 'md-menu',
  mdOffset: '',
  isOpen: false,
  menuContainer: null,
  menuContents: null,
  backdrop: null,
  rootElement: null,
  parent: null,
  isRemoved: false,
  alreadyOpen: false,
  'md-offset': '',
  'md-position-mode': '',

  didInsertElement() {
    this._super(...arguments);
    this.setupMenuContents();
  },

  willRemoveElement() {
    this._super(...arguments);
  },

  setupMenuContents() {
    this.backdrop = Ember.$('<md-backdrop class="md-menu-backdrop md-click-catcher">');
    this.rootElement = Ember.$(this.container.lookup('application:main').get('rootElement'));
    this.parent = findParent(this.rootElement);

    // move the menu content to a the menu container
    this.menuContainer = Ember.$('<div class="md-open-menu-container md-whiteframe-z2"></div>');
    this.menuContents = this.$().children()[1];
    this.$menuContents = Ember.$(this.menuContents);
    this.menuContainer.append(this.menuContents);

  },

  toggleVisibility: Ember.observer('isOpen', function() {
    if (this.get('isOpen')) {
      this.openMenu();
    } else {
      this.closeMenu();
    }
  }),

  openMenu() {

    this.set('isRemoved', false);

    this.parent.append(this.backdrop);

    this.parent.append(this.menuContainer);

    this.menuContainer.removeClass('md-leave');

    Ember.run.later(this, this.activateInteraction, 75);

    Ember.$(window).on('resize.md-menu', () => {
      Ember.run.debounce(this, () => {
        this.positionMenu(this.menuContainer);
      }, 16);

    });
    Ember.$(window).on('orientationchange.md-menu', () => {
      Ember.run.debounce(this, () => {
        this.positionMenu(this.menuContainer);
      }, 16);
    });

    this.showMenu();
  },

  closeMenu() {
    this.set('isRemoved', true);
    this.menuContainer.removeClass('md-active')
      .addClass('md-leave');

    Ember.run.later(this, () => {
      this.menuContainer.removeClass('md-clickable');

      if (this.backdrop) {
        this.backdrop.remove();
      }

      Ember.$(window).off('.md-menu');

      this.menuContainer.remove();

    }, 350);

  },

  activateInteraction() {
    this.menuContainer.addClass('md-clickable');

    // close on backdrop click
    this.backdrop.on('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      this.set('isOpen', false);
    });

    // wite up keyboard listeners
    this.$menuContents.on('keydown', (ev) => {
      switch (ev.keyCode) {
        case 27:
          this.set('isOpen', false);
          break;
      }

    });

    this.$menuContents.on('click', (e) => {

      this.checkClickTarget(e);
    });

    // kick off initial focus in the menu on the first element
    var focusTarget = this.menuContents.querySelector('[md-menu-focus-target]');
    if (!focusTarget) {
      focusTarget = this.menuContents.firstElementChild.firstElementChild;
    }

    focusTarget.focus();

  },

  checkClickTarget(e) {
    var target = e.target;

    // Traverse up the event until we get to the menuContainer to see
    // if there is a click and that the element is not disabled
    do {
      if (target === this.menuContents) {
        return;
      }

      if (target.hasAttribute('action')) {
        if (!target.hasAttribute('disabled')) {
          this.set('isOpen', false);
        }
        break;
      }

    } while (target = target.parentNode);

  },

  showMenu() {
    Ember.run.schedule('afterRender', () => {
      this.positionMenu(this.menuContainer);

      Ember.run.scheduleOnce('afterRender', () => {
        window.requestAnimationFrame(() => {
          this.menuContainer.addClass('md-active');
          this.set('alreadyOpen', true);
          this.menuContainer[0].style.transform = this.menuContainer[0].style.webkitTransform = '';
        });

      });
    });

  },

  positionMode: Ember.computed('md-position-mode', function() {
    var attachment = (this.get('md-position-mode') || 'target').split(' ');

    // If atachment is a single item, duplicate it for our second value
    // ie. 'target' -> 'target target'
    if (attachment.length === 1) {
      attachment.push(attachment[0]);
    }

    return {
      left: attachment[0],
      top: attachment[1]
    };
  }),

  offsets: Ember.computed('md-offset', function() {
    var offsets = (this.get('md-offset') || '0 0').split(' ').map(parseFloat);
    if (offsets.length === 2) {
      return {
        left: offsets[0],
        top: offsets[1]
      };
    } else if (offsets.length === 1) {
      return {
        top: offsets[0],
        left: offsets[0]
      };
    } else {
      throw Error('Invalid offsets specified. Please follow format <x, y> or <n>');
    }
  }),


  positionMenu(el) {
    if (this.get('isRemoved')) {
      console.log('its already removed');
      return;
    }

    var containerNode = el[0],
      openMenuNode = el[0].firstElementChild,
      openMenuNodeRect = openMenuNode.getBoundingClientRect(),
      boundryNode = this.parent[0],
      boundryNodeRect = boundryNode.getBoundingClientRect();

    var originNode = this.$()[0].querySelector('[md-menu-origin]'),
      originNodeRect = originNode.getBoundingClientRect();

    var bounds = {
      left: boundryNodeRect.left + MENU_EDGE_MARGIN,
      top: Math.max(boundryNodeRect.top, 0) + MENU_EDGE_MARGIN,
      bottom: Math.max(boundryNodeRect.bottom, Math.max(boundryNodeRect.top, 0) + boundryNodeRect.height) - MENU_EDGE_MARGIN,
      right: boundryNodeRect.right - MENU_EDGE_MARGIN
    };

    var alignTarget, alignTargetRect, existingOffsets;
    var positionMode = this.get('positionMode');

    if (positionMode.top === 'target' || positionMode.left === 'target' || positionMode.left === 'target-right') {
      // TODO: Allow centering on an arbitrary node, for now center on first menu-item's child
      alignTarget = openMenuNode.firstElementChild.firstElementChild || openMenuNode.firstElementChild;
      alignTarget = alignTarget.querySelector('[md-menu-align-target]') || alignTarget;
      alignTargetRect = alignTarget.getBoundingClientRect();

      existingOffsets = {
        top: parseFloat(containerNode.style.top || 0),
        left: parseFloat(containerNode.style.left || 0)
      };
    }

    var position = {};
    var transformOrigin = 'top ';

    switch (positionMode.top) {
      case 'target':
        position.top = existingOffsets.top + originNodeRect.top - alignTargetRect.top;
        break;
      default:
        throw new Error(`Invalid target mode "${positionMode.top}" specified for md-menu on Y axis.`);
    }

    switch (positionMode.left) {
      case 'target':
        position.left = existingOffsets.left + originNodeRect.left - alignTargetRect.left;
        transformOrigin += 'left';
        break;
      case 'target-right':
        position.left = originNodeRect.right - openMenuNodeRect.width + (openMenuNodeRect.right - alignTargetRect.right);
        transformOrigin += 'right';
        break;
      default:
        throw new Error(`Invalid target mode "${positionMode.left}" specified for md-menu on X axis.`);
    }

    var offsets = this.get('offsets');
    position.top += offsets.top;
    position.left += offsets.left;

    clamp(position, bounds, containerNode);

    el.css({
      top: `${position.top}px`,
      left: `${position.left}px`
    });

    containerNode.style.transformOrigin = containerNode.style.webkitTransformOrigin = transformOrigin;


    // Animate a scale out if we aren't just repositioning
    if (!this.get('alreadyOpen')) {
      var scaleX = Math.min(originNodeRect.width / containerNode.offsetWidth, 1.0),
        scaleY = Math.min(originNodeRect.height / containerNode.offsetHeight, 1.0);

      containerNode.style.transform = containerNode.style.webkitTransform = `scale(${scaleX}, ${scaleY})`;
    }

  }


});

export default MdMenuComponent;
