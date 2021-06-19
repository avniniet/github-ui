import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('home', function() {
    this.route('mike');
  });
  this.route('orgs'); /**orgs */
  this.route('org', {path:'org/:id'},function()   {
    //org/32
    this.route('repos');
    this.route('repo', {path:':repoid'},function() {
      this.route('contributors');
      this.route('issues');
    });
    });
    this.route('notfound' ,{path: '*path'});
});

export default Router;
