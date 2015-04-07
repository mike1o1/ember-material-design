import Ember from 'ember';

export default Ember.Controller.extend({
    user: {
        title: 'Developer',
        email: 'ipsum@lorem.com',
        firstName: '',
        lastName: '' ,
        company: 'Google' ,
        address: '1600 Amphitheatre Pkwy' ,
        city: 'Mountain View' ,
        state: 'CA' ,
        biography: 'Loves kittens, snowboarding, and can type at 130 WPM.\n\nAnd rumor has it she bouldered up Castle Craig!',
        postalCode : '94043',
        submissionDate: null
    },

    user2: {
        name: 'John Doe',
        email: '',
        phone: '',
        address: 'Mountain View, CA'
    }
});
