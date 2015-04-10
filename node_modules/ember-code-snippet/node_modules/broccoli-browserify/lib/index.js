var fs = require('fs');
var path = require('path');
var RSVP = require('rsvp');
var mkdirp = require('mkdirp');
var browserify = require('browserify')
var Writer = require('broccoli-writer');

function BrowserifyWriter(inputTree, options) {
  if (!(this instanceof BrowserifyWriter)) {
    return new BrowserifyWriter(inputTree, options);
  }

  options = options || {};

  this.entries = options.entries || [];
  this.outputFile = options.outputFile || '/browserify.js';
  this.browserifyOptions = options.browserify || {};
  this.bundleOptions = options.bundle || {};
  this.requireOptions = options.require || {};
  this.inputTree = inputTree;
}

BrowserifyWriter.prototype = Object.create(Writer.prototype);
BrowserifyWriter.prototype.constructor = BrowserifyWriter;

BrowserifyWriter.prototype.write = function (readTree, destDir) {
  var entries = this.entries;
  var outputFile = this.outputFile;
  var browserifyOptions = this.browserifyOptions;
  var bundleOptions = this.bundleOptions;
  var requireOptions = this.requireOptions;

  return readTree(this.inputTree).then(function (srcDir) {
    mkdirp.sync(path.join(destDir, path.dirname(outputFile)));

    browserifyOptions.basedir = srcDir;
    var b = browserify(browserifyOptions);

    for (var i = 0; i < entries.length; i++) {
      b.add(entries[i]);
    }
    for(var i = 0; i < requireOptions.length; i++){
      b.require.apply(b, requireOptions[i]);
    }

    return new RSVP.Promise(function (resolve, reject) {
      b.bundle(bundleOptions, function (err, data) {
        if (err) {
          reject(err);
        } else {
          fs.writeFileSync(path.join(destDir, outputFile), data);
          resolve(destDir);
        }
      });
    });
  });
};

module.exports = BrowserifyWriter;
