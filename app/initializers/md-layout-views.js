import Ember from 'ember';
import HasFlex from 'ember-material-design/mixins/has-flex';
import HasLayout from 'ember-material-design/mixins/has-layout';

export function initialize(/* container, application */) {
  // We want to inject the flex and layout parameters to every element
  // so we don't need to customize each view or component to add it
  
  // Only reopen Ember.view if it exists. 
  // Ember.View was deprecated in Ember 2.0, but it could be reincluded with an addon
  if(Ember.View) {
    Ember.View.reopen(HasFlex, HasLayout, {
      flex: null
    });
  }

  Ember.Component.reopen(HasFlex, HasLayout, {
    flex: null
  });

}

export default {
  name: 'md-layout-views',
  initialize: initialize
};
