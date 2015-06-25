import Ember from 'ember';
import LayoutRules from '../mixins/layout-rules';

export default Ember.Component.extend(LayoutRules, {
  tagName: 'md-list'
});
