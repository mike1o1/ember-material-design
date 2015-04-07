import Ember from 'ember';
import RipplesMixin from 'ember-material-design/mixins/ripples';

export function initialize(/* container, application */) {
  // application.inject('route', 'foo', 'service:foo');

// by default we will insert the ripples mixin to links,
    // but ripples will only apply if the class is named 'md-button'
    // and the 'md-no-ink' attribute isn't set
    Ember.LinkView.reopen(RipplesMixin, {
        didInsertElement: function() {
            this._super();

            var isMdButton = this.get('classNames').contains('md-button');
            if (!isMdButton || this.get('mdNoInk')) {
                return;
            }

            var rs = this.get('rippleService');
            rs.attachButtonBehavior(this.$());
        }
    });

}

export default {
  name: 'md-link-to',
  initialize: initialize
};
