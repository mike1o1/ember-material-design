# Autoprefixer for Ember CLI
This addon runs the styles of your EmberCLI-project through
`autoprefixer`.

*NB*: This addon requires Ember CLI version `0.0.39` or newer.

## Install
To install, run

```
npm install ember-cli-autoprefixer --save-dev
```

## Options
You can configure what browsers to target and other options by specifying them in your
`Brocfile.js`. An example:

```js
var app = new EmberApp({
  autoprefixer: {
    browsers: ['last 2 ios version'],
    cascade: false
  }
});
```

This would prefix styles as required by the two latest version of ios, and disable the cascade (see below).
The default value for `browsers` are `['> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1']`.

You can disable autoprefixer by passing in `enabled: false`.

Other options, such as [cascade](https://github.com/ai/autoprefixer#visual-cascade) and [sourcemap](https://github.com/sindresorhus/broccoli-autoprefixer#sourcemap) would also go here along with `browsers`.

You can read more about this setting and others [over on the autoprefixer page](https://github.com/ai/autoprefixer#browsers) and/or the [page for broccoli-autoprefixer](https://github.com/sindresorhus/broccoli-autoprefixer#options).

## References
- [Autoprefixer](https://github.com/ai/autoprefixer)
- [broccoli-autoprefixer](https://github.com/sindresorhus/broccoli-autoprefixer)
