webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/*! exports provided: default, MainBody, UserMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainBody", function() { return MainBody; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserMenu", function() { return UserMenu; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/dist/reactstrap.es.js");
/* harmony import */ var _signin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signin */ "./components/signin.js");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next-auth/client */ "./node_modules/next-auth/client.js");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var universal_cookie__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! universal-cookie */ "./node_modules/universal-cookie/es6/index.js");
/* harmony import */ var _package__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../package */ "./package.json");
var _package__WEBPACK_IMPORTED_MODULE_9___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../package */ "./package.json", 1);
/* harmony import */ var _css_index_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../css/index.scss */ "./css/index.scss");
/* harmony import */ var _css_index_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_css_index_scss__WEBPACK_IMPORTED_MODULE_10__);

var _jsxFileName = "/mnt/Shared/Documents/kodemia/VetsFriend/app/nextjs/components/layout.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }












var _default =
/*#__PURE__*/
function (_React$Component) {
  _inherits(_default, _React$Component);

  _createClass(_default, null, [{
    key: "propTypes",
    value: function propTypes() {
      return {
        session: react__WEBPACK_IMPORTED_MODULE_1___default.a.PropTypes.object.isRequired,
        providers: react__WEBPACK_IMPORTED_MODULE_1___default.a.PropTypes.object.isRequired,
        children: react__WEBPACK_IMPORTED_MODULE_1___default.a.PropTypes.object.isRequired,
        fluid: react__WEBPACK_IMPORTED_MODULE_1___default.a.PropTypes.boolean,
        navmenu: react__WEBPACK_IMPORTED_MODULE_1___default.a.PropTypes.boolean,
        signinBtn: react__WEBPACK_IMPORTED_MODULE_1___default.a.PropTypes.boolean
      };
    }
  }]);

  function _default(props) {
    var _this;

    _classCallCheck(this, _default);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(_default).call(this, props));
    _this.state = {
      navOpen: false,
      modal: false,
      providers: null
    };
    _this.toggleModal = _this.toggleModal.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(_default, [{
    key: "toggleModal",
    value: function () {
      var _toggleModal = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
        var cookies;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (e) e.preventDefault(); // Save current URL so user is redirected back here after signing in

                if (this.state.modal !== true) {
                  cookies = new universal_cookie__WEBPACK_IMPORTED_MODULE_8__["default"]();
                  cookies.set('redirect_url', window.location.pathname, {
                    path: '/'
                  });
                }

                _context.t0 = this;
                _context.t1 = this.state.providers;

                if (_context.t1) {
                  _context.next = 8;
                  break;
                }

                _context.next = 7;
                return next_auth_client__WEBPACK_IMPORTED_MODULE_7__["NextAuth"].providers();

              case 7:
                _context.t1 = _context.sent;

              case 8:
                _context.t2 = _context.t1;
                _context.t3 = !this.state.modal;
                _context.t4 = {
                  providers: _context.t2,
                  modal: _context.t3
                };

                _context.t0.setState.call(_context.t0, _context.t4);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function toggleModal(_x) {
        return _toggleModal.apply(this, arguments);
      };
    }()
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
        charSet: "UTF-8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, this.props.title || 'Next.js Starter Project'), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("style", {
        dangerouslySetInnerHTML: {
          __html: _css_index_scss__WEBPACK_IMPORTED_MODULE_10___default.a
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MainBody, {
        navmenu: this.props.navmenu,
        fluid: this.props.fluid,
        container: this.props.container,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, this.props.children));
    }
  }]);

  return _default;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);


var MainBody =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(MainBody, _React$Component2);

  function MainBody() {
    _classCallCheck(this, MainBody);

    return _possibleConstructorReturn(this, _getPrototypeOf(MainBody).apply(this, arguments));
  }

  _createClass(MainBody, [{
    key: "render",
    value: function render() {
      if (this.props.container === false) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73
          },
          __self: this
        }, this.props.children);
      } else if (this.props.navmenu === false) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Container"], {
          fluid: this.props.fluid,
          style: {
            marginTop: '1em'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 79
          },
          __self: this
        }, this.props.children);
      } else {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Container"], {
          fluid: this.props.fluid,
          style: {
            marginTop: '1em'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 85
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Row"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 86
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
          xs: "12",
          md: "9",
          lg: "10",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 87
          },
          __self: this
        }, this.props.children), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Col"], {
          xs: "12",
          md: "3",
          lg: "2",
          style: {
            paddingTop: '1em'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h5", {
          className: "text-muted text-uppercase",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91
          },
          __self: this
        }, "Examples"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["ListGroup"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 92
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["ListGroupItem"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 93
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
          prefetch: true,
          href: "/examples/authentication",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
          href: "/examples/authentication",
          className: "d-block",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 94
          },
          __self: this
        }, "Auth"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["ListGroupItem"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 96
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
          prefetch: true,
          href: "/examples/async",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 97
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
          href: "/examples/async",
          className: "d-block",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 97
          },
          __self: this
        }, "Async"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["ListGroupItem"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 99
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
          prefetch: true,
          href: "/examples/layout",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 100
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
          href: "/examples/layout",
          className: "d-block",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 100
          },
          __self: this
        }, "Layout"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["ListGroupItem"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 102
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
          prefetch: true,
          href: "/examples/routing",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 103
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
          href: "/examples/routing",
          className: "d-block",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 103
          },
          __self: this
        }, "Routing"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["ListGroupItem"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 105
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
          prefetch: true,
          href: "/examples/styling",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 106
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
          href: "/examples/styling",
          className: "d-block",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 106
          },
          __self: this
        }, "Styling")))))));
      }
    }
  }]);

  return MainBody;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);
