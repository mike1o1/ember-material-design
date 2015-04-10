'use strict';
var Filter = require('broccoli-filter');
var autoprefixer = require('autoprefixer-core');
var objectAssign = require('object-assign');

function AutoprefixerFilter(inputTree, options) {
	if (!(this instanceof AutoprefixerFilter)) {
		return new AutoprefixerFilter(inputTree, options);
	}

	this.inputTree = inputTree;
	this.options = options || {};
}

AutoprefixerFilter.prototype = Object.create(Filter.prototype);
AutoprefixerFilter.prototype.constructor = AutoprefixerFilter;

AutoprefixerFilter.prototype.extensions = ['css'];
AutoprefixerFilter.prototype.targetExtension = 'css';

AutoprefixerFilter.prototype.processString = function (str, relativePath) {
	var opts = objectAssign({
		from: relativePath,
		to: relativePath
	}, this.options);

	// support explicit override of inline sourcemaps
	if (opts.sourcemap != null) {
		opts.map = opts.sourcemap ? 'inline' : false;
	}

	return autoprefixer(opts).process(str, opts).css;
};

module.exports = AutoprefixerFilter;
