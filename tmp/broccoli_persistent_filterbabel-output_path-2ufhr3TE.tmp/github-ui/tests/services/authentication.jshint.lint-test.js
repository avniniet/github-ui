define('github-ui/tests/services/authentication.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | services/authentication.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'services/authentication.js should pass jshint.\nservices/authentication.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nservices/authentication.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});