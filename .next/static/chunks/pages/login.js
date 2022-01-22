/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/login"],{

/***/ "./pages/login.jsx":
/*!*************************!*\
  !*** ./pages/login.jsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_jing_Desktop_focu3_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/regenerator-runtime/runtime.js */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_jing_Desktop_focu3_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_jing_Desktop_focu3_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _firebase_FirebaseAuth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../firebase/FirebaseAuth */ \"./firebase/FirebaseAuth.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context */ \"./context/index.js\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar login = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useContext)(_context__WEBPACK_IMPORTED_MODULE_5__.Context), user = ref.state.user, dispatch = ref.dispatch;\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    if (user) router.push(\"/\");\n    var loginWithGoogleHandler = _asyncToGenerator(_Users_jing_Desktop_focu3_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var result;\n        return _Users_jing_Desktop_focu3_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.prev = 0;\n                    _ctx.next = 3;\n                    return _firebase_FirebaseAuth__WEBPACK_IMPORTED_MODULE_2__[\"default\"].loginWithGoogle();\n                case 3:\n                    result = _ctx.sent;\n                    dispatch({\n                        type: \"LOGIN\",\n                        payload: result\n                    });\n                    (0,react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast)(\"login successfully\");\n                    router.push(\"/\");\n                    _ctx.next = 12;\n                    break;\n                case 9:\n                    _ctx.prev = 9;\n                    _ctx.t0 = _ctx[\"catch\"](0);\n                    console.log(_ctx.t0);\n                case 12:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee, null, [\n            [\n                0,\n                9\n            ]\n        ]);\n    }));\n    var loginWithFacebookHandler = _asyncToGenerator(_Users_jing_Desktop_focu3_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var result;\n        return _Users_jing_Desktop_focu3_client_node_modules_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.prev = 0;\n                    _ctx.next = 3;\n                    return _firebase_FirebaseAuth__WEBPACK_IMPORTED_MODULE_2__[\"default\"].loginWithFacebook();\n                case 3:\n                    result = _ctx.sent;\n                    dispatch({\n                        type: \"LOGIN\",\n                        payload: result\n                    });\n                    (0,react_toastify__WEBPACK_IMPORTED_MODULE_6__.toast)(\"login successfully\");\n                    router.push(\"/\");\n                    _ctx.next = 12;\n                    break;\n                case 9:\n                    _ctx.prev = 9;\n                    _ctx.t0 = _ctx[\"catch\"](0);\n                    console.log(_ctx.t0);\n                case 12:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee, null, [\n            [\n                0,\n                9\n            ]\n        ]);\n    }));\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n            className: \"mt-20 h-96 flex flex-col sm:flex-row justify-center mx-2\",\n            __source: {\n                fileName: \"/Users/jing/Desktop/focu3/client/pages/login.jsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            },\n            __self: _this,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"div\", {\n                    className: \" hidden w-1/3 sm:block pt-10 ml-10 bg-blue-400 dark:bg-purple sm:rounded-l-md \",\n                    __source: {\n                        fileName: \"/Users/jing/Desktop/focu3/client/pages/login.jsx\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"h1\", {\n                        className: \"font-extrabold text-gray-900 dark:text-white text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center font-inter\",\n                        __source: {\n                            fileName: \"/Users/jing/Desktop/focu3/client/pages/login.jsx\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        },\n                        __self: _this,\n                        children: \"Productivity is not how many but how important .\"\n                    })\n                }),\n                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n                    className: \"sm:mr-10 bg-green dark:bg-blue-500 w-full sm:w-1/3 sm:rounded-r-md \",\n                    __source: {\n                        fileName: \"/Users/jing/Desktop/focu3/client/pages/login.jsx\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    },\n                    __self: _this,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"h1\", {\n                            className: \"mt-5 text-center dark:text-white text-4xl font-sans font-semibold\",\n                            __source: {\n                                fileName: \"/Users/jing/Desktop/focu3/client/pages/login.jsx\",\n                                lineNumber: 49,\n                                columnNumber: 11\n                            },\n                            __self: _this,\n                            children: \"Login With\"\n                        }),\n                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"div\", {\n                            className: \"flex h-4/5 flex-col items-center justify-center\",\n                            __source: {\n                                fileName: \"/Users/jing/Desktop/focu3/client/pages/login.jsx\",\n                                lineNumber: 52,\n                                columnNumber: 11\n                            },\n                            __self: _this,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"button\", {\n                                    className: \" text-3xl w-64 h-16 m-5 rounded-sm\",\n                                    style: {\n                                        backgroundColor: \"#4267B2\"\n                                    },\n                                    onClick: loginWithFacebookHandler,\n                                    __source: {\n                                        fileName: \"/Users/jing/Desktop/focu3/client/pages/login.jsx\",\n                                        lineNumber: 53,\n                                        columnNumber: 13\n                                    },\n                                    __self: _this,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"i\", {\n                                            className: \" mx-2 bi bi-facebook\",\n                                            __source: {\n                                                fileName: \"/Users/jing/Desktop/focu3/client/pages/login.jsx\",\n                                                lineNumber: 58,\n                                                columnNumber: 15\n                                            },\n                                            __self: _this\n                                        }),\n                                        \"Facebook\"\n                                    ]\n                                }),\n                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(\"button\", {\n                                    className: \"bg-white dark:bg-black text-3xl w-64 h-16 m-5 rounded-sm \",\n                                    onClick: loginWithGoogleHandler,\n                                    __source: {\n                                        fileName: \"/Users/jing/Desktop/focu3/client/pages/login.jsx\",\n                                        lineNumber: 61,\n                                        columnNumber: 13\n                                    },\n                                    __self: _this,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(\"i\", {\n                                            className: \"bi bi-google mx-2\",\n                                            __source: {\n                                                fileName: \"/Users/jing/Desktop/focu3/client/pages/login.jsx\",\n                                                lineNumber: 65,\n                                                columnNumber: 15\n                                            },\n                                            __self: _this\n                                        }),\n                                        \"Google\"\n                                    ]\n                                })\n                            ]\n                        })\n                    ]\n                })\n            ]\n        })\n    }));\n};\n_s(login, \"IbZpxdFx94LPVCbMPyz3dZLGzLQ=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (login);\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sb2dpbi5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ047QUFDRTtBQUNYO0FBQ0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ3RDLEdBQUssQ0FBQ08sS0FBSyxHQUFHLFFBQ2QsR0FEb0IsQ0FBQzs7SUFDbkIsR0FBRyxDQUdDTCxHQUFtQixHQUFuQkEsaURBQVUsQ0FBQ0csNkNBQU8sR0FGWEcsSUFBSSxHQUVYTixHQUFtQixDQUZyQk8sS0FBSyxDQUFJRCxJQUFJLEVBQ2JFLFFBQVEsR0FDTlIsR0FBbUIsQ0FEckJRLFFBQVE7SUFFVixHQUFHLENBQUNDLE1BQU0sR0FBR1Asc0RBQVM7SUFDdEIsRUFBRSxFQUFDSSxJQUFJLEVBQUNHLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDLENBQUc7SUFDdkIsR0FBSyxDQUFDQyxzQkFBc0IsOElBQUcsUUFBUSxXQUFJLENBQUM7WUFFcENDLE1BQU07Ozs7OzsyQkFBU2QsOEVBQTRCOztvQkFBM0NjLE1BQU07b0JBRVZKLFFBQVEsQ0FBQyxDQUFDO3dCQUNSTSxJQUFJLEVBQUUsQ0FBTzt3QkFDYkMsT0FBTyxFQUFFSCxNQUFNO29CQUNqQixDQUFDO29CQUNEUixxREFBSyxDQUFDLENBQW9CO29CQUMxQkssTUFBTSxDQUFDQyxJQUFJLENBQUMsQ0FBRzs7Ozs7O29CQUVmTSxPQUFPLENBQUNDLEdBQUc7Ozs7Ozs7Ozs7O0lBRWYsQ0FBQztJQUNELEdBQUssQ0FBQ0Msd0JBQXdCLDhJQUFHLFFBQVEsV0FBSSxDQUFDO1lBRXRDTixNQUFNOzs7Ozs7MkJBQVNkLGdGQUE4Qjs7b0JBQTdDYyxNQUFNO29CQUNWSixRQUFRLENBQUMsQ0FBQzt3QkFDUk0sSUFBSSxFQUFFLENBQU87d0JBQ2JDLE9BQU8sRUFBRUgsTUFBTTtvQkFDakIsQ0FBQztvQkFDRFIscURBQUssQ0FBQyxDQUFvQjtvQkFDMUJLLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDLENBQUc7Ozs7OztvQkFFZk0sT0FBTyxDQUFDQyxHQUFHOzs7Ozs7Ozs7OztJQUVmLENBQUM7SUFDRCxNQUFNO3dGQUVERyxDQUFHO1lBQUNDLFNBQVMsRUFBQyxDQUEyRDs7Ozs7Ozs7cUZBQ3ZFRCxDQUFHO29CQUFDQyxTQUFTLEVBQUMsQ0FBbUY7Ozs7Ozs7bUdBQy9GQyxDQUFFO3dCQUFDRCxTQUFTLEVBQUMsQ0FBc0g7Ozs7Ozs7a0NBQUMsQ0FFckk7OztzRkFFREQsQ0FBRztvQkFBQ0MsU0FBUyxFQUFDLENBQXNFOzs7Ozs7Ozs2RkFDbEZDLENBQUU7NEJBQUNELFNBQVMsRUFBQyxDQUFtRTs7Ozs7OztzQ0FBQyxDQUVsRjs7OEZBQ0NELENBQUc7NEJBQUNDLFNBQVMsRUFBQyxDQUFrRDs7Ozs7Ozs7c0dBQzlERSxDQUFNO29DQUNMRixTQUFTLEVBQUMsQ0FBb0M7b0NBQzlDRyxLQUFLLEVBQUUsQ0FBQzt3Q0FBQ0MsZUFBZSxFQUFFLENBQVM7b0NBQUMsQ0FBQztvQ0FDckNDLE9BQU8sRUFBRVIsd0JBQXdCOzs7Ozs7Ozs2R0FFaENTLENBQUM7NENBQUNOLFNBQVMsRUFBQyxDQUFzQjs7Ozs7Ozs7d0NBQUcsQ0FFeEM7OztzR0FDQ0UsQ0FBTTtvQ0FDTEYsU0FBUyxFQUFDLENBQTJEO29DQUNyRUssT0FBTyxFQUFFZixzQkFBc0I7Ozs7Ozs7OzZHQUU5QmdCLENBQUM7NENBQUNOLFNBQVMsRUFBQyxDQUFtQjs7Ozs7Ozs7d0NBQUcsQ0FFckM7Ozs7Ozs7Ozs7QUFPWixDQUFDO0dBcEVLaEIsS0FBSzs7UUFLSUgsa0RBQVM7OztBQWlFeEIsK0RBQWVHLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9sb2dpbi5qc3g/OWVlZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmlyZWJhc2VBdXRoIGZyb20gXCIuLi9maXJlYmFzZS9GaXJlYmFzZUF1dGhcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUm91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IENvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dFwiO1xuaW1wb3J0IHsgdG9hc3QgfSBmcm9tIFwicmVhY3QtdG9hc3RpZnlcIjtcbmNvbnN0IGxvZ2luID0gKCkgPT4ge1xuICBsZXQge1xuICAgIHN0YXRlOiB7IHVzZXIgfSxcbiAgICBkaXNwYXRjaCxcbiAgfSA9IHVzZUNvbnRleHQoQ29udGV4dCk7XG4gIGxldCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgaWYodXNlcilyb3V0ZXIucHVzaChcIi9cIik7XG4gIGNvbnN0IGxvZ2luV2l0aEdvb2dsZUhhbmRsZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGxldCByZXN1bHQgPSBhd2FpdCBmaXJlYmFzZUF1dGgubG9naW5XaXRoR29vZ2xlKCk7XG4gICAgICBcbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogXCJMT0dJTlwiLFxuICAgICAgICBwYXlsb2FkOiByZXN1bHRcbiAgICAgIH0pO1xuICAgICAgdG9hc3QoXCJsb2dpbiBzdWNjZXNzZnVsbHlcIilcbiAgICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgfVxuICB9O1xuICBjb25zdCBsb2dpbldpdGhGYWNlYm9va0hhbmRsZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGxldCByZXN1bHQgPSBhd2FpdCBmaXJlYmFzZUF1dGgubG9naW5XaXRoRmFjZWJvb2soKTtcbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogXCJMT0dJTlwiLFxuICAgICAgICBwYXlsb2FkOiByZXN1bHRcbiAgICAgIH0pO1xuICAgICAgdG9hc3QoXCJsb2dpbiBzdWNjZXNzZnVsbHlcIilcbiAgICAgIHJvdXRlci5wdXNoKFwiL1wiKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgfVxuICB9O1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTIwICBoLTk2IGZsZXggZmxleC1jb2wgc206ZmxleC1yb3cganVzdGlmeS1jZW50ZXIgbXgtMlwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBoaWRkZW4gdy0xLzMgc206YmxvY2sgIHB0LTEwIG1sLTEwIGJnLWJsdWUtNDAwIGRhcms6YmctcHVycGxlICAgc206cm91bmRlZC1sLW1kIFwiPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJmb250LWV4dHJhYm9sZCB0ZXh0LWdyYXktOTAwIGRhcms6dGV4dC13aGl0ZSAgdGV4dC00eGwgc206dGV4dC01eGwgbGc6dGV4dC02eGwgdHJhY2tpbmctdGlnaHQgdGV4dC1jZW50ZXIgZm9udC1pbnRlclwiPlxuICAgICAgICAgICAgUHJvZHVjdGl2aXR5IGlzIG5vdCBob3cgbWFueSBidXQgaG93IGltcG9ydGFudCAuXG4gICAgICAgICAgPC9oMT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic206bXItMTAgYmctZ3JlZW4gZGFyazpiZy1ibHVlLTUwMCB3LWZ1bGwgc206dy0xLzMgIHNtOnJvdW5kZWQtci1tZCBcIj5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwibXQtNSB0ZXh0LWNlbnRlciBkYXJrOnRleHQtd2hpdGUgdGV4dC00eGwgZm9udC1zYW5zIGZvbnQtc2VtaWJvbGRcIj5cbiAgICAgICAgICAgIExvZ2luIFdpdGhcbiAgICAgICAgICA8L2gxPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCAgaC00LzUgZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiB0ZXh0LTN4bCB3LTY0IGgtMTYgbS01IHJvdW5kZWQtc21cIlxuICAgICAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IFwiIzQyNjdCMlwiIH19XG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2xvZ2luV2l0aEZhY2Vib29rSGFuZGxlcn1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiIG14LTIgYmkgYmktZmFjZWJvb2tcIiAvPlxuICAgICAgICAgICAgICBGYWNlYm9va1xuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXdoaXRlIGRhcms6YmctYmxhY2sgdGV4dC0zeGwgdy02NCBoLTE2IG0tNSByb3VuZGVkLXNtIFwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2xvZ2luV2l0aEdvb2dsZUhhbmRsZXJ9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImJpIGJpLWdvb2dsZSBteC0yXCIgLz5cbiAgICAgICAgICAgICAgR29vZ2xlXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIFxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbG9naW47XG4iXSwibmFtZXMiOlsiZmlyZWJhc2VBdXRoIiwidXNlRWZmZWN0IiwidXNlQ29udGV4dCIsIlJvdXRlciIsInVzZVJvdXRlciIsIkNvbnRleHQiLCJ0b2FzdCIsImxvZ2luIiwidXNlciIsInN0YXRlIiwiZGlzcGF0Y2giLCJyb3V0ZXIiLCJwdXNoIiwibG9naW5XaXRoR29vZ2xlSGFuZGxlciIsInJlc3VsdCIsImxvZ2luV2l0aEdvb2dsZSIsInR5cGUiLCJwYXlsb2FkIiwiY29uc29sZSIsImxvZyIsImxvZ2luV2l0aEZhY2Vib29rSGFuZGxlciIsImxvZ2luV2l0aEZhY2Vib29rIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJidXR0b24iLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsIm9uQ2xpY2siLCJpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/login.jsx\n");

