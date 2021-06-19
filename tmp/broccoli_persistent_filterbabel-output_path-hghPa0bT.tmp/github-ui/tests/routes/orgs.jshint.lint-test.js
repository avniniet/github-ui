define('github-ui/tests/routes/orgs.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/orgs.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/orgs.js should pass jshint.');
  });
});