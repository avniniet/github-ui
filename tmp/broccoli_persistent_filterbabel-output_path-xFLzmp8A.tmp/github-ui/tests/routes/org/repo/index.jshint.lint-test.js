define('github-ui/tests/routes/org/repo/index.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/org/repo/index.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/org/repo/index.js should pass jshint.');
  });
});