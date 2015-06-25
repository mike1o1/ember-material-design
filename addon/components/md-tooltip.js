import Ember from 'ember';
import LayoutRules from '../mixins/layout-rules';

const TOOLTIP_SHOW_DELAY = 300;
const TOOLTIP_WINDOW_EDGE_SPACE = 8;

var MdTooltip = Ember.Component.extend(LayoutRules, {

    tagName: 'md-tooltip',

    utilityService: Ember.inject.service('utility'),

    parent: null,
    background: null,
    content: null,
    direction: null,
    current: null,
    tooltipParent: null,
    delay: TOOLTIP_SHOW_DELAY,

    visible: false,

    didInsertElement() {
        this._super(...arguments);
        this.setupComponent();
    },

    rootElement: Ember.computed(function() {
        var re = this.container.lookup('application:main').get('rootElement');
        return Ember.$(re);
    }),

    bindEvents() {
        var parent = this.get('parent');

        parent.on('focus mouseenter touchstart', () => {
            this.setVisible(true);
        });

        parent.on('blur mouseleave touchend touchcancel', () => {
            if (document.activeElement !== parent[0] || this.get('autohide')) {
                this.setVisible(false);
            }

        });
    },

    showTooltip: Ember.observer('visible', function() {
        if (!this.get('visible')) {
            return;
        }

        var tooltipParent = this.get('tooltipParent');

        tooltipParent.append(this.$());

        // Check if we should display it or not.
        var computedStyles = window.getComputedStyle(this.$()[0]);
        if (Ember.isPresent(computedStyles.display) && computedStyles.display === 'none') {
            this.$().detach();
            return;
        }

        this.positionTooltip();
    }),

    setupComponent() {

        this.parent = this.getParentWithPointerEvents();
        this.background = Ember.$(this.$()[0].getElementsByClassName('md-background')[0]);
        this.content = Ember.$(this.$()[0].getElementsByClassName('md-content')[0]);
        this.current = this.getNearestContentElement();
        this.tooltipParent = Ember.$(this.current || document.body);

        Ember.run.schedule('afterRender', () => this.bindEvents());
    },

    getParentWithPointerEvents() {
        var parent = this.$().parent();
        while (window.getComputedStyle(parent[0])['pointer-events'] === 'none') {
            parent = parent.parent();
        }

        return parent;
    },

    getNearestContentElement() {
        var current = this.$().parent()[0];
        // Look for nearest parent md-content, stopping at the root element
        while (current && current !== this.get('rootElement')[0] && current !== document.body) {
            current = current.parentNode;
        }

        return current;
    },

    setVisible(value) {
        this.setVisible.value = !!value;
        if (!this.setVisible.queued) {
            if (value) {
                this.setVisible.queued = true;
                Ember.run.later(() => {
                    this.set('visible', this.setVisible.value);
                    this.setVisible.queued = false;
                }, this.get('delay'));
            } else {
                this.set('visible', false);
            }
        }
    },

    positionTooltip() {

        var direction = this.get('direction');
        var background = this.get('background');
        var tooltipParent = this.tooltipParent;
        var tipRect = this.get('utilityService').offsetRect(this.$(), this.tooltipParent);
        var parentRect = this.get('utilityService').offsetRect(this.parent, this.tooltipParent);
        var newPosition = getPosition(this.get('direction'));

        if (direction) {
            newPosition = fitInParent(newPosition);
        } else if (newPosition.top > this.$().prop('offsetParent').scrollHeight - tipRect.height - TOOLTIP_WINDOW_EDGE_SPACE) {
            newPosition = fitInParent(getPosition('top'));
        }

        this.$().css({
            top: newPosition.top + 'px',
            left: newPosition.left + 'px'
        });

        positionBackground();

        function positionBackground() {
            var size = direction === 'left' || direction === 'right' ? Math.sqrt(Math.pow(tipRect.width, 2) + Math.pow(tipRect.height / 2, 2)) * 2 : Math.sqrt(Math.pow(tipRect.width / 2, 2) + Math.pow(tipRect.height, 2)) * 2,
                position = direction === 'left' ? {
                    left: 100,
                    top: 50
                } : direction === 'right' ? {
                    left: 0,
                    top: 50
                } : direction === 'top' ? {
                    left: 50,
                    top: 100
                } : {
                    left: 50,
                    top: 0
                };

            background.css({
                width: size + 'px',
                height: size + 'px',
                left: position.left + '%',
                top: position.top + '%'
            });
        }

        function fitInParent(pos) {
            var newPosition = {
                left: pos.left,
                top: pos.top
            };
            newPosition.left = Math.min(newPosition.left, tooltipParent.prop('scrollWidth') - tipRect.width - TOOLTIP_WINDOW_EDGE_SPACE);
            newPosition.left = Math.min(newPosition.left, TOOLTIP_WINDOW_EDGE_SPACE);
            newPosition.top = Math.min(newPosition.top, tooltipParent.prop('scrollHeight') - tipRect.height - TOOLTIP_WINDOW_EDGE_SPACE);
            newPosition.top = Math.min(newPosition.top, TOOLTIP_WINDOW_EDGE_SPACE);
            return newPosition;
        }

        function getPosition(dir) {
            return dir === 'left' ? {
                left: parentRect.left - tipRect.width - TOOLTIP_WINDOW_EDGE_SPACE,
                top: parentRect.top + parentRect.height / 2 - tipRect.height / 2
            } : dir === 'right' ? {
                left: parentRect.left + parentRect.width + TOOLTIP_WINDOW_EDGE_SPACE,
                top: parentRect.top + parentRect.height / 2 - tipRect.height / 2
            } : dir === 'top' ? {
                left: parentRect.left + parentRect.width / 2 - tipRect.width / 2,
                top: parentRect.top - tipRect.height - TOOLTIP_WINDOW_EDGE_SPACE
            } : {
                left: parentRect.left + parentRect.width / 2 - tipRect.width / 2,
                top: parentRect.top + parentRect.height + TOOLTIP_WINDOW_EDGE_SPACE
            };
        }

    }

});


export default MdTooltip;
