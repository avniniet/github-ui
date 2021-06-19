'use strict';

define('github-ui/tests/app.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'app.js should pass jshint.\napp.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\napp.js: line 2, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\napp.js: line 3, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\napp.js: line 4, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\napp.js: line 6, col 1, \'let\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\napp.js: line 13, col 3, \'object short notation\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\napp.js: line 18, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n7 errors');
  });
});
define('github-ui/tests/helpers/destroy-app', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = destroyApp;

  function destroyApp(application) {
    _ember['default'].run(application, 'destroy');
  }
});
define('github-ui/tests/helpers/destroy-app.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/destroy-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass jshint.');
  });
});
define('github-ui/tests/helpers/module-for-acceptance', ['exports', 'qunit', 'ember', 'github-ui/tests/helpers/start-app', 'github-ui/tests/helpers/destroy-app'], function (exports, _qunit, _ember, _githubUiTestsHelpersStartApp, _githubUiTestsHelpersDestroyApp) {
  var Promise = _ember['default'].RSVP.Promise;

  exports['default'] = function (name) {
    var options = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    (0, _qunit.module)(name, {
      beforeEach: function beforeEach() {
        this.application = (0, _githubUiTestsHelpersStartApp['default'])();

        if (options.beforeEach) {
          return options.beforeEach.apply(this, arguments);
        }
      },

      afterEach: function afterEach() {
        var _this = this;

        var afterEach = options.afterEach && options.afterEach.apply(this, arguments);
        return Promise.resolve(afterEach).then(function () {
          return (0, _githubUiTestsHelpersDestroyApp['default'])(_this.application);
        });
      }
    });
  };
});
define('github-ui/tests/helpers/module-for-acceptance.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/module-for-acceptance.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/module-for-acceptance.js should pass jshint.');
  });
});
define('github-ui/tests/helpers/resolver', ['exports', 'github-ui/resolver', 'github-ui/config/environment'], function (exports, _githubUiResolver, _githubUiConfigEnvironment) {

  var resolver = _githubUiResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _githubUiConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _githubUiConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});
