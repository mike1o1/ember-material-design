import Ember from 'ember';
import layout from '../templates/components/md-toolbar';

var MdToolbar = Ember.Component.extend({
  layout: layout,
  tagName: ['md-toolbar'],

  shrinkSpeedFactor: 0.5,

  setupScrollShrink: function() {
  }
});

export default MdToolbar;
