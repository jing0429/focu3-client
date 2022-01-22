"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./context/index.js":
/*!**************************!*\
  !*** ./context/index.js ***!
  \**************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"UserProvider\": () => (/* binding */ UserProvider),\n/* harmony export */   \"Context\": () => (/* binding */ Context)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _firebase_FirebaseAuth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../firebase/FirebaseAuth */ \"./firebase/FirebaseAuth.js\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-toastify */ \"react-toastify\");\n/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_4__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebase_FirebaseAuth__WEBPACK_IMPORTED_MODULE_3__]);\n_firebase_FirebaseAuth__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];\n\n\n\n\n\nconst Context = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst UserProvider = ({ children  })=>{\n    let { 0: user1 , 1: setUser  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const initState = {\n        user: user1\n    };\n    const userReducer = (state, action)=>{\n        switch(action.type){\n            case \"LOGIN\":\n                localStorage.setItem(\"user\", JSON.stringify(action.payload));\n                setUser(action.payload);\n                return {\n                    ...state,\n                    user: action.payload\n                };\n            case \"LOGOUT\":\n                localStorage.removeItem(\"user\");\n                setUser(null);\n                return {\n                    ...state,\n                    user: null\n                };\n        }\n    };\n    let { 0: state1 , 1: dispatch  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(userReducer, initState);\n    let router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    let authHandler = ()=>{\n        let user = JSON.parse(localStorage.getItem(\"user\"));\n        if (user) {\n            dispatch({\n                type: \"LOGIN\",\n                payload: user\n            });\n        } else {\n            react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.warning(\"please login first!\");\n            router.push(\"/login\");\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(authHandler, []);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Context.Provider, {\n        value: {\n            state: state1,\n            dispatch,\n            authHandler\n        },\n        __source: {\n            fileName: \"/Users/jing/Desktop/focu3/client/context/index.js\",\n            lineNumber: 38,\n            columnNumber: 5\n        },\n        __self: undefined,\n        children: children\n    }));\n};\n\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzRTtBQUMvQjtBQUNZO0FBQ2I7QUFDdEMsS0FBSyxDQUFDTyxPQUFPLGlCQUFHTCxvREFBYTtBQUM3QixLQUFLLENBQUNNLFlBQVksSUFBSSxDQUFDLENBQUNDLFFBQVEsRUFBQyxDQUFDLEdBQUssQ0FBQztJQUN0QyxHQUFHLE1BQUVDLEtBQUksTUFBQ0MsT0FBTyxNQUFFUiwrQ0FBUSxDQUFDLElBQUk7SUFDaEMsS0FBSyxDQUFDUyxTQUFTLEdBQUcsQ0FBQztRQUFDRixJQUFJLEVBQUVBLEtBQUk7SUFBQyxDQUFDO0lBQ2hDLEtBQUssQ0FBQ0csV0FBVyxJQUFJQyxLQUFLLEVBQUVDLE1BQU0sR0FBSyxDQUFDO1FBQ3RDLE1BQU0sQ0FBRUEsTUFBTSxDQUFDQyxJQUFJO1lBQ2pCLElBQUksQ0FBQyxDQUFPO2dCQUNSQyxZQUFZLENBQUNDLE9BQU8sQ0FBQyxDQUFNLE9BQUVDLElBQUksQ0FBQ0MsU0FBUyxDQUFDTCxNQUFNLENBQUNNLE9BQU87Z0JBQzFEVixPQUFPLENBQUNJLE1BQU0sQ0FBQ00sT0FBTztnQkFDeEIsTUFBTSxDQUFDLENBQUM7dUJBQUlQLEtBQUs7b0JBQUVKLElBQUksRUFBRUssTUFBTSxDQUFDTSxPQUFPO2dCQUFDLENBQUM7WUFDM0MsSUFBSSxDQUFDLENBQVE7Z0JBQ1RKLFlBQVksQ0FBQ0ssVUFBVSxDQUFDLENBQU07Z0JBQzlCWCxPQUFPLENBQUMsSUFBSTtnQkFDZCxNQUFNLENBQUMsQ0FBQzt1QkFBSUcsS0FBSztvQkFBRUosSUFBSSxFQUFFLElBQUk7Z0JBQUMsQ0FBQzs7SUFFckMsQ0FBQztJQUNELEdBQUcsTUFBRUksTUFBSyxNQUFFUyxRQUFRLE1BQUl0QixpREFBVSxDQUFDWSxXQUFXLEVBQUVELFNBQVM7SUFDekQsR0FBRyxDQUFDWSxNQUFNLEdBQUdwQixzREFBUztJQUN0QixHQUFHLENBQUNxQixXQUFXLE9BQU8sQ0FBQztRQUNyQixHQUFHLENBQUNmLElBQUksR0FBQ1MsSUFBSSxDQUFDTyxLQUFLLENBQUNULFlBQVksQ0FBQ1UsT0FBTyxDQUFDLENBQU07UUFDL0MsRUFBRSxFQUFDakIsSUFBSSxFQUFDLENBQUM7WUFDUGEsUUFBUSxDQUFDLENBQUM7Z0JBQ05QLElBQUksRUFBQyxDQUFPO2dCQUNaSyxPQUFPLEVBQUNYLElBQUk7WUFDaEIsQ0FBQztRQUNILENBQUMsTUFBSSxDQUFDO1lBQ0pKLHlEQUFhLENBQUMsQ0FBcUI7WUFDbkNrQixNQUFNLENBQUNLLElBQUksQ0FBQyxDQUFRO1FBQ3RCLENBQUM7SUFDSCxDQUFDO0lBQ0Q3QixnREFBUyxDQUFDeUIsV0FBVyxFQUFFLENBQUMsQ0FBQztJQUV6QixNQUFNLHNFQUNIbEIsT0FBTyxDQUFDdUIsUUFBUTtRQUFDQyxLQUFLLEVBQUUsQ0FBQztZQUFDakIsS0FBSyxFQUFMQSxNQUFLO1lBQUVTLFFBQVE7WUFBRUUsV0FBVztRQUFBLENBQUM7Ozs7Ozs7a0JBQUdoQixRQUFROztBQUV2RSxDQUFDO0FBRWdDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29udGV4dC9pbmRleC5qcz81ZDI3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVkdWNlciwgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IGZpcmViYXNlQXV0aCBmcm9tIFwiLi4vZmlyZWJhc2UvRmlyZWJhc2VBdXRoXCI7XG5pbXBvcnQgeyB0b2FzdCB9IGZyb20gXCJyZWFjdC10b2FzdGlmeVwiO1xuY29uc3QgQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcbmNvbnN0IFVzZXJQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgbGV0IFt1c2VyLHNldFVzZXJdPXVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBpbml0U3RhdGUgPSB7IHVzZXI6IHVzZXIgfTtcbiAgY29uc3QgdXNlclJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgIGNhc2UgXCJMT0dJTlwiOlxuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlclwiLCBKU09OLnN0cmluZ2lmeShhY3Rpb24ucGF5bG9hZCkpO1xuICAgICAgICAgIHNldFVzZXIoYWN0aW9uLnBheWxvYWQpO1xuICAgICAgICByZXR1cm4geyAuLi5zdGF0ZSwgdXNlcjogYWN0aW9uLnBheWxvYWQgfTtcbiAgICAgIGNhc2UgXCJMT0dPVVRcIjpcbiAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInVzZXJcIik7XG4gICAgICAgICAgc2V0VXNlcihudWxsKTtcbiAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIHVzZXI6IG51bGwgfTtcbiAgICB9XG4gIH07XG4gIGxldCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIodXNlclJlZHVjZXIsIGluaXRTdGF0ZSk7XG4gIGxldCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgbGV0IGF1dGhIYW5kbGVyPSgpID0+IHtcbiAgICBsZXQgdXNlcj1KU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlclwiKSk7XG4gICAgaWYodXNlcil7XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTpcIkxPR0lOXCIsXG4gICAgICAgICAgcGF5bG9hZDp1c2VyXG4gICAgICB9KVxuICAgIH1lbHNle1xuICAgICAgdG9hc3Qud2FybmluZyhcInBsZWFzZSBsb2dpbiBmaXJzdCFcIilcbiAgICAgIHJvdXRlci5wdXNoKFwiL2xvZ2luXCIpO1xuICAgIH1cbiAgfVxuICB1c2VFZmZlY3QoYXV0aEhhbmRsZXIsIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IHN0YXRlLCBkaXNwYXRjaCAsYXV0aEhhbmRsZXJ9fT57Y2hpbGRyZW59PC9Db250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcblxuZXhwb3J0IHsgVXNlclByb3ZpZGVyLCBDb250ZXh0IH07XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlUmVkdWNlciIsImNyZWF0ZUNvbnRleHQiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsImZpcmViYXNlQXV0aCIsInRvYXN0IiwiQ29udGV4dCIsIlVzZXJQcm92aWRlciIsImNoaWxkcmVuIiwidXNlciIsInNldFVzZXIiLCJpbml0U3RhdGUiLCJ1c2VyUmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwicGF5bG9hZCIsInJlbW92ZUl0ZW0iLCJkaXNwYXRjaCIsInJvdXRlciIsImF1dGhIYW5kbGVyIiwicGFyc2UiLCJnZXRJdGVtIiwid2FybmluZyIsInB1c2giLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./context/index.js\n");