define('github-ui/tests/helpers/resolver.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass jshint.');
  });
});
define('github-ui/tests/helpers/start-app', ['exports', 'ember', 'github-ui/app', 'github-ui/config/environment'], function (exports, _ember, _githubUiApp, _githubUiConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _githubUiConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _githubUiApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});
define('github-ui/tests/helpers/start-app.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | helpers/start-app.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass jshint.');
  });
});
define('github-ui/tests/resolver.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | resolver.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'resolver.js should pass jshint.\nresolver.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nresolver.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});
define('github-ui/tests/router.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | router.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'router.js should pass jshint.\nrouter.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nrouter.js: line 2, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nrouter.js: line 4, col 1, \'const\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nrouter.js: line 25, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n4 errors');
  });
});
define('github-ui/tests/routes/home.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/home.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/home.js should pass jshint.\nroutes/home.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/home.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});
define('github-ui/tests/routes/home/mike.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/home/mike.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/home/mike.js should pass jshint.\nroutes/home/mike.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/home/mike.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});
define('github-ui/tests/routes/index.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/index.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/index.js should pass jshint.\nroutes/index.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/index.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\nroutes/index.js: line 4, col 5, \'concise methods\' is available in ES6 (use \'esversion: 6\') or Mozilla JS extensions (use moz).\nroutes/index.js: line 5, col 21, \'spread operator\' is only available in ES6 (use \'esversion: 6\').\n\n4 errors');
  });
});
define('github-ui/tests/routes/org.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/org.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/org.js should pass jshint.\nroutes/org.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/org.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});
define('github-ui/tests/routes/org/index.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/org/index.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/org/index.js should pass jshint.\nroutes/org/index.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/org/index.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});
define('github-ui/tests/routes/org/repo.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/org/repo.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/org/repo.js should pass jshint.\nroutes/org/repo.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/org/repo.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});
define('github-ui/tests/routes/org/repo/contributors.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/org/repo/contributors.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/org/repo/contributors.js should pass jshint.\nroutes/org/repo/contributors.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/org/repo/contributors.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});
define('github-ui/tests/routes/org/repo/index.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/org/repo/index.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/org/repo/index.js should pass jshint.\nroutes/org/repo/index.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/org/repo/index.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});
define('github-ui/tests/routes/org/repo/issues.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/org/repo/issues.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/org/repo/issues.js should pass jshint.\nroutes/org/repo/issues.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/org/repo/issues.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});
define('github-ui/tests/routes/org/repos.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/org/repos.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/org/repos.js should pass jshint.\nroutes/org/repos.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/org/repos.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});
define('github-ui/tests/routes/orgs.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/orgs.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/orgs.js should pass jshint.\nroutes/orgs.js: line 1, col 1, \'import\' is only available in ES6 (use \'esversion: 6\').\nroutes/orgs.js: line 3, col 1, \'export\' is only available in ES6 (use \'esversion: 6\').\n\n2 errors');
  });
});
define('github-ui/tests/test-helper', ['exports', 'github-ui/tests/helpers/resolver', 'ember-qunit'], function (exports, _githubUiTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_githubUiTestsHelpersResolver['default']);
});
define('github-ui/tests/test-helper.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | test-helper.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass jshint.');
  });
});
define('github-ui/tests/unit/routes/home-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:home', 'Unit | Route | home', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('github-ui/tests/unit/routes/home-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/home-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/home-test.js should pass jshint.');
  });
});
define('github-ui/tests/unit/routes/home/mike-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:home/mike', 'Unit | Route | home/mike', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('github-ui/tests/unit/routes/home/mike-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/home/mike-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/home/mike-test.js should pass jshint.');
  });
});
define('github-ui/tests/unit/routes/index-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:index', 'Unit | Route | index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('github-ui/tests/unit/routes/index-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/index-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/index-test.js should pass jshint.');
  });
});
define('github-ui/tests/unit/routes/org-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:org', 'Unit | Route | org', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('github-ui/tests/unit/routes/org-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/org-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/org-test.js should pass jshint.');
  });
});
define('github-ui/tests/unit/routes/org/index-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:org/index', 'Unit | Route | org/index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('github-ui/tests/unit/routes/org/index-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/org/index-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/org/index-test.js should pass jshint.');
  });
});
define('github-ui/tests/unit/routes/org/repo-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:org/repo', 'Unit | Route | org/repo', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('github-ui/tests/unit/routes/org/repo-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/org/repo-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/org/repo-test.js should pass jshint.');
  });
});
define('github-ui/tests/unit/routes/org/repo/contributors-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:org/repo/contributors', 'Unit | Route | org/repo/contributors', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('github-ui/tests/unit/routes/org/repo/contributors-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/org/repo/contributors-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/org/repo/contributors-test.js should pass jshint.');
  });
});
define('github-ui/tests/unit/routes/org/repo/index-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:org/repo/index', 'Unit | Route | org/repo/index', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('github-ui/tests/unit/routes/org/repo/index-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/org/repo/index-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/org/repo/index-test.js should pass jshint.');
  });
});
define('github-ui/tests/unit/routes/org/repo/issues-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:org/repo/issues', 'Unit | Route | org/repo/issues', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('github-ui/tests/unit/routes/org/repo/issues-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/org/repo/issues-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/org/repo/issues-test.js should pass jshint.');
  });
});
define('github-ui/tests/unit/routes/org/repos-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:org/repos', 'Unit | Route | org/repos', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('github-ui/tests/unit/routes/org/repos-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/org/repos-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/org/repos-test.js should pass jshint.');
  });
});
define('github-ui/tests/unit/routes/orgs-test', ['exports', 'ember-qunit'], function (exports, _emberQunit) {

  (0, _emberQunit.moduleFor)('route:orgs', 'Unit | Route | orgs', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  });

  (0, _emberQunit.test)('it exists', function (assert) {
    var route = this.subject();
    assert.ok(route);
  });
});
define('github-ui/tests/unit/routes/orgs-test.jshint.lint-test', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | unit/routes/orgs-test.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/orgs-test.js should pass jshint.');
  });
});
/* jshint ignore:start */

require('github-ui/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;

/* jshint ignore:end */
//# sourceMappingURL=tests.map
