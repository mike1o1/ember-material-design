import Ember from 'ember';
import BaseDemoController from '../controllers/base-demo-controller';

export default BaseDemoController.extend({
    demoName: 'divider',

    init: function() {

        var content = [
            {name: 'hbs', content: 'divider.hbs'},
            {name: 'controller', content: 'divider-controller.js'}
        ];

        this.setSourceFiles(content);
    },

    messages: Ember.A([{
        face: 'http://lorempixel.com/50/50/people',
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
    }, {
        face: 'http://lorempixel.com/50/50/people',
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
    }, {
        face: 'http://lorempixel.com/50/50/people',
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
    }, {
        face: 'http://lorempixel.com/50/50/people',
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
    }, {
        face: 'http://lorempixel.com/50/50/people',
        what: 'Brunch this weekend?',
        who: 'Min Li Chan',
        when: '3:08PM',
        notes: " I'll be in your neighborhood doing errands"
    }])
});
