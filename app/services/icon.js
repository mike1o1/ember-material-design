import Ember from 'ember';
import {
  raw
  }
  from 'ic-ajax';

var config = {
  defaultIconSize: 24
}; 


var urlRegex = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/i;

function Icon(el, config) {
  if (el.tagName != 'svg') {
    el = Ember.$('<svg xmlns="http://www.w3.org/2000/svg">').append(el)[0];
  }

  el = $(el);

  // inject the namespace if not available...
  if (!el.attr('xmlns')) {
    el.attr('xmlns', "http://www.w3.org/2000/svg");
  }

  this.element = el;
  this.config = config;
  this.prepare();
}

Icon.prototype = {
  clone: cloneSVG,
  prepare: prepareAndStyle
};

/**
 * Clone the Icon DOM element
 */
function cloneSVG() {
  return Ember.$(this.element[0].cloneNode(true));
}

/**
 * Prepare the DOM element that will be cached in the
 * loaded iconCache store.
 */
function prepareAndStyle() {
  var iconSize = this.config ? this.config.iconSize : config.defaultIconSize;
  var svg = this.element;

  svg[0].setAttribute('fit', '');
  svg[0].setAttribute('height', '100%');
  svg[0].setAttribute('width', '100%');
  svg[0].setAttribute('preserveAspectRatio', 'xMidYMid meet');

  svg[0].setAttribute('viewBox', svg[0].getAttribute('viewBox') || ('0 0 ' + iconSize + ' ' + iconSize));

  svg.css({
    'pointer-events': 'none',
    'display': 'block'
  });

  this.element = svg;
}


var IconService = Ember.Service.extend({

  iconCache: {},
  templateCache: {},

  preloadIcons: function() {

    var svgRegistry = [{
      id: 'tabs-arrow',
      url: 'tabs-arrow.svg',
      svg: '<svg version="1.1" x="0px" y="0px" viewBox="0 0 24 24"><g><polygon points="15.4,7.4 14,6 8,12 14,18 15.4,16.6 10.8,12 "/></g></svg>'

    }, {
      id: 'close',
      url: 'close.svg',
      svg: '<svg version="1.1" x="0px" y="0px" viewBox="0 0 24 24"><g><path d="M19 6.41l-1.41-1.41-5.59 5.59-5.59-5.59-1.41 1.41 5.59 5.59-5.59 5.59 1.41 1.41 5.59-5.59 5.59 5.59 1.41-1.41-5.59-5.59z"/></g></svg>'

    }, {
      id: 'cancel',
      url: 'cancel.svg',
      svg: '<svg version="1.1" x="0px" y="0px" viewBox="0 0 24 24"><g><path d="M12 2c-5.53 0-10 4.47-10 10s4.47 10 10 10 10-4.47 10-10-4.47-10-10-10zm5 13.59l-1.41 1.41-3.59-3.59-3.59 3.59-1.41-1.41 3.59-3.59-3.59-3.59 1.41-1.41 3.59 3.59 3.59-3.59 1.41 1.41-3.59 3.59 3.59 3.59z"/></g></svg>'

    }, {
      id: 'toggle-arrow',
      url: 'toggle-arrow-svg',
      svg: '<svg version="1.1" x="0px" y="0px" viewBox="0 0 48 48"><path d="M24 16l-12 12 2.83 2.83 9.17-9.17 9.17 9.17 2.83-2.83z"/><path d="M0 0h48v48h-48z" fill="none"/></svg>'

    }];

    svgRegistry.forEach((asset) => {
      this.icon(asset.id, asset.url);
      this.templateCache[asset.url] = asset.svg;
    });


  },

  init: function() {
    this._super();
    this.preloadIcons();
  },

  getIcon: function(id) {
    id = id || '';


    // if already loaded and cached, use a clone of the cached icon.
    if (config[id]) {
      return Ember.RSVP.Promise.resolve(config[id].clone());
    }

    if (urlRegex.test(id)) {
      return this.loadByURL(id)
        .then(this.cacheIcon(id));
    }

    if (id.indexOf(':') == -1) {
      id = '$default:' + id;
    }

    return this.loadByID(id)
      .catch(Ember.run.bind(this, this.loadFromIconSet))
      .catch(this.announceIdNotFound)
      .catch(this.announceNotFound)
      .then(this.cacheIcon(id));
  },

  icon: function(id, url, iconSize) {
    if (id.indexOf(':') == -1) {
      id = '$default:' + id;
    }

    config[id] = {
      url: url,
      iconSize: iconSize || config.defaultIconSize
    };
  },

  iconSet: function(id, url, iconSize) {
    config[id] = {
      url: url,
      iconSize: iconSize || config.defaultIconSize
    };
  },

  defaultIconSet: function(url, iconSize) {
    var setName = '$default';

    if (!config[setName]) {
      config[setName] = {
        url: url,
        iconSize: iconSize || config.defaultIconSize
      };
    }
  },

  loadByID: function(id) {
    var iconConfig = config[id];

    return !iconConfig ? Ember.RSVP.Promise.reject(id) : this.loadByURL(iconConfig.url).then(function(icon) {
      return new Icon(icon, iconConfig);
    });
  },

  loadFromIconSet: function(id) {
    var setName = id.substring(0, id.lastIndexOf(':')) || '$default';
    var iconSetConfig = config[setName];

    return !iconSetConfig ? Ember.RSVP.Promise.reject(id) : this.loadByURL(iconSetConfig.url).then(extractFromSet);

    function extractFromSet(set) {
      var iconName = id.slice(id.lastIndexOf(':') + 1);
      var icon = set.querySelector('#' + iconName);
      return !icon ? Ember.RSVP.Promise.reject(id) : new Icon(icon, iconSetConfig);
    }
  },

  loadByURL: function(url) {

    // first check templateCache

    var req;

    if (this.templateCache[url]) {
      req = Ember.RSVP.Promise.resolve(this.templateCache[url]);
    } else {
      req = raw(url, {
        dataType: 'text'
      });
    }

    return req
      .then(function(response) {
        // if its an actual ajax request, just get the response text
        if (response.jqXHR) {
          response = response.jqXHR.responseText;
        }
        var els = Ember.$(response);

        for (var i = 0; i < els.length; ++i) {
          if (els[i].nodeName === 'svg') {
            return els[i];
          }
        }
      });
  },

  announceIdNotFound: function(id) {
    var msg;

    if (typeof id === 'string') {
      msg = 'icon ' + id + ' not found';
      console.log(msg);
    }

    return Ember.RSVP.Promise.reject(msg || id);
  },

  announceNotFound: function(err) {
    var msg = (typeof err === 'string') ? err : (err.message || err.data || err.statusText);
    debugger;
    console.log(msg);

    return Ember.RSVP.Promise.reject(msg);
  },

  isIcon: function(target) {
    return (typeof target.element !== 'undefined') && (typeof target.config !== 'undefined');
  },

  cacheIcon: function(id) {
    var self = this;
    return function updateCache(icon) {
      self.iconCache[id] = self.isIcon(icon) ? icon : new Icon(icon, config[id]);

      return self.iconCache[id].clone();
    }
  }

});

export default IconService;
