define('github-ui/tests/unit/routes/org-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/org-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/org-test.js should pass jshint.');
  });
});