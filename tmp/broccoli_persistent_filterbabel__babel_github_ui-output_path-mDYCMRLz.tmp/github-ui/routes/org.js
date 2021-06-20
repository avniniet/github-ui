define('github-ui/routes/org', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({

    authentication: _ember['default'].inject.service()
    //
    //setupController(controller){

    //this._super(...arguments);
    //controller.set('records',this.get('authentication.records'));

    //}

  });
});