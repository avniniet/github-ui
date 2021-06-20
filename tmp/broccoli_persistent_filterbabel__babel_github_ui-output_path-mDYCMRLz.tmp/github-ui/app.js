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