define('github-ui/router', ['exports', 'ember', 'github-ui/config/environment'], function (exports, _ember, _githubUiConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _githubUiConfigEnvironment['default'].locationType,
    rootURL: _githubUiConfigEnvironment['default'].rootURL
  });

  Router.map(function () {
    this.route('home', function () {
      this.route('mike');
    });

    //LIST OF ORGS
    this.route('orgs'); /**orgs */

    //INDIVIDUAL ORG
    this.route('org', { path: 'org/:id' }, function () {
      //org/32

      //LIST OF REPOS
      this.route('repos');

      //INDIVIDUAL REPO
      this.route('repo', { path: ':repoid' }, function () {

        //CONTRIBUTOR
        this.route('contributors');

        //ISSUES
        this.route('issues');
      });
    });
    this.route('notfound', { path: '*path' });
  });

  exports['default'] = Router;
});