var UserMenu =
/*#__PURE__*/
function (_React$Component3) {
  _inherits(UserMenu, _React$Component3);

  function UserMenu(props) {
    var _this2;

    _classCallCheck(this, UserMenu);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(UserMenu).call(this, props));
    _this2.handleSignoutSubmit = _this2.handleSignoutSubmit.bind(_assertThisInitialized(_assertThisInitialized(_this2)));
    return _this2;
  }

  _createClass(UserMenu, [{
    key: "handleSignoutSubmit",
    value: function () {
      var _handleSignoutSubmit = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(event) {
        var cookies;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                event.preventDefault(); // Save current URL so user is redirected back here after signing out

                cookies = new universal_cookie__WEBPACK_IMPORTED_MODULE_8__["default"]();
                cookies.set('redirect_url', window.location.pathname, {
                  path: '/'
                });
                _context2.next = 5;
                return next_auth_client__WEBPACK_IMPORTED_MODULE_7__["NextAuth"].signout();

              case 5:
                next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/');

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function handleSignoutSubmit(_x2) {
        return _handleSignoutSubmit.apply(this, arguments);
      };
    }()
  }, {
    key: "render",
    value: function render() {
      if (this.props.session && this.props.session.user) {
        // If signed in display user dropdown menu
        var session = this.props.session;
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Nav"], {
          className: "ml-auto",
          navbar: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 139
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          tabIndex: "2",
          className: "dropdown nojs-dropdown",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 141
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "nav-item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 142
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
          className: "dropdown-toggle nav-link d-none d-md-block",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 143
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
          className: "icon ion-md-contact",
          style: {
            fontSize: '2em',
            position: 'absolute',
            top: -5,
            left: -25
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 144
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
          className: "dropdown-toggle nav-link d-block d-md-none",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 146
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
          className: "icon ion-md-contact mr-2",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 147
          },
          __self: this
        }), session.user.name || session.user.email)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "dropdown-menu",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 151
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
          prefetch: true,
          href: "/account",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 152
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
          href: "/account",
          className: "dropdown-item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 153
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
          className: "icon ion-md-person mr-1",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 153
          },
          __self: this
        }), " Your Account")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AdminMenuItem, _extends({}, this.props, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 155
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "dropdown-divider d-none d-md-block",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 156
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
          className: "dropdown-item p-0",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 157
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Form"], {
          id: "signout",
          method: "post",
          action: "/auth/signout",
          onSubmit: this.handleSignoutSubmit,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 158
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          name: "_csrf",
          type: "hidden",
          value: this.props.session.csrfToken,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 159
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Button"], {
          type: "submit",
          block: true,
          className: "pl-4 rounded-0 text-left dropdown-item",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 160
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
          className: "icon ion-md-log-out mr-1",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 160
          },
          __self: this
        }), " Sign out"))))));
      }

      if (this.props.signinBtn === false) {
        // If not signed in, don't display sign in button if disabled
        return null;
      } else {
        // If not signed in, display sign in button
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Nav"], {
          className: "ml-auto",
          navbar: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 173
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(reactstrap__WEBPACK_IMPORTED_MODULE_5__["NavItem"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 174
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
          href: "/auth?redirect=/",
          className: "btn btn-outline-primary",
          onClick: this.props.toggleModal,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 180
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
          className: "icon ion-md-log-in mr-1",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 180
          },
          __self: this
        }), " Sign up / Sign in")));
      }
    }
  }]);

  return UserMenu;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/***/ })

})
//# sourceMappingURL=index.js.40434292d3f05f2d7351.hot-update.js.map