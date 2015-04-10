# ember-cli-google-analytics

Plugin for ember-cli that injects Google Analytics tracking code into HTML content.

## Installation

**This plugin requires ember-cli version >= 0.0.47**

To install simply run:

```
npm install --save-dev ember-cli-google-analytics
```

## Warning: Content Security Policy

This plugin is intended to add Google Analytics tracking as an inline script. The [ember-cli-content-security-policy](https://github.com/rwjblue/ember-cli-content-security-policy) addon that is included with ember-cli will prevent the execution of inline scripts.

A future version of this plugin is planned to add the tracking code as an additional JS file (much like [ember-cli-inject-live-reload](https://github.com/rwjblue/ember-cli-inject-live-reload)), but until then this plugin will not function out of the box with CSP installed.

## Usage

Once configured, the Google Analytics tracking code will be injected into your index.html file. A mixin is provided for simple page view tracking inside of your Ember application. To use it, include it inside your `app/router.js` file:

```
import Ember from 'ember';
import config from './config/environment';
import googlePageview from './mixins/google-pageview';

var Router = Ember.Router.extend(googlePageview, {
  location: config.locationType
});

Router.map(function() {
  ...
});

export default Router;
```

## Configuration

This plugin uses the Ember CLI project's configuration as defined in `config/environment.js`.

The tracking code will appear only if `ENV.googleAnalytics.webPropertyId` is defined. For instance, to enable the tracking code in only the production environment:

```javascript
if (environment === 'production') {
  ENV.googleAnalytics = {
    webPropertyId: 'UA-XXXX-Y'
  };
}
```

### Configuration Parameters

**ga.js and analytics.js**

* `webPropertyId` (Default: `null`): the Web Property ID for the Google Web Property you wish to track.
* `tracker` (Default: `analytics.js`): The Google Tracker to use, can be either `analytics.js` or `ga.js`.
* `globalVariable` (Default: `ga`): the global variable to use for the Google Analytics tracker object. This is ignored when the `tracker` is `ga.js`.
* `displayFeatures` (Default: `false`): enables [Display Advertising](https://support.google.com/analytics/answer/3450482) tracking code.

**analytics.js only**

* `cookieDomain` (Default: `null`): the domain to set the tracking cookies on. Can be a `null`, the domain to use for cookies, or 'none'.
* `cookieName` (Default: `null`): the name of the cookie to set and use.
* `cookieExpires` (Default: `null`): the expiration, in seconds, of the cookie.

If none of the cookie settings are set (they are left nullish) then `'auto'` will be used for the cookie settings. Otherwise the JSON of only the settings set will be passed to the `ga()` function.

## Running Tests

* `git clone git@github.com:pgrippi/ember-cli-google-analytics.git`
* `npm install`
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).

