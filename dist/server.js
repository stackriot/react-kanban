module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading wasm modules
/******/ 	var installedWasmModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	// object with all compiled WebAssembly.Modules
/******/ 	__webpack_require__.w = {};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app/components/App.jsx":
/*!************************************!*\
  !*** ./src/app/components/App.jsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\n\nvar _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ \"prop-types\"));\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _Home = _interopRequireDefault(__webpack_require__(/*! ./Home/Home */ \"./src/app/components/Home/Home.jsx\"));\n\nvar _BoardContainer = _interopRequireDefault(__webpack_require__(/*! ./Board/BoardContainer */ \"./src/app/components/Board/BoardContainer.jsx\"));\n\nvar _LandingPage = _interopRequireDefault(__webpack_require__(/*! ./LandingPage/LandingPage */ \"./src/app/components/LandingPage/LandingPage.jsx\"));\n\n__webpack_require__(/*! ./App.scss */ \"./src/app/components/App.scss\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar App = function App(_ref) {\n  var user = _ref.user,\n      isGuest = _ref.isGuest;\n\n  // Serve different pages depending on if user is logged in or not\n  if (user || isGuest) {\n    return _react.default.createElement(_reactRouterDom.Switch, null, _react.default.createElement(_reactRouterDom.Route, {\n      exact: true,\n      path: \"/\",\n      component: _Home.default\n    }), _react.default.createElement(_reactRouterDom.Route, {\n      path: \"/b/:boardId\",\n      component: _BoardContainer.default\n    }), _react.default.createElement(_reactRouterDom.Redirect, {\n      to: \"/\"\n    }));\n  } // If not logged in, always redirect to landing page\n\n\n  return _react.default.createElement(_reactRouterDom.Switch, null, _react.default.createElement(_reactRouterDom.Route, {\n    exact: true,\n    path: \"/\",\n    component: _LandingPage.default\n  }), _react.default.createElement(_reactRouterDom.Redirect, {\n    to: \"/\"\n  }));\n};\n\nApp.propTypes = {\n  user: _propTypes.default.object,\n  isGuest: _propTypes.default.bool.isRequired\n};\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    user: state.user,\n    isGuest: state.isGuest\n  };\n}; // Use withRouter to prevent strange glitch where other components\n// lower down in the component tree wouldn't update from URL changes\n\n\nvar _default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps)(App));\n\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/app/components/App.jsx?");

/***/ }),

/***/ "./src/app/components/App.scss":
/*!*************************************!*\
  !*** ./src/app/components/App.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/app/components/App.scss?");

/***/ }),

/***/ "./src/app/components/Board/Board.jsx":
/*!********************************************!*\
  !*** ./src/app/components/Board/Board.jsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ \"react\"));\n\nvar _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ \"prop-types\"));\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _reactHelmet = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n\nvar _reactBeautifulDnd = __webpack_require__(/*! react-beautiful-dnd */ \"react-beautiful-dnd\");\n\nvar _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ \"classnames\"));\n\nvar _List = _interopRequireDefault(__webpack_require__(/*! ../List/List */ \"./src/app/components/List/List.jsx\"));\n\nvar _ListAdder = _interopRequireDefault(__webpack_require__(/*! ../ListAdder/ListAdder */ \"./src/app/components/ListAdder/ListAdder.jsx\"));\n\nvar _Header = _interopRequireDefault(__webpack_require__(/*! ../Header/Header */ \"./src/app/components/Header/Header.jsx\"));\n\nvar _BoardHeader = _interopRequireDefault(__webpack_require__(/*! ../BoardHeader/BoardHeader */ \"./src/app/components/BoardHeader/BoardHeader.jsx\"));\n\n__webpack_require__(/*! ./Board.scss */ \"./src/app/components/Board/Board.scss\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nvar Board =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(Board, _Component);\n\n  function Board(props) {\n    var _this;\n\n    _classCallCheck(this, Board);\n\n    _this = _possibleConstructorReturn(this, (Board.__proto__ || Object.getPrototypeOf(Board)).call(this, props));\n    Object.defineProperty(_assertThisInitialized(_this), \"componentDidMount\", {\n      configurable: true,\n      enumerable: true,\n      writable: true,\n      value: function value() {\n        var _this$props = _this.props,\n            boardId = _this$props.boardId,\n            dispatch = _this$props.dispatch;\n        dispatch({\n          type: \"PUT_BOARD_ID_IN_REDUX\",\n          payload: {\n            boardId: boardId\n          }\n        });\n      }\n    });\n    Object.defineProperty(_assertThisInitialized(_this), \"handleDragEnd\", {\n      configurable: true,\n      enumerable: true,\n      writable: true,\n      value: function value(_ref) {\n        var source = _ref.source,\n            destination = _ref.destination,\n            type = _ref.type;\n\n        // dropped outside the list\n        if (!destination) {\n          return;\n        }\n\n        var _this$props2 = _this.props,\n            dispatch = _this$props2.dispatch,\n            boardId = _this$props2.boardId; // Move list\n\n        if (type === \"COLUMN\") {\n          // Prevent update if nothing has changed\n          if (source.index !== destination.index) {\n            dispatch({\n              type: \"MOVE_LIST\",\n              payload: {\n                oldListIndex: source.index,\n                newListIndex: destination.index,\n                boardId: source.droppableId\n              }\n            });\n          }\n\n          return;\n        } // Move card\n\n\n        if (source.index !== destination.index || source.droppableId !== destination.droppableId) {\n          dispatch({\n            type: \"MOVE_CARD\",\n            payload: {\n              sourceListId: source.droppableId,\n              destListId: destination.droppableId,\n              oldCardIndex: source.index,\n              newCardIndex: destination.index,\n              boardId: boardId\n            }\n          });\n        }\n      }\n    });\n    Object.defineProperty(_assertThisInitialized(_this), \"handleMouseDown\", {\n      configurable: true,\n      enumerable: true,\n      writable: true,\n      value: function value(_ref2) {\n        var target = _ref2.target,\n            clientX = _ref2.clientX;\n\n        if (target.className !== \"list-wrapper\" && target.className !== \"lists\") {\n          return;\n        }\n\n        window.addEventListener(\"mousemove\", _this.handleMouseMove);\n        window.addEventListener(\"mouseup\", _this.handleMouseUp);\n\n        _this.setState({\n          startX: clientX,\n          startScrollX: window.scrollX\n        });\n      }\n    });\n    Object.defineProperty(_assertThisInitialized(_this), \"handleMouseMove\", {\n      configurable: true,\n      enumerable: true,\n      writable: true,\n      value: function value(_ref3) {\n        var clientX = _ref3.clientX;\n        var _this$state = _this.state,\n            startX = _this$state.startX,\n            startScrollX = _this$state.startScrollX;\n        var scrollX = startScrollX - clientX + startX;\n        window.scrollTo(scrollX, 0);\n        var windowScrollX = window.scrollX;\n\n        if (scrollX !== windowScrollX) {\n          _this.setState({\n            startX: clientX + windowScrollX - startScrollX\n          });\n        }\n      }\n    });\n    Object.defineProperty(_assertThisInitialized(_this), \"handleMouseUp\", {\n      configurable: true,\n      enumerable: true,\n      writable: true,\n      value: function value() {\n        if (_this.state.startX) {\n          window.removeEventListener(\"mousemove\", _this.handleMouseMove);\n          window.removeEventListener(\"mouseup\", _this.handleMouseUp);\n\n          _this.setState({\n            startX: null,\n            startScrollX: null\n          });\n        }\n      }\n    });\n    Object.defineProperty(_assertThisInitialized(_this), \"handleWheel\", {\n      configurable: true,\n      enumerable: true,\n      writable: true,\n      value: function value(_ref4) {\n        var target = _ref4.target,\n            deltaY = _ref4.deltaY;\n\n        // Scroll page right or left as long as the mouse is not hovering a card-list (which could have vertical scroll)\n        if (target.className !== \"list-wrapper\" && target.className !== \"lists\" && target.className !== \"open-composer-button\" && target.className !== \"list-title-button\") {\n          return;\n        } // Move the board 80 pixes on every wheel event\n\n\n        if (Math.sign(deltaY) === 1) {\n          window.scrollTo(window.scrollX + 80, 0);\n        } else if (Math.sign(deltaY) === -1) {\n          window.scrollTo(window.scrollX - 80, 0);\n        }\n      }\n    });\n    Object.defineProperty(_assertThisInitialized(_this), \"render\", {\n      configurable: true,\n      enumerable: true,\n      writable: true,\n      value: function value() {\n        var _this$props3 = _this.props,\n            lists = _this$props3.lists,\n            boardTitle = _this$props3.boardTitle,\n            boardId = _this$props3.boardId,\n            boardColor = _this$props3.boardColor;\n        return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(\"div\", {\n          className: (0, _classnames.default)(\"board\", boardColor)\n        }, _react.default.createElement(_reactHelmet.Helmet, null, _react.default.createElement(\"title\", null, boardTitle, \" | React Kanban\")), _react.default.createElement(_Header.default, null), _react.default.createElement(_BoardHeader.default, null), _react.default.createElement(\"div\", {\n          className: \"lists-wrapper\",\n          onMouseDown: _this.handleMouseDown,\n          onWheel: _this.handleWheel\n        }, _react.default.createElement(_reactBeautifulDnd.DragDropContext, {\n          onDragEnd: _this.handleDragEnd\n        }, _react.default.createElement(_reactBeautifulDnd.Droppable, {\n          droppableId: boardId,\n          type: \"COLUMN\",\n          direction: \"horizontal\"\n        }, function (provided) {\n          return _react.default.createElement(\"div\", {\n            className: \"lists\",\n            ref: provided.innerRef\n          }, lists.map(function (list, index) {\n            return _react.default.createElement(_List.default, {\n              list: list,\n              boardId: boardId,\n              index: index,\n              key: list._id\n            });\n          }), provided.placeholder, _react.default.createElement(_ListAdder.default, {\n            boardId: boardId\n          }));\n        }))), _react.default.createElement(\"div\", {\n          className: \"board-underlay\"\n        })));\n      }\n    });\n    _this.state = {\n      startX: null,\n      startScrollX: null\n    };\n    return _this;\n  } // boardId is stored in the redux store so that it is available inside middleware\n\n\n  return Board;\n}(_react.Component);\n\nObject.defineProperty(Board, \"propTypes\", {\n  configurable: true,\n  enumerable: true,\n  writable: true,\n  value: {\n    lists: _propTypes.default.arrayOf(_propTypes.default.shape({\n      _id: _propTypes.default.string.isRequired\n    })).isRequired,\n    boardId: _propTypes.default.string.isRequired,\n    boardTitle: _propTypes.default.string.isRequired,\n    boardColor: _propTypes.default.string.isRequired,\n    dispatch: _propTypes.default.func.isRequired\n  }\n});\n\nvar mapStateToProps = function mapStateToProps(state, ownProps) {\n  var board = ownProps.board;\n  return {\n    lists: board.lists.map(function (listId) {\n      return state.listsById[listId];\n    }),\n    boardTitle: board.title,\n    boardColor: board.color,\n    boardId: board._id\n  };\n};\n\nvar _default = (0, _reactRedux.connect)(mapStateToProps)(Board);\n\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/app/components/Board/Board.jsx?");

/***/ }),

/***/ "./src/app/components/Board/Board.scss":
/*!*********************************************!*\
  !*** ./src/app/components/Board/Board.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/app/components/Board/Board.scss?");

/***/ }),

/***/ "./src/app/components/Board/BoardContainer.jsx":
/*!*****************************************************!*\
  !*** ./src/app/components/Board/BoardContainer.jsx ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\n\nvar _reactRouter = __webpack_require__(/*! react-router */ \"react-router\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ \"prop-types\"));\n\nvar _Board = _interopRequireDefault(__webpack_require__(/*! ./Board */ \"./src/app/components/Board/Board.jsx\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// This components only purpose is to redirect requests for board pages that don't exist\n// or which the user is not authorized to visit, in order to prevent errors\nvar BoardContainer = function BoardContainer(props) {\n  return props.board ? _react.default.createElement(_Board.default, {\n    board: props.board\n  }) : _react.default.createElement(_reactRouter.Redirect, {\n    to: \"/\"\n  });\n};\n\nBoardContainer.propTypes = {\n  board: _propTypes.default.object\n};\n\nvar mapStateToProps = function mapStateToProps(state, ownProps) {\n  var boardId = ownProps.match.params.boardId;\n  var board = state.boardsById[boardId];\n  return {\n    board: board\n  };\n};\n\nvar _default = (0, _reactRedux.connect)(mapStateToProps)(BoardContainer);\n\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/app/components/Board/BoardContainer.jsx?");

/***/ }),

/***/ "./src/app/components/BoardHeader/BoardDeleter.jsx":
/*!*********************************************************!*\
  !*** ./src/app/components/BoardHeader/BoardDeleter.jsx ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ \"react\"));\n\nvar _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ \"prop-types\"));\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _reactAriaMenubutton = __webpack_require__(/*! react-aria-menubutton */ \"react-aria-menubutton\");\n\nvar _trash = _interopRequireDefault(__webpack_require__(/*! react-icons/lib/fa/trash */ \"react-icons/lib/fa/trash\"));\n\n__webpack_require__(/*! ./BoardDeleter.scss */ \"./src/app/components/BoardHeader/BoardDeleter.scss\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nvar BoardDeleter =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(BoardDeleter, _Component);\n\n  function BoardDeleter() {\n    var _ref;\n\n    var _temp, _this;\n\n    _classCallCheck(this, BoardDeleter);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = BoardDeleter.__proto__ || Object.getPrototypeOf(BoardDeleter)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), \"handleSelection\", {\n      configurable: true,\n      enumerable: true,\n      writable: true,\n      value: function value() {\n        var _this$props = _this.props,\n            dispatch = _this$props.dispatch,\n            match = _this$props.match,\n            history = _this$props.history;\n        var boardId = match.params.boardId;\n        dispatch({\n          type: \"DELETE_BOARD\",\n          payload: {\n            boardId: boardId\n          }\n        });\n        history.push(\"/\");\n      }\n    }), Object.defineProperty(_assertThisInitialized(_this), \"render\", {\n      configurable: true,\n      enumerable: true,\n      writable: true,\n      value: function value() {\n        return _react.default.createElement(_reactAriaMenubutton.Wrapper, {\n          className: \"board-deleter-wrapper\",\n          onSelection: _this.handleSelection\n        }, _react.default.createElement(_reactAriaMenubutton.Button, {\n          className: \"board-deleter-button\"\n        }, _react.default.createElement(\"div\", {\n          className: \"modal-icon\"\n        }, _react.default.createElement(_trash.default, null)), _react.default.createElement(\"div\", {\n          className: \"board-header-right-text\"\n        }, \"\\xA0Delete board\")), _react.default.createElement(_reactAriaMenubutton.Menu, {\n          className: \"board-deleter-menu\"\n        }, _react.default.createElement(\"div\", {\n          className: \"board-deleter-header\"\n        }, \"Are you sure?\"), _react.default.createElement(_reactAriaMenubutton.MenuItem, {\n          className: \"board-deleter-confirm\"\n        }, \"Delete\")));\n      }\n    }), _temp));\n  }\n\n  return BoardDeleter;\n}(_react.Component);\n\nObject.defineProperty(BoardDeleter, \"propTypes\", {\n  configurable: true,\n  enumerable: true,\n  writable: true,\n  value: {\n    match: _propTypes.default.shape({\n      params: _propTypes.default.shape({\n        boardId: _propTypes.default.string\n      })\n    }).isRequired,\n    history: _propTypes.default.shape({\n      push: _propTypes.default.func.isRequired\n    }).isRequired,\n    dispatch: _propTypes.default.func.isRequired\n  }\n});\n\nvar _default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)()(BoardDeleter));\n\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/app/components/BoardHeader/BoardDeleter.jsx?");

/***/ }),

/***/ "./src/app/components/BoardHeader/BoardDeleter.scss":
/*!**********************************************************!*\
  !*** ./src/app/components/BoardHeader/BoardDeleter.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/app/components/BoardHeader/BoardDeleter.scss?");

/***/ }),

/***/ "./src/app/components/BoardHeader/BoardHeader.jsx":
/*!********************************************************!*\
  !*** ./src/app/components/BoardHeader/BoardHeader.jsx ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\n\nvar _BoardTitle = _interopRequireDefault(__webpack_require__(/*! ./BoardTitle */ \"./src/app/components/BoardHeader/BoardTitle.jsx\"));\n\nvar _ColorPicker = _interopRequireDefault(__webpack_require__(/*! ./ColorPicker */ \"./src/app/components/BoardHeader/ColorPicker.jsx\"));\n\nvar _BoardDeleter = _interopRequireDefault(__webpack_require__(/*! ./BoardDeleter */ \"./src/app/components/BoardHeader/BoardDeleter.jsx\"));\n\n__webpack_require__(/*! ./BoardHeader.scss */ \"./src/app/components/BoardHeader/BoardHeader.scss\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar BoardHeader = function BoardHeader() {\n  return _react.default.createElement(\"div\", {\n    className: \"board-header\"\n  }, _react.default.createElement(_BoardTitle.default, null), _react.default.createElement(\"div\", {\n    className: \"board-header-right\"\n  }, _react.default.createElement(_ColorPicker.default, null), _react.default.createElement(\"div\", {\n    className: \"vertical-line\"\n  }), _react.default.createElement(_BoardDeleter.default, null)));\n};\n\nvar _default = BoardHeader;\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/app/components/BoardHeader/BoardHeader.jsx?");

/***/ }),

/***/ "./src/app/components/BoardHeader/BoardHeader.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/BoardHeader/BoardHeader.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/app/components/BoardHeader/BoardHeader.scss?");

/***/ }),

