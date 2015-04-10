var path = require('path')
var mkdirp = require('mkdirp')
var includePathSearcher = require('include-path-searcher')
var CachingWriter = require('broccoli-caching-writer')
var sass = require('node-sass')
var _ = require('lodash')
var rsvp = require('rsvp')
var Promise = rsvp.Promise
var fs = require('fs')
var writeFile = rsvp.denodeify(fs.writeFile)

module.exports = SassCompiler
SassCompiler.prototype = Object.create(CachingWriter.prototype)
SassCompiler.prototype.constructor = SassCompiler
function SassCompiler (inputTrees, inputFile, outputFile, options) {
  if (!(this instanceof SassCompiler)) return new SassCompiler(inputTrees, inputFile, outputFile, options)
  if (!Array.isArray(inputTrees)) throw new Error('Expected array for first argument - did you mean [tree] instead of tree?')

  CachingWriter.call(this, inputTrees, options)

  this.inputFile = inputFile
  this.outputFile = outputFile
  options = options || {}
  this.sassOptions = {
    imagePath: options.imagePath,
    indentedSyntax: options.indentedSyntax,
    omitSourceMapUrl: options.omitSourceMapUrl,
    outputStyle: options.outputStyle,
    precision: options.precision,
    sourceComments: options.sourceComments,
    sourceMap: options.sourceMap,
    sourceMapEmbed: options.sourceMapEmbed,
    sourceMapContents: options.sourceMapContents
  }
}


SassCompiler.prototype.updateCache = function(includePaths, destDir) {
  return new Promise(function(resolve, reject) {
    var destFile = path.join(destDir, this.outputFile)
    var sourceMapFile = this.sassOptions.sourceMap
    if (typeof sourceMapFile !== 'string') {
      sourceMapFile = destFile + '.map'
    }
    mkdirp.sync(path.dirname(destFile))

    var sassOptions = {
      file: includePathSearcher.findFileSync(this.inputFile, includePaths),
      includePaths: includePaths,
      outFile: destFile,
      success: function(result) {
        var promises = [writeFile(destFile, result.css)]
        if (this.sassOptions.sourceMap) {
          promises.push(writeFile(sourceMapFile, result.map))
        }
        resolve(Promise.all(promises))
      }.bind(this),
      error: function(err) {
        reject(err)
      }
    }
    _.merge(sassOptions, this.sassOptions)
    sass.render(sassOptions)
  }.bind(this))
}
