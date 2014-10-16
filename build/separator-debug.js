/*
Copyright 2014, modulex-separator@1.0.1
MIT Licensed
build time: Thu, 16 Oct 2014 07:34:36 GMT
*/
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
    version: '1.0.1',
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