/***/ "./src/app/components/BoardHeader/BoardTitle.jsx":
/*!*******************************************************!*\
  !*** ./src/app/components/BoardHeader/BoardTitle.jsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ \"react\"));\n\nvar _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ \"prop-types\"));\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\n__webpack_require__(/*! ./BoardTitle.scss */ \"./src/app/components/BoardHeader/BoardTitle.scss\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nvar BoardTitle =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(BoardTitle, _Component);\n\n  function BoardTitle(props) {\n    var _this;\n\n    _classCallCheck(this, BoardTitle);\n\n    _this = _possibleConstructorReturn(this, (BoardTitle.__proto__ || Object.getPrototypeOf(BoardTitle)).call(this, props));\n    Object.defineProperty(_assertThisInitialized(_this), \"handleClick\", {\n      configurable: true,\n      enumerable: true,\n      writable: true,\n      value: function value() {\n        _this.setState({\n          isOpen: true\n        });\n      }\n    });\n    Object.defineProperty(_assertThisInitialized(_this), \"handleChange\", {\n      configurable: true,\n      enumerable: true,\n      writable: true,\n      value: function value(event) {\n        _this.setState({\n          newTitle: event.target.value\n        });\n      }\n    });\n    Object.defineProperty(_assertThisInitialized(_this), \"submitTitle\", {\n      configurable: true,\n      enumerable: true,\n      writable: true,\n      value: function value() {\n        var _this$props = _this.props,\n            dispatch = _this$props.dispatch,\n            boardId = _this$props.boardId,\n            boardTitle = _this$props.boardTitle;\n        var newTitle = _this.state.newTitle;\n        if (newTitle === \"\") return;\n\n        if (boardTitle !== newTitle) {\n          dispatch({\n            type: \"CHANGE_BOARD_TITLE\",\n            payload: {\n              boardTitle: newTitle,\n              boardId: boardId\n            }\n          });\n        }\n\n        _this.setState({\n          isOpen: false\n        });\n      }\n    });\n    Object.defineProperty(_assertThisInitialized(_this), \"revertTitle\", {\n      configurable: true,\n      enumerable: true,\n      writable: true,\n      value: function value() {\n        var boardTitle = _this.props.boardTitle;\n\n        _this.setState({\n          newTitle: boardTitle,\n          isOpen: false\n        });\n      }\n    });\n    Object.defineProperty(_assertThisInitialized(_this), \"handleKeyDown\", {\n      configurable: true,\n      enumerable: true,\n      writable: true,\n      value: function value(event) {\n        if (event.keyCode === 13) {\n          _this.submitTitle();\n        } else if (event.keyCode === 27) {\n          _this.revertTitle();\n        }\n      }\n    });\n    Object.defineProperty(_assertThisInitialized(_this), \"handleFocus\", {\n      configurable: true,\n      enumerable: true,\n      writable: true,\n      value: function value(event) {\n        event.target.select();\n      }\n    });\n    _this.state = {\n      isOpen: false,\n      newTitle: props.boardTitle\n    };\n    return _this;\n  }\n\n  _createClass(BoardTitle, [{\n    key: \"render\",\n    value: function render() {\n      var _state = this.state,\n          isOpen = _state.isOpen,\n          newTitle = _state.newTitle;\n      var boardTitle = this.props.boardTitle;\n      return isOpen ? _react.default.createElement(\"input\", {\n        autoFocus: true,\n        value: newTitle,\n        type: \"text\",\n        onKeyDown: this.handleKeyDown,\n        onChange: this.handleChange,\n        onBlur: this.revertTitle,\n        onFocus: this.handleFocus,\n        className: \"board-title-input\",\n        spellCheck: false\n      }) : _react.default.createElement(\"button\", {\n        className: \"board-title-button\",\n        onClick: this.handleClick\n      }, _react.default.createElement(\"h1\", {\n        className: \"board-title-text\"\n      }, boardTitle));\n    }\n  }]);\n\n  return BoardTitle;\n}(_react.Component);\n\nObject.defineProperty(BoardTitle, \"propTypes\", {\n  configurable: true,\n  enumerable: true,\n  writable: true,\n  value: {\n    boardTitle: _propTypes.default.string.isRequired,\n    boardId: _propTypes.default.string.isRequired,\n    dispatch: _propTypes.default.func.isRequired\n  }\n});\n\nvar mapStateToProps = function mapStateToProps(state, ownProps) {\n  var boardId = ownProps.match.params.boardId;\n  return {\n    boardTitle: state.boardsById[boardId].title,\n    boardId: boardId\n  };\n};\n\nvar _default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps)(BoardTitle));\n\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/app/components/BoardHeader/BoardTitle.jsx?");

/***/ }),

/***/ "./src/app/components/BoardHeader/BoardTitle.scss":
/*!********************************************************!*\
  !*** ./src/app/components/BoardHeader/BoardTitle.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/app/components/BoardHeader/BoardTitle.scss?");

/***/ }),

/***/ "./src/app/components/BoardHeader/ColorPicker.jsx":
/*!********************************************************!*\
  !*** ./src/app/components/BoardHeader/ColorPicker.jsx ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ \"react\"));\n\nvar _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ \"prop-types\"));\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _reactAriaMenubutton = __webpack_require__(/*! react-aria-menubutton */ \"react-aria-menubutton\");\n\nvar _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ \"classnames\"));\n\nvar _check = _interopRequireDefault(__webpack_require__(/*! react-icons/lib/fa/check */ \"react-icons/lib/fa/check\"));\n\nvar _colorIcon = _interopRequireDefault(__webpack_require__(/*! ../../../assets/images/color-icon.png */ \"./src/assets/images/color-icon.png\"));\n\n__webpack_require__(/*! ./ColorPicker.scss */ \"./src/app/components/BoardHeader/ColorPicker.scss\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nvar ColorPicker =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(ColorPicker, _Component);\n\n  function ColorPicker() {\n    var _ref;\n\n    var _temp, _this;\n\n    _classCallCheck(this, ColorPicker);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = ColorPicker.__proto__ || Object.getPrototypeOf(ColorPicker)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), \"handleSelection\", {\n      configurable: true,\n      enumerable: true,\n      writable: true,\n      value: function value(color) {\n        var _this$props = _this.props,\n            dispatch = _this$props.dispatch,\n            boardId = _this$props.boardId,\n            boardColor = _this$props.boardColor; // Dispatch update only if selected color is not the same as current board color.\n\n        if (color !== boardColor) {\n          dispatch({\n            type: \"CHANGE_BOARD_COLOR\",\n            payload: {\n              boardId: boardId,\n              color: color\n            }\n          });\n        }\n      }\n    }), _temp));\n  }\n\n  _createClass(ColorPicker, [{\n    key: \"render\",\n    value: function render() {\n      var boardColor = this.props.boardColor;\n      var colors = [\"blue\", \"green\", \"red\", \"pink\"];\n      return _react.default.createElement(_reactAriaMenubutton.Wrapper, {\n        className: \"color-picker-wrapper\",\n        onSelection: this.handleSelection\n      }, _react.default.createElement(_reactAriaMenubutton.Button, {\n        className: \"color-picker\"\n      }, _react.default.createElement(\"img\", {\n        src: _colorIcon.default,\n        alt: \"colorwheel\",\n        className: \"modal-icon\"\n      }), _react.default.createElement(\"div\", {\n        className: \"board-header-right-text\"\n      }, \"\\xA0Color \\xA0\\u25BE\")), _react.default.createElement(_reactAriaMenubutton.Menu, {\n        className: \"color-picker-menu\"\n      }, colors.map(function (color) {\n        return _react.default.createElement(_reactAriaMenubutton.MenuItem, {\n          value: color,\n          className: (0, _classnames.default)(\"color-picker-item\", color),\n          key: color\n        }, color === boardColor && _react.default.createElement(_check.default, null));\n      })));\n    }\n  }]);\n\n  return ColorPicker;\n}(_react.Component);\n\nObject.defineProperty(ColorPicker, \"propTypes\", {\n  configurable: true,\n  enumerable: true,\n  writable: true,\n  value: {\n    boardId: _propTypes.default.string.isRequired,\n    boardColor: _propTypes.default.string.isRequired,\n    dispatch: _propTypes.default.func.isRequired\n  }\n});\n\nvar mapStateToProps = function mapStateToProps(state, ownProps) {\n  var boardId = ownProps.match.params.boardId;\n  return {\n    boardColor: state.boardsById[boardId].color,\n    boardId: boardId\n  };\n};\n\nvar _default = (0, _reactRouterDom.withRouter)((0, _reactRedux.connect)(mapStateToProps)(ColorPicker));\n\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/app/components/BoardHeader/ColorPicker.jsx?");

/***/ }),

/***/ "./src/app/components/BoardHeader/ColorPicker.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/BoardHeader/ColorPicker.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/app/components/BoardHeader/ColorPicker.scss?");

/***/ }),

/***/ "./src/app/components/Card/Card.jsx":
/*!******************************************!*\
  !*** ./src/app/components/Card/Card.jsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ \"react\"));\n\nvar _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ \"prop-types\"));\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _reactBeautifulDnd = __webpack_require__(/*! react-beautiful-dnd */ \"react-beautiful-dnd\");\n\nvar _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ \"classnames\"));\n\nvar _CardModal = _interopRequireDefault(__webpack_require__(/*! ../CardModal/CardModal */ \"./src/app/components/CardModal/CardModal.jsx\"));\n\nvar _CardBadges = _interopRequireDefault(__webpack_require__(/*! ../CardBadges/CardBadges */ \"./src/app/components/CardBadges/CardBadges.jsx\"));\n\nvar _utils = __webpack_require__(/*! ../utils */ \"./src/app/components/utils.js\");\n\nvar _formatMarkdown = _interopRequireDefault(__webpack_require__(/*! ./formatMarkdown */ \"./src/app/components/Card/formatMarkdown.js\"));\n\n__webpack_require__(/*! ./Card.scss */ \"./src/app/components/Card/Card.scss\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nvar Card =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(Card, _Component);\n\n  function Card() {\n    var _this;\n\n    _classCallCheck(this, Card);\n\n    _this = _possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).call(this));\n    Object.defineProperty(_assertThisInitialized(_this), \"toggleCardEditor\", {\n      configurable: true,\n      enumerable: true,\n      writable: true,\n      value: function value() {\n        _this.setState({\n          isModalOpen: !_this.state.isModalOpen\n        });\n      }\n    });\n    Object.defineProperty(_assertThisInitialized(_this), \"handleClick\", {\n      configurable: true,\n      enumerable: true,\n      writable: true,\n      value: function value(event) {\n        var _event$target = event.target,\n            tagName = _event$target.tagName,\n            checked = _event$target.checked,\n            id = _event$target.id;\n\n        if (tagName.toLowerCase() === \"input\") {\n          // The id is a string that describes which number in the order of checkboxes this particular checkbox has\n          _this.toggleCheckbox(checked, parseInt(id, 10));\n        } else if (tagName.toLowerCase() !== \"a\") {\n          _this.toggleCardEditor(event);\n        }\n      }\n    });\n    Object.defineProperty(_assertThisInitialized(_this), \"handleKeyDown\", {\n      configurable: true,\n      enumerable: true,\n      writable: true,\n      value: function value(event) {\n        // Only open card on enter since spacebar is used by react-beautiful-dnd for keyboard dragging\n        if (event.keyCode === 13 && event.target.tagName.toLowerCase() !== \"a\") {\n          event.preventDefault();\n\n          _this.toggleCardEditor();\n        }\n      }\n    });\n    Object.defineProperty(_assertThisInitialized(_this), \"toggleCheckbox\", {\n      configurable: true,\n      enumerable: true,\n      writable: true,\n      value: function value(checked, i) {\n        var _this$props = _this.props,\n            card = _this$props.card,\n            dispatch = _this$props.dispatch;\n        var j = 0;\n        var newText = card.text.replace(/\\[(\\s|x)\\]/g, function (match) {\n          var newString;\n\n          if (i === j) {\n            newString = checked ? \"[x]\" : \"[ ]\";\n          } else {\n            newString = match;\n          }\n\n          j += 1;\n          return newString;\n        });\n        dispatch({\n          type: \"CHANGE_CARD_TEXT\",\n          payload: {\n            cardId: card._id,\n            cardText: newText\n          }\n        });\n      }\n    });\n    _this.state = {\n      isModalOpen: false\n    };\n    return _this;\n  }\n\n  _createClass(Card, [{\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var _props = this.props,\n          card = _props.card,\n          index = _props.index,\n          listId = _props.listId,\n          isDraggingOver = _props.isDraggingOver;\n      var isModalOpen = this.state.isModalOpen;\n      var checkboxes = (0, _utils.findCheckboxes)(card.text);\n      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_reactBeautifulDnd.Draggable, {\n        draggableId: card._id,\n        index: index\n      }, function (provided, snapshot) {\n        return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(\"div\", _extends({\n          className: (0, _classnames.default)(\"card-title\", {\n            \"card-title--drag\": snapshot.isDragging\n          }),\n          ref: function ref(_ref) {\n            provided.innerRef(_ref);\n            _this2.ref = _ref;\n          }\n        }, provided.draggableProps, provided.dragHandleProps, {\n          onClick: function onClick(event) {\n            provided.dragHandleProps.onClick(event);\n\n            _this2.handleClick(event);\n          },\n          onKeyDown: function onKeyDown(event) {\n            provided.dragHandleProps.onKeyDown(event);\n\n            _this2.handleKeyDown(event);\n          },\n          style: _objectSpread({}, provided.draggableProps.style, {\n            background: card.color\n          })\n        }), _react.default.createElement(\"div\", {\n          className: \"card-title-html\",\n          dangerouslySetInnerHTML: {\n            __html: (0, _formatMarkdown.default)(card.text)\n          }\n        }), (card.date || checkboxes.total > 0) && _react.default.createElement(_CardBadges.default, {\n          date: card.date,\n          checkboxes: checkboxes\n        })), isDraggingOver && provided.placeholder);\n      }), _react.default.createElement(_CardModal.default, {\n        isOpen: isModalOpen,\n        cardElement: this.ref,\n        card: card,\n        listId: listId,\n        toggleCardEditor: this.toggleCardEditor\n      }));\n    }\n  }]);\n\n  return Card;\n}(_react.Component);\n\nObject.defineProperty(Card, \"propTypes\", {\n  configurable: true,\n  enumerable: true,\n  writable: true,\n  value: {\n    card: _propTypes.default.shape({\n      _id: _propTypes.default.string.isRequired,\n      text: _propTypes.default.string.isRequired,\n      color: _propTypes.default.string\n    }).isRequired,\n    listId: _propTypes.default.string.isRequired,\n    isDraggingOver: _propTypes.default.bool.isRequired,\n    index: _propTypes.default.number.isRequired,\n    dispatch: _propTypes.default.func.isRequired\n  }\n});\n\nvar mapStateToProps = function mapStateToProps(state, ownProps) {\n  return {\n    card: state.cardsById[ownProps.cardId]\n  };\n};\n\nvar _default = (0, _reactRedux.connect)(mapStateToProps)(Card);\n\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/app/components/Card/Card.jsx?");

/***/ }),

/***/ "./src/app/components/Card/Card.scss":
/*!*******************************************!*\
  !*** ./src/app/components/Card/Card.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/app/components/Card/Card.scss?");

/***/ }),

/***/ "./src/app/components/Card/formatMarkdown.js":
/*!***************************************************!*\
  !*** ./src/app/components/Card/formatMarkdown.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _marked = _interopRequireDefault(__webpack_require__(/*! marked */ \"marked\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// Create HTML string from user generated markdown.\n// There is some serious hacks going on here with regards to checkboxes.\n// Checkboxes are not a feature of marked so are added manually with an id that\n// corresponds to its index in the order of all checkboxes on the card.\n// The id attribute is then used in the clickhandler of the card to identify which checkbox is clicked.\nvar formatMarkdown = function formatMarkdown(markdown) {\n  var i = 0;\n  return (0, _marked.default)(markdown, {\n    sanitize: true,\n    gfm: true,\n    breaks: true\n  }).replace(/<a/g, '<a target=\"_blank\"').replace(/\\[(\\s|x)\\]/g, function (match) {\n    var newString;\n\n    if (match === \"[ ]\") {\n      newString = \"<input id=\".concat(i, \" onclick=\\\"return false\\\" type=\\\"checkbox\\\">\");\n    } else {\n      newString = \"<input id=\".concat(i, \" checked onclick=\\\"return false\\\" type=\\\"checkbox\\\">\");\n    }\n\n    i += 1;\n    return newString;\n  });\n};\n\nvar _default = formatMarkdown;\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/app/components/Card/formatMarkdown.js?");

/***/ }),

/***/ "./src/app/components/CardAdder/CardAdder.jsx":
/*!****************************************************!*\
  !*** ./src/app/components/CardAdder/CardAdder.jsx ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ \"react\"));\n\nvar _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ \"prop-types\"));\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _reactTextareaAutosize = _interopRequireDefault(__webpack_require__(/*! react-textarea-autosize */ \"react-textarea-autosize\"));\n\nvar _shortid = _interopRequireDefault(__webpack_require__(/*! shortid */ \"shortid\"));\n\nvar _ClickOutside = _interopRequireDefault(__webpack_require__(/*! ../ClickOutside/ClickOutside */ \"./src/app/components/ClickOutside/ClickOutside.jsx\"));\n\n__webpack_require__(/*! ./CardAdder.scss */ \"./src/app/components/CardAdder/CardAdder.scss\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nvar CardAdder =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(CardAdder, _Component);\n\n  function CardAdder() {\n    var _this;\n\n    _classCallCheck(this, CardAdder);\n\n    _this = _possibleConstructorReturn(this, (CardAdder.__proto__ || Object.getPrototypeOf(CardAdder)).call(this));\n    Object.defineProperty(_assertThisInitialized(_this), \"toggleCardComposer\", {\n      configurable: true,\n      enumerable: true,\n      writable: true,\n      value: function value() {\n        _this.setState({\n          isOpen: !_this.state.isOpen\n        });\n      }\n    });\n    Object.defineProperty(_assertThisInitialized(_this), \"handleChange\", {\n      configurable: true,\n      enumerable: true,\n      writable: true,\n      value: function value(event) {\n        _this.setState({\n          newText: event.target.value\n        });\n      }\n    });\n    Object.defineProperty(_assertThisInitialized(_this), \"handleKeyDown\", {\n      configurable: true,\n      enumerable: true,\n      writable: true,\n      value: function value(event) {\n        if (event.keyCode === 13 && event.shiftKey === false) {\n          _this.handleSubmit(event);\n        } else if (event.keyCode === 27) {\n          _this.toggleCardComposer();\n        }\n      }\n    });\n    Object.defineProperty(_assertThisInitialized(_this), \"handleSubmit\", {\n      configurable: true,\n      enumerable: true,\n      writable: true,\n      value: function value(event) {\n        event.preventDefault();\n        var newText = _this.state.newText;\n        var _this$props = _this.props,\n            listId = _this$props.listId,\n            dispatch = _this$props.dispatch;\n        if (newText === \"\") return;\n\n        var cardId = _shortid.default.generate();\n\n        dispatch({\n          type: \"ADD_CARD\",\n          payload: {\n            cardText: newText,\n            cardId: cardId,\n            listId: listId\n          }\n        });\n\n        _this.toggleCardComposer();\n\n        _this.setState({\n          newText: \"\"\n        });\n      }\n    });\n    _this.state = {\n      newText: \"\",\n      isOpen: false\n    };\n    return _this;\n  }\n\n  _createClass(CardAdder, [{\n    key: \"render\",\n    value: function render() {\n      var _state = this.state,\n          newText = _state.newText,\n          isOpen = _state.isOpen;\n      return isOpen ? _react.default.createElement(_ClickOutside.default, {\n        handleClickOutside: this.toggleCardComposer\n      }, _react.default.createElement(\"form\", {\n        onSubmit: this.handleSubmit,\n        className: \"card-adder-textarea-wrapper\"\n      }, _react.default.createElement(_reactTextareaAutosize.default, {\n        autoFocus: true,\n        useCacheForDOMMeasurements: true,\n        minRows: 1,\n        onChange: this.handleChange,\n        onKeyDown: this.handleKeyDown,\n        value: newText,\n        className: \"card-adder-textarea\",\n        placeholder: \"Add a new card...\",\n        spellCheck: false,\n        onBlur: this.toggleCardComposer\n      }))) : _react.default.createElement(\"button\", {\n        onClick: this.toggleCardComposer,\n        className: \"add-card-button\"\n      }, \"+\");\n    }\n  }]);\n\n  return CardAdder;\n}(_react.Component);\n\nObject.defineProperty(CardAdder, \"propTypes\", {\n  configurable: true,\n  enumerable: true,\n  writable: true,\n  value: {\n    listId: _propTypes.default.string.isRequired,\n    dispatch: _propTypes.default.func.isRequired\n  }\n});\n\nvar _default = (0, _reactRedux.connect)()(CardAdder);\n\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/app/components/CardAdder/CardAdder.jsx?");

