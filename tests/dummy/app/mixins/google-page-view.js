import Ember from 'ember';
import ENV from '../config/environment';

export default Ember.Mixin.create({
    pageviewToGA: Ember.on('didTransition', function() {

        if (Ember.get(ENV, 'googleAnalytics.webPropertyId') != null) {
            var trackerType = Ember.getWithDefault(ENV, 'googleAnalytics.tracker', 'analytics.js');

            if (trackerType === 'analytics.js') {
                var globalVariable = Ember.getWithDefault(ENV, 'googleAnalytics.globalVariable', 'ga');

                window[globalVariable]('send', 'pageview', {
                    page: this.get('url'),
                    title: this.get('url')
                });
            } else if (trackerType === 'ga.js') {
                window._gaq.push(['_trackPageview']);
            }
        }
    })
});
