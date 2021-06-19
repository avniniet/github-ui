"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

define('github-ui/app', ['exports', 'ember', 'github-ui/resolver', 'ember-load-initializers', 'github-ui/config/environment'], function (exports, _ember, _githubUiResolver, _emberLoadInitializers, _githubUiConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _githubUiConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _githubUiConfigEnvironment['default'].podModulePrefix,
    Resolver: _githubUiResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _githubUiConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('github-ui/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _emberWelcomePageComponentsWelcomePage) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberWelcomePageComponentsWelcomePage['default'];
    }
  });
});
define('github-ui/helpers/app-version', ['exports', 'ember', 'github-ui/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _ember, _githubUiConfigEnvironment, _emberCliAppVersionUtilsRegexp) {
  exports.appVersion = appVersion;
  var version = _githubUiConfigEnvironment['default'].APP.version;

  function appVersion(_) {
    var hash = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    if (hash.hideSha) {
      return version.match(_emberCliAppVersionUtilsRegexp.versionRegExp)[0];
    }

    if (hash.hideVersion) {
      return version.match(_emberCliAppVersionUtilsRegexp.shaRegExp)[0];
    }

    return version;
  }

  exports['default'] = _ember['default'].Helper.helper(appVersion);
});
define('github-ui/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('github-ui/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define('github-ui/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'github-ui/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _githubUiConfigEnvironment) {
  var _config$APP = _githubUiConfigEnvironment['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(name, version)
  };
});
define('github-ui/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('github-ui/initializers/data-adapter', ['exports'], function (exports) {
  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('github-ui/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _emberDataSetupContainer, _emberData) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    ```app/services/store.js
    import DS from 'ember-data';
  
    export default DS.Store.extend({
      adapter: 'custom'
    });
    ```
  
    ```app/controllers/posts.js
    import { Controller } from '@ember/controller';
  
    export default Controller.extend({
      // ...
    });
  
    When the application is initialized, `ApplicationStore` will automatically be
    instantiated, and the instance of `PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('github-ui/initializers/export-application-global', ['exports', 'ember', 'github-ui/config/environment'], function (exports, _ember, _githubUiConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_githubUiConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _githubUiConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_githubUiConfigEnvironment['default'].modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('github-ui/initializers/injectStore', ['exports'], function (exports) {
  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('github-ui/initializers/store', ['exports'], function (exports) {
  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('github-ui/initializers/transforms', ['exports'], function (exports) {
  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define("github-ui/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (exports, _emberDataInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataInitializeStoreService["default"]
  };
});
define('github-ui/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('github-ui/router', ['exports', 'ember', 'github-ui/config/environment'], function (exports, _ember, _githubUiConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _githubUiConfigEnvironment['default'].locationType,
    rootURL: _githubUiConfigEnvironment['default'].rootURL
  });

  Router.map(function () {
    this.route('home', function () {
      this.route('mike');
    });
    this.route('orgs'); /**orgs */
    this.route('org', { path: 'org/:id' }, function () {
      //org/32
      this.route('repos');
      this.route('repo', { path: ':repoid' }, function () {
        this.route('contributors');
        this.route('issues');
      });
    });
    this.route('notfound', { path: '*path' });
  });

  exports['default'] = Router;
});
define('github-ui/routes/home', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('github-ui/routes/home/mike', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('github-ui/routes/index', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = _ember['default'].Route.extend({
        beforeModel: function beforeModel() {
            this._super.apply(this, arguments);
            //this.transitionTo('orgs');
            /*on using this transition in beforeModel when user will 
            load this root index it will be redirected to orgs pages. Problem with this is there is two states
            one is for /index and one is for /orgs so when we will press back button it will go to /index and 
            instantly redircted to /orgs. To resolve this issue we need to use replaceWith insted of this transitionTo*/

            this.replaceWith('orgs');
        }
    });
});
define('github-ui/routes/org', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('github-ui/routes/org/index', ['exports', 'ember'], function (exports, _ember) {
   exports['default'] = _ember['default'].Route.extend({});
});
define('github-ui/routes/org/repo', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('github-ui/routes/org/repo/contributors', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('github-ui/routes/org/repo/index', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('github-ui/routes/org/repo/issues', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('github-ui/routes/org/repos', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('github-ui/routes/orgs', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('github-ui/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define("github-ui/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "/m9uUxzV", "block": "{\"statements\":[[\"text\",\"\\n\\n\"],[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"text\",\"Applicaion page\"],[\"close-element\"],[\"text\",\"\\n\"],[\"text\",\"\\n\"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "github-ui/templates/application.hbs" } });
});
define("github-ui/templates/home", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "0az2QYW3", "block": "{\"statements\":[[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Home Page\"],[\"close-element\"],[\"text\",\"\\n\"],[\"block\",[\"link-to\"],[\"index\"],null,0],[\"text\",\"\\n\"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"Go to Index\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "github-ui/templates/home.hbs" } });
});
define("github-ui/templates/home/mike", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "m/+CI5Je", "block": "{\"statements\":[[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Mike Page\"],[\"close-element\"],[\"text\",\"\\n\"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "github-ui/templates/home/mike.hbs" } });
});
define("github-ui/templates/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "AFZP6TlY", "block": "{\"statements\":[[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "github-ui/templates/index.hbs" } });
});
define("github-ui/templates/notfound", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "PN9QMQrq", "block": "{\"statements\":[[\"open-element\",\"h1\",[]],[\"flush-element\"],[\"text\",\"Oops!!!!! 404. You are searching for missing page\"],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "github-ui/templates/notfound.hbs" } });
});
define("github-ui/templates/org", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "9kXSG/qk", "block": "{\"statements\":[[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"text\",\"Org Page\"],[\"close-element\"],[\"text\",\"\\n\"],[\"block\",[\"link-to\"],[\"orgs\"],null,0],[\"text\",\"\\n\\n\"],[\"open-element\",\"h4\",[]],[\"flush-element\"],[\"text\",\"Facebook\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"Back to list of orgs\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "github-ui/templates/org.hbs" } });
});
define("github-ui/templates/org/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "scUjE9q7", "block": "{\"statements\":[[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "github-ui/templates/org/index.hbs" } });
});
define("github-ui/templates/org/repo", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "5TrHNfaf", "block": "{\"statements\":[[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"text\",\"Repo page\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"ul\",[]],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"org.repo.issues\"],null,1],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"org.repo.contributors\"],null,0],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"Contributor\"]],\"locals\":[]},{\"statements\":[[\"text\",\"Issues\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "github-ui/templates/org/repo.hbs" } });
});
define("github-ui/templates/org/repo/contributors", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "OqEmF+cF", "block": "{\"statements\":[[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"text\",\"Contributor page\"],[\"close-element\"],[\"text\",\"\\n\"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "github-ui/templates/org/repo/contributors.hbs" } });
});
define("github-ui/templates/org/repo/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "MeGROxqk", "block": "{\"statements\":[[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "github-ui/templates/org/repo/index.hbs" } });
});
define("github-ui/templates/org/repo/issues", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "JHh0feFk", "block": "{\"statements\":[[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"text\",\"Issues page\"],[\"close-element\"],[\"text\",\"\\n\"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "github-ui/templates/org/repo/issues.hbs" } });
});
define("github-ui/templates/org/repos", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "q2acD/JY", "block": "{\"statements\":[[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"text\",\"Repos Page\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"ul\",[]],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"org.repo.issues\",\"react\"],null,2],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"org.repo.issues\",\"react-native\"],null,1],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"org.repo.issues\",\"watchman\"],null,0],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\\n\\n\"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"Watchman\"]],\"locals\":[]},{\"statements\":[[\"text\",\"React Native\"]],\"locals\":[]},{\"statements\":[[\"text\",\"React\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "github-ui/templates/org/repos.hbs" } });
});
define("github-ui/templates/orgs", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "sD/fUq+s", "block": "{\"statements\":[[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"text\",\"My Favourite Orgs: Orgs Page\"],[\"close-element\"],[\"text\",\"\\n \"],[\"open-element\",\"ul\",[]],[\"flush-element\"],[\"text\",\"\\n\"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"org.repos\",\"jquery\"],null,2],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"org.repos\",\"ember\"],null,1],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"org.repos\",\"netflix\"],null,0],[\"close-element\"],[\"text\",\"\\n\\n\\n \"],[\"close-element\"],[\"text\",\"\\n\\n\\n\\n\\n\\n\"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"Netflix\"]],\"locals\":[]},{\"statements\":[[\"text\",\"Ember\"]],\"locals\":[]},{\"statements\":[[\"text\",\"JQuery\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "github-ui/templates/orgs.hbs" } });
});
/* jshint ignore:start */



/* jshint ignore:end */

/* jshint ignore:start */

define('github-ui/config/environment', ['ember'], function(Ember) {
  var prefix = 'github-ui';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

/* jshint ignore:end */

/* jshint ignore:start */

if (!runningTests) {
  require("github-ui/app")["default"].create({"name":"github-ui","version":"0.0.0+3001c06a"});
}

/* jshint ignore:end */
//# sourceMappingURL=github-ui.map
