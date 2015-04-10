/* jshint ignore:start */

/* jshint ignore:end */

define('dummy/app', ['exports', 'ember', 'ember/resolver', 'ember/load-initializers', 'dummy/config/environment'], function (exports, Ember, Resolver, loadInitializers, config) {

  'use strict';

  Ember['default'].MODEL_FACTORY_INJECTIONS = true;

  var App = Ember['default'].Application.extend({
    modulePrefix: config['default'].modulePrefix,
    podModulePrefix: config['default'].podModulePrefix,
    Resolver: Resolver['default']
  });

  loadInitializers['default'](App, config['default'].modulePrefix);

  exports['default'] = App;

});
define('dummy/components/code-content', ['exports', 'ember', 'dummy/templates/components/code-content'], function (exports, Ember, layout) {

    'use strict';

    var CodeContentComponent = Ember['default'].Component.extend({

        layout: layout['default']

    });

    exports['default'] = CodeContentComponent;

});
define('dummy/components/code-snippet', ['exports', 'ember', 'dummy/snippets'], function (exports, Ember, Snippets) {

  'use strict';

  var Highlight = require("highlight.js");

  exports['default'] = Ember['default'].Component.extend({
    tagName: "pre",
    classNameBindings: ["language"],
    unindent: true,

    _unindent: function _unindent(src) {
      if (!this.get("unindent")) {
        return src;
      }
      var match,
          min,
          lines = src.split("\n");
      for (var i = 0; i < lines.length; i++) {
        match = /^\s*/.exec(lines[i]);
        if (match && (typeof min === "undefined" || min > match[0].length)) {
          min = match[0].length;
        }
      }
      if (typeof min !== "undefined" && min > 0) {
        src = src.replace(new RegExp("(\\n|^)\\s{" + min + "}", "g"), "$1");
      }
      return src;
    },

    source: Ember['default'].computed("name", function () {
      return this._unindent((Snippets['default'][this.get("name")] || "").replace(/^(\s*\n)*/, "").replace(/\s*$/, ""));
    }),

    didInsertElement: function didInsertElement() {
      Highlight.highlightBlock(this.get("element"));
    },

    language: Ember['default'].computed("name", function () {
      var m = /\.(\w+)$/i.exec(this.get("name"));
      if (m) {
        switch (m[1].toLowerCase()) {
          case "js":
            return "javascript";
          case "hbs":
            return "handlebars";
        }
      }
    })
  });

});
define('dummy/components/md-backdrop', ['exports', 'ember-material-design/components/md-backdrop'], function (exports, mdBackdrop) {

	'use strict';

	exports['default'] = mdBackdrop['default'];

});
define('dummy/components/md-button-link', ['exports', 'ember-material-design/components/md-button-link'], function (exports, mdButtonLink) {

	'use strict';

	exports['default'] = mdButtonLink['default'];

});
define('dummy/components/md-button', ['exports', 'ember-material-design/components/md-button'], function (exports, mdButton) {

	'use strict';

	exports['default'] = mdButton['default'];

});
define('dummy/components/md-checkbox', ['exports', 'ember-material-design/components/md-checkbox'], function (exports, mdCheckbox) {

	'use strict';

	exports['default'] = mdCheckbox['default'];

});
define('dummy/components/md-icon', ['exports', 'ember-material-design/components/md-icon'], function (exports, mdIcon) {

	'use strict';

	exports['default'] = mdIcon['default'];

});
define('dummy/components/md-input-container', ['exports', 'ember-material-design/components/md-input-container'], function (exports, mdInputContainer) {

	'use strict';

	exports['default'] = mdInputContainer['default'];

});
define('dummy/components/md-input', ['exports', 'ember-material-design/components/md-input'], function (exports, mdInput) {

	'use strict';

	exports['default'] = mdInput['default'];

});
define('dummy/components/md-list-item', ['exports', 'ember-material-design/components/md-list-item'], function (exports, mdListItem) {

	'use strict';

	exports['default'] = mdListItem['default'];

});
define('dummy/components/md-list', ['exports', 'ember-material-design/components/md-list'], function (exports, mdList) {

	'use strict';

	exports['default'] = mdList['default'];

});
define('dummy/components/md-progress-circular', ['exports', 'ember-material-design/components/md-progress-circular'], function (exports, mdProgressCircular) {

	'use strict';

	exports['default'] = mdProgressCircular['default'];

});
define('dummy/components/md-progress-linear', ['exports', 'ember-material-design/components/md-progress-linear'], function (exports, mdProgressLinear) {

	'use strict';

	exports['default'] = mdProgressLinear['default'];

});
define('dummy/components/md-radio-button', ['exports', 'ember-material-design/components/md-radio-button'], function (exports, mdRadioButton) {

	'use strict';

	exports['default'] = mdRadioButton['default'];

});
define('dummy/components/md-sidenav', ['exports', 'ember-material-design/components/md-sidenav'], function (exports, mdSidenav) {

	'use strict';

	exports['default'] = mdSidenav['default'];

});
define('dummy/components/md-slider', ['exports', 'ember-material-design/components/md-slider'], function (exports, mdSlider) {

	'use strict';

	exports['default'] = mdSlider['default'];

});
define('dummy/components/md-tab-content', ['exports', 'ember-material-design/components/md-tab-content'], function (exports, mdTabContent) {

	'use strict';

	exports['default'] = mdTabContent['default'];

});
define('dummy/components/md-tab-item', ['exports', 'ember-material-design/components/md-tab-item'], function (exports, mdTabItem) {

	'use strict';

	exports['default'] = mdTabItem['default'];

});
define('dummy/components/md-tab', ['exports', 'ember-material-design/components/md-tab'], function (exports, mdTab) {

	'use strict';

	exports['default'] = mdTab['default'];

});
define('dummy/components/md-tabs-content-wrapper', ['exports', 'ember-material-design/components/md-tabs-content-wrapper'], function (exports, mdTabsContentWrapper) {

	'use strict';

	exports['default'] = mdTabsContentWrapper['default'];

});
define('dummy/components/md-tabs-wrapper', ['exports', 'ember-material-design/components/md-tabs-wrapper'], function (exports, mdTabsWrapper) {

	'use strict';

	exports['default'] = mdTabsWrapper['default'];

});
define('dummy/components/md-tabs', ['exports', 'ember-material-design/components/md-tabs'], function (exports, mdTabs) {

	'use strict';

	exports['default'] = mdTabs['default'];

});
define('dummy/components/md-textarea', ['exports', 'ember-material-design/components/md-textarea'], function (exports, mdTextarea) {

	'use strict';

	exports['default'] = mdTextarea['default'];

});
define('dummy/components/md-toast', ['exports', 'ember-material-design/components/md-toast'], function (exports, mdToast) {

	'use strict';

	exports['default'] = mdToast['default'];

});
define('dummy/components/md-toolbar', ['exports', 'ember-material-design/components/md-toolbar'], function (exports, mdToolbar) {

	'use strict';

	exports['default'] = mdToolbar['default'];

});
define('dummy/components/md-tooltip', ['exports', 'ember-material-design/components/md-tooltip'], function (exports, mdTooltip) {

	'use strict';

	exports['default'] = mdTooltip['default'];

});
define('dummy/controllers/application', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  var ApplicationController = Ember['default'].Controller.extend({

    actions: {
      toggleSidebar: function toggleSidebar() {
        this.toggleProperty("sidebarVisible");
      }
    }

  });

  exports['default'] = ApplicationController;

});
define('dummy/controllers/base-demo-controller', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    var BaseDemoController = Ember['default'].Controller.extend({
        showSource: false,

        showSourceClass: Ember['default'].computed("showSource", function () {
            var showSourceClass = this.get("showSource") ? "show-source" : "";
            return Ember['default'].String.htmlSafe(showSourceClass);
            //return showSourceClass.htmlSafe();
        }),

        demoName: "",

        sourceFiles: null,

        setSourceFiles: function setSourceFiles(demoContent) {
            this._super();
            var demoName = this.get("demoName");

            var sourceFiles = Ember['default'].ArrayProxy.create({
                content: Ember['default'].A([{ name: "hbs", content: demoName + "-index.hbs" }, { name: "controller", content: demoName + "-controller.js" }, { name: "route", content: demoName + "-route.js" }, { name: "css", content: demoName + "-style.css" }])
            });

            var sf = Ember['default'].ArrayProxy.create({
                content: Ember['default'].A(demoContent)
            });

            this.set("sourceFiles", sf);
        },

        actions: {
            showSource: function showSource() {
                this.toggleProperty("showSource");
            }
        }
    });

    exports['default'] = BaseDemoController;

});
define('dummy/controllers/buttons', ['exports', 'ember', 'dummy/controllers/base-demo-controller'], function (exports, Ember, BaseDemoController) {

    'use strict';

    var ButtonsController = BaseDemoController['default'].extend({
        demoName: "buttons",

        init: function init() {
            var content = [{ name: "hbs", content: "buttons.hbs" }, { name: "controller", content: "buttons-controller.js" }];

            this.setSourceFiles(content);
        }
    });

    exports['default'] = ButtonsController;

});
define('dummy/controllers/card', ['exports', 'ember', 'dummy/controllers/base-demo-controller'], function (exports, Ember, BaseDemoController) {

    'use strict';

    var CardController = BaseDemoController['default'].extend({
        demoName: "buttons",

        init: function init() {
            var content = [{ name: "hbs", content: "card.hbs" }];

            this.setSourceFiles(content);
        }
    });

    exports['default'] = CardController;

});
define('dummy/controllers/checkbox', ['exports', 'ember', 'dummy/controllers/base-demo-controller'], function (exports, Ember, BaseDemoController) {

    'use strict';

    exports['default'] = BaseDemoController['default'].extend({

        demoName: "checkbox",

        data: {
            cb1: true,
            cb2: false,
            cb3: false,
            cb4: true,
            cb5: false
        },

        init: function init() {
            var content = [{ name: "hbs", content: "checkbox.hbs" }, { name: "controller", content: "checkbox-controller.js" }];

            this.setSourceFiles(content);
        }
    });

});
define('dummy/controllers/content', ['exports', 'ember', 'dummy/controllers/base-demo-controller'], function (exports, Ember, BaseDemoController) {

    'use strict';

    exports['default'] = BaseDemoController['default'].extend({
        demoName: "content",

        init: function init() {
            var content = [{ name: "hbs", content: "content.hbs" }];

            this.setSourceFiles(content);
        }

    });

});
define('dummy/controllers/divider', ['exports', 'ember', 'dummy/controllers/base-demo-controller'], function (exports, Ember, BaseDemoController) {

    'use strict';

    exports['default'] = BaseDemoController['default'].extend({
        demoName: "divider",

        init: function init() {

            var content = [{ name: "hbs", content: "divider.hbs" }, { name: "controller", content: "divider-controller.js" }];

            this.setSourceFiles(content);
        },

        messages: Ember['default'].A([{
            face: "http://lorempixel.com/50/50/people",
            what: "Brunch this weekend?",
            who: "Min Li Chan",
            when: "3:08PM",
            notes: " I'll be in your neighborhood doing errands"
        }, {
            face: "http://lorempixel.com/50/50/people",
            what: "Brunch this weekend?",
            who: "Min Li Chan",
            when: "3:08PM",
            notes: " I'll be in your neighborhood doing errands"
        }, {
            face: "http://lorempixel.com/50/50/people",
            what: "Brunch this weekend?",
            who: "Min Li Chan",
            when: "3:08PM",
            notes: " I'll be in your neighborhood doing errands"
        }, {
            face: "http://lorempixel.com/50/50/people",
            what: "Brunch this weekend?",
            who: "Min Li Chan",
            when: "3:08PM",
            notes: " I'll be in your neighborhood doing errands"
        }, {
            face: "http://lorempixel.com/50/50/people",
            what: "Brunch this weekend?",
            who: "Min Li Chan",
            when: "3:08PM",
            notes: " I'll be in your neighborhood doing errands"
        }])
    });

});
define('dummy/controllers/icon', ['exports', 'ember', 'dummy/controllers/base-demo-controller'], function (exports, Ember, BaseDemoController) {

    'use strict';

    exports['default'] = BaseDemoController['default'].extend({

        demoName: "icon-fontIcons",

        init: function init() {
            var content = [{ name: "hbs", content: "icon-fontIcons.hbs" }, { name: "controller", content: "icon-controller.js" }];

            this.setSourceFiles(content);
        },

        showSourceFromUrl: false,

        showSourceClassFromUrl: Ember['default'].computed("showSourceFromUrl", function () {
            return this.get("showSourceFromUrl") ? "show-source" : "";
        }),

        sourceFilesFromUrl: null,

        setSourceFilesFromUrl: Ember['default'].on("init", function () {
            var demoName = "icon-fromUrl";

            var sourceFiles = Ember['default'].ArrayProxy.create({
                content: Ember['default'].A([{ name: "hbs", content: demoName + ".hbs" }, { name: "controller", content: "icon-controller.js" }])
            });

            this.set("sourceFilesFromUrl", sourceFiles);
        }),

        showSourceFromSet: false,

        showSourceClassFromSet: Ember['default'].computed("showSourceFromSet", function () {
            return this.get("showSourceFromSet") ? "show-source" : "";
        }),

        sourceFilesFromSet: null,

        setSourceFilesFromSet: Ember['default'].on("init", function () {
            var demoName = "icon-fromSet";

            var sourceFiles = Ember['default'].ArrayProxy.create({
                content: Ember['default'].A([{ name: "hbs", content: demoName + ".hbs" }, { name: "controller", content: "icon-controller.js" }])
            });

            this.set("sourceFilesFromSet", sourceFiles);
        }),

        actions: {
            showSourceFromUrl: function showSourceFromUrl() {
                this.toggleProperty("showSourceFromUrl");
            },

            showSourceFromSet: function showSourceFromSet() {
                this.toggleProperty("showSourceFromSet");
            }
        },

        iconData: [{ name: "icon-home", color: "#777" }, { name: "icon-user-plus", color: "rgb(89, 226, 168)" }, { name: "icon-google-plus2", color: "#A00" }, { name: "icon-youtube4", color: "#00A" },
        // Use theming to color the font-icon
        { name: "icon-settings", color: "#A00", theme: "md-warn md-hue-5" }],

        sizes: [{ size: 12, padding: 0, previewScaleStyle: "padding-left: 0px", sizeStyle: "font-size: 12px; height: 12px;" }, { size: 21, padding: 2, previewScaleStyle: "padding-left: 2px", sizeStyle: "font-size: 21px; height: 21px;" }, { size: 36, padding: 6, previewScaleStyle: "padding-left: 6px", sizeStyle: "font-size: 36px; height: 36px;" }, { size: 48, padding: 10, previewScaleStyle: "padding-left: 10px", sizeStyle: "font-size: 48px; height: 48px;" }],

        icons: Ember['default'].computed("iconData", function () {
            var self = this;

            var iconData = this.get("iconData");

            iconData.forEach(function (i) {
                i.sizes = Ember['default'].A(Ember['default'].copy(self.sizes, true));

                i.sizes.forEach(function (size) {
                    var color = !i.theme && i.color;
                    size.sizeStyle = size.sizeStyle + " color: " + color + "; ";
                });
            });

            return Ember['default'].A(this.get("iconData"));
        }),

        insertDriveIconURL: "images/icons/ic_insert_drive_file_24px.svg",

        getAndroid: Ember['default'].computed("", function () {
            return "images/icons/android.svg";
        })

    });

});
define('dummy/controllers/input', ['exports', 'ember', 'dummy/controllers/base-demo-controller'], function (exports, Ember, BaseDemoController) {

    'use strict';

    exports['default'] = BaseDemoController['default'].extend({
        init: function init() {
            var content = [{ name: "hbs", content: "input.hbs" }, { name: "controller", content: "input-controller.js" }];

            this.setSourceFiles(content);
        },

        showSourceIcons: false,

        showSourceClassIcons: Ember['default'].computed("showSourceIcons", function () {
            return this.get("showSourceIcons") ? "show-source" : "";
        }),

        sourceFilesIcons: null,

        setSourceFilesIcons: Ember['default'].on("init", function () {
            var demoName = "input-Icons";

            var sourceFiles = Ember['default'].ArrayProxy.create({
                content: Ember['default'].A([{ name: "hbs", content: demoName + ".hbs" }, { name: "controller", content: "input-controller.js" }])
            });

            this.set("sourceFilesIcons", sourceFiles);
        }),

        actions: {
            showSourceIcons: function showSourceIcons() {
                this.toggleProperty("showSourceIcons");
            }
        },

        user: {
            title: "Developer",
            email: "ipsum@lorem.com",
            firstName: "",
            lastName: "",
            company: "Google",
            address: "1600 Amphitheatre Pkwy",
            city: "Mountain View",
            state: "CA",
            biography: "Loves kittens, snowboarding, and can type at 130 WPM.\n\nAnd rumor has it she bouldered up Castle Craig!",
            postalCode: "94043",
            submissionDate: null
        },

        user2: {
            name: "John Doe",
            email: "",
            phone: "",
            address: "Mountain View, CA"
        }
    });

});
define('dummy/controllers/list', ['exports', 'ember', 'dummy/controllers/base-demo-controller'], function (exports, Ember, BaseDemoController) {

    'use strict';

    exports['default'] = BaseDemoController['default'].extend({

        init: function init() {
            var content = [{ name: "hbs", content: "list.hbs" }, { name: "controller", content: "list-controller.js" }];

            this.setSourceFiles(content);
        },

        todos: Ember['default'].A([{
            face: "http://lorempixel.com/50/50/people",
            what: "Brunch this weekend?",
            who: "Min Li Chan",
            when: "3:08PM",
            notes: " I'll be in your neighborhood doing errands"
        }, {
            face: "http://lorempixel.com/50/50/people",
            what: "Brunch this weekend?",
            who: "Min Li Chan",
            when: "3:08PM",
            notes: " I'll be in your neighborhood doing errands"
        }, {
            face: "http://lorempixel.com/50/50/people",
            what: "Brunch this weekend?",
            who: "Min Li Chan",
            when: "3:08PM",
            notes: " I'll be in your neighborhood doing errands"
        }, {
            face: "http://lorempixel.com/50/50/people",
            what: "Brunch this weekend?",
            who: "Min Li Chan",
            when: "3:08PM",
            notes: " I'll be in your neighborhood doing errands"
        }, {
            face: "http://lorempixel.com/50/50/people",
            what: "Brunch this weekend?",
            who: "Min Li Chan",
            when: "3:08PM",
            notes: " I'll be in your neighborhood doing errands"
        }]),

        firstTodo: Ember['default'].computed("", function () {
            return this.get("todos")[0];
        })
    });

});
define('dummy/controllers/progress-circular', ['exports', 'ember', 'dummy/controllers/base-demo-controller'], function (exports, Ember, BaseDemoController) {

    'use strict';

    exports['default'] = BaseDemoController['default'].extend({

        init: function init() {
            var content = [{ name: "hbs", content: "progress-circular.hbs" }, { name: "controller", content: "progress-circular-controller.js" }];

            this.setSourceFiles(content);
        },

        mode: "query",
        determinateValue: 30,

        setupTimer: function setupTimer() {
            Ember['default'].run.later(this, function () {
                this.incrementProperty("determinateValue", 1);
                if (this.get("determinateValue") > 100) {
                    this.set("determinateValue", 30);
                }

                Ember['default'].run.later(this, this.setupTimer);
            }, 100);
        }
    });

});
define('dummy/controllers/progress-linear', ['exports', 'ember', 'dummy/controllers/base-demo-controller'], function (exports, Ember, BaseDemoController) {

    'use strict';

    exports['default'] = BaseDemoController['default'].extend({
        init: function init() {
            var content = [{ name: "hbs", content: "progress-linear.hbs" }, { name: "controller", content: "progress-linear-controller.js" }];

            this.setSourceFiles(content);
        },

        mode: "query",
        determinateValue: 30,
        determinateValue2: 30,

        setupTimer: function setupTimer() {
            Ember['default'].run.later(this, function () {
                this.incrementProperty("determinateValue", 1);
                this.incrementProperty("determinateValue2", 1.5);
                if (this.get("determinateValue") > 100) {
                    this.set("determinateValue", 30);
                    this.set("determinateValue2", 30);
                }

                Ember['default'].run.later(this, this.setupTimer);
            }, 100);
        },

        setupTimer2: function setupTimer2() {
            Ember['default'].run.later(this, function () {
                this.set("mode", this.get("mode") == "query" ? "determinate" : "query");
                Ember['default'].run.later(this, this.setupTimer2);
            }, 7200);
        }
    });

});
define('dummy/controllers/radio-button', ['exports', 'ember', 'dummy/controllers/base-demo-controller'], function (exports, Ember, BaseDemoController) {

    'use strict';

    exports['default'] = BaseDemoController['default'].extend({
        init: function init() {
            var content = [{ name: "hbs", content: "radio-button.hbs" }, { name: "controller", content: "radio-button-controller.js" }];

            this.setSourceFiles(content);
        },

        data: {
            group1: "Banana",
            group2: 2,
            group3: "avatar-1"
        },

        avatarData: Ember['default'].A([{
            id: "avatars:svg-1",
            title: "avatar 1",
            value: "avatar-1"
        }, {
            id: "avatars:svg-2",
            title: "avatar 2",
            value: "avatar-2"
        }, {
            id: "avatars:svg-3",
            title: "avatar 3",
            value: "avatar-3"
        }]),

        radioData: Ember['default'].ArrayProxy.create({
            content: Ember['default'].A([{ label: "1", value: 1 }, { label: "2", value: 2 }, { label: "3", value: "3", isDisabled: true }, { label: "4", value: "4" }])
        }),

        //radioData: [
        //    {label: '1', value: 1},
        //    {label: '2', value: 2},
        //    {label: '3', value: '3', isDisabled: true},
        //    {label: '4', value: '4'}
        //],
        //

        actions: {
            submit: function submit() {
                alert("submit");
            },

            addItem: function addItem() {
                var r = Math.ceil(Math.random() * 1000);
                this.get("radioData").addObject({ label: r, value: r });
                return false;
            },

            removeItem: function removeItem() {
                this.get("radioData").popObject();
                return false;
            }
        }
    });

});
define('dummy/controllers/slider', ['exports', 'ember', 'dummy/controllers/base-demo-controller'], function (exports, Ember, BaseDemoController) {

    'use strict';

    exports['default'] = BaseDemoController['default'].extend({
        init: function init() {
            var content = [{ name: "hbs", content: "slider.hbs" }, { name: "controller", content: "slider-controller.js" }];

            this.setSourceFiles(content);
        },

        color: {
            red: Math.floor(Math.random() * 255),
            green: Math.floor(Math.random() * 255),
            blue: Math.floor(Math.random() * 255)
        },

        colorStyle: Ember['default'].computed("color.red", "color.green", "color.blue", function () {
            return Ember['default'].String.htmlSafe("border: 1px solid #333; background: rgb(" + this.get("color.red") + "," + this.get("color.green") + "," + this.get("color.blue") + ")");
        }),

        rating1: 3,
        rating2: 2,
        rating3: 4,

        disabled1: 0,
        disabled2: 70
    });

});
define('dummy/controllers/tabs', ['exports', 'ember', 'dummy/controllers/base-demo-controller'], function (exports, Ember, BaseDemoController) {

    'use strict';

    exports['default'] = BaseDemoController['default'].extend({

        init: function init() {
            var content = [{ name: "hbs", content: "tabs.hbs" }, { name: "controller", content: "tabs-controller.js" }];

            this.setSourceFiles(content);
        },

        tabs: Ember['default'].ArrayProxy.create({
            content: Ember['default'].A([{ title: "One", content: "Tabs will become paginated if there isn't enough room for them." }, { title: "Two", content: "You can swipe left and right on a mobile device to change tabs." }, { title: "Three", content: "You can bind the selected tab via the selected attribute on the md-tabs element." }, { title: "Four", content: "If you set the selected tab binding to -1, it will leave no tab selected." }, { title: "Five", content: "If you remove a tab, it will try to select a new one." }, { title: "Six", content: "There's an ink bar that follows the selected tab, you can turn it off if you want." }, { title: "Seven", content: "If you set ng-disabled on a tab, it becomes unselectable. If the currently selected tab becomes disabled, it will try to select the next tab." }, { title: "Eight", content: "If you look at the source, you're using tabs to look at a demo for tabs. Recursion!" }, { title: "Nine", content: "If you set md-theme=\"green\" on the md-tabs element, you'll get green tabs." }, { title: "Ten", content: "If you're still reading this, you should just go check out the API docs for tabs!" }])
        }),

        cantRemoveTabs: Ember['default'].computed("tabs.length", function () {

            return this.get("tabs.length") <= 1;
        }),

        selectedIndex: 2,

        selectedTab: Ember['default'].computed("selectedIndex", "tabs.[]", function () {
            return this.get("tabs").objectAt(this.get("selectedIndex"));
        }),

        actions: {
            showSource: function showSource() {
                this.toggleProperty("showSource");
            },

            addTab: function addTab() {
                var title = this.get("tTitle"),
                    content = this.get("tContent");

                this.get("tabs").pushObject({
                    title: title,
                    content: content || title + " Content View"
                });
            },

            removeTab: function removeTab() {
                this.get("tabs").removeAt(this.get("selectedIndex"));
            }
        }
    });

});
define('dummy/controllers/toolbar', ['exports', 'ember', 'dummy/controllers/base-demo-controller'], function (exports, Ember, BaseDemoController) {

    'use strict';

    exports['default'] = BaseDemoController['default'].extend({
        init: function init() {
            var content = [{ name: "hbs", content: "toolbar.hbs" }];

            this.setSourceFiles(content);
        }

    });

});
define('dummy/controllers/tooltip', ['exports', 'ember', 'dummy/controllers/base-demo-controller'], function (exports, Ember, BaseDemoController) {

    'use strict';

    exports['default'] = BaseDemoController['default'].extend({
        init: function init() {
            var content = [{ name: "hbs", content: "tooltip.hbs" }, { name: "controller", content: "tooltip-controller.js" }];

            this.setSourceFiles(content);
        },

        demo: {}
    });

});
define('dummy/ember-material-design/tests/modules/ember-material-design/components/md-backdrop.jshint', function () {

  'use strict';

  module("JSHint - modules/ember-material-design/components");
  test("modules/ember-material-design/components/md-backdrop.js should pass jshint", function () {
    ok(true, "modules/ember-material-design/components/md-backdrop.js should pass jshint.");
  });

});
define('dummy/ember-material-design/tests/modules/ember-material-design/components/md-button-link.jshint', function () {

  'use strict';

  module("JSHint - modules/ember-material-design/components");
  test("modules/ember-material-design/components/md-button-link.js should pass jshint", function () {
    ok(true, "modules/ember-material-design/components/md-button-link.js should pass jshint.");
  });

});
define('dummy/ember-material-design/tests/modules/ember-material-design/components/md-button.jshint', function () {

  'use strict';

  module("JSHint - modules/ember-material-design/components");
  test("modules/ember-material-design/components/md-button.js should pass jshint", function () {
    ok(true, "modules/ember-material-design/components/md-button.js should pass jshint.");
  });

});
define('dummy/ember-material-design/tests/modules/ember-material-design/components/md-checkbox.jshint', function () {

  'use strict';

  module("JSHint - modules/ember-material-design/components");
  test("modules/ember-material-design/components/md-checkbox.js should pass jshint", function () {
    ok(true, "modules/ember-material-design/components/md-checkbox.js should pass jshint.");
  });

});
define('dummy/ember-material-design/tests/modules/ember-material-design/components/md-icon.jshint', function () {

  'use strict';

  module("JSHint - modules/ember-material-design/components");
  test("modules/ember-material-design/components/md-icon.js should pass jshint", function () {
    ok(true, "modules/ember-material-design/components/md-icon.js should pass jshint.");
  });

});
define('dummy/ember-material-design/tests/modules/ember-material-design/components/md-input-container.jshint', function () {

  'use strict';

  module("JSHint - modules/ember-material-design/components");
  test("modules/ember-material-design/components/md-input-container.js should pass jshint", function () {
    ok(true, "modules/ember-material-design/components/md-input-container.js should pass jshint.");
  });

});
define('dummy/ember-material-design/tests/modules/ember-material-design/components/md-input.jshint', function () {

  'use strict';

  module("JSHint - modules/ember-material-design/components");
  test("modules/ember-material-design/components/md-input.js should pass jshint", function () {
    ok(true, "modules/ember-material-design/components/md-input.js should pass jshint.");
  });

});
define('dummy/ember-material-design/tests/modules/ember-material-design/components/md-list-item.jshint', function () {

  'use strict';

  module("JSHint - modules/ember-material-design/components");
  test("modules/ember-material-design/components/md-list-item.js should pass jshint", function () {
    ok(true, "modules/ember-material-design/components/md-list-item.js should pass jshint.");
  });

});
define('dummy/ember-material-design/tests/modules/ember-material-design/components/md-list.jshint', function () {

  'use strict';

  module("JSHint - modules/ember-material-design/components");
  test("modules/ember-material-design/components/md-list.js should pass jshint", function () {
    ok(true, "modules/ember-material-design/components/md-list.js should pass jshint.");
  });

});
define('dummy/ember-material-design/tests/modules/ember-material-design/components/md-progress-circular.jshint', function () {

  'use strict';

  module("JSHint - modules/ember-material-design/components");
  test("modules/ember-material-design/components/md-progress-circular.js should pass jshint", function () {
    ok(true, "modules/ember-material-design/components/md-progress-circular.js should pass jshint.");
  });

});
define('dummy/ember-material-design/tests/modules/ember-material-design/components/md-progress-linear.jshint', function () {

  'use strict';

  module("JSHint - modules/ember-material-design/components");
  test("modules/ember-material-design/components/md-progress-linear.js should pass jshint", function () {
    ok(true, "modules/ember-material-design/components/md-progress-linear.js should pass jshint.");
  });

});
define('dummy/ember-material-design/tests/modules/ember-material-design/components/md-radio-button.jshint', function () {

  'use strict';

  module("JSHint - modules/ember-material-design/components");
  test("modules/ember-material-design/components/md-radio-button.js should pass jshint", function () {
    ok(true, "modules/ember-material-design/components/md-radio-button.js should pass jshint.");
  });

});
define('dummy/ember-material-design/tests/modules/ember-material-design/components/md-sidenav.jshint', function () {

  'use strict';

  module("JSHint - modules/ember-material-design/components");
  test("modules/ember-material-design/components/md-sidenav.js should pass jshint", function () {
    ok(true, "modules/ember-material-design/components/md-sidenav.js should pass jshint.");
  });

});
define('dummy/ember-material-design/tests/modules/ember-material-design/components/md-slider.jshint', function () {

  'use strict';

  module("JSHint - modules/ember-material-design/components");
  test("modules/ember-material-design/components/md-slider.js should pass jshint", function () {
    ok(true, "modules/ember-material-design/components/md-slider.js should pass jshint.");
  });

});
define('dummy/ember-material-design/tests/modules/ember-material-design/components/md-tab-content.jshint', function () {

  'use strict';

  module("JSHint - modules/ember-material-design/components");
  test("modules/ember-material-design/components/md-tab-content.js should pass jshint", function () {
    ok(true, "modules/ember-material-design/components/md-tab-content.js should pass jshint.");
  });

});
define('dummy/ember-material-design/tests/modules/ember-material-design/components/md-tab-item.jshint', function () {

  'use strict';

  module("JSHint - modules/ember-material-design/components");
  test("modules/ember-material-design/components/md-tab-item.js should pass jshint", function () {
    ok(true, "modules/ember-material-design/components/md-tab-item.js should pass jshint.");
  });

});
define('dummy/ember-material-design/tests/modules/ember-material-design/components/md-tab.jshint', function () {

  'use strict';

  module("JSHint - modules/ember-material-design/components");
  test("modules/ember-material-design/components/md-tab.js should pass jshint", function () {
    ok(true, "modules/ember-material-design/components/md-tab.js should pass jshint.");
  });

});
define('dummy/ember-material-design/tests/modules/ember-material-design/components/md-tabs-content-wrapper.jshint', function () {

  'use strict';

  module("JSHint - modules/ember-material-design/components");
  test("modules/ember-material-design/components/md-tabs-content-wrapper.js should pass jshint", function () {
    ok(true, "modules/ember-material-design/components/md-tabs-content-wrapper.js should pass jshint.");
  });

});
define('dummy/ember-material-design/tests/modules/ember-material-design/components/md-tabs-wrapper.jshint', function () {

  'use strict';

  module("JSHint - modules/ember-material-design/components");
  test("modules/ember-material-design/components/md-tabs-wrapper.js should pass jshint", function () {
    ok(true, "modules/ember-material-design/components/md-tabs-wrapper.js should pass jshint.");
  });

});
define('dummy/ember-material-design/tests/modules/ember-material-design/components/md-tabs.jshint', function () {

  'use strict';

  module("JSHint - modules/ember-material-design/components");
  test("modules/ember-material-design/components/md-tabs.js should pass jshint", function () {
    ok(true, "modules/ember-material-design/components/md-tabs.js should pass jshint.");
  });

});
define('dummy/ember-material-design/tests/modules/ember-material-design/components/md-textarea.jshint', function () {

  'use strict';

  module("JSHint - modules/ember-material-design/components");
  test("modules/ember-material-design/components/md-textarea.js should pass jshint", function () {
    ok(true, "modules/ember-material-design/components/md-textarea.js should pass jshint.");
  });

});
define('dummy/ember-material-design/tests/modules/ember-material-design/components/md-toast.jshint', function () {

  'use strict';

  module("JSHint - modules/ember-material-design/components");
  test("modules/ember-material-design/components/md-toast.js should pass jshint", function () {
    ok(true, "modules/ember-material-design/components/md-toast.js should pass jshint.");
  });

});
define('dummy/ember-material-design/tests/modules/ember-material-design/components/md-toolbar.jshint', function () {

  'use strict';

  module("JSHint - modules/ember-material-design/components");
  test("modules/ember-material-design/components/md-toolbar.js should pass jshint", function () {
    ok(true, "modules/ember-material-design/components/md-toolbar.js should pass jshint.");
  });

});
define('dummy/ember-material-design/tests/modules/ember-material-design/components/md-tooltip.jshint', function () {

  'use strict';

  module("JSHint - modules/ember-material-design/components");
  test("modules/ember-material-design/components/md-tooltip.js should pass jshint", function () {
    ok(true, "modules/ember-material-design/components/md-tooltip.js should pass jshint.");
  });

});
define('dummy/ember-material-design/tests/modules/ember-material-design/mixins/events.jshint', function () {

  'use strict';

  module("JSHint - modules/ember-material-design/mixins");
  test("modules/ember-material-design/mixins/events.js should pass jshint", function () {
    ok(true, "modules/ember-material-design/mixins/events.js should pass jshint.");
  });

});
define('dummy/ember-material-design/tests/modules/ember-material-design/mixins/gesture-events.jshint', function () {

  'use strict';

  module("JSHint - modules/ember-material-design/mixins");
  test("modules/ember-material-design/mixins/gesture-events.js should pass jshint", function () {
    ok(true, "modules/ember-material-design/mixins/gesture-events.js should pass jshint.");
  });

});
define('dummy/ember-material-design/tests/modules/ember-material-design/mixins/has-flex.jshint', function () {

  'use strict';

  module("JSHint - modules/ember-material-design/mixins");
  test("modules/ember-material-design/mixins/has-flex.js should pass jshint", function () {
    ok(true, "modules/ember-material-design/mixins/has-flex.js should pass jshint.");
  });

});
define('dummy/ember-material-design/tests/modules/ember-material-design/mixins/has-layout.jshint', function () {

  'use strict';

  module("JSHint - modules/ember-material-design/mixins");
  test("modules/ember-material-design/mixins/has-layout.js should pass jshint", function () {
    ok(true, "modules/ember-material-design/mixins/has-layout.js should pass jshint.");
  });

});
define('dummy/ember-material-design/tests/modules/ember-material-design/mixins/ripples.jshint', function () {

  'use strict';

  module("JSHint - modules/ember-material-design/mixins");
  test("modules/ember-material-design/mixins/ripples.js should pass jshint", function () {
    ok(true, "modules/ember-material-design/mixins/ripples.js should pass jshint.");
  });

});
define('dummy/initializers/app-version', ['exports', 'dummy/config/environment', 'ember'], function (exports, config, Ember) {

  'use strict';

  var classify = Ember['default'].String.classify;
  var registered = false;

  exports['default'] = {
    name: "App Version",
    initialize: function initialize(container, application) {
      if (!registered) {
        var appName = classify(application.toString());
        Ember['default'].libraries.register(appName, config['default'].APP.version);
        registered = true;
      }
    }
  };

});
define('dummy/initializers/export-application-global', ['exports', 'ember', 'dummy/config/environment'], function (exports, Ember, config) {

  'use strict';

  exports.initialize = initialize;

  function initialize(container, application) {
    var classifiedName = Ember['default'].String.classify(config['default'].modulePrefix);

    if (config['default'].exportApplicationGlobal && !window[classifiedName]) {
      window[classifiedName] = application;
    }
  }

  ;

  exports['default'] = {
    name: "export-application-global",

    initialize: initialize
  };

});
define('dummy/initializers/md-layout-views', ['exports', 'ember', 'ember-material-design/mixins/has-flex', 'ember-material-design/mixins/has-layout'], function (exports, Ember, HasFlex, HasLayout) {

  'use strict';

  exports.initialize = initialize;

  function initialize() {
    // We want to inject the flex and layout parameters to every element
    // so we don't need to customize each view or component to add it
    Ember['default'].View.reopen(HasFlex['default'], HasLayout['default'], {
      flex: null
    });
  }

  exports['default'] = {
    name: "md-layout-views",
    initialize: initialize
  };
  /* container, application */

});
define('dummy/initializers/md-link-to', ['exports', 'ember', 'ember-material-design/mixins/ripples'], function (exports, Ember, RipplesMixin) {

    'use strict';

    exports.initialize = initialize;

    function initialize() {
        // application.inject('route', 'foo', 'service:foo');

        // by default we will insert the ripples mixin to links,
        // but ripples will only apply if the class is named 'md-button'
        // and the 'md-no-ink' attribute isn't set
        Ember['default'].LinkView.reopen(RipplesMixin['default'], {
            didInsertElement: function didInsertElement() {
                this._super();

                var isMdButton = this.get("classNames").contains("md-button");
                if (!isMdButton || this.get("mdNoInk")) {
                    return;
                }

                var rs = this.get("rippleService");
                rs.attachButtonBehavior(this.$());
            }
        });
    }

    exports['default'] = {
        name: "md-link-to",
        initialize: initialize
    };
    /* container, application */

});
define('dummy/router', ['exports', 'ember', 'dummy/config/environment'], function (exports, Ember, config) {

  'use strict';

  var Router = Ember['default'].Router.extend({
    location: config['default'].locationType
  });

  exports['default'] = Router.map(function () {
    this.route("buttons");
    this.route("content");
    this.route("divider");
    this.route("card");
    this.route("input");
    this.route("list");
    this.route("toolbar");
    this.route("checkbox");
    this.route("slider");
    this.route("progress-circular");
    this.route("progress-linear");
    this.route("icon");
    this.route("radio-button");
    this.route("tabs");
    this.route("typography");
    this.route("tooltip");
    this.route("toast");
  });

});
define('dummy/routes/base-route', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	var BaseRoute = Ember['default'].Route.extend({
		setupController: function setupController(controller, model) {
			this._super(controller, model);

			this.controllerFor("application").set("demoName", this.get("demoName"));
		}

	});

	exports['default'] = BaseRoute;

});
define('dummy/routes/buttons', ['exports', 'ember', 'dummy/routes/base-route'], function (exports, Ember, BaseRoute) {

	'use strict';

	exports['default'] = BaseRoute['default'].extend({

		demoName: "Buttons" });

});
define('dummy/routes/card', ['exports', 'ember', 'dummy/routes/base-route'], function (exports, Ember, BaseRoute) {

	'use strict';

	exports['default'] = BaseRoute['default'].extend({

		demoName: "Card" });

});
define('dummy/routes/checkbox', ['exports', 'ember', 'dummy/routes/base-route'], function (exports, Ember, BaseRoute) {

	'use strict';

	exports['default'] = BaseRoute['default'].extend({

		demoName: "Checkbox" });

});
define('dummy/routes/content', ['exports', 'ember', 'dummy/routes/base-route'], function (exports, Ember, BaseRoute) {

	'use strict';

	exports['default'] = BaseRoute['default'].extend({

		demoName: "Content" });

});
define('dummy/routes/divider', ['exports', 'dummy/routes/base-route'], function (exports, BaseRoute) {

	'use strict';

	exports['default'] = BaseRoute['default'].extend({

		demoName: "Divider"

	});

});
define('dummy/routes/icon', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Route.extend({
        iconService: Ember['default'].inject.service("icon"),

        demoName: "Icon",

        setupController: function setupController(controller, model) {
            this._super(controller, model);

            var is = this.get("iconService");

            this.controllerFor("application").set("demoName", this.get("demoName"));

            is.iconSet("social", "images/icons/sets/social-icons.svg", 24);
            is.defaultIconSet("images/icons/sets/core-icons.svg", 24);
        }
    });

});
define('dummy/routes/index', ['exports', 'ember', 'dummy/routes/base-route'], function (exports, Ember, BaseRoute) {

	'use strict';

	exports['default'] = BaseRoute['default'].extend({

		demoName: "Index" });

});
define('dummy/routes/input', ['exports', 'dummy/routes/base-route'], function (exports, BaseRoute) {

	'use strict';

	exports['default'] = BaseRoute['default'].extend({

		demoName: "Input"
	});

});
define('dummy/routes/list', ['exports', 'ember', 'dummy/routes/base-route'], function (exports, Ember, BaseRoute) {

	'use strict';

	exports['default'] = BaseRoute['default'].extend({

		demoName: "List" });

});
define('dummy/routes/progress-circular', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Route.extend({

        demoName: "Progress Circular",

        setupController: function setupController(controller, model) {
            this._super(controller, model);

            controller.setupTimer();

            this.controllerFor("application").set("demoName", this.get("demoName"));
        }
    });

});
define('dummy/routes/progress-linear', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Route.extend({

        demoName: "Progress Linear",

        setupController: function setupController(controller, model) {
            this._super(controller, model);

            controller.setupTimer();
            controller.setupTimer2();

            this.controllerFor("application").set("demoName", this.get("demoName"));
        }
    });

});
define('dummy/routes/radio-button', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Route.extend({

        icons: Ember['default'].inject.service("icon"),

        demoName: "Radio Button",

        setupController: function setupController(controller, setup) {
            this._super(controller, setup);

            var iconService = this.get("icons");

            iconService.iconSet("avatars", "icons/avatar-icons.svg", 128);

            this.controllerFor("application").set("demoName", this.get("demoName"));
        }
    });

});
define('dummy/routes/slider', ['exports', 'ember', 'dummy/routes/base-route'], function (exports, Ember, BaseRoute) {

	'use strict';

	exports['default'] = BaseRoute['default'].extend({

		demoName: "Slider" });

});
define('dummy/routes/tabs', ['exports', 'ember', 'dummy/routes/base-route'], function (exports, Ember, BaseRoute) {

	'use strict';

	exports['default'] = BaseRoute['default'].extend({

		demoName: "Tabs" });

});
define('dummy/routes/toolbar', ['exports', 'ember', 'dummy/routes/base-route'], function (exports, Ember, BaseRoute) {

	'use strict';

	exports['default'] = BaseRoute['default'].extend({

		demoName: "Toolbar" });

});
define('dummy/routes/tooltip', ['exports', 'ember', 'dummy/routes/base-route'], function (exports, Ember, BaseRoute) {

	'use strict';

	exports['default'] = BaseRoute['default'].extend({

		demoName: "Tooltip" });

});
define('dummy/routes/typography', ['exports', 'ember', 'dummy/routes/base-route'], function (exports, Ember, BaseRoute) {

	'use strict';

	exports['default'] = BaseRoute['default'].extend({

		demoName: "Typography" });

});
define('dummy/services/constants', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    var Constants = Ember['default'].Service.extend({

        snifferService: Ember['default'].inject.service("sniffer"),

        webkit: Ember['default'].computed("", function () {
            return /webkit/i.test(this.get("snifferService.vendorPrefix"));
        }),

        vendorProperty: function vendorProperty(name) {
            var prefix = this.get("snifferService.vendorPrefix").toLowerCase();
            return this.get("webkit") ? "-webkit-" + name.charAt(0) + name.substring(1) : name;
        },

        MEDIA: {
            sm: "(max-width: 600px)",
            "gt-sm": "(min-width: 600px)",
            md: "(min-width: 600px) and (max-width: 960px)",
            "gt-md": "(min-width: 960px)",
            lg: "(min-width: 960px) and (max-width: 1200px)",
            "gt-lg": "(min-width: 1200px)"
        },

        CSS: Ember['default'].computed("webkit", function () {
            var webkit = this.get("webkit");
            return {
                /* Constants */
                TRANSITIONEND: "transitionend" + (webkit ? " webkitTransitionEnd" : ""),
                ANIMATIONEND: "animationend" + (webkit ? " webkitAnimationEnd" : ""),

                TRANSFORM: this.vendorProperty("transform"),
                TRANSFORM_ORIGIN: this.vendorProperty("transformOrigin"),
                TRANSITION: this.vendorProperty("transition"),
                TRANSITION_DURATION: this.vendorProperty("transitionDuration"),
                ANIMATION_PLAY_STATE: this.vendorProperty("animationPlayState"),
                ANIMATION_DURATION: this.vendorProperty("animationDuration"),
                ANIMATION_NAME: this.vendorProperty("animationName"),
                ANIMATION_TIMING: this.vendorProperty("animationTimingFunction"),
                ANIMATION_DIRECTION: this.vendorProperty("animationDirection")
            };
        }),

        KEYCODE: {
            ENTER: 13,
            ESCAPE: 27,
            SPACE: 32,
            LEFT_ARROW: 37,
            UP_ARROW: 38,
            RIGHT_ARROW: 39,
            DOWN_ARROW: 40,
            TAB: 9
        },

        START_EVENTS: "mousedown touchstart pointerdown",
        MOVE_EVENTS: "mousemove touchmove pointermove",
        END_EVENTS: "mouseup mouseleave touchend touchcancel pointerup pointercancel"

    });

    exports['default'] = Constants;

});
define('dummy/services/icon', ['exports', 'ember', 'ic-ajax'], function (exports, Ember, ic_ajax) {

  'use strict';

  var config = {
    defaultIconSize: 24
  };

  var urlRegex = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/i;

  function Icon(el, config) {
    if (el.tagName != "svg") {
      el = Ember['default'].$("<svg xmlns=\"http://www.w3.org/2000/svg\">").append(el)[0];
    }

    el = $(el);

    // inject the namespace if not available...
    if (!el.attr("xmlns")) {
      el.attr("xmlns", "http://www.w3.org/2000/svg");
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
    return Ember['default'].$(this.element[0].cloneNode(true));
  }

  /**
   * Prepare the DOM element that will be cached in the
   * loaded iconCache store.
   */
  function prepareAndStyle() {
    var iconSize = this.config ? this.config.iconSize : config.defaultIconSize;
    var svg = this.element;

    svg[0].setAttribute("fit", "");
    svg[0].setAttribute("height", "100%");
    svg[0].setAttribute("width", "100%");
    svg[0].setAttribute("preserveAspectRatio", "xMidYMid meet");

    svg[0].setAttribute("viewBox", svg[0].getAttribute("viewBox") || "0 0 " + iconSize + " " + iconSize);

    svg.css({
      "pointer-events": "none",
      display: "block"
    });

    this.element = svg;
  }

  var IconService = Ember['default'].Service.extend({

    iconCache: {},
    templateCache: {},

    preloadIcons: function preloadIcons() {
      var _this = this;

      var svgRegistry = [{
        id: "tabs-arrow",
        url: "tabs-arrow.svg",
        svg: "<svg version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 24 24\"><g><polygon points=\"15.4,7.4 14,6 8,12 14,18 15.4,16.6 10.8,12 \"/></g></svg>"

      }, {
        id: "close",
        url: "close.svg",
        svg: "<svg version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 24 24\"><g><path d=\"M19 6.41l-1.41-1.41-5.59 5.59-5.59-5.59-1.41 1.41 5.59 5.59-5.59 5.59 1.41 1.41 5.59-5.59 5.59 5.59 1.41-1.41-5.59-5.59z\"/></g></svg>"

      }, {
        id: "cancel",
        url: "cancel.svg",
        svg: "<svg version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 24 24\"><g><path d=\"M12 2c-5.53 0-10 4.47-10 10s4.47 10 10 10 10-4.47 10-10-4.47-10-10-10zm5 13.59l-1.41 1.41-3.59-3.59-3.59 3.59-1.41-1.41 3.59-3.59-3.59-3.59 1.41-1.41 3.59 3.59 3.59-3.59 1.41 1.41-3.59 3.59 3.59 3.59z\"/></g></svg>"

      }, {
        id: "toggle-arrow",
        url: "toggle-arrow-svg",
        svg: "<svg version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 48 48\"><path d=\"M24 16l-12 12 2.83 2.83 9.17-9.17 9.17 9.17 2.83-2.83z\"/><path d=\"M0 0h48v48h-48z\" fill=\"none\"/></svg>"

      }];

      svgRegistry.forEach(function (asset) {
        _this.icon(asset.id, asset.url);
        _this.templateCache[asset.url] = asset.svg;
      });
    },

    init: function init() {
      this._super();
      this.preloadIcons();
    },

    getIcon: function getIcon(id) {
      id = id || "";

      // if already loaded and cached, use a clone of the cached icon.
      if (config[id]) {
        return Ember['default'].RSVP.Promise.resolve(config[id].clone());
      }

      if (urlRegex.test(id)) {
        return this.loadByURL(id).then(this.cacheIcon(id));
      }

      if (id.indexOf(":") == -1) {
        id = "$default:" + id;
      }

      return this.loadByID(id)["catch"](Ember['default'].run.bind(this, this.loadFromIconSet))["catch"](this.announceIdNotFound)["catch"](this.announceNotFound).then(this.cacheIcon(id));
    },

    icon: function icon(id, url, iconSize) {
      if (id.indexOf(":") == -1) {
        id = "$default:" + id;
      }

      config[id] = {
        url: url,
        iconSize: iconSize || config.defaultIconSize
      };
    },

    iconSet: function iconSet(id, url, iconSize) {
      config[id] = {
        url: url,
        iconSize: iconSize || config.defaultIconSize
      };
    },

    defaultIconSet: function defaultIconSet(url, iconSize) {
      var setName = "$default";

      if (!config[setName]) {
        config[setName] = {
          url: url,
          iconSize: iconSize || config.defaultIconSize
        };
      }
    },

    loadByID: function loadByID(id) {
      var iconConfig = config[id];

      return !iconConfig ? Ember['default'].RSVP.Promise.reject(id) : this.loadByURL(iconConfig.url).then(function (icon) {
        return new Icon(icon, iconConfig);
      });
    },

    loadFromIconSet: function loadFromIconSet(id) {
      var setName = id.substring(0, id.lastIndexOf(":")) || "$default";
      var iconSetConfig = config[setName];

      return !iconSetConfig ? Ember['default'].RSVP.Promise.reject(id) : this.loadByURL(iconSetConfig.url).then(extractFromSet);

      function extractFromSet(set) {
        var iconName = id.slice(id.lastIndexOf(":") + 1);
        var icon = set.querySelector("#" + iconName);
        return !icon ? Ember['default'].RSVP.Promise.reject(id) : new Icon(icon, iconSetConfig);
      }
    },

    loadByURL: function loadByURL(url) {

      // first check templateCache

      var req;

      if (this.templateCache[url]) {
        req = Ember['default'].RSVP.Promise.resolve(this.templateCache[url]);
      } else {
        req = ic_ajax.raw(url, {
          dataType: "text"
        });
      }

      return req.then(function (response) {
        // if its an actual ajax request, just get the response text
        if (response.jqXHR) {
          response = response.jqXHR.responseText;
        }
        var els = Ember['default'].$(response);

        for (var i = 0; i < els.length; ++i) {
          if (els[i].nodeName === "svg") {
            return els[i];
          }
        }
      });
    },

    announceIdNotFound: function announceIdNotFound(id) {
      var msg;

      if (typeof id === "string") {
        msg = "icon " + id + " not found";
        console.log(msg);
      }

      return Ember['default'].RSVP.Promise.reject(msg || id);
    },

    announceNotFound: function announceNotFound(err) {
      var msg = typeof err === "string" ? err : err.message || err.data || err.statusText;

      return Ember['default'].RSVP.Promise.reject(msg);
    },

    isIcon: function isIcon(target) {
      return typeof target.element !== "undefined" && typeof target.config !== "undefined";
    },

    cacheIcon: function cacheIcon(id) {
      var self = this;
      return function updateCache(icon) {
        self.iconCache[id] = self.isIcon(icon) ? icon : new Icon(icon, config[id]);

        return self.iconCache[id].clone();
      };
    }

  });

  exports['default'] = IconService;

});
define('dummy/services/media-queries', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  var MediaQueriesService = Ember['default'].Service.extend({

    matches: Ember['default'].computed("", function () {
      return Ember['default'].A();
    }),

    /**
     * A hash of listeners
     */
    listeners: {},

    /**
     * The matcher to use for testing media queries
     */
    mql: window.matchMedia,

    match: function match(name, query) {
      var _this = this;

      var classify = Ember['default'].String.classify,
          matcher = (this.get("mql") || window.matchMedia)(query),
          isser = "is" + classify(name);

      var listener = function (matcher) {
        _this.set(name, matcher);
        _this.set(isser, matcher.matches);

        if (matcher.matches) {
          _this.get("matches").addObject(name);
        } else {
          _this.get("matches").removeObject(name);
        }
      };

      this.get("listeners")[name] = listener;

      if (matcher.addListener) {
        matcher.addListener(function (matcher) {
          Ember['default'].run(null, listener, matcher);
        });
      }

      listener(matcher);
    }

  });

  exports['default'] = MediaQueriesService;

});
define('dummy/services/ripple', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    function rgbToRGBA(color) {
        return color.replace(")", ", 0.1)").replace("(", "a(");
    }

    /**
     * Converts rgba string to rgb, removing the alpha value
     *
     * @param {string} color rgba color
     *
     * @returns {string} rgb color
     */
    function rgbaToRGB(color) {
        return color.replace("rgba", "rgb").replace(/,[^\)\,]+\)/, ")");
    }

    /**
     * Converts a hex value to an rgba string
     *
     * @param {string} color hex value (3 or 6 digits) to be converted
     *
     * @returns {string} rgba color with 0.1 alpha
     */
    function hexToRGBA(color) {
        var hex = color.chartAt(0) === "#" ? color.substr(1) : color,
            dig = hex.length / 3,
            red = hex.substr(0, dig),
            grn = hex.substr(dig, dig),
            blu = hex.substr(dig * 2);

        if (dig === 1) {
            red += red;
            grn += grn;
            blu += blu;
        }

        return "rgba(" + parseInt(red, 16) + "," + parseInt(grn, 16) + "," + parseInt(blu, 16) + ",0.1)";
    }

    /**
     * Converts any color string to an rgba string
     *
     * @param {string} color color string to parse
     *
     * @returns {string} rgba color with 0.1 alpha
     */
    function parseColor(color) {
        if (!color) {
            return;
        }
        if (color.indexOf("rgba") === 0) {
            return color.replace(/\d?\.?\d*\s*\)\s*$/, "0.1)");
        }
        if (color.indexOf("rgb") === 0) {
            return rgbToRGBA(color);
        }
        if (color.indexOf("#") === 0) {
            return hexToRGBA(color);
        }
    }

    var RippleService = Ember['default'].Service.extend({

        constants: Ember['default'].inject.service("constants"),

        attachButtonBehavior: function attachButtonBehavior(element, options) {
            return this.attach(element, $.extend({
                fullRipple: true,
                isMenuItem: element.hasClass("md-menu-item"),
                center: false,
                dimBackground: true
            }, options));
        },

        attachCheckboxBehavior: function attachCheckboxBehavior(element, options) {
            return this.attach(element, Ember['default'].merge({
                center: true,
                dimBackground: false,
                fitRipple: true
            }, options));
        },

        attachTabBehavior: function attachTabBehavior(element, options) {
            return this.attach(element, Ember['default'].merge({
                center: false,
                dimBackground: true,
                outline: false,
                rippleSize: "full"
            }, options));
        },

        attach: function attach(element, options) {

            // check if element has md-no-ink attribute
            if (element[0].hasAttribute("mdNoInk")) {
                return Ember['default'].K;
            }

            options = Ember['default'].merge({
                colorElement: element,
                mousedown: true,
                hover: true,
                touch: true,
                center: false,
                mousedownPauseTime: 150,
                dimBackground: false,
                outline: false,
                fullRipple: true,
                isMenuItem: false,
                fitRipple: false

            }, options);

            var rippleSize,
                counter = 0,
                ripples = [],
                states = [],
                isActiveExpr = element.attr("md-highlight"),
                isActive = false,
                isHeld = false,
                node = element[0],
                rippleSizeSetting = element.attr("md-ripple-size"),
                color = parseColor(element.attr("md-ink-ripple")) || parseColor(options.colorElement.length && window.getComputedStyle(options.colorElement[0]).color || "rgb(0, 0, 0)");

            switch (rippleSizeSetting) {
                case "full":
                    options.fullRipple = true;
                    break;
                case "partial":
                    options.fullRipple = false;
                    break;
            }

            if (options.mousedown) {
                element.on(this.get("constants.START_EVENTS"), onPressDown).on(this.get("constants.END_EVENTS"), onPressUp);
            }

            function getRippleContainer() {
                var container = element.data("$mdRippleContainer");

                if (container) {
                    return container;
                }

                container = $("<div class=\"md-ripple-container\">");
                element.append(container);
                element.data("$mdRippleContainer", container);
                return container;
            }

            function removeElement(elem, wait) {
                ripples.splice(ripples.indexOf(elem), 1);
                if (ripples.length === 0) {
                    getRippleContainer().css({ backgroundColor: "" });
                }

                Ember['default'].run.later(this, function () {
                    elem.remove();
                }, wait);
            }

            function updateElement(elem) {
                var index = ripples.indexOf(elem),
                    state = states[index] || {},
                    elemIsActive = ripples.length > 1 ? false : isActive,
                    elemIsHeld = ripples.length > 1 ? false : isHeld;

                if (elemIsActive || state.animating || elemIsHeld) {
                    elem.addClass("md-ripple-visible");
                } else if (elem) {
                    elem.removeClass("md-ripple-visible");

                    if (options.outline) {
                        elem.css({
                            width: rippleSize + "px",
                            height: rippleSize + "px",
                            marginLeft: rippleSize * -1 + "px",
                            marginTop: rippleSize * -1 + "px"
                        });
                    }

                    removeElement(elem, options.outline ? 450 : 650);
                }
            }

            /**
             * Creates a ripple at the provided coordinates
             *
             * @param {number} left left cursor position
             * @param {number} top top cursor position
             *
             * @returns {*|jQuery|HTMLElement} the generated ripple element
             */
            function createRipple(left, top) {
                var _this = this;

                color = parseColor(element.attr("md-ink-ripple")) || parseColor(window.getComputedStyle(options.colorElement[0]).color || "rgb(0, 0, 0)");

                var container = getRippleContainer(),
                    size = getRippleSize(left, top),
                    css = getRippleCss(size, left, top),
                    elem = getRippleElement(css),
                    index = ripples.indexOf(elem),
                    state = states[index] || {};

                rippleSize = size;

                state.animating = true;

                Ember['default'].run.schedule("render", this, function () {
                    if (options.dimBackground) {
                        container.css({ backgroundColor: color });
                    }

                    elem.addClass("md-ripple-placed md-ripple-scaled");
                    if (options.outline) {
                        elem.css({
                            borderWidth: size * 0.5 + "px",
                            marginLeft: size * -0.5 + "px",
                            marginTop: size * -0.5 + "px"
                        });
                    } else {
                        elem.css({ left: "50%", top: "50% " });
                    }

                    updateElement(elem);

                    Ember['default'].run.later(_this, function () {
                        state.animating = false;
                        updateElement(elem);
                    }, options.outline ? 450 : 225);
                });

                return elem;

                /**
                 * Creates the ripple element with the provided css
                 *
                 * @param {object} css properties to be applied
                 *
                 * @returns {*|jQuery|HTMLElement} the generated ripple element
                 */
                function getRippleElement(css) {
                    var elem = $("<div class=\"md-ripple\" data-counter=\"" + counter++ + "\">");
                    ripples.unshift(elem);
                    states.unshift({ animating: true });
                    container.append(elem);
                    css && elem.css(css);
                    return elem;
                }

                /**
                 * Calculate the ripple size
                 * @param left
                 * @param top
                 * @returns {number} calculated ripple diameter
                 */
                function getRippleSize(left, top) {
                    var width = container.prop("offsetWidth"),
                        height = container.prop("offsetHeight"),
                        multiplier,
                        size,
                        rect;

                    if (options.isMenuItem) {
                        size = Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2));
                    } else if (options.outline) {
                        rect = node.getBoundingClientRect();
                        left -= rect.left;
                        top -= rect.top;
                        width = Math.max(left, width - left);
                        height = Math.max(top, height - top);
                        size = 2 * Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2));
                    } else {
                        multiplier = options.fullRipple ? 1.1 : 0.8;
                        size = Math.sqrt(Math.pow(width, 2) + Math.pow(height, 2)) * multiplier;
                        if (options.fitRipple) {
                            size = Math.min(height, width, size);
                        }
                    }

                    return size;
                }

                /**
                 * Generates the ripple css
                 *
                 * @param {number} size the diameter of the ripple
                 * @param {number} left the left cursor offset
                 * @param {number} top the top cursor offset
                 *
                 * @returns {{backgroundColor: string, borderColor: string, width: string, height: string}}
                 */
                function getRippleCss(size, left, top) {
                    var rect = node.getBoundingClientRect(),
                        css = {
                        backgroundColor: rgbaToRGB(color),
                        borderColor: rgbaToRGB(color),
                        width: size + "px",
                        height: size + "px"
                    };

                    if (options.outline) {
                        css.width = 0;
                        css.height = 0;
                    } else {
                        css.marginLeft = css.marginTop = size * -0.5 + "px";
                    }

                    if (options.center) {
                        css.left = css.top = "50%";
                    } else {
                        css.left = Math.round((left - rect.left) / container.prop("offsetWidth") * 100) + "%";
                        css.top = Math.round((top - rect.top) / container.prop("offsetHeight") * 100) + "%";
                    }

                    return css;
                }
            }

            function onPressDown(ev) {

                if (!isRippleAllowed()) {
                    return;
                }

                var x = ev.clientX || ev.originalEvent.touches[0].clientX,
                    y = ev.clientY || ev.originalEvent.touches[0].clientY;

                var ripple = createRipple(x, y);
                isHeld = true;
            }

            function isRippleAllowed() {
                var parent = node.parentNode;
                var grandparent = parent && parent.parentNode;
                var ancestor = grandparent && grandparent.parentNode;
                return !isDisabled(node) && !isDisabled(parent) && !isDisabled(grandparent) && !isDisabled(ancestor);

                function isDisabled(elem) {
                    return elem && elem.hasAttribute && elem.hasAttribute("disabled");
                }
            }

            function onPressUp(ev) {
                isHeld = false;
                var ripple = ripples[ripples.length - 1];

                updateElement(ripple);
            }
        }

    });

    exports['default'] = RippleService;

});
define('dummy/services/sniffer', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    var isString = function (value) {
        return typeof value === "string";
    };

    var lowercase = function (string) {
        return isString(string) ? string.toLowerCase() : string;
    };

    function toInt(str) {
        return parseInt(str, 10);
    }

    var SnifferService = Ember['default'].Service.extend({
        vendorPrefix: "",
        transitions: false,
        animations: false,
        document: document,
        window: window,

        android: Ember['default'].computed("", function () {
            return toInt((/android (\d+)/.exec(lowercase((this.get("window").navigator || {}).userAgent)) || [])[1]);
        }),

        init: function init() {
            this._super();

            var bodyStyle = this.get("document").body && this.get("document").body.style;
            var vendorPrefix;
            var vendorRegex = /^(Moz|webkit|ms)(?=[A-Z])/;

            var transitions = false;
            var animations = false;
            var match;

            if (bodyStyle) {
                for (var prop in bodyStyle) {
                    if (match = vendorRegex.exec(prop)) {
                        vendorPrefix = match[0];
                        vendorPrefix = vendorPrefix.substr(0, 1).toUpperCase() + vendorPrefix.substr(1);
                        break;
                    }
                }

                if (!vendorPrefix) {
                    vendorPrefix = "WebkitOpacity" in bodyStyle && "webkit";
                }

                transitions = !!("transition" in bodyStyle || vendorPrefix + "Transition" in bodyStyle);
                animations = !!("animation" in bodyStyle || vendorPrefix + "Animation" in bodyStyle);

                if (this.get("android") && (!transitions || !animations)) {
                    transitions = isString(bodyStyle.webkitTransition);
                    animations = isString(bodyStyle.webkitAnimation);
                }
            }

            this.set("transitions", transitions);
            this.set("animations", animations);

            this.set("vendorPrefix", vendorPrefix);
        }

    });

    exports['default'] = SnifferService;

});
define('dummy/services/utility', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    function getNode(el) {
        return el[0] || el;
    }

    var UtilityService = Ember['default'].Service.extend({

        clientRect: function clientRect(element, offsetParent, isOffsetRect) {
            var node = getNode(element);
            offsetParent = getNode(offsetParent || node.offsetParent || document.body);
            var nodeRect = node.getBoundingClientRect();

            var offsetRect = isOffsetRect ? offsetParent.getBoundingClientRect() : { left: 0, top: 0, width: 0, height: 0 };

            return {
                left: nodeRect.left - offsetRect.left,
                top: nodeRect.top - offsetRect.top,
                width: nodeRect.width,
                height: nodeRect.height
            };
        },

        offsetRect: function offsetRect(element, offsetParent) {
            return this.clientRect(element, offsetParent, true);
        }

    });

    exports['default'] = UtilityService;

});
define('dummy/snippets', ['exports'], function (exports) {

  'use strict';

  exports['default'] = {
    "buttons-controller.js": "import Ember from 'ember';\n\nexport default Ember.Controller.extend({\n    // No content\n});\n",
    "buttons.hbs": "<md-content>\n\n    <section layout=\"row\" layout-sm=\"column\" layout-align=\"center center\">\n        {{#md-button}}Button{{/md-button}}\n        {{#md-button mdNoInk=\"true\" classNames=\"md-primary\"}}Primary (md-noink){{/md-button}}\n        {{#md-button disabled=\"true\" classNames=\"md-primary\"}}Disabled{{/md-button}}\n        {{#md-button class=\"md-warn\"}}Warn{{/md-button}}\n    </section>\n\n    <section layout=\"row\" layout-sm=\"column\" layout-align=\"center center\">\n        {{#md-button class=\"md-raised\"}}Button{{/md-button}}\n        {{#md-button class=\"md-raised md-primary\"}}Primary{{/md-button}}\n        {{#md-button disabled=\"true\" class=\"md-raised md-primary\"}}Disabled{{/md-button}}\n        {{#md-button class=\"md-raised md-warn\"}}Warn{{/md-button}}\n        <div class=\"label\">raised</div>\n    </section>\n\n    <section layout=\"row\" layout-sm=\"column\" layout-align=\"center center\">\n        {{#md-button class=\"md-fab\" aria-label=\"Eat cake\"}}\n            {{md-icon md-svg-src=\"images/icons/cake.svg\"}}\n        {{/md-button}}\n\n        {{#md-button class=\"md-fab md-primary\" aria-label=\"Use Android\"}}\n            {{md-icon md-svg-src=\"images/icons/android.svg\"}}\n        {{/md-button}}\n\n        {{#md-button class=\"md-fab\" disabled=\"true\" aria-label=\"Comment\"}}\n            {{md-icon md-svg-src=\"images/icons/ic_comment_24px.svg\"}}\n        {{/md-button}}\n\n        {{#md-button class=\"md-fab md-primary md-hue-2\" aria-label=\"Profile\"}}\n            {{md-icon md-svg-src=\"images/icons/ic_people_24px.svg\"}}\n        {{/md-button}}\n\n        {{#md-button class=\"md-fab md-mini\" aria-label=\"Eat cake\"}}\n            {{md-icon md-svg-src=\"images/icons/cake.svg\"}}\n        {{/md-button}}\n\n        {{#md-button class=\"md-fab md-mini md-primary\" aria-label=\"Use Android\"}}\n            {{md-icon md-svg-src=\"images/icons/android.svg\" style=\"color: greenyellow;\"}}\n        {{/md-button}}\n\n        <div class=\"label\">FAB</div>\n    </section>\n\n    <section layout=\"row\" layout-sm=\"column\" layout-align=\"center center\">\n        {{#md-button tagName=\"a\" href=\"http://www.emberjs.com\" target=\"_blank\"}}Default\n                                                                                Link{{/md-button}}\n        {{#md-button tagName=\"a\" class=\"md-primary\" href=\"http://www.emberjs.com\" target=\"_blank\"}}\n                                                                                Primary\n                                                                                Link{{/md-button}}\n\n        {{#md-button}}Default Button{{/md-button}}\n        <div class=\"label\">Link vs. Button</div>\n    </section>\n\n    <section layout=\"row\" layout-sm=\"column\" layout-align=\"center center\">\n        {{#md-button class=\"md-primary md-hue-1\"}}Primary Hue 1{{/md-button}}\n        {{#md-button class=\"md-warn md-raised md-hue-2\"}}Warn Hue 2{{/md-button}}\n        {{#md-button class=\"md-accent\"}}Accent{{/md-button}}\n        {{#md-button class=\"md-accent md-raised md-hue-1\"}}Accent Hue 1{{/md-button}}\n        <div class=\"label\">Themed</div>\n    </section>\n\n    <section layout=\"row\" layout-sm=\"column\" layout-align=\"center center\">\n        {{#md-button class=\"md-icon-button md-primary\"}}\n            {{md-icon md-svg-icon=\"images/icons/menu.svg\"}}\n        {{/md-button}}\n        {{#md-button class=\"md-icon-button md-accent\"}}\n            {{md-icon md-svg-icon=\"images/icons/favorite.svg\" style=\"color: greenyellow;\"}}\n        {{/md-button}}\n        {{#md-button class=\"md-icon-button\"}}\n            {{md-icon md-svg-icon=\"images/icons/more_vert.svg\"}}\n        {{/md-button}}\n\n\n        <div class=\"label\">Icon Button</div>\n    </section>\n\n</md-content>",
    "card.hbs": "<md-content>\n\n    <md-card>\n        <img src=\"images/washedout.png\" alt=\"Washed Out\">\n        <md-card-content>\n            <h2 class=\"md-title\">Paracosm</h2>\n\n            <p>\n                The titles of Washed Out's breakthrough song and the first single from Paracosm\n                share the\n                two most important words in Ernest Greene's musical language: feel it. It's a\n                simple request, as well...\n            </p>\n        </md-card-content>\n    </md-card>\n\n    <md-card>\n        <img src=\"images/washedout.png\" alt=\"Washed Out\">\n        <md-card-content>\n            <h2 class=\"md-title\">Paracosm</h2>\n\n            <p>\n                The titles of Washed Out's breakthrough song and the first single from Paracosm\n                share the\n                two most important words in Ernest Greene's musical language: feel it. It's a\n                simple request, as well...\n            </p>\n        </md-card-content>\n    </md-card>\n\n    <md-card>\n        <img src=\"images/washedout.png\" alt=\"Washed Out\">\n        <md-card-content>\n            <h2 class=\"md-title\">Paracosm</h2>\n\n            <p>\n                The titles of Washed Out's breakthrough song and the first single from Paracosm\n                share the\n                two most important words in Ernest Greene's musical language: feel it. It's a\n                simple request, as well...\n            </p>\n        </md-card-content>\n    </md-card>\n\n\n</md-content>",
    "checkbox-controller.js": "import Ember from 'ember';\nimport BaseDemoController from '../controllers/base-demo-controller';\n\nexport default BaseDemoController.extend({\n\n    demoName: 'checkbox',\n\n    data: {\n        cb1: true,\n        cb2: false,\n        cb3: false,\n        cb4: true,\n        cb5: false\n    }\n});\n",
    "content.hbs": "<div class=\"display-content\" layout=\"column\" style=\"padding-bottom: 15px;\">\n    {{#md-toolbar class=\"md-warn\"}}\n        <div class=\"md-toolbar-tools\">\n            <h2 class=\"md-flex\">Toolbar: md-warn</h2>\n        </div>\n    {{/md-toolbar}}\n\n    <md-content class=\"md-padding\" style=\"height: 600px;padding: 24px;\">\n        <p>Lorem ipsum dolor sit amet, ne quod novum mei. Sea omnium invenire mediocrem at, in\n           lobortis conclusionemque nam. Ne deleniti appetere reprimique pro, inani labitur\n           disputationi te sed. At vix sale omnesque, id pro labitur reformidans accommodare, cum\n           labores honestatis eu. Nec quem lucilius in, eam praesent reformidans no. Sed laudem\n           aliquam ne.</p>\n\n\n        <p>\n            Facete delenit argumentum cum at. Pro rebum nostrum contentiones ad. Mel exerci tritani\n            maiorum at, mea te audire phaedrum, mel et nibh aliquam. Malis causae equidem vel eu.\n            Noster melius vis ea, duis alterum oporteat ea sea. Per cu vide munere fierent.\n        </p>\n\n        <p>\n            Ad sea dolor accusata consequuntur. Sit facete convenire reprehendunt et. Usu cu nonumy\n            dissentiet, mei choro omnes fuisset ad. Te qui docendi accusam efficiantur, doming\n            noster prodesset eam ei. In vel posse movet, ut convenire referrentur eum, ceteros\n            singulis intellegam eu sit.\n        </p>\n\n        <p>\n            Sit saepe quaestio reprimique id, duo no congue nominati, cum id nobis facilisi. No est\n            laoreet dissentias, idque consectetuer eam id. Clita possim assueverit cu his, solum\n            virtute recteque et cum. Vel cu luptatum signiferumque, mel eu brute nostro senserit.\n            Blandit euripidis consequat ex mei, atqui torquatos id cum, meliore luptatum ut usu. Cu\n            zril perpetua gubergren pri. Accusamus rationibus instructior ei pro, eu nullam\n            principes qui, reque justo omnes et quo.\n        </p>\n\n        <p>\n            Sint unum eam id. At sit fastidii theophrastus, mutat senserit repudiare et has. Atqui\n            appareat repudiare ad nam, et ius alii incorrupte. Alii nullam libris his ei, meis\n            aeterno at eum. Ne aeque tincidunt duo. In audire malorum mel, tamquam efficiantur has\n            te.\n        </p>\n\n        <p>\n            Qui utamur tacimates quaestio ad, quod graece omnium ius ut. Pri ut vero debitis\n            interpretaris, qui cu mentitum adipiscing disputationi. Voluptatum mediocritatem quo ut.\n            Fabulas dolorem ei has, quem molestie persequeris et sit.\n        </p>\n\n        <p>\n            Est in vivendum comprehensam conclusionemque, alia cetero iriure no usu, te cibo\n            deterruisset pro. Ludus epicurei quo id, ex cum iudicabit intellegebat. Ex modo\n            deseruisse quo, mel noster menandri sententiae ea, duo et tritani malorum recteque.\n            Nullam suscipit partiendo nec id, indoctum vulputate per ex. Et has enim habemus\n            tibique. Cu latine electram cum, ridens propriae intellegat eu mea.\n        </p>\n\n        <p>\n            Duo at aliquid mnesarchum, nec ne impetus hendrerit. Ius id aeterno debitis atomorum, et\n            sed feugait voluptua, brute tibique no vix. Eos modo esse ex, ei omittam imperdiet pro.\n            Vel assum albucius incorrupte no. Vim viris prompta repudiare ne, vel ut viderer\n            scripserit, dicant appetere argumentum mel ea. Eripuit feugait tincidunt pri ne, cu\n            facilisi molestiae usu.\n        </p>\n\n        <p>\n            Qui utamur tacimates quaestio ad, quod graece omnium ius ut. Pri ut vero debitis\n            interpretaris, qui cu mentitum adipiscing disputationi. Voluptatum mediocritatem quo ut.\n            Fabulas dolorem ei has, quem molestie persequeris et sit.\n        </p>\n\n        <p>\n            Est in vivendum comprehensam conclusionemque, alia cetero iriure no usu, te cibo\n            deterruisset pro. Ludus epicurei quo id, ex cum iudicabit intellegebat. Ex modo\n            deseruisse quo, mel noster menandri sententiae ea, duo et tritani malorum recteque.\n            Nullam suscipit partiendo nec id, indoctum vulputate per ex. Et has enim habemus\n            tibique. Cu latine electram cum, ridens propriae intellegat eu mea.\n        </p>\n\n        <p>\n            Duo at aliquid mnesarchum, nec ne impetus hendrerit. Ius id aeterno debitis atomorum, et\n            sed feugait voluptua, brute tibique no vix. Eos modo esse ex, ei omittam imperdiet pro.\n            Vel assum albucius incorrupte no. Vim viris prompta repudiare ne, vel ut viderer\n            scripserit, dicant appetere argumentum mel ea. Eripuit feugait tincidunt pri ne, cu\n            facilisi molestiae usu.\n        </p>\n\n    </md-content>\n</div>",
    "divider-controller.js": "import Ember from 'ember';\nimport BaseDemoController from '../controllers/base-demo-controller';\n\nexport default BaseDemoController.extend({\n  demoName: 'divider',\n  messages: Ember.A([{\n    face : 'http://lorempixel.com/50/50/people',\n    what: 'Brunch this weekend?',\n    who: 'Min Li Chan',\n    when: '3:08PM',\n    notes: \" I'll be in your neighborhood doing errands\"\n  }, {\n    face : 'http://lorempixel.com/50/50/people',\n    what: 'Brunch this weekend?',\n    who: 'Min Li Chan',\n    when: '3:08PM',\n    notes: \" I'll be in your neighborhood doing errands\"\n  }, {\n    face : 'http://lorempixel.com/50/50/people',\n    what: 'Brunch this weekend?',\n    who: 'Min Li Chan',\n    when: '3:08PM',\n    notes: \" I'll be in your neighborhood doing errands\"\n  }, {\n    face : 'http://lorempixel.com/50/50/people',\n    what: 'Brunch this weekend?',\n    who: 'Min Li Chan',\n    when: '3:08PM',\n    notes: \" I'll be in your neighborhood doing errands\"\n  }, {\n    face : 'http://lorempixel.com/50/50/people',\n    what: 'Brunch this weekend?',\n    who: 'Min Li Chan',\n    when: '3:08PM',\n    notes: \" I'll be in your neighborhood doing errands\"\n  }])\n});\n",
    "divider.hbs": "<div class=\"display-content\">\n  {{#md-toolbar class=\"md-theme-light\"}}\n      <h2 class=\"md-toolbar-tools\">\n          <span>Full Bleed</span>\n      </h2>\n  {{/md-toolbar}}\n\n    <md-content>\n      {{#md-list}}\n        {{#each item in messages}}\n          {{#md-list-item class=\"md-3-line\"}}\n              <div class=\"md-list-item-text\">\n                  <h3>{{item.what}}</h3>\n                  <h4>{{item.who}}</h4>\n\n                  <p>\n                    {{item.notes}}\n                  </p>\n              </div>\n              <md-divider></md-divider>\n          {{/md-list-item}}\n        {{/each}}\n      {{/md-list}}\n    </md-content>\n\n  {{#md-toolbar class=\"md-theme-light\"}}\n      <h2 class=\"md-toolbar-tools\">\n          <span>Inset</span>\n      </h2>\n  {{/md-toolbar}}\n\n    <md-content>\n      {{#md-list}}\n        {{#each item in messages}}\n          {{#md-list-item class=\"md-3-line\"}}\n              <img src=\"{{item.face}}\" alt=\"{{item.who}}\" class=\"face\">\n              <div class=\"md-list-item-text\">\n                  <h3>{{item.what}}</h3>\n                  <h4>{{item.who}}</h4>\n\n                  <p>\n                    {{item.notes}}\n                  </p>\n              </div>\n              <md-divider md-inset></md-divider>\n          {{/md-list-item}}\n        {{/each}}\n      {{/md-list}}\n    </md-content>\n</div>",
    "icon-controller.js": "import Ember from 'ember';\n\nexport default Ember.Controller.extend({\n\n  iconData: [\n    {name: 'icon-home'        , color: \"#777\" },\n    {name: 'icon-user-plus'   , color: \"rgb(89, 226, 168)\" },\n    {name: 'icon-google-plus2', color: \"#A00\" },\n    {name: 'icon-youtube4'    , color:\"#00A\" },\n    // Use theming to color the font-icon\n    {name: 'icon-settings'    , color:\"#A00\", theme:\"md-warn md-hue-5\"}\n  ],\n\n  sizes: [\n    {size:12,padding:0, previewScaleStyle: 'padding-left: 0px', sizeStyle: 'font-size: 12px; height: 12px;'},\n    {size:21,padding:2, previewScaleStyle: 'padding-left: 2px', sizeStyle: 'font-size: 21px; height: 21px;'},\n    {size:36,padding:6, previewScaleStyle: 'padding-left: 6px', sizeStyle: 'font-size: 36px; height: 36px;'},\n    {size:48,padding:10, previewScaleStyle: 'padding-left: 10px', sizeStyle: 'font-size: 48px; height: 48px;'}\n  ],\n\n  icons: Ember.computed('iconData', function() {\n    var self = this;\n\n    var iconData = this.get('iconData');\n\n    iconData.forEach(function(i) {\n      i.sizes = Ember.A(Ember.copy(self.sizes, true));\n\n      i.sizes.forEach(function(size) {\n        var color = !i.theme && i.color;\n        size.sizeStyle = size.sizeStyle + ' color: ' + color + '; ';\n      });\n    });\n\n    return Ember.A(this.get('iconData'));\n\n  }),\n\n  insertDriveIconURL: 'images/icons/ic_insert_drive_file_24px.svg',\n\n  getAndroid: Ember.computed('', function() {\n    return 'images/icons/android.svg';\n  })\n\n});\n",
    "icon-fontIcons.hbs": "<div layout=\"column\" layout-margin style=\"padding:25px;\">\n\n    <p>\n        Display 5 font-icons, each with different sizes and colors:\n    </p>\n\n    <!-- Display font icons from Icomoon.io: -->\n\n    {{#each font in icons}}\n        <div layout=\"row\" layout-padding layout-margin class=\"glyph\">\n\n            {{#each it in font.sizes}}\n                <div flex layout-align=\"center center\">\n                    <div class=\"preview-glyphs\">\n                        {{md-icon\n                        mdFontIcon=font.name\n                        class=font.theme\n                        style=it.sizeStyle\n                        classNames=\"step \"}}\n                    </div>\n\n                    <div class=\"preview-scale\">\n                        <span class=\"step\" {{bind-attr style=it.paddingScaleStyle}}>{{it.size}}</span>\n                    </div>\n                </div>\n            {{/each}}\n\n\n        </div>\n    {{/each}}\n\n</div>",
    "icon-fromSet.hbs": "<div layout=\"column\" layout-margin>\n\n    <p>Display an icon from a pre-registered set of icons:</p>\n\n    <p>\n        {{md-icon md-svg-icon=\"alarm\" style=\"color: #0F0;\" alt=\"Alarm Icon\"}}\n        {{md-icon md-svg-icon=\"social:cake\" style=\"color: #f00;width:60px;height:60px;\" alt=\"Cake Icon\"}}\n        {{md-icon md-svg-icon=\"social:people\" style=\"color: #00F;\" class=\"s48\" alt=\"People Icon\"}}\n    </p>\n\n</div>",
    "icon-fromUrl.hbs": "<div layout=\"column\" layout-margin style=\"padding:25px;\">\n\n    <p>The simplest way to display a single SVG icon is by referencing it by URL:</p>\n\n    <p>\n        {{md-icon md-svg-src=insertDriveIconURL\n        alt=\"Insert Drive Icon\"}}\n    </p>\n\n    <p>Style the icon size and color with CSS:</p>\n\n    <p>\n        {{md-icon md-svg-src=\"images/icons/cake.svg\" class=\"s24\" alt=\"Cake\"}}\n        {{md-icon md-svg-src=getAndroid class=\"s36\" alt=\"Android \"}}\n        {{md-icon md-svg-src=\"images/icons/addShoppingCart.svg\" class=\"s48\" alt=\"Cart\"}}\n    </p>\n\n</div>",
    "input-Icons.hbs": "<md-content class=\"md-padding\">\n    {{#md-input-container md-no-float='' value=user2.name}}\n        {{md-icon md-svg-src=\"icons/ic_person_24px.svg\" class=\"name\"}}\n        {{md-input type=\"text\" placeholder=\"Name\"}}\n    {{/md-input-container}}\n    {{#md-input-container md-no-float='' value=user2.phon}}\n        {{md-icon md-svg-src=\"icons/ic_phone_24px.svg\"}}\n        {{md-input type=\"text\" placeholder=\"Phone Number\"}}\n    {{/md-input-container}}\n    {{#md-input-container md-no-float=''}}\n        {{md-icon md-svg-src=\"icons/ic_email_24px.svg\" class=\"email\"}}\n        {{md-input type=\"email\" placeholder=\"Email (required)\" required=\"required\"}}\n    {{/md-input-container}}\n    {{#md-input-container md-no-float=''}}\n        {{md-icon md-svg-src=\"icons/ic_place_24px.svg\"}}\n        {{md-input type=\"text\" placeholder=\"Address\"}}\n    {{/md-input-container}}\n</md-content>",
    "input-controller.js": "import Ember from 'ember';\n\nexport default Ember.Controller.extend({\n    user: {\n        title: 'Developer',\n        email: 'ipsum@lorem.com',\n        firstName: '',\n        lastName: '' ,\n        company: 'Google' ,\n        address: '1600 Amphitheatre Pkwy' ,\n        city: 'Mountain View' ,\n        state: 'CA' ,\n        biography: 'Loves kittens, snowboarding, and can type at 130 WPM.\\n\\nAnd rumor has it she bouldered up Castle Craig!',\n        postalCode : '94043',\n        submissionDate: null\n    },\n\n    user2: {\n        name: 'John Doe',\n        email: '',\n        phone: '',\n        address: 'Mountain View, CA'\n    }\n});\n",
    "input.hbs": "<md-content class=\"md-padding\" layout=\"row\" layout-sm=\"column\">\n    {{#md-input-container value=user.title}}\n        <label>Title</label>\n        {{md-input }}\n    {{/md-input-container}}\n    {{#md-input-container value=user.email}}\n        <label>Email</label>\n        {{md-input type=\"email\"}}\n    {{/md-input-container}}\n</md-content>\n\n<md-content class=\"md-padding\">\n    <form name=\"userForm\">\n\n        <div layout layout-sm=\"column\">\n            {{#md-input-container style=\"width:80%\" value=user.company}}\n                <label>Company (Disabled)</label>\n                {{md-input disabled=true}}\n            {{/md-input-container}}\n\n\n            {{#md-input-container flex='' value=user.submissionDate}}\n                <label>Submission Date</label>\n                {{md-input type=\"date\"}}\n            {{/md-input-container}}\n        </div>\n\n\n        <div layout layout-sm=\"column\">\n            {{#md-input-container flex='' value=user.firstName }}\n                <label>First Name</label>\n                {{md-input placeholder=\"Placeholder text\"}}\n            {{/md-input-container}}\n            {{#md-input-container flex='' value=theMax}}\n                <label>Last Name</label>\n                {{md-input }}\n            {{/md-input-container}}\n        </div>\n\n        {{#md-input-container flex='' value=user.address}}\n            <label>Address</label>\n            {{md-input}}\n        {{/md-input-container}}\n\n        <div layout layout-sm=\"column\">\n            {{#md-input-container flex='' value=user.city}}\n                <label>City</label>\n                {{md-input}}\n            {{/md-input-container}}\n            {{#md-input-container flex='' value=user.state}}\n                <label>State</label>\n                {{md-input}}\n            {{/md-input-container}}\n            {{#md-input-container flex='' value=user.postalCode}}\n                <label>Postal Code</label>\n                {{md-input }}\n            {{/md-input-container}}\n        </div>\n\n        {{#md-input-container flex='' value=user.biography}}\n            <label>Biography</label>\n            {{md-textarea columns=\"1\" md-maxlength=\"150\"}}\n        {{/md-input-container}}\n\n    </form>\n</md-content>",
    "list-controller.js": "import Ember from 'ember';\n\nexport default Ember.Controller.extend({\n    todos: Ember.A([\n        {\n            face : 'http://lorempixel.com/50/50/people',\n            what: 'Brunch this weekend?',\n            who: 'Min Li Chan',\n            when: '3:08PM',\n            notes: \" I'll be in your neighborhood doing errands\"\n        },\n        {\n            face : 'http://lorempixel.com/50/50/people',\n            what: 'Brunch this weekend?',\n            who: 'Min Li Chan',\n            when: '3:08PM',\n            notes: \" I'll be in your neighborhood doing errands\"\n        },\n        {\n            face : 'http://lorempixel.com/50/50/people',\n            what: 'Brunch this weekend?',\n            who: 'Min Li Chan',\n            when: '3:08PM',\n            notes: \" I'll be in your neighborhood doing errands\"\n        },\n        {\n            face : 'http://lorempixel.com/50/50/people',\n            what: 'Brunch this weekend?',\n            who: 'Min Li Chan',\n            when: '3:08PM',\n            notes: \" I'll be in your neighborhood doing errands\"\n        },\n        {\n            face : 'http://lorempixel.com/50/50/people',\n            what: 'Brunch this weekend?',\n            who: 'Min Li Chan',\n            when: '3:08PM',\n            notes: \" I'll be in your neighborhood doing errands\"\n        }\n    ]),\n\n    firstTodo: Ember.computed('', function() {\n        return this.get('todos')[0];\n    })\n});\n",
    "list.hbs": "<md-content>\n\n    {{#md-list}}\n\n        {{#each todos as |item index|}}\n            {{#md-list-item class=\"md-3-line\"}}\n                <img class=\"md-avatar\" src=\"{{item.face}}?{{index}}\" alt=\"{{item.who}}\">\n                <div class=\"md-list-item-text\">\n                    <h3>{{item.who}}</h3>\n                    <h4>{{item.what}}</h4>\n                    <p>{{item.notes}}</p>\n                </div>\n            {{/md-list-item}}\n        {{/each}}\n\n        {{#md-list-item class=\"md-2-line\"}}\n            <img class=\"md-avatar\" src=\"{{firstTodo.face}}?20\" alt=\"{{firstTodo.who}}\"/>\n            <div class=\"md-list-item-text\">\n                <h3>{{firstTodo.who}}</h3>\n                <p>Secondary Text</p>\n            </div>\n        {{/md-list-item}}\n\n        {{#md-list-item class=\"md-3-line\"}}\n            <img class=\"md-avatar\" src=\"{{firstTodo.face}}?25\" alt=\"{{firstTodo.who}}\"/>\n            <div class=\"md-list-item-text\">\n                <h3>{{firstTodo.who}}</h3>\n                <p>Secondary line text Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam massa quam.</p>\n            </div>\n        {{/md-list-item}}\n\n    {{/md-list}}\n\n</md-content>",
    "progress-circular-controller.js": "import Ember from 'ember';\n\nexport default Ember.Controller.extend({\n    mode: 'query',\n    determinateValue: 30,\n\n    setupTimer: function() {\n        Ember.run.later(this, function() {\n            this.incrementProperty('determinateValue', 1);\n            if (this.get('determinateValue') > 100) {\n                this.set('determinateValue', 30);\n            }\n\n            Ember.run.later(this, this.setupTimer);\n\n        }, 100);\n    }\n});\n",
    "progress-circular.hbs": "<div layout=\"column\" layout-margin style=\"padding:25px;\">\n\n    <h4 style=\"margin-top:10px\">Determinate</h4>\n    <p>For operations where the percentage of the operation completed can be determined, use a determinate indicator. They give users a quick sense of how long an operation will take.</p>\n    <div layout=\"row\" layout-sm=\"column\" layout-align=\"space-around\">\n        {{md-progress-circular md-mode=\"determinate\" value=determinateValue}}\n    </div>\n\n    <h4>Indeterminate</h4>\n    <p>For operations where the user is asked to wait a moment while something finishes up, and it’s not necessary to expose what's happening behind the scenes and how long it will take, use an indeterminate indicator.</p>\n    <div layout=\"row\" layout-sm=\"column\" layout-align=\"space-around\">\n        {{md-progress-circular md-mode=\"indeterminate\"}}\n    </div>\n\n    <h4>Theming</h4>\n\n    <div layout=\"row\" layout-sm=\"column\" layout-align=\"space-around\">\n        {{md-progress-circular class=\"md-hue-2\" md-mode=\"indeterminate\"}}\n        {{md-progress-circular class=\"md-accent\" md-mode=\"indeterminate\"}}\n        {{md-progress-circular class=\"md-accent md-hue-1\" md-mode=\"indeterminate\"}}\n        {{md-progress-circular class=\"md-warn md-hue-3\" md-mode=\"indeterminate\"}}\n        {{md-progress-circular class=\"md-warn\" md-mode=\"indeterminate\"}}\n    </div>\n\n\n</div>",
    "progress-linear-controller.js": "import Ember from 'ember';\n\nexport default Ember.Controller.extend({\n    mode: 'query',\n    determinateValue: 30,\n    determinateValue2: 30,\n\n    setupTimer: function() {\n        Ember.run.later(this, function() {\n            this.incrementProperty('determinateValue', 1);\n            this.incrementProperty('determinateValue2', 1.5);\n            if (this.get('determinateValue') > 100) {\n                this.set('determinateValue', 30);\n                this.set('determinateValue2', 30);\n            }\n\n            Ember.run.later(this, this.setupTimer);\n\n        }, 100);\n    },\n\n    setupTimer2: function() {\n        Ember.run.later(this, function() {\n            this.set('mode', this.get('mode') == 'query' ? 'determinate' : 'query');\n            Ember.run.later(this, this.setupTimer2);\n        }, 7200);\n    }\n});\n",
    "progress-linear.hbs": "<div layout=\"column\" layout-margin style=\"padding:25px;\">\n\n    {{md-progress-linear md-mode=\"indeterminate\"}}\n\n    {{md-progress-linear class=\"md-warn\" md-mode=\"buffer\" value=determinateValue md-buffer-value=determinateValue2}}\n\n    {{md-progress-linear class=\"md-accent\" md-mode=mode value=determinateValue}}\n\n</div>",
    "radio-button-controller.js": "import Ember from 'ember';\n\nexport default Ember.Controller.extend({\n    data: {\n        group1: 'Banana',\n        group2: 2,\n        group3: 'avatar-1'\n    },\n\n    avatarData: Ember.A([{\n        id: 'avatars:svg-1',\n        title: 'avatar 1',\n        value: 'avatar-1'\n    }, {\n        id: 'avatars:svg-2',\n        title: 'avatar 2',\n        value: 'avatar-2'\n    }, {\n        id: 'avatars:svg-3',\n        title: 'avatar 3',\n        value: 'avatar-3'\n    }]),\n\n    radioData: Ember.ArrayProxy.create({\n        content: Ember.A([\n            {label: '1', value: 1},\n            {label: '2', value: 2},\n            {label: '3', value: '3', isDisabled: true},\n            {label: '4', value: '4'}\n        ])\n    }),\n\n    //radioData: [\n    //    {label: '1', value: 1},\n    //    {label: '2', value: 2},\n    //    {label: '3', value: '3', isDisabled: true},\n    //    {label: '4', value: '4'}\n    //],\n    //\n\n    actions: {\n        submit: function() {\n            alert('submit');\n        },\n\n        addItem: function() {\n            var r = Math.ceil(Math.random() * 1000);\n            this.get('radioData').addObject({label: r, value: r});\n            return false;\n        },\n\n        removeItem: function() {\n            this.get('radioData').popObject();\n            return false;\n        }\n    }\n});\n",
    "radio-button.hbs": "<form>\n    <p>Selected Value: <span class=\"radioValue\">{{ data.group1 }}</span></p>\n\n\n    {{#md-radio-button value=\"Apple\" selected=data.group1 class=\"md-primary\"}}Apple{{/md-radio-button}}\n    {{#md-radio-button value=\"Banana\" selected=data.group1}}Banana{{/md-radio-button}}\n    {{#md-radio-button value=\"Mango\" selected=data.group1}}Mango{{/md-radio-button}}\n\n\n    <hr/>\n\n    <p>Selected Value: <span class=\"radioValue\">{{ data.group2 }}</span></p>\n\n\n    {{#each d in radioData}}\n        {{#md-radio-button value=d.value\n        class=\"md-primary\"\n        selected=data.group2\n        disabled=d.isDisabled}}\n            {{ d.label }}\n        {{/md-radio-button}}\n    {{/each}}\n\n\n\n\n    <p>\n        {{#md-button class=\"md-raised\" action='addItem' type=\"button\"}}Add{{/md-button}}\n        {{#md-button class=\"md-raised\" action='removeItem' type=\"button\"}}Remove{{/md-button}}\n    </p>\n\n    <hr/>\n\n    <p style=\"margin-bottom: 0;\">Graphic radio buttons need to be labeled with the\n        <code>aria-label</code> attribute.</p>\n\n    <p style=\"margin-top: 0;\">Selected Avatar: <span class=\"radioValue\">{{ data.group3 }}</span></p>\n\n    {{#each it in avatarData}}\n        {{#md-radio-button value=it.value\n        selected=data.group3\n        aria-label=it.title}}\n            {{md-icon md-svg-icon=it.id}}\n        {{/md-radio-button}}\n    {{/each}}\n\n</form>",
    "slider-controller.js": "import Ember from 'ember';\n\nexport default Ember.Controller.extend({\n    color: {\n        red: Math.floor(Math.random() * 255),\n        green: Math.floor(Math.random() * 255),\n        blue: Math.floor(Math.random() * 255)\n    },\n\n    colorStyle: Ember.computed('color.red', 'color.green', 'color.blue', function() {\n        return Ember.String.htmlSafe(\"border: 1px solid #333; background: rgb(\" + this.get('color.red') + \",\" + this.get('color.green') + \",\" + this.get('color.blue') + \")\");\n    }),\n\n    rating1: 3,\n    rating2: 2,\n    rating3: 4,\n\n    disabled1: 0,\n    disabled2: 70\n});\n",
    "slider.hbs": "<md-content class=\"md-padding\">\n\n    <h3>\n        RGB <span {{bind-attr style=colorStyle}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>\n    </h3>\n\n    <div layout>\n        <div flex=\"10\" layout layout-align=\"center center\">\n            <span>R</span>\n        </div>\n        {{md-slider flex='' min='0' max='255' value=color.red}}\n        <div flex=\"20\" layout layout-align=\"center center\">\n            {{input type=\"number\" value=color.red}}\n        </div>\n    </div>\n\n    <div layout>\n        <div flex=\"10\" layout layout-align=\"center center\">\n            <span>G</span>\n        </div>\n        {{md-slider flex='' min='0' max='255' value=color.green classNames='md-accent'}}\n        <div flex=\"20\" layout layout-align=\"center center\">\n            {{input type=\"number\" value=color.green}}\n        </div>\n    </div>\n\n    <div layout>\n        <div flex=\"10\" layout layout-align=\"center center\">\n            <span>B</span>\n        </div>\n        {{md-slider flex='' min='0' max='255' value=color.blue classNames='md-primary'}}\n        <div flex=\"20\" layout layout-align=\"center center\">\n            {{input type=\"number\" value=color.blue}}\n        </div>\n    </div>\n\n    <h3>Rating: {{rating}}/5 - demo of theming classes</h3>\n    <div layout>\n        <div flex=\"10\" layout layout-align=\"center center\">\n            <span>default</span>\n        </div>\n        {{md-slider flex='' md-discrete='' value=rating1 step='1' min='1' max='5'}}\n    </div>\n    <div layout>\n        <div flex=\"10\" layout layout-align=\"center center\">\n            <span>md-warn</span>\n        </div>\n        {{md-slider flex='' classNames=\"md-warn\" md-discrete='' value=rating2 step=\"1\" min=\"1\" max=\"5\"}}\n    </div>\n    <div layout>\n        <div flex=\"10\" layout layout-align=\"center center\">\n            <span>md-primary</span>\n        </div>\n        {{md-slider flex='' classNames=\"md-primary\" md-discrete='' value=rating3 step=\"1\" min=\"1\" max=\"5\"}}\n    </div>\n\n    <h3>Disabled</h3>\n    {{md-slider value=disabled1 disabled=true}}\n    {{md-slider value=disabled2 disabled=true}}\n\n    <h3>Disabled, Discrete</h3>\n    {{md-slider value=disabled1 disabled=true step=\"3\" md-discrete='' min=\"0\" max=\"10\"}}\n    {{md-slider value=disabled2 disabled=true step=\"10\" md-discrete=''}}\n\n\n</md-content>",
    "tabs-controller.js": "import Ember from 'ember';\n\nexport default Ember.Controller.extend({\n\n    tabs: Ember.ArrayProxy.create({\n        content: Ember.A([\n            { title: 'One', content: \"Tabs will become paginated if there isn't enough room for them.\"},\n            { title: 'Two', content: \"You can swipe left and right on a mobile device to change tabs.\"},\n            { title: 'Three', content: \"You can bind the selected tab via the selected attribute on the md-tabs element.\"},\n            { title: 'Four', content: \"If you set the selected tab binding to -1, it will leave no tab selected.\"},\n            { title: 'Five', content: \"If you remove a tab, it will try to select a new one.\"},\n            { title: 'Six', content: \"There's an ink bar that follows the selected tab, you can turn it off if you want.\"},\n            { title: 'Seven', content: \"If you set ng-disabled on a tab, it becomes unselectable. If the currently selected tab becomes disabled, it will try to select the next tab.\"},\n            { title: 'Eight', content: \"If you look at the source, you're using tabs to look at a demo for tabs. Recursion!\"},\n            { title: 'Nine', content: \"If you set md-theme=\\\"green\\\" on the md-tabs element, you'll get green tabs.\"},\n            { title: 'Ten', content: \"If you're still reading this, you should just go check out the API docs for tabs!\"}\n        ])\n    }),\n\n    cantRemoveTabs: Ember.computed('tabs.length', function() {\n\n        return this.get('tabs.length') <= 1;\n    }),\n\n    selectedIndex: 2,\n\n    selectedTab: Ember.computed('selectedIndex', 'tabs.[]', function() {\n        return this.get('tabs').objectAt(this.get('selectedIndex'));\n    }),\n\n    actions: {\n        showSource: function() {\n            this.toggleProperty('showSource');\n        },\n\n        addTab: function() {\n            var title = this.get('tTitle'),\n                content = this.get('tContent');\n\n            this.get('tabs').pushObject({\n                title: title,\n                content: content || title + \" Content View\"\n            });\n        },\n\n        removeTab: function() {\n            this.get('tabs').removeAt(this.get('selectedIndex'));\n        }\n    }\n});\n",
    "tabs.hbs": "<div class=\"sample\" layout=\"column\">\n\n    {{#md-tabs selectedIndex=selectedIndex md-border-bottom=''}}\n\n        {{#md-tabs-wrapper}}\n            {{#each tab in tabs}}\n                {{#md-tab disabled=tab.disabled label=tab.title}}\n                    <md-tab-label>{{tab.title}}</md-tab-label>\n                {{/md-tab}}\n            {{/each}}\n        {{/md-tabs-wrapper}}\n\n        {{#md-tabs-content-wrapper}}\n            {{#each tab in tabs}}\n                {{#md-tab-content}}\n                    <div class=\"demo-tab\" style=\"padding: 25px; text-align: center;\">\n                        {{tab.title}}\n                        <br/>\n                        {{#md-button class=\"md-primary md-raised\" disabled=cantRemoveTabs action='removeTab'}}\n                            Remove Tab{{/md-button}}\n                    </div>\n                {{/md-tab-content}}\n            {{/each}}\n        {{/md-tabs-content-wrapper}}\n    {{/md-tabs}}\n\n    <form layout=\"column\"\n          style=\"padding-top:20px;padding-left:20px;\" {{action 'addTab' on='submit'}}>\n        <div layout=\"row\" layout-sm=\"column\" layout-margin>\n            {{#md-input-container value=selectedIndex}}\n                <label for=\"activeIndex\">Active Index</label>\n                {{md-input type=\"text\" id=\"activeIndex\" disabled=true}}\n            {{/md-input-container}}\n\n            {{#md-input-container value=selectedTab.title}}\n                <label for=\"activeTitle\">Active Title</label>\n                {{md-input type=\"text\" id=\"activeTitle\"}}\n            {{/md-input-container}}\n        </div>\n\n        <div layout=\"row\" layout-sm=\"column\" layout-margin>\n            <span class=\"title\">Add a new Tab:</span>\n            {{#md-input-container value=tTitle}}\n                <label for=\"label\">Label</label>\n                {{md-input type=\"text\" id=\"label\"}}\n            {{/md-input-container}}\n            {{#md-input-container value=tContent}}\n                <label for=\"content\">Content</label>\n                {{md-input type=\"text\" id=\"content\"}}\n            {{/md-input-container}}\n            {{#md-button class=\"add-tab md-primary\" style=\"max-height: 40px\" }}\n                Add Tab\n            {{/md-button}}\n        </div>\n    </form>\n\n\n</div>\n",
    "toolbar.hbs": "<md-content>\n\n  {{#md-toolbar}}\n      <div class=\"md-toolbar-tools\">\n        {{#md-button class=\"md-icon-button\"}}\n          {{md-icon md-svg-icon=\"images/icons/menu.svg\"}}\n        {{/md-button}}\n          <h2>\n              <span>Toolbar with icon buttons</span>\n          </h2>\n          <span flex></span>\n        {{#md-button class=\"md-icon-button\"}}\n          {{md-icon md-svg-icon=\"images/icons/favorite.svg\"}}\n        {{/md-button}}\n        {{#md-button class=\"md-icon-button\"}}\n          {{md-icon md-svg-icon=\"images/icons/more_vert.svg\"}}\n        {{/md-button}}\n      </div>\n  {{/md-toolbar}}\n\n    <br>\n\n    <br>\n\n  {{#md-toolbar class=\"md-tall md-accent\"}}\n      <h2 class=\"md-toolbar-tools\">\n          <span>Toolbar: tall (md-accent)</span>\n      </h2>\n  {{/md-toolbar}}\n\n    <br>\n\n  {{#md-toolbar class=\"md-tall md-warn md-hue-3\"}}\n      <span flex></span>\n\n      <h2 class=\"md-toolbar-tools md-toolbar-tools-bottom\">\n          <span class=\"md-flex\">Toolbar: tall with actions pin to the bottom (md-warn md-hue-3)</span>\n      </h2>\n  {{/md-toolbar}}\n\n</md-content>",
    "tooltip-controller.js": "import Ember from 'ember';\n\nexport default Ember.Controller.extend({\n    demo: {}\n});\n",
    "tooltip.hbs": "<div>\n\n    {{#md-toolbar class=\"md-accent\"}}\n        <h2 class=\"md-toolbar-tools\">\n            <span flex>Awesome Md App</span>\n            {{#md-button class=\"md-fab md-accent\" aria-label=\"refresh\"}}\n                {{#md-tooltip}}\n                    Refresh\n                {{/md-tooltip}}\n                {{md-icon icon=\"/images/icons/ic_refresh_24px.svg\" style=\"width: 24px; height: 24px;\"}}\n            {{/md-button}}\n        </h2>\n    {{/md-toolbar}}\n    <md-content class=\"md-padding\">\n\n        <p>\n            The tooltip is visible when the button is hovered, focused, or touched.\n        </p>\n\n        {{#md-button class=\"md-fab md-fab-top-left left\" aria-label=\"Insert Drive\"}}\n            {{md-icon md-svg-src=\"images/icons/ic_insert_drive_file_24px.svg\" style=\"width: 24px; height: 24px;\"}}\n            {{#md-tooltip visible=demo.showTooltip}}\n                Insert Drive\n            {{/md-tooltip}}\n        {{/md-button}}\n        {{#md-button class=\"md-fab md-fab-top-right right\" aria-label=\"Photos\"}}\n            {{md-icon md-svg-src=\"images/icons/ic_photo_24px.svg\" style=\"width: 24px; height: 24px;\"}}\n            {{#md-tooltip}}\n                Photos\n            {{/md-tooltip}}\n        {{/md-button}}\n\n\n        <div style=\"margin-top: 15rem;\">\n            <p>Additionally, the Tooltip's `md-visible` attribute can use data-binding to programmatically show/hide itself. Toggle the checkbox below...</p>\n        </div>\n\n\n        {{#md-checkbox checked=demo.showTooltip}}\n            Insert Drive\n        {{/md-checkbox}}\n\n    </md-content>\n</div>"
  };

});
define('dummy/snippets/buttons-controller', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller.extend({});

	// No content

});
define('dummy/snippets/checkbox-controller', ['exports', 'ember', 'dummy/controllers/base-demo-controller'], function (exports, Ember, BaseDemoController) {

    'use strict';

    exports['default'] = BaseDemoController['default'].extend({

        demoName: "checkbox",

        data: {
            cb1: true,
            cb2: false,
            cb3: false,
            cb4: true,
            cb5: false
        }
    });

});
define('dummy/snippets/divider-controller', ['exports', 'ember', 'dummy/controllers/base-demo-controller'], function (exports, Ember, BaseDemoController) {

  'use strict';

  exports['default'] = BaseDemoController['default'].extend({
    demoName: "divider",
    messages: Ember['default'].A([{
      face: "http://lorempixel.com/50/50/people",
      what: "Brunch this weekend?",
      who: "Min Li Chan",
      when: "3:08PM",
      notes: " I'll be in your neighborhood doing errands"
    }, {
      face: "http://lorempixel.com/50/50/people",
      what: "Brunch this weekend?",
      who: "Min Li Chan",
      when: "3:08PM",
      notes: " I'll be in your neighborhood doing errands"
    }, {
      face: "http://lorempixel.com/50/50/people",
      what: "Brunch this weekend?",
      who: "Min Li Chan",
      when: "3:08PM",
      notes: " I'll be in your neighborhood doing errands"
    }, {
      face: "http://lorempixel.com/50/50/people",
      what: "Brunch this weekend?",
      who: "Min Li Chan",
      when: "3:08PM",
      notes: " I'll be in your neighborhood doing errands"
    }, {
      face: "http://lorempixel.com/50/50/people",
      what: "Brunch this weekend?",
      who: "Min Li Chan",
      when: "3:08PM",
      notes: " I'll be in your neighborhood doing errands"
    }])
  });

});
define('dummy/snippets/icon-controller', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Controller.extend({

    iconData: [{ name: "icon-home", color: "#777" }, { name: "icon-user-plus", color: "rgb(89, 226, 168)" }, { name: "icon-google-plus2", color: "#A00" }, { name: "icon-youtube4", color: "#00A" },
    // Use theming to color the font-icon
    { name: "icon-settings", color: "#A00", theme: "md-warn md-hue-5" }],

    sizes: [{ size: 12, padding: 0, previewScaleStyle: "padding-left: 0px", sizeStyle: "font-size: 12px; height: 12px;" }, { size: 21, padding: 2, previewScaleStyle: "padding-left: 2px", sizeStyle: "font-size: 21px; height: 21px;" }, { size: 36, padding: 6, previewScaleStyle: "padding-left: 6px", sizeStyle: "font-size: 36px; height: 36px;" }, { size: 48, padding: 10, previewScaleStyle: "padding-left: 10px", sizeStyle: "font-size: 48px; height: 48px;" }],

    icons: Ember['default'].computed("iconData", function () {
      var self = this;

      var iconData = this.get("iconData");

      iconData.forEach(function (i) {
        i.sizes = Ember['default'].A(Ember['default'].copy(self.sizes, true));

        i.sizes.forEach(function (size) {
          var color = !i.theme && i.color;
          size.sizeStyle = size.sizeStyle + " color: " + color + "; ";
        });
      });

      return Ember['default'].A(this.get("iconData"));
    }),

    insertDriveIconURL: "images/icons/ic_insert_drive_file_24px.svg",

    getAndroid: Ember['default'].computed("", function () {
      return "images/icons/android.svg";
    })

  });

});
define('dummy/snippets/input-controller', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Controller.extend({
        user: {
            title: "Developer",
            email: "ipsum@lorem.com",
            firstName: "",
            lastName: "",
            company: "Google",
            address: "1600 Amphitheatre Pkwy",
            city: "Mountain View",
            state: "CA",
            biography: "Loves kittens, snowboarding, and can type at 130 WPM.\n\nAnd rumor has it she bouldered up Castle Craig!",
            postalCode: "94043",
            submissionDate: null
        },

        user2: {
            name: "John Doe",
            email: "",
            phone: "",
            address: "Mountain View, CA"
        }
    });

});
define('dummy/snippets/list-controller', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Controller.extend({
        todos: Ember['default'].A([{
            face: "http://lorempixel.com/50/50/people",
            what: "Brunch this weekend?",
            who: "Min Li Chan",
            when: "3:08PM",
            notes: " I'll be in your neighborhood doing errands"
        }, {
            face: "http://lorempixel.com/50/50/people",
            what: "Brunch this weekend?",
            who: "Min Li Chan",
            when: "3:08PM",
            notes: " I'll be in your neighborhood doing errands"
        }, {
            face: "http://lorempixel.com/50/50/people",
            what: "Brunch this weekend?",
            who: "Min Li Chan",
            when: "3:08PM",
            notes: " I'll be in your neighborhood doing errands"
        }, {
            face: "http://lorempixel.com/50/50/people",
            what: "Brunch this weekend?",
            who: "Min Li Chan",
            when: "3:08PM",
            notes: " I'll be in your neighborhood doing errands"
        }, {
            face: "http://lorempixel.com/50/50/people",
            what: "Brunch this weekend?",
            who: "Min Li Chan",
            when: "3:08PM",
            notes: " I'll be in your neighborhood doing errands"
        }]),

        firstTodo: Ember['default'].computed("", function () {
            return this.get("todos")[0];
        })
    });

});
define('dummy/snippets/progress-circular-controller', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Controller.extend({
        mode: "query",
        determinateValue: 30,

        setupTimer: function setupTimer() {
            Ember['default'].run.later(this, function () {
                this.incrementProperty("determinateValue", 1);
                if (this.get("determinateValue") > 100) {
                    this.set("determinateValue", 30);
                }

                Ember['default'].run.later(this, this.setupTimer);
            }, 100);
        }
    });

});
define('dummy/snippets/progress-linear-controller', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Controller.extend({
        mode: "query",
        determinateValue: 30,
        determinateValue2: 30,

        setupTimer: function setupTimer() {
            Ember['default'].run.later(this, function () {
                this.incrementProperty("determinateValue", 1);
                this.incrementProperty("determinateValue2", 1.5);
                if (this.get("determinateValue") > 100) {
                    this.set("determinateValue", 30);
                    this.set("determinateValue2", 30);
                }

                Ember['default'].run.later(this, this.setupTimer);
            }, 100);
        },

        setupTimer2: function setupTimer2() {
            Ember['default'].run.later(this, function () {
                this.set("mode", this.get("mode") == "query" ? "determinate" : "query");
                Ember['default'].run.later(this, this.setupTimer2);
            }, 7200);
        }
    });

});
define('dummy/snippets/radio-button-controller', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Controller.extend({
        data: {
            group1: "Banana",
            group2: 2,
            group3: "avatar-1"
        },

        avatarData: Ember['default'].A([{
            id: "avatars:svg-1",
            title: "avatar 1",
            value: "avatar-1"
        }, {
            id: "avatars:svg-2",
            title: "avatar 2",
            value: "avatar-2"
        }, {
            id: "avatars:svg-3",
            title: "avatar 3",
            value: "avatar-3"
        }]),

        radioData: Ember['default'].ArrayProxy.create({
            content: Ember['default'].A([{ label: "1", value: 1 }, { label: "2", value: 2 }, { label: "3", value: "3", isDisabled: true }, { label: "4", value: "4" }])
        }),

        //radioData: [
        //    {label: '1', value: 1},
        //    {label: '2', value: 2},
        //    {label: '3', value: '3', isDisabled: true},
        //    {label: '4', value: '4'}
        //],
        //

        actions: {
            submit: function submit() {
                alert("submit");
            },

            addItem: function addItem() {
                var r = Math.ceil(Math.random() * 1000);
                this.get("radioData").addObject({ label: r, value: r });
                return false;
            },

            removeItem: function removeItem() {
                this.get("radioData").popObject();
                return false;
            }
        }
    });

});
define('dummy/snippets/slider-controller', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Controller.extend({
        color: {
            red: Math.floor(Math.random() * 255),
            green: Math.floor(Math.random() * 255),
            blue: Math.floor(Math.random() * 255)
        },

        colorStyle: Ember['default'].computed("color.red", "color.green", "color.blue", function () {
            return Ember['default'].String.htmlSafe("border: 1px solid #333; background: rgb(" + this.get("color.red") + "," + this.get("color.green") + "," + this.get("color.blue") + ")");
        }),

        rating1: 3,
        rating2: 2,
        rating3: 4,

        disabled1: 0,
        disabled2: 70
    });

});
define('dummy/snippets/tabs-controller', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Controller.extend({

        tabs: Ember['default'].ArrayProxy.create({
            content: Ember['default'].A([{ title: "One", content: "Tabs will become paginated if there isn't enough room for them." }, { title: "Two", content: "You can swipe left and right on a mobile device to change tabs." }, { title: "Three", content: "You can bind the selected tab via the selected attribute on the md-tabs element." }, { title: "Four", content: "If you set the selected tab binding to -1, it will leave no tab selected." }, { title: "Five", content: "If you remove a tab, it will try to select a new one." }, { title: "Six", content: "There's an ink bar that follows the selected tab, you can turn it off if you want." }, { title: "Seven", content: "If you set ng-disabled on a tab, it becomes unselectable. If the currently selected tab becomes disabled, it will try to select the next tab." }, { title: "Eight", content: "If you look at the source, you're using tabs to look at a demo for tabs. Recursion!" }, { title: "Nine", content: "If you set md-theme=\"green\" on the md-tabs element, you'll get green tabs." }, { title: "Ten", content: "If you're still reading this, you should just go check out the API docs for tabs!" }])
        }),

        cantRemoveTabs: Ember['default'].computed("tabs.length", function () {

            return this.get("tabs.length") <= 1;
        }),

        selectedIndex: 2,

        selectedTab: Ember['default'].computed("selectedIndex", "tabs.[]", function () {
            return this.get("tabs").objectAt(this.get("selectedIndex"));
        }),

        actions: {
            showSource: function showSource() {
                this.toggleProperty("showSource");
            },

            addTab: function addTab() {
                var title = this.get("tTitle"),
                    content = this.get("tContent");

                this.get("tabs").pushObject({
                    title: title,
                    content: content || title + " Content View"
                });
            },

            removeTab: function removeTab() {
                this.get("tabs").removeAt(this.get("selectedIndex"));
            }
        }
    });

});
define('dummy/snippets/tooltip-controller', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Controller.extend({
        demo: {}
    });

});
define('dummy/templates/application', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      var child0 = (function() {
        var child0 = (function() {
          return {
            isHTMLBars: true,
            revision: "Ember@1.11.0",
            blockParams: 0,
            cachedFragment: null,
            hasRendered: false,
            build: function build(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("                ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("img");
              dom.setAttribute(el1,"src","images/ember-construction-57.png");
              dom.setAttribute(el1,"width","48");
              dom.setAttribute(el1,"height","48");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n\n                ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("div");
              dom.setAttribute(el1,"class","docs-logotype");
              var el2 = dom.createTextNode("Material Design");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            render: function render(context, env, contextualElement) {
              var dom = env.dom;
              dom.detectNamespace(contextualElement);
              var fragment;
              if (env.useFragmentCache && dom.canClone) {
                if (this.cachedFragment === null) {
                  fragment = this.build(dom);
                  if (this.hasRendered) {
                    this.cachedFragment = fragment;
                  } else {
                    this.hasRendered = true;
                  }
                }
                if (this.cachedFragment) {
                  fragment = dom.cloneNode(this.cachedFragment, true);
                }
              } else {
                fragment = this.build(dom);
              }
              return fragment;
            }
          };
        }());
        return {
          isHTMLBars: true,
          revision: "Ember@1.11.0",
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("h1");
            dom.setAttribute(el1,"class","md-toolbar-tools");
            var el2 = dom.createTextNode("\n");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("        ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, block = hooks.block;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            var morph0 = dom.createMorphAt(dom.childAt(fragment, [1]),1,1);
            block(env, morph0, context, "link-to", ["index"], {"flex": "", "layoutType": "row", "class": "docs-logo"}, child0, null);
            return fragment;
          }
        };
      }());
      var child1 = (function() {
        var child0 = (function() {
          return {
            isHTMLBars: true,
            revision: "Ember@1.11.0",
            blockParams: 0,
            cachedFragment: null,
            hasRendered: false,
            build: function build(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("Buttons");
              dom.appendChild(el0, el1);
              return el0;
            },
            render: function render(context, env, contextualElement) {
              var dom = env.dom;
              dom.detectNamespace(contextualElement);
              var fragment;
              if (env.useFragmentCache && dom.canClone) {
                if (this.cachedFragment === null) {
                  fragment = this.build(dom);
                  if (this.hasRendered) {
                    this.cachedFragment = fragment;
                  } else {
                    this.hasRendered = true;
                  }
                }
                if (this.cachedFragment) {
                  fragment = dom.cloneNode(this.cachedFragment, true);
                }
              } else {
                fragment = this.build(dom);
              }
              return fragment;
            }
          };
        }());
        return {
          isHTMLBars: true,
          revision: "Ember@1.11.0",
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, block = hooks.block;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            var morph0 = dom.createMorphAt(fragment,1,1,contextualElement);
            block(env, morph0, context, "link-to", ["buttons"], {"class": "md-button"}, child0, null);
            return fragment;
          }
        };
      }());
      var child2 = (function() {
        var child0 = (function() {
          return {
            isHTMLBars: true,
            revision: "Ember@1.11.0",
            blockParams: 0,
            cachedFragment: null,
            hasRendered: false,
            build: function build(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("Card");
              dom.appendChild(el0, el1);
              return el0;
            },
            render: function render(context, env, contextualElement) {
              var dom = env.dom;
              dom.detectNamespace(contextualElement);
              var fragment;
              if (env.useFragmentCache && dom.canClone) {
                if (this.cachedFragment === null) {
                  fragment = this.build(dom);
                  if (this.hasRendered) {
                    this.cachedFragment = fragment;
                  } else {
                    this.hasRendered = true;
                  }
                }
                if (this.cachedFragment) {
                  fragment = dom.cloneNode(this.cachedFragment, true);
                }
              } else {
                fragment = this.build(dom);
              }
              return fragment;
            }
          };
        }());
        return {
          isHTMLBars: true,
          revision: "Ember@1.11.0",
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, block = hooks.block;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            var morph0 = dom.createMorphAt(fragment,1,1,contextualElement);
            block(env, morph0, context, "link-to", ["card"], {"class": "md-button"}, child0, null);
            return fragment;
          }
        };
      }());
      var child3 = (function() {
        var child0 = (function() {
          return {
            isHTMLBars: true,
            revision: "Ember@1.11.0",
            blockParams: 0,
            cachedFragment: null,
            hasRendered: false,
            build: function build(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("Checkbox");
              dom.appendChild(el0, el1);
              return el0;
            },
            render: function render(context, env, contextualElement) {
              var dom = env.dom;
              dom.detectNamespace(contextualElement);
              var fragment;
              if (env.useFragmentCache && dom.canClone) {
                if (this.cachedFragment === null) {
                  fragment = this.build(dom);
                  if (this.hasRendered) {
                    this.cachedFragment = fragment;
                  } else {
                    this.hasRendered = true;
                  }
                }
                if (this.cachedFragment) {
                  fragment = dom.cloneNode(this.cachedFragment, true);
                }
              } else {
                fragment = this.build(dom);
              }
              return fragment;
            }
          };
        }());
        return {
          isHTMLBars: true,
          revision: "Ember@1.11.0",
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, block = hooks.block;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            var morph0 = dom.createMorphAt(fragment,1,1,contextualElement);
            block(env, morph0, context, "link-to", ["checkbox"], {"class": "md-button"}, child0, null);
            return fragment;
          }
        };
      }());
      var child4 = (function() {
        var child0 = (function() {
          return {
            isHTMLBars: true,
            revision: "Ember@1.11.0",
            blockParams: 0,
            cachedFragment: null,
            hasRendered: false,
            build: function build(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("Content");
              dom.appendChild(el0, el1);
              return el0;
            },
            render: function render(context, env, contextualElement) {
              var dom = env.dom;
              dom.detectNamespace(contextualElement);
              var fragment;
              if (env.useFragmentCache && dom.canClone) {
                if (this.cachedFragment === null) {
                  fragment = this.build(dom);
                  if (this.hasRendered) {
                    this.cachedFragment = fragment;
                  } else {
                    this.hasRendered = true;
                  }
                }
                if (this.cachedFragment) {
                  fragment = dom.cloneNode(this.cachedFragment, true);
                }
              } else {
                fragment = this.build(dom);
              }
              return fragment;
            }
          };
        }());
        return {
          isHTMLBars: true,
          revision: "Ember@1.11.0",
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, block = hooks.block;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            var morph0 = dom.createMorphAt(fragment,1,1,contextualElement);
            block(env, morph0, context, "link-to", ["content"], {"class": "md-button"}, child0, null);
            return fragment;
          }
        };
      }());
      var child5 = (function() {
        var child0 = (function() {
          return {
            isHTMLBars: true,
            revision: "Ember@1.11.0",
            blockParams: 0,
            cachedFragment: null,
            hasRendered: false,
            build: function build(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("Divider");
              dom.appendChild(el0, el1);
              return el0;
            },
            render: function render(context, env, contextualElement) {
              var dom = env.dom;
              dom.detectNamespace(contextualElement);
              var fragment;
              if (env.useFragmentCache && dom.canClone) {
                if (this.cachedFragment === null) {
                  fragment = this.build(dom);
                  if (this.hasRendered) {
                    this.cachedFragment = fragment;
                  } else {
                    this.hasRendered = true;
                  }
                }
                if (this.cachedFragment) {
                  fragment = dom.cloneNode(this.cachedFragment, true);
                }
              } else {
                fragment = this.build(dom);
              }
              return fragment;
            }
          };
        }());
        return {
          isHTMLBars: true,
          revision: "Ember@1.11.0",
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, block = hooks.block;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            var morph0 = dom.createMorphAt(fragment,1,1,contextualElement);
            block(env, morph0, context, "link-to", ["divider"], {"class": "md-button"}, child0, null);
            return fragment;
          }
        };
      }());
      var child6 = (function() {
        var child0 = (function() {
          return {
            isHTMLBars: true,
            revision: "Ember@1.11.0",
            blockParams: 0,
            cachedFragment: null,
            hasRendered: false,
            build: function build(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("Icon");
              dom.appendChild(el0, el1);
              return el0;
            },
            render: function render(context, env, contextualElement) {
              var dom = env.dom;
              dom.detectNamespace(contextualElement);
              var fragment;
              if (env.useFragmentCache && dom.canClone) {
                if (this.cachedFragment === null) {
                  fragment = this.build(dom);
                  if (this.hasRendered) {
                    this.cachedFragment = fragment;
                  } else {
                    this.hasRendered = true;
                  }
                }
                if (this.cachedFragment) {
                  fragment = dom.cloneNode(this.cachedFragment, true);
                }
              } else {
                fragment = this.build(dom);
              }
              return fragment;
            }
          };
        }());
        return {
          isHTMLBars: true,
          revision: "Ember@1.11.0",
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, block = hooks.block;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            var morph0 = dom.createMorphAt(fragment,1,1,contextualElement);
            block(env, morph0, context, "link-to", ["icon"], {"class": "md-button"}, child0, null);
            return fragment;
          }
        };
      }());
      var child7 = (function() {
        var child0 = (function() {
          return {
            isHTMLBars: true,
            revision: "Ember@1.11.0",
            blockParams: 0,
            cachedFragment: null,
            hasRendered: false,
            build: function build(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("Input");
              dom.appendChild(el0, el1);
              return el0;
            },
            render: function render(context, env, contextualElement) {
              var dom = env.dom;
              dom.detectNamespace(contextualElement);
              var fragment;
              if (env.useFragmentCache && dom.canClone) {
                if (this.cachedFragment === null) {
                  fragment = this.build(dom);
                  if (this.hasRendered) {
                    this.cachedFragment = fragment;
                  } else {
                    this.hasRendered = true;
                  }
                }
                if (this.cachedFragment) {
                  fragment = dom.cloneNode(this.cachedFragment, true);
                }
              } else {
                fragment = this.build(dom);
              }
              return fragment;
            }
          };
        }());
        return {
          isHTMLBars: true,
          revision: "Ember@1.11.0",
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, block = hooks.block;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            var morph0 = dom.createMorphAt(fragment,1,1,contextualElement);
            block(env, morph0, context, "link-to", ["input"], {"class": "md-button"}, child0, null);
            return fragment;
          }
        };
      }());
      var child8 = (function() {
        var child0 = (function() {
          return {
            isHTMLBars: true,
            revision: "Ember@1.11.0",
            blockParams: 0,
            cachedFragment: null,
            hasRendered: false,
            build: function build(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("List");
              dom.appendChild(el0, el1);
              return el0;
            },
            render: function render(context, env, contextualElement) {
              var dom = env.dom;
              dom.detectNamespace(contextualElement);
              var fragment;
              if (env.useFragmentCache && dom.canClone) {
                if (this.cachedFragment === null) {
                  fragment = this.build(dom);
                  if (this.hasRendered) {
                    this.cachedFragment = fragment;
                  } else {
                    this.hasRendered = true;
                  }
                }
                if (this.cachedFragment) {
                  fragment = dom.cloneNode(this.cachedFragment, true);
                }
              } else {
                fragment = this.build(dom);
              }
              return fragment;
            }
          };
        }());
        return {
          isHTMLBars: true,
          revision: "Ember@1.11.0",
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, block = hooks.block;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            var morph0 = dom.createMorphAt(fragment,1,1,contextualElement);
            block(env, morph0, context, "link-to", ["list"], {"class": "md-button"}, child0, null);
            return fragment;
          }
        };
      }());
      var child9 = (function() {
        var child0 = (function() {
          return {
            isHTMLBars: true,
            revision: "Ember@1.11.0",
            blockParams: 0,
            cachedFragment: null,
            hasRendered: false,
            build: function build(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("Progress Circular");
              dom.appendChild(el0, el1);
              return el0;
            },
            render: function render(context, env, contextualElement) {
              var dom = env.dom;
              dom.detectNamespace(contextualElement);
              var fragment;
              if (env.useFragmentCache && dom.canClone) {
                if (this.cachedFragment === null) {
                  fragment = this.build(dom);
                  if (this.hasRendered) {
                    this.cachedFragment = fragment;
                  } else {
                    this.hasRendered = true;
                  }
                }
                if (this.cachedFragment) {
                  fragment = dom.cloneNode(this.cachedFragment, true);
                }
              } else {
                fragment = this.build(dom);
              }
              return fragment;
            }
          };
        }());
        return {
          isHTMLBars: true,
          revision: "Ember@1.11.0",
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, block = hooks.block;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            var morph0 = dom.createMorphAt(fragment,1,1,contextualElement);
            block(env, morph0, context, "link-to", ["progress-circular"], {"class": "md-button"}, child0, null);
            return fragment;
          }
        };
      }());
      var child10 = (function() {
        var child0 = (function() {
          return {
            isHTMLBars: true,
            revision: "Ember@1.11.0",
            blockParams: 0,
            cachedFragment: null,
            hasRendered: false,
            build: function build(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("Progress Linear");
              dom.appendChild(el0, el1);
              return el0;
            },
            render: function render(context, env, contextualElement) {
              var dom = env.dom;
              dom.detectNamespace(contextualElement);
              var fragment;
              if (env.useFragmentCache && dom.canClone) {
                if (this.cachedFragment === null) {
                  fragment = this.build(dom);
                  if (this.hasRendered) {
                    this.cachedFragment = fragment;
                  } else {
                    this.hasRendered = true;
                  }
                }
                if (this.cachedFragment) {
                  fragment = dom.cloneNode(this.cachedFragment, true);
                }
              } else {
                fragment = this.build(dom);
              }
              return fragment;
            }
          };
        }());
        return {
          isHTMLBars: true,
          revision: "Ember@1.11.0",
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, block = hooks.block;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            var morph0 = dom.createMorphAt(fragment,1,1,contextualElement);
            block(env, morph0, context, "link-to", ["progress-linear"], {"class": "md-button"}, child0, null);
            return fragment;
          }
        };
      }());
      var child11 = (function() {
        var child0 = (function() {
          return {
            isHTMLBars: true,
            revision: "Ember@1.11.0",
            blockParams: 0,
            cachedFragment: null,
            hasRendered: false,
            build: function build(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("Radio Button");
              dom.appendChild(el0, el1);
              return el0;
            },
            render: function render(context, env, contextualElement) {
              var dom = env.dom;
              dom.detectNamespace(contextualElement);
              var fragment;
              if (env.useFragmentCache && dom.canClone) {
                if (this.cachedFragment === null) {
                  fragment = this.build(dom);
                  if (this.hasRendered) {
                    this.cachedFragment = fragment;
                  } else {
                    this.hasRendered = true;
                  }
                }
                if (this.cachedFragment) {
                  fragment = dom.cloneNode(this.cachedFragment, true);
                }
              } else {
                fragment = this.build(dom);
              }
              return fragment;
            }
          };
        }());
        return {
          isHTMLBars: true,
          revision: "Ember@1.11.0",
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, block = hooks.block;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            var morph0 = dom.createMorphAt(fragment,1,1,contextualElement);
            block(env, morph0, context, "link-to", ["radio-button"], {"class": "md-button"}, child0, null);
            return fragment;
          }
        };
      }());
      var child12 = (function() {
        var child0 = (function() {
          return {
            isHTMLBars: true,
            revision: "Ember@1.11.0",
            blockParams: 0,
            cachedFragment: null,
            hasRendered: false,
            build: function build(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("Slider");
              dom.appendChild(el0, el1);
              return el0;
            },
            render: function render(context, env, contextualElement) {
              var dom = env.dom;
              dom.detectNamespace(contextualElement);
              var fragment;
              if (env.useFragmentCache && dom.canClone) {
                if (this.cachedFragment === null) {
                  fragment = this.build(dom);
                  if (this.hasRendered) {
                    this.cachedFragment = fragment;
                  } else {
                    this.hasRendered = true;
                  }
                }
                if (this.cachedFragment) {
                  fragment = dom.cloneNode(this.cachedFragment, true);
                }
              } else {
                fragment = this.build(dom);
              }
              return fragment;
            }
          };
        }());
        return {
          isHTMLBars: true,
          revision: "Ember@1.11.0",
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, block = hooks.block;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            var morph0 = dom.createMorphAt(fragment,1,1,contextualElement);
            block(env, morph0, context, "link-to", ["slider"], {"class": "md-button"}, child0, null);
            return fragment;
          }
        };
      }());
      var child13 = (function() {
        var child0 = (function() {
          return {
            isHTMLBars: true,
            revision: "Ember@1.11.0",
            blockParams: 0,
            cachedFragment: null,
            hasRendered: false,
            build: function build(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("Tabs");
              dom.appendChild(el0, el1);
              return el0;
            },
            render: function render(context, env, contextualElement) {
              var dom = env.dom;
              dom.detectNamespace(contextualElement);
              var fragment;
              if (env.useFragmentCache && dom.canClone) {
                if (this.cachedFragment === null) {
                  fragment = this.build(dom);
                  if (this.hasRendered) {
                    this.cachedFragment = fragment;
                  } else {
                    this.hasRendered = true;
                  }
                }
                if (this.cachedFragment) {
                  fragment = dom.cloneNode(this.cachedFragment, true);
                }
              } else {
                fragment = this.build(dom);
              }
              return fragment;
            }
          };
        }());
        return {
          isHTMLBars: true,
          revision: "Ember@1.11.0",
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, block = hooks.block;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            var morph0 = dom.createMorphAt(fragment,1,1,contextualElement);
            block(env, morph0, context, "link-to", ["tabs"], {"class": "md-button"}, child0, null);
            return fragment;
          }
        };
      }());
      var child14 = (function() {
        var child0 = (function() {
          return {
            isHTMLBars: true,
            revision: "Ember@1.11.0",
            blockParams: 0,
            cachedFragment: null,
            hasRendered: false,
            build: function build(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("Toast");
              dom.appendChild(el0, el1);
              return el0;
            },
            render: function render(context, env, contextualElement) {
              var dom = env.dom;
              dom.detectNamespace(contextualElement);
              var fragment;
              if (env.useFragmentCache && dom.canClone) {
                if (this.cachedFragment === null) {
                  fragment = this.build(dom);
                  if (this.hasRendered) {
                    this.cachedFragment = fragment;
                  } else {
                    this.hasRendered = true;
                  }
                }
                if (this.cachedFragment) {
                  fragment = dom.cloneNode(this.cachedFragment, true);
                }
              } else {
                fragment = this.build(dom);
              }
              return fragment;
            }
          };
        }());
        return {
          isHTMLBars: true,
          revision: "Ember@1.11.0",
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, block = hooks.block;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            var morph0 = dom.createMorphAt(fragment,1,1,contextualElement);
            block(env, morph0, context, "link-to", ["toast"], {"class": "md-button"}, child0, null);
            return fragment;
          }
        };
      }());
      var child15 = (function() {
        var child0 = (function() {
          return {
            isHTMLBars: true,
            revision: "Ember@1.11.0",
            blockParams: 0,
            cachedFragment: null,
            hasRendered: false,
            build: function build(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("Toolbar");
              dom.appendChild(el0, el1);
              return el0;
            },
            render: function render(context, env, contextualElement) {
              var dom = env.dom;
              dom.detectNamespace(contextualElement);
              var fragment;
              if (env.useFragmentCache && dom.canClone) {
                if (this.cachedFragment === null) {
                  fragment = this.build(dom);
                  if (this.hasRendered) {
                    this.cachedFragment = fragment;
                  } else {
                    this.hasRendered = true;
                  }
                }
                if (this.cachedFragment) {
                  fragment = dom.cloneNode(this.cachedFragment, true);
                }
              } else {
                fragment = this.build(dom);
              }
              return fragment;
            }
          };
        }());
        return {
          isHTMLBars: true,
          revision: "Ember@1.11.0",
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, block = hooks.block;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            var morph0 = dom.createMorphAt(fragment,1,1,contextualElement);
            block(env, morph0, context, "link-to", ["toolbar"], {"class": "md-button"}, child0, null);
            return fragment;
          }
        };
      }());
      var child16 = (function() {
        var child0 = (function() {
          return {
            isHTMLBars: true,
            revision: "Ember@1.11.0",
            blockParams: 0,
            cachedFragment: null,
            hasRendered: false,
            build: function build(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("Tooltip");
              dom.appendChild(el0, el1);
              return el0;
            },
            render: function render(context, env, contextualElement) {
              var dom = env.dom;
              dom.detectNamespace(contextualElement);
              var fragment;
              if (env.useFragmentCache && dom.canClone) {
                if (this.cachedFragment === null) {
                  fragment = this.build(dom);
                  if (this.hasRendered) {
                    this.cachedFragment = fragment;
                  } else {
                    this.hasRendered = true;
                  }
                }
                if (this.cachedFragment) {
                  fragment = dom.cloneNode(this.cachedFragment, true);
                }
              } else {
                fragment = this.build(dom);
              }
              return fragment;
            }
          };
        }());
        return {
          isHTMLBars: true,
          revision: "Ember@1.11.0",
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, block = hooks.block;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            var morph0 = dom.createMorphAt(fragment,1,1,contextualElement);
            block(env, morph0, context, "link-to", ["tooltip"], {"class": "md-button"}, child0, null);
            return fragment;
          }
        };
      }());
      var child17 = (function() {
        var child0 = (function() {
          return {
            isHTMLBars: true,
            revision: "Ember@1.11.0",
            blockParams: 0,
            cachedFragment: null,
            hasRendered: false,
            build: function build(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("Typography");
              dom.appendChild(el0, el1);
              return el0;
            },
            render: function render(context, env, contextualElement) {
              var dom = env.dom;
              dom.detectNamespace(contextualElement);
              var fragment;
              if (env.useFragmentCache && dom.canClone) {
                if (this.cachedFragment === null) {
                  fragment = this.build(dom);
                  if (this.hasRendered) {
                    this.cachedFragment = fragment;
                  } else {
                    this.hasRendered = true;
                  }
                }
                if (this.cachedFragment) {
                  fragment = dom.cloneNode(this.cachedFragment, true);
                }
              } else {
                fragment = this.build(dom);
              }
              return fragment;
            }
          };
        }());
        return {
          isHTMLBars: true,
          revision: "Ember@1.11.0",
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, block = hooks.block;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            var morph0 = dom.createMorphAt(fragment,1,1,contextualElement);
            block(env, morph0, context, "link-to", ["typography"], {"class": "md-button"}, child0, null);
            return fragment;
          }
        };
      }());
      var child18 = (function() {
        var child0 = (function() {
          return {
            isHTMLBars: true,
            revision: "Ember@1.11.0",
            blockParams: 0,
            cachedFragment: null,
            hasRendered: false,
            build: function build(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("Index");
              dom.appendChild(el0, el1);
              return el0;
            },
            render: function render(context, env, contextualElement) {
              var dom = env.dom;
              dom.detectNamespace(contextualElement);
              var fragment;
              if (env.useFragmentCache && dom.canClone) {
                if (this.cachedFragment === null) {
                  fragment = this.build(dom);
                  if (this.hasRendered) {
                    this.cachedFragment = fragment;
                  } else {
                    this.hasRendered = true;
                  }
                }
                if (this.cachedFragment) {
                  fragment = dom.cloneNode(this.cachedFragment, true);
                }
              } else {
                fragment = this.build(dom);
              }
              return fragment;
            }
          };
        }());
        return {
          isHTMLBars: true,
          revision: "Ember@1.11.0",
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, block = hooks.block;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            var morph0 = dom.createMorphAt(fragment,1,1,contextualElement);
            block(env, morph0, context, "link-to", ["index"], {"classNames": "md-button"}, child0, null);
            return fragment;
          }
        };
      }());
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.0",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("md-content");
          dom.setAttribute(el1,"flex","");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("ul");
          dom.setAttribute(el2,"class","docs-menu");
          var el3 = dom.createTextNode("\n");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n\n");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n\n");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n        ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, block = hooks.block;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var element2 = dom.childAt(fragment, [3, 1]);
          var morph0 = dom.createMorphAt(fragment,1,1,contextualElement);
          var morph1 = dom.createMorphAt(element2,1,1);
          var morph2 = dom.createMorphAt(element2,3,3);
          var morph3 = dom.createMorphAt(element2,5,5);
          var morph4 = dom.createMorphAt(element2,7,7);
          var morph5 = dom.createMorphAt(element2,9,9);
          var morph6 = dom.createMorphAt(element2,11,11);
          var morph7 = dom.createMorphAt(element2,13,13);
          var morph8 = dom.createMorphAt(element2,15,15);
          var morph9 = dom.createMorphAt(element2,17,17);
          var morph10 = dom.createMorphAt(element2,19,19);
          var morph11 = dom.createMorphAt(element2,21,21);
          var morph12 = dom.createMorphAt(element2,23,23);
          var morph13 = dom.createMorphAt(element2,25,25);
          var morph14 = dom.createMorphAt(element2,27,27);
          var morph15 = dom.createMorphAt(element2,29,29);
          var morph16 = dom.createMorphAt(element2,31,31);
          var morph17 = dom.createMorphAt(element2,33,33);
          var morph18 = dom.createMorphAt(element2,35,35);
          block(env, morph0, context, "md-toolbar", [], {}, child0, null);
          block(env, morph1, context, "link-to", ["buttons"], {"activeClass": "parentActive", "tagName": "li"}, child1, null);
          block(env, morph2, context, "link-to", ["card"], {"activeClass": "parentActive", "tagName": "li"}, child2, null);
          block(env, morph3, context, "link-to", ["checkbox"], {"activeClass": "parentActive", "tagName": "li"}, child3, null);
          block(env, morph4, context, "link-to", ["content"], {"activeClass": "parentActive", "tagName": "li"}, child4, null);
          block(env, morph5, context, "link-to", ["divider"], {"activeClass": "parentActive", "tagName": "li"}, child5, null);
          block(env, morph6, context, "link-to", ["icon"], {"activeClass": "parentActive", "tagName": "li"}, child6, null);
          block(env, morph7, context, "link-to", ["input"], {"activeClass": "parentActive", "tagName": "li"}, child7, null);
          block(env, morph8, context, "link-to", ["list"], {"activeClass": "parentActive", "tagName": "li"}, child8, null);
          block(env, morph9, context, "link-to", ["progress-circular"], {"activeClass": "parentActive", "tagName": "li"}, child9, null);
          block(env, morph10, context, "link-to", ["progress-linear"], {"activeClass": "parentActive", "tagName": "li"}, child10, null);
          block(env, morph11, context, "link-to", ["radio-button"], {"activeClass": "parentActive", "tagName": "li"}, child11, null);
          block(env, morph12, context, "link-to", ["slider"], {"activeClass": "parentActive", "tagName": "li"}, child12, null);
          block(env, morph13, context, "link-to", ["tabs"], {"activeClass": "parentActive", "tagName": "li"}, child13, null);
          block(env, morph14, context, "link-to", ["toast"], {"activeClass": "parentActive", "tagName": "li"}, child14, null);
          block(env, morph15, context, "link-to", ["toolbar"], {"activeClass": "parentActive", "tagName": "li"}, child15, null);
          block(env, morph16, context, "link-to", ["tooltip"], {"activeClass": "parentActive", "tagName": "li"}, child16, null);
          block(env, morph17, context, "link-to", ["typography"], {"activeClass": "parentActive", "tagName": "li"}, child17, null);
          block(env, morph18, context, "link-to", ["index"], {"activeClass": "parentActive", "tagName": "li"}, child18, null);
          return fragment;
        }
      };
    }());
    var child1 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.0",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1,"class","md-toolbar-tools");
          var el2 = dom.createTextNode("\n            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("button");
          dom.setAttribute(el2,"class","docs-menu-icon");
          dom.setAttribute(el2,"hide-gt-sm","");
          dom.setAttribute(el2,"aria-label","Toggle Menu");
          var el3 = dom.createTextNode("\n                ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n            ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n\n            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2,"class","fill-height");
          dom.setAttribute(el2,"flex","");
          dom.setAttribute(el2,"layout","row");
          var el3 = dom.createTextNode("\n                ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("h2");
          dom.setAttribute(el3,"class","md-toolbar-item md-breadcrumb");
          var el4 = dom.createTextNode("\n                    ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("span");
          var el5 = dom.createTextNode("\n                        ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("span");
          dom.setAttribute(el5,"hide-sm","");
          dom.setAttribute(el5,"hide-md","");
          var el6 = dom.createTextNode("Demos");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n                        ");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("span");
          dom.setAttribute(el5,"class","docs-menu-separator-icon");
          dom.setAttribute(el5,"style","");
          dom.setAttribute(el5,"hide-sm","");
          dom.setAttribute(el5,"hide-md","");
          var el6 = dom.createTextNode("\n                            ");
          dom.appendChild(el5, el6);
          var el6 = dom.createElement("img");
          dom.setAttribute(el6,"src","images/docArrow.png");
          dom.setAttribute(el6,"aria-hidden","true");
          dom.setAttribute(el6,"alt","");
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n                        ");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n                    ");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n                    ");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("span");
          dom.setAttribute(el4,"class","md-breadcrumb-page");
          var el5 = dom.createComment("");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n                ");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n            ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n\n            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("span");
          dom.setAttribute(el2,"flex","");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n\n            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2,"class","md-toolbar-item md-tools docs-tools");
          dom.setAttribute(el2,"layout","column");
          dom.setAttribute(el2,"layout-gt-md","row");
          var el3 = dom.createTextNode("\n\n            ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n\n        ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, element = hooks.element, inline = hooks.inline, content = hooks.content;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var element0 = dom.childAt(fragment, [1]);
          var element1 = dom.childAt(element0, [1]);
          var morph0 = dom.createMorphAt(element1,1,1);
          var morph1 = dom.createMorphAt(dom.childAt(element0, [3, 1, 3]),0,0);
          element(env, element1, context, "action", ["toggleSidebar"], {});
          inline(env, morph0, context, "md-icon", [], {"md-svg-src": "images/icons/ic_menu_24px.svg"});
          content(env, morph1, context, "demoName");
          return fragment;
        }
      };
    }());
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.0",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"layout","column");
        dom.setAttribute(el1,"role","main");
        dom.setAttribute(el1,"flex","");
        dom.setAttribute(el1,"tabindex","-1");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("md-content");
        dom.setAttribute(el2,"class","md-padding");
        dom.setAttribute(el2,"md-scroll-y","");
        dom.setAttribute(el2,"flex","");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, get = hooks.get, block = hooks.block, content = hooks.content;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var element3 = dom.childAt(fragment, [2]);
        var morph0 = dom.createMorphAt(fragment,0,0,contextualElement);
        var morph1 = dom.createMorphAt(element3,1,1);
        var morph2 = dom.createMorphAt(dom.childAt(element3, [3]),1,1);
        dom.insertBoundary(fragment, 0);
        block(env, morph0, context, "md-sidenav", [], {"classNames": "site-sidenav md-sidenav-left md-whiteframe-z2", "md-component-id": "left", "sidebarVisible": get(env, context, "sidebarVisible")}, child0, null);
        block(env, morph1, context, "md-toolbar", [], {}, child1, null);
        content(env, morph2, context, "outlet");
        return fragment;
      }
    };
  }()));

});
define('dummy/templates/buttons', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      var child0 = (function() {
        return {
          isHTMLBars: true,
          revision: "Ember@1.11.0",
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n                        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("span");
            var el2 = dom.createTextNode("Source");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, inline = hooks.inline;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            var morph0 = dom.createMorphAt(fragment,1,1,contextualElement);
            inline(env, morph0, context, "md-icon", [], {"md-svg-src": "images/icons/ic_visibility_24px.svg", "style": "margin: 0 4px 0 0;"});
            return fragment;
          }
        };
      }());
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.0",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1,"class","md-toolbar-tools");
          var el2 = dom.createTextNode("\n                    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("span");
          var el3 = dom.createTextNode("Basic Usage");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("span");
          dom.setAttribute(el2,"flex","");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("                ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, block = hooks.block;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var morph0 = dom.createMorphAt(dom.childAt(fragment, [1]),5,5);
          block(env, morph0, context, "md-button", [], {"action": "showSource", "layoutType": "row", "layout-align": "center center", "style": "min-width: 72px;"}, child0, null);
          return fragment;
        }
      };
    }());
    var child1 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.0",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Button");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child2 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.0",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Primary (md-noink)");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child3 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.0",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Disabled");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child4 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.0",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Warn");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child5 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.0",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Button");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child6 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.0",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Primary");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child7 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.0",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Disabled");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child8 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.0",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Warn");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child9 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.0",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, inline = hooks.inline;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var morph0 = dom.createMorphAt(fragment,1,1,contextualElement);
          inline(env, morph0, context, "md-icon", [], {"md-svg-src": "images/icons/cake.svg"});
          return fragment;
        }
      };
    }());
    var child10 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.0",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, inline = hooks.inline;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var morph0 = dom.createMorphAt(fragment,1,1,contextualElement);
          inline(env, morph0, context, "md-icon", [], {"md-svg-src": "images/icons/android.svg"});
          return fragment;
        }
      };
    }());
    var child11 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.0",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, inline = hooks.inline;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var morph0 = dom.createMorphAt(fragment,1,1,contextualElement);
          inline(env, morph0, context, "md-icon", [], {"md-svg-src": "images/icons/ic_comment_24px.svg"});
          return fragment;
        }
      };
    }());
    var child12 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.0",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, inline = hooks.inline;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var morph0 = dom.createMorphAt(fragment,1,1,contextualElement);
          inline(env, morph0, context, "md-icon", [], {"md-svg-src": "images/icons/ic_people_24px.svg"});
          return fragment;
        }
      };
    }());
    var child13 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.0",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, inline = hooks.inline;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var morph0 = dom.createMorphAt(fragment,1,1,contextualElement);
          inline(env, morph0, context, "md-icon", [], {"md-svg-src": "images/icons/cake.svg"});
          return fragment;
        }
      };
    }());
    var child14 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.0",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, inline = hooks.inline;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var morph0 = dom.createMorphAt(fragment,1,1,contextualElement);
          inline(env, morph0, context, "md-icon", [], {"md-svg-src": "images/icons/android.svg", "style": "color: greenyellow;"});
          return fragment;
        }
      };
    }());
    var child15 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.0",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Default\n                                                                                Link");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child16 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.0",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                                                                                Primary\n                                                                                Link");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child17 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.0",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Default Button");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child18 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.0",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Primary Hue 1");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child19 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.0",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Warn Hue 2");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child20 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.0",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Accent");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child21 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.0",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Accent Hue 1");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child22 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.0",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, inline = hooks.inline;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var morph0 = dom.createMorphAt(fragment,1,1,contextualElement);
          inline(env, morph0, context, "md-icon", [], {"md-svg-icon": "images/icons/menu.svg"});
          return fragment;
        }
      };
    }());
    var child23 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.0",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, inline = hooks.inline;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var morph0 = dom.createMorphAt(fragment,1,1,contextualElement);
          inline(env, morph0, context, "md-icon", [], {"md-svg-icon": "images/icons/favorite.svg", "style": "color: greenyellow;"});
          return fragment;
        }
      };
    }());
    var child24 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.0",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, inline = hooks.inline;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var morph0 = dom.createMorphAt(fragment,1,1,contextualElement);
          inline(env, morph0, context, "md-icon", [], {"md-svg-icon": "images/icons/more_vert.svg"});
          return fragment;
        }
      };
    }());
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.0",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","doc-content");
        dom.setAttribute(el1,"layout","column");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"flex","");
        dom.setAttribute(el2,"layout","column");
        var el3 = dom.createTextNode("\n\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("section");
        var el4 = dom.createTextNode("\n\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("demo-include");
        dom.setAttribute(el4,"class","buttondemoBasicUsage");
        var el5 = dom.createTextNode("\n\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","demo-content buttonsDemo1");
        var el6 = dom.createTextNode("\n\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6,"class","display-content");
        var el7 = dom.createTextNode("\n");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("md-content");
        var el8 = dom.createTextNode("\n\n    ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("section");
        dom.setAttribute(el8,"layout","row");
        dom.setAttribute(el8,"layout-sm","column");
        dom.setAttribute(el8,"layout-align","center center");
        var el9 = dom.createTextNode("\n        ");
        dom.appendChild(el8, el9);
        var el9 = dom.createComment("");
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n        ");
        dom.appendChild(el8, el9);
        var el9 = dom.createComment("");
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n        ");
        dom.appendChild(el8, el9);
        var el9 = dom.createComment("");
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n        ");
        dom.appendChild(el8, el9);
        var el9 = dom.createComment("");
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n    ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n\n    ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("section");
        dom.setAttribute(el8,"layout","row");
        dom.setAttribute(el8,"layout-sm","column");
        dom.setAttribute(el8,"layout-align","center center");
        var el9 = dom.createTextNode("\n        ");
        dom.appendChild(el8, el9);
        var el9 = dom.createComment("");
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n        ");
        dom.appendChild(el8, el9);
        var el9 = dom.createComment("");
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n        ");
        dom.appendChild(el8, el9);
        var el9 = dom.createComment("");
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n        ");
        dom.appendChild(el8, el9);
        var el9 = dom.createComment("");
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n        ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("div");
        dom.setAttribute(el9,"class","label");
        var el10 = dom.createTextNode("raised");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n    ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n\n    ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("section");
        dom.setAttribute(el8,"layout","row");
        dom.setAttribute(el8,"layout-sm","column");
        dom.setAttribute(el8,"layout-align","center center");
        var el9 = dom.createTextNode("\n");
        dom.appendChild(el8, el9);
        var el9 = dom.createComment("");
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n");
        dom.appendChild(el8, el9);
        var el9 = dom.createComment("");
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n");
        dom.appendChild(el8, el9);
        var el9 = dom.createComment("");
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n");
        dom.appendChild(el8, el9);
        var el9 = dom.createComment("");
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n");
        dom.appendChild(el8, el9);
        var el9 = dom.createComment("");
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n");
        dom.appendChild(el8, el9);
        var el9 = dom.createComment("");
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n        ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("div");
        dom.setAttribute(el9,"class","label");
        var el10 = dom.createTextNode("FAB");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n    ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n\n    ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("section");
        dom.setAttribute(el8,"layout","row");
        dom.setAttribute(el8,"layout-sm","column");
        dom.setAttribute(el8,"layout-align","center center");
        var el9 = dom.createTextNode("\n        ");
        dom.appendChild(el8, el9);
        var el9 = dom.createComment("");
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n");
        dom.appendChild(el8, el9);
        var el9 = dom.createComment("");
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n\n        ");
        dom.appendChild(el8, el9);
        var el9 = dom.createComment("");
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n        ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("div");
        dom.setAttribute(el9,"class","label");
        var el10 = dom.createTextNode("Link vs. Button");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n    ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n\n    ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("section");
        dom.setAttribute(el8,"layout","row");
        dom.setAttribute(el8,"layout-sm","column");
        dom.setAttribute(el8,"layout-align","center center");
        var el9 = dom.createTextNode("\n        ");
        dom.appendChild(el8, el9);
        var el9 = dom.createComment("");
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n        ");
        dom.appendChild(el8, el9);
        var el9 = dom.createComment("");
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n        ");
        dom.appendChild(el8, el9);
        var el9 = dom.createComment("");
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n        ");
        dom.appendChild(el8, el9);
        var el9 = dom.createComment("");
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n        ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("div");
        dom.setAttribute(el9,"class","label");
        var el10 = dom.createTextNode("Themed");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n    ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n\n    ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("section");
        dom.setAttribute(el8,"layout","row");
        dom.setAttribute(el8,"layout-sm","column");
        dom.setAttribute(el8,"layout-align","center center");
        var el9 = dom.createTextNode("\n");
        dom.appendChild(el8, el9);
        var el9 = dom.createComment("");
        dom.appendChild(el8, el9);
        var el9 = dom.createComment("");
        dom.appendChild(el8, el9);
        var el9 = dom.createComment("");
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n\n        ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("div");
        dom.setAttribute(el9,"class","label");
        var el10 = dom.createTextNode("Icon Button");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n    ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n\n");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                    ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n\n\n                ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n\n\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, get = hooks.get, concat = hooks.concat, attribute = hooks.attribute, block = hooks.block, inline = hooks.inline;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var element0 = dom.childAt(fragment, [0, 1, 1]);
        var element1 = dom.childAt(element0, [5, 1, 1, 1]);
        var element2 = dom.childAt(element1, [1]);
        var element3 = dom.childAt(element1, [3]);
        var element4 = dom.childAt(element1, [5]);
        var element5 = dom.childAt(element1, [7]);
        var element6 = dom.childAt(element1, [9]);
        var element7 = dom.childAt(element1, [11]);
        var morph0 = dom.createMorphAt(element0,1,1);
        var morph1 = dom.createMorphAt(element0,3,3);
        var attrMorph0 = dom.createAttrMorph(element0, 'class');
        var morph2 = dom.createMorphAt(element2,1,1);
        var morph3 = dom.createMorphAt(element2,3,3);
        var morph4 = dom.createMorphAt(element2,5,5);
        var morph5 = dom.createMorphAt(element2,7,7);
        var morph6 = dom.createMorphAt(element3,1,1);
        var morph7 = dom.createMorphAt(element3,3,3);
        var morph8 = dom.createMorphAt(element3,5,5);
        var morph9 = dom.createMorphAt(element3,7,7);
        var morph10 = dom.createMorphAt(element4,1,1);
        var morph11 = dom.createMorphAt(element4,3,3);
        var morph12 = dom.createMorphAt(element4,5,5);
        var morph13 = dom.createMorphAt(element4,7,7);
        var morph14 = dom.createMorphAt(element4,9,9);
        var morph15 = dom.createMorphAt(element4,11,11);
        var morph16 = dom.createMorphAt(element5,1,1);
        var morph17 = dom.createMorphAt(element5,3,3);
        var morph18 = dom.createMorphAt(element5,5,5);
        var morph19 = dom.createMorphAt(element6,1,1);
        var morph20 = dom.createMorphAt(element6,3,3);
        var morph21 = dom.createMorphAt(element6,5,5);
        var morph22 = dom.createMorphAt(element6,7,7);
        var morph23 = dom.createMorphAt(element7,1,1);
        var morph24 = dom.createMorphAt(element7,2,2);
        var morph25 = dom.createMorphAt(element7,3,3);
        attribute(env, attrMorph0, element0, "class", concat(env, ["demo-container md-whiteframe-z1 ", get(env, context, "showSourceClass")]));
        block(env, morph0, context, "md-toolbar", [], {"classNames": "demo-toolbar"}, child0, null);
        inline(env, morph1, context, "code-content", [], {"sourceFiles": get(env, context, "sourceFiles"), "showSource": get(env, context, "showSource")});
        block(env, morph2, context, "md-button", [], {}, child1, null);
        block(env, morph3, context, "md-button", [], {"mdNoInk": "true", "classNames": "md-primary"}, child2, null);
        block(env, morph4, context, "md-button", [], {"disabled": "true", "classNames": "md-primary"}, child3, null);
        block(env, morph5, context, "md-button", [], {"class": "md-warn"}, child4, null);
        block(env, morph6, context, "md-button", [], {"class": "md-raised"}, child5, null);
        block(env, morph7, context, "md-button", [], {"class": "md-raised md-primary"}, child6, null);
        block(env, morph8, context, "md-button", [], {"disabled": "true", "class": "md-raised md-primary"}, child7, null);
        block(env, morph9, context, "md-button", [], {"class": "md-raised md-warn"}, child8, null);
        block(env, morph10, context, "md-button", [], {"class": "md-fab", "aria-label": "Eat cake"}, child9, null);
        block(env, morph11, context, "md-button", [], {"class": "md-fab md-primary", "aria-label": "Use Android"}, child10, null);
        block(env, morph12, context, "md-button", [], {"class": "md-fab", "disabled": "true", "aria-label": "Comment"}, child11, null);
        block(env, morph13, context, "md-button", [], {"class": "md-fab md-primary md-hue-2", "aria-label": "Profile"}, child12, null);
        block(env, morph14, context, "md-button", [], {"class": "md-fab md-mini", "aria-label": "Eat cake"}, child13, null);
        block(env, morph15, context, "md-button", [], {"class": "md-fab md-mini md-primary", "aria-label": "Use Android"}, child14, null);
        block(env, morph16, context, "md-button", [], {"tagName": "a", "href": "http://www.emberjs.com", "target": "_blank"}, child15, null);
        block(env, morph17, context, "md-button", [], {"tagName": "a", "class": "md-primary", "href": "http://www.emberjs.com", "target": "_blank"}, child16, null);
        block(env, morph18, context, "md-button", [], {}, child17, null);
        block(env, morph19, context, "md-button", [], {"class": "md-primary md-hue-1"}, child18, null);
        block(env, morph20, context, "md-button", [], {"class": "md-warn md-raised md-hue-2"}, child19, null);
        block(env, morph21, context, "md-button", [], {"class": "md-accent"}, child20, null);
        block(env, morph22, context, "md-button", [], {"class": "md-accent md-raised md-hue-1"}, child21, null);
        block(env, morph23, context, "md-button", [], {"class": "md-icon-button md-primary"}, child22, null);
        block(env, morph24, context, "md-button", [], {"class": "md-icon-button md-accent"}, child23, null);
        block(env, morph25, context, "md-button", [], {"class": "md-icon-button"}, child24, null);
        return fragment;
      }
    };
  }()));

});
define('dummy/templates/card', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      var child0 = (function() {
        return {
          isHTMLBars: true,
          revision: "Ember@1.11.0",
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n                        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("span");
            var el2 = dom.createTextNode("Source");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, inline = hooks.inline;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            var morph0 = dom.createMorphAt(fragment,1,1,contextualElement);
            inline(env, morph0, context, "md-icon", [], {"md-svg-src": "images/icons/ic_visibility_24px.svg", "style": "margin: 0 4px 0 0;"});
            return fragment;
          }
        };
      }());
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.0",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1,"class","md-toolbar-tools");
          var el2 = dom.createTextNode("\n                    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("span");
          var el3 = dom.createTextNode("Basic Usage");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("span");
          dom.setAttribute(el2,"flex","");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("                ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, block = hooks.block;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var morph0 = dom.createMorphAt(dom.childAt(fragment, [1]),5,5);
          block(env, morph0, context, "md-button", [], {"action": "showSource", "layoutType": "row", "layout-align": "center center", "style": "min-width: 72px;"}, child0, null);
          return fragment;
        }
      };
    }());
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.0",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","doc-content");
        dom.setAttribute(el1,"layout","column");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"flex","");
        dom.setAttribute(el2,"layout","column");
        var el3 = dom.createTextNode("\n\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("section");
        var el4 = dom.createTextNode("\n\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("demo-include");
        dom.setAttribute(el4,"class","buttondemoBasicUsage");
        var el5 = dom.createTextNode("\n\n\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","demo-content cardDemo1");
        var el6 = dom.createTextNode("\n\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6,"class","display-content");
        var el7 = dom.createTextNode("\n");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("md-content");
        var el8 = dom.createTextNode("\n\n    ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("md-card");
        var el9 = dom.createTextNode("\n        ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("img");
        dom.setAttribute(el9,"src","images/washedout.png");
        dom.setAttribute(el9,"alt","Washed Out");
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n        ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("md-card-content");
        var el10 = dom.createTextNode("\n            ");
        dom.appendChild(el9, el10);
        var el10 = dom.createElement("h2");
        dom.setAttribute(el10,"class","md-title");
        var el11 = dom.createTextNode("Paracosm");
        dom.appendChild(el10, el11);
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("\n\n            ");
        dom.appendChild(el9, el10);
        var el10 = dom.createElement("p");
        var el11 = dom.createTextNode("\n                The titles of Washed Out's breakthrough song and the first single from Paracosm\n                share the\n                two most important words in Ernest Greene's musical language: feel it. It's a\n                simple request, as well...\n            ");
        dom.appendChild(el10, el11);
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("\n        ");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n    ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n\n    ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("md-card");
        var el9 = dom.createTextNode("\n        ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("img");
        dom.setAttribute(el9,"src","images/washedout.png");
        dom.setAttribute(el9,"alt","Washed Out");
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n        ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("md-card-content");
        var el10 = dom.createTextNode("\n            ");
        dom.appendChild(el9, el10);
        var el10 = dom.createElement("h2");
        dom.setAttribute(el10,"class","md-title");
        var el11 = dom.createTextNode("Paracosm");
        dom.appendChild(el10, el11);
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("\n\n            ");
        dom.appendChild(el9, el10);
        var el10 = dom.createElement("p");
        var el11 = dom.createTextNode("\n                The titles of Washed Out's breakthrough song and the first single from Paracosm\n                share the\n                two most important words in Ernest Greene's musical language: feel it. It's a\n                simple request, as well...\n            ");
        dom.appendChild(el10, el11);
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("\n        ");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n    ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n\n    ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("md-card");
        var el9 = dom.createTextNode("\n        ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("img");
        dom.setAttribute(el9,"src","images/washedout.png");
        dom.setAttribute(el9,"alt","Washed Out");
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n        ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("md-card-content");
        var el10 = dom.createTextNode("\n            ");
        dom.appendChild(el9, el10);
        var el10 = dom.createElement("h2");
        dom.setAttribute(el10,"class","md-title");
        var el11 = dom.createTextNode("Paracosm");
        dom.appendChild(el10, el11);
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("\n\n            ");
        dom.appendChild(el9, el10);
        var el10 = dom.createElement("p");
        var el11 = dom.createTextNode("\n                The titles of Washed Out's breakthrough song and the first single from Paracosm\n                share the\n                two most important words in Ernest Greene's musical language: feel it. It's a\n                simple request, as well...\n            ");
        dom.appendChild(el10, el11);
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("\n        ");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n    ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n\n\n");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                    ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, get = hooks.get, concat = hooks.concat, attribute = hooks.attribute, block = hooks.block, inline = hooks.inline;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var element0 = dom.childAt(fragment, [0, 1, 1]);
        var morph0 = dom.createMorphAt(element0,1,1);
        var morph1 = dom.createMorphAt(element0,3,3);
        var attrMorph0 = dom.createAttrMorph(element0, 'class');
        attribute(env, attrMorph0, element0, "class", concat(env, ["demo-container md-whiteframe-z1 ", get(env, context, "showSourceClass")]));
        block(env, morph0, context, "md-toolbar", [], {"classNames": "demo-toolbar"}, child0, null);
        inline(env, morph1, context, "code-content", [], {"sourceFiles": get(env, context, "sourceFiles"), "showSource": get(env, context, "showSource")});
        return fragment;
      }
    };
  }()));

});
define('dummy/templates/checkbox', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      var child0 = (function() {
        return {
          isHTMLBars: true,
          revision: "Ember@1.11.0",
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n                        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("span");
            var el2 = dom.createTextNode("Source");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, inline = hooks.inline;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            var morph0 = dom.createMorphAt(fragment,1,1,contextualElement);
            inline(env, morph0, context, "md-icon", [], {"md-svg-src": "images/icons/ic_visibility_24px.svg", "style": "margin: 0 4px 0 0;"});
            return fragment;
          }
        };
      }());
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.0",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1,"class","md-toolbar-tools");
          var el2 = dom.createTextNode("\n                    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("span");
          var el3 = dom.createTextNode("Basic Usage");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("span");
          dom.setAttribute(el2,"flex","");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("                ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, block = hooks.block;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var morph0 = dom.createMorphAt(dom.childAt(fragment, [1]),5,5);
          block(env, morph0, context, "md-button", [], {"action": "showSource", "layoutType": "row", "layout-align": "center center", "style": "min-width: 72px;"}, child0, null);
          return fragment;
        }
      };
    }());
    var child1 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.0",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        Checkbox 1: ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, content = hooks.content;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var morph0 = dom.createMorphAt(fragment,1,1,contextualElement);
          content(env, morph0, context, "data.cb1");
          return fragment;
        }
      };
    }());
    var child2 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.0",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        Checkbox 2 (md-warn): ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, content = hooks.content;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var morph0 = dom.createMorphAt(fragment,1,1,contextualElement);
          content(env, morph0, context, "data.cb2");
          return fragment;
        }
      };
    }());
    var child3 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.0",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        Checkbox: Disabled\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child4 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.0",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        Checkbox: Disabled, Checked\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child5 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.0",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        Checkbox (md-primary): No Ink\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.0",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","doc-content");
        dom.setAttribute(el1,"layout","column");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"flex","");
        dom.setAttribute(el2,"layout","column");
        var el3 = dom.createTextNode("\n\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("section");
        var el4 = dom.createTextNode("\n\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("demo-include");
        dom.setAttribute(el4,"class","buttondemoBasicUsage");
        var el5 = dom.createTextNode("\n\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","demo-content checkboxDemo1");
        var el6 = dom.createTextNode("\n");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6,"class","display-content");
        var el7 = dom.createTextNode("\n");
        dom.appendChild(el6, el7);
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n");
        dom.appendChild(el6, el7);
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n");
        dom.appendChild(el6, el7);
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n");
        dom.appendChild(el6, el7);
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n");
        dom.appendChild(el6, el7);
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n\n                ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n\n\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, get = hooks.get, concat = hooks.concat, attribute = hooks.attribute, block = hooks.block, inline = hooks.inline;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var element0 = dom.childAt(fragment, [0, 1, 1]);
        var element1 = dom.childAt(element0, [5, 1, 1]);
        var morph0 = dom.createMorphAt(element0,1,1);
        var morph1 = dom.createMorphAt(element0,3,3);
        var attrMorph0 = dom.createAttrMorph(element0, 'class');
        var morph2 = dom.createMorphAt(element1,1,1);
        var morph3 = dom.createMorphAt(element1,3,3);
        var morph4 = dom.createMorphAt(element1,5,5);
        var morph5 = dom.createMorphAt(element1,7,7);
        var morph6 = dom.createMorphAt(element1,9,9);
        attribute(env, attrMorph0, element0, "class", concat(env, ["demo-container md-whiteframe-z1 ", get(env, context, "showSourceClass")]));
        block(env, morph0, context, "md-toolbar", [], {"classNames": "demo-toolbar"}, child0, null);
        inline(env, morph1, context, "code-content", [], {"sourceFiles": get(env, context, "sourceFiles"), "showSource": get(env, context, "showSource")});
        block(env, morph2, context, "md-checkbox", [], {"checked": get(env, context, "data.cb1"), "aria-label": "Checkbox 1"}, child1, null);
        block(env, morph3, context, "md-checkbox", [], {"checked": get(env, context, "data.cb2"), "aria-label": "Checkbox 2", "trueValue": "'yup'", "falseValue": "'nope'", "class": "md-warn"}, child2, null);
        block(env, morph4, context, "md-checkbox", [], {"disabled": true, "aria-label": "Disabled checkbox", "checked": get(env, context, "data.cb3")}, child3, null);
        block(env, morph5, context, "md-checkbox", [], {"disabled": true, "aria-label": "Disabled checked checkbox", "checked": get(env, context, "data.cb4")}, child4, null);
        block(env, morph6, context, "md-checkbox", [], {"mdNoInk": true, "aria-label": "Checkbox No Ink", "checked": get(env, context, "data.cb5"), "class": "md-primary"}, child5, null);
        return fragment;
      }
    };
  }()));

});
define('dummy/templates/components/code-content', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      var child0 = (function() {
        var child0 = (function() {
          var child0 = (function() {
            var child0 = (function() {
              return {
                isHTMLBars: true,
                revision: "Ember@1.11.0",
                blockParams: 0,
                cachedFragment: null,
                hasRendered: false,
                build: function build(dom) {
                  var el0 = dom.createDocumentFragment();
                  var el1 = dom.createTextNode("                    ");
                  dom.appendChild(el0, el1);
                  var el1 = dom.createElement("md-tab-label");
                  var el2 = dom.createComment("");
                  dom.appendChild(el1, el2);
                  dom.appendChild(el0, el1);
                  var el1 = dom.createTextNode("\n");
                  dom.appendChild(el0, el1);
                  return el0;
                },
                render: function render(context, env, contextualElement) {
                  var dom = env.dom;
                  var hooks = env.hooks, content = hooks.content;
                  dom.detectNamespace(contextualElement);
                  var fragment;
                  if (env.useFragmentCache && dom.canClone) {
                    if (this.cachedFragment === null) {
                      fragment = this.build(dom);
                      if (this.hasRendered) {
                        this.cachedFragment = fragment;
                      } else {
                        this.hasRendered = true;
                      }
                    }
                    if (this.cachedFragment) {
                      fragment = dom.cloneNode(this.cachedFragment, true);
                    }
                  } else {
                    fragment = this.build(dom);
                  }
                  var morph0 = dom.createMorphAt(dom.childAt(fragment, [1]),0,0);
                  content(env, morph0, context, "file.name");
                  return fragment;
                }
              };
            }());
            return {
              isHTMLBars: true,
              revision: "Ember@1.11.0",
              blockParams: 1,
              cachedFragment: null,
              hasRendered: false,
              build: function build(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createComment("");
                dom.appendChild(el0, el1);
                return el0;
              },
              render: function render(context, env, contextualElement, blockArguments) {
                var dom = env.dom;
                var hooks = env.hooks, set = hooks.set, get = hooks.get, block = hooks.block;
                dom.detectNamespace(contextualElement);
                var fragment;
                if (env.useFragmentCache && dom.canClone) {
                  if (this.cachedFragment === null) {
                    fragment = this.build(dom);
                    if (this.hasRendered) {
                      this.cachedFragment = fragment;
                    } else {
                      this.hasRendered = true;
                    }
                  }
                  if (this.cachedFragment) {
                    fragment = dom.cloneNode(this.cachedFragment, true);
                  }
                } else {
                  fragment = this.build(dom);
                }
                var morph0 = dom.createMorphAt(fragment,0,0,contextualElement);
                dom.insertBoundary(fragment, null);
                dom.insertBoundary(fragment, 0);
                set(env, context, "file", blockArguments[0]);
                block(env, morph0, context, "md-tab", [], {"label": get(env, context, "file.name")}, child0, null);
                return fragment;
              }
            };
          }());
          return {
            isHTMLBars: true,
            revision: "Ember@1.11.0",
            blockParams: 0,
            cachedFragment: null,
            hasRendered: false,
            build: function build(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              return el0;
            },
            render: function render(context, env, contextualElement) {
              var dom = env.dom;
              var hooks = env.hooks, get = hooks.get, block = hooks.block;
              dom.detectNamespace(contextualElement);
              var fragment;
              if (env.useFragmentCache && dom.canClone) {
                if (this.cachedFragment === null) {
                  fragment = this.build(dom);
                  if (this.hasRendered) {
                    this.cachedFragment = fragment;
                  } else {
                    this.hasRendered = true;
                  }
                }
                if (this.cachedFragment) {
                  fragment = dom.cloneNode(this.cachedFragment, true);
                }
              } else {
                fragment = this.build(dom);
              }
              var morph0 = dom.createMorphAt(fragment,0,0,contextualElement);
              dom.insertBoundary(fragment, null);
              dom.insertBoundary(fragment, 0);
              block(env, morph0, context, "each", [get(env, context, "sourceFiles")], {}, child0, null);
              return fragment;
            }
          };
        }());
        var child1 = (function() {
          var child0 = (function() {
            var child0 = (function() {
              return {
                isHTMLBars: true,
                revision: "Ember@1.11.0",
                blockParams: 0,
                cachedFragment: null,
                hasRendered: false,
                build: function build(dom) {
                  var el0 = dom.createDocumentFragment();
                  var el1 = dom.createTextNode("                    ");
                  dom.appendChild(el0, el1);
                  var el1 = dom.createElement("md-content");
                  dom.setAttribute(el1,"md-scroll-y","");
                  dom.setAttribute(el1,"class","demo-source-container");
                  var el2 = dom.createTextNode("\n                        ");
                  dom.appendChild(el1, el2);
                  var el2 = dom.createComment("");
                  dom.appendChild(el1, el2);
                  var el2 = dom.createTextNode("\n                    ");
                  dom.appendChild(el1, el2);
                  dom.appendChild(el0, el1);
                  var el1 = dom.createTextNode("\n");
                  dom.appendChild(el0, el1);
                  return el0;
                },
                render: function render(context, env, contextualElement) {
                  var dom = env.dom;
                  var hooks = env.hooks, get = hooks.get, inline = hooks.inline;
                  dom.detectNamespace(contextualElement);
                  var fragment;
                  if (env.useFragmentCache && dom.canClone) {
                    if (this.cachedFragment === null) {
                      fragment = this.build(dom);
                      if (this.hasRendered) {
                        this.cachedFragment = fragment;
                      } else {
                        this.hasRendered = true;
                      }
                    }
                    if (this.cachedFragment) {
                      fragment = dom.cloneNode(this.cachedFragment, true);
                    }
                  } else {
                    fragment = this.build(dom);
                  }
                  var morph0 = dom.createMorphAt(dom.childAt(fragment, [1]),1,1);
                  inline(env, morph0, context, "code-snippet", [], {"name": get(env, context, "file.content")});
                  return fragment;
                }
              };
            }());
            return {
              isHTMLBars: true,
              revision: "Ember@1.11.0",
              blockParams: 1,
              cachedFragment: null,
              hasRendered: false,
              build: function build(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createComment("");
                dom.appendChild(el0, el1);
                return el0;
              },
              render: function render(context, env, contextualElement, blockArguments) {
                var dom = env.dom;
                var hooks = env.hooks, set = hooks.set, block = hooks.block;
                dom.detectNamespace(contextualElement);
                var fragment;
                if (env.useFragmentCache && dom.canClone) {
                  if (this.cachedFragment === null) {
                    fragment = this.build(dom);
                    if (this.hasRendered) {
                      this.cachedFragment = fragment;
                    } else {
                      this.hasRendered = true;
                    }
                  }
                  if (this.cachedFragment) {
                    fragment = dom.cloneNode(this.cachedFragment, true);
                  }
                } else {
                  fragment = this.build(dom);
                }
                var morph0 = dom.createMorphAt(fragment,0,0,contextualElement);
                dom.insertBoundary(fragment, null);
                dom.insertBoundary(fragment, 0);
                set(env, context, "file", blockArguments[0]);
                block(env, morph0, context, "md-tab-content", [], {}, child0, null);
                return fragment;
              }
            };
          }());
          return {
            isHTMLBars: true,
            revision: "Ember@1.11.0",
            blockParams: 0,
            cachedFragment: null,
            hasRendered: false,
            build: function build(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              return el0;
            },
            render: function render(context, env, contextualElement) {
              var dom = env.dom;
              var hooks = env.hooks, get = hooks.get, block = hooks.block;
              dom.detectNamespace(contextualElement);
              var fragment;
              if (env.useFragmentCache && dom.canClone) {
                if (this.cachedFragment === null) {
                  fragment = this.build(dom);
                  if (this.hasRendered) {
                    this.cachedFragment = fragment;
                  } else {
                    this.hasRendered = true;
                  }
                }
                if (this.cachedFragment) {
                  fragment = dom.cloneNode(this.cachedFragment, true);
                }
              } else {
                fragment = this.build(dom);
              }
              var morph0 = dom.createMorphAt(fragment,0,0,contextualElement);
              dom.insertBoundary(fragment, null);
              dom.insertBoundary(fragment, 0);
              block(env, morph0, context, "each", [get(env, context, "sourceFiles")], {}, child0, null);
              return fragment;
            }
          };
        }());
        return {
          isHTMLBars: true,
          revision: "Ember@1.11.0",
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, block = hooks.block;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            var morph0 = dom.createMorphAt(fragment,0,0,contextualElement);
            var morph1 = dom.createMorphAt(fragment,1,1,contextualElement);
            dom.insertBoundary(fragment, null);
            dom.insertBoundary(fragment, 0);
            block(env, morph0, context, "md-tabs-wrapper", [], {}, child0, null);
            block(env, morph1, context, "md-tabs-content-wrapper", [], {}, child1, null);
            return fragment;
          }
        };
      }());
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.0",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, block = hooks.block;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var morph0 = dom.createMorphAt(fragment,0,0,contextualElement);
          dom.insertBoundary(fragment, null);
          dom.insertBoundary(fragment, 0);
          block(env, morph0, context, "md-tabs", [], {"class": "demo-source-tabs", "md-border-bottom": ""}, child0, null);
          return fragment;
        }
      };
    }());
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.0",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, get = hooks.get, block = hooks.block;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var morph0 = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, null);
        dom.insertBoundary(fragment, 0);
        block(env, morph0, context, "if", [get(env, context, "showSource")], {}, child0, null);
        return fragment;
      }
    };
  }()));

});
define('dummy/templates/components/code-snippet', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.0",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, content = hooks.content;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var morph0 = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, 0);
        content(env, morph0, context, "source");
        return fragment;
      }
    };
  }()));

});
define('dummy/templates/content', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      var child0 = (function() {
        return {
          isHTMLBars: true,
          revision: "Ember@1.11.0",
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n                        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("span");
            var el2 = dom.createTextNode("Source");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, inline = hooks.inline;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            var morph0 = dom.createMorphAt(fragment,1,1,contextualElement);
            inline(env, morph0, context, "md-icon", [], {"md-svg-src": "images/icons/ic_visibility_24px.svg", "style": "margin: 0 4px 0 0;"});
            return fragment;
          }
        };
      }());
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.0",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1,"class","md-toolbar-tools");
          var el2 = dom.createTextNode("\n                    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("span");
          var el3 = dom.createTextNode("Basic Usage");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("span");
          dom.setAttribute(el2,"flex","");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("                ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, block = hooks.block;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var morph0 = dom.createMorphAt(dom.childAt(fragment, [1]),5,5);
          block(env, morph0, context, "md-button", [], {"action": "showSource", "layoutType": "row", "layout-align": "center center", "style": "min-width: 72px;"}, child0, null);
          return fragment;
        }
      };
    }());
    var child1 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.0",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1,"class","md-toolbar-tools");
          var el2 = dom.createTextNode("\n            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("h2");
          dom.setAttribute(el2,"class","md-flex");
          var el3 = dom.createTextNode("Toolbar: md-warn");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.0",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","doc-content");
        dom.setAttribute(el1,"layout","column");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"flex","");
        dom.setAttribute(el2,"layout","column");
        var el3 = dom.createTextNode("\n\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("section");
        var el4 = dom.createTextNode("\n\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("demo-include");
        dom.setAttribute(el4,"class","contentdemoBasicUsage");
        var el5 = dom.createTextNode("\n\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","demo-content contentDemo1");
        var el6 = dom.createTextNode("\n");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6,"class","display-content");
        dom.setAttribute(el6,"layout","column");
        dom.setAttribute(el6,"style","padding-bottom: 15px;");
        var el7 = dom.createTextNode("\n");
        dom.appendChild(el6, el7);
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n    ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("md-content");
        dom.setAttribute(el7,"class","md-padding");
        dom.setAttribute(el7,"style","height: 600px;padding: 24px;");
        var el8 = dom.createTextNode("\n        ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("p");
        var el9 = dom.createTextNode("Lorem ipsum dolor sit amet, ne quod novum mei. Sea omnium invenire mediocrem at, in\n           lobortis conclusionemque nam. Ne deleniti appetere reprimique pro, inani labitur\n           disputationi te sed. At vix sale omnesque, id pro labitur reformidans accommodare, cum\n           labores honestatis eu. Nec quem lucilius in, eam praesent reformidans no. Sed laudem\n           aliquam ne.");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n\n\n        ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("p");
        var el9 = dom.createTextNode("\n            Facete delenit argumentum cum at. Pro rebum nostrum contentiones ad. Mel exerci tritani\n            maiorum at, mea te audire phaedrum, mel et nibh aliquam. Malis causae equidem vel eu.\n            Noster melius vis ea, duis alterum oporteat ea sea. Per cu vide munere fierent.\n        ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n\n        ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("p");
        var el9 = dom.createTextNode("\n            Ad sea dolor accusata consequuntur. Sit facete convenire reprehendunt et. Usu cu nonumy\n            dissentiet, mei choro omnes fuisset ad. Te qui docendi accusam efficiantur, doming\n            noster prodesset eam ei. In vel posse movet, ut convenire referrentur eum, ceteros\n            singulis intellegam eu sit.\n        ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n\n        ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("p");
        var el9 = dom.createTextNode("\n            Sit saepe quaestio reprimique id, duo no congue nominati, cum id nobis facilisi. No est\n            laoreet dissentias, idque consectetuer eam id. Clita possim assueverit cu his, solum\n            virtute recteque et cum. Vel cu luptatum signiferumque, mel eu brute nostro senserit.\n            Blandit euripidis consequat ex mei, atqui torquatos id cum, meliore luptatum ut usu. Cu\n            zril perpetua gubergren pri. Accusamus rationibus instructior ei pro, eu nullam\n            principes qui, reque justo omnes et quo.\n        ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n\n        ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("p");
        var el9 = dom.createTextNode("\n            Sint unum eam id. At sit fastidii theophrastus, mutat senserit repudiare et has. Atqui\n            appareat repudiare ad nam, et ius alii incorrupte. Alii nullam libris his ei, meis\n            aeterno at eum. Ne aeque tincidunt duo. In audire malorum mel, tamquam efficiantur has\n            te.\n        ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n\n        ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("p");
        var el9 = dom.createTextNode("\n            Qui utamur tacimates quaestio ad, quod graece omnium ius ut. Pri ut vero debitis\n            interpretaris, qui cu mentitum adipiscing disputationi. Voluptatum mediocritatem quo ut.\n            Fabulas dolorem ei has, quem molestie persequeris et sit.\n        ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n\n        ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("p");
        var el9 = dom.createTextNode("\n            Est in vivendum comprehensam conclusionemque, alia cetero iriure no usu, te cibo\n            deterruisset pro. Ludus epicurei quo id, ex cum iudicabit intellegebat. Ex modo\n            deseruisse quo, mel noster menandri sententiae ea, duo et tritani malorum recteque.\n            Nullam suscipit partiendo nec id, indoctum vulputate per ex. Et has enim habemus\n            tibique. Cu latine electram cum, ridens propriae intellegat eu mea.\n        ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n\n        ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("p");
        var el9 = dom.createTextNode("\n            Duo at aliquid mnesarchum, nec ne impetus hendrerit. Ius id aeterno debitis atomorum, et\n            sed feugait voluptua, brute tibique no vix. Eos modo esse ex, ei omittam imperdiet pro.\n            Vel assum albucius incorrupte no. Vim viris prompta repudiare ne, vel ut viderer\n            scripserit, dicant appetere argumentum mel ea. Eripuit feugait tincidunt pri ne, cu\n            facilisi molestiae usu.\n        ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n\n        ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("p");
        var el9 = dom.createTextNode("\n            Qui utamur tacimates quaestio ad, quod graece omnium ius ut. Pri ut vero debitis\n            interpretaris, qui cu mentitum adipiscing disputationi. Voluptatum mediocritatem quo ut.\n            Fabulas dolorem ei has, quem molestie persequeris et sit.\n        ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n\n        ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("p");
        var el9 = dom.createTextNode("\n            Est in vivendum comprehensam conclusionemque, alia cetero iriure no usu, te cibo\n            deterruisset pro. Ludus epicurei quo id, ex cum iudicabit intellegebat. Ex modo\n            deseruisse quo, mel noster menandri sententiae ea, duo et tritani malorum recteque.\n            Nullam suscipit partiendo nec id, indoctum vulputate per ex. Et has enim habemus\n            tibique. Cu latine electram cum, ridens propriae intellegat eu mea.\n        ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n\n        ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("p");
        var el9 = dom.createTextNode("\n            Duo at aliquid mnesarchum, nec ne impetus hendrerit. Ius id aeterno debitis atomorum, et\n            sed feugait voluptua, brute tibique no vix. Eos modo esse ex, ei omittam imperdiet pro.\n            Vel assum albucius incorrupte no. Vim viris prompta repudiare ne, vel ut viderer\n            scripserit, dicant appetere argumentum mel ea. Eripuit feugait tincidunt pri ne, cu\n            facilisi molestiae usu.\n        ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n\n    ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n\n                ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, get = hooks.get, concat = hooks.concat, attribute = hooks.attribute, block = hooks.block, inline = hooks.inline;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var element0 = dom.childAt(fragment, [0, 1, 1]);
        var morph0 = dom.createMorphAt(element0,1,1);
        var morph1 = dom.createMorphAt(element0,3,3);
        var attrMorph0 = dom.createAttrMorph(element0, 'class');
        var morph2 = dom.createMorphAt(dom.childAt(element0, [5, 1, 1]),1,1);
        attribute(env, attrMorph0, element0, "class", concat(env, ["demo-container md-whiteframe-z1 ", get(env, context, "showSourceClass")]));
        block(env, morph0, context, "md-toolbar", [], {"classNames": "demo-toolbar"}, child0, null);
        inline(env, morph1, context, "code-content", [], {"sourceFiles": get(env, context, "sourceFiles"), "showSource": get(env, context, "showSource")});
        block(env, morph2, context, "md-toolbar", [], {"class": "md-warn"}, child1, null);
        return fragment;
      }
    };
  }()));

});
define('dummy/templates/divider', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      var child0 = (function() {
        return {
          isHTMLBars: true,
          revision: "Ember@1.11.0",
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n                        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("span");
            var el2 = dom.createTextNode("Source");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, inline = hooks.inline;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            var morph0 = dom.createMorphAt(fragment,1,1,contextualElement);
            inline(env, morph0, context, "md-icon", [], {"md-svg-src": "images/icons/ic_visibility_24px.svg", "style": "margin: 0 4px 0 0;"});
            return fragment;
          }
        };
      }());
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.0",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1,"class","md-toolbar-tools");
          var el2 = dom.createTextNode("\n                    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("span");
          var el3 = dom.createTextNode("Basic Usage");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("span");
          dom.setAttribute(el2,"flex","");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("                ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, block = hooks.block;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var morph0 = dom.createMorphAt(dom.childAt(fragment, [1]),5,5);
          block(env, morph0, context, "md-button", [], {"action": "showSource", "layoutType": "row", "layout-align": "center center", "style": "min-width: 72px;"}, child0, null);
          return fragment;
        }
      };
    }());
    var child1 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.0",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("h2");
          dom.setAttribute(el1,"class","md-toolbar-tools");
          var el2 = dom.createTextNode("\n          ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("span");
          var el3 = dom.createTextNode("Full Bleed");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child2 = (function() {
      var child0 = (function() {
        var child0 = (function() {
          return {
            isHTMLBars: true,
            revision: "Ember@1.11.0",
            blockParams: 0,
            cachedFragment: null,
            hasRendered: false,
            build: function build(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("              ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("div");
              dom.setAttribute(el1,"class","md-list-item-text");
              var el2 = dom.createTextNode("\n                  ");
              dom.appendChild(el1, el2);
              var el2 = dom.createElement("h3");
              var el3 = dom.createComment("");
              dom.appendChild(el2, el3);
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("\n                  ");
              dom.appendChild(el1, el2);
              var el2 = dom.createElement("h4");
              var el3 = dom.createComment("");
              dom.appendChild(el2, el3);
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("\n\n                  ");
              dom.appendChild(el1, el2);
              var el2 = dom.createElement("p");
              var el3 = dom.createTextNode("\n                    ");
              dom.appendChild(el2, el3);
              var el3 = dom.createComment("");
              dom.appendChild(el2, el3);
              var el3 = dom.createTextNode("\n                  ");
              dom.appendChild(el2, el3);
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("\n              ");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n              ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("md-divider");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            render: function render(context, env, contextualElement) {
              var dom = env.dom;
              var hooks = env.hooks, content = hooks.content;
              dom.detectNamespace(contextualElement);
              var fragment;
              if (env.useFragmentCache && dom.canClone) {
                if (this.cachedFragment === null) {
                  fragment = this.build(dom);
                  if (this.hasRendered) {
                    this.cachedFragment = fragment;
                  } else {
                    this.hasRendered = true;
                  }
                }
                if (this.cachedFragment) {
                  fragment = dom.cloneNode(this.cachedFragment, true);
                }
              } else {
                fragment = this.build(dom);
              }
              var element2 = dom.childAt(fragment, [1]);
              var morph0 = dom.createMorphAt(dom.childAt(element2, [1]),0,0);
              var morph1 = dom.createMorphAt(dom.childAt(element2, [3]),0,0);
              var morph2 = dom.createMorphAt(dom.childAt(element2, [5]),1,1);
              content(env, morph0, context, "item.what");
              content(env, morph1, context, "item.who");
              content(env, morph2, context, "item.notes");
              return fragment;
            }
          };
        }());
        return {
          isHTMLBars: true,
          revision: "Ember@1.11.0",
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, block = hooks.block;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            var morph0 = dom.createMorphAt(fragment,0,0,contextualElement);
            dom.insertBoundary(fragment, null);
            dom.insertBoundary(fragment, 0);
            block(env, morph0, context, "md-list-item", [], {"class": "md-3-line"}, child0, null);
            return fragment;
          }
        };
      }());
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.0",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, get = hooks.get, block = hooks.block;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var morph0 = dom.createMorphAt(fragment,0,0,contextualElement);
          dom.insertBoundary(fragment, null);
          dom.insertBoundary(fragment, 0);
          block(env, morph0, context, "each", [get(env, context, "messages")], {"keyword": "item"}, child0, null);
          return fragment;
        }
      };
    }());
    var child3 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.0",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("h2");
          dom.setAttribute(el1,"class","md-toolbar-tools");
          var el2 = dom.createTextNode("\n          ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("span");
          var el3 = dom.createTextNode("Inset");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child4 = (function() {
      var child0 = (function() {
        var child0 = (function() {
          return {
            isHTMLBars: true,
            revision: "Ember@1.11.0",
            blockParams: 0,
            cachedFragment: null,
            hasRendered: false,
            build: function build(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("              ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("img");
              dom.setAttribute(el1,"class","face");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n              ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("div");
              dom.setAttribute(el1,"class","md-list-item-text");
              var el2 = dom.createTextNode("\n                  ");
              dom.appendChild(el1, el2);
              var el2 = dom.createElement("h3");
              var el3 = dom.createComment("");
              dom.appendChild(el2, el3);
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("\n                  ");
              dom.appendChild(el1, el2);
              var el2 = dom.createElement("h4");
              var el3 = dom.createComment("");
              dom.appendChild(el2, el3);
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("\n\n                  ");
              dom.appendChild(el1, el2);
              var el2 = dom.createElement("p");
              var el3 = dom.createTextNode("\n                    ");
              dom.appendChild(el2, el3);
              var el3 = dom.createComment("");
              dom.appendChild(el2, el3);
              var el3 = dom.createTextNode("\n                  ");
              dom.appendChild(el2, el3);
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("\n              ");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n              ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("md-divider");
              dom.setAttribute(el1,"md-inset","");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            render: function render(context, env, contextualElement) {
              var dom = env.dom;
              var hooks = env.hooks, get = hooks.get, concat = hooks.concat, attribute = hooks.attribute, content = hooks.content;
              dom.detectNamespace(contextualElement);
              var fragment;
              if (env.useFragmentCache && dom.canClone) {
                if (this.cachedFragment === null) {
                  fragment = this.build(dom);
                  if (this.hasRendered) {
                    this.cachedFragment = fragment;
                  } else {
                    this.hasRendered = true;
                  }
                }
                if (this.cachedFragment) {
                  fragment = dom.cloneNode(this.cachedFragment, true);
                }
              } else {
                fragment = this.build(dom);
              }
              var element0 = dom.childAt(fragment, [1]);
              var element1 = dom.childAt(fragment, [3]);
              var attrMorph0 = dom.createAttrMorph(element0, 'src');
              var attrMorph1 = dom.createAttrMorph(element0, 'alt');
              var morph0 = dom.createMorphAt(dom.childAt(element1, [1]),0,0);
              var morph1 = dom.createMorphAt(dom.childAt(element1, [3]),0,0);
              var morph2 = dom.createMorphAt(dom.childAt(element1, [5]),1,1);
              attribute(env, attrMorph0, element0, "src", concat(env, [get(env, context, "item.face")]));
              attribute(env, attrMorph1, element0, "alt", concat(env, [get(env, context, "item.who")]));
              content(env, morph0, context, "item.what");
              content(env, morph1, context, "item.who");
              content(env, morph2, context, "item.notes");
              return fragment;
            }
          };
        }());
        return {
          isHTMLBars: true,
          revision: "Ember@1.11.0",
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, block = hooks.block;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            var morph0 = dom.createMorphAt(fragment,0,0,contextualElement);
            dom.insertBoundary(fragment, null);
            dom.insertBoundary(fragment, 0);
            block(env, morph0, context, "md-list-item", [], {"class": "md-3-line"}, child0, null);
            return fragment;
          }
        };
      }());
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.0",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, get = hooks.get, block = hooks.block;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var morph0 = dom.createMorphAt(fragment,0,0,contextualElement);
          dom.insertBoundary(fragment, null);
          dom.insertBoundary(fragment, 0);
          block(env, morph0, context, "each", [get(env, context, "messages")], {"keyword": "item"}, child0, null);
          return fragment;
        }
      };
    }());
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.0",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","doc-content");
        dom.setAttribute(el1,"layout","column");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"flex","");
        dom.setAttribute(el2,"layout","column");
        var el3 = dom.createTextNode("\n\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("section");
        var el4 = dom.createTextNode("\n\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("demo-include");
        dom.setAttribute(el4,"class","contentdemoBasicUsage");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","demo-content");
        var el6 = dom.createTextNode("\n\n");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6,"class","display-content");
        var el7 = dom.createTextNode("\n");
        dom.appendChild(el6, el7);
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n    ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("md-content");
        var el8 = dom.createTextNode("\n");
        dom.appendChild(el7, el8);
        var el8 = dom.createComment("");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("    ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n\n");
        dom.appendChild(el6, el7);
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n    ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("md-content");
        var el8 = dom.createTextNode("\n");
        dom.appendChild(el7, el8);
        var el8 = dom.createComment("");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("    ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n\n\n                ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n\n\n\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, get = hooks.get, concat = hooks.concat, attribute = hooks.attribute, block = hooks.block, inline = hooks.inline;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var element3 = dom.childAt(fragment, [0, 1, 1]);
        var element4 = dom.childAt(element3, [5, 1, 1]);
        var morph0 = dom.createMorphAt(element3,1,1);
        var morph1 = dom.createMorphAt(element3,3,3);
        var attrMorph0 = dom.createAttrMorph(element3, 'class');
        var morph2 = dom.createMorphAt(element4,1,1);
        var morph3 = dom.createMorphAt(dom.childAt(element4, [3]),1,1);
        var morph4 = dom.createMorphAt(element4,5,5);
        var morph5 = dom.createMorphAt(dom.childAt(element4, [7]),1,1);
        attribute(env, attrMorph0, element3, "class", concat(env, ["demo-container md-whiteframe-z1 ", get(env, context, "showSourceClass")]));
        block(env, morph0, context, "md-toolbar", [], {"classNames": "demo-toolbar"}, child0, null);
        inline(env, morph1, context, "code-content", [], {"sourceFiles": get(env, context, "sourceFiles"), "showSource": get(env, context, "showSource")});
        block(env, morph2, context, "md-toolbar", [], {"class": "md-theme-light"}, child1, null);
        block(env, morph3, context, "md-list", [], {}, child2, null);
        block(env, morph4, context, "md-toolbar", [], {"class": "md-theme-light"}, child3, null);
        block(env, morph5, context, "md-list", [], {}, child4, null);
        return fragment;
      }
    };
  }()));

});
define('dummy/templates/icon', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      var child0 = (function() {
        return {
          isHTMLBars: true,
          revision: "Ember@1.11.0",
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n                        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("span");
            var el2 = dom.createTextNode("Source");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, inline = hooks.inline;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            var morph0 = dom.createMorphAt(fragment,1,1,contextualElement);
            inline(env, morph0, context, "md-icon", [], {"md-svg-src": "images/icons/ic_visibility_24px.svg", "style": "margin: 0 4px 0 0;"});
            return fragment;
          }
        };
      }());
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.0",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1,"class","md-toolbar-tools");
          var el2 = dom.createTextNode("\n                    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("span");
          var el3 = dom.createTextNode("Font Icons");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("span");
          dom.setAttribute(el2,"flex","");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("                ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, block = hooks.block;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var morph0 = dom.createMorphAt(dom.childAt(fragment, [1]),5,5);
          block(env, morph0, context, "md-button", [], {"action": "showSource", "layoutType": "row", "layout-align": "center center", "style": "min-width: 72px;"}, child0, null);
          return fragment;
        }
      };
    }());
    var child1 = (function() {
      var child0 = (function() {
        return {
          isHTMLBars: true,
          revision: "Ember@1.11.0",
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1,"flex","");
            dom.setAttribute(el1,"layout-align","center center");
            var el2 = dom.createTextNode("\n                    ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            dom.setAttribute(el2,"class","preview-glyphs");
            var el3 = dom.createTextNode("\n                        ");
            dom.appendChild(el2, el3);
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n                    ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n\n                    ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            dom.setAttribute(el2,"class","preview-scale");
            var el3 = dom.createTextNode("\n                        ");
            dom.appendChild(el2, el3);
            var el3 = dom.createElement("span");
            dom.setAttribute(el3,"class","step");
            var el4 = dom.createComment("");
            dom.appendChild(el3, el4);
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n                    ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n                ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, get = hooks.get, inline = hooks.inline, element = hooks.element, content = hooks.content;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            var element0 = dom.childAt(fragment, [1]);
            var element1 = dom.childAt(element0, [3, 1]);
            var morph0 = dom.createMorphAt(dom.childAt(element0, [1]),1,1);
            var morph1 = dom.createMorphAt(element1,0,0);
            inline(env, morph0, context, "md-icon", [], {"mdFontIcon": get(env, context, "font.name"), "class": get(env, context, "font.theme"), "style": get(env, context, "it.sizeStyle"), "classNames": "step "});
            element(env, element1, context, "bind-attr", [], {"style": get(env, context, "it.paddingScaleStyle")});
            content(env, morph1, context, "it.size");
            return fragment;
          }
        };
      }());
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.0",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1,"layout","row");
          dom.setAttribute(el1,"layout-padding","");
          dom.setAttribute(el1,"layout-margin","");
          dom.setAttribute(el1,"class","glyph");
          var el2 = dom.createTextNode("\n\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n\n        ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, get = hooks.get, block = hooks.block;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var morph0 = dom.createMorphAt(dom.childAt(fragment, [1]),1,1);
          block(env, morph0, context, "each", [get(env, context, "font.sizes")], {"keyword": "it"}, child0, null);
          return fragment;
        }
      };
    }());
    var child2 = (function() {
      var child0 = (function() {
        return {
          isHTMLBars: true,
          revision: "Ember@1.11.0",
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n                        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("span");
            var el2 = dom.createTextNode("Source");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, inline = hooks.inline;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            var morph0 = dom.createMorphAt(fragment,1,1,contextualElement);
            inline(env, morph0, context, "md-icon", [], {"md-svg-src": "images/icons/ic_visibility_24px.svg", "style": "margin: 0 4px 0 0;"});
            return fragment;
          }
        };
      }());
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.0",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1,"class","md-toolbar-tools");
          var el2 = dom.createTextNode("\n                    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("span");
          var el3 = dom.createTextNode("Load Svg Icons from Url");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("span");
          dom.setAttribute(el2,"flex","");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("                ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, block = hooks.block;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var morph0 = dom.createMorphAt(dom.childAt(fragment, [1]),5,5);
          block(env, morph0, context, "md-button", [], {"action": "showSourceFromUrl", "layoutType": "row", "layout-align": "center center", "style": "min-width: 72px;"}, child0, null);
          return fragment;
        }
      };
    }());
    var child3 = (function() {
      var child0 = (function() {
        return {
          isHTMLBars: true,
          revision: "Ember@1.11.0",
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n                        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("span");
            var el2 = dom.createTextNode("Source");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, inline = hooks.inline;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            var morph0 = dom.createMorphAt(fragment,1,1,contextualElement);
            inline(env, morph0, context, "md-icon", [], {"md-svg-src": "images/icons/ic_visibility_24px.svg", "style": "margin: 0 4px 0 0;"});
            return fragment;
          }
        };
      }());
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.0",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1,"class","md-toolbar-tools");
          var el2 = dom.createTextNode("\n                    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("span");
          var el3 = dom.createTextNode("Svg Icon Sets");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("span");
          dom.setAttribute(el2,"flex","");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("                ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, block = hooks.block;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var morph0 = dom.createMorphAt(dom.childAt(fragment, [1]),5,5);
          block(env, morph0, context, "md-button", [], {"action": "showSourceFromSet", "layoutType": "row", "layout-align": "center center", "style": "min-width: 72px;"}, child0, null);
          return fragment;
        }
      };
    }());
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.0",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","doc-content");
        dom.setAttribute(el1,"layout","column");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"flex","");
        dom.setAttribute(el2,"layout","column");
        var el3 = dom.createTextNode("\n\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("section");
        var el4 = dom.createTextNode("\n\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("demo-include");
        dom.setAttribute(el4,"class","icondemoFontIcons");
        var el5 = dom.createTextNode("\n\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","demo-content demoFontIcons");
        var el6 = dom.createTextNode("\n\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6,"class","display-content");
        var el7 = dom.createTextNode("\n\n");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("div");
        dom.setAttribute(el7,"layout","column");
        dom.setAttribute(el7,"layout-margin","");
        dom.setAttribute(el7,"style","padding:25px;");
        var el8 = dom.createTextNode("\n\n    ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("p");
        var el9 = dom.createTextNode("\n        Display 5 font-icons, each with different sizes and colors:\n    ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n\n    ");
        dom.appendChild(el7, el8);
        var el8 = dom.createComment(" Display font icons from Icomoon.io: ");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n\n");
        dom.appendChild(el7, el8);
        var el8 = dom.createComment("");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n\n                    ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("section");
        var el4 = dom.createTextNode("\n\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("demo-include");
        dom.setAttribute(el4,"class","icondemoLoadSvgIconsFromUrl");
        var el5 = dom.createTextNode("\n\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","demo-content demoFontIcons");
        var el6 = dom.createTextNode("\n\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6,"class","display-content");
        var el7 = dom.createTextNode("\n\n");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("div");
        dom.setAttribute(el7,"layout","column");
        dom.setAttribute(el7,"layout-margin","");
        dom.setAttribute(el7,"style","padding:25px;");
        var el8 = dom.createTextNode("\n\n    ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("p");
        var el9 = dom.createTextNode("The simplest way to display a single SVG icon is by referencing it by URL:");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n\n    ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("p");
        var el9 = dom.createTextNode("\n        ");
        dom.appendChild(el8, el9);
        var el9 = dom.createComment("");
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n    ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n\n    ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("p");
        var el9 = dom.createTextNode("Style the icon size and color with CSS:");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n\n    ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("p");
        var el9 = dom.createTextNode("\n        ");
        dom.appendChild(el8, el9);
        var el9 = dom.createComment("");
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n        ");
        dom.appendChild(el8, el9);
        var el9 = dom.createComment("");
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n        ");
        dom.appendChild(el8, el9);
        var el9 = dom.createComment("");
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n    ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n\n");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n\n                    ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n\n\n                ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("section");
        var el4 = dom.createTextNode("\n\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("demo-include");
        dom.setAttribute(el4,"class","icondemoSvgIconFonts");
        var el5 = dom.createTextNode("\n\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","demo-content demoFontIcons");
        var el6 = dom.createTextNode("\n\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6,"class","display-content");
        var el7 = dom.createTextNode("\n\n");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("div");
        dom.setAttribute(el7,"layout","column");
        dom.setAttribute(el7,"layout-margin","");
        var el8 = dom.createTextNode("\n\n    ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("p");
        var el9 = dom.createTextNode("Display an icon from a pre-registered set of icons:");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n\n    ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("p");
        var el9 = dom.createTextNode("\n        ");
        dom.appendChild(el8, el9);
        var el9 = dom.createComment("");
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n        ");
        dom.appendChild(el8, el9);
        var el9 = dom.createComment("");
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n        ");
        dom.appendChild(el8, el9);
        var el9 = dom.createComment("");
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n    ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n\n");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n\n                    ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n\n\n                ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("style");
        var el2 = dom.createTextNode("\n    @font-face {\n        font-family: \"icomoon\";\n        src: url(\"icomoon.eot\");\n        font-weight: normal;\n        font-style: normal;\n    }\n\n    @font-face {\n        font-family: 'icomoon';\n        src: url('fonts/icomoon.eot?-cmq1um');\n        src: url('fonts/icomoon.eot?#iefix-cmq1um') format('embedded-opentype'),\n        url('fonts/icomoon.woff?-cmq1um') format('woff'),\n        url('fonts/icomoon.ttf?-cmq1um') format('truetype'),\n        url('fonts/icomoon.svg?-cmq1um#icomoon') format('svg');\n        font-weight: normal;\n        font-style: normal;\n    }\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, get = hooks.get, concat = hooks.concat, attribute = hooks.attribute, block = hooks.block, inline = hooks.inline;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var element2 = dom.childAt(fragment, [0, 1]);
        var element3 = dom.childAt(element2, [1]);
        var element4 = dom.childAt(element2, [3]);
        var element5 = dom.childAt(element4, [5, 1, 1, 1]);
        var element6 = dom.childAt(element5, [7]);
        var element7 = dom.childAt(element2, [5]);
        var element8 = dom.childAt(element7, [5, 1, 1, 1, 3]);
        var morph0 = dom.createMorphAt(element3,1,1);
        var morph1 = dom.createMorphAt(element3,3,3);
        var attrMorph0 = dom.createAttrMorph(element3, 'class');
        var morph2 = dom.createMorphAt(dom.childAt(element3, [5, 1, 1, 1]),5,5);
        var morph3 = dom.createMorphAt(element4,1,1);
        var morph4 = dom.createMorphAt(element4,3,3);
        var attrMorph1 = dom.createAttrMorph(element4, 'class');
        var morph5 = dom.createMorphAt(dom.childAt(element5, [3]),1,1);
        var morph6 = dom.createMorphAt(element6,1,1);
        var morph7 = dom.createMorphAt(element6,3,3);
        var morph8 = dom.createMorphAt(element6,5,5);
        var morph9 = dom.createMorphAt(element7,1,1);
        var morph10 = dom.createMorphAt(element7,3,3);
        var attrMorph2 = dom.createAttrMorph(element7, 'class');
        var morph11 = dom.createMorphAt(element8,1,1);
        var morph12 = dom.createMorphAt(element8,3,3);
        var morph13 = dom.createMorphAt(element8,5,5);
        attribute(env, attrMorph0, element3, "class", concat(env, ["demo-container md-whiteframe-z1 ", get(env, context, "showSourceClass")]));
        block(env, morph0, context, "md-toolbar", [], {"classNames": "demo-toolbar"}, child0, null);
        inline(env, morph1, context, "code-content", [], {"sourceFiles": get(env, context, "sourceFiles"), "showSource": get(env, context, "showSource")});
        block(env, morph2, context, "each", [get(env, context, "icons")], {"keyword": "font"}, child1, null);
        attribute(env, attrMorph1, element4, "class", concat(env, ["demo-container md-whiteframe-z1 ", get(env, context, "showSourceClassFromUrl")]));
        block(env, morph3, context, "md-toolbar", [], {"classNames": "demo-toolbar"}, child2, null);
        inline(env, morph4, context, "code-content", [], {"sourceFiles": get(env, context, "sourceFilesFromUrl"), "showSource": get(env, context, "showSourceFromUrl")});
        inline(env, morph5, context, "md-icon", [], {"md-svg-src": get(env, context, "insertDriveIconURL"), "alt": "Insert Drive Icon"});
        inline(env, morph6, context, "md-icon", [], {"md-svg-src": "images/icons/cake.svg", "class": "s24", "alt": "Cake"});
        inline(env, morph7, context, "md-icon", [], {"md-svg-src": get(env, context, "getAndroid"), "class": "s36", "alt": "Android "});
        inline(env, morph8, context, "md-icon", [], {"md-svg-src": "images/icons/addShoppingCart.svg", "class": "s48", "alt": "Cart"});
        attribute(env, attrMorph2, element7, "class", concat(env, ["demo-container md-whiteframe-z1 ", get(env, context, "showSourceClassFromSet")]));
        block(env, morph9, context, "md-toolbar", [], {"classNames": "demo-toolbar"}, child3, null);
        inline(env, morph10, context, "code-content", [], {"sourceFiles": get(env, context, "sourceFilesFromSet"), "showSource": get(env, context, "showSourceFromSet")});
        inline(env, morph11, context, "md-icon", [], {"md-svg-icon": "alarm", "style": "color: #0F0;", "alt": "Alarm Icon"});
        inline(env, morph12, context, "md-icon", [], {"md-svg-icon": "social:cake", "style": "color: #f00;width:60px;height:60px;", "alt": "Cake Icon"});
        inline(env, morph13, context, "md-icon", [], {"md-svg-icon": "social:people", "style": "color: #00F;", "class": "s48", "alt": "People Icon"});
        return fragment;
      }
    };
  }()));

});
define('dummy/templates/index', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.0",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Getting Started");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child1 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.0",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Demos");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child2 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.0",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Customization");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child3 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.0",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("API Reference");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.0",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("md-content");
        dom.setAttribute(el1,"class","extraPad");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("p");
        var el3 = dom.createTextNode("The ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("strong");
        var el4 = dom.createTextNode("Ember Material Design");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode(" project is an implementation of Material Design in EmberJS. This project provides a set of reusable, well-tested and accessible UI\n       components based on the Material Design system.");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("p");
        var el3 = dom.createTextNode("\n        This project is as close to a reference implementation of ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("a");
        dom.setAttribute(el3,"href","http://material.angularjs.org");
        var el4 = dom.createTextNode("Angular Material");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode(" as I could make it.\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("ul");
        dom.setAttribute(el2,"class","buckets");
        dom.setAttribute(el2,"layout","");
        dom.setAttribute(el2,"layout-align","center center");
        dom.setAttribute(el2,"layout-wrap","");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("li");
        dom.setAttribute(el3,"flex","25");
        dom.setAttribute(el3,"flex-md","50");
        dom.setAttribute(el3,"flex-sm","50");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("md-card");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("md-card-content");
        var el6 = dom.createTextNode("\n                  ");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("li");
        dom.setAttribute(el3,"flex","25");
        dom.setAttribute(el3,"flex-md","50");
        dom.setAttribute(el3,"flex-sm","50");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("md-card");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("md-card-content");
        var el6 = dom.createTextNode("\n                  ");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("li");
        dom.setAttribute(el3,"flex","25");
        dom.setAttribute(el3,"flex-md","50");
        dom.setAttribute(el3,"flex-sm","50");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("md-card");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("md-card-content");
        var el6 = dom.createTextNode("\n                  ");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("li");
        dom.setAttribute(el3,"flex","25");
        dom.setAttribute(el3,"flex-md","50");
        dom.setAttribute(el3,"flex-sm","50");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("md-card");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("md-card-content");
        var el6 = dom.createTextNode("\n                  ");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h2");
        dom.setAttribute(el2,"class","md-title");
        var el3 = dom.createTextNode("What is Material Design?");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("p");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("a");
        dom.setAttribute(el3,"href","http://www.google.com/design/spec/material-design/");
        var el4 = dom.createTextNode("Material Design");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode(" is a specification for a\n                                                                                         unified system of visual, motion, and interaction design that adapts across different devices and different\n                                                                                         screen sizes.\n\n                                                                                         Below is a brief video that presents the Material Design system:\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("md-content");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"style","max-width: 560px; margin: 0 auto;");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","responsive-video");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("iframe");
        dom.setAttribute(el5,"title","Material Design");
        dom.setAttribute(el5,"src","//www.youtube.com/embed/Q8TXgCzxEnw");
        dom.setAttribute(el5,"frameborder","0");
        dom.setAttribute(el5,"allowfullscreen","");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, block = hooks.block;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var element0 = dom.childAt(fragment, [0, 5]);
        var morph0 = dom.createMorphAt(dom.childAt(element0, [1, 1, 1]),1,1);
        var morph1 = dom.createMorphAt(dom.childAt(element0, [3, 1, 1]),1,1);
        var morph2 = dom.createMorphAt(dom.childAt(element0, [5, 1, 1]),1,1);
        var morph3 = dom.createMorphAt(dom.childAt(element0, [7, 1, 1]),1,1);
        block(env, morph0, context, "link-to", ["index"], {}, child0, null);
        block(env, morph1, context, "link-to", ["index"], {}, child1, null);
        block(env, morph2, context, "link-to", ["index"], {}, child2, null);
        block(env, morph3, context, "link-to", ["index"], {}, child3, null);
        return fragment;
      }
    };
  }()));

});
define('dummy/templates/input', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      var child0 = (function() {
        return {
          isHTMLBars: true,
          revision: "Ember@1.11.0",
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n                        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("span");
            var el2 = dom.createTextNode("Source");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, inline = hooks.inline;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            var morph0 = dom.createMorphAt(fragment,1,1,contextualElement);
            inline(env, morph0, context, "md-icon", [], {"md-svg-src": "images/icons/ic_visibility_24px.svg", "style": "margin: 0 4px 0 0;"});
            return fragment;
          }
        };
      }());
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.0",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1,"class","md-toolbar-tools");
          var el2 = dom.createTextNode("\n                    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("span");
          var el3 = dom.createTextNode("Basic Usage");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("span");
          dom.setAttribute(el2,"flex","");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("                ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, block = hooks.block;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var morph0 = dom.createMorphAt(dom.childAt(fragment, [1]),5,5);
          block(env, morph0, context, "md-button", [], {"action": "showSource", "layoutType": "row", "layout-align": "center center", "style": "min-width: 72px;"}, child0, null);
          return fragment;
        }
      };
    }());
    var child1 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.0",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          var el2 = dom.createTextNode("Title");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, content = hooks.content;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var morph0 = dom.createMorphAt(fragment,3,3,contextualElement);
          content(env, morph0, context, "md-input");
          return fragment;
        }
      };
    }());
    var child2 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.0",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          var el2 = dom.createTextNode("Email");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, inline = hooks.inline;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var morph0 = dom.createMorphAt(fragment,3,3,contextualElement);
          inline(env, morph0, context, "md-input", [], {"type": "email"});
          return fragment;
        }
      };
    }());
    var child3 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.0",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          var el2 = dom.createTextNode("Company (Disabled)");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, inline = hooks.inline;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var morph0 = dom.createMorphAt(fragment,3,3,contextualElement);
          inline(env, morph0, context, "md-input", [], {"disabled": true});
          return fragment;
        }
      };
    }());
    var child4 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.0",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          var el2 = dom.createTextNode("Submission Date");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, inline = hooks.inline;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var morph0 = dom.createMorphAt(fragment,3,3,contextualElement);
          inline(env, morph0, context, "md-input", [], {"type": "date"});
          return fragment;
        }
      };
    }());
    var child5 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.0",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          var el2 = dom.createTextNode("First Name");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, inline = hooks.inline;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var morph0 = dom.createMorphAt(fragment,3,3,contextualElement);
          inline(env, morph0, context, "md-input", [], {"placeholder": "Placeholder text"});
          return fragment;
        }
      };
    }());
    var child6 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.0",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          var el2 = dom.createTextNode("Last Name");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, content = hooks.content;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var morph0 = dom.createMorphAt(fragment,3,3,contextualElement);
          content(env, morph0, context, "md-input");
          return fragment;
        }
      };
    }());
    var child7 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.0",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          var el2 = dom.createTextNode("Address");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, content = hooks.content;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var morph0 = dom.createMorphAt(fragment,3,3,contextualElement);
          content(env, morph0, context, "md-input");
          return fragment;
        }
      };
    }());
    var child8 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.0",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          var el2 = dom.createTextNode("City");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, content = hooks.content;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var morph0 = dom.createMorphAt(fragment,3,3,contextualElement);
          content(env, morph0, context, "md-input");
          return fragment;
        }
      };
    }());
    var child9 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.0",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          var el2 = dom.createTextNode("State");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, content = hooks.content;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var morph0 = dom.createMorphAt(fragment,3,3,contextualElement);
          content(env, morph0, context, "md-input");
          return fragment;
        }
      };
    }());
    var child10 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.0",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          var el2 = dom.createTextNode("Postal Code");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, content = hooks.content;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var morph0 = dom.createMorphAt(fragment,3,3,contextualElement);
          content(env, morph0, context, "md-input");
          return fragment;
        }
      };
    }());
    var child11 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.0",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          var el2 = dom.createTextNode("Biography");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, inline = hooks.inline;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var morph0 = dom.createMorphAt(fragment,3,3,contextualElement);
          inline(env, morph0, context, "md-textarea", [], {"columns": "1", "md-maxlength": "150"});
          return fragment;
        }
      };
    }());
    var child12 = (function() {
      var child0 = (function() {
        return {
          isHTMLBars: true,
          revision: "Ember@1.11.0",
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n                        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("span");
            var el2 = dom.createTextNode("Source");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, inline = hooks.inline;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            var morph0 = dom.createMorphAt(fragment,1,1,contextualElement);
            inline(env, morph0, context, "md-icon", [], {"md-svg-src": "images/icons/ic_visibility_24px.svg", "style": "margin: 0 4px 0 0;"});
            return fragment;
          }
        };
      }());
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.0",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1,"class","md-toolbar-tools");
          var el2 = dom.createTextNode("\n                    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("span");
          var el3 = dom.createTextNode("Icons");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("span");
          dom.setAttribute(el2,"flex","");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("                ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, block = hooks.block;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var morph0 = dom.createMorphAt(dom.childAt(fragment, [1]),5,5);
          block(env, morph0, context, "md-button", [], {"action": "showSourceIcons", "layoutType": "row", "layout-align": "center center", "style": "min-width: 72px;"}, child0, null);
          return fragment;
        }
      };
    }());
    var child13 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.0",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, inline = hooks.inline;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var morph0 = dom.createMorphAt(fragment,1,1,contextualElement);
          var morph1 = dom.createMorphAt(fragment,3,3,contextualElement);
          inline(env, morph0, context, "md-icon", [], {"md-svg-src": "icons/ic_person_24px.svg", "class": "name"});
          inline(env, morph1, context, "md-input", [], {"type": "text", "placeholder": "Name"});
          return fragment;
        }
      };
    }());
    var child14 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.0",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, inline = hooks.inline;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var morph0 = dom.createMorphAt(fragment,1,1,contextualElement);
          var morph1 = dom.createMorphAt(fragment,3,3,contextualElement);
          inline(env, morph0, context, "md-icon", [], {"md-svg-src": "icons/ic_phone_24px.svg"});
          inline(env, morph1, context, "md-input", [], {"type": "text", "placeholder": "Phone Number"});
          return fragment;
        }
      };
    }());
    var child15 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.0",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, inline = hooks.inline;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var morph0 = dom.createMorphAt(fragment,1,1,contextualElement);
          var morph1 = dom.createMorphAt(fragment,3,3,contextualElement);
          inline(env, morph0, context, "md-icon", [], {"md-svg-src": "icons/ic_email_24px.svg", "class": "email"});
          inline(env, morph1, context, "md-input", [], {"type": "email", "placeholder": "Email (required)", "required": "required"});
          return fragment;
        }
      };
    }());
    var child16 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.0",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, inline = hooks.inline;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var morph0 = dom.createMorphAt(fragment,1,1,contextualElement);
          var morph1 = dom.createMorphAt(fragment,3,3,contextualElement);
          inline(env, morph0, context, "md-icon", [], {"md-svg-src": "icons/ic_place_24px.svg"});
          inline(env, morph1, context, "md-input", [], {"type": "text", "placeholder": "Address"});
          return fragment;
        }
      };
    }());
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.0",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","doc-content");
        dom.setAttribute(el1,"layout","column");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"flex","");
        dom.setAttribute(el2,"layout","column");
        var el3 = dom.createTextNode("\n\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("section");
        var el4 = dom.createTextNode("\n\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("demo-include");
        dom.setAttribute(el4,"class","buttondemoBasicUsage");
        var el5 = dom.createTextNode("\n\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","demo-content");
        var el6 = dom.createTextNode("\n\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6,"class","display-content");
        var el7 = dom.createTextNode("\n");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("md-content");
        dom.setAttribute(el7,"class","md-padding");
        dom.setAttribute(el7,"layout","row");
        dom.setAttribute(el7,"layout-sm","column");
        var el8 = dom.createTextNode("\n");
        dom.appendChild(el7, el8);
        var el8 = dom.createComment("");
        dom.appendChild(el7, el8);
        var el8 = dom.createComment("");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n\n");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("md-content");
        dom.setAttribute(el7,"class","md-padding");
        var el8 = dom.createTextNode("\n    ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("form");
        dom.setAttribute(el8,"name","userForm");
        var el9 = dom.createTextNode("\n\n        ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("div");
        dom.setAttribute(el9,"layout","");
        dom.setAttribute(el9,"layout-sm","column");
        var el10 = dom.createTextNode("\n");
        dom.appendChild(el9, el10);
        var el10 = dom.createComment("");
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("\n\n");
        dom.appendChild(el9, el10);
        var el10 = dom.createComment("");
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("        ");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n\n\n        ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("div");
        dom.setAttribute(el9,"layout","");
        dom.setAttribute(el9,"layout-sm","column");
        var el10 = dom.createTextNode("\n");
        dom.appendChild(el9, el10);
        var el10 = dom.createComment("");
        dom.appendChild(el9, el10);
        var el10 = dom.createComment("");
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("        ");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n\n");
        dom.appendChild(el8, el9);
        var el9 = dom.createComment("");
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n        ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("div");
        dom.setAttribute(el9,"layout","");
        dom.setAttribute(el9,"layout-sm","column");
        var el10 = dom.createTextNode("\n");
        dom.appendChild(el9, el10);
        var el10 = dom.createComment("");
        dom.appendChild(el9, el10);
        var el10 = dom.createComment("");
        dom.appendChild(el9, el10);
        var el10 = dom.createComment("");
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("        ");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n\n");
        dom.appendChild(el8, el9);
        var el9 = dom.createComment("");
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n    ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                    ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n\n                ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n\n\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("section");
        var el4 = dom.createTextNode("\n\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("demo-include");
        dom.setAttribute(el4,"class","md-whiteframe-z1 inputdemoIcons");
        var el5 = dom.createTextNode("\n\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","demo-content");
        var el6 = dom.createTextNode("\n\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6,"class","display-content");
        var el7 = dom.createTextNode("\n\n");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("md-content");
        dom.setAttribute(el7,"class","md-padding");
        var el8 = dom.createTextNode("\n");
        dom.appendChild(el7, el8);
        var el8 = dom.createComment("");
        dom.appendChild(el7, el8);
        var el8 = dom.createComment("");
        dom.appendChild(el7, el8);
        var el8 = dom.createComment("");
        dom.appendChild(el7, el8);
        var el8 = dom.createComment("");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n\n                    ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n\n                ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n\n\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, get = hooks.get, concat = hooks.concat, attribute = hooks.attribute, block = hooks.block, inline = hooks.inline;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var element0 = dom.childAt(fragment, [0, 1]);
        var element1 = dom.childAt(element0, [1]);
        var element2 = dom.childAt(element1, [5, 1, 1]);
        var element3 = dom.childAt(element2, [1]);
        var element4 = dom.childAt(element2, [3, 1]);
        var element5 = dom.childAt(element4, [1]);
        var element6 = dom.childAt(element4, [3]);
        var element7 = dom.childAt(element4, [7]);
        var element8 = dom.childAt(element0, [3]);
        var element9 = dom.childAt(element8, [5, 1, 1, 1]);
        var morph0 = dom.createMorphAt(element1,1,1);
        var morph1 = dom.createMorphAt(element1,3,3);
        var attrMorph0 = dom.createAttrMorph(element1, 'class');
        var morph2 = dom.createMorphAt(element3,1,1);
        var morph3 = dom.createMorphAt(element3,2,2);
        var morph4 = dom.createMorphAt(element5,1,1);
        var morph5 = dom.createMorphAt(element5,3,3);
        var morph6 = dom.createMorphAt(element6,1,1);
        var morph7 = dom.createMorphAt(element6,2,2);
        var morph8 = dom.createMorphAt(element4,5,5);
        var morph9 = dom.createMorphAt(element7,1,1);
        var morph10 = dom.createMorphAt(element7,2,2);
        var morph11 = dom.createMorphAt(element7,3,3);
        var morph12 = dom.createMorphAt(element4,9,9);
        var morph13 = dom.createMorphAt(element8,1,1);
        var morph14 = dom.createMorphAt(element8,3,3);
        var attrMorph1 = dom.createAttrMorph(element8, 'class');
        var morph15 = dom.createMorphAt(element9,1,1);
        var morph16 = dom.createMorphAt(element9,2,2);
        var morph17 = dom.createMorphAt(element9,3,3);
        var morph18 = dom.createMorphAt(element9,4,4);
        attribute(env, attrMorph0, element1, "class", concat(env, ["demo-container md-whiteframe-z1 ", get(env, context, "showSourceClass")]));
        block(env, morph0, context, "md-toolbar", [], {"classNames": "demo-toolbar"}, child0, null);
        inline(env, morph1, context, "code-content", [], {"sourceFiles": get(env, context, "sourceFiles"), "showSource": get(env, context, "showSource")});
        block(env, morph2, context, "md-input-container", [], {"value": get(env, context, "user.title")}, child1, null);
        block(env, morph3, context, "md-input-container", [], {"value": get(env, context, "user.email")}, child2, null);
        block(env, morph4, context, "md-input-container", [], {"style": "width:80%", "value": get(env, context, "user.company")}, child3, null);
        block(env, morph5, context, "md-input-container", [], {"flex": "", "value": get(env, context, "user.submissionDate")}, child4, null);
        block(env, morph6, context, "md-input-container", [], {"flex": "", "value": get(env, context, "user.firstName")}, child5, null);
        block(env, morph7, context, "md-input-container", [], {"flex": "", "value": get(env, context, "theMax")}, child6, null);
        block(env, morph8, context, "md-input-container", [], {"flex": "", "value": get(env, context, "user.address")}, child7, null);
        block(env, morph9, context, "md-input-container", [], {"flex": "", "value": get(env, context, "user.city")}, child8, null);
        block(env, morph10, context, "md-input-container", [], {"flex": "", "value": get(env, context, "user.state")}, child9, null);
        block(env, morph11, context, "md-input-container", [], {"flex": "", "value": get(env, context, "user.postalCode")}, child10, null);
        block(env, morph12, context, "md-input-container", [], {"flex": "", "value": get(env, context, "user.biography")}, child11, null);
        attribute(env, attrMorph1, element8, "class", concat(env, ["demo-container ", get(env, context, "showSourceClassIcons")]));
        block(env, morph13, context, "md-toolbar", [], {"classNames": "demo-toolbar"}, child12, null);
        inline(env, morph14, context, "code-content", [], {"sourceFiles": get(env, context, "sourceFilesIcons"), "showSource": get(env, context, "showSourceIcons")});
        block(env, morph15, context, "md-input-container", [], {"md-no-float": "", "value": get(env, context, "user2.name")}, child13, null);
        block(env, morph16, context, "md-input-container", [], {"md-no-float": "", "value": get(env, context, "user2.phon")}, child14, null);
        block(env, morph17, context, "md-input-container", [], {"md-no-float": ""}, child15, null);
        block(env, morph18, context, "md-input-container", [], {"md-no-float": ""}, child16, null);
        return fragment;
      }
    };
  }()));

});
define('dummy/templates/list', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      var child0 = (function() {
        return {
          isHTMLBars: true,
          revision: "Ember@1.11.0",
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n                        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("span");
            var el2 = dom.createTextNode("Source");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, inline = hooks.inline;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            var morph0 = dom.createMorphAt(fragment,1,1,contextualElement);
            inline(env, morph0, context, "md-icon", [], {"md-svg-src": "images/icons/ic_visibility_24px.svg", "style": "margin: 0 4px 0 0;"});
            return fragment;
          }
        };
      }());
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.0",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1,"class","md-toolbar-tools");
          var el2 = dom.createTextNode("\n                    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("span");
          var el3 = dom.createTextNode("Basic Usage");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("span");
          dom.setAttribute(el2,"flex","");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("                ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, block = hooks.block;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var morph0 = dom.createMorphAt(dom.childAt(fragment, [1]),5,5);
          block(env, morph0, context, "md-button", [], {"action": "showSource", "layoutType": "row", "layout-align": "center center", "style": "min-width: 72px;"}, child0, null);
          return fragment;
        }
      };
    }());
    var child1 = (function() {
      var child0 = (function() {
        var child0 = (function() {
          return {
            isHTMLBars: true,
            revision: "Ember@1.11.0",
            blockParams: 0,
            cachedFragment: null,
            hasRendered: false,
            build: function build(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("                ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("img");
              dom.setAttribute(el1,"class","md-avatar");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n                ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("div");
              dom.setAttribute(el1,"class","md-list-item-text");
              var el2 = dom.createTextNode("\n                    ");
              dom.appendChild(el1, el2);
              var el2 = dom.createElement("h3");
              var el3 = dom.createComment("");
              dom.appendChild(el2, el3);
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("\n                    ");
              dom.appendChild(el1, el2);
              var el2 = dom.createElement("h4");
              var el3 = dom.createComment("");
              dom.appendChild(el2, el3);
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("\n                    ");
              dom.appendChild(el1, el2);
              var el2 = dom.createElement("p");
              var el3 = dom.createComment("");
              dom.appendChild(el2, el3);
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("\n                ");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            render: function render(context, env, contextualElement) {
              var dom = env.dom;
              var hooks = env.hooks, get = hooks.get, concat = hooks.concat, attribute = hooks.attribute, content = hooks.content;
              dom.detectNamespace(contextualElement);
              var fragment;
              if (env.useFragmentCache && dom.canClone) {
                if (this.cachedFragment === null) {
                  fragment = this.build(dom);
                  if (this.hasRendered) {
                    this.cachedFragment = fragment;
                  } else {
                    this.hasRendered = true;
                  }
                }
                if (this.cachedFragment) {
                  fragment = dom.cloneNode(this.cachedFragment, true);
                }
              } else {
                fragment = this.build(dom);
              }
              var element2 = dom.childAt(fragment, [1]);
              var element3 = dom.childAt(fragment, [3]);
              var attrMorph0 = dom.createAttrMorph(element2, 'src');
              var attrMorph1 = dom.createAttrMorph(element2, 'alt');
              var morph0 = dom.createMorphAt(dom.childAt(element3, [1]),0,0);
              var morph1 = dom.createMorphAt(dom.childAt(element3, [3]),0,0);
              var morph2 = dom.createMorphAt(dom.childAt(element3, [5]),0,0);
              attribute(env, attrMorph0, element2, "src", concat(env, [get(env, context, "item.face"), "?", get(env, context, "index")]));
              attribute(env, attrMorph1, element2, "alt", concat(env, [get(env, context, "item.who")]));
              content(env, morph0, context, "item.who");
              content(env, morph1, context, "item.what");
              content(env, morph2, context, "item.notes");
              return fragment;
            }
          };
        }());
        return {
          isHTMLBars: true,
          revision: "Ember@1.11.0",
          blockParams: 2,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement, blockArguments) {
            var dom = env.dom;
            var hooks = env.hooks, set = hooks.set, block = hooks.block;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            var morph0 = dom.createMorphAt(fragment,0,0,contextualElement);
            dom.insertBoundary(fragment, null);
            dom.insertBoundary(fragment, 0);
            set(env, context, "item", blockArguments[0]);
            set(env, context, "index", blockArguments[1]);
            block(env, morph0, context, "md-list-item", [], {"class": "md-3-line"}, child0, null);
            return fragment;
          }
        };
      }());
      var child1 = (function() {
        return {
          isHTMLBars: true,
          revision: "Ember@1.11.0",
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("            ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("img");
            dom.setAttribute(el1,"class","md-avatar");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n            ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1,"class","md-list-item-text");
            var el2 = dom.createTextNode("\n                ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("h3");
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n                ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("p");
            var el3 = dom.createTextNode("Secondary Text");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n            ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, get = hooks.get, concat = hooks.concat, attribute = hooks.attribute, content = hooks.content;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            var element1 = dom.childAt(fragment, [1]);
            var attrMorph0 = dom.createAttrMorph(element1, 'src');
            var attrMorph1 = dom.createAttrMorph(element1, 'alt');
            var morph0 = dom.createMorphAt(dom.childAt(fragment, [3, 1]),0,0);
            attribute(env, attrMorph0, element1, "src", concat(env, [get(env, context, "firstTodo.face"), "?20"]));
            attribute(env, attrMorph1, element1, "alt", concat(env, [get(env, context, "firstTodo.who")]));
            content(env, morph0, context, "firstTodo.who");
            return fragment;
          }
        };
      }());
      var child2 = (function() {
        return {
          isHTMLBars: true,
          revision: "Ember@1.11.0",
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("            ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("img");
            dom.setAttribute(el1,"class","md-avatar");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n            ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1,"class","md-list-item-text");
            var el2 = dom.createTextNode("\n                ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("h3");
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n                ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("p");
            var el3 = dom.createTextNode("Secondary line text Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam massa quam.");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n            ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, get = hooks.get, concat = hooks.concat, attribute = hooks.attribute, content = hooks.content;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            var element0 = dom.childAt(fragment, [1]);
            var attrMorph0 = dom.createAttrMorph(element0, 'src');
            var attrMorph1 = dom.createAttrMorph(element0, 'alt');
            var morph0 = dom.createMorphAt(dom.childAt(fragment, [3, 1]),0,0);
            attribute(env, attrMorph0, element0, "src", concat(env, [get(env, context, "firstTodo.face"), "?25"]));
            attribute(env, attrMorph1, element0, "alt", concat(env, [get(env, context, "firstTodo.who")]));
            content(env, morph0, context, "firstTodo.who");
            return fragment;
          }
        };
      }());
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.0",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, get = hooks.get, block = hooks.block;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var morph0 = dom.createMorphAt(fragment,1,1,contextualElement);
          var morph1 = dom.createMorphAt(fragment,3,3,contextualElement);
          var morph2 = dom.createMorphAt(fragment,5,5,contextualElement);
          block(env, morph0, context, "each", [get(env, context, "todos")], {}, child0, null);
          block(env, morph1, context, "md-list-item", [], {"class": "md-2-line"}, child1, null);
          block(env, morph2, context, "md-list-item", [], {"class": "md-3-line"}, child2, null);
          return fragment;
        }
      };
    }());
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.0",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","doc-content");
        dom.setAttribute(el1,"layout","column");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"flex","");
        dom.setAttribute(el2,"layout","column");
        var el3 = dom.createTextNode("\n\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("section");
        var el4 = dom.createTextNode("\n\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("demo-include");
        dom.setAttribute(el4,"class","contentdemoBasicUsage");
        var el5 = dom.createTextNode("\n\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","demo-content");
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6,"class","display-content");
        var el7 = dom.createTextNode("\n");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("md-content");
        var el8 = dom.createTextNode("\n\n");
        dom.appendChild(el7, el8);
        var el8 = dom.createComment("");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                    ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n\n\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, get = hooks.get, concat = hooks.concat, attribute = hooks.attribute, block = hooks.block, inline = hooks.inline;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var element4 = dom.childAt(fragment, [0, 1, 1]);
        var morph0 = dom.createMorphAt(element4,1,1);
        var morph1 = dom.createMorphAt(element4,3,3);
        var attrMorph0 = dom.createAttrMorph(element4, 'class');
        var morph2 = dom.createMorphAt(dom.childAt(element4, [5, 1, 1, 1]),1,1);
        attribute(env, attrMorph0, element4, "class", concat(env, ["demo-container md-whiteframe-z1 ", get(env, context, "showSourceClass")]));
        block(env, morph0, context, "md-toolbar", [], {"classNames": "demo-toolbar"}, child0, null);
        inline(env, morph1, context, "code-content", [], {"sourceFiles": get(env, context, "sourceFiles"), "showSource": get(env, context, "showSource")});
        block(env, morph2, context, "md-list", [], {}, child1, null);
        return fragment;
      }
    };
  }()));

});
define('dummy/templates/progress-circular', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      var child0 = (function() {
        return {
          isHTMLBars: true,
          revision: "Ember@1.11.0",
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n                        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("span");
            var el2 = dom.createTextNode("Source");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, inline = hooks.inline;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            var morph0 = dom.createMorphAt(fragment,1,1,contextualElement);
            inline(env, morph0, context, "md-icon", [], {"md-svg-src": "images/icons/ic_visibility_24px.svg", "style": "margin: 0 4px 0 0;"});
            return fragment;
          }
        };
      }());
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.0",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1,"class","md-toolbar-tools");
          var el2 = dom.createTextNode("\n                    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("span");
          var el3 = dom.createTextNode("Basic Usage");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("span");
          dom.setAttribute(el2,"flex","");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("                ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, block = hooks.block;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var morph0 = dom.createMorphAt(dom.childAt(fragment, [1]),5,5);
          block(env, morph0, context, "md-button", [], {"action": "showSource", "layoutType": "row", "layout-align": "center center", "style": "min-width: 72px;"}, child0, null);
          return fragment;
        }
      };
    }());
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.0",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","doc-content");
        dom.setAttribute(el1,"layout","column");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"flex","");
        dom.setAttribute(el2,"layout","column");
        var el3 = dom.createTextNode("\n\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("section");
        var el4 = dom.createTextNode("\n\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("demo-include");
        dom.setAttribute(el4,"class","buttondemoBasicUsage");
        var el5 = dom.createTextNode("\n\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","demo-content progressCircularDemo1");
        var el6 = dom.createTextNode("\n\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6,"class","display-content");
        var el7 = dom.createTextNode("\n");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("div");
        dom.setAttribute(el7,"layout","column");
        dom.setAttribute(el7,"layout-margin","");
        dom.setAttribute(el7,"style","padding:25px;");
        var el8 = dom.createTextNode("\n\n    ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("h4");
        dom.setAttribute(el8,"style","margin-top:10px");
        var el9 = dom.createTextNode("Determinate");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n    ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("p");
        var el9 = dom.createTextNode("For operations where the percentage of the operation completed can be determined, use a determinate indicator. They give users a quick sense of how long an operation will take.");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n    ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("div");
        dom.setAttribute(el8,"layout","row");
        dom.setAttribute(el8,"layout-sm","column");
        dom.setAttribute(el8,"layout-align","space-around");
        var el9 = dom.createTextNode("\n        ");
        dom.appendChild(el8, el9);
        var el9 = dom.createComment("");
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n    ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n\n    ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("h4");
        var el9 = dom.createTextNode("Indeterminate");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n    ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("p");
        var el9 = dom.createTextNode("For operations where the user is asked to wait a moment while something finishes up, and it’s not necessary to expose what's happening behind the scenes and how long it will take, use an indeterminate indicator.");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n    ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("div");
        dom.setAttribute(el8,"layout","row");
        dom.setAttribute(el8,"layout-sm","column");
        dom.setAttribute(el8,"layout-align","space-around");
        var el9 = dom.createTextNode("\n        ");
        dom.appendChild(el8, el9);
        var el9 = dom.createComment("");
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n    ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n\n    ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("h4");
        var el9 = dom.createTextNode("Theming");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n\n    ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("div");
        dom.setAttribute(el8,"layout","row");
        dom.setAttribute(el8,"layout-sm","column");
        dom.setAttribute(el8,"layout-align","space-around");
        var el9 = dom.createTextNode("\n        ");
        dom.appendChild(el8, el9);
        var el9 = dom.createComment("");
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n        ");
        dom.appendChild(el8, el9);
        var el9 = dom.createComment("");
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n        ");
        dom.appendChild(el8, el9);
        var el9 = dom.createComment("");
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n        ");
        dom.appendChild(el8, el9);
        var el9 = dom.createComment("");
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n        ");
        dom.appendChild(el8, el9);
        var el9 = dom.createComment("");
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n    ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n\n\n");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n\n                    ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, get = hooks.get, concat = hooks.concat, attribute = hooks.attribute, block = hooks.block, inline = hooks.inline;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var element0 = dom.childAt(fragment, [0, 1, 1]);
        var element1 = dom.childAt(element0, [5, 1, 1, 1]);
        var element2 = dom.childAt(element1, [15]);
        var morph0 = dom.createMorphAt(element0,1,1);
        var morph1 = dom.createMorphAt(element0,3,3);
        var attrMorph0 = dom.createAttrMorph(element0, 'class');
        var morph2 = dom.createMorphAt(dom.childAt(element1, [5]),1,1);
        var morph3 = dom.createMorphAt(dom.childAt(element1, [11]),1,1);
        var morph4 = dom.createMorphAt(element2,1,1);
        var morph5 = dom.createMorphAt(element2,3,3);
        var morph6 = dom.createMorphAt(element2,5,5);
        var morph7 = dom.createMorphAt(element2,7,7);
        var morph8 = dom.createMorphAt(element2,9,9);
        attribute(env, attrMorph0, element0, "class", concat(env, ["demo-container md-whiteframe-z1 ", get(env, context, "showSourceClass")]));
        block(env, morph0, context, "md-toolbar", [], {"classNames": "demo-toolbar"}, child0, null);
        inline(env, morph1, context, "code-content", [], {"sourceFiles": get(env, context, "sourceFiles"), "showSource": get(env, context, "showSource")});
        inline(env, morph2, context, "md-progress-circular", [], {"md-mode": "determinate", "value": get(env, context, "determinateValue")});
        inline(env, morph3, context, "md-progress-circular", [], {"md-mode": "indeterminate"});
        inline(env, morph4, context, "md-progress-circular", [], {"class": "md-hue-2", "md-mode": "indeterminate"});
        inline(env, morph5, context, "md-progress-circular", [], {"class": "md-accent", "md-mode": "indeterminate"});
        inline(env, morph6, context, "md-progress-circular", [], {"class": "md-accent md-hue-1", "md-mode": "indeterminate"});
        inline(env, morph7, context, "md-progress-circular", [], {"class": "md-warn md-hue-3", "md-mode": "indeterminate"});
        inline(env, morph8, context, "md-progress-circular", [], {"class": "md-warn", "md-mode": "indeterminate"});
        return fragment;
      }
    };
  }()));

});
define('dummy/templates/progress-linear', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      var child0 = (function() {
        return {
          isHTMLBars: true,
          revision: "Ember@1.11.0",
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n                        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("span");
            var el2 = dom.createTextNode("Source");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, inline = hooks.inline;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            var morph0 = dom.createMorphAt(fragment,1,1,contextualElement);
            inline(env, morph0, context, "md-icon", [], {"md-svg-src": "images/icons/ic_visibility_24px.svg", "style": "margin: 0 4px 0 0;"});
            return fragment;
          }
        };
      }());
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.0",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1,"class","md-toolbar-tools");
          var el2 = dom.createTextNode("\n                    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("span");
          var el3 = dom.createTextNode("Basic Usage");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("span");
          dom.setAttribute(el2,"flex","");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("                ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, block = hooks.block;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var morph0 = dom.createMorphAt(dom.childAt(fragment, [1]),5,5);
          block(env, morph0, context, "md-button", [], {"action": "showSource", "layoutType": "row", "layout-align": "center center", "style": "min-width: 72px;"}, child0, null);
          return fragment;
        }
      };
    }());
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.0",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","doc-content");
        dom.setAttribute(el1,"layout","column");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"flex","");
        dom.setAttribute(el2,"layout","column");
        var el3 = dom.createTextNode("\n\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("section");
        var el4 = dom.createTextNode("\n\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("demo-include");
        dom.setAttribute(el4,"class","buttondemoBasicUsage");
        var el5 = dom.createTextNode("\n\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","demo-content progressCircularDemo1");
        var el6 = dom.createTextNode("\n\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6,"class","display-content");
        var el7 = dom.createTextNode("\n");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("div");
        dom.setAttribute(el7,"layout","column");
        dom.setAttribute(el7,"layout-margin","");
        dom.setAttribute(el7,"style","padding:25px;");
        var el8 = dom.createTextNode("\n\n    ");
        dom.appendChild(el7, el8);
        var el8 = dom.createComment("");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n\n    ");
        dom.appendChild(el7, el8);
        var el8 = dom.createComment("");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n\n    ");
        dom.appendChild(el7, el8);
        var el8 = dom.createComment("");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n\n");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                    ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, get = hooks.get, concat = hooks.concat, attribute = hooks.attribute, block = hooks.block, inline = hooks.inline;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var element0 = dom.childAt(fragment, [0, 1, 1]);
        var element1 = dom.childAt(element0, [5, 1, 1, 1]);
        var morph0 = dom.createMorphAt(element0,1,1);
        var morph1 = dom.createMorphAt(element0,3,3);
        var attrMorph0 = dom.createAttrMorph(element0, 'class');
        var morph2 = dom.createMorphAt(element1,1,1);
        var morph3 = dom.createMorphAt(element1,3,3);
        var morph4 = dom.createMorphAt(element1,5,5);
        attribute(env, attrMorph0, element0, "class", concat(env, ["demo-container md-whiteframe-z1 ", get(env, context, "showSourceClass")]));
        block(env, morph0, context, "md-toolbar", [], {"classNames": "demo-toolbar"}, child0, null);
        inline(env, morph1, context, "code-content", [], {"sourceFiles": get(env, context, "sourceFiles"), "showSource": get(env, context, "showSource")});
        inline(env, morph2, context, "md-progress-linear", [], {"md-mode": "indeterminate"});
        inline(env, morph3, context, "md-progress-linear", [], {"class": "md-warn", "md-mode": "buffer", "value": get(env, context, "determinateValue"), "md-buffer-value": get(env, context, "determinateValue2")});
        inline(env, morph4, context, "md-progress-linear", [], {"class": "md-accent", "md-mode": get(env, context, "mode"), "value": get(env, context, "determinateValue")});
        return fragment;
      }
    };
  }()));

});
define('dummy/templates/radio-button', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      var child0 = (function() {
        return {
          isHTMLBars: true,
          revision: "Ember@1.11.0",
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n                        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("span");
            var el2 = dom.createTextNode("Source");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, inline = hooks.inline;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            var morph0 = dom.createMorphAt(fragment,1,1,contextualElement);
            inline(env, morph0, context, "md-icon", [], {"md-svg-src": "images/icons/ic_visibility_24px.svg", "style": "margin: 0 4px 0 0;"});
            return fragment;
          }
        };
      }());
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.0",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1,"class","md-toolbar-tools");
          var el2 = dom.createTextNode("\n                    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("span");
          var el3 = dom.createTextNode("Basic Usage");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("span");
          dom.setAttribute(el2,"flex","");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("                ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, block = hooks.block;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var morph0 = dom.createMorphAt(dom.childAt(fragment, [1]),5,5);
          block(env, morph0, context, "md-button", [], {"action": "showSource", "layoutType": "row", "layout-align": "center center", "style": "min-width: 72px;"}, child0, null);
          return fragment;
        }
      };
    }());
    var child1 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.0",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Apple");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child2 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.0",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Banana");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child3 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.0",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Mango");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child4 = (function() {
      var child0 = (function() {
        return {
          isHTMLBars: true,
          revision: "Ember@1.11.0",
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("            ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, content = hooks.content;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            var morph0 = dom.createMorphAt(fragment,1,1,contextualElement);
            content(env, morph0, context, "d.label");
            return fragment;
          }
        };
      }());
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.0",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, get = hooks.get, block = hooks.block;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var morph0 = dom.createMorphAt(fragment,0,0,contextualElement);
          dom.insertBoundary(fragment, null);
          dom.insertBoundary(fragment, 0);
          block(env, morph0, context, "md-radio-button", [], {"value": get(env, context, "d.value"), "class": "md-primary", "selected": get(env, context, "data.group2"), "disabled": get(env, context, "d.isDisabled")}, child0, null);
          return fragment;
        }
      };
    }());
    var child5 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.0",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Add");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child6 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.0",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Remove");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child7 = (function() {
      var child0 = (function() {
        return {
          isHTMLBars: true,
          revision: "Ember@1.11.0",
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("            ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, get = hooks.get, inline = hooks.inline;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            var morph0 = dom.createMorphAt(fragment,1,1,contextualElement);
            inline(env, morph0, context, "md-icon", [], {"md-svg-icon": get(env, context, "it.id")});
            return fragment;
          }
        };
      }());
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.0",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, get = hooks.get, block = hooks.block;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var morph0 = dom.createMorphAt(fragment,0,0,contextualElement);
          dom.insertBoundary(fragment, null);
          dom.insertBoundary(fragment, 0);
          block(env, morph0, context, "md-radio-button", [], {"value": get(env, context, "it.value"), "selected": get(env, context, "data.group3"), "aria-label": get(env, context, "it.title")}, child0, null);
          return fragment;
        }
      };
    }());
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.0",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","doc-content");
        dom.setAttribute(el1,"layout","column");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"flex","");
        dom.setAttribute(el2,"layout","column");
        var el3 = dom.createTextNode("\n\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("section");
        var el4 = dom.createTextNode("\n\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n\n\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("demo-include");
        dom.setAttribute(el4,"class","radioButtondemoBasicUsage");
        var el5 = dom.createTextNode("\n\n");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("form");
        var el6 = dom.createTextNode("\n    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("p");
        var el7 = dom.createTextNode("Selected Value: ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("span");
        dom.setAttribute(el7,"class","radioValue");
        var el8 = dom.createComment("");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n\n\n    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n\n\n    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("hr");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n\n    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("p");
        var el7 = dom.createTextNode("Selected Value: ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("span");
        dom.setAttribute(el7,"class","radioValue");
        var el8 = dom.createComment("");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n\n\n");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n\n\n\n    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("p");
        var el7 = dom.createTextNode("\n        ");
        dom.appendChild(el6, el7);
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n        ");
        dom.appendChild(el6, el7);
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n    ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n\n    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("hr");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n\n    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("p");
        dom.setAttribute(el6,"style","margin-bottom: 0;");
        var el7 = dom.createTextNode("Graphic radio buttons need to be labeled with the\n        ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("code");
        var el8 = dom.createTextNode("aria-label");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode(" attribute.");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n\n    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("p");
        dom.setAttribute(el6,"style","margin-top: 0;");
        var el7 = dom.createTextNode("Selected Avatar: ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("span");
        dom.setAttribute(el7,"class","radioValue");
        var el8 = dom.createComment("");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n\n");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, get = hooks.get, concat = hooks.concat, attribute = hooks.attribute, block = hooks.block, inline = hooks.inline, content = hooks.content;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var element0 = dom.childAt(fragment, [0, 1, 1]);
        var element1 = dom.childAt(element0, [5, 1]);
        var element2 = dom.childAt(element1, [15]);
        var morph0 = dom.createMorphAt(element0,1,1);
        var morph1 = dom.createMorphAt(element0,3,3);
        var attrMorph0 = dom.createAttrMorph(element0, 'class');
        var morph2 = dom.createMorphAt(dom.childAt(element1, [1, 1]),0,0);
        var morph3 = dom.createMorphAt(element1,3,3);
        var morph4 = dom.createMorphAt(element1,5,5);
        var morph5 = dom.createMorphAt(element1,7,7);
        var morph6 = dom.createMorphAt(dom.childAt(element1, [11, 1]),0,0);
        var morph7 = dom.createMorphAt(element1,13,13);
        var morph8 = dom.createMorphAt(element2,1,1);
        var morph9 = dom.createMorphAt(element2,3,3);
        var morph10 = dom.createMorphAt(dom.childAt(element1, [21, 1]),0,0);
        var morph11 = dom.createMorphAt(element1,23,23);
        attribute(env, attrMorph0, element0, "class", concat(env, ["demo-container md-whiteframe-z1 ", get(env, context, "showSourceClass")]));
        block(env, morph0, context, "md-toolbar", [], {"classNames": "demo-toolbar"}, child0, null);
        inline(env, morph1, context, "code-content", [], {"sourceFiles": get(env, context, "sourceFiles"), "showSource": get(env, context, "showSource")});
        content(env, morph2, context, "data.group1");
        block(env, morph3, context, "md-radio-button", [], {"value": "Apple", "selected": get(env, context, "data.group1"), "class": "md-primary"}, child1, null);
        block(env, morph4, context, "md-radio-button", [], {"value": "Banana", "selected": get(env, context, "data.group1")}, child2, null);
        block(env, morph5, context, "md-radio-button", [], {"value": "Mango", "selected": get(env, context, "data.group1")}, child3, null);
        content(env, morph6, context, "data.group2");
        block(env, morph7, context, "each", [get(env, context, "radioData")], {"keyword": "d"}, child4, null);
        block(env, morph8, context, "md-button", [], {"class": "md-raised", "action": "addItem", "type": "button"}, child5, null);
        block(env, morph9, context, "md-button", [], {"class": "md-raised", "action": "removeItem", "type": "button"}, child6, null);
        content(env, morph10, context, "data.group3");
        block(env, morph11, context, "each", [get(env, context, "avatarData")], {"keyword": "it"}, child7, null);
        return fragment;
      }
    };
  }()));

});
define('dummy/templates/slider', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      var child0 = (function() {
        return {
          isHTMLBars: true,
          revision: "Ember@1.11.0",
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n                        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("span");
            var el2 = dom.createTextNode("Source");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, inline = hooks.inline;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            var morph0 = dom.createMorphAt(fragment,1,1,contextualElement);
            inline(env, morph0, context, "md-icon", [], {"md-svg-src": "images/icons/ic_visibility_24px.svg", "style": "margin: 0 4px 0 0;"});
            return fragment;
          }
        };
      }());
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.0",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1,"class","md-toolbar-tools");
          var el2 = dom.createTextNode("\n                    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("span");
          var el3 = dom.createTextNode("Basic Usage");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("span");
          dom.setAttribute(el2,"flex","");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("                ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, block = hooks.block;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var morph0 = dom.createMorphAt(dom.childAt(fragment, [1]),5,5);
          block(env, morph0, context, "md-button", [], {"action": "showSource", "layoutType": "row", "layout-align": "center center", "style": "min-width: 72px;"}, child0, null);
          return fragment;
        }
      };
    }());
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.0",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","doc-content");
        dom.setAttribute(el1,"layout","column");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"flex","");
        dom.setAttribute(el2,"layout","column");
        var el3 = dom.createTextNode("\n\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("section");
        var el4 = dom.createTextNode("\n\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("demo-include");
        dom.setAttribute(el4,"class","buttondemoBasicUsage");
        var el5 = dom.createTextNode("\n\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","demo-content buttonsDemo1");
        var el6 = dom.createTextNode("\n\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6,"class","display-content");
        var el7 = dom.createTextNode("\n\n");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("md-content");
        dom.setAttribute(el7,"class","md-padding");
        var el8 = dom.createTextNode("\n\n    ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("h3");
        var el9 = dom.createTextNode("\n        RGB ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("span");
        var el10 = dom.createTextNode("     ");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n    ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n\n    ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("div");
        dom.setAttribute(el8,"layout","");
        var el9 = dom.createTextNode("\n        ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("div");
        dom.setAttribute(el9,"flex","10");
        dom.setAttribute(el9,"layout","");
        dom.setAttribute(el9,"layout-align","center center");
        var el10 = dom.createTextNode("\n            ");
        dom.appendChild(el9, el10);
        var el10 = dom.createElement("span");
        var el11 = dom.createTextNode("R");
        dom.appendChild(el10, el11);
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("\n        ");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n        ");
        dom.appendChild(el8, el9);
        var el9 = dom.createComment("");
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n        ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("div");
        dom.setAttribute(el9,"flex","20");
        dom.setAttribute(el9,"layout","");
        dom.setAttribute(el9,"layout-align","center center");
        var el10 = dom.createTextNode("\n            ");
        dom.appendChild(el9, el10);
        var el10 = dom.createComment("");
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("\n        ");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n    ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n\n    ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("div");
        dom.setAttribute(el8,"layout","");
        var el9 = dom.createTextNode("\n        ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("div");
        dom.setAttribute(el9,"flex","10");
        dom.setAttribute(el9,"layout","");
        dom.setAttribute(el9,"layout-align","center center");
        var el10 = dom.createTextNode("\n            ");
        dom.appendChild(el9, el10);
        var el10 = dom.createElement("span");
        var el11 = dom.createTextNode("G");
        dom.appendChild(el10, el11);
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("\n        ");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n        ");
        dom.appendChild(el8, el9);
        var el9 = dom.createComment("");
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n        ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("div");
        dom.setAttribute(el9,"flex","20");
        dom.setAttribute(el9,"layout","");
        dom.setAttribute(el9,"layout-align","center center");
        var el10 = dom.createTextNode("\n            ");
        dom.appendChild(el9, el10);
        var el10 = dom.createComment("");
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("\n        ");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n    ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n\n    ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("div");
        dom.setAttribute(el8,"layout","");
        var el9 = dom.createTextNode("\n        ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("div");
        dom.setAttribute(el9,"flex","10");
        dom.setAttribute(el9,"layout","");
        dom.setAttribute(el9,"layout-align","center center");
        var el10 = dom.createTextNode("\n            ");
        dom.appendChild(el9, el10);
        var el10 = dom.createElement("span");
        var el11 = dom.createTextNode("B");
        dom.appendChild(el10, el11);
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("\n        ");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n        ");
        dom.appendChild(el8, el9);
        var el9 = dom.createComment("");
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n        ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("div");
        dom.setAttribute(el9,"flex","20");
        dom.setAttribute(el9,"layout","");
        dom.setAttribute(el9,"layout-align","center center");
        var el10 = dom.createTextNode("\n            ");
        dom.appendChild(el9, el10);
        var el10 = dom.createComment("");
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("\n        ");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n    ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n\n    ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("h3");
        var el9 = dom.createTextNode("Rating: ");
        dom.appendChild(el8, el9);
        var el9 = dom.createComment("");
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("/5 - demo of theming classes");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n    ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("div");
        dom.setAttribute(el8,"layout","");
        var el9 = dom.createTextNode("\n        ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("div");
        dom.setAttribute(el9,"flex","10");
        dom.setAttribute(el9,"layout","");
        dom.setAttribute(el9,"layout-align","center center");
        var el10 = dom.createTextNode("\n            ");
        dom.appendChild(el9, el10);
        var el10 = dom.createElement("span");
        var el11 = dom.createTextNode("default");
        dom.appendChild(el10, el11);
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("\n        ");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n        ");
        dom.appendChild(el8, el9);
        var el9 = dom.createComment("");
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n    ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n    ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("div");
        dom.setAttribute(el8,"layout","");
        var el9 = dom.createTextNode("\n        ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("div");
        dom.setAttribute(el9,"flex","10");
        dom.setAttribute(el9,"layout","");
        dom.setAttribute(el9,"layout-align","center center");
        var el10 = dom.createTextNode("\n            ");
        dom.appendChild(el9, el10);
        var el10 = dom.createElement("span");
        var el11 = dom.createTextNode("md-warn");
        dom.appendChild(el10, el11);
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("\n        ");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n        ");
        dom.appendChild(el8, el9);
        var el9 = dom.createComment("");
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n    ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n    ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("div");
        dom.setAttribute(el8,"layout","");
        var el9 = dom.createTextNode("\n        ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("div");
        dom.setAttribute(el9,"flex","10");
        dom.setAttribute(el9,"layout","");
        dom.setAttribute(el9,"layout-align","center center");
        var el10 = dom.createTextNode("\n            ");
        dom.appendChild(el9, el10);
        var el10 = dom.createElement("span");
        var el11 = dom.createTextNode("md-primary");
        dom.appendChild(el10, el11);
        dom.appendChild(el9, el10);
        var el10 = dom.createTextNode("\n        ");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n        ");
        dom.appendChild(el8, el9);
        var el9 = dom.createComment("");
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n    ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n\n    ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("h3");
        var el9 = dom.createTextNode("Disabled");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n    ");
        dom.appendChild(el7, el8);
        var el8 = dom.createComment("");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n    ");
        dom.appendChild(el7, el8);
        var el8 = dom.createComment("");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n\n    ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("h3");
        var el9 = dom.createTextNode("Disabled, Discrete");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n    ");
        dom.appendChild(el7, el8);
        var el8 = dom.createComment("");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n    ");
        dom.appendChild(el7, el8);
        var el8 = dom.createComment("");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n\n\n");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n\n                    ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, get = hooks.get, concat = hooks.concat, attribute = hooks.attribute, block = hooks.block, inline = hooks.inline, element = hooks.element, content = hooks.content;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var element0 = dom.childAt(fragment, [0, 1, 1]);
        var element1 = dom.childAt(element0, [5, 1, 1, 1]);
        var element2 = dom.childAt(element1, [1, 1]);
        var element3 = dom.childAt(element1, [3]);
        var element4 = dom.childAt(element1, [5]);
        var element5 = dom.childAt(element1, [7]);
        var morph0 = dom.createMorphAt(element0,1,1);
        var morph1 = dom.createMorphAt(element0,3,3);
        var attrMorph0 = dom.createAttrMorph(element0, 'class');
        var morph2 = dom.createMorphAt(element3,3,3);
        var morph3 = dom.createMorphAt(dom.childAt(element3, [5]),1,1);
        var morph4 = dom.createMorphAt(element4,3,3);
        var morph5 = dom.createMorphAt(dom.childAt(element4, [5]),1,1);
        var morph6 = dom.createMorphAt(element5,3,3);
        var morph7 = dom.createMorphAt(dom.childAt(element5, [5]),1,1);
        var morph8 = dom.createMorphAt(dom.childAt(element1, [9]),1,1);
        var morph9 = dom.createMorphAt(dom.childAt(element1, [11]),3,3);
        var morph10 = dom.createMorphAt(dom.childAt(element1, [13]),3,3);
        var morph11 = dom.createMorphAt(dom.childAt(element1, [15]),3,3);
        var morph12 = dom.createMorphAt(element1,19,19);
        var morph13 = dom.createMorphAt(element1,21,21);
        var morph14 = dom.createMorphAt(element1,25,25);
        var morph15 = dom.createMorphAt(element1,27,27);
        attribute(env, attrMorph0, element0, "class", concat(env, ["demo-container md-whiteframe-z1 ", get(env, context, "showSourceClass")]));
        block(env, morph0, context, "md-toolbar", [], {"classNames": "demo-toolbar"}, child0, null);
        inline(env, morph1, context, "code-content", [], {"sourceFiles": get(env, context, "sourceFiles"), "showSource": get(env, context, "showSource")});
        element(env, element2, context, "bind-attr", [], {"style": get(env, context, "colorStyle")});
        inline(env, morph2, context, "md-slider", [], {"flex": "", "min": "0", "max": "255", "value": get(env, context, "color.red")});
        inline(env, morph3, context, "input", [], {"type": "number", "value": get(env, context, "color.red")});
        inline(env, morph4, context, "md-slider", [], {"flex": "", "min": "0", "max": "255", "value": get(env, context, "color.green"), "classNames": "md-accent"});
        inline(env, morph5, context, "input", [], {"type": "number", "value": get(env, context, "color.green")});
        inline(env, morph6, context, "md-slider", [], {"flex": "", "min": "0", "max": "255", "value": get(env, context, "color.blue"), "classNames": "md-primary"});
        inline(env, morph7, context, "input", [], {"type": "number", "value": get(env, context, "color.blue")});
        content(env, morph8, context, "rating");
        inline(env, morph9, context, "md-slider", [], {"flex": "", "md-discrete": "", "value": get(env, context, "rating1"), "step": "1", "min": "1", "max": "5"});
        inline(env, morph10, context, "md-slider", [], {"flex": "", "classNames": "md-warn", "md-discrete": "", "value": get(env, context, "rating2"), "step": "1", "min": "1", "max": "5"});
        inline(env, morph11, context, "md-slider", [], {"flex": "", "classNames": "md-primary", "md-discrete": "", "value": get(env, context, "rating3"), "step": "1", "min": "1", "max": "5"});
        inline(env, morph12, context, "md-slider", [], {"value": get(env, context, "disabled1"), "disabled": true});
        inline(env, morph13, context, "md-slider", [], {"value": get(env, context, "disabled2"), "disabled": true});
        inline(env, morph14, context, "md-slider", [], {"value": get(env, context, "disabled1"), "disabled": true, "step": "3", "md-discrete": "", "min": "0", "max": "10"});
        inline(env, morph15, context, "md-slider", [], {"value": get(env, context, "disabled2"), "disabled": true, "step": "10", "md-discrete": ""});
        return fragment;
      }
    };
  }()));

});
define('dummy/templates/tabs', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      var child0 = (function() {
        return {
          isHTMLBars: true,
          revision: "Ember@1.11.0",
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n                        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("span");
            var el2 = dom.createTextNode("Source");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, inline = hooks.inline;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            var morph0 = dom.createMorphAt(fragment,1,1,contextualElement);
            inline(env, morph0, context, "md-icon", [], {"md-svg-src": "images/icons/ic_visibility_24px.svg", "style": "margin: 0 4px 0 0;"});
            return fragment;
          }
        };
      }());
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.0",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1,"class","md-toolbar-tools");
          var el2 = dom.createTextNode("\n                    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("span");
          var el3 = dom.createTextNode("Basic Usage");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("span");
          dom.setAttribute(el2,"flex","");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("                ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, block = hooks.block;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var morph0 = dom.createMorphAt(dom.childAt(fragment, [1]),5,5);
          block(env, morph0, context, "md-button", [], {"action": "showSource", "layoutType": "row", "layout-align": "center center", "style": "min-width: 72px;"}, child0, null);
          return fragment;
        }
      };
    }());
    var child1 = (function() {
      var child0 = (function() {
        var child0 = (function() {
          var child0 = (function() {
            return {
              isHTMLBars: true,
              revision: "Ember@1.11.0",
              blockParams: 0,
              cachedFragment: null,
              hasRendered: false,
              build: function build(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("                    ");
                dom.appendChild(el0, el1);
                var el1 = dom.createElement("md-tab-label");
                var el2 = dom.createComment("");
                dom.appendChild(el1, el2);
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode("\n");
                dom.appendChild(el0, el1);
                return el0;
              },
              render: function render(context, env, contextualElement) {
                var dom = env.dom;
                var hooks = env.hooks, content = hooks.content;
                dom.detectNamespace(contextualElement);
                var fragment;
                if (env.useFragmentCache && dom.canClone) {
                  if (this.cachedFragment === null) {
                    fragment = this.build(dom);
                    if (this.hasRendered) {
                      this.cachedFragment = fragment;
                    } else {
                      this.hasRendered = true;
                    }
                  }
                  if (this.cachedFragment) {
                    fragment = dom.cloneNode(this.cachedFragment, true);
                  }
                } else {
                  fragment = this.build(dom);
                }
                var morph0 = dom.createMorphAt(dom.childAt(fragment, [1]),0,0);
                content(env, morph0, context, "tab.title");
                return fragment;
              }
            };
          }());
          return {
            isHTMLBars: true,
            revision: "Ember@1.11.0",
            blockParams: 0,
            cachedFragment: null,
            hasRendered: false,
            build: function build(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              return el0;
            },
            render: function render(context, env, contextualElement) {
              var dom = env.dom;
              var hooks = env.hooks, get = hooks.get, block = hooks.block;
              dom.detectNamespace(contextualElement);
              var fragment;
              if (env.useFragmentCache && dom.canClone) {
                if (this.cachedFragment === null) {
                  fragment = this.build(dom);
                  if (this.hasRendered) {
                    this.cachedFragment = fragment;
                  } else {
                    this.hasRendered = true;
                  }
                }
                if (this.cachedFragment) {
                  fragment = dom.cloneNode(this.cachedFragment, true);
                }
              } else {
                fragment = this.build(dom);
              }
              var morph0 = dom.createMorphAt(fragment,0,0,contextualElement);
              dom.insertBoundary(fragment, null);
              dom.insertBoundary(fragment, 0);
              block(env, morph0, context, "md-tab", [], {"disabled": get(env, context, "tab.disabled"), "label": get(env, context, "tab.title")}, child0, null);
              return fragment;
            }
          };
        }());
        return {
          isHTMLBars: true,
          revision: "Ember@1.11.0",
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, get = hooks.get, block = hooks.block;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            var morph0 = dom.createMorphAt(fragment,0,0,contextualElement);
            dom.insertBoundary(fragment, null);
            dom.insertBoundary(fragment, 0);
            block(env, morph0, context, "each", [get(env, context, "tabs")], {"keyword": "tab"}, child0, null);
            return fragment;
          }
        };
      }());
      var child1 = (function() {
        var child0 = (function() {
          var child0 = (function() {
            var child0 = (function() {
              return {
                isHTMLBars: true,
                revision: "Ember@1.11.0",
                blockParams: 0,
                cachedFragment: null,
                hasRendered: false,
                build: function build(dom) {
                  var el0 = dom.createDocumentFragment();
                  var el1 = dom.createTextNode("                            Remove Tab");
                  dom.appendChild(el0, el1);
                  return el0;
                },
                render: function render(context, env, contextualElement) {
                  var dom = env.dom;
                  dom.detectNamespace(contextualElement);
                  var fragment;
                  if (env.useFragmentCache && dom.canClone) {
                    if (this.cachedFragment === null) {
                      fragment = this.build(dom);
                      if (this.hasRendered) {
                        this.cachedFragment = fragment;
                      } else {
                        this.hasRendered = true;
                      }
                    }
                    if (this.cachedFragment) {
                      fragment = dom.cloneNode(this.cachedFragment, true);
                    }
                  } else {
                    fragment = this.build(dom);
                  }
                  return fragment;
                }
              };
            }());
            return {
              isHTMLBars: true,
              revision: "Ember@1.11.0",
              blockParams: 0,
              cachedFragment: null,
              hasRendered: false,
              build: function build(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("                    ");
                dom.appendChild(el0, el1);
                var el1 = dom.createElement("div");
                dom.setAttribute(el1,"class","demo-tab");
                dom.setAttribute(el1,"style","padding: 25px; text-align: center;");
                var el2 = dom.createTextNode("\n                        ");
                dom.appendChild(el1, el2);
                var el2 = dom.createComment("");
                dom.appendChild(el1, el2);
                var el2 = dom.createTextNode("\n                        ");
                dom.appendChild(el1, el2);
                var el2 = dom.createElement("br");
                dom.appendChild(el1, el2);
                var el2 = dom.createTextNode("\n");
                dom.appendChild(el1, el2);
                var el2 = dom.createComment("");
                dom.appendChild(el1, el2);
                var el2 = dom.createTextNode("\n                    ");
                dom.appendChild(el1, el2);
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode("\n");
                dom.appendChild(el0, el1);
                return el0;
              },
              render: function render(context, env, contextualElement) {
                var dom = env.dom;
                var hooks = env.hooks, content = hooks.content, get = hooks.get, block = hooks.block;
                dom.detectNamespace(contextualElement);
                var fragment;
                if (env.useFragmentCache && dom.canClone) {
                  if (this.cachedFragment === null) {
                    fragment = this.build(dom);
                    if (this.hasRendered) {
                      this.cachedFragment = fragment;
                    } else {
                      this.hasRendered = true;
                    }
                  }
                  if (this.cachedFragment) {
                    fragment = dom.cloneNode(this.cachedFragment, true);
                  }
                } else {
                  fragment = this.build(dom);
                }
                var element0 = dom.childAt(fragment, [1]);
                var morph0 = dom.createMorphAt(element0,1,1);
                var morph1 = dom.createMorphAt(element0,5,5);
                content(env, morph0, context, "tab.title");
                block(env, morph1, context, "md-button", [], {"class": "md-primary md-raised", "disabled": get(env, context, "cantRemoveTabs"), "action": "removeTab"}, child0, null);
                return fragment;
              }
            };
          }());
          return {
            isHTMLBars: true,
            revision: "Ember@1.11.0",
            blockParams: 0,
            cachedFragment: null,
            hasRendered: false,
            build: function build(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              return el0;
            },
            render: function render(context, env, contextualElement) {
              var dom = env.dom;
              var hooks = env.hooks, block = hooks.block;
              dom.detectNamespace(contextualElement);
              var fragment;
              if (env.useFragmentCache && dom.canClone) {
                if (this.cachedFragment === null) {
                  fragment = this.build(dom);
                  if (this.hasRendered) {
                    this.cachedFragment = fragment;
                  } else {
                    this.hasRendered = true;
                  }
                }
                if (this.cachedFragment) {
                  fragment = dom.cloneNode(this.cachedFragment, true);
                }
              } else {
                fragment = this.build(dom);
              }
              var morph0 = dom.createMorphAt(fragment,0,0,contextualElement);
              dom.insertBoundary(fragment, null);
              dom.insertBoundary(fragment, 0);
              block(env, morph0, context, "md-tab-content", [], {}, child0, null);
              return fragment;
            }
          };
        }());
        return {
          isHTMLBars: true,
          revision: "Ember@1.11.0",
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, get = hooks.get, block = hooks.block;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            var morph0 = dom.createMorphAt(fragment,0,0,contextualElement);
            dom.insertBoundary(fragment, null);
            dom.insertBoundary(fragment, 0);
            block(env, morph0, context, "each", [get(env, context, "tabs")], {"keyword": "tab"}, child0, null);
            return fragment;
          }
        };
      }());
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.0",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, block = hooks.block;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var morph0 = dom.createMorphAt(fragment,1,1,contextualElement);
          var morph1 = dom.createMorphAt(fragment,3,3,contextualElement);
          dom.insertBoundary(fragment, null);
          block(env, morph0, context, "md-tabs-wrapper", [], {}, child0, null);
          block(env, morph1, context, "md-tabs-content-wrapper", [], {}, child1, null);
          return fragment;
        }
      };
    }());
    var child2 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.0",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          dom.setAttribute(el1,"for","activeIndex");
          var el2 = dom.createTextNode("Active Index");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, inline = hooks.inline;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var morph0 = dom.createMorphAt(fragment,3,3,contextualElement);
          inline(env, morph0, context, "md-input", [], {"type": "text", "id": "activeIndex", "disabled": true});
          return fragment;
        }
      };
    }());
    var child3 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.0",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          dom.setAttribute(el1,"for","activeTitle");
          var el2 = dom.createTextNode("Active Title");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, inline = hooks.inline;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var morph0 = dom.createMorphAt(fragment,3,3,contextualElement);
          inline(env, morph0, context, "md-input", [], {"type": "text", "id": "activeTitle"});
          return fragment;
        }
      };
    }());
    var child4 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.0",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          dom.setAttribute(el1,"for","label");
          var el2 = dom.createTextNode("Label");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, inline = hooks.inline;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var morph0 = dom.createMorphAt(fragment,3,3,contextualElement);
          inline(env, morph0, context, "md-input", [], {"type": "text", "id": "label"});
          return fragment;
        }
      };
    }());
    var child5 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.0",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          dom.setAttribute(el1,"for","content");
          var el2 = dom.createTextNode("Content");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, inline = hooks.inline;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var morph0 = dom.createMorphAt(fragment,3,3,contextualElement);
          inline(env, morph0, context, "md-input", [], {"type": "text", "id": "content"});
          return fragment;
        }
      };
    }());
    var child6 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.0",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                Add Tab\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.0",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","doc-content");
        dom.setAttribute(el1,"layout","column");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"flex","");
        dom.setAttribute(el2,"layout","column");
        dom.setAttribute(el2,"style","z-index: 1;");
        var el3 = dom.createTextNode("\n\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","doc-description");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        var el5 = dom.createTextNode("The Dynamic Tabs demo shows how internal tab views can be easily used.");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("section");
        var el4 = dom.createTextNode("\n\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("demo-include");
        dom.setAttribute(el4,"class","demoDynamicTabs");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","demo-content ");
        var el6 = dom.createTextNode("\n\n\n");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6,"class","sample");
        dom.setAttribute(el6,"layout","column");
        var el7 = dom.createTextNode("\n\n");
        dom.appendChild(el6, el7);
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n    ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("form");
        dom.setAttribute(el7,"layout","column");
        dom.setAttribute(el7,"style","padding-top:20px;padding-left:20px;");
        var el8 = dom.createTextNode("\n        ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("div");
        dom.setAttribute(el8,"layout","row");
        dom.setAttribute(el8,"layout-sm","column");
        dom.setAttribute(el8,"layout-margin","");
        var el9 = dom.createTextNode("\n");
        dom.appendChild(el8, el9);
        var el9 = dom.createComment("");
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n");
        dom.appendChild(el8, el9);
        var el9 = dom.createComment("");
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("        ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n\n        ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("div");
        dom.setAttribute(el8,"layout","row");
        dom.setAttribute(el8,"layout-sm","column");
        dom.setAttribute(el8,"layout-margin","");
        var el9 = dom.createTextNode("\n            ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("span");
        dom.setAttribute(el9,"class","title");
        var el10 = dom.createTextNode("Add a new Tab:");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n");
        dom.appendChild(el8, el9);
        var el9 = dom.createComment("");
        dom.appendChild(el8, el9);
        var el9 = dom.createComment("");
        dom.appendChild(el8, el9);
        var el9 = dom.createComment("");
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("        ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n    ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n\n\n");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n\n                ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, get = hooks.get, concat = hooks.concat, attribute = hooks.attribute, block = hooks.block, inline = hooks.inline, element = hooks.element;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var element1 = dom.childAt(fragment, [0, 1, 3]);
        var element2 = dom.childAt(element1, [5, 1, 1]);
        var element3 = dom.childAt(element2, [3]);
        var element4 = dom.childAt(element3, [1]);
        var element5 = dom.childAt(element3, [3]);
        var morph0 = dom.createMorphAt(element1,1,1);
        var morph1 = dom.createMorphAt(element1,3,3);
        var attrMorph0 = dom.createAttrMorph(element1, 'class');
        var morph2 = dom.createMorphAt(element2,1,1);
        var morph3 = dom.createMorphAt(element4,1,1);
        var morph4 = dom.createMorphAt(element4,3,3);
        var morph5 = dom.createMorphAt(element5,3,3);
        var morph6 = dom.createMorphAt(element5,4,4);
        var morph7 = dom.createMorphAt(element5,5,5);
        attribute(env, attrMorph0, element1, "class", concat(env, ["demo-container md-whiteframe-z1 ", get(env, context, "showSourceClass")]));
        block(env, morph0, context, "md-toolbar", [], {"classNames": "demo-toolbar"}, child0, null);
        inline(env, morph1, context, "code-content", [], {"sourceFiles": get(env, context, "sourceFiles"), "showSource": get(env, context, "showSource")});
        block(env, morph2, context, "md-tabs", [], {"selectedIndex": get(env, context, "selectedIndex"), "md-border-bottom": ""}, child1, null);
        element(env, element3, context, "action", ["addTab"], {"on": "submit"});
        block(env, morph3, context, "md-input-container", [], {"value": get(env, context, "selectedIndex")}, child2, null);
        block(env, morph4, context, "md-input-container", [], {"value": get(env, context, "selectedTab.title")}, child3, null);
        block(env, morph5, context, "md-input-container", [], {"value": get(env, context, "tTitle")}, child4, null);
        block(env, morph6, context, "md-input-container", [], {"value": get(env, context, "tContent")}, child5, null);
        block(env, morph7, context, "md-button", [], {"class": "add-tab md-primary", "style": "max-height: 40px"}, child6, null);
        return fragment;
      }
    };
  }()));

});
define('dummy/templates/toolbar', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      var child0 = (function() {
        return {
          isHTMLBars: true,
          revision: "Ember@1.11.0",
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n                        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("span");
            var el2 = dom.createTextNode("Source");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, inline = hooks.inline;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            var morph0 = dom.createMorphAt(fragment,1,1,contextualElement);
            inline(env, morph0, context, "md-icon", [], {"md-svg-src": "images/icons/ic_visibility_24px.svg", "style": "margin: 0 4px 0 0;"});
            return fragment;
          }
        };
      }());
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.0",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1,"class","md-toolbar-tools");
          var el2 = dom.createTextNode("\n                    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("span");
          var el3 = dom.createTextNode("Basic Usage");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("span");
          dom.setAttribute(el2,"flex","");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("                ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, block = hooks.block;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var morph0 = dom.createMorphAt(dom.childAt(fragment, [1]),5,5);
          block(env, morph0, context, "md-button", [], {"action": "showSource", "layoutType": "row", "layout-align": "center center", "style": "min-width: 72px;"}, child0, null);
          return fragment;
        }
      };
    }());
    var child1 = (function() {
      var child0 = (function() {
        return {
          isHTMLBars: true,
          revision: "Ember@1.11.0",
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("          ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, inline = hooks.inline;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            var morph0 = dom.createMorphAt(fragment,1,1,contextualElement);
            inline(env, morph0, context, "md-icon", [], {"md-svg-icon": "images/icons/menu.svg"});
            return fragment;
          }
        };
      }());
      var child1 = (function() {
        return {
          isHTMLBars: true,
          revision: "Ember@1.11.0",
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("          ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, inline = hooks.inline;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            var morph0 = dom.createMorphAt(fragment,1,1,contextualElement);
            inline(env, morph0, context, "md-icon", [], {"md-svg-icon": "images/icons/favorite.svg"});
            return fragment;
          }
        };
      }());
      var child2 = (function() {
        return {
          isHTMLBars: true,
          revision: "Ember@1.11.0",
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("          ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, inline = hooks.inline;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            var morph0 = dom.createMorphAt(fragment,1,1,contextualElement);
            inline(env, morph0, context, "md-icon", [], {"md-svg-icon": "images/icons/more_vert.svg"});
            return fragment;
          }
        };
      }());
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.0",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1,"class","md-toolbar-tools");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("          ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("h2");
          var el3 = dom.createTextNode("\n              ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("span");
          var el4 = dom.createTextNode("Toolbar with icon buttons");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n          ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n          ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("span");
          dom.setAttribute(el2,"flex","");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("      ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, block = hooks.block;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var element0 = dom.childAt(fragment, [1]);
          var morph0 = dom.createMorphAt(element0,1,1);
          var morph1 = dom.createMorphAt(element0,7,7);
          var morph2 = dom.createMorphAt(element0,8,8);
          block(env, morph0, context, "md-button", [], {"class": "md-icon-button"}, child0, null);
          block(env, morph1, context, "md-button", [], {"class": "md-icon-button"}, child1, null);
          block(env, morph2, context, "md-button", [], {"class": "md-icon-button"}, child2, null);
          return fragment;
        }
      };
    }());
    var child2 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.0",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("h2");
          dom.setAttribute(el1,"class","md-toolbar-tools");
          var el2 = dom.createTextNode("\n          ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("span");
          var el3 = dom.createTextNode("Toolbar: tall (md-accent)");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    var child3 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.0",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("span");
          dom.setAttribute(el1,"flex","");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("h2");
          dom.setAttribute(el1,"class","md-toolbar-tools md-toolbar-tools-bottom");
          var el2 = dom.createTextNode("\n          ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("span");
          dom.setAttribute(el2,"class","md-flex");
          var el3 = dom.createTextNode("Toolbar: tall with actions pin to the bottom (md-warn md-hue-3)");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.0",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","doc-content");
        dom.setAttribute(el1,"layout","column");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"flex","");
        dom.setAttribute(el2,"layout","column");
        var el3 = dom.createTextNode("\n\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("section");
        var el4 = dom.createTextNode("\n\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("demo-include");
        dom.setAttribute(el4,"class","contentdemoBasicUsage");
        var el5 = dom.createTextNode("\n\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","demo-content");
        var el6 = dom.createTextNode("\n                    ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6,"class","display-content");
        var el7 = dom.createTextNode("\n");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("md-content");
        var el8 = dom.createTextNode("\n\n");
        dom.appendChild(el7, el8);
        var el8 = dom.createComment("");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n    ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("br");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n\n    ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("br");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n\n");
        dom.appendChild(el7, el8);
        var el8 = dom.createComment("");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n    ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("br");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n\n");
        dom.appendChild(el7, el8);
        var el8 = dom.createComment("");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                    ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n                ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n\n\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, get = hooks.get, concat = hooks.concat, attribute = hooks.attribute, block = hooks.block, inline = hooks.inline;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var element1 = dom.childAt(fragment, [0, 1, 1]);
        var element2 = dom.childAt(element1, [5, 1, 1, 1]);
        var morph0 = dom.createMorphAt(element1,1,1);
        var morph1 = dom.createMorphAt(element1,3,3);
        var attrMorph0 = dom.createAttrMorph(element1, 'class');
        var morph2 = dom.createMorphAt(element2,1,1);
        var morph3 = dom.createMorphAt(element2,7,7);
        var morph4 = dom.createMorphAt(element2,11,11);
        attribute(env, attrMorph0, element1, "class", concat(env, ["demo-container md-whiteframe-z1 ", get(env, context, "showSourceClass")]));
        block(env, morph0, context, "md-toolbar", [], {"classNames": "demo-toolbar"}, child0, null);
        inline(env, morph1, context, "code-content", [], {"sourceFiles": get(env, context, "sourceFiles"), "showSource": get(env, context, "showSource")});
        block(env, morph2, context, "md-toolbar", [], {}, child1, null);
        block(env, morph3, context, "md-toolbar", [], {"class": "md-tall md-accent"}, child2, null);
        block(env, morph4, context, "md-toolbar", [], {"class": "md-tall md-warn md-hue-3"}, child3, null);
        return fragment;
      }
    };
  }()));

});
define('dummy/templates/tooltip', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      var child0 = (function() {
        return {
          isHTMLBars: true,
          revision: "Ember@1.11.0",
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n                        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("span");
            var el2 = dom.createTextNode("Source");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, inline = hooks.inline;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            var morph0 = dom.createMorphAt(fragment,1,1,contextualElement);
            inline(env, morph0, context, "md-icon", [], {"md-svg-src": "images/icons/ic_visibility_24px.svg", "style": "margin: 0 4px 0 0;"});
            return fragment;
          }
        };
      }());
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.0",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("                ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1,"class","md-toolbar-tools");
          var el2 = dom.createTextNode("\n                    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("span");
          var el3 = dom.createTextNode("Basic Usage");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n                    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("span");
          dom.setAttribute(el2,"flex","");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("                ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, block = hooks.block;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var morph0 = dom.createMorphAt(dom.childAt(fragment, [1]),5,5);
          block(env, morph0, context, "md-button", [], {"action": "showSource", "layoutType": "row", "layout-align": "center center", "style": "min-width: 72px;"}, child0, null);
          return fragment;
        }
      };
    }());
    var child1 = (function() {
      var child0 = (function() {
        var child0 = (function() {
          return {
            isHTMLBars: true,
            revision: "Ember@1.11.0",
            blockParams: 0,
            cachedFragment: null,
            hasRendered: false,
            build: function build(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("                    Refresh\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            render: function render(context, env, contextualElement) {
              var dom = env.dom;
              dom.detectNamespace(contextualElement);
              var fragment;
              if (env.useFragmentCache && dom.canClone) {
                if (this.cachedFragment === null) {
                  fragment = this.build(dom);
                  if (this.hasRendered) {
                    this.cachedFragment = fragment;
                  } else {
                    this.hasRendered = true;
                  }
                }
                if (this.cachedFragment) {
                  fragment = dom.cloneNode(this.cachedFragment, true);
                }
              } else {
                fragment = this.build(dom);
              }
              return fragment;
            }
          };
        }());
        return {
          isHTMLBars: true,
          revision: "Ember@1.11.0",
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("                ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            var hooks = env.hooks, block = hooks.block, inline = hooks.inline;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            var morph0 = dom.createMorphAt(fragment,0,0,contextualElement);
            var morph1 = dom.createMorphAt(fragment,2,2,contextualElement);
            dom.insertBoundary(fragment, 0);
            block(env, morph0, context, "md-tooltip", [], {}, child0, null);
            inline(env, morph1, context, "md-icon", [], {"icon": "/images/icons/ic_refresh_24px.svg", "style": "width: 24px; height: 24px;"});
            return fragment;
          }
        };
      }());
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.0",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("h2");
          dom.setAttribute(el1,"class","md-toolbar-tools");
          var el2 = dom.createTextNode("\n            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("span");
          dom.setAttribute(el2,"flex","");
          var el3 = dom.createTextNode("Awesome Md App");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("        ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, block = hooks.block;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var morph0 = dom.createMorphAt(dom.childAt(fragment, [1]),3,3);
          block(env, morph0, context, "md-button", [], {"class": "md-fab md-accent", "aria-label": "refresh"}, child0, null);
          return fragment;
        }
      };
    }());
    var child2 = (function() {
      var child0 = (function() {
        return {
          isHTMLBars: true,
          revision: "Ember@1.11.0",
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                Insert Drive\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            return fragment;
          }
        };
      }());
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.0",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, inline = hooks.inline, get = hooks.get, block = hooks.block;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var morph0 = dom.createMorphAt(fragment,1,1,contextualElement);
          var morph1 = dom.createMorphAt(fragment,3,3,contextualElement);
          dom.insertBoundary(fragment, null);
          inline(env, morph0, context, "md-icon", [], {"md-svg-src": "images/icons/ic_insert_drive_file_24px.svg", "style": "width: 24px; height: 24px;"});
          block(env, morph1, context, "md-tooltip", [], {"visible": get(env, context, "demo.showTooltip")}, child0, null);
          return fragment;
        }
      };
    }());
    var child3 = (function() {
      var child0 = (function() {
        return {
          isHTMLBars: true,
          revision: "Ember@1.11.0",
          blockParams: 0,
          cachedFragment: null,
          hasRendered: false,
          build: function build(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                Photos\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          render: function render(context, env, contextualElement) {
            var dom = env.dom;
            dom.detectNamespace(contextualElement);
            var fragment;
            if (env.useFragmentCache && dom.canClone) {
              if (this.cachedFragment === null) {
                fragment = this.build(dom);
                if (this.hasRendered) {
                  this.cachedFragment = fragment;
                } else {
                  this.hasRendered = true;
                }
              }
              if (this.cachedFragment) {
                fragment = dom.cloneNode(this.cachedFragment, true);
              }
            } else {
              fragment = this.build(dom);
            }
            return fragment;
          }
        };
      }());
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.0",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          var hooks = env.hooks, inline = hooks.inline, block = hooks.block;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          var morph0 = dom.createMorphAt(fragment,1,1,contextualElement);
          var morph1 = dom.createMorphAt(fragment,3,3,contextualElement);
          dom.insertBoundary(fragment, null);
          inline(env, morph0, context, "md-icon", [], {"md-svg-src": "images/icons/ic_photo_24px.svg", "style": "width: 24px; height: 24px;"});
          block(env, morph1, context, "md-tooltip", [], {}, child0, null);
          return fragment;
        }
      };
    }());
    var child4 = (function() {
      return {
        isHTMLBars: true,
        revision: "Ember@1.11.0",
        blockParams: 0,
        cachedFragment: null,
        hasRendered: false,
        build: function build(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("            Insert Drive\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        render: function render(context, env, contextualElement) {
          var dom = env.dom;
          dom.detectNamespace(contextualElement);
          var fragment;
          if (env.useFragmentCache && dom.canClone) {
            if (this.cachedFragment === null) {
              fragment = this.build(dom);
              if (this.hasRendered) {
                this.cachedFragment = fragment;
              } else {
                this.hasRendered = true;
              }
            }
            if (this.cachedFragment) {
              fragment = dom.cloneNode(this.cachedFragment, true);
            }
          } else {
            fragment = this.build(dom);
          }
          return fragment;
        }
      };
    }());
    return {
      isHTMLBars: true,
      revision: "Ember@1.11.0",
      blockParams: 0,
      cachedFragment: null,
      hasRendered: false,
      build: function build(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","doc-content");
        dom.setAttribute(el1,"layout","column");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"flex","");
        dom.setAttribute(el2,"layout","column");
        dom.setAttribute(el2,"style","z-index: 1;");
        var el3 = dom.createTextNode("\n\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","doc-description");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("p");
        var el5 = dom.createTextNode("The Dynamic Tabs demo shows how internal tab views can be easily used.");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("section");
        var el4 = dom.createTextNode("\n\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("demo-include");
        dom.setAttribute(el4,"class","tooltipdemoBasicUsage");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","demo-content ");
        var el6 = dom.createTextNode("\n\n\n\n");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        var el7 = dom.createTextNode("\n\n");
        dom.appendChild(el6, el7);
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("    ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("md-content");
        dom.setAttribute(el7,"class","md-padding");
        var el8 = dom.createTextNode("\n\n        ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("p");
        var el9 = dom.createTextNode("\n            The tooltip is visible when the button is hovered, focused, or touched.\n        ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n\n");
        dom.appendChild(el7, el8);
        var el8 = dom.createComment("");
        dom.appendChild(el7, el8);
        var el8 = dom.createComment("");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n\n        ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("div");
        dom.setAttribute(el8,"style","margin-top: 15rem;");
        var el9 = dom.createTextNode("\n            ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("p");
        var el10 = dom.createTextNode("Additionally, the Tooltip's `md-visible` attribute can use data-binding to programmatically show/hide itself. Toggle the checkbox below...");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n        ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n\n\n");
        dom.appendChild(el7, el8);
        var el8 = dom.createComment("");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n    ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n\n\n                ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n\n\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      render: function render(context, env, contextualElement) {
        var dom = env.dom;
        var hooks = env.hooks, get = hooks.get, concat = hooks.concat, attribute = hooks.attribute, block = hooks.block, inline = hooks.inline;
        dom.detectNamespace(contextualElement);
        var fragment;
        if (env.useFragmentCache && dom.canClone) {
          if (this.cachedFragment === null) {
            fragment = this.build(dom);
            if (this.hasRendered) {
              this.cachedFragment = fragment;
            } else {
              this.hasRendered = true;
            }
          }
          if (this.cachedFragment) {
            fragment = dom.cloneNode(this.cachedFragment, true);
          }
        } else {
          fragment = this.build(dom);
        }
        var element0 = dom.childAt(fragment, [0, 1, 3]);
        var element1 = dom.childAt(element0, [5, 1, 1]);
        var element2 = dom.childAt(element1, [3]);
        var morph0 = dom.createMorphAt(element0,1,1);
        var morph1 = dom.createMorphAt(element0,3,3);
        var attrMorph0 = dom.createAttrMorph(element0, 'class');
        var morph2 = dom.createMorphAt(element1,1,1);
        var morph3 = dom.createMorphAt(element2,3,3);
        var morph4 = dom.createMorphAt(element2,4,4);
        var morph5 = dom.createMorphAt(element2,8,8);
        attribute(env, attrMorph0, element0, "class", concat(env, ["demo-container md-whiteframe-z1 ", get(env, context, "showSourceClass")]));
        block(env, morph0, context, "md-toolbar", [], {"classNames": "demo-toolbar"}, child0, null);
        inline(env, morph1, context, "code-content", [], {"sourceFiles": get(env, context, "sourceFiles"), "showSource": get(env, context, "showSource")});
        block(env, morph2, context, "md-toolbar", [], {"class": "md-accent"}, child1, null);
        block(env, morph3, context, "md-button", [], {"class": "md-fab md-fab-top-left left", "aria-label": "Insert Drive"}, child2, null);
        block(env, morph4, context, "md-button", [], {"class": "md-fab md-fab-top-right right", "aria-label": "Photos"}, child3, null);
        block(env, morph5, context, "md-checkbox", [], {"checked": get(env, context, "demo.showTooltip")}, child4, null);
        return fragment;
      }
    };
  }()));

});
define('dummy/tests/helpers/resolver', ['exports', 'ember/resolver', 'dummy/config/environment'], function (exports, Resolver, config) {

  'use strict';

  var resolver = Resolver['default'].create();

  resolver.namespace = {
    modulePrefix: config['default'].modulePrefix,
    podModulePrefix: config['default'].podModulePrefix
  };

  exports['default'] = resolver;

});
define('dummy/tests/helpers/start-app', ['exports', 'ember', 'dummy/app', 'dummy/router', 'dummy/config/environment'], function (exports, Ember, Application, Router, config) {

  'use strict';



  exports['default'] = startApp;
  function startApp(attrs) {
    var application;

    var attributes = Ember['default'].merge({}, config['default'].APP);
    attributes = Ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    Ember['default'].run(function () {
      application = Application['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }

});
define('dummy/tests/test-helper', ['dummy/tests/helpers/resolver', 'ember-qunit'], function (resolver, ember_qunit) {

	'use strict';

	ember_qunit.setResolver(resolver['default']);

});
define('dummy/tests/unit/components/md-backdrop-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForComponent("md-backdrop", {});

  ember_qunit.test("it renders", function (assert) {
    assert.expect(2);

    // Creates the component instance
    var component = this.subject();
    assert.equal(component._state, "preRender");

    // Renders the component to the page
    this.render();
    assert.equal(component._state, "inDOM");
  });

  // Specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']

});
define('dummy/tests/unit/components/md-button-link-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForComponent("md-button-link", {});

  ember_qunit.test("it renders", function (assert) {
    assert.expect(2);

    // Creates the component instance
    var component = this.subject();
    assert.equal(component._state, "preRender");

    // Renders the component to the page
    this.render();
    assert.equal(component._state, "inDOM");
  });

  // Specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']

});
define('dummy/tests/unit/components/md-button-test', ['ember', 'ember-qunit'], function (Ember, ember_qunit) {

  'use strict';

  ember_qunit.moduleForComponent("md-button", {
    // Specify the other units that are required for this test
    needs: ["service:ripple", "service:constants", "service:sniffer"]
  });

  ember_qunit.test("it renders", function (assert) {
    assert.expect(2);

    // Creates the component instance
    var component = this.subject();
    assert.equal(component._state, "preRender");

    // Renders the component to the page
    this.render();
    assert.equal(component._state, "inDOM");
  });

  ember_qunit.test("it should have md-ripple-container after click", function (assert) {
    var _this = this;

    var component = this.subject();

    this.render();

    var position = this.$().position();

    Ember['default'].run(function () {
      _this.$().triggerHandler({ type: "mousedown", clientX: position.left, clientY: position.top });
    });

    assert.equal(this.$()[0].getElementsByClassName("md-ripple-container").length, 1, "Ripple is added");
  });

  ember_qunit.test("it should not have md-ripple-container if mdNoInk attribute is set", function (assert) {
    var _this = this;

    var component = this.subject({
      mdNoInk: true
    });

    this.render();

    var position = this.$().position();

    Ember['default'].run(function () {
      _this.$().triggerHandler({ type: "mousedown", clientX: position.left, clientY: position.top });
    });

    assert.equal(this.$()[0].getElementsByClassName("md-ripple-container").length, 0, "Ripple is not present");
  });

});
define('dummy/tests/unit/components/md-checkbox-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForComponent("md-checkbox", {
    // Specify the other units that are required for this test
    needs: ["service:ripple", "service:constants", "service:sniffer"]
  });

  ember_qunit.test("it renders", function (assert) {
    assert.expect(2);

    // Creates the component instance
    var component = this.subject();
    assert.equal(component._state, "preRender");

    // Renders the component to the page
    this.render();
    assert.equal(component._state, "inDOM");
  });

  ember_qunit.test("it should have md-checked class when checked", function (assert) {
    assert.expect(1);

    var component = this.subject();

    Ember.run(function () {
      component.set("checked", true);
    });

    assert.ok(this.$().hasClass("md-checked"));
  });

  ember_qunit.test("it should be able to be checked using space bar", function (assert) {
    var _this = this;

    assert.expect(2);
    var component = this.subject();

    var e = Ember.$.Event("keypress");
    e.which = 32;

    Ember.run(function () {
      _this.$().trigger(e);
    });

    assert.ok(this.$().hasClass("md-checked"));
    assert.equal(component.get("checked"), true);
  });

  ember_qunit.test("it should be able to be unchecked using space bar", function (assert) {
    var _this = this;

    assert.expect(2);
    var component = this.subject({
      checked: true
    });

    var e = Ember.$.Event("keypress");
    e.which = 32;

    Ember.run(function () {
      _this.$().trigger(e);
    });

    assert.ok(!this.$().hasClass("md-checked"));
    assert.equal(component.get("checked"), false);
  });

  ember_qunit.test("it should be able to be checked using enter key", function (assert) {
    var _this = this;

    assert.expect(2);
    var component = this.subject();

    var e = Ember.$.Event("keypress");
    e.which = 13;

    Ember.run(function () {
      _this.$().trigger(e);
    });

    assert.ok(this.$().hasClass("md-checked"));
    assert.equal(component.get("checked"), true);
  });

  ember_qunit.test("it should be able to be unchecked using enter key", function (assert) {
    var _this = this;

    assert.expect(2);
    var component = this.subject({
      checked: true
    });

    var e = Ember.$.Event("keypress");
    e.which = 13;

    Ember.run(function () {
      _this.$().trigger(e);
    });

    assert.ok(!this.$().hasClass("md-checked"));
    assert.equal(component.get("checked"), false);
  });

  ember_qunit.test("should not be able to toggle value if disabled", function (assert) {
    var _this = this;

    var component = this.subject({
      disabled: true,
      checked: true
    });

    var e = Ember.$.Event("mousedown");
    e.clientX = this.$().position().left;
    e.clientY = this.$().position().top;

    Ember.run(function () {
      _this.$().trigger(e);
    });

    assert.ok(this.$().hasClass("md-checked"));
    assert.equal(component.get("checked"), true);
  });

});
define('dummy/tests/unit/components/md-icon-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForComponent("md-icon", {});

  ember_qunit.test("it renders", function (assert) {
    assert.expect(2);

    // Creates the component instance
    var component = this.subject();
    assert.equal(component._state, "preRender");

    // Renders the component to the page
    this.render();
    assert.equal(component._state, "inDOM");
  });

  // Specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']

});
define('dummy/tests/unit/components/md-input-container-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForComponent("md-input-container", {});

  ember_qunit.test("it renders", function (assert) {
    assert.expect(2);

    // Creates the component instance
    var component = this.subject();
    assert.equal(component._state, "preRender");

    // Renders the component to the page
    this.render();
    assert.equal(component._state, "inDOM");
  });

  // Specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']

});
define('dummy/tests/unit/components/md-input-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForComponent("md-input", {});

  ember_qunit.test("it renders", function (assert) {
    assert.expect(2);

    // Creates the component instance
    var component = this.subject();
    assert.equal(component._state, "preRender");

    // Renders the component to the page
    this.render();
    assert.equal(component._state, "inDOM");
  });

  // Specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']

});
define('dummy/tests/unit/components/md-list-item-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForComponent("md-list-item", {});

  ember_qunit.test("it renders", function (assert) {
    assert.expect(2);

    // Creates the component instance
    var component = this.subject();
    assert.equal(component._state, "preRender");

    // Renders the component to the page
    this.render();
    assert.equal(component._state, "inDOM");
  });

  // Specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']

});
define('dummy/tests/unit/components/md-list-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForComponent("md-list", {});

  ember_qunit.test("it renders", function (assert) {
    assert.expect(2);

    // Creates the component instance
    var component = this.subject();
    assert.equal(component._state, "preRender");

    // Renders the component to the page
    this.render();
    assert.equal(component._state, "inDOM");
  });

  // Specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']

});
define('dummy/tests/unit/components/md-progress-circular-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForComponent("md-progress-circular", {});

  ember_qunit.test("it renders", function (assert) {
    assert.expect(2);

    // Creates the component instance
    var component = this.subject();
    assert.equal(component._state, "preRender");

    // Renders the component to the page
    this.render();
    assert.equal(component._state, "inDOM");
  });

  // Specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']

});
define('dummy/tests/unit/components/md-progress-linear-test', ['ember-qunit', 'ember'], function (ember_qunit, Ember) {

    'use strict';

    ember_qunit.moduleForComponent("md-progress-linear", {
        // Specify the other units that are required for this test
        needs: ["service:constants", "service:sniffer"]
    });

    ember_qunit.test("it renders", function (assert) {
        assert.expect(2);

        // Creates the component instance
        var component = this.subject();
        assert.equal(component._state, "preRender");

        // Renders the component to the page
        this.render();
        assert.equal(component._state, "inDOM");
    });

    ember_qunit.test("it sets transform based on value", function (assert) {

        var component = this.subject({
            value: 50
        });

        this.render();

        var bar2 = this.$().find(".md-bar2")[0];

        var bar2style = bar2.style[component.get("constants.CSS.TRANSFORM")];

        assert.equal(bar2style, "translateX(-25%) scale(0.5, 1)", "Transition set correctly");
    });

    ember_qunit.test("it sets transform based on buffer value", function (assert) {
        var component = this.subject({
            value: 50,
            "md-buffer-value": 75

        });

        this.render();

        var bar1 = this.$().find(".md-bar1")[0];

        var bar1style = bar1.style[component.get("constants.CSS.TRANSFORM")];

        assert.equal(bar1style, "translateX(-12.5%) scale(0.75, 1)", "Buffer bar transition set correctly");
    });

    ember_qunit.test("it should not set transition in query mode", function (assert) {
        var component = this.subject({
            value: 80,
            "md-mode": "query"
        });

        this.render();

        var bar2 = this.$().find(".md-bar2")[0];

        var bar2style = bar2.style[component.get("constants.CSS.TRANSFORM")];

        assert.ok(!bar2style, "Buffer bar not set");
    });

});
define('dummy/tests/unit/components/md-radio-button-test', ['ember-qunit', 'ember'], function (ember_qunit, Ember) {

    'use strict';

    ember_qunit.moduleForComponent("md-radio-button", {
        // Specify the other units that are required for this test
        needs: ["service:ripple", "service:constants", "service:sniffer"]
    });

    ember_qunit.test("it renders", function (assert) {
        assert.expect(2);

        // Creates the component instance
        var component = this.subject();
        assert.equal(component._state, "preRender");

        // Renders the component to the page
        this.render();
        assert.equal(component._state, "inDOM");
    });

    ember_qunit.test("it sets checked class if checked", function (assert) {
        var component = this.subject({
            checked: true
        });

        this.render();

        assert.ok(this.$().hasClass("md-checked"), "Radio button has md-checked class");
    });

    ember_qunit.test("it sets checked if selected", function (assert) {
        var val = "Hooray";

        var component = this.subject({
            value: "Hooray",
            selected: val
        });

        this.render();

        assert.ok(this.$().hasClass("md-checked"), "Radio button has md-checked class");
    });

    ember_qunit.test("it updates if value == selected", function (assert) {
        var value = "Hooray";

        var component = this.subject({
            value: "Yesso",
            selected: value
        });

        this.render();

        assert.ok(!this.$().hasClass("md-checked"), "Radio button does not have md-checked class");

        Ember['default'].run(function () {
            component.set("value", "Hooray");
        });

        assert.ok(this.$().hasClass("md-checked"), "Radio button has md-checked class");
    });

    ember_qunit.test("clicking the radio button updates the selected value", function (assert) {
        var component = this.subject({
            value: "Yesso",
            selected: "Hooray"
        });

        this.render();

        this.$().trigger("click");

        assert.equal(component.get("selected"), "Yesso", "Value updated correctly");
    });

    ember_qunit.test("clicking the radio button does not update selected value if disabled", function (assert) {
        var component = this.subject({
            value: "Yesso",
            selected: "Hooray",
            disabled: true
        });

        this.render();

        this.$().trigger("click");

        assert.equal(component.get("selected"), "Hooray", "Value did not update");
    });

});
define('dummy/tests/unit/components/md-sidenav-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForComponent("md-sidenav", {
    // Specify the other units that are required for this test
    needs: ["service:media-queries"]
  });

  ember_qunit.test("it renders", function (assert) {
    assert.expect(2);

    // Creates the component instance
    var component = this.subject();
    assert.equal(component._state, "preRender");

    // Renders the component to the page
    this.render();
    assert.equal(component._state, "inDOM");
  });

});
define('dummy/tests/unit/components/md-slider-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForComponent("md-slider", {});

  ember_qunit.test("it renders", function (assert) {
    assert.expect(2);

    // Creates the component instance
    var component = this.subject();
    assert.equal(component._state, "preRender");

    // Renders the component to the page
    this.render();
    assert.equal(component._state, "inDOM");
  });

  // Specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']

});
define('dummy/tests/unit/components/md-tabs-test', ['ember-qunit', 'ember'], function (ember_qunit, Ember) {

  'use strict';

  ember_qunit.moduleForComponent("md-tabs", {
    // Specify the other units that are required for this test
    // needs: ['component:foo', 'helper:bar']
    needs: ["component:md-tab", "component:md-tab-item", "component:md-tab-content", "component:md-tabs-content-wrapper", "component:md-tabs-wrapper", "service:media-queries", "service:sniffer", "service:ripple", "service:constants"]
    //'template:md-tabs-content-wrapper']
  });

  var oneTabTemplate = Ember['default'].HTMLBars.compile("{{#md-tabs-wrapper}}" + "{{#md-tab label=\"tab 1\"}}" + "<md-tab-label>tab 1</md-tab-label>" + "{{/md-tab}}" + "{{/md-tabs-wrapper}}" + "{{#md-tabs-content-wrapper}}" + "{{#md-tab-content}}" + "<div class=\"demo-tab\">" + "tab 1" + "<br/>" + "</div>" + "{{/md-tab-content}}" + "{{/md-tabs-content-wrapper}}");

  var twoTabTemplate = Ember['default'].HTMLBars.compile("{{#md-tabs-wrapper}}" + "{{#md-tab label=\"tab 1\"}}" + "<md-tab-label>tab 1</md-tab-label>" + "{{/md-tab}}" + "{{#md-tab label=\"tab 2\"}}" + "<md-tab-label>tab 2</md-tab-label>" + "{{/md-tab}}" + "{{/md-tabs-wrapper}}" + "{{#md-tabs-content-wrapper}}" + "{{#md-tab-content}}" + "<div class=\"demo-tab\">" + "tab 1" + "<br/>" + "</div>" + "{{/md-tab-content}}" + "{{#md-tab-content}}" + "<div class=\"demo-tab\">" + "tab 2" + "<br/>" + "</div>" + "{{/md-tab-content}}" + "{{/md-tabs-content-wrapper}}");

  ember_qunit.test("it renders", function (assert) {
    assert.expect(2);

    // Creates the component instance
    var component = this.subject({
      template: oneTabTemplate
    });
    assert.equal(component._state, "preRender");

    // Renders the component to the page
    this.render();

    assert.equal(component._state, "inDOM");
  });

  ember_qunit.test("selects first tab by default", function (assert) {
    var component = this.subject({
      template: twoTabTemplate
    });

    this.render();

    var firstTab = this.$().find("md-tab-item").eq(0);
    var secondTab = this.$().find("md-tab-item").eq(1);

    assert.ok(firstTab.hasClass("md-active"), "First tab is selected");
    assert.ok(!secondTab.hasClass("md-active"), "Second tab is not selected");
  });

  ember_qunit.test("selects and focuses a tab on click", function (assert) {
    var component = this.subject({
      template: twoTabTemplate
    });

    this.render();

    var e = Ember['default'].$.Event("click");

    var secondTab = this.$().find("md-tab-item").eq(1);

    assert.ok(secondTab, "Second tab exists");

    Ember['default'].run(function () {
      secondTab.trigger(e);
    });

    assert.ok(secondTab.hasClass("md-active"), "Second tab is selected");
    assert.equal(component.get("selectedIndex"), 1, "Second tab is selected");
  });

  ember_qunit.test("changing selected index changes active tab", function (assert) {
    var component = this.subject({
      template: twoTabTemplate
    });

    this.render();

    Ember['default'].run(function () {
      component.set("selectedIndex", 1);
    });

    var firstTab = this.$().find("md-tab-item").eq(0);
    var secondTab = this.$().find("md-tab-item").eq(1);
    assert.ok(!firstTab.hasClass("md-active"), "First tab is not selected");
    assert.ok(secondTab.hasClass("md-active"), "Second tab is selected");
  });

});
define('dummy/tests/unit/components/md-textarea-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForComponent("md-textarea", {});

  ember_qunit.test("it renders", function (assert) {
    assert.expect(2);

    // Creates the component instance
    var component = this.subject();
    assert.equal(component._state, "preRender");

    // Renders the component to the page
    this.render();
    assert.equal(component._state, "inDOM");
  });

  // Specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']

});
define('dummy/tests/unit/components/md-toast-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForComponent("md-toast", {});

  ember_qunit.test("it renders", function (assert) {
    assert.expect(2);

    // Creates the component instance
    var component = this.subject();
    assert.equal(component._state, "preRender");

    // Renders the component to the page
    this.render();
    assert.equal(component._state, "inDOM");
  });

  // Specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']

});
define('dummy/tests/unit/components/md-toolbar-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleForComponent("md-toolbar", {});

  ember_qunit.test("it renders", function (assert) {
    assert.expect(2);

    // Creates the component instance
    var component = this.subject();
    assert.equal(component._state, "preRender");

    // Renders the component to the page
    this.render();
    assert.equal(component._state, "inDOM");
  });

  // Specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']

});
define('dummy/tests/unit/components/md-tooltip-test', ['ember-qunit', 'ember', 'dummy/config/environment'], function (ember_qunit, Ember, config) {

    'use strict';

    ember_qunit.moduleForComponent("md-tooltip", {
        // Specify the other units that are required for this test
        needs: ["service:utility"]
    });

    var template = Ember['default'].HTMLBars.compile("test");

    var rootElement = Ember['default'].$(config['default'].APP.rootElement);

    ember_qunit.test("it renders", function (assert) {

        assert.expect(2);

        // Creates the component instance
        var component = this.subject({
            rootElement: rootElement,
            template: template
        });
        assert.equal(component._state, "preRender");

        // Renders the component to the page
        this.render();
        assert.equal(component._state, "inDOM");
    });

    ember_qunit.test("it is visible on mouseover", function (assert) {
        var _this = this;

        var component = this.subject({
            rootElement: rootElement,
            template: template,
            delay: 0
        });

        this.render();

        var e = Ember['default'].$.Event("mouseenter");
        Ember['default'].run(function () {
            Ember['default'].$(component.get("parent")).trigger(e);

            Ember['default'].run.later(_this, function () {
                assert.equal(component.get("visible"), true);
            }, 1);
        });
    });

    ember_qunit.test("it becomes invisible on mouseleave", function (assert) {
        var _this = this;

        assert.expect(2);

        var done = assert.async();

        var component = this.subject({
            rootElement: rootElement,
            template: template,
            delay: 1
        });

        this.render();

        var e = Ember['default'].$.Event("mouseenter");
        Ember['default'].run(function () {
            Ember['default'].$(component.get("parent")).trigger(e);

            Ember['default'].run.later(_this, function () {
                assert.equal(component.get("visible"), true, "Tooltip is visible");
            }, 5);
        });

        Ember['default'].run(function () {
            var e2 = Ember['default'].$.Event("mouseleave");
            Ember['default'].run.later(_this, function () {
                Ember['default'].$(component.get("parent")).trigger(e2);
            }, 10);
        });

        Ember['default'].run.later(this, function () {
            assert.equal(component.get("visible"), false, "Tooltip is hidden");
            done();
        }, 20);
    });

    ember_qunit.test("it should wait for delay before being visible on mouseenter", function (assert) {

        var done = assert.async();

        assert.expect(2);

        var component = this.subject({
            rootElement: rootElement,
            template: template,
            delay: 7
        });

        this.render();

        var e = Ember['default'].$.Event("mouseenter");

        Ember['default'].run(function () {
            Ember['default'].$(component.get("parent")).trigger(e);
        });

        Ember['default'].run.later(this, function () {
            assert.equal(component.get("visible"), false, "Tooltip still invisible");
        }, 2);

        Ember['default'].run.later(this, function () {

            assert.equal(component.get("visible"), true, "Tooltip is visible");
            done();
        }, 15);
    });

    ember_qunit.test("it should show if setVisible is set to true", function (assert) {
        var component = this.subject({
            rootElement: rootElement,
            template: template,
            delay: 1
        });

        this.render();

        Ember['default'].run(function () {
            component.set("visible", true);
        });

        Ember['default'].run.later(this, function () {
            var tooltipContent = Ember['default'].$(document.body).find("md-tooltip").find(".md-content");
            assert.ok(tooltipContent.hasClass("md-show"), "Tooltip is visible");
        }, 2);
    });

});
define('dummy/tests/unit/initializers/md-layout-views-test', ['ember', 'dummy/initializers/md-layout-views', 'qunit'], function (Ember, md_layout_views, qunit) {

  'use strict';

  var container, application;

  qunit.module("MdLayoutViewsInitializer", {
    beforeEach: function beforeEach() {
      Ember['default'].run(function () {
        application = Ember['default'].Application.create();
        container = application.__container__;
        application.deferReadiness();
      });
    }
  });

  // Replace this with your real tests.
  qunit.test("it works", function (assert) {
    md_layout_views.initialize(container, application);

    // you would normally confirm the results of the initializer here
    assert.ok(true);
  });

});
define('dummy/tests/unit/initializers/md-link-to-test', ['ember', 'dummy/initializers/md-link-to', 'qunit'], function (Ember, md_link_to, qunit) {

  'use strict';

  var container, application;

  qunit.module("MdLinkToInitializer", {
    beforeEach: function beforeEach() {
      Ember['default'].run(function () {
        application = Ember['default'].Application.create();
        container = application.__container__;
        application.deferReadiness();
      });
    }
  });

  // Replace this with your real tests.
  qunit.test("it works", function (assert) {
    md_link_to.initialize(container, application);

    // you would normally confirm the results of the initializer here
    assert.ok(true);
  });

});
define('dummy/tests/unit/mixins/events-test', ['ember', 'ember-material-design/mixins/events', 'qunit'], function (Ember, EventsMixin, qunit) {

  'use strict';

  qunit.module("EventsMixin");

  // Replace this with your real tests.
  qunit.test("it works", function (assert) {
    var EventsObject = Ember['default'].Object.extend(EventsMixin['default']);
    var subject = EventsObject.create();
    assert.ok(subject);
  });

});
define('dummy/tests/unit/mixins/gesture-events-test', ['ember', 'ember-material-design/mixins/gesture-events', 'qunit'], function (Ember, GestureEventsMixin, qunit) {

  'use strict';

  qunit.module("GestureEventsMixin");

  // Replace this with your real tests.
  qunit.test("it works", function (assert) {
    var GestureEventsObject = Ember['default'].Object.extend(GestureEventsMixin['default']);
    var subject = GestureEventsObject.create();
    assert.ok(subject);
  });

});
define('dummy/tests/unit/mixins/has-flex-test', ['ember', 'ember-material-design/mixins/has-flex', 'qunit'], function (Ember, HasFlexMixin, qunit) {

  'use strict';

  qunit.module("HasFlexMixin");

  // Replace this with your real tests.
  qunit.test("it works", function (assert) {
    var HasFlexObject = Ember['default'].Object.extend(HasFlexMixin['default']);
    var subject = HasFlexObject.create();
    assert.ok(subject);
  });

});
define('dummy/tests/unit/mixins/has-layout-test', ['ember', 'ember-material-design/mixins/has-layout', 'qunit'], function (Ember, HasLayoutMixin, qunit) {

  'use strict';

  qunit.module("HasLayoutMixin");

  // Replace this with your real tests.
  qunit.test("it works", function (assert) {
    var HasLayoutObject = Ember['default'].Object.extend(HasLayoutMixin['default']);
    var subject = HasLayoutObject.create();
    assert.ok(subject);
  });

});
define('dummy/tests/unit/mixins/ripples-test', ['ember', 'ember-material-design/mixins/ripples', 'qunit'], function (Ember, RipplesMixin, qunit) {

  'use strict';

  qunit.module("RipplesMixin");

  // Replace this with your real tests.
  qunit.test("it works", function (assert) {
    var RipplesObject = Ember['default'].Object.extend(RipplesMixin['default']);
    var subject = RipplesObject.create();
    assert.ok(subject);
  });

});
define('dummy/tests/unit/services/constants-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor("service:constants", {});

  // Replace this with your real tests.
  ember_qunit.test("it exists", function (assert) {
    var service = this.subject();
    assert.ok(service);
  });

  // Specify the other units that are required for this test.
  // needs: ['service:foo']

});
define('dummy/tests/unit/services/icon-test', ['ember-qunit', 'ember'], function (ember_qunit, Ember) {

	'use strict';

	ember_qunit.moduleFor("service:icon", {});

	function updateDefaults(svg) {
		svg = Ember['default'].$(svg);

		svg[0].setAttribute("xmlns", "http://www.w3.org/2000/svg");

		svg[0].setAttribute("fit", "");
		svg[0].setAttribute("height", "100%");
		svg[0].setAttribute("width", "100%");
		svg[0].setAttribute("preserveAspectRatio", "xMidYMid meet");
		svg[0].setAttribute("viewBox", "0 0 24 24");

		svg.css({
			"pointer-events": "none",
			display: "block"
		});

		return svg[0].outerHTML;
	}

	// Replace this with your real tests.
	ember_qunit.test("it exists", function (assert) {
		var service = this.subject();
		assert.ok(service);
	});

	ember_qunit.test("should get a single svg icon", function (assert) {

		var icon,
		    expected = updateDefaults("<svg version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 24 24\"><g><path d=\"M12 2c-5.53 0-10 4.47-10 10s4.47 10 10 10 10-4.47 10-10-4.47-10-10-10zm5 13.59l-1.41 1.41-3.59-3.59-3.59 3.59-1.41-1.41 3.59-3.59-3.59-3.59 1.41-1.41 3.59 3.59 3.59-3.59 1.41 1.41-3.59 3.59 3.59 3.59z\"/></g></svg>"),
		    service = this.subject();

		Ember['default'].run(function () {
			service.getIcon("cancel").then(function (result) {
				icon = result;
			});
		});

		assert.equal(icon[0].outerHTML, expected);
	});

	ember_qunit.test("should get a single svg icon using url", function (assert) {
		var icon,
		    expected = updateDefaults("<svg version=\"1.1\" x=\"0px\" y=\"0px\" viewBox=\"0 0 24 24\"><g><path d=\"M12 2c-5.53 0-10 4.47-10 10s4.47 10 10 10 10-4.47 10-10-4.47-10-10-10zm5 13.59l-1.41 1.41-3.59-3.59-3.59 3.59-1.41-1.41 3.59-3.59-3.59-3.59 1.41-1.41 3.59 3.59 3.59-3.59 1.41 1.41-3.59 3.59 3.59 3.59z\"/></g></svg>"),
		    service = this.subject();

		Ember['default'].run(function () {
			service.getIcon("cancel.svg").then(function (result) {
				icon = result;
			});
		});

		assert.equal(icon[0].outerHTML, expected);
	});

	// Specify the other units that are required for this test.
	// needs: ['service:foo']

});
define('dummy/tests/unit/services/media-queries-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor("service:media-queries", {});

  // Replace this with your real tests.
  ember_qunit.test("it exists", function (assert) {
    var service = this.subject();
    assert.ok(service);
  });

  // Specify the other units that are required for this test.
  // needs: ['service:foo']

});
define('dummy/tests/unit/services/ripple-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor("service:ripple", {});

  // Replace this with your real tests.
  ember_qunit.test("it exists", function (assert) {
    var service = this.subject();
    assert.ok(service);
  });

  // Specify the other units that are required for this test.
  // needs: ['service:foo']

});
define('dummy/tests/unit/services/sniffer-test', ['ember-qunit'], function (ember_qunit) {

    'use strict';

    ember_qunit.moduleFor("service:sniffer", {});

    // Replace this with your real tests.
    ember_qunit.test("it exists", function (assert) {
        var service = this.subject();
        assert.ok(service);
    });

    ember_qunit.test("it should return the correct vendor prefix based on the browser", function (assert) {
        var expectedPrefix;
        var ua = window.navigator.userAgent.toLowerCase();

        if (/chrome/i.test(ua) || /safari/i.test(ua) || /webkit/i.test(ua)) {
            expectedPrefix = "Webkit";
        } else if (/firefox/i.test(ua)) {
            expectedPrefix = "Moz";
        } else if (/ie/i.test(ua) || /trident/i.test(ua)) {
            expectedPrefix = "Ms";
        }

        var service = this.subject();
        var vendorPrefix = service.get("vendorPrefix");

        assert.equal(expectedPrefix, vendorPrefix);
    });

    ember_qunit.test("it should work with older version of webkit", function (assert) {

        var doc = {
            body: {
                style: {
                    WebkitOpacity: "0"
                }
            }
        };

        var service = this.subject({
            document: $(doc)[0]
        });

        assert.equal(service.get("vendorPrefix"), "webkit");
    });

    ember_qunit.test("animations should be either true or false", function (assert) {
        var service = this.subject();
        assert.notEqual(service.get("animations"), undefined);
    });

    ember_qunit.test("animations should be false when there are no animations style", function (assert) {
        var doc = {
            body: {
                style: {}
            }
        };

        var service = this.subject({
            document: $(doc)[0]
        });

        assert.equal(service.get("animations"), false);
    });

    ember_qunit.test("animations should be true with vendor specific animations", function (assert) {
        var animationStyle = "some_animation 2s linear";
        var doc = {
            body: {
                style: {
                    WebkitAnimation: animationStyle,
                    MozAnimation: animationStyle
                }
            }
        };

        var service = this.subject({
            document: $(doc)[0]
        });

        assert.equal(service.get("animations"), true);
    });

    ember_qunit.test("animations should be true with w3c-style animations", function (assert) {
        var animationStyle = "some_animation 2s linear";
        var doc = {
            body: {
                style: {
                    animation: animationStyle
                }
            }
        };

        var service = this.subject({
            document: $(doc)[0]
        });

        assert.equal(service.get("animations"), true);
    });

    ember_qunit.test("animations should be true on android with older body style properties", function (assert) {
        var doc = {
            body: {
                style: {
                    webkitAnimation: ""
                }
            }
        };
        var win = {
            navigator: {
                userAgent: "android 2"
            }
        };

        var service = this.subject({
            document: $(doc)[0],
            window: win
        });

        assert.equal(service.get("animations"), true);
    });

    ember_qunit.test("animations should be true when an older version of webkit is used", function (assert) {
        var doc = {
            body: {
                style: {
                    WebkitOpacity: "0"
                }
            }
        };

        var service = this.subject({
            document: $(doc)[0]
        });

        assert.equal(service.get("animations"), false);
    });

    ember_qunit.test("transitions should be either true or false", function (assert) {
        var service = this.subject();

        assert.notEqual(service.get("transitions"), undefined);
    });

    ember_qunit.test("transitions should be false when there is no transition style", function (assert) {
        var doc = {
            body: {
                style: {}
            }
        };

        var service = this.subject({
            document: $(doc)[0]
        });

        assert.equal(service.get("transitions"), false);
    });

    ember_qunit.test("transitions should be true with vendor specific transitions", function (assert) {
        var transitionStyle = "1s linear all";
        var doc = {
            body: {
                style: {
                    WebkitTransition: transitionStyle,
                    MozTransition: transitionStyle
                }
            }
        };

        var service = this.subject({
            document: $(doc)[0]
        });

        assert.equal(service.get("transitions"), true);
    });

    ember_qunit.test("transitions should be true with w3c-style transitions", function (assert) {
        var doc = {
            body: {
                style: {
                    transition: "1s linear all"
                }
            }
        };

        var service = this.subject({
            document: $(doc)[0]
        });

        assert.equal(service.get("transitions"), true);
    });

    ember_qunit.test("transitions should be true on android with older body style properties", function (assert) {
        var doc = {
            body: {
                style: {
                    webkitTransition: ""
                }
            }
        };
        var win = {
            navigator: {
                userAgent: "android 2"
            }
        };

        var service = this.subject({
            document: $(doc)[0],
            window: win
        });

        assert.equal(service.get("transitions"), true);
    });

    // Specify the other units that are required for this test.
    // needs: ['service:foo']

});
define('dummy/tests/unit/services/utility-test', ['ember-qunit'], function (ember_qunit) {

  'use strict';

  ember_qunit.moduleFor("service:utility", {});

  // Replace this with your real tests.
  ember_qunit.test("it exists", function (assert) {
    var service = this.subject();
    assert.ok(service);
  });

  // Specify the other units that are required for this test.
  // needs: ['service:foo']

});
define('dummy/views/application', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  var ApplicationView = Ember['default'].View.extend({
    layoutType: "row",
    flex: ""
  });

  exports['default'] = ApplicationView;

});
define('dummy/views/buttons', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].View.extend({
        demoName: "buttons"
    });

});
/* jshint ignore:start */

/* jshint ignore:end */

/* jshint ignore:start */

define('dummy/config/environment', ['ember'], function(Ember) {
  var prefix = 'dummy';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (runningTests) {
  require("dummy/tests/test-helper");
} else {
  require("dummy/app")["default"].create({"LOG_ACTIVE_GENERATION":true,"LOG_VIEW_LOOKUPS":true,"name":"ember-material-design","version":"0.5.0.8423400a"});
}

/* jshint ignore:end */
//# sourceMappingURL=dummy.map