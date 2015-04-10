/*jshint node: true */
'use strict';

var path = require('path');
var fs   = require('fs');
var mergeTrees = require('broccoli-merge-trees');
var browserify = require('broccoli-browserify');
var flatiron = require('broccoli-flatiron');
var snippetFinder = require('./snippet-finder');

module.exports = {
  name: 'Code Snippet Ember Component',

  snippetPaths: function() {
    return this.app.options.snippetPaths || ['snippets'];
  },

  snippetSearchPaths: function(){
    return this.app.options.snippetSearchPaths || ['app'];
  },


  treeForApp: function(tree){
    var snippets= mergeTrees(this.snippetPaths().filter(function(path){
      return fs.existsSync(path);
    }));

    snippets = mergeTrees(this.snippetSearchPaths().map(function(path){
      return snippetFinder(path);
    }).concat(snippets));

    snippets = flatiron(snippets, {
      outputFile: 'snippets.js'
    });

    return this.mergeTrees([tree, snippets]);
  },

  treeForVendor: function(tree){
    // Package up the highlight.js source from its node module.
    var src = this.treeGenerator(path.join(__dirname, 'node_modules', 'highlight.js'));
    var highlight = browserify(src, {
      outputFile: 'highlight.js',
      require: [['./lib/index.js', {expose: 'highlight.js'}]]
    });
    return this.mergeTrees([highlight, tree]);
  },

  included: function(app) {
    app.import('vendor/highlight.js');
    app.import('vendor/highlight-style.css');
  }
};
