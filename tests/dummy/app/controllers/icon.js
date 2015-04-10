import Ember from 'ember';
import BaseDemoController from '../controllers/base-demo-controller';

export default BaseDemoController.extend({

    demoName: 'icon-fontIcons',

    init: function() {
        var content = [
            {name: 'hbs', content: 'icon-fontIcons.hbs'},
            {name: 'controller', content: 'icon-controller.js'}
        ];

        this.setSourceFiles(content);
    },

    showSourceFromUrl: false,

    showSourceClassFromUrl: Ember.computed('showSourceFromUrl', function() {
        return this.get('showSourceFromUrl') ? 'show-source' : '';
    }),

    sourceFilesFromUrl: null,

    setSourceFilesFromUrl: Ember.on('init', function() {
        var demoName = 'icon-fromUrl';

        var sourceFiles = Ember.ArrayProxy.create({
            content: Ember.A([
                {name: 'hbs', content: demoName + '.hbs'},
                {name: 'controller', content: 'icon-controller.js'}

            ])
        });

        this.set('sourceFilesFromUrl', sourceFiles);
    }),

    showSourceFromSet: false,

    showSourceClassFromSet: Ember.computed('showSourceFromSet', function() {
        return this.get('showSourceFromSet') ? 'show-source' : '';
    }),

    sourceFilesFromSet: null,

    setSourceFilesFromSet: Ember.on('init', function() {
        var demoName = 'icon-fromSet';

        var sourceFiles = Ember.ArrayProxy.create({
            content: Ember.A([
                {name: 'hbs', content: demoName + '.hbs'},
                {name: 'controller', content: 'icon-controller.js'}

            ])
        });

        this.set('sourceFilesFromSet', sourceFiles);
    }),

    actions: {
        showSourceFromUrl: function() {
            this.toggleProperty('showSourceFromUrl');
        },

        showSourceFromSet: function() {
            this.toggleProperty('showSourceFromSet');
        }
    },

    iconData: [
        {name: 'icon-home', color: "#777"},
        {name: 'icon-user-plus', color: "rgb(89, 226, 168)"},
        {name: 'icon-google-plus2', color: "#A00"},
        {name: 'icon-youtube4', color: "#00A"},
        // Use theming to color the font-icon
        {name: 'icon-settings', color: "#A00", theme: "md-warn md-hue-5"}
    ],

    sizes: [
        {size: 12, padding: 0, previewScaleStyle: 'padding-left: 0px', sizeStyle: 'font-size: 12px; height: 12px;'},
        {size: 21, padding: 2, previewScaleStyle: 'padding-left: 2px', sizeStyle: 'font-size: 21px; height: 21px;'},
        {size: 36, padding: 6, previewScaleStyle: 'padding-left: 6px', sizeStyle: 'font-size: 36px; height: 36px;'},
        {size: 48, padding: 10, previewScaleStyle: 'padding-left: 10px', sizeStyle: 'font-size: 48px; height: 48px;'}
    ],

    icons: Ember.computed('iconData', function() {
        var self = this;

        var iconData = this.get('iconData');

        iconData.forEach(function(i) {
            i.sizes = Ember.A(Ember.copy(self.sizes, true));

            i.sizes.forEach(function(size) {
                var color = !i.theme && i.color;
                size.sizeStyle = size.sizeStyle + ' color: ' + color + '; ';
            });
        });

        return Ember.A(this.get('iconData'));

    }),

    insertDriveIconURL: 'images/icons/ic_insert_drive_file_24px.svg',

    getAndroid: Ember.computed('', function() {
        return 'images/icons/android.svg';
    })

});
