module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./css/index.scss":
/*!************************!*\
  !*** ./css/index.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  box-sizing: border-box; }\n\nbody {\n  margin: 0;\n  padding: 0;\n  font-family: 'Source Sans Pro', sans-serif;\n  background-color: #d5dae5;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\n.header {\n  position: absolute;\n  display: flex;\n  width: 100%;\n  z-index: 3;\n  height: 44px;\n  background-color: #fff; }\n\n.header .user-wrapper {\n  display: flex;\n  justify-content: end; }\n\n/* logo in header(mobile version) and side-nav (tablet & desktop) */\n.logo {\n  height: 44px;\n  padding: 0px;\n  font-weight: 700; }\n\n.header .logo {\n  color: #233245; }\n\n.header .logo a img:nth-child(1) {\n  display: none; }\n\n.side-nav .logo {\n  background-color: #233245; }\n\n.header .logo {\n  float: left; }\n\n.header .logo {\n  height: 44px;\n  z-index: 1;\n  padding: 0px; }\n\n/* side navigation styles */\n.side-nav {\n  position: absolute;\n  width: 100%;\n  height: 100vh;\n  background-color: #061530;\n  z-index: 1;\n  display: none; }\n\n.side-nav.visible {\n  display: block; }\n\n.side-nav ul {\n  margin: 0;\n  padding: 0; }\n\n.side-nav ul li {\n  padding: 16px 16px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n  position: relative; }\n\n.side-nav ul li:nth-child(1) {\n  border-top: 1px solid rgba(255, 255, 255, 0.2); }\n\n.side-nav ul li.active:before {\n  content: '';\n  position: absolute;\n  width: 4px;\n  height: 100%;\n  top: 0;\n  left: 0;\n  background-color: #fff; }\n\n.side-nav ul li a {\n  color: #fff;\n  display: block;\n  text-decoration: none; }\n\n.side-nav ul li i {\n  color: #33CCB2;\n  min-width: 20px;\n  text-align: center; }\n\n.side-nav ul li span:nth-child(2) {\n  margin-left: 10px;\n  font-size: 14px;\n  font-weight: 600; }\n\n/* main content styles */\n.main-content {\n  padding: 40px;\n  margin-top: 0;\n  padding: 0;\n  padding-top: 44px;\n  height: 100%;\n  overflow: scroll; }\n\n.main-content .title {\n  background-color: #eef1f7;\n  border-bottom: 1px solid #b8bec9;\n  padding: 10px 20px;\n  font-weight: 700;\n  color: #333;\n  font-size: 18px; }\n\n/* cards styles */\n.card {\n  margin-top: 12px;\n  margin-bottom: 12px; }\n\n.ad-card {\n  color: #153D82;\n  font-weight: bold;\n  background-color: #eeeeee;\n  text-align: center; }\n\n.btn-add-pet {\n  height: 40px;\n  padding-left: 24px;\n  padding-right: 24px;\n  color: white;\n  font-weight: 700;\n  text-align: center;\n  background-color: #33CCB2;\n  border: none;\n  border-radius: 5rem;\n  box-shadow: 0px 12px 38px -12px rgba(51, 204, 178, 0.5);\n  cursor: pointer; }\n\n.btn-add-pet:active {\n  position: relative;\n  top: 1px; }\n\n.pet-img {\n  display: inline-block;\n  position: relative;\n  width: 70px;\n  height: 70px;\n  overflow: hidden;\n  border-radius: 50%; }\n\n.pet-img img {\n  width: auto;\n  height: 100%; }\n\n.card-button {\n  color: #33CCB2 !important;\n  border-color: #33CCB2 !important;\n  height: 40px;\n  width: 40px; }\n\n.card-button:hover {\n  color: white !important;\n  background-color: #33CCB2 !important; }\n\n.pet-img-larger {\n  display: inline-block;\n  position: relative;\n  width: 100px;\n  height: 100px;\n  overflow: hidden;\n  border-radius: 50%; }\n\n.pet-img-larger img {\n  width: auto;\n  height: 100%; }\n\n.vet-icon {\n  display: inline-block;\n  position: relative;\n  width: 50px;\n  height: 50px;\n  overflow: hidden;\n  border-radius: 50%; }\n\n.vet-icon img {\n  width: auto;\n  height: 100%; }\n\n.pet-name {\n  color: #153D82; }\n\n.side-pet-name {\n  font-size: 28px;\n  color: #153D82; }\n\n.pet-id {\n  color: dimgray;\n  font-size: 16px; }\n\n.attendance-status {\n  color: green; }\n\n.side-attendance-status {\n  font-size: 16px;\n  color: green; }\n\n.caret-off {\n  background-color: transparent !important;\n  border-color: #eeeeee !important;\n  height: 40px;\n  width: 40px; }\n\n.caret-off i {\n  color: #919191; }\n\n.caret-off::before {\n  display: none !important; }\n\n.caret-off::after {\n  display: none !important; }\n\n.side-card {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  padding: 12px 0px;\n  margin: 12px 0px;\n  position: relative;\n  min-width: 0;\n  word-wrap: break-word;\n  background-color: #fff;\n  background-clip: border-box;\n  border: 1px solid rgba(0, 0, 0, 0.125);\n  border-radius: .25rem; }\n\n.preview-details-wrapper {\n  width: 100%;\n  padding-left: 18px;\n  padding-right: 18px;\n  padding-bottom: 18px;\n  text-align: left; }\n\n.preview-details-title {\n  font-size: 14px;\n  font-weight: bold;\n  color: dimgray; }\n\n.preview-details-subtitle {\n  font-size: 16px;\n  font-weight: bold; }\n\n.preview-details-text {\n  font-size: 15px;\n  padding-bottom: 0px; }\n\n.side-card-button-wrapper {\n  display: flex;\n  align-content: center;\n  width: 100%;\n  padding-left: 24px;\n  padding-right: 24px;\n  padding: 24px 24px 0px 24px; }\n\n.side-card-button-wrapper .btn {\n  width: 100%; }\n\n.btn-ver-expediente {\n  height: 40px;\n  width: 100%;\n  padding-left: 24px;\n  padding-right: 24px;\n  color: white;\n  font-weight: 700;\n  text-align: center;\n  background-color: #33CCB2;\n  border: none;\n  border-radius: .25rem; }\n\n/* set element styles to fit tablet and higher(desktop) */\n@media screen and (min-width: 600px) {\n  .header {\n    background-color: white;\n    z-index: 1; }\n  .header .logo {\n    display: none; }\n  .side-nav {\n    display: block;\n    position: fixed;\n    width: 70px;\n    z-index: 2; }\n  .side-nav ul li span:nth-child(2) {\n    display: none; }\n  .side-nav .logo a img:nth-child(2) {\n    display: none; }\n  .side-nav ul li i {\n    font-size: 26px; }\n  .side-nav ul li a {\n    text-align: center; }\n  .main-content {\n    margin-left: 70px; }\n  /* columns */\n  .main-content .main .row {\n    width: 100%;\n    margin-left: 0px;\n    margin-left: 0px; }\n  .main-column {\n    color: #153D82; }\n  .main-column h3 {\n    padding-top: 18px;\n    padding-bottom: 18px; } }\n\n/* set element styles for desktop */\n@media screen and (min-width: 800px) {\n  .side-nav {\n    width: 200px;\n    /* height: 100vh;\n    background-image: url('./img/landscape-background-sidebar.jpeg');\n    background-position: left;\n    background-repeat: repeat-x;\n    background-size: cover;\n    background-color: transparent;\n    background-attachment: fixed; */ }\n  .side-nav ul li span:nth-child(2) {\n    display: inline-block; }\n  .side-nav ul li i {\n    font-size: 16px; }\n  .side-nav ul li a {\n    text-align: left; }\n  .side-nav .logo a img:nth-child(1) {\n    display: none; }\n  .side-nav .logo a img:nth-child(2) {\n    display: inline; }\n  .main-content {\n    margin-left: 200px; } }\n\n/* main box container */\n.main {\n  display: flex;\n  flex-flow: row wrap; }\n\n/* side column */\n.side-column {\n  position: relative; }\n";

/***/ }),

