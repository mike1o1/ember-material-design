import Ember from 'ember';
import LayoutRules from '../mixins/layout-rules';

var MdToolbar = Ember.Component.extend(LayoutRules, {
  tagName: ['md-toolbar'],

  shrinkSpeedFactor: 0.5,

  setupScrollShrink: function() {
  }
});

export default MdToolbar;
