"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ModalAxido;
require("./index.css");
var _close = _interopRequireDefault(require("./close.png"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * @description "ModalAxido React component to display a modal."
 */function ModalAxido(_ref) {
  let {
    textModal,
    handleClose,
    isOpen
  } = _ref;
  return isOpen && /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "main-modal",
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "modal-container",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
        className: "close-btn",
        src: _close.default,
        alt: "close-btn",
        onClick: handleClose
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
        className: "modal-text",
        children: textModal
      })]
    })
  });
}
ModalAxido.propTypes = {
  textModal: _propTypes.default.string,
  handleClose: _propTypes.default.func,
  isOpen: _propTypes.default.bool
};