/***/ }),

/***/ "./firebase/FirebaseAuth.js":
/*!**********************************!*\
  !*** ./firebase/FirebaseAuth.js ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _FirebaseService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FirebaseService */ \"./firebase/FirebaseService.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_FirebaseService__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__]);\n([_FirebaseService__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);\n\n\nconst auth = _FirebaseService__WEBPACK_IMPORTED_MODULE_0__[\"default\"].auth;\nconst loginWithGoogle = async ()=>{\n    const provider = new firebase_auth__WEBPACK_IMPORTED_MODULE_1__.GoogleAuthProvider();\n    return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.signInWithPopup)(auth, provider).then((result)=>{\n        let user = result.user;\n        let name = user.displayName;\n        let uid = user.uid;\n        let photoURL = user.photoURL;\n        //TODO :: send data to backend\n        return result;\n    });\n};\nconst loginWithFacebook = async ()=>{\n    const provider = new firebase_auth__WEBPACK_IMPORTED_MODULE_1__.FacebookAuthProvider();\n    (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.signInWithPopup)(auth, provider).then((result)=>{\n        const credential = firebase_auth__WEBPACK_IMPORTED_MODULE_1__.FacebookAuthProvider.credentialFromResult(result);\n        const accessToken = credential.accessToken;\n        let user = result.user;\n        let photoURL = user.photoURL + `?height=200&access_token=${accessToken}`;\n        let name = user.displayName;\n        let uid = user.uid;\n        //TODO :: send data to backend\n        return result;\n    });\n};\nconst subscribeToAuthChanges = (handlerAuthChange)=>{\n    (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.onAuthStateChanged)(auth, (user)=>{\n        handlerAuthChange(user);\n    });\n};\nconst logout = async ()=>{\n    return await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.signOut)(auth);\n};\nconst getUser = ()=>{\n    return _FirebaseService__WEBPACK_IMPORTED_MODULE_0__[\"default\"].auth.currentUser;\n};\nconst firebaseAuth = {\n    loginWithGoogle,\n    loginWithFacebook,\n    subscribeToAuthChanges,\n    logout,\n    getUser\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (firebaseAuth);\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9maXJlYmFzZS9GaXJlYmFzZUF1dGguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXdDO0FBQ3dGO0FBRWhJLEtBQUssQ0FBQ08sSUFBSSxHQUFDUCw2REFBYTtBQUV4QixLQUFLLENBQUNRLGVBQWUsYUFBVSxDQUFDO0lBQzVCLEtBQUssQ0FBQ0MsUUFBUSxHQUFDLEdBQUcsQ0FBQ04sNkRBQWtCO0lBQ3JDLE1BQU0sQ0FBQ0QsOERBQWUsQ0FBQ0ssSUFBSSxFQUFDRSxRQUFRLEVBQUVDLElBQUksRUFBQ0MsTUFBTSxHQUFFLENBQUM7UUFDaEQsR0FBRyxDQUFDQyxJQUFJLEdBQUNELE1BQU0sQ0FBQ0MsSUFBSTtRQUNwQixHQUFHLENBQUNDLElBQUksR0FBQ0QsSUFBSSxDQUFDRSxXQUFXO1FBQ3pCLEdBQUcsQ0FBQ0MsR0FBRyxHQUFDSCxJQUFJLENBQUNHLEdBQUc7UUFDaEIsR0FBRyxDQUFDQyxRQUFRLEdBQUNKLElBQUksQ0FBQ0ksUUFBUTtRQUMxQixFQUE4QjtRQUM5QixNQUFNLENBQUNMLE1BQU07SUFDakIsQ0FBQztBQUNMLENBQUM7QUFDRCxLQUFLLENBQUNNLGlCQUFpQixhQUFVLENBQUM7SUFDOUIsS0FBSyxDQUFDUixRQUFRLEdBQUMsR0FBRyxDQUFDTCwrREFBb0I7SUFDdkNGLDhEQUFlLENBQUNLLElBQUksRUFBQ0UsUUFBUSxFQUFFQyxJQUFJLEVBQUNDLE1BQU0sR0FBRSxDQUFDO1FBQ3pDLEtBQUssQ0FBQ08sVUFBVSxHQUFDZCxvRkFBeUMsQ0FBQ08sTUFBTTtRQUNqRSxLQUFLLENBQUNTLFdBQVcsR0FBQ0YsVUFBVSxDQUFDRSxXQUFXO1FBQ3hDLEdBQUcsQ0FBQ1IsSUFBSSxHQUFDRCxNQUFNLENBQUNDLElBQUk7UUFDcEIsR0FBRyxDQUFDSSxRQUFRLEdBQUNKLElBQUksQ0FBQ0ksUUFBUSxJQUFFLHlCQUF5QixFQUFFSSxXQUFXO1FBQ2xFLEdBQUcsQ0FBQ1AsSUFBSSxHQUFDRCxJQUFJLENBQUNFLFdBQVc7UUFDekIsR0FBRyxDQUFDQyxHQUFHLEdBQUNILElBQUksQ0FBQ0csR0FBRztRQUNoQixFQUE4QjtRQUM5QixNQUFNLENBQUNKLE1BQU07SUFDakIsQ0FBQztBQUNMLENBQUM7QUFDRCxLQUFLLENBQUNVLHNCQUFzQixJQUFFQyxpQkFBaUIsR0FBRyxDQUFDO0lBQy9DckIsaUVBQWtCLENBQUNNLElBQUksR0FBQ0ssSUFBSSxHQUFFLENBQUM7UUFDM0JVLGlCQUFpQixDQUFDVixJQUFJO0lBQzFCLENBQUM7QUFDTCxDQUFDO0FBQ0QsS0FBSyxDQUFDVyxNQUFNLGFBQVUsQ0FBQztJQUNuQixNQUFNLENBQUMsS0FBSyxDQUFDbEIsc0RBQU8sQ0FBQ0UsSUFBSTtBQUM3QixDQUFDO0FBQ0QsS0FBSyxDQUFDaUIsT0FBTyxPQUFLLENBQUM7SUFDZixNQUFNLENBQUN4Qix5RUFBeUI7QUFDcEMsQ0FBQztBQUNELEtBQUssQ0FBQ3lCLFlBQVksR0FBQyxDQUFDO0lBQ2hCakIsZUFBZTtJQUNmUyxpQkFBaUI7SUFDakJJLHNCQUFzQjtJQUN0QkUsTUFBTTtJQUNOQyxPQUFPO0FBQ1gsQ0FBQztBQUNELGlFQUFlQyxZQUFZLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9maXJlYmFzZS9GaXJlYmFzZUF1dGguanM/NzFkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmlyZWJhc2UgZnJvbSBcIi4vRmlyZWJhc2VTZXJ2aWNlXCI7XG5pbXBvcnQgeyBvbkF1dGhTdGF0ZUNoYW5nZWQgLCBzaWduSW5XaXRoUG9wdXAsR29vZ2xlQXV0aFByb3ZpZGVyICxGYWNlYm9va0F1dGhQcm92aWRlcixzaWduT3V0LGN1cnJlbnRVc2VyfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xuXG5jb25zdCBhdXRoPWZpcmViYXNlLmF1dGg7XG5cbmNvbnN0IGxvZ2luV2l0aEdvb2dsZT1hc3luYygpPT57XG4gICAgY29uc3QgcHJvdmlkZXI9bmV3IEdvb2dsZUF1dGhQcm92aWRlcigpO1xuICAgIHJldHVybiBzaWduSW5XaXRoUG9wdXAoYXV0aCxwcm92aWRlcikudGhlbihyZXN1bHQ9PntcbiAgICAgICAgbGV0IHVzZXI9cmVzdWx0LnVzZXI7XG4gICAgICAgIGxldCBuYW1lPXVzZXIuZGlzcGxheU5hbWU7XG4gICAgICAgIGxldCB1aWQ9dXNlci51aWQ7XG4gICAgICAgIGxldCBwaG90b1VSTD11c2VyLnBob3RvVVJMO1xuICAgICAgICAvL1RPRE8gOjogc2VuZCBkYXRhIHRvIGJhY2tlbmRcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9KVxufVxuY29uc3QgbG9naW5XaXRoRmFjZWJvb2s9YXN5bmMoKT0+e1xuICAgIGNvbnN0IHByb3ZpZGVyPW5ldyBGYWNlYm9va0F1dGhQcm92aWRlcigpO1xuICAgIHNpZ25JbldpdGhQb3B1cChhdXRoLHByb3ZpZGVyKS50aGVuKHJlc3VsdD0+e1xuICAgICAgICBjb25zdCBjcmVkZW50aWFsPUZhY2Vib29rQXV0aFByb3ZpZGVyLmNyZWRlbnRpYWxGcm9tUmVzdWx0KHJlc3VsdCk7XG4gICAgICAgIGNvbnN0IGFjY2Vzc1Rva2VuPWNyZWRlbnRpYWwuYWNjZXNzVG9rZW47XG4gICAgICAgIGxldCB1c2VyPXJlc3VsdC51c2VyO1xuICAgICAgICBsZXQgcGhvdG9VUkw9dXNlci5waG90b1VSTCtgP2hlaWdodD0yMDAmYWNjZXNzX3Rva2VuPSR7YWNjZXNzVG9rZW59YDtcbiAgICAgICAgbGV0IG5hbWU9dXNlci5kaXNwbGF5TmFtZTtcbiAgICAgICAgbGV0IHVpZD11c2VyLnVpZDtcbiAgICAgICAgLy9UT0RPIDo6IHNlbmQgZGF0YSB0byBiYWNrZW5kXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSk7XG59XG5jb25zdCBzdWJzY3JpYmVUb0F1dGhDaGFuZ2VzPShoYW5kbGVyQXV0aENoYW5nZSk9PntcbiAgICBvbkF1dGhTdGF0ZUNoYW5nZWQoYXV0aCx1c2VyPT57XG4gICAgICAgIGhhbmRsZXJBdXRoQ2hhbmdlKHVzZXIpO1xuICAgIH0pXG59XG5jb25zdCBsb2dvdXQ9YXN5bmMoKT0+e1xuICAgIHJldHVybiBhd2FpdCBzaWduT3V0KGF1dGgpO1xufVxuY29uc3QgZ2V0VXNlcj0oKT0+e1xuICAgIHJldHVybiBmaXJlYmFzZS5hdXRoLmN1cnJlbnRVc2VyO1xufVxuY29uc3QgZmlyZWJhc2VBdXRoPXtcbiAgICBsb2dpbldpdGhHb29nbGUsXG4gICAgbG9naW5XaXRoRmFjZWJvb2ssXG4gICAgc3Vic2NyaWJlVG9BdXRoQ2hhbmdlcyxcbiAgICBsb2dvdXQsXG4gICAgZ2V0VXNlclxufVxuZXhwb3J0IGRlZmF1bHQgZmlyZWJhc2VBdXRoOyJdLCJuYW1lcyI6WyJmaXJlYmFzZSIsIm9uQXV0aFN0YXRlQ2hhbmdlZCIsInNpZ25JbldpdGhQb3B1cCIsIkdvb2dsZUF1dGhQcm92aWRlciIsIkZhY2Vib29rQXV0aFByb3ZpZGVyIiwic2lnbk91dCIsImN1cnJlbnRVc2VyIiwiYXV0aCIsImxvZ2luV2l0aEdvb2dsZSIsInByb3ZpZGVyIiwidGhlbiIsInJlc3VsdCIsInVzZXIiLCJuYW1lIiwiZGlzcGxheU5hbWUiLCJ1aWQiLCJwaG90b1VSTCIsImxvZ2luV2l0aEZhY2Vib29rIiwiY3JlZGVudGlhbCIsImNyZWRlbnRpYWxGcm9tUmVzdWx0IiwiYWNjZXNzVG9rZW4iLCJzdWJzY3JpYmVUb0F1dGhDaGFuZ2VzIiwiaGFuZGxlckF1dGhDaGFuZ2UiLCJsb2dvdXQiLCJnZXRVc2VyIiwiZmlyZWJhc2VBdXRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./firebase/FirebaseAuth.js\n");

