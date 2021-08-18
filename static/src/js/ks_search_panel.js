odoo.define("ks_curved_backend_theme.ks_search_panel", function (require) {
  "use strict";

  const SearchPanel = require("web/static/src/js/views/search_panel.js");
  var core = require("web.core");
  var _t = core._t;

  SearchPanel.patch(
    "ks_curved_backend_theme.ks_search_panel",
    (T) =>
      class extends T {
        constructor() {
          super(...arguments);
        }

        _ksSearchPanelClose(){
            $(".ks_search_panel").removeClass("show");
        }
      }
  );
  return SearchPanel;

});