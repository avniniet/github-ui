define('github-ui/tests/test-helper', ['exports', 'github-ui/tests/helpers/resolver', 'ember-qunit'], function (exports, _githubUiTestsHelpersResolver, _emberQunit) {

  (0, _emberQunit.setResolver)(_githubUiTestsHelpersResolver['default']);
});