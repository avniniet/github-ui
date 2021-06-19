define('github-ui/tests/routes/org/repo/issues.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/org/repo/issues.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/org/repo/issues.js should pass jshint.');
  });
});