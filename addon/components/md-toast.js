import Ember from 'ember';
import layout from '../templates/components/md-toast';
import LayoutRules from '../mixins/layout-rules';

export default Ember.Component.extend(LayoutRules, {
  layout: layout
});