/***/ }),

/***/ "./src/app/components/CardAdder/CardAdder.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/CardAdder/CardAdder.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/app/components/CardAdder/CardAdder.scss?");

/***/ }),

/***/ "./src/app/components/CardBadges/CardBadges.jsx":
/*!******************************************************!*\
  !*** ./src/app/components/CardBadges/CardBadges.jsx ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ \"react\"));\n\nvar _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ \"prop-types\"));\n\nvar _format = _interopRequireDefault(__webpack_require__(/*! date-fns/format */ \"date-fns/format\"));\n\nvar _difference_in_calendar_days = _interopRequireDefault(__webpack_require__(/*! date-fns/difference_in_calendar_days */ \"date-fns/difference_in_calendar_days\"));\n\nvar _accessAlarm = _interopRequireDefault(__webpack_require__(/*! react-icons/lib/md/access-alarm */ \"react-icons/lib/md/access-alarm\"));\n\nvar _checkSquareO = _interopRequireDefault(__webpack_require__(/*! react-icons/lib/fa/check-square-o */ \"react-icons/lib/fa/check-square-o\"));\n\n__webpack_require__(/*! ./CardBadges.scss */ \"./src/app/components/CardBadges/CardBadges.scss\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nvar CardBadges =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(CardBadges, _Component);\n\n  function CardBadges() {\n    var _ref;\n\n    var _temp, _this;\n\n    _classCallCheck(this, CardBadges);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = CardBadges.__proto__ || Object.getPrototypeOf(CardBadges)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), \"renderDueDate\", {\n      configurable: true,\n      enumerable: true,\n      writable: true,\n      value: function value() {\n        var date = _this.props.date;\n\n        if (!date) {\n          return null;\n        }\n\n        var dueDateFromToday = (0, _difference_in_calendar_days.default)(date, new Date());\n        var dueDateString;\n\n        if (dueDateFromToday < -1) {\n          dueDateString = \"\".concat(Math.abs(dueDateFromToday), \" days ago\");\n        } else if (dueDateFromToday === -1) {\n          dueDateString = \"Yesterday\";\n        } else if (dueDateFromToday === 0) {\n          dueDateString = \"Today\";\n        } else if (dueDateFromToday === 1) {\n          dueDateString = \"Tomorrow\";\n        } else {\n          dueDateString = (0, _format.default)(date, \"D MMM\");\n        }\n\n        var dueDateColor;\n\n        if (dueDateFromToday < 0) {\n          dueDateColor = \"red\";\n        } else if (dueDateFromToday === 0) {\n          dueDateColor = \"#d60\";\n        } else {\n          dueDateColor = \"green\";\n        }\n\n        return _react.default.createElement(\"div\", {\n          className: \"badge\",\n          style: {\n            background: dueDateColor\n          }\n        }, _react.default.createElement(_accessAlarm.default, {\n          className: \"badge-icon\"\n        }), \"\\xA0\", dueDateString);\n      }\n    }), Object.defineProperty(_assertThisInitialized(_this), \"renderTaskProgress\", {\n      configurable: true,\n      enumerable: true,\n      writable: true,\n      value: function value() {\n        var _this$props$checkboxe = _this.props.checkboxes,\n            total = _this$props$checkboxe.total,\n            checked = _this$props$checkboxe.checked;\n\n        if (total === 0) {\n          return null;\n        }\n\n        return _react.default.createElement(\"div\", {\n          className: \"badge\",\n          style: {\n            background: checked === total ? \"green\" : \"#444\"\n          }\n        }, _react.default.createElement(_checkSquareO.default, {\n          className: \"badge-icon\"\n        }), \"\\xA0\", checked, \"/\", total);\n      }\n    }), _temp));\n  }\n\n  _createClass(CardBadges, [{\n    key: \"render\",\n    value: function render() {\n      return _react.default.createElement(\"div\", {\n        className: \"card-badges\"\n      }, this.renderDueDate(), this.renderTaskProgress());\n    }\n  }]);\n\n  return CardBadges;\n}(_react.Component);\n\nObject.defineProperty(CardBadges, \"propTypes\", {\n  configurable: true,\n  enumerable: true,\n  writable: true,\n  value: {\n    date: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.instanceOf(Date)]),\n    checkboxes: _propTypes.default.shape({\n      total: _propTypes.default.number.isRequired,\n      checked: _propTypes.default.number.isRequired\n    }).isRequired\n  }\n});\nvar _default = CardBadges;\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/app/components/CardBadges/CardBadges.jsx?");

/***/ }),

/***/ "./src/app/components/CardBadges/CardBadges.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/CardBadges/CardBadges.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/app/components/CardBadges/CardBadges.scss?");

/***/ }),

/***/ "./src/app/components/CardModal/Calendar.jsx":
/*!***************************************************!*\
  !*** ./src/app/components/CardModal/Calendar.jsx ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ \"react\"));\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ \"prop-types\"));\n\nvar _reactDayPicker = _interopRequireDefault(__webpack_require__(/*! react-day-picker */ \"react-day-picker\"));\n\n__webpack_require__(/*! ./ReactDayPicker.css */ \"./src/app/components/CardModal/ReactDayPicker.css\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nvar Calendar =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(Calendar, _Component);\n\n  function Calendar(props) {\n    var _this;\n\n    _classCallCheck(this, Calendar);\n\n    _this = _possibleConstructorReturn(this, (Calendar.__proto__ || Object.getPrototypeOf(Calendar)).call(this, props));\n    Object.defineProperty(_assertThisInitialized(_this), \"handleDayClick\", {\n      configurable: true,\n      enumerable: true,\n      writable: true,\n      value: function value(selectedDay, _ref) {\n        var selected = _ref.selected,\n            disabled = _ref.disabled;\n\n        if (disabled) {\n          return;\n        }\n\n        if (selected) {\n          // Unselect the day if already selected\n          _this.setState({\n            selectedDay: undefined\n          });\n\n          return;\n        }\n\n        _this.setState({\n          selectedDay: selectedDay\n        });\n      }\n    });\n    Object.defineProperty(_assertThisInitialized(_this), \"handleSave\", {\n      configurable: true,\n      enumerable: true,\n      writable: true,\n      value: function value() {\n        var selectedDay = _this.state.selectedDay;\n        var _this$props = _this.props,\n            dispatch = _this$props.dispatch,\n            cardId = _this$props.cardId,\n            toggleCalendar = _this$props.toggleCalendar;\n        dispatch({\n          type: \"CHANGE_CARD_DATE\",\n          payload: {\n            date: selectedDay,\n            cardId: cardId\n          }\n        });\n        toggleCalendar();\n      }\n    });\n    _this.state = {\n      selectedDay: props.date ? new Date(props.date) : undefined\n    };\n    return _this;\n  }\n\n  _createClass(Calendar, [{\n    key: \"render\",\n    value: function render() {\n      var selectedDay = this.state.selectedDay;\n      var toggleCalendar = this.props.toggleCalendar;\n      return _react.default.createElement(\"div\", {\n        className: \"calendar\"\n      }, _react.default.createElement(_reactDayPicker.default, {\n        onDayClick: this.handleDayClick,\n        selectedDays: selectedDay,\n        disabledDays: {\n          before: new Date()\n        }\n      }), _react.default.createElement(\"div\", {\n        className: \"calendar-buttons\"\n      }, _react.default.createElement(\"button\", {\n        onClick: this.handleSave,\n        className: \"calendar-save-button\"\n      }, \"Save\"), _react.default.createElement(\"button\", {\n        onClick: toggleCalendar\n      }, \"Cancel\")));\n    }\n  }]);\n\n  return Calendar;\n}(_react.Component);\n\nObject.defineProperty(Calendar, \"propTypes\", {\n  configurable: true,\n  enumerable: true,\n  writable: true,\n  value: {\n    dispatch: _propTypes.default.func.isRequired,\n    cardId: _propTypes.default.string.isRequired,\n    date: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.instanceOf(Date)]),\n    toggleCalendar: _propTypes.default.func.isRequired\n  }\n});\n\nvar _default = (0, _reactRedux.connect)()(Calendar);\n\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/app/components/CardModal/Calendar.jsx?");

/***/ }),

/***/ "./src/app/components/CardModal/CardModal.jsx":
/*!****************************************************!*\
  !*** ./src/app/components/CardModal/CardModal.jsx ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ \"react\"));\n\nvar _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ \"prop-types\"));\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _reactTextareaAutosize = _interopRequireDefault(__webpack_require__(/*! react-textarea-autosize */ \"react-textarea-autosize\"));\n\nvar _reactModal = _interopRequireDefault(__webpack_require__(/*! react-modal */ \"react-modal\"));\n\nvar _CardBadges = _interopRequireDefault(__webpack_require__(/*! ../CardBadges/CardBadges */ \"./src/app/components/CardBadges/CardBadges.jsx\"));\n\nvar _CardOptions = _interopRequireDefault(__webpack_require__(/*! ./CardOptions */ \"./src/app/components/CardModal/CardOptions.jsx\"));\n\nvar _utils = __webpack_require__(/*! ../utils */ \"./src/app/components/utils.js\");\n\n__webpack_require__(/*! ./CardModal.scss */ \"./src/app/components/CardModal/CardModal.scss\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nvar CardModal =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(CardModal, _Component);\n\n  function CardModal(props) {\n    var _this;\n\n    _classCallCheck(this, CardModal);\n\n    _this = _possibleConstructorReturn(this, (CardModal.__proto__ || Object.getPrototypeOf(CardModal)).call(this, props));\n    Object.defineProperty(_assertThisInitialized(_this), \"componentWillReceiveProps\", {\n      configurable: true,\n      enumerable: true,\n      writable: true,\n      value: function value(nextProps) {\n        _this.setState({\n          newText: nextProps.card.text\n        });\n      }\n    });\n    Object.defineProperty(_assertThisInitialized(_this), \"handleKeyDown\", {\n      configurable: true,\n      enumerable: true,\n      writable: true,\n      value: function value(event) {\n        if (event.keyCode === 13 && event.shiftKey === false) {\n          event.preventDefault();\n\n          _this.submitCard();\n        }\n      }\n    });\n    Object.defineProperty(_assertThisInitialized(_this), \"submitCard\", {\n      configurable: true,\n      enumerable: true,\n      writable: true,\n      value: function value() {\n        var newText = _this.state.newText;\n        var _this$props = _this.props,\n            card = _this$props.card,\n            listId = _this$props.listId,\n            dispatch = _this$props.dispatch,\n            toggleCardEditor = _this$props.toggleCardEditor;\n\n        if (newText === \"\") {\n          _this.deleteCard();\n        } else if (newText !== card.text) {\n          dispatch({\n            type: \"CHANGE_CARD_TEXT\",\n            payload: {\n              cardText: newText,\n              cardId: card._id,\n              listId: listId\n            }\n          });\n        }\n\n        toggleCardEditor();\n      }\n    });\n    Object.defineProperty(_assertThisInitialized(_this), \"handleChange\", {\n      configurable: true,\n      enumerable: true,\n      writable: true,\n      value: function value(event) {\n        _this.setState({\n          newText: event.target.value\n        });\n      }\n    });\n    Object.defineProperty(_assertThisInitialized(_this), \"toggleColorPicker\", {\n      configurable: true,\n      enumerable: true,\n      writable: true,\n      value: function value() {\n        _this.setState({\n          isColorPickerOpen: !_this.state.isColorPickerOpen\n        });\n      }\n    });\n    Object.defineProperty(_assertThisInitialized(_this), \"handleRequestClose\", {\n      configurable: true,\n      enumerable: true,\n      writable: true,\n      value: function value() {\n        var isColorPickerOpen = _this.state.isColorPickerOpen;\n        var toggleCardEditor = _this.props.toggleCardEditor;\n\n        if (!isColorPickerOpen) {\n          toggleCardEditor();\n        }\n      }\n    });\n    _this.state = {\n      newText: props.card.text,\n      isColorPickerOpen: false,\n      isTextareaFocused: true\n    };\n\n    if (typeof document !== \"undefined\") {\n      _reactModal.default.setAppElement(\"#app\");\n    }\n\n    return _this;\n  }\n\n  _createClass(CardModal, [{\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var _state = this.state,\n          newText = _state.newText,\n          isColorPickerOpen = _state.isColorPickerOpen,\n          isTextareaFocused = _state.isTextareaFocused;\n      var _props = this.props,\n          cardElement = _props.cardElement,\n          card = _props.card,\n          listId = _props.listId,\n          isOpen = _props.isOpen;\n\n      if (!cardElement) {\n        return null;\n      } // Get number of checked and total checkboxes\n\n\n      var checkboxes = (0, _utils.findCheckboxes)(newText);\n      /*\n      Create style of modal in order to not clip outside the edges no matter what device.\n      */\n      // Get dimensions of the card to calculate dimensions of cardModal.\n\n      var boundingRect = cardElement.getBoundingClientRect(); // Returns true if card is closer to right border than to the left\n\n      var isCardNearRightBorder = window.innerWidth - boundingRect.right < boundingRect.left; // Check if the display is so thin that we need to trigger a centered, vertical layout\n      // DO NOT CHANGE the number 550 without also changing related media-query in CardOptions.scss\n\n      var isThinDisplay = window.innerWidth < 550; // Position textarea at the same place as the card and position everything else away from closest edge\n\n      var style = {\n        content: {\n          top: Math.min(boundingRect.top, window.innerHeight - boundingRect.height - 18),\n          left: isCardNearRightBorder ? null : boundingRect.left,\n          right: isCardNearRightBorder ? window.innerWidth - boundingRect.right : null,\n          flexDirection: isCardNearRightBorder ? \"row-reverse\" : \"row\"\n        }\n      }; // For layouts that are less wide than 550px, let the modal take up the entire width at the top of the screen\n\n      var mobileStyle = {\n        content: {\n          flexDirection: \"column\",\n          top: 3,\n          left: 3,\n          right: 3\n        }\n      };\n      return _react.default.createElement(_reactModal.default, {\n        closeTimeoutMS: 150,\n        isOpen: isOpen,\n        onRequestClose: this.handleRequestClose,\n        contentLabel: \"Card editor\",\n        overlayClassName: \"modal-underlay\",\n        className: \"modal\",\n        style: isThinDisplay ? mobileStyle : style,\n        includeDefaultStyles: false,\n        onClick: this.handleRequestClose\n      }, _react.default.createElement(\"div\", {\n        className: \"modal-textarea-wrapper\",\n        style: {\n          minHeight: isThinDisplay ? \"none\" : boundingRect.height,\n          width: isThinDisplay ? \"100%\" : boundingRect.width,\n          boxShadow: isTextareaFocused ? \"0px 0px 3px 2px rgb(0, 180, 255)\" : null,\n          background: card.color\n        }\n      }, _react.default.createElement(_reactTextareaAutosize.default, {\n        autoFocus: true,\n        useCacheForDOMMeasurements: true,\n        value: newText,\n        onChange: this.handleChange,\n        onKeyDown: this.handleKeyDown,\n        className: \"modal-textarea\",\n        spellCheck: false,\n        onFocus: function onFocus() {\n          return _this2.setState({\n            isTextareaFocused: true\n          });\n        },\n        onBlur: function onBlur() {\n          return _this2.setState({\n            isTextareaFocused: false\n          });\n        }\n      }), (card.date || checkboxes.total > 0) && _react.default.createElement(_CardBadges.default, {\n        date: card.date,\n        checkboxes: checkboxes\n      })), _react.default.createElement(_CardOptions.default, {\n        isColorPickerOpen: isColorPickerOpen,\n        card: card,\n        listId: listId,\n        boundingRect: boundingRect,\n        isCardNearRightBorder: isCardNearRightBorder,\n        isThinDisplay: isThinDisplay,\n        toggleColorPicker: this.toggleColorPicker\n      }));\n    }\n  }]);\n\n  return CardModal;\n}(_react.Component);\n\nObject.defineProperty(CardModal, \"propTypes\", {\n  configurable: true,\n  enumerable: true,\n  writable: true,\n  value: {\n    card: _propTypes.default.shape({\n      text: _propTypes.default.string.isRequired,\n      _id: _propTypes.default.string.isRequired,\n      date: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.instanceOf(Date)]),\n      color: _propTypes.default.string\n    }).isRequired,\n    listId: _propTypes.default.string.isRequired,\n    cardElement: _propTypes.default.shape({\n      getBoundingClientRect: _propTypes.default.func.isRequired\n    }),\n    isOpen: _propTypes.default.bool.isRequired,\n    toggleCardEditor: _propTypes.default.func.isRequired,\n    dispatch: _propTypes.default.func.isRequired\n  }\n});\n\nvar _default = (0, _reactRedux.connect)()(CardModal);\n\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/app/components/CardModal/CardModal.jsx?");

