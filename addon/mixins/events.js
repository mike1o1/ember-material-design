import Ember from 'ember';

var EventsMixin = Ember.Mixin.create({


    /*
     * Start events
     */
    mouseDown: function(e) {
        return this.start(e);
    },

    touchStart: function(e) {
        return this.start(e);
    },

    pointerDown: function(e) {
        return this.start(e);
    },

    start: Ember.K,


    /*
     * Move events
     */

    mouseMove: function(e) {
        return this.move(e);
    },

    touchMove: function(e) {
        return this.move(e);
    },

    pointerMove: function(e) {
        return this.move(e);
    },

    move: Ember.K,

    /*
     * End events
     */

    mouseUp: function(e) {
        return this.end(e);
    },

    mouseLeave: function(e) {
        return this.end(e);
    },

    touchEnd: function(e) {
        return this.end(e);
    },

    touchCancel: function(e) {
        return this.end(e);
    },

    pointerUp: function(e) {
        return this.end(e);
    },

    pointerCancel: function(e) {
        return this.end(e);
    },

    end: Ember.K

});

export default EventsMixin;
