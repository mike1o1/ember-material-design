import Ember from 'ember';

export default Ember.Controller.extend({

  iconData: [
    {name: 'icon-home'        , color: "#777" },
    {name: 'icon-user-plus'   , color: "rgb(89, 226, 168)" },
    {name: 'icon-google-plus2', color: "#A00" },
    {name: 'icon-youtube4'    , color:"#00A" },
    // Use theming to color the font-icon
    {name: 'icon-settings'    , color:"#A00", theme:"md-warn md-hue-5"}
  ],

  sizes: [
    {size:12,padding:0, previewScaleStyle: 'padding-left: 0px', sizeStyle: 'font-size: 12px; height: 12px;'},
    {size:21,padding:2, previewScaleStyle: 'padding-left: 2px', sizeStyle: 'font-size: 21px; height: 21px;'},
    {size:36,padding:6, previewScaleStyle: 'padding-left: 6px', sizeStyle: 'font-size: 36px; height: 36px;'},
    {size:48,padding:10, previewScaleStyle: 'padding-left: 10px', sizeStyle: 'font-size: 48px; height: 48px;'}
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
