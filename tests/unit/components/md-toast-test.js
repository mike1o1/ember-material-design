import {
  moduleForComponent,
  test
} from 'ember-qunit';

import Ember from 'ember';
import config from '../../../config/environment';

moduleForComponent('md-toast', {
  // Specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']
  unit: true
});

var rootElement = Ember.$(config.APP.rootElement);

test('it renders', function(assert) {
  assert.expect(2);



  // Creates the component instance
  var component = this.subject({
    rootElement: rootElement,
    toast: {
      opening: true,
      position: 'bottom left',
      hideDelay: 3000,
      capsule: false,
      highlightAction: false,
      content: '',
      action: '',
      resolve: null
    }
  });
  assert.equal(component._state, 'preRender');

  // Renders the component to the page
  this.render();
  assert.equal(component._state, 'inDOM');
});
