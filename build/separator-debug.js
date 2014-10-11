modulex.add("separator", ["component/control"], function(require, exports, module) {
var componentControl = require("component/control");
/*
combined modules:
separator
*/
var separator;
separator = function (exports) {
  /**
   * @ignore
   * separator def
   * @author yiminghe@gmail.com
   */
  var Control = componentControl;
  /**
   * separator component for KISSY. xclass: 'separator'.
   * @extends KISSY.Component.Control
   * @class KISSY.Separator
   */
  exports = Control.extend({
    beforeCreateDom: function (renderData) {
      renderData.elAttrs.role = 'separator';
    }
  }, {
    ATTRS: {
      handleGestureEvents: { value: false },
      focusable: { value: false },
      allowTextSelection: { value: false },
      disabled: { value: true }
    },
    xclass: 'separator'
  });
  return exports;
}();
module.exports = separator;
});