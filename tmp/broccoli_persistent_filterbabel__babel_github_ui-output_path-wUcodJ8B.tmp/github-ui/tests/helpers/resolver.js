define('github-ui/tests/helpers/resolver', ['exports', 'github-ui/resolver', 'github-ui/config/environment'], function (exports, _githubUiResolver, _githubUiConfigEnvironment) {

  var resolver = _githubUiResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _githubUiConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _githubUiConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});