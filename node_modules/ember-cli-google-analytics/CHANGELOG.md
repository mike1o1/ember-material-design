# ember-cli-google-analytics Changelog

### v1.3.2

* [BUGFIX] Cordova doesn't support protocol relative URL's, analytics.js will now always be included with the `https` protocol

### v1.3.1

* [BUGFIX] Mixin would not fire unless the `googleAnalytics.tracker` configuration option was explicitly set. It now defaults to `analytics.js` when no value is set.
* [BUGFIX] Mixin used hard-coded `ga` global variable when using the analytics.js tracker. It will now use the value set in the `googleAnalytics.globalVariable` configuration option, or `ga` if no value is set.

### v1.3.0

* Added a mixin that can be included in the applications Router that will trigger the Google Analytics pageview when transitioning between routes.
* **[BREAKING]** Removed the initial pageview call inside of the inline Google Analytics tracking code in favor of using the new mixin.

### v1.2.0

* Adds support for [Display Advertising](https://support.google.com/analytics/answer/3450482) for both analytics.js and ga.js. Enable by setting the `displayFeatures` configuration to `true`, it is off by default.

### v1.1.0

* Adds support for cookie-related settings: `cookieDomain`, `cookieName`, and `cookieExpires`. This applies to analytics.js only.

### v1.0.0

* Initial release of the ember-cli-google-analytics addon
