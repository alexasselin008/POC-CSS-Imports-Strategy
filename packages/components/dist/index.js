"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  Badge: () => Badge,
  Button: () => Button,
  DateInput: () => DateInput,
  TextInput: () => TextInput,
  ZHtmlInput: () => ZHtmlInput
});
module.exports = __toCommonJS(src_exports);

// src/Badge/Badge.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var Badge = ({ label }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "sm-ds-badge", children: label });
};

// src/Button/Button.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var Button = ({ label }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("button", { className: "sm-ds-button", children: label });
};

// src/ZHtmlInput/ZHtmlInput.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
var ZHtmlInput = (_a) => {
  var _b = _a, { className } = _b, rest = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("input", __spreadValues({ className: className + " o-ui-zhtml-input-element" }, rest));
};

// src/input/TextInput.tsx
var import_jsx_runtime4 = require("react/jsx-runtime");
var TextInput = (_a) => {
  var _b = _a, { className } = _b, rest = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(ZHtmlInput, __spreadValues({ className: className + " o-ui-text-input" }, rest));
};

// src/date-input/DateInput.tsx
var import_jsx_runtime5 = require("react/jsx-runtime");
var DateInput = (_a) => {
  var _b = _a, { className } = _b, rest = __objRest(_b, ["className"]);
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(TextInput, __spreadValues({ type: "date", className: className + " o-ui-date-input" }, rest));
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Badge,
  Button,
  DateInput,
  TextInput,
  ZHtmlInput
});
