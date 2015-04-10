import Ember from 'ember';

var BaseDemoController = Ember.Controller.extend({
    showSource: false,

    showSourceClass: Ember.computed('showSource', function() {
        var showSourceClass = this.get('showSource') ? 'show-source' : '';
        return Ember.String.htmlSafe(showSourceClass);
        //return showSourceClass.htmlSafe();
    }),

    demoName: '',

    sourceFiles: null,

    setSourceFiles: function(demoContent) {
        this._super();
        var demoName = this.get('demoName');

        var sourceFiles = Ember.ArrayProxy.create({
            content: Ember.A([
                {name: 'hbs', content: demoName + '-index.hbs'},
                {name: 'controller', content: demoName + '-controller.js'},
                {name: 'route', content: demoName + '-route.js'},
                {name: 'css', content: demoName + '-style.css'}
            ])
        });

        var sf = Ember.ArrayProxy.create({
            content: Ember.A(demoContent)
        });

        this.set('sourceFiles', sf);
    },

    actions: {
        showSource: function() {
            this.toggleProperty('showSource');
        }
    }
});

export default BaseDemoController;
