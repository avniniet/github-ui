define('github-ui/tests/routes/org/repo/contributors.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/org/repo/contributors.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/org/repo/contributors.js should pass jshint.');
  });
});