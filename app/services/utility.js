import Ember from 'ember';

function getNode(el) {
    return el[0] || el;
}

var UtilityService = Ember.Service.extend({

    clientRect(element, offsetParent, isOffsetRect) {
        var node = getNode(element);
        offsetParent = getNode(offsetParent || node.offsetParent || document.body);
        var nodeRect = node.getBoundingClientRect();

        var offsetRect = isOffsetRect ?
            offsetParent.getBoundingClientRect() :
            { left: 0, top: 0, width: 0, height: 0 };

        return {
            left: nodeRect.left - offsetRect.left,
            top: nodeRect.top - offsetRect.top,
            width: nodeRect.width,
            height: nodeRect.height
        };
    },

    offsetRect(element, offsetParent) {
        return this.clientRect(element, offsetParent, true);
    }


});

export default UtilityService;
