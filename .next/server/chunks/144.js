"use strict";
exports.id = 144;
exports.ids = [144];
exports.modules = {

/***/ 3793:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

class APIservices {
    constructor(){
        this.APIurl = "https://focu3.herokuapp.com/api";
    }
    async login(username, email, photoUrl) {
        return await axios__WEBPACK_IMPORTED_MODULE_0___default().post(`${this.APIurl}/user/login`, {
            username,
            email,
            photoUrl
        });
    }
    async userInfo(userID) {
        return await axios__WEBPACK_IMPORTED_MODULE_0___default().post(`${this.APIurl}/user/info`, {
            userID
        });
    }
    async getTasks(userID1, curWeek) {
        return await axios__WEBPACK_IMPORTED_MODULE_0___default().post(`${this.APIurl}/task/search?week=${curWeek}`, {
            userID: userID1
        });
    }
    async saveTask(userID2, task) {
        return await axios__WEBPACK_IMPORTED_MODULE_0___default().post(`${this.APIurl}/task/save`, {
            userID: userID2,
            task
        });
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new APIservices());


/***/ }),

/***/ 5144:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ UserProvider),
/* harmony export */   "_": () => (/* binding */ Context)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _firebase_FirebaseAuth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1929);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1187);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebase_FirebaseAuth__WEBPACK_IMPORTED_MODULE_3__]);
_firebase_FirebaseAuth__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];





const Context = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const UserProvider = ({ children  })=>{
    let { 0: user1 , 1: setUser  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const initState = {
        user: user1
    };
    const userReducer = (state, action)=>{
        switch(action.type){
            case "LOGIN":
                localStorage.setItem("user", JSON.stringify(action.payload));
                setUser(action.payload);
                return {
                    ...state,
                    user: action.payload
                };
            case "LOGOUT":
                localStorage.removeItem("user");
                setUser(null);
                return {
                    ...state,
                    user: null
                };
        }
    };
    let { 0: state1 , 1: dispatch  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(userReducer, initState);
    let router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    let authHandler = ()=>{
        let user = JSON.parse(localStorage.getItem("user"));
        if (user) {
            dispatch({
                type: "LOGIN",
                payload: user
            });
        } else {
            react_toastify__WEBPACK_IMPORTED_MODULE_4__.toast.warning("please login first!");
            router.push("/login");
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(authHandler, []);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Context.Provider, {
        value: {
            state: state1,
            dispatch,
            authHandler
        },
        children: children
    }));
};


});

/***/ }),

/***/ 1929:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FirebaseService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1763);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(401);
/* harmony import */ var _APIservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3793);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_FirebaseService__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__]);
([_FirebaseService__WEBPACK_IMPORTED_MODULE_0__, firebase_auth__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);



const auth = _FirebaseService__WEBPACK_IMPORTED_MODULE_0__/* ["default"].auth */ .Z.auth;
const loginWithGoogle = async ()=>{
    const provider = new firebase_auth__WEBPACK_IMPORTED_MODULE_1__.GoogleAuthProvider();
    return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.signInWithPopup)(auth, provider).then(async (result)=>{
        let user = result.user;
        let name = user.displayName;
        let email = user.email;
        let photoURL = user.photoURL;
        let res = await _APIservice__WEBPACK_IMPORTED_MODULE_2__/* ["default"].login */ .Z.login(name, email, photoURL);
        return res.data.user;
    });
};
const loginWithFacebook = async ()=>{
    const provider = new firebase_auth__WEBPACK_IMPORTED_MODULE_1__.FacebookAuthProvider();
    return (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.signInWithPopup)(auth, provider).then(async (result)=>{
        const credential = firebase_auth__WEBPACK_IMPORTED_MODULE_1__.FacebookAuthProvider.credentialFromResult(result);
        const accessToken = credential.accessToken;
        let user = result.user;
        let photoURL = user.photoURL + `?height=200&access_token=${accessToken}`;
        let name = user.displayName;
        let email = user.email;
        let res = await _APIservice__WEBPACK_IMPORTED_MODULE_2__/* ["default"].login */ .Z.login(name, email, photoURL);
        return res.data.user;
    });
};
const subscribeToAuthChanges = (handlerAuthChange)=>{
    (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.onAuthStateChanged)(auth, (user)=>{
        handlerAuthChange(user);
    });
};
const logout = async ()=>{
    return await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.signOut)(auth);
};
const getUser = ()=>{
    return _FirebaseService__WEBPACK_IMPORTED_MODULE_0__/* ["default"].auth.currentUser */ .Z.auth.currentUser;
};
const firebaseAuth = {
    loginWithGoogle,
    loginWithFacebook,
    subscribeToAuthChanges,
    logout,
    getUser
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (firebaseAuth);

});

/***/ }),

/***/ 1763:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3745);
/* harmony import */ var firebase_compat_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4826);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(401);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_auth__WEBPACK_IMPORTED_MODULE_2__, firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_compat_auth__WEBPACK_IMPORTED_MODULE_1__]);
([firebase_auth__WEBPACK_IMPORTED_MODULE_2__, firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_compat_auth__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);



const config = {
    apiKey: "AIzaSyAXPcjoe_lLE9kQVhgiKzvqV2SOrFak8Sg",
    authDomain: "lunar-bonus-323906.firebaseapp.com",
    projectId: "lunar-bonus-323906",
    storageBucket: "lunar-bonus-323906.appspot.com",
    messagingSenderId: "690738236446",
    appId: "1:690738236446:web:44b0a2e10f4664dceb320f",
    measurementId: "G-WN2S3WB743"
};
const firebaseApp = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(config);
const auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth)(firebaseApp);
const firebaseService = {
    auth
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (firebaseService);

});

/***/ })

};
;