define('github-ui/tests/routes/org/repo/contributors.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/org/repo/contributors.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/org/repo/contributors.js should pass jshint.\nroutes/org/repo/contributors.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/org/repo/contributors.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});