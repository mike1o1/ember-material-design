import Ember from 'ember';

function getEventPoint(ev) {
    ev = ev.originalEvent || ev;
    return  (ev.touches && ev.touches[0]) ||
            (ev.changedTouches && ev.changedTouches[0]) ||
            ev;
}

function makeStartPointer(ev) {
    var point = getEventPoint(ev);
    var startPointer = {
        startTime: +Date.now(),
        target: ev.target,
        // 'p' for pointer, 'm' for mouse, 't' for touch
        type: ev.type.charAt(0)
    };

    startPointer.startX = startPointer.x = point.pageX;
    startPointer.startY = startPointer.y = point.pageY;

    return startPointer;
}

function typesMatch(ev, pointer) {
    return ev && pointer && ev.type.charAt(0) === pointer.type;
}

function updatePointerState(ev, pointer) {
    var point = getEventPoint(ev);
    var x = pointer.x = point.pageX;
    var y = pointer.y = point.pageY;

    pointer.distanceX = x - pointer.startX;
    pointer.distanceY = y - pointer.startY;
    pointer.distance = Math.sqrt(
        pointer.distanceX * pointer.distanceX + pointer.distanceY * pointer.distanceY
    );

    pointer.directionX = pointer.distanceX > 0 ? 'right' : pointer.distanceX < 0 ? 'left' : '';
    pointer.directionY = pointer.distanceY > 0 ? 'up' : pointer.distanceY < 0 ? 'down' : '';

    pointer.duration = +Date.now() - pointer.startTime;
    pointer.velocityX = pointer.distanceX / pointer.duration;
    pointer.velocityY = pointer.distanceY / pointer.duration;
}

var pointer, lastPointer;

function GestureHandler(name) {
    this.name = name;
    this.state = {};
}

GestureHandler.prototype = {
    onStart() {},
    onMove() {},
    onEnd() {},
    onCancel() {},
    options: {},

    start: function(ev, pointer) {
        if (this.state.isRunning) {
            return;
        }

        this.state = {
            isRunning: true,
            options: Ember.merge({}, this.options)
        };

        this.onStart(ev, pointer);
    },

    move: function(ev, pointer) {
        if (!this.state.isRunning) {
            return;
        }

        this.onMove(ev, pointer);
    },

    end: function(ev, pointer) {
        if (!this.state.isRunning) {
            return;
        }

        this.onEnd(ev, pointer);
        this.state.isRunning = false;
    },

    cancel: function(ev, pointer) {
        this.onCancel(ev, pointer);
        this.state = {};
    }
};



var GestureEventsMixin = Ember.Mixin.create(Ember.Evented, {


    handlers: {},

    gestureStart: Ember.on('mouseDown', 'touchStart', 'pointerDown', function(ev) {
        // if we're already touched down, abort
        if (pointer) {
            return;
        }

        var now = +Date.now();

        if (lastPointer && !typesMatch(ev, lastPointer) && (now - lastPointer.endTime < 1500)) {
            return;
        }

        pointer =  makeStartPointer(ev);

        this.runHandlers('start', ev);

    }),

    gestureMove: Ember.on('mouseMove', 'touchMove', 'pointerMove', function(ev) {
        if (!pointer || !typesMatch(ev, pointer)) {
            return;
        }

        updatePointerState(ev, pointer);
        this.runHandlers('move', ev);
    }),

    gestureEnd: Ember.on('mouseUp', 'mouseLeave', 'touchEnd', 'touchCancel', 'pointerUp', 'pointerCancel', function(ev) {
        if (!pointer || !typesMatch(ev, pointer)) {
            return;
        }

        updatePointerState(ev, pointer);
        pointer.endTime = +Date.now();

        this.runHandlers('end', ev);

        lastPointer = pointer;
        pointer = null;

    }),

    addHandler: function(name, definition) {
        var handler = new GestureHandler(name);
        Ember.merge(handler, definition);
        this.handlers[name] = handler;
    },

    pressStart: Ember.on('press.start', function() {

    }),

    pressOnStart: Ember.on('press.onStart', function(ev) {
        this.trigger('$md.pressdown', ev);
    }),

    pressOnEnd: Ember.on('press.onEnd', function(ev) {
        this.trigger('$md.pressup', ev);
    })




});

export default GestureEventsMixin;
