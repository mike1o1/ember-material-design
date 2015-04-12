import Ember from 'ember';
import LayoutRules from '../mixins/layout-rules';


var MdButtonLink = Ember.Component.extend(LayoutRules, {
    tagName: 'a',

    classNames: ['md-button']
});

export default MdButtonLink;
