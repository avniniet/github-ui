define('github-ui/tests/routes/home/mike.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/home/mike.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/home/mike.js should pass jshint.');
  });
});