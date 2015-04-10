import Ember from 'ember';

export default Ember.Controller.extend({
    data: {
        group1: 'Banana',
        group2: 2,
        group3: 'avatar-1'
    },

    avatarData: Ember.A([{
        id: 'avatars:svg-1',
        title: 'avatar 1',
        value: 'avatar-1'
    }, {
        id: 'avatars:svg-2',
        title: 'avatar 2',
        value: 'avatar-2'
    }, {
        id: 'avatars:svg-3',
        title: 'avatar 3',
        value: 'avatar-3'
    }]),

    radioData: Ember.ArrayProxy.create({
        content: Ember.A([
            {label: '1', value: 1},
            {label: '2', value: 2},
            {label: '3', value: '3', isDisabled: true},
            {label: '4', value: '4'}
        ])
    }),

    //radioData: [
    //    {label: '1', value: 1},
    //    {label: '2', value: 2},
    //    {label: '3', value: '3', isDisabled: true},
    //    {label: '4', value: '4'}
    //],
    //

    actions: {
        submit: function() {
            alert('submit');
        },

        addItem: function() {
            var r = Math.ceil(Math.random() * 1000);
            this.get('radioData').addObject({label: r, value: r});
            return false;
        },

        removeItem: function() {
            this.get('radioData').popObject();
            return false;
        }
    }
});