/***/ }),

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Flogin&absolutePagePath=%2FUsers%2Fjing%2FDesktop%2Ffocu3%2Fclient%2Fpages%2Flogin.jsx!":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Flogin&absolutePagePath=%2FUsers%2Fjing%2FDesktop%2Ffocu3%2Fclient%2Fpages%2Flogin.jsx! ***!
  \*********************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("\n    (window.__NEXT_P = window.__NEXT_P || []).push([\n      \"/login\",\n      function () {\n        return __webpack_require__(/*! ./pages/login.jsx */ \"./pages/login.jsx\");\n      }\n    ]);\n    if(true) {\n      module.hot.dispose(function () {\n        window.__NEXT_P.push([\"/login\"])\n      });\n    }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanM/cGFnZT0lMkZsb2dpbiZhYnNvbHV0ZVBhZ2VQYXRoPSUyRlVzZXJzJTJGamluZyUyRkRlc2t0b3AlMkZmb2N1MyUyRmNsaWVudCUyRnBhZ2VzJTJGbG9naW4uanN4IS5qcyIsIm1hcHBpbmdzIjoiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQkFBTyxDQUFDLDRDQUFtQjtBQUMxQztBQUNBO0FBQ0EsT0FBTyxJQUFVO0FBQ2pCLE1BQU0sVUFBVTtBQUNoQjtBQUNBLE9BQU87QUFDUDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8/ZWFjOCJdLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICAod2luZG93Ll9fTkVYVF9QID0gd2luZG93Ll9fTkVYVF9QIHx8IFtdKS5wdXNoKFtcbiAgICAgIFwiL2xvZ2luXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiByZXF1aXJlKFwiLi9wYWdlcy9sb2dpbi5qc3hcIik7XG4gICAgICB9XG4gICAgXSk7XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgd2luZG93Ll9fTkVYVF9QLnB1c2goW1wiL2xvZ2luXCJdKVxuICAgICAgfSk7XG4gICAgfVxuICAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Flogin&absolutePagePath=%2FUsers%2Fjing%2FDesktop%2Ffocu3%2Fclient%2Fpages%2Flogin.jsx!\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["pages/_app","main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Flogin&absolutePagePath=%2FUsers%2Fjing%2FDesktop%2Ffocu3%2Fclient%2Fpages%2Flogin.jsx!"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);