/***/ }),

/***/ "./firebase/FirebaseService.js":
/*!*************************************!*\
  !*** ./firebase/FirebaseService.js ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_compat_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/compat/auth */ \"firebase/compat/auth\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_auth__WEBPACK_IMPORTED_MODULE_2__, firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_compat_auth__WEBPACK_IMPORTED_MODULE_1__]);\n([firebase_auth__WEBPACK_IMPORTED_MODULE_2__, firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_compat_auth__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);\n\n\n\nconst config = {\n    apiKey: \"AIzaSyAXPcjoe_lLE9kQVhgiKzvqV2SOrFak8Sg\",\n    authDomain: \"lunar-bonus-323906.firebaseapp.com\",\n    projectId: \"lunar-bonus-323906\",\n    storageBucket: \"lunar-bonus-323906.appspot.com\",\n    messagingSenderId: \"690738236446\",\n    appId: \"1:690738236446:web:44b0a2e10f4664dceb320f\",\n    measurementId: \"G-WN2S3WB743\"\n};\nconst firebaseApp = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(config);\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth)(firebaseApp);\nconst firebaseService = {\n    auth\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (firebaseService);\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9maXJlYmFzZS9GaXJlYmFzZVNlcnZpY2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUEwQztBQUNiO0FBQ1E7QUFFckMsS0FBSyxDQUFDRSxNQUFNLEdBQUMsQ0FBQztJQUNaQyxNQUFNLEVBQUNDLHlDQUF3QztJQUMvQ0csVUFBVSxFQUFDSCxvQ0FBNEM7SUFDdkRLLFNBQVMsRUFBQ0wsb0JBQWtDO0lBQzVDTyxhQUFhLEVBQUNQLGdDQUErQztJQUM3RFMsaUJBQWlCLEVBQUNULGNBQTJDO0lBQzdEVyxLQUFLLEVBQUNYLDJDQUE4QjtJQUNwQ2EsYUFBYSxFQUFDYixjQUFzQztBQUN0RCxDQUFDO0FBRUQsS0FBSyxDQUFDZSxXQUFXLEdBQUNuQiwyREFBYSxDQUFDRSxNQUFNO0FBRXRDLEtBQUssQ0FBQ2tCLElBQUksR0FBQ25CLHNEQUFPLENBQUNrQixXQUFXO0FBRTlCLEtBQUssQ0FBQ0UsZUFBZSxHQUFDLENBQUM7SUFDbkJELElBQUk7QUFDUixDQUFDO0FBR0QsaUVBQWVDLGVBQWUsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2ZpcmViYXNlL0ZpcmViYXNlU2VydmljZS5qcz9hMzY4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7aW5pdGlhbGl6ZUFwcH0gZnJvbSBcImZpcmViYXNlL2FwcFwiO1xuaW1wb3J0IFwiZmlyZWJhc2UvY29tcGF0L2F1dGhcIlxuaW1wb3J0IHtnZXRBdXRofSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xuXG5jb25zdCBjb25maWc9e1xuICBhcGlLZXk6cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRklSRUJBU0VfQVBJX0tFWSxcbiAgYXV0aERvbWFpbjpwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19GSVJFQkFTRV9BVVRIX0RPTUFJTixcbiAgcHJvamVjdElkOnByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX1BST0pFQ1RfSUQsXG4gIHN0b3JhZ2VCdWNrZXQ6cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfRklSRUJBU0VfU1RPUkFHRV9CVUNLRVQsXG4gIG1lc3NhZ2luZ1NlbmRlcklkOnByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX01FU1NBR0lOR19TRU5ERVJfSUQsXG4gIGFwcElkOnByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQUF9JRCxcbiAgbWVhc3VyZW1lbnRJZDpwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19NRUFTVVJFTUVOVF9JRFxufVxuXG5jb25zdCBmaXJlYmFzZUFwcD1pbml0aWFsaXplQXBwKGNvbmZpZyk7XG5cbmNvbnN0IGF1dGg9Z2V0QXV0aChmaXJlYmFzZUFwcCk7XG5cbmNvbnN0IGZpcmViYXNlU2VydmljZT17XG4gICAgYXV0aFxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGZpcmViYXNlU2VydmljZTsiXSwibmFtZXMiOlsiaW5pdGlhbGl6ZUFwcCIsImdldEF1dGgiLCJjb25maWciLCJhcGlLZXkiLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfRklSRUJBU0VfQVBJX0tFWSIsImF1dGhEb21haW4iLCJORVhUX1BVQkxJQ19GSVJFQkFTRV9BVVRIX0RPTUFJTiIsInByb2plY3RJZCIsIk5FWFRfUFVCTElDX1BST0pFQ1RfSUQiLCJzdG9yYWdlQnVja2V0IiwiTkVYVF9QVUJMSUNfRklSRUJBU0VfU1RPUkFHRV9CVUNLRVQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsIk5FWFRfUFVCTElDX01FU1NBR0lOR19TRU5ERVJfSUQiLCJhcHBJZCIsIk5FWFRfUFVCTElDX0FQUF9JRCIsIm1lYXN1cmVtZW50SWQiLCJORVhUX1BVQkxJQ19NRUFTVVJFTUVOVF9JRCIsImZpcmViYXNlQXBwIiwiYXV0aCIsImZpcmViYXNlU2VydmljZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./firebase/FirebaseService.js\n");

