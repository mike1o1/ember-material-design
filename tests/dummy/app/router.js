import Ember from 'ember';
import config from './config/environment';
import googlePageView from './mixins/google-page-view';

var Router = Ember.Router.extend(googlePageView, {
    location: config.locationType
});

export default Router.map(function() {
  this.route('buttons');
  this.route('content');
  this.route('divider');
  this.route('card');
  this.route('input');
  this.route('list');
  this.route('toolbar');
  this.route('checkbox');
  this.route('slider');
  this.route('progress-circular');
  this.route('progress-linear');
  this.route('icon');
  this.route('radio-button');
  this.route('tabs');
  this.route('typography');
  this.route('tooltip');
  this.route('toast');
  this.route('whiteframe');
  this.route('sidenav');
});
