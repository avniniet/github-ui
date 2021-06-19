define('github-ui/tests/helpers/start-app', ['exports', 'ember', 'github-ui/app', 'github-ui/config/environment'], function (exports, _ember, _githubUiApp, _githubUiConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _githubUiConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _githubUiApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});