/***/ }),

/***/ "./src/app/components/CardModal/CardModal.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/CardModal/CardModal.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/app/components/CardModal/CardModal.scss?");

/***/ }),

/***/ "./src/app/components/CardModal/CardOptions.jsx":
/*!******************************************************!*\
  !*** ./src/app/components/CardModal/CardOptions.jsx ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ \"react\"));\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ \"prop-types\"));\n\nvar _reactModal = _interopRequireDefault(__webpack_require__(/*! react-modal */ \"react-modal\"));\n\nvar _trash = _interopRequireDefault(__webpack_require__(/*! react-icons/lib/fa/trash */ \"react-icons/lib/fa/trash\"));\n\nvar _accessAlarm = _interopRequireDefault(__webpack_require__(/*! react-icons/lib/md/access-alarm */ \"react-icons/lib/md/access-alarm\"));\n\nvar _Calendar = _interopRequireDefault(__webpack_require__(/*! ./Calendar */ \"./src/app/components/CardModal/Calendar.jsx\"));\n\nvar _ClickOutside = _interopRequireDefault(__webpack_require__(/*! ../ClickOutside/ClickOutside */ \"./src/app/components/ClickOutside/ClickOutside.jsx\"));\n\nvar _colorIcon = _interopRequireDefault(__webpack_require__(/*! ../../../assets/images/color-icon.png */ \"./src/assets/images/color-icon.png\"));\n\n__webpack_require__(/*! ./CardOptions.scss */ \"./src/app/components/CardModal/CardOptions.scss\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nvar CardOptions =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(CardOptions, _Component);\n\n  function CardOptions() {\n    var _this;\n\n    _classCallCheck(this, CardOptions);\n\n    _this = _possibleConstructorReturn(this, (CardOptions.__proto__ || Object.getPrototypeOf(CardOptions)).call(this));\n    Object.defineProperty(_assertThisInitialized(_this), \"deleteCard\", {\n      configurable: true,\n      enumerable: true,\n      writable: true,\n      value: function value() {\n        var _this$props = _this.props,\n            dispatch = _this$props.dispatch,\n            listId = _this$props.listId,\n            card = _this$props.card;\n        dispatch({\n          type: \"DELETE_CARD\",\n          payload: {\n            cardId: card._id,\n            listId: listId\n          }\n        });\n      }\n    });\n    Object.defineProperty(_assertThisInitialized(_this), \"changeColor\", {\n      configurable: true,\n      enumerable: true,\n      writable: true,\n      value: function value(color) {\n        var _this$props2 = _this.props,\n            dispatch = _this$props2.dispatch,\n            card = _this$props2.card,\n            toggleColorPicker = _this$props2.toggleColorPicker;\n\n        if (card.color !== color) {\n          dispatch({\n            type: \"CHANGE_CARD_COLOR\",\n            payload: {\n              color: color,\n              cardId: card._id\n            }\n          });\n        }\n\n        toggleColorPicker();\n\n        _this.colorPickerButton.focus();\n      }\n    });\n    Object.defineProperty(_assertThisInitialized(_this), \"handleKeyDown\", {\n      configurable: true,\n      enumerable: true,\n      writable: true,\n      value: function value(event) {\n        if (event.keyCode === 27) {\n          _this.props.toggleColorPicker();\n\n          _this.colorPickerButton.focus();\n        }\n      }\n    });\n    Object.defineProperty(_assertThisInitialized(_this), \"handleClickOutside\", {\n      configurable: true,\n      enumerable: true,\n      writable: true,\n      value: function value() {\n        var toggleColorPicker = _this.props.toggleColorPicker;\n        toggleColorPicker();\n\n        _this.colorPickerButton.focus();\n      }\n    });\n    Object.defineProperty(_assertThisInitialized(_this), \"toggleCalendar\", {\n      configurable: true,\n      enumerable: true,\n      writable: true,\n      value: function value() {\n        _this.setState({\n          isCalendarOpen: !_this.state.isCalendarOpen\n        });\n      }\n    });\n    _this.state = {\n      isCalendarOpen: false\n    };\n    return _this;\n  }\n\n  _createClass(CardOptions, [{\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var _props = this.props,\n          isCardNearRightBorder = _props.isCardNearRightBorder,\n          isColorPickerOpen = _props.isColorPickerOpen,\n          toggleColorPicker = _props.toggleColorPicker,\n          card = _props.card,\n          isThinDisplay = _props.isThinDisplay,\n          boundingRect = _props.boundingRect;\n      var isCalendarOpen = this.state.isCalendarOpen;\n      var calendarStyle = {\n        content: {\n          top: Math.min(boundingRect.bottom + 10, window.innerHeight - 300),\n          left: boundingRect.left\n        }\n      };\n      var calendarMobileStyle = {\n        content: {\n          top: 110,\n          left: \"50%\",\n          transform: \"translateX(-50%)\"\n        }\n      };\n      return _react.default.createElement(\"div\", {\n        className: \"options-list\",\n        style: {\n          alignItems: isCardNearRightBorder ? \"flex-end\" : \"flex-start\"\n        }\n      }, _react.default.createElement(\"div\", null, _react.default.createElement(\"button\", {\n        onClick: this.deleteCard,\n        className: \"options-list-button\"\n      }, _react.default.createElement(\"div\", {\n        className: \"modal-icon\"\n      }, _react.default.createElement(_trash.default, null)), \"\\xA0Delete\")), _react.default.createElement(\"div\", {\n        className: \"modal-color-picker-wrapper\"\n      }, _react.default.createElement(\"button\", {\n        className: \"options-list-button\",\n        onClick: toggleColorPicker,\n        onKeyDown: this.handleKeyDown,\n        ref: function ref(_ref) {\n          _this2.colorPickerButton = _ref;\n        },\n        \"aria-haspopup\": true,\n        \"aria-expanded\": isColorPickerOpen\n      }, _react.default.createElement(\"img\", {\n        src: _colorIcon.default,\n        alt: \"colorwheel\",\n        className: \"modal-icon\"\n      }), \"\\xA0Color\"), isColorPickerOpen && _react.default.createElement(_ClickOutside.default, {\n        eventTypes: \"click\",\n        handleClickOutside: this.handleClickOutside\n      }, _react.default.createElement(\"div\", {\n        className: \"modal-color-picker\",\n        onKeyDown: this.handleKeyDown\n      }, [\"white\", \"#6df\", \"#6f6\", \"#ff6\", \"#fa4\", \"#f66\"].map(function (color) {\n        return _react.default.createElement(\"button\", {\n          key: color,\n          style: {\n            background: color\n          },\n          className: \"color-picker-color\",\n          onClick: function onClick() {\n            return _this2.changeColor(color);\n          }\n        });\n      })))), _react.default.createElement(\"div\", null, _react.default.createElement(\"button\", {\n        onClick: this.toggleCalendar,\n        className: \"options-list-button\"\n      }, _react.default.createElement(\"div\", {\n        className: \"modal-icon\"\n      }, _react.default.createElement(_accessAlarm.default, null)), \"\\xA0Due date\")), _react.default.createElement(_reactModal.default, {\n        isOpen: isCalendarOpen,\n        onRequestClose: this.toggleCalendar,\n        overlayClassName: \"calendar-underlay\",\n        className: \"calendar-modal\",\n        style: isThinDisplay ? calendarMobileStyle : calendarStyle\n      }, _react.default.createElement(_Calendar.default, {\n        cardId: card._id,\n        date: card.date,\n        toggleCalendar: this.toggleCalendar\n      })));\n    }\n  }]);\n\n  return CardOptions;\n}(_react.Component);\n\nObject.defineProperty(CardOptions, \"propTypes\", {\n  configurable: true,\n  enumerable: true,\n  writable: true,\n  value: {\n    isColorPickerOpen: _propTypes.default.bool.isRequired,\n    card: _propTypes.default.shape({\n      _id: _propTypes.default.string.isRequired\n    }).isRequired,\n    listId: _propTypes.default.string.isRequired,\n    isCardNearRightBorder: _propTypes.default.bool.isRequired,\n    isThinDisplay: _propTypes.default.bool.isRequired,\n    boundingRect: _propTypes.default.object.isRequired,\n    toggleColorPicker: _propTypes.default.func.isRequired,\n    dispatch: _propTypes.default.func.isRequired\n  }\n});\n\nvar _default = (0, _reactRedux.connect)()(CardOptions);\n\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/app/components/CardModal/CardOptions.jsx?");

/***/ }),

/***/ "./src/app/components/CardModal/CardOptions.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/CardModal/CardOptions.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/app/components/CardModal/CardOptions.scss?");

/***/ }),

/***/ "./src/app/components/CardModal/ReactDayPicker.css":
/*!*********************************************************!*\
  !*** ./src/app/components/CardModal/ReactDayPicker.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/app/components/CardModal/ReactDayPicker.css?");

/***/ }),

/***/ "./src/app/components/ClickOutside/ClickOutside.jsx":
/*!**********************************************************!*\
  !*** ./src/app/components/ClickOutside/ClickOutside.jsx ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ \"prop-types\"));\n\nvar _reactOnclickoutside = _interopRequireDefault(__webpack_require__(/*! react-onclickoutside */ \"react-onclickoutside\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\n// Wrap component in this component to handle click outisde of that component\nvar ClickOutsideWrapper =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(ClickOutsideWrapper, _Component);\n\n  function ClickOutsideWrapper() {\n    var _ref;\n\n    var _temp, _this;\n\n    _classCallCheck(this, ClickOutsideWrapper);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = ClickOutsideWrapper.__proto__ || Object.getPrototypeOf(ClickOutsideWrapper)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), \"handleClickOutside\", {\n      configurable: true,\n      enumerable: true,\n      writable: true,\n      value: function value() {\n        return _this.props.handleClickOutside();\n      }\n    }), Object.defineProperty(_assertThisInitialized(_this), \"render\", {\n      configurable: true,\n      enumerable: true,\n      writable: true,\n      value: function value() {\n        return _this.props.children;\n      }\n    }), _temp));\n  }\n\n  return ClickOutsideWrapper;\n}(_react.Component);\n\nObject.defineProperty(ClickOutsideWrapper, \"propTypes\", {\n  configurable: true,\n  enumerable: true,\n  writable: true,\n  value: {\n    handleClickOutside: _propTypes.default.func.isRequired,\n    children: _propTypes.default.element.isRequired\n  }\n});\n\nvar _default = (0, _reactOnclickoutside.default)(ClickOutsideWrapper);\n\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/app/components/ClickOutside/ClickOutside.jsx?");

/***/ }),

/***/ "./src/app/components/Header/Header.jsx":
/*!**********************************************!*\
  !*** ./src/app/components/Header/Header.jsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ \"react\"));\n\nvar _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ \"prop-types\"));\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _userSecret = _interopRequireDefault(__webpack_require__(/*! react-icons/lib/fa/user-secret */ \"react-icons/lib/fa/user-secret\"));\n\nvar _signOut = _interopRequireDefault(__webpack_require__(/*! react-icons/lib/fa/sign-out */ \"react-icons/lib/fa/sign-out\"));\n\nvar _signIn = _interopRequireDefault(__webpack_require__(/*! react-icons/lib/fa/sign-in */ \"react-icons/lib/fa/sign-in\"));\n\nvar _kanbanLogo = _interopRequireDefault(__webpack_require__(/*! ../../../assets/images/kanban-logo.svg */ \"./src/assets/images/kanban-logo.svg\"));\n\n__webpack_require__(/*! ./Header.scss */ \"./src/app/components/Header/Header.scss\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nvar Header =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(Header, _Component);\n\n  function Header() {\n    var _ref;\n\n    var _temp, _this;\n\n    _classCallCheck(this, Header);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = Header.__proto__ || Object.getPrototypeOf(Header)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), \"render\", {\n      configurable: true,\n      enumerable: true,\n      writable: true,\n      value: function value() {\n        var user = _this.props.user;\n        return _react.default.createElement(\"header\", null, _react.default.createElement(_reactRouterDom.Link, {\n          to: \"/\",\n          className: \"header-title\"\n        }, _react.default.createElement(\"img\", {\n          src: _kanbanLogo.default,\n          alt: \"React Kanban logo\"\n        }), \"\\xA0React Kanban\"), _react.default.createElement(\"div\", {\n          className: \"header-right-side\"\n        }, user ? _react.default.createElement(\"img\", {\n          src: user.imageUrl,\n          alt: user.name,\n          className: \"user-thumbnail\",\n          title: user.name\n        }) : _react.default.createElement(_userSecret.default, {\n          className: \"guest-icon\"\n        }), user ? _react.default.createElement(\"a\", {\n          className: \"signout-link\",\n          href: \"/auth/signout\"\n        }, _react.default.createElement(_signOut.default, {\n          className: \"signout-icon\"\n        }), \"\\xA0Sign out\") : _react.default.createElement(\"a\", {\n          className: \"signout-link\",\n          href: \"/\"\n        }, _react.default.createElement(_signIn.default, {\n          className: \"signout-icon\"\n        }), \"\\xA0Sign in\")));\n      }\n    }), _temp));\n  }\n\n  return Header;\n}(_react.Component);\n\nObject.defineProperty(Header, \"propTypes\", {\n  configurable: true,\n  enumerable: true,\n  writable: true,\n  value: {\n    user: _propTypes.default.object\n  }\n});\n\nvar mapStateToProps = function mapStateToProps(_ref2) {\n  var user = _ref2.user;\n  return {\n    user: user\n  };\n};\n\nvar _default = (0, _reactRedux.connect)(mapStateToProps)(Header);\n\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/app/components/Header/Header.jsx?");

/***/ }),

/***/ "./src/app/components/Header/Header.scss":
/*!***********************************************!*\
  !*** ./src/app/components/Header/Header.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/app/components/Header/Header.scss?");

/***/ }),

/***/ "./src/app/components/Home/BoardAdder.jsx":
/*!************************************************!*\
  !*** ./src/app/components/Home/BoardAdder.jsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ \"react\"));\n\nvar _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ \"prop-types\"));\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _slugify = _interopRequireDefault(__webpack_require__(/*! slugify */ \"slugify\"));\n\nvar _shortid = _interopRequireDefault(__webpack_require__(/*! shortid */ \"shortid\"));\n\nvar _ClickOutside = _interopRequireDefault(__webpack_require__(/*! ../ClickOutside/ClickOutside */ \"./src/app/components/ClickOutside/ClickOutside.jsx\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nvar BoardAdder =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(BoardAdder, _Component);\n\n  function BoardAdder() {\n    var _this;\n\n    _classCallCheck(this, BoardAdder);\n\n    _this = _possibleConstructorReturn(this, (BoardAdder.__proto__ || Object.getPrototypeOf(BoardAdder)).call(this));\n    Object.defineProperty(_assertThisInitialized(_this), \"toggleOpen\", {\n      configurable: true,\n      enumerable: true,\n      writable: true,\n      value: function value() {\n        _this.setState({\n          isOpen: !_this.state.isOpen\n        });\n      }\n    });\n    Object.defineProperty(_assertThisInitialized(_this), \"handleChange\", {\n      configurable: true,\n      enumerable: true,\n      writable: true,\n      value: function value(event) {\n        _this.setState({\n          title: event.target.value\n        });\n      }\n    });\n    Object.defineProperty(_assertThisInitialized(_this), \"handleSubmit\", {\n      configurable: true,\n      enumerable: true,\n      writable: true,\n      value: function value(event) {\n        // Dispatch action to put new empty board in redux store and db + push new url to history\n        event.preventDefault();\n        var title = _this.state.title;\n\n        if (title === \"\") {\n          return;\n        }\n\n        var _this$props = _this.props,\n            dispatch = _this$props.dispatch,\n            history = _this$props.history,\n            userId = _this$props.userId;\n\n        var boardId = _shortid.default.generate();\n\n        dispatch({\n          type: \"ADD_BOARD\",\n          payload: {\n            boardTitle: title,\n            boardId: boardId,\n            userId: userId\n          }\n        });\n        var urlSlug = (0, _slugify.default)(title, {\n          lower: true\n        });\n        history.push(\"/b/\".concat(boardId, \"/\").concat(urlSlug));\n\n        _this.setState({\n          isOpen: false,\n          title: \"\"\n        });\n      }\n    });\n    Object.defineProperty(_assertThisInitialized(_this), \"handleKeyDown\", {\n      configurable: true,\n      enumerable: true,\n      writable: true,\n      value: function value(event) {\n        if (event.keyCode === 27) {\n          _this.setState({\n            isOpen: false\n          });\n        }\n      }\n    });\n    Object.defineProperty(_assertThisInitialized(_this), \"render\", {\n      configurable: true,\n      enumerable: true,\n      writable: true,\n      value: function value() {\n        var _this$state = _this.state,\n            isOpen = _this$state.isOpen,\n            title = _this$state.title;\n        return isOpen ? _react.default.createElement(_ClickOutside.default, {\n          handleClickOutside: _this.toggleOpen\n        }, _react.default.createElement(\"form\", {\n          onSubmit: _this.handleSubmit,\n          className: \"board-adder\"\n        }, _react.default.createElement(\"input\", {\n          autoFocus: true,\n          className: \"submit-board-input\",\n          type: \"text\",\n          value: title,\n          onKeyDown: _this.handleKeyDown,\n          onChange: _this.handleChange,\n          spellCheck: false\n        }), _react.default.createElement(\"input\", {\n          type: \"submit\",\n          value: \"Create\",\n          className: \"submit-board-button\",\n          disabled: title === \"\"\n        }))) : _react.default.createElement(\"button\", {\n          onClick: _this.toggleOpen,\n          className: \"add-board-button\"\n        }, \"Add a new board...\");\n      }\n    });\n    _this.state = {\n      isOpen: false,\n      title: \"\"\n    };\n    return _this;\n  }\n\n  return BoardAdder;\n}(_react.Component);\n\nObject.defineProperty(BoardAdder, \"propTypes\", {\n  configurable: true,\n  enumerable: true,\n  writable: true,\n  value: {\n    userId: _propTypes.default.string.isRequired,\n    history: _propTypes.default.object.isRequired,\n    dispatch: _propTypes.default.func.isRequired\n  }\n});\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    userId: state.user ? state.user._id : \"guest\"\n  };\n};\n\nvar _default = (0, _reactRedux.connect)(mapStateToProps)(BoardAdder);\n\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/app/components/Home/BoardAdder.jsx?");

