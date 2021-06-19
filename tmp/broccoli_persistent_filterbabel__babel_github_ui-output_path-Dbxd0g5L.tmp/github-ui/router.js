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