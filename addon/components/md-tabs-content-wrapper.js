import Ember from 'ember';
import layout from '../templates/components/md-tabs-content-wrapper';
import LayoutRules from '../mixins/layout-rules';

var MdTabContentWrapper = Ember.Component.extend(LayoutRules, {
	layout: layout,
    tagName: 'md-tabs-content-wrapper'
});

export default MdTabContentWrapper;
