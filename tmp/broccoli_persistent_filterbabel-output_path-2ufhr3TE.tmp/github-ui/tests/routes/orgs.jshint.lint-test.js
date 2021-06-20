define('github-ui/tests/routes/orgs.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/orgs.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/orgs.js should pass jshint.\nroutes/orgs.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/orgs.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\nroutes/orgs.js: line 6, col 5, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nroutes/orgs.js: line 14, col 10, Missing semicolon.\n\n4 errors');
  });
});