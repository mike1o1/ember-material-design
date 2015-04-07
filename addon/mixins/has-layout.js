import Ember from 'ember';

var HasLayoutMixin = Ember.Mixin.create({
  attributeBindings: ['layoutType:layout', 'layout-align'],

  layoutType: null

});

export default HasLayoutMixin;
