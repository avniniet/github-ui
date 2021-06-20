define("github-ui/routes/orgs", ["exports", "ember"], function (exports, _ember) {
    exports["default"] = _ember["default"].Route.extend({

        model: function model() {
            //THIS MODEL WILL RETURN ARRAY OF DATA. HERE IT IS HARD CODED BUT HERE ACTUALLY WE ARE FETCHING IT FROM SOME API
            return [{ id: "emberjs" }, { id: "ember-cli" }, { id: "microsoft" }, { id: "yahoo" }, { id: "netflix" }, { id: "facebook" }];
        }
    });
});