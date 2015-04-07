import Ember from 'ember';
//import { START_EVENTS, END_EVENTS } from '../utils/constants';

/**
 * Converts rgb value to rgba string
 *
 * @param {string} color rgb color string
 *
 * @returns {string} rgba color with 0.1 alpha
 */
function rgbToRGBA(color) {
    return color.replace(')', ', 0.1)').replace('(', 'a(');
}

/**
 * Converts rgba string to rgb, removing the alpha value
 *
 * @param {string} color rgba color
 *
 * @returns {string} rgb color
 */
function rgbaToRGB(color) {
    return color.replace('rgba', 'rgb').replace(/,[^\)\,]+\)/, ')');
}

/**
 * Converts a hex value to an rgba string
 *
 * @param {string} color hex value (3 or 6 digits) to be converted
 *
 * @returns {string} rgba color with 0.1 alpha
 */
function hexToRGBA(color) {
    var hex = color.chartAt(0) === '#' ? color.substr(1) : color,
        dig = hex.length / 3,
        red = hex.substr(0, dig),
        grn = hex.substr(dig, dig),
        blu = hex.substr(dig * 2);

    if (dig === 1) {
        red += red;
        grn += grn;
        blu += blu;
    }

    return 'rgba(' + parseInt(red, 16) + ',' + parseInt(grn, 16) + ',' + parseInt(blu, 16) + ',0.1)';
}

/**
 * Converts any color string to an rgba string
 *
 * @param {string} color color string to parse
 *
 * @returns {string} rgba color with 0.1 alpha
 */
function parseColor(color) {
    if (!color) {
        return;
    }
    if (color.indexOf('rgba') === 0) {
        return color.replace(/\d?\.?\d*\s*\)\s*$/, '0.1)');
    }
    if (color.indexOf('rgb') === 0) {
        return rgbToRGBA(color);
    }
    if (color.indexOf('#') === 0) {
        return hexToRGBA(color);
    }
}