/***/ }),

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"react/jsx-runtime\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context */ \"./context/index.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_context__WEBPACK_IMPORTED_MODULE_2__]);\n_context__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];\n\n\n\nfunction HomePage() {\n    // if(process.browser){\n    //   window.onbeforeunload=()=>\"are you sure?\"\n    // }\n    let { authHandler  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context__WEBPACK_IMPORTED_MODULE_2__.Context);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(authHandler, []);\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        className: \" pt-20 mx-auto lg:pt-32 max-w-5xl \",\n        __source: {\n            fileName: \"/Users/jing/Desktop/focu3/client/pages/index.jsx\",\n            lineNumber: 12,\n            columnNumber: 5\n        },\n        __self: this\n    }));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUEwQztBQUNOO1NBRTNCRyxRQUFRLEdBQUcsQ0FBQztJQUVuQixFQUF1QjtJQUN2QixFQUE4QztJQUM5QyxFQUFJO0lBQ0osR0FBRyxDQUFDLENBQUNDLENBQUFBLFdBQVcsR0FBQyxHQUFDSixpREFBVSxDQUFDRSw2Q0FBTztJQUNwQ0QsZ0RBQVMsQ0FBQ0csV0FBVyxFQUFDLENBQUMsQ0FBQztJQUN4QixNQUFNLHNFQUNIQyxDQUFHO1FBQUNDLFNBQVMsRUFBQyxDQUFvQzs7Ozs7Ozs7QUFJdkQsQ0FBQztBQUVELGlFQUFlSCxRQUFRLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qc3g/N2ZmZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZUNvbnRleHQsdXNlRWZmZWN0fSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dFwiO1xuXG5mdW5jdGlvbiBIb21lUGFnZSgpIHtcblxuICAvLyBpZihwcm9jZXNzLmJyb3dzZXIpe1xuICAvLyAgIHdpbmRvdy5vbmJlZm9yZXVubG9hZD0oKT0+XCJhcmUgeW91IHN1cmU/XCJcbiAgLy8gfVxuICBsZXQge2F1dGhIYW5kbGVyfT11c2VDb250ZXh0KENvbnRleHQpO1xuICB1c2VFZmZlY3QoYXV0aEhhbmRsZXIsW10pO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiIHB0LTIwIG14LWF1dG8gbGc6cHQtMzIgbWF4LXctNXhsIFwiPlxuICAgICAgXG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVQYWdlO1xuIl0sIm5hbWVzIjpbInVzZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJDb250ZXh0IiwiSG9tZVBhZ2UiLCJhdXRoSGFuZGxlciIsImRpdiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.jsx\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("react-toastify");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ ((module) => {

module.exports = import("firebase/app");;

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/***/ ((module) => {

module.exports = import("firebase/auth");;

/***/ }),

/***/ "firebase/compat/auth":
/*!***************************************!*\
  !*** external "firebase/compat/auth" ***!
  \***************************************/
/***/ ((module) => {

module.exports = import("firebase/compat/auth");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.jsx"));
module.exports = __webpack_exports__;

})();