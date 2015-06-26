import Ember from 'ember';

var StyleSafeMixin = Ember.Mixin.create({
  attributeBindings: ['styleSafe:style'],

  styleSafe: Ember.computed('style', function() {
    var style = this.get('style');
    return new Ember.Handlebars.SafeString(style);
  })

});

export default StyleSafeMixin;
