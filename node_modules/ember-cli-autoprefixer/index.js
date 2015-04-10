'use strict';

var path = require('path');
var fs = require('fs');
var autoprefixer = require('broccoli-autoprefixer');
var defaults = require('lodash').defaults;

function EmberCLIAutoprefixer(project) {
  this.project = project;
  this.name = 'Ember CLI Autoprefixer';
}

EmberCLIAutoprefixer.prototype.postprocessTree = function (type, tree) {
  if ((type === 'all' || type === 'styles') && this.enabled) {
    tree = autoprefixer(tree, this.options);
  }

  return tree;
};

EmberCLIAutoprefixer.prototype.included = function included(app) {
  this.app = app;
  this.options = defaults(this.app.options.autoprefixer || {}, {
    enabled: true
  });
  this.enabled = this.options.enabled;
  delete this.options.enabled;
};

EmberCLIAutoprefixer.prototype.treeFor = function treeFor() {};

module.exports = EmberCLIAutoprefixer;
