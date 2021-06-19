define('github-ui/tests/routes/org/repo/issues.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/org/repo/issues.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/org/repo/issues.js should pass jshint.\nroutes/org/repo/issues.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/org/repo/issues.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});