var RippleService = Ember.Service.extend({

    constants: Ember.inject.service('constants'),

    attachButtonBehavior: function(element, options) {
        return this.attach(element, $.extend({
            fullRipple: true,
            isMenuItem: element.hasClass('md-menu-item'),
            center: false,
            dimBackground: true
        }, options));
    },

    attachCheckboxBehavior: function(element, options) {
        return this.attach(element, Ember.merge({
            center: true,
            dimBackground: false,
            fitRipple: true
        }, options));
    },

    attachTabBehavior: function(element, options) {
        return this.attach(element, Ember.merge({
            center: false,
            dimBackground: true,
            outline: false,
            rippleSize: 'full'
        }, options));
    },

    attach: function(element, options) {

        // check if element has md-no-ink attribute
        if (element[0].hasAttribute('mdNoInk')) {
            return Ember.K;
        }

        options = Ember.merge({
            colorElement: element,
            mousedown: true,
            hover: true,
            touch: true,
            center: false,
            mousedownPauseTime: 150,
            dimBackground: false,
            outline: false,
            fullRipple: true,
            isMenuItem: false,
            fitRipple: false

        }, options);

        var rippleSize,
            counter = 0,
            ripples = [],
            states = [],
            isActiveExpr = element.attr('md-highlight'),
            isActive = false,
            isHeld = false,
            node = element[0],
            rippleSizeSetting = element.attr('md-ripple-size'),
            color = parseColor(element.attr('md-ink-ripple')) || parseColor(options.colorElement.length && window.getComputedStyle(options.colorElement[0]).color || 'rgb(0, 0, 0)');

        switch (rippleSizeSetting) {
            case 'full':
                options.fullRipple = true;
                break;
            case 'partial':
                options.fullRipple = false;
                break;
        }

        if (options.mousedown) {
            element
                .on(this.get('constants.START_EVENTS'), onPressDown)
                .on(this.get('constants.END_EVENTS'), onPressUp);
        }

        function getRippleContainer() {
            var container = element.data('$mdRippleContainer');

            if (container) {
                return container;
            }

            container = $('<div class="md-ripple-container">');
            element.append(container);
            element.data('$mdRippleContainer', container);
            return container;
        }

        function removeElement(elem, wait) {
            ripples.splice(ripples.indexOf(elem), 1);
            if (ripples.length === 0) {
                getRippleContainer().css({backgroundColor: ''});
            }

            Ember.run.later(this, () => {
                elem.remove();
            }, wait);
        }

        function updateElement(elem) {
            var index = ripples.indexOf(elem),
                state = states[index] || {},
                elemIsActive = ripples.length > 1 ? false : isActive,
                elemIsHeld = ripples.length > 1 ? false : isHeld;

            if (elemIsActive || state.animating || elemIsHeld) {
                elem.addClass('md-ripple-visible');
            } else if (elem) {
                elem.removeClass('md-ripple-visible');

                if (options.outline) {
                    elem.css({
                        width: rippleSize + 'px',
                        height: rippleSize + 'px',
                        marginLeft: (rippleSize * -1) + 'px',
                        marginTop: (rippleSize * -1) + 'px'
                    });
                }

                removeElement(elem, options.outline ? 450 : 650);
            }
        }

        /**
         * Creates a ripple at the provided coordinates
         *
         * @param {number} left left cursor position
         * @param {number} top top cursor position
         *
         * @returns {*|jQuery|HTMLElement} the generated ripple element
         */
        function createRipple(left, top) {

            color = parseColor(element.attr('md-ink-ripple')) || parseColor(window.getComputedStyle(options.colorElement[0]).color || 'rgb(0, 0, 0)');

            var container = getRippleContainer(),
                size = getRippleSize(left, top),
                css = getRippleCss(size, left, top),
                elem = getRippleElement(css),
                index = ripples.indexOf(elem),
                state = states[index] || {};

            rippleSize = size;

            state.animating = true;

            Ember.run.schedule('render', this, () => {
                if (options.dimBackground) {
                    container.css({backgroundColor: color});
                }

                elem.addClass('md-ripple-placed md-ripple-scaled');
                if (options.outline) {
                    elem.css({
                        borderWidth: (size * 0.5) + 'px',
                        marginLeft: (size * -0.5) + 'px',
                        marginTop: (size * -0.5) + 'px'
                    });
                } else {
                    elem.css({left: '50%', top: '50% '});
                }

                updateElement(elem);

                Ember.run.later(this, () => {
                    state.animating = false;
                    updateElement(elem);
                }, (options.outline ? 450 : 225));

            });

            return elem;

            /**
             * Creates the ripple element with the provided css
             *
             * @param {object} css properties to be applied
             *
             * @returns {*|jQuery|HTMLElement} the generated ripple element
             */
            function getRippleElement(css) {
                var elem = $('<div class="md-ripple" data-counter="' + counter++ + '">');
                ripples.unshift(elem);
                states.unshift({animating: true});
                container.append(elem);
                css && elem.css(css);
                return elem;
            }

            /**
             * Calculate the ripple size
             * @param left
             * @param top
             * @returns {number} calculated ripple diameter
             */
            function getRippleSize(left, top) {
                var width = container.prop('offsetWidth'),
                    height = container.prop('offsetHeight'),
                    multiplier, size, rect;

                if (options.isMenuItem) {
                    size = Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2));
                } else if (options.outline) {
                    rect = node.getBoundingClientRect();
                    left -= rect.left;
                    top -= rect.top;
                    width = Math.max(left, width - left);
                    height = Math.max(top, height - top);
                    size = 2 * Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2));
                } else {
                    multiplier = options.fullRipple ? 1.1 : 0.8;
                    size = Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2)) * multiplier;
                    if (options.fitRipple) {
                        size = Math.min(height, width, size);
                    }
                }

                return size;
            }

            /**
             * Generates the ripple css
             *
             * @param {number} size the diameter of the ripple
             * @param {number} left the left cursor offset
             * @param {number} top the top cursor offset
             *
             * @returns {{backgroundColor: string, borderColor: string, width: string, height: string}}
             */
            function getRippleCss(size, left, top) {
                var rect = node.getBoundingClientRect(),
                    css = {
                        backgroundColor: rgbaToRGB(color),
                        borderColor: rgbaToRGB(color),
                        width: size + 'px',
                        height: size + 'px'
                    };

                if (options.outline) {
                    css.width = 0;
                    css.height = 0;
                } else {
                    css.marginLeft = css.marginTop = (size * -0.5) + 'px';
                }

                if (options.center) {
                    css.left = css.top = '50%';
                } else {
                    css.left = Math.round((left - rect.left) / container.prop('offsetWidth') * 100) + '%';
                    css.top = Math.round((top - rect.top) / container.prop('offsetHeight') * 100) + '%';
                }

                return css;
            }
        }

        function onPressDown(ev) {

            if (!isRippleAllowed()) {
                return;
            }

            var x = ev.clientX || ev.originalEvent.touches[0].clientX,
                y = ev.clientY || ev.originalEvent.touches[0].clientY;

            var ripple = createRipple(x, y);
            isHeld = true;
        }

        function isRippleAllowed() {
            var parent = node.parentNode;
            var grandparent = parent && parent.parentNode;
            var ancestor = grandparent && grandparent.parentNode;
            return !isDisabled(node) && !isDisabled(parent) && !isDisabled(grandparent) && !isDisabled(ancestor);

            function isDisabled(elem) {
                return elem && elem.hasAttribute && elem.hasAttribute('disabled');
            }
        }

        function onPressUp(ev) {
            isHeld = false;
            var ripple = ripples[ripples.length - 1];

            updateElement(ripple);
        }

    }

});

export default RippleService;