/***/ "./pages/_error.js":
/*!*************************!*\
  !*** ./pages/_error.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _css_index_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../css/index.scss */ "./css/index.scss");
/* harmony import */ var _css_index_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_css_index_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "/mnt/Shared/Documents/kodemia/VetsFriend/app/nextjs/pages/_error.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * Creating a page named _error.js lets you override HTTP error messages
 */







var ErrorPage =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ErrorPage, _React$Component);

  function ErrorPage() {
    _classCallCheck(this, ErrorPage);

    return _possibleConstructorReturn(this, _getPrototypeOf(ErrorPage).apply(this, arguments));
  }

  _createClass(ErrorPage, [{
    key: "render",
    value: function render() {
      var response;

      switch (this.props.errorCode) {
        case 200: // Also display a 404 if someone requests /_error explicitly

        case 404:
          response = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 31
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 32
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", {
            dangerouslySetInnerHTML: {
              __html: _css_index_scss__WEBPACK_IMPORTED_MODULE_4___default.a
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 33
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
            className: "pt-5 text-center",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 35
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
            className: "display-4",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 36
            },
            __self: this
          }, "Page Not Found"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 37
            },
            __self: this
          }, "The page ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 37
            },
            __self: this
          }, this.props.router.pathname), " does not exist."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 38
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
            href: "/",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 38
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 38
            },
            __self: this
          }, "Home")))));
          break;

        case 500:
          response = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 45
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 46
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", {
            dangerouslySetInnerHTML: {
              __html: _css_index_scss__WEBPACK_IMPORTED_MODULE_4___default.a
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 47
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
            className: "pt-5 text-center",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 49
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
            className: "display-4",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 50
            },
            __self: this
          }, "Internal Server Error"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 51
            },
            __self: this
          }, "An internal server error occurred.")));
          break;

        default:
          response = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 58
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 59
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", {
            dangerouslySetInnerHTML: {
              __html: _css_index_scss__WEBPACK_IMPORTED_MODULE_4___default.a
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 60
            },
            __self: this
          })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_3__["Container"], {
            className: "pt-5 text-center",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 62
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
            className: "display-4",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 63
            },
            __self: this
          }, "HTTP ", this.props.errorCode, " Error"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 64
            },
            __self: this
          }, "An ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 65
            },
            __self: this
          }, "HTTP ", this.props.errorCode), " error occurred while trying to access ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 66
            },
            __self: this
          }, this.props.router.pathname))));
      }

      return response;
    }
  }], [{
    key: "propTypes",
    value: function propTypes() {
      return {
        errorCode: react__WEBPACK_IMPORTED_MODULE_0___default.a.PropTypes.number.isRequired,
        url: react__WEBPACK_IMPORTED_MODULE_0___default.a.PropTypes.string.isRequired
      };
    }
  }, {
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var res = _ref.res,
          xhr = _ref.xhr;
      var errorCode = res ? res.statusCode : xhr ? xhr.status : null;
      return {
        errorCode: errorCode
      };
    }
  }]);

  return ErrorPage;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_5__["withRouter"])(ErrorPage));

/***/ }),

/***/ 1:
/*!*******************************!*\
  !*** multi ./pages/_error.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/_error.js */"./pages/_error.js");


/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "reactstrap":
/*!*****************************!*\
  !*** external "reactstrap" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ })

/******/ });
//# sourceMappingURL=_error.js.map