/***/ }),

/***/ "./src/app/components/Home/Home.jsx":
/*!******************************************!*\
  !*** ./src/app/components/Home/Home.jsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ \"react\"));\n\nvar _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ \"prop-types\"));\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _reactHelmet = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n\nvar _slugify = _interopRequireDefault(__webpack_require__(/*! slugify */ \"slugify\"));\n\nvar _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ \"classnames\"));\n\nvar _Header = _interopRequireDefault(__webpack_require__(/*! ../Header/Header */ \"./src/app/components/Header/Header.jsx\"));\n\nvar _BoardAdder = _interopRequireDefault(__webpack_require__(/*! ./BoardAdder */ \"./src/app/components/Home/BoardAdder.jsx\"));\n\n__webpack_require__(/*! ./Home.scss */ \"./src/app/components/Home/Home.scss\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nvar Home =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(Home, _Component);\n\n  function Home() {\n    var _ref;\n\n    var _temp, _this;\n\n    _classCallCheck(this, Home);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = Home.__proto__ || Object.getPrototypeOf(Home)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), \"render\", {\n      configurable: true,\n      enumerable: true,\n      writable: true,\n      value: function value() {\n        var _this$props = _this.props,\n            boards = _this$props.boards,\n            listsById = _this$props.listsById,\n            history = _this$props.history;\n        return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_reactHelmet.Helmet, null, _react.default.createElement(\"title\", null, \"Home | React Kanban\")), _react.default.createElement(_Header.default, null), _react.default.createElement(\"div\", {\n          className: \"home\"\n        }, _react.default.createElement(\"div\", {\n          className: \"main-content\"\n        }, _react.default.createElement(\"h1\", null, \"Boards\"), _react.default.createElement(\"div\", {\n          className: \"boards\"\n        }, boards.map(function (board) {\n          return _react.default.createElement(_reactRouterDom.Link, {\n            key: board._id,\n            className: (0, _classnames.default)(\"board-link\", board.color),\n            to: \"/b/\".concat(board._id, \"/\").concat((0, _slugify.default)(board.title, {\n              lower: true\n            }))\n          }, _react.default.createElement(\"div\", {\n            className: \"board-link-title\"\n          }, board.title), _react.default.createElement(\"div\", {\n            className: \"mini-board\"\n          }, board.lists.map(function (listId) {\n            return _react.default.createElement(\"div\", {\n              key: listId,\n              className: \"mini-list\",\n              style: {\n                height: \"\".concat(Math.min((listsById[listId].cards.length + 1) * 18, 100), \"%\")\n              }\n            });\n          })));\n        }), _react.default.createElement(_BoardAdder.default, {\n          history: history\n        })))));\n      }\n    }), _temp));\n  }\n\n  return Home;\n}(_react.Component);\n\nObject.defineProperty(Home, \"propTypes\", {\n  configurable: true,\n  enumerable: true,\n  writable: true,\n  value: {\n    boards: _propTypes.default.arrayOf(_propTypes.default.shape({\n      _id: _propTypes.default.string.isRequired,\n      color: _propTypes.default.string.isRequired,\n      title: _propTypes.default.string.isRequired\n    }).isRequired).isRequired,\n    listsById: _propTypes.default.object.isRequired,\n    history: _propTypes.default.object.isRequired\n  }\n});\n\nvar mapStateToProps = function mapStateToProps(state) {\n  return {\n    boards: Object.values(state.boardsById),\n    listsById: state.listsById\n  };\n};\n\nvar _default = (0, _reactRedux.connect)(mapStateToProps)(Home);\n\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/app/components/Home/Home.jsx?");

/***/ }),

/***/ "./src/app/components/Home/Home.scss":
/*!*******************************************!*\
  !*** ./src/app/components/Home/Home.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/app/components/Home/Home.scss?");

/***/ }),

/***/ "./src/app/components/LandingPage/LandingPage.jsx":
/*!********************************************************!*\
  !*** ./src/app/components/LandingPage/LandingPage.jsx ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ \"react\"));\n\nvar _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ \"prop-types\"));\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _reactHelmet = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n\nvar _twitter = _interopRequireDefault(__webpack_require__(/*! react-icons/lib/fa/twitter */ \"react-icons/lib/fa/twitter\"));\n\nvar _userSecret = _interopRequireDefault(__webpack_require__(/*! react-icons/lib/fa/user-secret */ \"react-icons/lib/fa/user-secret\"));\n\nvar _googleLogo = _interopRequireDefault(__webpack_require__(/*! ../../../assets/images/google-logo.svg */ \"./src/assets/images/google-logo.svg\"));\n\nvar _kanbanLogo = _interopRequireDefault(__webpack_require__(/*! ../../../assets/images/kanban-logo.svg */ \"./src/assets/images/kanban-logo.svg\"));\n\n__webpack_require__(/*! ./LandingPage.scss */ \"./src/app/components/LandingPage/LandingPage.scss\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nvar LandingPage =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(LandingPage, _Component);\n\n  function LandingPage() {\n    var _ref;\n\n    var _temp, _this;\n\n    _classCallCheck(this, LandingPage);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = LandingPage.__proto__ || Object.getPrototypeOf(LandingPage)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), \"enterAsGuest\", {\n      configurable: true,\n      enumerable: true,\n      writable: true,\n      value: function value() {\n        _this.props.dispatch({\n          type: \"ENTER_AS_GUEST\"\n        });\n      }\n    }), Object.defineProperty(_assertThisInitialized(_this), \"render\", {\n      configurable: true,\n      enumerable: true,\n      writable: true,\n      value: function value() {\n        return _react.default.createElement(\"div\", {\n          className: \"landing-page\"\n        }, _react.default.createElement(_reactHelmet.Helmet, null, _react.default.createElement(\"title\", null, \"Sign in | React Kanban\")), _react.default.createElement(\"div\", {\n          className: \"landing-page-info-wrapper\"\n        }, _react.default.createElement(\"div\", {\n          className: \"landing-page-info\"\n        }, _react.default.createElement(\"div\", {\n          className: \"landing-page-heading\"\n        }, _react.default.createElement(\"img\", {\n          src: _kanbanLogo.default,\n          alt: \"React Kanban logo\",\n          className: \"landing-page-logo\"\n        }), \"\\xA0\", _react.default.createElement(\"h1\", null, \"React Kanban\")), _react.default.createElement(\"p\", {\n          className: \"landing-page-description\"\n        }, \"An open source kanban application inspired by Trello. Check out the source code on\", \" \", _react.default.createElement(\"a\", {\n          href: \"https://github.com/yogaboll/react-kanban\",\n          target: \"_blank\",\n          rel: \"noopener noreferrer\"\n        }, \"GitHub\"), \".\"), _react.default.createElement(\"div\", {\n          className: \"signin-buttons\"\n        }, _react.default.createElement(\"div\", null, _react.default.createElement(\"a\", {\n          href: \"/auth/twitter\",\n          className: \"signin-button twitter-button\"\n        }, _react.default.createElement(_twitter.default, {\n          className: \"logo-icon\"\n        }), \" \\xA0Sign in with Twitter\")), _react.default.createElement(\"div\", null, _react.default.createElement(\"a\", {\n          href: \"/auth/google\",\n          className: \"signin-button google-button\"\n        }, _react.default.createElement(\"img\", {\n          className: \"google-logo\",\n          src: _googleLogo.default,\n          alt: \"google logo\"\n        }), \"\\xA0Sign in with Google\")), _react.default.createElement(\"div\", {\n          className: \"guest-button-wrapper\"\n        }, _react.default.createElement(\"button\", {\n          onClick: _this.enterAsGuest,\n          className: \"signin-button guest-button\"\n        }, _react.default.createElement(_userSecret.default, {\n          className: \"logo-icon\"\n        }), \" \\xA0Enter as guest\"))))));\n      }\n    }), _temp));\n  }\n\n  return LandingPage;\n}(_react.Component);\n\nObject.defineProperty(LandingPage, \"propTypes\", {\n  configurable: true,\n  enumerable: true,\n  writable: true,\n  value: {\n    dispatch: _propTypes.default.func.isRequired\n  }\n});\n\nvar _default = (0, _reactRedux.connect)()(LandingPage);\n\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/app/components/LandingPage/LandingPage.jsx?");

/***/ }),

/***/ "./src/app/components/LandingPage/LandingPage.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/LandingPage/LandingPage.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/app/components/LandingPage/LandingPage.scss?");

/***/ }),

/***/ "./src/app/components/List/Cards.jsx":
/*!*******************************************!*\
  !*** ./src/app/components/List/Cards.jsx ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ \"react\"));\n\nvar _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ \"prop-types\"));\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _reactBeautifulDnd = __webpack_require__(/*! react-beautiful-dnd */ \"react-beautiful-dnd\");\n\nvar _Card = _interopRequireDefault(__webpack_require__(/*! ../Card/Card */ \"./src/app/components/Card/Card.jsx\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nvar Cards =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(Cards, _Component);\n\n  function Cards() {\n    var _ref;\n\n    var _temp, _this;\n\n    _classCallCheck(this, Cards);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = Cards.__proto__ || Object.getPrototypeOf(Cards)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), \"componentDidUpdate\", {\n      configurable: true,\n      enumerable: true,\n      writable: true,\n      value: function value(prevProps) {\n        // Scroll to bottom of list if a new card has been added\n        if (_this.props.cards[_this.props.cards.length - 2] === prevProps.cards[prevProps.cards.length - 1]) {\n          _this.scrollToBottom();\n        }\n      }\n    }), Object.defineProperty(_assertThisInitialized(_this), \"scrollToBottom\", {\n      configurable: true,\n      enumerable: true,\n      writable: true,\n      value: function value() {\n        _this.listEnd.scrollIntoView();\n      }\n    }), _temp));\n  }\n\n  _createClass(Cards, [{\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var _props = this.props,\n          listId = _props.listId,\n          cards = _props.cards;\n      return _react.default.createElement(_reactBeautifulDnd.Droppable, {\n        droppableId: listId\n      }, function (provided, _ref2) {\n        var isDraggingOver = _ref2.isDraggingOver;\n        return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(\"div\", {\n          className: \"cards\",\n          ref: provided.innerRef\n        }, cards.map(function (cardId, index) {\n          return _react.default.createElement(_Card.default, {\n            isDraggingOver: isDraggingOver,\n            key: cardId,\n            cardId: cardId,\n            index: index,\n            listId: listId\n          });\n        }), provided.placeholder, _react.default.createElement(\"div\", {\n          style: {\n            float: \"left\",\n            clear: \"both\"\n          },\n          ref: function ref(el) {\n            _this2.listEnd = el;\n          }\n        })));\n      });\n    }\n  }]);\n\n  return Cards;\n}(_react.Component);\n\nObject.defineProperty(Cards, \"propTypes\", {\n  configurable: true,\n  enumerable: true,\n  writable: true,\n  value: {\n    listId: _propTypes.default.string.isRequired,\n    cards: _propTypes.default.arrayOf(_propTypes.default.string).isRequired\n  }\n});\n\nvar mapStateToProps = function mapStateToProps(state, ownProps) {\n  return {\n    cards: state.listsById[ownProps.listId].cards\n  };\n};\n\nvar _default = (0, _reactRedux.connect)(mapStateToProps)(Cards);\n\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/app/components/List/Cards.jsx?");

/***/ }),

/***/ "./src/app/components/List/List.jsx":
/*!******************************************!*\
  !*** ./src/app/components/List/List.jsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ \"react\"));\n\nvar _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ \"prop-types\"));\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _reactBeautifulDnd = __webpack_require__(/*! react-beautiful-dnd */ \"react-beautiful-dnd\");\n\nvar _classnames = _interopRequireDefault(__webpack_require__(/*! classnames */ \"classnames\"));\n\nvar _ListHeader = _interopRequireDefault(__webpack_require__(/*! ./ListHeader */ \"./src/app/components/List/ListHeader.jsx\"));\n\nvar _Cards = _interopRequireDefault(__webpack_require__(/*! ./Cards */ \"./src/app/components/List/Cards.jsx\"));\n\nvar _CardAdder = _interopRequireDefault(__webpack_require__(/*! ../CardAdder/CardAdder */ \"./src/app/components/CardAdder/CardAdder.jsx\"));\n\n__webpack_require__(/*! ./List.scss */ \"./src/app/components/List/List.scss\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nvar List =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(List, _Component);\n\n  function List() {\n    var _ref;\n\n    var _temp, _this;\n\n    _classCallCheck(this, List);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = List.__proto__ || Object.getPrototypeOf(List)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), \"render\", {\n      configurable: true,\n      enumerable: true,\n      writable: true,\n      value: function value() {\n        var _this$props = _this.props,\n            list = _this$props.list,\n            boardId = _this$props.boardId,\n            index = _this$props.index;\n        return _react.default.createElement(_reactBeautifulDnd.Draggable, {\n          draggableId: list._id,\n          index: index,\n          disableInteractiveElementBlocking: true\n        }, function (provided, snapshot) {\n          return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(\"div\", _extends({\n            ref: provided.innerRef\n          }, provided.draggableProps, {\n            className: \"list-wrapper\"\n          }), _react.default.createElement(\"div\", {\n            className: (0, _classnames.default)(\"list\", {\n              \"list--drag\": snapshot.isDragging\n            })\n          }, _react.default.createElement(_ListHeader.default, {\n            dragHandleProps: provided.dragHandleProps,\n            listTitle: list.title,\n            listId: list._id,\n            cards: list.cards,\n            boardId: boardId\n          }), _react.default.createElement(\"div\", {\n            className: \"cards-wrapper\"\n          }, _react.default.createElement(_Cards.default, {\n            listId: list._id\n          }))), _react.default.createElement(_CardAdder.default, {\n            listId: list._id\n          })), provided.placeholder);\n        });\n      }\n    }), _temp));\n  }\n\n  return List;\n}(_react.Component);\n\nObject.defineProperty(List, \"propTypes\", {\n  configurable: true,\n  enumerable: true,\n  writable: true,\n  value: {\n    boardId: _propTypes.default.string.isRequired,\n    index: _propTypes.default.number.isRequired,\n    list: _propTypes.default.shape({\n      _id: _propTypes.default.string.isRequired\n    }).isRequired\n  }\n});\n\nvar _default = (0, _reactRedux.connect)()(List);\n\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/app/components/List/List.jsx?");

/***/ }),

/***/ "./src/app/components/List/List.scss":
/*!*******************************************!*\
  !*** ./src/app/components/List/List.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/app/components/List/List.scss?");

/***/ }),

/***/ "./src/app/components/List/ListHeader.jsx":
/*!************************************************!*\
  !*** ./src/app/components/List/ListHeader.jsx ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ \"react\"));\n\nvar _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ \"prop-types\"));\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _reactTextareaAutosize = _interopRequireDefault(__webpack_require__(/*! react-textarea-autosize */ \"react-textarea-autosize\"));\n\nvar _reactAriaMenubutton = __webpack_require__(/*! react-aria-menubutton */ \"react-aria-menubutton\");\n\nvar _trash = _interopRequireDefault(__webpack_require__(/*! react-icons/lib/fa/trash */ \"react-icons/lib/fa/trash\"));\n\n__webpack_require__(/*! ./ListHeader.scss */ \"./src/app/components/List/ListHeader.scss\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nvar ListTitle =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(ListTitle, _Component);\n\n  function ListTitle(props) {\n    var _this;\n\n    _classCallCheck(this, ListTitle);\n\n    _this = _possibleConstructorReturn(this, (ListTitle.__proto__ || Object.getPrototypeOf(ListTitle)).call(this, props));\n    Object.defineProperty(_assertThisInitialized(_this), \"handleChange\", {\n      configurable: true,\n      enumerable: true,\n      writable: true,\n      value: function value(event) {\n        _this.setState({\n          newTitle: event.target.value\n        });\n      }\n    });\n    Object.defineProperty(_assertThisInitialized(_this), \"handleKeyDown\", {\n      configurable: true,\n      enumerable: true,\n      writable: true,\n      value: function value(event) {\n        if (event.keyCode === 13) {\n          event.preventDefault();\n\n          _this.handleSubmit();\n        } else if (event.keyCode === 27) {\n          _this.revertTitle();\n        }\n      }\n    });\n    Object.defineProperty(_assertThisInitialized(_this), \"handleSubmit\", {\n      configurable: true,\n      enumerable: true,\n      writable: true,\n      value: function value() {\n        var newTitle = _this.state.newTitle;\n        var _this$props = _this.props,\n            listTitle = _this$props.listTitle,\n            listId = _this$props.listId,\n            dispatch = _this$props.dispatch;\n        if (newTitle === \"\") return;\n\n        if (newTitle !== listTitle) {\n          dispatch({\n            type: \"CHANGE_LIST_TITLE\",\n            payload: {\n              listTitle: newTitle,\n              listId: listId\n            }\n          });\n        }\n\n        _this.setState({\n          isOpen: false\n        });\n      }\n    });\n    Object.defineProperty(_assertThisInitialized(_this), \"revertTitle\", {\n      configurable: true,\n      enumerable: true,\n      writable: true,\n      value: function value() {\n        _this.setState({\n          newTitle: _this.props.listTitle,\n          isOpen: false\n        });\n      }\n    });\n    Object.defineProperty(_assertThisInitialized(_this), \"deleteList\", {\n      configurable: true,\n      enumerable: true,\n      writable: true,\n      value: function value() {\n        var _this$props2 = _this.props,\n            listId = _this$props2.listId,\n            cards = _this$props2.cards,\n            boardId = _this$props2.boardId,\n            dispatch = _this$props2.dispatch;\n        dispatch({\n          type: \"DELETE_LIST\",\n          payload: {\n            cards: cards,\n            listId: listId,\n            boardId: boardId\n          }\n        });\n      }\n    });\n    Object.defineProperty(_assertThisInitialized(_this), \"openTitleEditor\", {\n      configurable: true,\n      enumerable: true,\n      writable: true,\n      value: function value() {\n        _this.setState({\n          isOpen: true\n        });\n      }\n    });\n    Object.defineProperty(_assertThisInitialized(_this), \"handleButtonKeyDown\", {\n      configurable: true,\n      enumerable: true,\n      writable: true,\n      value: function value(event) {\n        if (event.keyCode === 13) {\n          event.preventDefault();\n\n          _this.openTitleEditor();\n        }\n      }\n    });\n    _this.state = {\n      isOpen: false,\n      newTitle: props.listTitle\n    };\n    return _this;\n  }\n\n  _createClass(ListTitle, [{\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var _state = this.state,\n          isOpen = _state.isOpen,\n          newTitle = _state.newTitle;\n      var _props = this.props,\n          dragHandleProps = _props.dragHandleProps,\n          listTitle = _props.listTitle;\n      return _react.default.createElement(\"div\", {\n        className: \"list-header\"\n      }, isOpen ? _react.default.createElement(\"div\", {\n        className: \"list-title-textarea-wrapper\"\n      }, _react.default.createElement(_reactTextareaAutosize.default, {\n        autoFocus: true,\n        useCacheForDOMMeasurements: true,\n        value: newTitle,\n        onChange: this.handleChange,\n        onKeyDown: this.handleKeyDown,\n        className: \"list-title-textarea\",\n        onBlur: this.handleSubmit,\n        spellCheck: false\n      })) : _react.default.createElement(\"div\", _extends({}, dragHandleProps, {\n        role: \"button\",\n        tabIndex: 0,\n        onClick: this.openTitleEditor,\n        onKeyDown: function onKeyDown(event) {\n          _this2.handleButtonKeyDown(event);\n\n          dragHandleProps.onKeyDown(event);\n        },\n        className: \"list-title-button\"\n      }), listTitle), _react.default.createElement(_reactAriaMenubutton.Wrapper, {\n        className: \"delete-list-wrapper\",\n        onSelection: this.deleteList\n      }, _react.default.createElement(_reactAriaMenubutton.Button, {\n        className: \"delete-list-button\"\n      }, _react.default.createElement(_trash.default, null)), _react.default.createElement(_reactAriaMenubutton.Menu, {\n        className: \"delete-list-menu\"\n      }, _react.default.createElement(\"div\", {\n        className: \"delete-list-header\"\n      }, \"Are you sure?\"), _react.default.createElement(_reactAriaMenubutton.MenuItem, {\n        className: \"delete-list-confirm\"\n      }, \"Delete\"))));\n    }\n  }]);\n\n  return ListTitle;\n}(_react.Component);\n\nObject.defineProperty(ListTitle, \"propTypes\", {\n  configurable: true,\n  enumerable: true,\n  writable: true,\n  value: {\n    listTitle: _propTypes.default.string.isRequired,\n    listId: _propTypes.default.string.isRequired,\n    boardId: _propTypes.default.string.isRequired,\n    cards: _propTypes.default.arrayOf(_propTypes.default.string).isRequired,\n    dragHandleProps: _propTypes.default.object.isRequired,\n    dispatch: _propTypes.default.func.isRequired\n  }\n});\n\nvar _default = (0, _reactRedux.connect)()(ListTitle);\n\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/app/components/List/ListHeader.jsx?");

