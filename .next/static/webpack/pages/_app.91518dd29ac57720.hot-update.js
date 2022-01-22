"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./context/index.js":
/*!**************************!*\
  !*** ./context/index.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UserProvider\": function() { return /* binding */ UserProvider; },\n/* harmony export */   \"Context\": function() { return /* binding */ Context; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _firebase_FirebaseAuth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../firebase/FirebaseAuth */ \"./firebase/FirebaseAuth.js\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ \"./node_modules/react-toastify/dist/react-toastify.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {\n        };\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Context = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nvar UserProvider = function(param) {\n    var children = param.children;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null), user1 = ref[0], setUser = ref[1];\n    var initState = {\n        user: user1\n    };\n    var userReducer = function(state, action) {\n        switch(action.type){\n            case \"LOGIN\":\n                localStorage.setItem(\"user\", JSON.stringify(action.payload));\n                setUser(action.payload);\n                return _objectSpread({\n                }, state, {\n                    user: action.payload\n                });\n            case \"LOGOUT\":\n                localStorage.removeItem(\"user\");\n                setUser(null);\n                return _objectSpread({\n                }, state, {\n                    user: null\n                });\n        }\n    };\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(userReducer, initState), state1 = ref1[0], dispatch = ref1[1];\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var authHandler = function() {\n        var user = JSON.parse(localStorage.getItem(\"user\"));\n        if (user) {\n            dispatch({\n                type: \"LOGIN\",\n                payload: user\n            });\n        } else {\n            react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.warning(\"please login first!\");\n            router.push(\"/login\");\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(authHandler, []);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Context.Provider, {\n        value: {\n            state: state1,\n            dispatch: dispatch,\n            authHandler: authHandler\n        },\n        __source: {\n            fileName: \"/Users/jing/Desktop/focu3/client/context/index.js\",\n            lineNumber: 38,\n            columnNumber: 5\n        },\n        __self: _this,\n        children: children\n    }));\n};\n_s(UserProvider, \"DlFvMdNwZZ1YSwr9vs7A3KoOV+o=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = UserProvider;\n\nvar _c;\n$RefreshReg$(_c, \"UserProvider\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzRTtBQUMvQjtBQUNZO0FBQ2I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ3RDLEdBQUssQ0FBQ08sT0FBTyxpQkFBR0wsb0RBQWE7QUFDN0IsR0FBSyxDQUFDTSxZQUFZLEdBQUcsUUFBUSxRQUFVLENBQUM7UUFBaEJDLFFBQVEsU0FBUkEsUUFBUTs7SUFDOUIsR0FBRyxDQUFnQk4sR0FBYyxHQUFkQSwrQ0FBUSxDQUFDLElBQUksR0FBM0JPLEtBQUksR0FBVVAsR0FBYyxLQUF2QlEsT0FBTyxHQUFFUixHQUFjO0lBQ2pDLEdBQUssQ0FBQ1MsU0FBUyxHQUFHLENBQUM7UUFBQ0YsSUFBSSxFQUFFQSxLQUFJO0lBQUMsQ0FBQztJQUNoQyxHQUFLLENBQUNHLFdBQVcsR0FBRyxRQUFRQyxDQUFQQyxLQUFLLEVBQUVELE1BQU0sRUFBSyxDQUFDO1FBQ3RDLE1BQU0sQ0FBRUEsTUFBTSxDQUFDRSxJQUFJO1lBQ2pCLElBQUksQ0FBQyxDQUFPO2dCQUNSQyxZQUFZLENBQUNDLE9BQU8sQ0FBQyxDQUFNLE9BQUVDLElBQUksQ0FBQ0MsU0FBUyxDQUFDTixNQUFNLENBQUNPLE9BQU87Z0JBQzFEVixPQUFPLENBQUNHLE1BQU0sQ0FBQ08sT0FBTztnQkFDeEIsTUFBTTttQkFBTU4sS0FBSztvQkFBRUwsSUFBSSxFQUFFSSxNQUFNLENBQUNPLE9BQU87O1lBQ3pDLElBQUksQ0FBQyxDQUFRO2dCQUNUSixZQUFZLENBQUNLLFVBQVUsQ0FBQyxDQUFNO2dCQUM5QlgsT0FBTyxDQUFDLElBQUk7Z0JBQ2QsTUFBTTttQkFBTUksS0FBSztvQkFBRUwsSUFBSSxFQUFFLElBQUk7OztJQUVuQyxDQUFDO0lBQ0QsR0FBRyxDQUFxQlQsSUFBa0MsR0FBbENBLGlEQUFVLENBQUNZLFdBQVcsRUFBRUQsU0FBUyxHQUFwREcsTUFBSyxHQUFjZCxJQUFrQyxLQUE5Q3NCLFFBQVEsR0FBSXRCLElBQWtDO0lBQzFELEdBQUcsQ0FBQ3VCLE1BQU0sR0FBR3BCLHNEQUFTO0lBQ3RCLEdBQUcsQ0FBQ3FCLFdBQVcsR0FBQyxRQUNsQixHQUR3QixDQUFDO1FBQ3JCLEdBQUcsQ0FBQ2YsSUFBSSxHQUFDUyxJQUFJLENBQUNPLEtBQUssQ0FBQ1QsWUFBWSxDQUFDVSxPQUFPLENBQUMsQ0FBTTtRQUMvQyxFQUFFLEVBQUNqQixJQUFJLEVBQUMsQ0FBQztZQUNQYSxRQUFRLENBQUMsQ0FBQztnQkFDTlAsSUFBSSxFQUFDLENBQU87Z0JBQ1pLLE9BQU8sRUFBQ1gsSUFBSTtZQUNoQixDQUFDO1FBQ0gsQ0FBQyxNQUFJLENBQUM7WUFDSkoseURBQWEsQ0FBQyxDQUFxQjtZQUNuQ2tCLE1BQU0sQ0FBQ0ssSUFBSSxDQUFDLENBQVE7UUFDdEIsQ0FBQztJQUNILENBQUM7SUFDRDdCLGdEQUFTLENBQUN5QixXQUFXLEVBQUUsQ0FBQyxDQUFDO0lBRXpCLE1BQU0sc0VBQ0hsQixPQUFPLENBQUN1QixRQUFRO1FBQUNDLEtBQUssRUFBRSxDQUFDO1lBQUNoQixLQUFLLEVBQUxBLE1BQUs7WUFBRVEsUUFBUSxFQUFSQSxRQUFRO1lBQUVFLFdBQVcsRUFBWEEsV0FBVztRQUFBLENBQUM7Ozs7Ozs7a0JBQUdoQixRQUFROztBQUV2RSxDQUFDO0dBbENLRCxZQUFZOztRQWdCSEosa0RBQVM7OztLQWhCbEJJLFlBQVk7QUFvQ2UiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dC9pbmRleC5qcz81ZDI3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVkdWNlciwgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IGZpcmViYXNlQXV0aCBmcm9tIFwiLi4vZmlyZWJhc2UvRmlyZWJhc2VBdXRoXCI7XG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xuY29uc3QgQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcbmNvbnN0IFVzZXJQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgbGV0IFt1c2VyLHNldFVzZXJdPXVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBpbml0U3RhdGUgPSB7IHVzZXI6IHVzZXIgfTtcbiAgY29uc3QgdXNlclJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgIGNhc2UgXCJMT0dJTlwiOlxuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlclwiLCBKU09OLnN0cmluZ2lmeShhY3Rpb24ucGF5bG9hZCkpO1xuICAgICAgICAgIHNldFVzZXIoYWN0aW9uLnBheWxvYWQpO1xuICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgdXNlcjogYWN0aW9uLnBheWxvYWQgfTtcbiAgICAgIGNhc2UgXCJMT0dPVVRcIjpcbiAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInVzZXJcIik7XG4gICAgICAgICAgc2V0VXNlcihudWxsKTtcbiAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHVzZXI6IG51bGwgfTtcbiAgICB9XG4gIH07XG4gIGxldCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIodXNlclJlZHVjZXIsIGluaXRTdGF0ZSk7XG4gIGxldCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgbGV0IGF1dGhIYW5kbGVyPSgpID0+IHtcbiAgICBsZXQgdXNlcj1KU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlclwiKSk7XG4gICAgaWYodXNlcil7XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTpcIkxPR0lOXCIsXG4gICAgICAgICAgcGF5bG9hZDp1c2VyXG4gICAgICB9KVxuICAgIH1lbHNle1xuICAgICAgdG9hc3Qud2FybmluZyhcInBsZWFzZSBsb2dpbiBmaXJzdCFcIilcbiAgICAgIHJvdXRlci5wdXNoKFwiL2xvZ2luXCIpO1xuICAgIH1cbiAgfVxuICB1c2VFZmZlY3QoYXV0aEhhbmRsZXIsIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHN0YXRlLCBkaXNwYXRjaCAsYXV0aEhhbmRsZXJ9fT57Y2hpbGRyZW59PC9Db250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcblxuZXhwb3J0IHsgVXNlclByb3ZpZGVyLCBDb250ZXh0IH07XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlUmVkdWNlciIsImNyZWF0ZUNvbnRleHQiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsImZpcmViYXNlQXV0aCIsInRvYXN0IiwiQ29udGV4dCIsIlVzZXJQcm92aWRlciIsImNoaWxkcmVuIiwidXNlciIsInNldFVzZXIiLCJpbml0U3RhdGUiLCJ1c2VyUmVkdWNlciIsImFjdGlvbiIsInN0YXRlIiwidHlwZSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwicGF5bG9hZCIsInJlbW92ZUl0ZW0iLCJkaXNwYXRjaCIsInJvdXRlciIsImF1dGhIYW5kbGVyIiwicGFyc2UiLCJnZXRJdGVtIiwid2FybmluZyIsInB1c2giLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./context/index.js\n");

/***/ })

});