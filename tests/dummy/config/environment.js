/* jshint node: true */

module.exports = function(environment) {
    var ENV = {
        modulePrefix: 'dummy',
        environment: environment,
        baseURL: '/',
        locationType: 'hash',
        sassOptions: {
            sourceMapEmbed: true,
            outputFile: 'dummy.css'
        },
        EmberENV: {
            FEATURES: {
                // Here you can enable experimental features on an ember canary build
                // e.g. 'with-controller': true
            }
        },

        APP: {
            // Here you can pass flags/options to your application instance
            // when it is created
        },

        contentSecurityPolicy: {
            'default-src': "'none'",
            'script-src': "'self' 'unsafe-eval' https://www.google-analytics.com",
            'font-src': "'self' https://fonts.gstatic.com",
            'style-src': "'self' https://fonts.googleapis.com 'unsafe-inline'",
            'connect-src': "'self'",
            'img-src': "'self' data:",
            'media-src': "'self'"
        }
    };

    if (environment === 'development') {
        // ENV.APP.LOG_RESOLVER = true;
        ENV.APP.LOG_ACTIVE_GENERATION = true;
        // ENV.APP.LOG_TRANSITIONS = true;
        // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
        ENV.APP.LOG_VIEW_LOOKUPS = true;
    }

    if (environment === 'test') {
        // Testem prefers this...
        ENV.baseURL = '/';
        ENV.locationType = 'none';

        // keep test console output quieter
        ENV.APP.LOG_ACTIVE_GENERATION = false;
        ENV.APP.LOG_VIEW_LOOKUPS = false;

        ENV.APP.rootElement = '#ember-testing';
    }

    if (environment === 'production') {
        ENV.googleAnalytics = {
            webPropertyId: 'UA-34906353-2'
        }
    }

    return ENV;
};
