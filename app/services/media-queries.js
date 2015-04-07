import Ember from 'ember';

var MediaQueriesService = Ember.Service.extend({

  matches: Ember.computed('', function() {
    return Ember.A();
  }),

  /**
   * A hash of listeners
   */
  listeners: {},

  /**
   * The matcher to use for testing media queries
   */
  mql: window.matchMedia,

  match: function(name, query) {
    var classify = Ember.String.classify,
      matcher = (this.get('mql') || window.matchMedia)(query),
      isser = 'is' + classify(name);

    var listener = (matcher) => {
      this.set(name, matcher);
      this.set(isser, matcher.matches);

      if (matcher.matches) {
        this.get('matches').addObject(name);
      } else {
        this.get('matches').removeObject(name);
      }
    };

    this.get('listeners')[name] = listener;

    if (matcher.addListener) {
      matcher.addListener((matcher) => {
        Ember.run(null, listener, matcher);
      });
    }

    listener(matcher);

  }


});

export default MediaQueriesService;
