var Writer = require('broccoli-writer')
var Promise = require('rsvp').Promise
var fixturify = require('fixturify')

// Notes:
// Behavior for tree cycles is undefined
// Behavior for concurrent reading is undefined

exports.MinimalBroccoliBuilder = MinimalBroccoliBuilder
function MinimalBroccoliBuilder (tree) {
  this.tree = tree
  this.treesToCleanUp = []
}

MinimalBroccoliBuilder.prototype.build = function () {
  var self = this
  var trees = [], dirs = []

  function readTree (tree) {
    return Promise.resolve().then(function () {
      // Plain directory path?
      if (typeof tree === 'string') return tree
      // Previously read?
      var index = trees.indexOf(tree)
      if (index !== -1) return dirs[index]
      // Read Broccoli tree
      if (self.treesToCleanUp.indexOf(tree) === -1) self.treesToCleanUp.push(tree)
      return Promise.resolve(tree.read(readTree))
        .then(function (dir) {
          trees.push(tree)
          dirs.push(dir)
          return dir
        })
    })
  }

  return readTree(this.tree)
}

MinimalBroccoliBuilder.prototype.cleanup = function () {
  for (var i = 0; i < this.treesToCleanUp.length; i++) {
    this.treesToCleanUp[i].cleanup()
  }
}


exports.treeToFixture = function (tree) {
  var builder = new MinimalBroccoliBuilder(tree)
  return builder.build()
    .then(fixturify.readSync)
    .finally(function () {
      builder.cleanup()
    })
}


exports.makeFixtureTree = FixtureTree
FixtureTree.prototype = Object.create(Writer.prototype)
FixtureTree.prototype.constructor = FixtureTree
function FixtureTree (fixtureObject) {
  if (!(this instanceof FixtureTree)) return new FixtureTree(fixtureObject);
  this.fixtureObject = fixtureObject
}

FixtureTree.prototype.write = function (readTree, destDir) {
  fixturify.writeSync(destDir, this.fixtureObject)
}
