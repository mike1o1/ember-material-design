import Ember from 'ember';
import layout from '../templates/components/md-toolbar';
import LayoutRules from '../mixins/layout-rules';

var MdToolbar = Ember.Component.extend(LayoutRules, {
  layout: layout,
  tagName: ['md-toolbar'],

  shrinkSpeedFactor: 0.5,

  setupScrollShrink: function() {
  }
});

export default MdToolbar;