/***/ }),

/***/ "./src/app/components/List/ListHeader.scss":
/*!*************************************************!*\
  !*** ./src/app/components/List/ListHeader.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/app/components/List/ListHeader.scss?");

/***/ }),

/***/ "./src/app/components/ListAdder/ListAdder.jsx":
/*!****************************************************!*\
  !*** ./src/app/components/ListAdder/ListAdder.jsx ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _react = _interopRequireWildcard(__webpack_require__(/*! react */ \"react\"));\n\nvar _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ \"prop-types\"));\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _reactTextareaAutosize = _interopRequireDefault(__webpack_require__(/*! react-textarea-autosize */ \"react-textarea-autosize\"));\n\nvar _shortid = _interopRequireDefault(__webpack_require__(/*! shortid */ \"shortid\"));\n\n__webpack_require__(/*! ./ListAdder.scss */ \"./src/app/components/ListAdder/ListAdder.scss\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nvar ListAdder =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(ListAdder, _Component);\n\n  function ListAdder() {\n    var _this;\n\n    _classCallCheck(this, ListAdder);\n\n    _this = _possibleConstructorReturn(this, (ListAdder.__proto__ || Object.getPrototypeOf(ListAdder)).call(this));\n    Object.defineProperty(_assertThisInitialized(_this), \"handleBlur\", {\n      configurable: true,\n      enumerable: true,\n      writable: true,\n      value: function value() {\n        _this.setState({\n          isOpen: false\n        });\n      }\n    });\n    Object.defineProperty(_assertThisInitialized(_this), \"handleChange\", {\n      configurable: true,\n      enumerable: true,\n      writable: true,\n      value: function value(event) {\n        _this.setState({\n          listTitle: event.target.value\n        });\n      }\n    });\n    Object.defineProperty(_assertThisInitialized(_this), \"handleKeyDown\", {\n      configurable: true,\n      enumerable: true,\n      writable: true,\n      value: function value(event) {\n        if (event.keyCode === 13) {\n          event.preventDefault();\n\n          _this.handleSubmit();\n        } else if (event.keyCode === 27) {\n          _this.setState({\n            isOpen: false,\n            listTitle: \"\"\n          });\n        }\n      }\n    });\n    Object.defineProperty(_assertThisInitialized(_this), \"handleSubmit\", {\n      configurable: true,\n      enumerable: true,\n      writable: true,\n      value: function value() {\n        var _this$props = _this.props,\n            dispatch = _this$props.dispatch,\n            boardId = _this$props.boardId;\n        var listTitle = _this.state.listTitle;\n\n        var listId = _shortid.default.generate();\n\n        if (listTitle === \"\") return;\n        dispatch({\n          type: \"ADD_LIST\",\n          payload: {\n            listTitle: listTitle,\n            listId: listId,\n            boardId: boardId\n          }\n        });\n\n        _this.setState({\n          isOpen: false,\n          listTitle: \"\"\n        });\n      }\n    });\n    Object.defineProperty(_assertThisInitialized(_this), \"render\", {\n      configurable: true,\n      enumerable: true,\n      writable: true,\n      value: function value() {\n        var _this$state = _this.state,\n            isOpen = _this$state.isOpen,\n            listTitle = _this$state.listTitle;\n\n        if (!isOpen) {\n          return _react.default.createElement(\"button\", {\n            onClick: function onClick() {\n              return _this.setState({\n                isOpen: true\n              });\n            },\n            className: \"add-list-button\"\n          }, \"Add a new list...\");\n        }\n\n        return _react.default.createElement(\"div\", {\n          className: \"list\"\n        }, _react.default.createElement(_reactTextareaAutosize.default, {\n          autoFocus: true,\n          useCacheForDOMMeasurements: true,\n          value: listTitle,\n          onChange: _this.handleChange,\n          onKeyDown: _this.handleKeyDown,\n          className: \"list-adder-textarea\",\n          onBlur: _this.handleBlur,\n          spellCheck: false\n        }));\n      }\n    });\n    _this.state = {\n      isOpen: false,\n      listTitle: \"\"\n    };\n    return _this;\n  }\n\n  return ListAdder;\n}(_react.Component);\n\nObject.defineProperty(ListAdder, \"propTypes\", {\n  configurable: true,\n  enumerable: true,\n  writable: true,\n  value: {\n    boardId: _propTypes.default.string.isRequired,\n    dispatch: _propTypes.default.func.isRequired\n  }\n});\n\nvar _default = (0, _reactRedux.connect)()(ListAdder);\n\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/app/components/ListAdder/ListAdder.jsx?");

/***/ }),

/***/ "./src/app/components/ListAdder/ListAdder.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/ListAdder/ListAdder.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/app/components/ListAdder/ListAdder.scss?");

/***/ }),

/***/ "./src/app/components/utils.js":
/*!*************************************!*\
  !*** ./src/app/components/utils.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.findCheckboxes = void 0;\n\n// Return the total number of checkboxes and the number of checked checkboxes inside a given text\nvar findCheckboxes = function findCheckboxes(text) {\n  var checkboxes = text.match(/\\[(\\s|x)\\]/g) || [];\n  var checked = checkboxes.filter(function (checkbox) {\n    return checkbox === \"[x]\";\n  }).length;\n  return {\n    total: checkboxes.length,\n    checked: checked\n  };\n};\n\nexports.findCheckboxes = findCheckboxes;\n\n//# sourceURL=webpack:///./src/app/components/utils.js?");

/***/ }),

/***/ "./src/app/reducers/boardsById.js":
/*!****************************************!*\
  !*** ./src/app/reducers/boardsById.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar boardsById = function boardsById() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case \"ADD_LIST\":\n      {\n        var _action$payload = action.payload,\n            boardId = _action$payload.boardId,\n            listId = _action$payload.listId;\n        return _objectSpread({}, state, _defineProperty({}, boardId, _objectSpread({}, state[boardId], {\n          lists: _toConsumableArray(state[boardId].lists).concat([listId])\n        })));\n      }\n\n    case \"MOVE_LIST\":\n      {\n        var _action$payload2 = action.payload,\n            oldListIndex = _action$payload2.oldListIndex,\n            newListIndex = _action$payload2.newListIndex,\n            _boardId = _action$payload2.boardId;\n        var newLists = Array.from(state[_boardId].lists);\n\n        var _newLists$splice = newLists.splice(oldListIndex, 1),\n            _newLists$splice2 = _slicedToArray(_newLists$splice, 1),\n            removedList = _newLists$splice2[0];\n\n        newLists.splice(newListIndex, 0, removedList);\n        return _objectSpread({}, state, _defineProperty({}, _boardId, _objectSpread({}, state[_boardId], {\n          lists: newLists\n        })));\n      }\n\n    case \"DELETE_LIST\":\n      {\n        var _action$payload3 = action.payload,\n            newListId = _action$payload3.listId,\n            _boardId2 = _action$payload3.boardId;\n        return _objectSpread({}, state, _defineProperty({}, _boardId2, _objectSpread({}, state[_boardId2], {\n          lists: state[_boardId2].lists.filter(function (listId) {\n            return listId !== newListId;\n          })\n        })));\n      }\n\n    case \"ADD_BOARD\":\n      {\n        var _action$payload4 = action.payload,\n            boardTitle = _action$payload4.boardTitle,\n            _boardId3 = _action$payload4.boardId,\n            userId = _action$payload4.userId;\n        return _objectSpread({}, state, _defineProperty({}, _boardId3, {\n          _id: _boardId3,\n          title: boardTitle,\n          lists: [],\n          users: [userId],\n          color: \"blue\"\n        }));\n      }\n\n    case \"CHANGE_BOARD_TITLE\":\n      {\n        var _action$payload5 = action.payload,\n            _boardTitle = _action$payload5.boardTitle,\n            _boardId4 = _action$payload5.boardId;\n        return _objectSpread({}, state, _defineProperty({}, _boardId4, _objectSpread({}, state[_boardId4], {\n          title: _boardTitle\n        })));\n      }\n\n    case \"CHANGE_BOARD_COLOR\":\n      {\n        var _action$payload6 = action.payload,\n            _boardId5 = _action$payload6.boardId,\n            color = _action$payload6.color;\n        return _objectSpread({}, state, _defineProperty({}, _boardId5, _objectSpread({}, state[_boardId5], {\n          color: color\n        })));\n      }\n\n    case \"DELETE_BOARD\":\n      {\n        var _boardId6 = action.payload.boardId;\n\n        var deletedBoard = state[_boardId6],\n            restOfBoards = _objectWithoutProperties(state, [_boardId6]);\n\n        return restOfBoards;\n      }\n\n    default:\n      return state;\n  }\n};\n\nvar _default = boardsById;\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/app/reducers/boardsById.js?");

/***/ }),

/***/ "./src/app/reducers/cardsById.js":
/*!***************************************!*\
  !*** ./src/app/reducers/cardsById.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar cardsById = function cardsById() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case \"ADD_CARD\":\n      {\n        var _action$payload = action.payload,\n            cardText = _action$payload.cardText,\n            cardId = _action$payload.cardId;\n        return _objectSpread({}, state, _defineProperty({}, cardId, {\n          text: cardText,\n          _id: cardId\n        }));\n      }\n\n    case \"CHANGE_CARD_TEXT\":\n      {\n        var _action$payload2 = action.payload,\n            _cardText = _action$payload2.cardText,\n            _cardId = _action$payload2.cardId;\n        return _objectSpread({}, state, _defineProperty({}, _cardId, _objectSpread({}, state[_cardId], {\n          text: _cardText\n        })));\n      }\n\n    case \"CHANGE_CARD_DATE\":\n      {\n        var _action$payload3 = action.payload,\n            date = _action$payload3.date,\n            _cardId2 = _action$payload3.cardId;\n        return _objectSpread({}, state, _defineProperty({}, _cardId2, _objectSpread({}, state[_cardId2], {\n          date: date\n        })));\n      }\n\n    case \"CHANGE_CARD_COLOR\":\n      {\n        var _action$payload4 = action.payload,\n            color = _action$payload4.color,\n            _cardId3 = _action$payload4.cardId;\n        return _objectSpread({}, state, _defineProperty({}, _cardId3, _objectSpread({}, state[_cardId3], {\n          color: color\n        })));\n      }\n\n    case \"DELETE_CARD\":\n      {\n        var _cardId4 = action.payload.cardId;\n\n        var deletedCard = state[_cardId4],\n            restOfCards = _objectWithoutProperties(state, [_cardId4]);\n\n        return restOfCards;\n      }\n    // Find every card from the deleted list and remove it (actually unnecessary since they will be removed from db on next write anyway)\n\n    case \"DELETE_LIST\":\n      {\n        var cardIds = action.payload.cards;\n        return Object.keys(state).filter(function (cardId) {\n          return !cardIds.includes(cardId);\n        }).reduce(function (newState, cardId) {\n          return _objectSpread({}, newState, _defineProperty({}, cardId, state[cardId]));\n        }, {});\n      }\n\n    default:\n      return state;\n  }\n};\n\nvar _default = cardsById;\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/app/reducers/cardsById.js?");

/***/ }),

/***/ "./src/app/reducers/currentBoardId.js":
/*!********************************************!*\
  !*** ./src/app/reducers/currentBoardId.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar currentBoardId = function currentBoardId() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case \"PUT_BOARD_ID_IN_REDUX\":\n    case \"ADD_BOARD\":\n      {\n        return action.payload.boardId;\n      }\n\n    default:\n      return state;\n  }\n};\n\nvar _default = currentBoardId;\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/app/reducers/currentBoardId.js?");

/***/ }),

/***/ "./src/app/reducers/index.js":
/*!***********************************!*\
  !*** ./src/app/reducers/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _cardsById = _interopRequireDefault(__webpack_require__(/*! ./cardsById */ \"./src/app/reducers/cardsById.js\"));\n\nvar _listsById = _interopRequireDefault(__webpack_require__(/*! ./listsById */ \"./src/app/reducers/listsById.js\"));\n\nvar _boardsById = _interopRequireDefault(__webpack_require__(/*! ./boardsById */ \"./src/app/reducers/boardsById.js\"));\n\nvar _user = _interopRequireDefault(__webpack_require__(/*! ./user */ \"./src/app/reducers/user.js\"));\n\nvar _isGuest = _interopRequireDefault(__webpack_require__(/*! ./isGuest */ \"./src/app/reducers/isGuest.js\"));\n\nvar _currentBoardId = _interopRequireDefault(__webpack_require__(/*! ./currentBoardId */ \"./src/app/reducers/currentBoardId.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar _default = (0, _redux.combineReducers)({\n  cardsById: _cardsById.default,\n  listsById: _listsById.default,\n  boardsById: _boardsById.default,\n  user: _user.default,\n  isGuest: _isGuest.default,\n  currentBoardId: _currentBoardId.default\n});\n\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/app/reducers/index.js?");

/***/ }),

/***/ "./src/app/reducers/isGuest.js":
/*!*************************************!*\
  !*** ./src/app/reducers/isGuest.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar isGuest = function isGuest() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case \"ENTER_AS_GUEST\":\n      {\n        return true;\n      }\n\n    default:\n      return state;\n  }\n};\n\nvar _default = isGuest;\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/app/reducers/isGuest.js?");

/***/ }),

/***/ "./src/app/reducers/listsById.js":
/*!***************************************!*\
  !*** ./src/app/reducers/listsById.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar listsById = function listsById() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case \"ADD_CARD\":\n      {\n        var _action$payload = action.payload,\n            listId = _action$payload.listId,\n            cardId = _action$payload.cardId;\n        return _objectSpread({}, state, _defineProperty({}, listId, _objectSpread({}, state[listId], {\n          cards: _toConsumableArray(state[listId].cards).concat([cardId])\n        })));\n      }\n\n    case \"MOVE_CARD\":\n      {\n        var _objectSpread4;\n\n        var _action$payload2 = action.payload,\n            oldCardIndex = _action$payload2.oldCardIndex,\n            newCardIndex = _action$payload2.newCardIndex,\n            sourceListId = _action$payload2.sourceListId,\n            destListId = _action$payload2.destListId; // Move within the same list\n\n        if (sourceListId === destListId) {\n          var newCards = Array.from(state[sourceListId].cards);\n\n          var _newCards$splice = newCards.splice(oldCardIndex, 1),\n              _newCards$splice2 = _slicedToArray(_newCards$splice, 1),\n              _removedCard = _newCards$splice2[0];\n\n          newCards.splice(newCardIndex, 0, _removedCard);\n          return _objectSpread({}, state, _defineProperty({}, sourceListId, _objectSpread({}, state[sourceListId], {\n            cards: newCards\n          })));\n        } // Move card from one list to another\n\n\n        var sourceCards = Array.from(state[sourceListId].cards);\n\n        var _sourceCards$splice = sourceCards.splice(oldCardIndex, 1),\n            _sourceCards$splice2 = _slicedToArray(_sourceCards$splice, 1),\n            removedCard = _sourceCards$splice2[0];\n\n        var destinationCards = Array.from(state[destListId].cards);\n        destinationCards.splice(newCardIndex, 0, removedCard);\n        return _objectSpread({}, state, (_objectSpread4 = {}, _defineProperty(_objectSpread4, sourceListId, _objectSpread({}, state[sourceListId], {\n          cards: sourceCards\n        })), _defineProperty(_objectSpread4, destListId, _objectSpread({}, state[destListId], {\n          cards: destinationCards\n        })), _objectSpread4));\n      }\n\n    case \"DELETE_CARD\":\n      {\n        var _action$payload3 = action.payload,\n            newCardId = _action$payload3.cardId,\n            _listId = _action$payload3.listId;\n        return _objectSpread({}, state, _defineProperty({}, _listId, _objectSpread({}, state[_listId], {\n          cards: state[_listId].cards.filter(function (cardId) {\n            return cardId !== newCardId;\n          })\n        })));\n      }\n\n    case \"ADD_LIST\":\n      {\n        var _action$payload4 = action.payload,\n            _listId2 = _action$payload4.listId,\n            listTitle = _action$payload4.listTitle;\n        return _objectSpread({}, state, _defineProperty({}, _listId2, {\n          _id: _listId2,\n          title: listTitle,\n          cards: []\n        }));\n      }\n\n    case \"CHANGE_LIST_TITLE\":\n      {\n        var _action$payload5 = action.payload,\n            _listId3 = _action$payload5.listId,\n            _listTitle = _action$payload5.listTitle;\n        return _objectSpread({}, state, _defineProperty({}, _listId3, _objectSpread({}, state[_listId3], {\n          title: _listTitle\n        })));\n      }\n\n    case \"DELETE_LIST\":\n      {\n        var _listId4 = action.payload.listId;\n\n        var deletedList = state[_listId4],\n            restOfLists = _objectWithoutProperties(state, [_listId4]);\n\n        return restOfLists;\n      }\n\n    default:\n      return state;\n  }\n};\n\nvar _default = listsById;\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/app/reducers/listsById.js?");

/***/ }),

