QUnit.module('JSHint | routes/org/index.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'routes/org/index.js should pass jshint.\nroutes/org/index.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/org/index.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\nroutes/org/index.js: line 5, col 5, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nroutes/org/index.js: line 6, col 21, \'spread operator\' is only available in ES6 (use \'esversion: 6\').\n\n4 errors');
});
