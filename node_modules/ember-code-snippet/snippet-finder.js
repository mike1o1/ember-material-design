/* jshint node: true */

var Writer = require('broccoli-writer');
var glob = require('glob');
var _Promise = require('es6-promise').Promise;
var fs = require('fs');
var path = require('path');


function findFiles(srcDir) {
  return new _Promise(function(resolve, reject) {
    glob(path.join(srcDir, "**/*.+(js|hbs)"), function (err, files) {
      if (err) {
        reject(err);
      } else {
        resolve(files);
      }
    });
  });
}

function extractSnippets(fileContent) {
  var inside = false;
  var content = [];
  var output = {};
  var name;
  fileContent.split("\n").forEach(function(line){
    if (inside) {
      if (/\bEND-SNIPPET\b/.test(line)) {
        inside = false;
        output[name] = content.join("\n");
        content = [];
      } else {
        content.push(line);
      }
    } else {
      var m = /\bBEGIN-SNIPPET\s+(\S+)\b/.exec(line);
      if (m) {
        inside = true;
        name = m[1];
      }
    }
  });
  return output;
}


function SnippetFinder(inputTree){
  if (!(this instanceof SnippetFinder)){
    return new SnippetFinder(inputTree);
  }
  this.inputTree = inputTree;
}

SnippetFinder.prototype = Object.create(Writer.prototype);
SnippetFinder.prototype.constructor = SnippetFinder;

SnippetFinder.prototype.write = function (readTree, destDir) {
  return readTree(this.inputTree).then(findFiles).then(function(files){
    files.forEach(function(filename){
      var snippets = extractSnippets(fs.readFileSync(filename, 'utf-8'));
      for (var name in snippets){
        fs.writeFileSync(path.join(destDir, name)+path.extname(filename),
                         snippets[name]);
      }
    });
  });
};

module.exports = SnippetFinder;
