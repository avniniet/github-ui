define('github-ui/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'github-ui/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _githubUiConfigEnvironment) {
  var _config$APP = _githubUiConfigEnvironment['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(name, version)
  };
});