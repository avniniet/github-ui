define('github-ui/tests/routes/home/mike.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/home/mike.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/home/mike.js should pass jshint.\nroutes/home/mike.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/home/mike.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});