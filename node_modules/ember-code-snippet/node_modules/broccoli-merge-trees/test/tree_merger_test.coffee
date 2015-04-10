test = require('tap').test
testHelpers = require('./broccoli_test_helpers')
mergeTrees = require('../')

makeFixtureTree = testHelpers.makeFixtureTree
treeToFixture = testHelpers.treeToFixture

mergeFixtures = (inputFixtures, options) ->
  treeToFixture mergeTrees(inputFixtures.map(makeFixtureTree), options)

test 'mergeTrees', (t) ->
  test 'files and symlinks', (t) ->
    t.plan 1
    mergeFixtures [
      foo: '1'
      bar: ['foo'] # symlink
    ,
      baz: '2'
    ]
    .then (out) -> t.deepEqual out,
      foo: '1'
      bar: ['foo']
      baz: '2'

  test 'refuses to overwrite files by default', (t) ->
    t.plan 1
    mergeFixtures [
      foo: '1a'
      bar: '2a'
    ,
      foo: '1b'
      bar: '2b'
    ]
    .catch (err) ->
      t.similar err.message, /file "bar" exists in .* and .* overwrite: true/
  
  test 'file names should be treated case insensitive', (t) ->
    t.plan 1
 
    mergeFixtures [
      foo: '1'
    ,
      Foo: '2'
    ]
    .catch (err) ->
      t.similar err.message, /file "foo" exists in .* and .* overwrite: true/

  test 'accepts { overwrite: true }', (t) ->
    t.plan 1
    mergeFixtures [
      foo: '1a'
      bar: '2'
      baz: ['foo'] # symlink
    ,
      foo: '1b'
      bar: ['foo']
      baz: '3'
    ], overwrite: true
    .then (out) -> t.deepEqual out,
      foo: '1b'
      bar: ['foo']
      baz: '3'

  test 'directories', (t) ->
    t.plan 1
    mergeFixtures [
      subdir:
        foo: '1'
    ,
      subdir:
        bar: '2'
      subdir2: {}
    ]
    .then (out) -> t.deepEqual out,
      subdir:
        foo: '1'
        bar: '2'
      subdir2: {}

  test 'directory collision with file or symlink', (t) ->
    t.plan 8
    assertError = (err) ->
      t.similar err.message, /"foo" exists as a file in .* but as a directory in .*/
    for overwrite in [false, true] # fails with overwrite: true and false
      for file in ['content', ['otherfile']] # fails with regular file and symlink
        mergeFixtures [
          foo: {}
        ,
          foo: file
        ], overwrite: overwrite
        .catch assertError
        mergeFixtures [
          foo: file
        ,
          foo: {}
        ], overwrite: overwrite
        .catch assertError

  t.end()
