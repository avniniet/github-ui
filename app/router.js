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

  //LIST OF ORGS
  this.route('orgs'); /**orgs */

  //INDIVIDUAL ORG
  this.route('org', {path:'org/:id'},function()   {
    //org/32


    //LIST OF REPOS
    this.route('repos');


    //INDIVIDUAL REPO
    this.route('repo', {path:':repoid'},function() {


      //CONTRIBUTOR
      this.route('contributors');

      //ISSUES
      this.route('issues');
    });
    });
    this.route('notfound' ,{path: '*path'});
});

export default Router;
