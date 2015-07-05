import Ember from 'ember';
import BaseDemoController from '../controllers/base-demo-controller';

export default BaseDemoController.extend({
    init: function() {
        var content = [
            {name: 'hbs', content: 'input.hbs' },
            {name: 'controller', content: 'input-controller.js' }
        ];

        this.setSourceFiles(content);
    },

    showSourceIcons: false,

    showSourceClassIcons: Ember.computed('showSourceIcons', function() {
        return this.get('showSourceIcons') ? 'show-source' : '';
    }),

    sourceFilesIcons: null,

    setSourceFilesIcons: Ember.on('init', function() {
        var demoName = 'input-Icons';

        var sourceFiles = Ember.ArrayProxy.create({
            content: Ember.A([
                {name: 'hbs', content: demoName + '.hbs'},
                {name: 'controller', content: 'input-controller.js'}

            ])
        });

        this.set('sourceFilesIcons', sourceFiles);
    }),

    emailInvalid: Ember.computed('user2.email', function() {
      return !this.get('user2.email') || this.get('user2.email').length <= 0;
    }),

    postalCodeValidations: Ember.computed('user.postalCode', function() {
      var errors = [];

      if (!this.get('user.postalCode') || this.get('user.postalCode').length === 0) {
        errors.push('This is required');
      }

      return Ember.A(errors);

    }),

    hasPostalCodeErrors: Ember.computed('postalCodeValidations.length', function() {
      return this.get('postalCodeValidations.length') > 0;
    }),


    actions: {
        showSourceIcons: function() {
            this.toggleProperty('showSourceIcons');
        }
    },

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
