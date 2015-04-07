import Ember from 'ember';

export default Ember.Controller.extend({
    todos: Ember.A([
        {
            face : 'http://lorempixel.com/50/50/people',
            what: 'Brunch this weekend?',
            who: 'Min Li Chan',
            when: '3:08PM',
            notes: " I'll be in your neighborhood doing errands"
        },
        {
            face : 'http://lorempixel.com/50/50/people',
            what: 'Brunch this weekend?',
            who: 'Min Li Chan',
            when: '3:08PM',
            notes: " I'll be in your neighborhood doing errands"
        },
        {
            face : 'http://lorempixel.com/50/50/people',
            what: 'Brunch this weekend?',
            who: 'Min Li Chan',
            when: '3:08PM',
            notes: " I'll be in your neighborhood doing errands"
        },
        {
            face : 'http://lorempixel.com/50/50/people',
            what: 'Brunch this weekend?',
            who: 'Min Li Chan',
            when: '3:08PM',
            notes: " I'll be in your neighborhood doing errands"
        },
        {
            face : 'http://lorempixel.com/50/50/people',
            what: 'Brunch this weekend?',
            who: 'Min Li Chan',
            when: '3:08PM',
            notes: " I'll be in your neighborhood doing errands"
        }
    ]),

    firstTodo: Ember.computed('', function() {
        return this.get('todos')[0];
    })
});
