'use strict';

var fs   = require('fs');
var path = require('path');

var GIT_DIR = '.git';

function changeGitDir(newDirName) {
  GIT_DIR = newDirName;
}

function findRepo(startingPath) {
  var gitPath, lastPath;
  var currentPath = startingPath;

  if (!currentPath) { currentPath = process.cwd(); }

  do {
    gitPath = path.join(currentPath, GIT_DIR);

    if (fs.existsSync(gitPath)) {
      return gitPath;
    }

    lastPath = currentPath;
    currentPath = path.resolve(currentPath, '..');
  } while (lastPath !== currentPath);

  return null;
}

function findPackedTag(gitPath, sha) {
  var packedRefsFilePath = path.join(gitPath, 'packed-refs');
  if (fs.existsSync(packedRefsFilePath)) {
    var packedRefsFile = fs.readFileSync(packedRefsFilePath, {encoding: 'utf8'});
    var tagLine = packedRefsFile.split('\n').filter(function(line) {
      return line.indexOf("refs/tags") > -1 && line.indexOf(sha) > -1;
    })[0];

    if (tagLine) {
      return tagLine.split('tags/')[1];
    }
  }
}

function findTag(gitPath, sha) {
  var tag = findPackedTag(gitPath, sha);
  if (tag) { return tag; }

  var tagsPath = path.join(gitPath, 'refs', 'tags');
  if (!fs.existsSync(tagsPath)) { return; }

  var tags = fs.readdirSync(tagsPath);

  for (var i = 0, l = tags.length; i < l; i++) {
    var tagPath = path.join(tagsPath, tags[i]);
    if (fs.readFileSync(tagPath, { encoding: 'utf8' }).indexOf(sha) > -1) {
      return tags[i];
    }
  }
}

module.exports = function(gitPath) {
  if (!gitPath) { gitPath = findRepo(); }

  var result = {
    sha: null,
    abbreviatedSha: null,
    branch: null,
    tag: null
  }

  try {
    var headFilePath   = path.join(gitPath, 'HEAD');

    if (fs.existsSync(headFilePath)) {
      var branchSHA;
      var headFile = fs.readFileSync(headFilePath, {encoding: 'utf8'});
      var branchName = headFile.split('/').slice(-1)[0].trim();
      var refPath = headFile.split(' ')[1];

      // Find branch and SHA
      if (refPath) {
        var branchPath = path.join(gitPath, refPath.trim());

        result.branch  = branchName;
        result.sha     = fs.readFileSync(branchPath, {encoding: 'utf8' }).trim();
      } else {
        result.sha = branchName;
      }

      result.abbreviatedSha = result.sha.slice(0,10);

      // Find tag
      var tag = findTag(gitPath, result.sha);
      if (tag) {
        result.tag = tag;
      }
    }
  } catch (e) {
    // eat it
  }

  return result;
};

module.exports._findRepo     = findRepo;
module.exports._changeGitDir = changeGitDir;
