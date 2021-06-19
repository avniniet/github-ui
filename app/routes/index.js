import Ember from 'ember';

export default Ember.Route.extend({
    beforeModel(){
        this._super(...arguments);
        //this.transitionTo('orgs'); 
        /*on using this transition in beforeModel when user will 
        load this root index it will be redirected to orgs pages. Problem with this is there is two states
        one is for /index and one is for /orgs so when we will press back button it will go to /index and 
        instantly redircted to /orgs. To resolve this issue we need to use replaceWith insted of this transitionTo*/

        this.replaceWith('orgs');
    }
});
