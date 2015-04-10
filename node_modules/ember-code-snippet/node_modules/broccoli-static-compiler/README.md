# broccoli-static-compiler

Pick files out of a tree, optionally moving them.

(The package name is for historical reasons. We might change it when we hit
1.0.)

## Installation

```bash
npm install --save-dev broccoli-static-compiler
```

## Usage Example

```js
var pickFiles = require('broccoli-static-compiler');
var imagesTree = pickFiles(sourceTree, {
  srcDir: '/todomvc',
  files: ['**/*.png', '**/*.jpg'],
  destDir: '/assets'
});
```

This would copy `/todomvc/icons/check-mark.png` to
`/assets/icons/check-mark.png`.

## Options

### srcDir (required), destDir (required)

The `destDir` directory will be created, and all files and directories inside
of `srcDir` will be recursively copied into `destDir`.

### files (optional)

A list of glob patterns. If provided, instead of copying all files, only files
matched by any of the patterns will be copied. You must only specify files,
not directories, in this list.