/***/ "./src/app/reducers/user.js":
/*!**********************************!*\
  !*** ./src/app/reducers/user.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\n// user object is set server side and is never updated client side but this empty reducer is still needed\nvar user = function user() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n  var action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    default:\n      return state;\n  }\n};\n\nvar _default = user;\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/app/reducers/user.js?");

/***/ }),

/***/ "./src/assets/images/color-icon.png":
/*!******************************************!*\
  !*** ./src/assets/images/color-icon.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAC+ElEQVR4nHWTS28bZRiFn/ebGc94fG9c4iR1giIgbRRISkGIFYvC/6BbFoifwbYrbhISEvwCEEICgdiAFHFtuSWq1CYmaR3HHt/t8cx8LwtEFxTO8ujRszpH+J8sxR9IqmlZrITWpENHvEnk33iEk38Xtbe7Rq7vF3X5/BlySQkQQTVHfPayfnFwPftqdqMYZY8IHntvhFVtIvYy6ye7BPNQw9k0ePL3ky3vdjPUaX6De51rfH8IejB2k9brwQTzj8CqXUX0afJxDT8uoCLO1C837nmvBNmiANBivR7jhyA7hdRrAH8LLrzbFYGnipEW6qfJpVLbLZhUTCnXq5A5uVm/UXGwbk3mK0WT2wuFhiCX35/UcAGaB8avttO9Ql8rWcEJZ+38auprNn9podTBj3ON553WCzlSf1NmvQBrp8rRWGXfeeNih8dvZXvTilxRgzGZSZPKomwUt9iTSrrZ1atLP29X8l1TY5ysy9kcIBBKVxwNXVFCUerlc+0Olmmsjofl+q2RDpaT8oPYt2EvaTQ3W/n10cC/trib4BEOi5yXXIYGdl1F8wKmcZyePrdobTtedgFgbbSYvHh8uLRS+Hxt3fxULjVnC0I8MiqlmMCpaxsXzxVkDJpt2dONS6e97tx3Jlk4qT3hfbpRSvpe/eSO8X6wau+olz0rM7PC3ChW+7KZ1PU7Y8XGDnp8kX4NIIjT+U72Wa2SDBK/NA49FmOi0LqZZP6PeGaBAkhCSMrX5mZnmVf58nCNXtug1jOTnO9EgSdxXMu3I0FV+k6bhBkpIh1cwErCUXAsn7gAdRNlxsovl4g6mYxqVffPmkOaMpAZy6yIH88k0ggHz/Q416q0Ue6iTA1A4+w1HGt/dcniwHo9ozIHYOT0GXJfSqMYgIxEq3KOMk7VfhTuDPThlPPT8RjhG1Wvk8y2/0CyVJzhwD25/7H8xj5DIi1wZKv6bYq+2Uni1n++8aj6DvXmh46Xu72F6lUgAFJED8W3+w/eSrLmbvyQ/wsKQXDvmczNFQAAAABJRU5ErkJggg==\"\n\n//# sourceURL=webpack:///./src/assets/images/color-icon.png?");

/***/ }),

/***/ "./src/assets/images/google-logo.svg":
/*!*******************************************!*\
  !*** ./src/assets/images/google-logo.svg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgNDggNDgiPjxkZWZzPjxwYXRoIGlkPSJhIiBkPSJNNDQuNSAyMEgyNHY4LjVoMTEuOEMzNC43IDMzLjkgMzAuMSAzNyAyNCAzN2MtNy4yIDAtMTMtNS44LTEzLTEzczUuOC0xMyAxMy0xM2MzLjEgMCA1LjkgMS4xIDguMSAyLjlsNi40LTYuNEMzNC42IDQuMSAyOS42IDIgMjQgMiAxMS44IDIgMiAxMS44IDIgMjRzOS44IDIyIDIyIDIyYzExIDAgMjEtOCAyMS0yMiAwLTEuMy0uMi0yLjctLjUtNHoiLz48L2RlZnM+PGNsaXBQYXRoIGlkPSJiIj48dXNlIHhsaW5rOmhyZWY9IiNhIiBvdmVyZmxvdz0idmlzaWJsZSIvPjwvY2xpcFBhdGg+PHBhdGggY2xpcC1wYXRoPSJ1cmwoI2IpIiBmaWxsPSIjRkJCQzA1IiBkPSJNMCAzN1YxMWwxNyAxM3oiLz48cGF0aCBjbGlwLXBhdGg9InVybCgjYikiIGZpbGw9IiNFQTQzMzUiIGQ9Ik0wIDExbDE3IDEzIDctNi4xTDQ4IDE0VjBIMHoiLz48cGF0aCBjbGlwLXBhdGg9InVybCgjYikiIGZpbGw9IiMzNEE4NTMiIGQ9Ik0wIDM3bDMwLTIzIDcuOSAxTDQ4IDB2NDhIMHoiLz48cGF0aCBjbGlwLXBhdGg9InVybCgjYikiIGZpbGw9IiM0Mjg1RjQiIGQ9Ik00OCA0OEwxNyAyNGwtNC0zIDM1LTEweiIvPjwvc3ZnPg==\"\n\n//# sourceURL=webpack:///./src/assets/images/google-logo.svg?");

/***/ }),

/***/ "./src/assets/images/kanban-logo.svg":
/*!*******************************************!*\
  !*** ./src/assets/images/kanban-logo.svg ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMzkwLjQiIGhlaWdodD0iMzkwLjQiIHZpZXdCb3g9IjAgMCAzNjYgMzY2Ij48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImQiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2Q2MTE3NSIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2ZmMmE4ZSIvPjwvbGluZWFyR3JhZGllbnQ+PGxpbmVhckdyYWRpZW50IGlkPSJjIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNjZGJkMmQiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZmYwNWUiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iYiI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSJtYXJvb24iLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNmZjhkNjgiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iYSI+PHN0b3Agb2Zmc2V0PSIwIi8+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNTY1NjU2Ii8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgeGxpbms6aHJlZj0iI2EiIGlkPSJlIiB4MT0iOTEuNSIgeTE9IjUxMS4zNjIiIHgyPSIzMzMuNSIgeTI9IjEyMi4zNjIiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIi8+PGxpbmVhckdyYWRpZW50IHhsaW5rOmhyZWY9IiNiIiBpZD0iZiIgeDE9IjI0MyIgeTE9IjM3MC4zNjIiIHgyPSI0MjAiIHkyPSIxMjIuMzYyIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIvPjxsaW5lYXJHcmFkaWVudCB4bGluazpocmVmPSIjYyIgaWQ9ImciIHgxPSI0NDQuNTQ1IiB5MT0iNzczLjI2NCIgeDI9IjU5OC43ODciIHkyPSI3MjEuNTA5IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgZ3JhZGllbnRUcmFuc2Zvcm09Im1hdHJpeCguOTQ1OTUgMCAwIDEuMDU2MzQgLTE5Ni4yOTcgLTU2LjkzNikiLz48bGluZWFyR3JhZGllbnQgeGxpbms6aHJlZj0iI2QiIGlkPSJoIiB4MT0iNjIwIiB5MT0iNzM2Ljg2MiIgeDI9Ijc2MiIgeTI9IjY2Ni44NjIiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBncmFkaWVudFRyYW5zZm9ybT0ibWF0cml4KC45NDU5NSAwIDAgMS4wNjY5OSAtNTA4LjY0OSAtNTguMDE1KSIvPjwvZGVmcz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTU4IC01NDMuMzYyKSI+PHBhdGggZD0iTTI0IDExNi4zNjJoNDAwdjQwMEgyNHoiIGZpbGw9InVybCgjZSkiIGZpbGwtcnVsZT0iZXZlbm9kZCIgc3Ryb2tlPSIjMDAwIi8+PHBhdGggb3BhY2l0eT0iLjk5OCIgZmlsbD0iIzU2NTY1NiIgZD0iTTU0OSAzMDQuMzYyaDI1djQzaC0yNXoiLz48cGF0aCBkPSJNNjIgMTg3LjYyOGgxNDh2MjM5LjQ2OUg2MnoiIG9wYWNpdHk9Ii45OTgiIGZpbGw9IiMwMGI3YWYiLz48cGF0aCBkPSJNMjM4IDE4Ny42MjhoMTQ4djE4NS40NjlIMjM4eiIgb3BhY2l0eT0iLjk5OCIgZmlsbD0idXJsKCNmKSIvPjxwYXRoIGQ9Ik02MjcgMTk2LjM2MmE2MCA2MCAwIDAgMS02MCA2MCA2MCA2MCAwIDAgMS02MC02MCA2MCA2MCAwIDAgMSA2MC02MCA2MCA2MCAwIDAgMSA2MCA2MHptMCAxMjBhNjAgNjAgMCAwIDEtNjAgNjAgNjAgNjAgMCAwIDEtNjAtNjAgNjAgNjAgMCAwIDEgNjAtNjAgNjAgNjAgMCAwIDEgNjAgNjB6IiBvcGFjaXR5PSIuOTk4IiBmaWxsPSIjMDBiN2FmIi8+PHJlY3Qgd2lkdGg9IjIwNiIgaGVpZ2h0PSIxNDYiIHg9IjQ5NCIgeT0iNjAwLjM2MiIgcng9IjE1IiByeT0iMTUiIG9wYWNpdHk9Ii45OTgiIGZpbGw9Im5vbmUiLz48cmVjdCB3aWR0aD0iMTIxIiBoZWlnaHQ9Ijc5IiB4PSI2NDYiIHk9IjQzNS4zNjIiIHJ4PSIxNC41IiByeT0iMTIiIG9wYWNpdHk9Ii45OTgiIGZpbGw9IiMwMGI3YWYiLz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMTYgLTMpIj48cmVjdCByeT0iNTAiIHJ4PSI1MCIgeT0iNTQ2LjM2MiIgeD0iNDIiIGhlaWdodD0iMzY2IiB3aWR0aD0iMzY2IiBvcGFjaXR5PSIuOTk4IiBmaWxsPSIjNTA1MDUwIi8+PHJlY3Qgcnk9IjMxLjY5IiByeD0iMjguMzc4IiB5PSI1NzkuMzYyIiB4PSIyMzYiIGhlaWdodD0iMzAwIiB3aWR0aD0iMTQwIiBvcGFjaXR5PSIuOTk4IiBmaWxsPSJ1cmwoI2cpIi8+PHJlY3Qgcnk9IjMyLjAxIiByeD0iMzMuMzMzIiB5PSI1NzkuMzYyIiB4PSI3NSIgaGVpZ2h0PSIyMjMiIHdpZHRoPSIxNDAiIG9wYWNpdHk9Ii45OTgiIGZpbGw9InVybCgjaCkiLz48L2c+PC9nPjwvc3ZnPg==\"\n\n//# sourceURL=webpack:///./src/assets/images/kanban-logo.svg?");

/***/ }),

/***/ "./src/server/createWelcomeBoard.js":
/*!******************************************!*\
  !*** ./src/server/createWelcomeBoard.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _shortid = _interopRequireDefault(__webpack_require__(/*! shortid */ \"shortid\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n// Give every card in a list an _id and the color white UNLESS those properties already exist\nvar appendAttributes = function appendAttributes(list) {\n  return list.map(function (card) {\n    return _objectSpread({\n      color: \"white\",\n      _id: _shortid.default.generate()\n    }, card);\n  });\n}; // Generate the initial showcase board that every user and guest gets when they first log in\n\n\nvar createWelcomeBoard = function createWelcomeBoard(userId) {\n  var list1 = [{\n    text: \"### An open source application inspired by Trello\"\n  }, {\n    text: \"![Octocat](https://assets-cdn.github.com/images/modules/logos_page/Octocat.png)\\nCheck out the [source code on GitHub](https://github.com/stackriot/react-kanban)\\n\",\n    color: \"#6df\"\n  }];\n  var list2 = [{\n    text: \"### Supports GitHub flavored markdown\\nFeaturing cutting edge HTML features like\\n* Headings\\n* Bullet points\\n* **Bold** and *italic* text\\n* Links\\n* Images\\n* ```\\n() => {\\n    // Code blocks\\n}\\n```\\n\\nWatch out, Netscape navigator 2.0!\"\n  }, {\n    text: \"### Works on mobile devices\\nUnlike a certain other website...\"\n  }, {\n    text: \"### And more!\\n[x] Colors\\n[x] Deadlines\\n[x] Checkboxes\",\n    color: \"#ff6\",\n    date: new Date()\n  }];\n  var list3 = [{\n    text: \"### Edit a card\\nYou can edit the contents of a card by clicking on it. Remember to use Shift + Enter to create a newline.\"\n  }, {\n    text: \"### Drag a card or list\\nReposition cards and lists by dragging them with a mouse or touch gesture.\"\n  }, {\n    text: \"### Create a card or list\\nAdd a new card to an existing list by clicking the + button below each list. You can add a new list by clicking the \\\"Add a list\\\"-button to the right\"\n  }, {\n    text: \"### Add a checklist\\nFor a task that has many sub-tasks, you can create a checklist with markdown.\\n[x] Like this\\n[ ] Click me\"\n  }, {\n    text: \"### Change the board\\nYou can edit the title of the board by clicking it. You can also change the color of the board by clicking the button in the top right corner.\"\n  }]; // Append a warning message to the top of list3 for guest users only\n\n  if (!userId) {\n    list3.unshift({\n      text: \"### Sign in to save changes\\nSince you are not signed in, your changes will not persist after you leave the website. Go back to the login screen by pressing the 'Sign in' button in the top right corner.\"\n    });\n  }\n\n  return {\n    _id: _shortid.default.generate(),\n    title: \"Tutorial board\",\n    color: \"blue\",\n    lists: [{\n      _id: _shortid.default.generate(),\n      title: \"Welcome to React Kanban!\",\n      cards: appendAttributes(list1)\n    }, {\n      _id: _shortid.default.generate(),\n      title: \"Features\",\n      cards: appendAttributes(list2)\n    }, {\n      _id: _shortid.default.generate(),\n      title: \"How to use\",\n      cards: appendAttributes(list3)\n    }],\n    users: userId ? [userId] : []\n  };\n};\n\nvar _default = createWelcomeBoard;\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/server/createWelcomeBoard.js?");

/***/ }),

/***/ "./src/server/fetchBoardData.js":
/*!**************************************!*\
  !*** ./src/server/fetchBoardData.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _normalizr = __webpack_require__(/*! normalizr */ \"normalizr\");\n\nvar _createWelcomeBoard = _interopRequireDefault(__webpack_require__(/*! ./createWelcomeBoard */ \"./src/server/createWelcomeBoard.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n// Boards are stored in a tree structure inside mongoDB.\n// This function takes the tree shaped boards and returns a flat structure more suitable to a redux store.\nvar normalizeBoards = function normalizeBoards(boards) {\n  var card = new _normalizr.schema.Entity(\"cardsById\", {}, {\n    idAttribute: \"_id\"\n  });\n  var list = new _normalizr.schema.Entity(\"listsById\", {\n    cards: [card]\n  }, {\n    idAttribute: \"_id\"\n  });\n  var board = new _normalizr.schema.Entity(\"boardsById\", {\n    lists: [list]\n  }, {\n    idAttribute: \"_id\"\n  });\n\n  var _normalize = (0, _normalizr.normalize)(boards, [board]),\n      entities = _normalize.entities;\n\n  return entities;\n}; // Fetch board data and append to req object as intialState which will be put inside redux store on the client\n\n\nvar fetchBoardData = function fetchBoardData(db) {\n  return function (req, res, next) {\n    // Fetch a user's private boards from db if a user is logged in\n    if (req.user) {\n      var collection = db.collection(\"boards\");\n      collection.find({\n        $or: [{\n          users: req.user._id\n        }, {\n          isPublic: true\n        }]\n      }).toArray().then(function (boards) {\n        req.initialState = _objectSpread({}, normalizeBoards(boards), {\n          user: req.user\n        });\n        next();\n      }); // Just create the welcome board if no user is logged in\n    } else {\n      req.initialState = normalizeBoards([(0, _createWelcomeBoard.default)()]);\n      next();\n    }\n  };\n};\n\nvar _default = fetchBoardData;\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/server/fetchBoardData.js?");

/***/ }),

