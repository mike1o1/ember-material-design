import {
  moduleForComponent,
  test
} from 'ember-qunit';

import Ember from 'ember';

moduleForComponent('md-tabs', {
  // Specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']
  needs: [
  'component:md-tab', 
  'component:md-tab-item', 
  'component:md-tab-content', 
  'component:md-tabs-content-wrapper',
  'component:md-tabs-wrapper',
  'service:media-queries',
  'service:sniffer',
  'service:ripple',
  'service:constants']
  //'template:md-tabs-content-wrapper']
});

test('it renders', function(assert) {
  assert.expect(2);

  var template = Ember.HTMLBars.compile(
    '{{#md-tabs md-border-bottom="" selectedIndex=0}}' +
      '{{#md-tabs-wrapper}}'+
              '{{#md-tab label="test"}}' +
                  '<md-tab-label>test</md-tab-label>' +
              '{{/md-tab}}' +
      '{{/md-tabs-wrapper}}' +
      '{{#md-tabs-content-wrapper}}' +
          '{{#md-tab-content}}' +
              '<div class="demo-tab" style="padding: 25px; text-align: center;">' +
                  'test' +
                  '<br/>' +
              '</div>' +
          '{{/md-tab-content}}' +
      '{{/md-tabs-content-wrapper}}' +
  '{{/md-tabs}}');

  // Creates the component instance
  var component = this.subject({
    template: template
  });
  assert.equal(component._state, 'preRender');

  // Renders the component to the page
  this.render();
  
  assert.equal(component._state, 'inDOM');
});
