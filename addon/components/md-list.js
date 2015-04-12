import Ember from 'ember';
import layout from '../templates/components/md-list';
import LayoutRules from '../mixins/layout-rules';

export default Ember.Component.extend(LayoutRules, {
  layout: layout
});
