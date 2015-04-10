var path = require('path')
var mkdirp = require('mkdirp')
var helpers = require('broccoli-kitchen-sink-helpers')
var Writer = require('broccoli-writer')

module.exports = StaticCompiler
StaticCompiler.prototype = Object.create(Writer.prototype)
StaticCompiler.prototype.constructor = StaticCompiler
function StaticCompiler (inputTree, options) {
  if (!(this instanceof StaticCompiler)) return new StaticCompiler(inputTree, options)
  this.inputTree = inputTree
  this.options = options || {}
}

StaticCompiler.prototype.write = function (readTree, destDir) {
  var self = this

  return readTree(this.inputTree).then(function (srcDir) {
    if (self.options.files == null) {
      helpers.copyRecursivelySync(
        path.join(srcDir, self.options.srcDir),
        path.join(destDir, self.options.destDir))
    } else {
      var baseDir = path.join(srcDir, self.options.srcDir)
      var files = helpers.multiGlob(self.options.files, {
        cwd: baseDir,
        root: baseDir,
        nomount: false
      })
      for (var i = 0; i < files.length; i++) {
        mkdirp.sync(path.join(destDir, self.options.destDir, path.dirname(files[i])))
        helpers.copyPreserveSync(
          path.join(srcDir, self.options.srcDir, files[i]),
          path.join(destDir, self.options.destDir, files[i]))
      }
    }
  })
}