/***/ "./src/server/passport.js":
/*!********************************!*\
  !*** ./src/server/passport.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _passport = _interopRequireDefault(__webpack_require__(/*! passport */ \"passport\"));\n\nvar _passportTwitter = __webpack_require__(/*! passport-twitter */ \"passport-twitter\");\n\nvar _passportGoogleOauth = __webpack_require__(/*! passport-google-oauth20 */ \"passport-google-oauth20\");\n\nvar _createWelcomeBoard = _interopRequireDefault(__webpack_require__(/*! ./createWelcomeBoard */ \"./src/server/createWelcomeBoard.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar configurePassport = function configurePassport(db) {\n  var users = db.collection(\"users\");\n  var boards = db.collection(\"boards\");\n\n  _passport.default.serializeUser(function (user, cb) {\n    cb(null, user._id);\n  });\n\n  _passport.default.deserializeUser(function (id, cb) {\n    users.findOne({\n      _id: id\n    }).then(function (user) {\n      cb(null, user);\n    });\n  });\n\n  _passport.default.use(new _passportTwitter.Strategy({\n    consumerKey: process.env.TWITTER_API_KEY,\n    consumerSecret: process.env.TWITTER_API_SECRET,\n    callbackURL: \"\".concat(process.env.ROOT_URL, \"/auth/twitter/callback\")\n  }, function (token, tokenSecret, profile, cb) {\n    users.findOne({\n      _id: profile.id\n    }).then(function (user) {\n      if (user) {\n        cb(null, user);\n      } else {\n        var newUser = {\n          _id: profile.id,\n          name: profile.displayName,\n          imageUrl: profile._json.profile_image_url\n        };\n        users.insertOne(newUser).then(function () {\n          boards.insertOne((0, _createWelcomeBoard.default)(profile.id)).then(function () {\n            return cb(null, newUser);\n          });\n        });\n      }\n    });\n  }));\n\n  _passport.default.use(new _passportGoogleOauth.Strategy({\n    clientID: process.env.GOOGLE_CLIENT_ID,\n    clientSecret: process.env.GOOGLE_CLIENT_SECRET,\n    callbackURL: \"\".concat(process.env.ROOT_URL, \"/auth/google/callback\")\n  }, function (accessToken, refreshToken, profile, cb) {\n    users.findOne({\n      _id: profile.id\n    }).then(function (user) {\n      if (user) {\n        cb(null, user);\n      } else {\n        var newUser = {\n          _id: profile.id,\n          name: profile.displayName,\n          imageUrl: profile._json.image.url\n        };\n        users.insertOne(newUser).then(function () {\n          boards.insertOne((0, _createWelcomeBoard.default)(profile.id)).then(function () {\n            return cb(null, newUser);\n          });\n        });\n      }\n    });\n  }));\n};\n\nvar _default = configurePassport;\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/server/passport.js?");

/***/ }),

/***/ "./src/server/renderPage.jsx":
/*!***********************************!*\
  !*** ./src/server/renderPage.jsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _fs = __webpack_require__(/*! fs */ \"fs\");\n\nvar _react = _interopRequireDefault(__webpack_require__(/*! react */ \"react\"));\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _reactRouter = __webpack_require__(/*! react-router */ \"react-router\");\n\nvar _reactHelmet = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n\nvar _reactBeautifulDnd = __webpack_require__(/*! react-beautiful-dnd */ \"react-beautiful-dnd\");\n\nvar _App = _interopRequireDefault(__webpack_require__(/*! ../app/components/App */ \"./src/app/components/App.jsx\"));\n\nvar _reducers = _interopRequireDefault(__webpack_require__(/*! ../app/reducers */ \"./src/app/reducers/index.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// Get the manifest which contains the names of the generated files. The files contain hashes\n// that change every time they are updated, which enables aggressive caching.\nvar manifest = JSON.parse((0, _fs.readFileSync)(\"./dist/public/manifest.json\", \"utf8\"));\n\nvar renderPage = function renderPage(req, res) {\n  // Put initialState (which contains board state) into a redux store that will be passed to the client\n  // through the window object in the generated html string\n  var store = (0, _redux.createStore)(_reducers.default, req.initialState);\n  var context = {};\n  (0, _reactBeautifulDnd.resetContext)(); // This is where the magic happens\n\n  var appString = (0, _server.renderToString)(_react.default.createElement(_reactRedux.Provider, {\n    store: store\n  }, _react.default.createElement(_reactRouter.StaticRouter, {\n    location: req.url,\n    context: context\n  }, _react.default.createElement(_App.default, null))));\n  var preloadedState = store.getState(); // Extract head data (title) from the app\n\n  var helmet = _reactHelmet.Helmet.renderStatic();\n\n  var html = \"\\n    <!DOCTYPE html>\\n    <html>\\n      <head>\\n        <meta charset=\\\"UTF-8\\\">\\n        <meta http-equiv=\\\"X-UA-Compatible\\\" content=\\\"ie=edge\\\">\\n        <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0\\\">\\n        <meta name=\\\"description\\\" content=\\\"An open source kanban application created with React and Redux. \\\">\\n        <link rel=\\\"apple-touch-icon-precomposed\\\" sizes=\\\"144x144\\\" href=\\\"/static/favicons/apple-touch-icon-144x144.png\\\" />\\n        <link rel=\\\"apple-touch-icon-precomposed\\\" sizes=\\\"152x152\\\" href=\\\"/static/favicons/apple-touch-icon-152x152.png\\\" />\\n        <link rel=\\\"icon\\\" type=\\\"image/png\\\" href=\\\"/static/favicons/favicon-32x32.png\\\" sizes=\\\"32x32\\\" />\\n        <link rel=\\\"icon\\\" type=\\\"image/png\\\" href=\\\"/static/favicons/favicon-16x16.png\\\" sizes=\\\"16x16\\\" />\\n        <meta name=\\\"msapplication-TileColor\\\" content=\\\"#FFFFFF\\\" />\\n        <meta name=\\\"msapplication-TileImage\\\" content=\\\"/static/favicons/mstile-144x144.png\\\" />\\n        <meta property=\\\"og:image\\\" content=\\\"https://reactkanban.com/static/favicons/og-kanban-logo.png\\\">\\n        <link rel=\\\"stylesheet\\\" href=\".concat(manifest[\"main.css\"], \">\\n        \").concat(helmet.title.toString(), \"\\n      </head>\\n      <body>\\n        <div id=\\\"app\\\">\").concat(appString, \"</div>\\n      </body>\\n      <script>\\n        window.PRELOADED_STATE = \").concat(JSON.stringify(preloadedState), \"\\n      </script>\\n      <script src=\").concat(manifest[\"main.js\"], \"></script>\\n    </html>\\n  \");\n  res.send(html);\n};\n\nvar _default = renderPage;\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/server/renderPage.jsx?");

/***/ }),

/***/ "./src/server/routes/api.js":
/*!**********************************!*\
  !*** ./src/server/routes/api.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar api = function api(db) {\n  var router = (0, _express.Router)();\n  var boards = db.collection(\"boards\"); // Replace the entire board every time the users modifies it in any way.\n  // This solution sends more data than necessary, but cuts down on code and\n  // effectively prevents the db and client from ever getting out of sync\n\n  router.put(\"/board\", function (req, res) {\n    var board = req.body;\n    boards.replaceOne({\n      _id: board._id,\n      users: req.user._id\n    }, board, {\n      upsert: true\n    }).then(function (result) {\n      res.send(result);\n    });\n  });\n  router.delete(\"/board\", function (req, res) {\n    var boardId = req.body.boardId;\n    boards.deleteOne({\n      _id: boardId\n    }).then(function (result) {\n      res.send(result);\n    });\n  });\n  return router;\n};\n\nvar _default = api;\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/server/routes/api.js?");

/***/ }),

/***/ "./src/server/routes/auth.js":
/*!***********************************!*\
  !*** ./src/server/routes/auth.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = void 0;\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _passport = _interopRequireDefault(__webpack_require__(/*! passport */ \"passport\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar router = (0, _express.Router)();\nrouter.get(\"/twitter\", _passport.default.authenticate(\"twitter\"));\nrouter.get(\"/twitter/callback\", _passport.default.authenticate(\"twitter\", {\n  failureRedirect: \"/login\"\n}), function (req, res) {\n  res.redirect(\"/\");\n});\nrouter.get(\"/google\", _passport.default.authenticate(\"google\", {\n  scope: [\"profile\"]\n}));\nrouter.get(\"/google/callback\", _passport.default.authenticate(\"google\"), function (req, res) {\n  res.redirect(\"/\");\n});\nrouter.get(\"/signout\", function (req, res) {\n  req.logout();\n  res.redirect(\"/\");\n});\nvar _default = router;\nexports.default = _default;\n\n//# sourceURL=webpack:///./src/server/routes/auth.js?");

/***/ }),

/***/ "./src/server/server.js":
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _express = _interopRequireDefault(__webpack_require__(/*! express */ \"express\"));\n\nvar _mongodb = __webpack_require__(/*! mongodb */ \"mongodb\");\n\nvar _passport = _interopRequireDefault(__webpack_require__(/*! passport */ \"passport\"));\n\nvar _expressSession = _interopRequireDefault(__webpack_require__(/*! express-session */ \"express-session\"));\n\nvar _connectMongo = _interopRequireDefault(__webpack_require__(/*! connect-mongo */ \"connect-mongo\"));\n\nvar _compression = _interopRequireDefault(__webpack_require__(/*! compression */ \"compression\"));\n\nvar _helmet = _interopRequireDefault(__webpack_require__(/*! helmet */ \"helmet\"));\n\nvar _serveFavicon = _interopRequireDefault(__webpack_require__(/*! serve-favicon */ \"serve-favicon\"));\n\nvar _morgan = _interopRequireDefault(__webpack_require__(/*! morgan */ \"morgan\"));\n\nvar _dotenv = _interopRequireDefault(__webpack_require__(/*! dotenv */ \"dotenv\"));\n\nvar _renderPage = _interopRequireDefault(__webpack_require__(/*! ./renderPage */ \"./src/server/renderPage.jsx\"));\n\nvar _passport2 = _interopRequireDefault(__webpack_require__(/*! ./passport */ \"./src/server/passport.js\"));\n\nvar _api = _interopRequireDefault(__webpack_require__(/*! ./routes/api */ \"./src/server/routes/api.js\"));\n\nvar _auth = _interopRequireDefault(__webpack_require__(/*! ./routes/auth */ \"./src/server/routes/auth.js\"));\n\nvar _fetchBoardData = _interopRequireDefault(__webpack_require__(/*! ./fetchBoardData */ \"./src/server/fetchBoardData.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// import enforce from \"express-sslify\";\n// Load environment variables from .env file\n_dotenv.default.config();\n\nvar app = (0, _express.default)();\nvar MongoStore = (0, _connectMongo.default)(_expressSession.default);\n\n_mongodb.MongoClient.connect(process.env.MONGODB_URL).then(function (client) {\n  var db = client.db(process.env.MONGODB_NAME);\n  (0, _passport2.default)(db); // Uncomment next line for production to force https redirect\n  // app.use(enforce.HTTPS({ trustProtoHeader: true }));\n\n  app.use((0, _helmet.default)());\n  app.use((0, _morgan.default)(\"tiny\"));\n  app.use((0, _compression.default)());\n  app.use((0, _serveFavicon.default)(\"dist/public/favicons/favicon.ico\"));\n  app.use(_express.default.json());\n  app.use(_express.default.urlencoded({\n    extended: true\n  })); // aggressive cache static assets (1 year)\n\n  app.use(\"/static\", _express.default.static(\"dist/public\", {\n    maxAge: \"1y\"\n  })); // Persist session in mongoDB\n\n  app.use((0, _expressSession.default)({\n    store: new MongoStore({\n      db: db\n    }),\n    secret: process.env.SESSION_SECRET,\n    resave: false,\n    saveUninitialized: false\n  }));\n  app.use(_passport.default.initialize());\n  app.use(_passport.default.session());\n  app.use(\"/auth\", _auth.default);\n  app.use(\"/api\", (0, _api.default)(db));\n  app.use((0, _fetchBoardData.default)(db));\n  app.get(\"*\", _renderPage.default);\n  var port = process.env.PORT || \"1337\";\n  /* eslint-disable no-console */\n\n  app.listen(port, function () {\n    return console.log(\"Server listening on port \".concat(port));\n  });\n});\n\n//# sourceURL=webpack:///./src/server/server.js?");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"classnames\");\n\n//# sourceURL=webpack:///external_%22classnames%22?");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"compression\");\n\n//# sourceURL=webpack:///external_%22compression%22?");

/***/ }),

/***/ "connect-mongo":
/*!********************************!*\
  !*** external "connect-mongo" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"connect-mongo\");\n\n//# sourceURL=webpack:///external_%22connect-mongo%22?");

/***/ }),

/***/ "date-fns/difference_in_calendar_days":
/*!*******************************************************!*\
  !*** external "date-fns/difference_in_calendar_days" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"date-fns/difference_in_calendar_days\");\n\n//# sourceURL=webpack:///external_%22date-fns/difference_in_calendar_days%22?");

/***/ }),

/***/ "date-fns/format":
/*!**********************************!*\
  !*** external "date-fns/format" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"date-fns/format\");\n\n//# sourceURL=webpack:///external_%22date-fns/format%22?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv\");\n\n//# sourceURL=webpack:///external_%22dotenv%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-session":
/*!**********************************!*\
  !*** external "express-session" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-session\");\n\n//# sourceURL=webpack:///external_%22express-session%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"helmet\");\n\n//# sourceURL=webpack:///external_%22helmet%22?");

/***/ }),

/***/ "marked":
/*!*************************!*\
  !*** external "marked" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"marked\");\n\n//# sourceURL=webpack:///external_%22marked%22?");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongodb\");\n\n//# sourceURL=webpack:///external_%22mongodb%22?");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"morgan\");\n\n//# sourceURL=webpack:///external_%22morgan%22?");

/***/ }),

/***/ "normalizr":
/*!****************************!*\
  !*** external "normalizr" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"normalizr\");\n\n//# sourceURL=webpack:///external_%22normalizr%22?");

/***/ }),

/***/ "passport":
/*!***************************!*\
  !*** external "passport" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"passport\");\n\n//# sourceURL=webpack:///external_%22passport%22?");

/***/ }),

/***/ "passport-google-oauth20":
/*!******************************************!*\
  !*** external "passport-google-oauth20" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"passport-google-oauth20\");\n\n//# sourceURL=webpack:///external_%22passport-google-oauth20%22?");

/***/ }),

/***/ "passport-twitter":
/*!***********************************!*\
  !*** external "passport-twitter" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"passport-twitter\");\n\n//# sourceURL=webpack:///external_%22passport-twitter%22?");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");\n\n//# sourceURL=webpack:///external_%22prop-types%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-aria-menubutton":
/*!****************************************!*\
  !*** external "react-aria-menubutton" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-aria-menubutton\");\n\n//# sourceURL=webpack:///external_%22react-aria-menubutton%22?");

/***/ }),

/***/ "react-beautiful-dnd":
/*!**************************************!*\
  !*** external "react-beautiful-dnd" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-beautiful-dnd\");\n\n//# sourceURL=webpack:///external_%22react-beautiful-dnd%22?");

/***/ }),

/***/ "react-day-picker":
/*!***********************************!*\
  !*** external "react-day-picker" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-day-picker\");\n\n//# sourceURL=webpack:///external_%22react-day-picker%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-helmet\");\n\n//# sourceURL=webpack:///external_%22react-helmet%22?");

/***/ }),

/***/ "react-icons/lib/fa/check":
/*!*******************************************!*\
  !*** external "react-icons/lib/fa/check" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-icons/lib/fa/check\");\n\n//# sourceURL=webpack:///external_%22react-icons/lib/fa/check%22?");

/***/ }),

/***/ "react-icons/lib/fa/check-square-o":
/*!****************************************************!*\
  !*** external "react-icons/lib/fa/check-square-o" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-icons/lib/fa/check-square-o\");\n\n//# sourceURL=webpack:///external_%22react-icons/lib/fa/check-square-o%22?");

/***/ }),

/***/ "react-icons/lib/fa/sign-in":
/*!*********************************************!*\
  !*** external "react-icons/lib/fa/sign-in" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-icons/lib/fa/sign-in\");\n\n//# sourceURL=webpack:///external_%22react-icons/lib/fa/sign-in%22?");

/***/ }),

/***/ "react-icons/lib/fa/sign-out":
/*!**********************************************!*\
  !*** external "react-icons/lib/fa/sign-out" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-icons/lib/fa/sign-out\");\n\n//# sourceURL=webpack:///external_%22react-icons/lib/fa/sign-out%22?");

/***/ }),

/***/ "react-icons/lib/fa/trash":
/*!*******************************************!*\
  !*** external "react-icons/lib/fa/trash" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-icons/lib/fa/trash\");\n\n//# sourceURL=webpack:///external_%22react-icons/lib/fa/trash%22?");

/***/ }),

/***/ "react-icons/lib/fa/twitter":
/*!*********************************************!*\
  !*** external "react-icons/lib/fa/twitter" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-icons/lib/fa/twitter\");\n\n//# sourceURL=webpack:///external_%22react-icons/lib/fa/twitter%22?");

/***/ }),

/***/ "react-icons/lib/fa/user-secret":
/*!*************************************************!*\
  !*** external "react-icons/lib/fa/user-secret" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-icons/lib/fa/user-secret\");\n\n//# sourceURL=webpack:///external_%22react-icons/lib/fa/user-secret%22?");

/***/ }),

/***/ "react-icons/lib/md/access-alarm":
/*!**************************************************!*\
  !*** external "react-icons/lib/md/access-alarm" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-icons/lib/md/access-alarm\");\n\n//# sourceURL=webpack:///external_%22react-icons/lib/md/access-alarm%22?");

/***/ }),

/***/ "react-modal":
/*!******************************!*\
  !*** external "react-modal" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-modal\");\n\n//# sourceURL=webpack:///external_%22react-modal%22?");

/***/ }),

/***/ "react-onclickoutside":
/*!***************************************!*\
  !*** external "react-onclickoutside" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-onclickoutside\");\n\n//# sourceURL=webpack:///external_%22react-onclickoutside%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router":
/*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router\");\n\n//# sourceURL=webpack:///external_%22react-router%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "react-textarea-autosize":
/*!******************************************!*\
  !*** external "react-textarea-autosize" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-textarea-autosize\");\n\n//# sourceURL=webpack:///external_%22react-textarea-autosize%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "serve-favicon":
/*!********************************!*\
  !*** external "serve-favicon" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"serve-favicon\");\n\n//# sourceURL=webpack:///external_%22serve-favicon%22?");

/***/ }),

/***/ "shortid":
/*!**************************!*\
  !*** external "shortid" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"shortid\");\n\n//# sourceURL=webpack:///external_%22shortid%22?");

/***/ }),

/***/ "slugify":
/*!**************************!*\
  !*** external "slugify" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"slugify\");\n\n//# sourceURL=webpack:///external_%22slugify%22?");

/***/ })

/******/ });