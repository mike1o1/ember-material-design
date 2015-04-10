'use strict';

var jsonConcat = require('../index');
var expect = require('expect.js');
var fs = require('fs');
var broccoli = require('broccoli');

var builder;

describe('broccoli-file-creator', function(){
  afterEach(function() {
    if (builder) {
      builder.cleanup();
    }
  });

  it('creates the files specified with fixturify', function(){
    var sourcePath = 'tests/fixtures';
    var tree = jsonConcat(sourcePath, {
      outputFile: '/assets/books.json',
      variableName: 'window.fixtures'
    });

    builder = new broccoli.Builder(tree);
    return builder.build().then(function(results) {
      var expectedOutput = {
        'dr-seuss': {
          'how-the-grinch-stole-christmas': {
            publicationDate: 'November 24, 1957',
            pages: 69
          },
          'the-cat-in-the-hat': {
            publicationDate: 'March 12, 1957',
            pages: 61
          }
        },
        'pd-eastman': {
          'are-you-my-mother': {
            publicationDate: 'June 12, 1960',
            pages: 12
          },
          'go-dog-go': {
            publicationDate: 'March 12, 1961',
            pages: 72
          }
        }
      };
      expectedOutput = 'window.fixtures = ' + JSON.stringify(expectedOutput, null, 2);
      expect(fs.readFileSync(results.directory + '/assets/books.json', {encoding: 'utf8'})).to.eql(expectedOutput);
    });
  })
});
