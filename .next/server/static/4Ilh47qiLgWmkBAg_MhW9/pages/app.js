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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "0K2u":
/***/ (function(module, exports) {

module.exports = require("@auth0/nextjs-auth0");

/***/ }),

/***/ "2NqA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("0K2u");
/* harmony import */ var _auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["a"] = (Object(_auth0_nextjs_auth0__WEBPACK_IMPORTED_MODULE_0__["initAuth0"])({
  clientId: process.env.AUTH0_CLIENT_ID,
  clientSecret: process.env.AUTH0_CLIENT_SECRET,
  scope: process.env.AUTH0_SCOPE,
  domain: process.env.AUTH0_DOMAIN,
  redirectUri: process.env.AUTH0_REDIRECT_URI,
  postLogoutRedirectUri: process.env.AUTH0_LOGOUT_REDIRECT_URI,
  session: {
    cookieSecret: process.env.AUTH0_SESSION_SECRET,
    cookieLifetime: process.env.AUTH0_SESSION_COOKIE_TIME
  }
}));

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("BY9Y");


/***/ }),

/***/ "BY9Y":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return /* binding */ getServerSideProps; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./lib/auth0.js
var auth0 = __webpack_require__("2NqA");

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");
var router_default = /*#__PURE__*/__webpack_require__.n(router_);

// EXTERNAL MODULE: ./lib/db.js
var db = __webpack_require__("u1Fb");

// CONCATENATED MODULE: ./lib/geo.js
// Converts numeric degrees to radians
function toRad(Value) {
  return Value * Math.PI / 180;
}

function distance(lat1, lon1, lat2, lon2) {
  var R = 6371; // km

  var dLat = toRad(lat2 - lat1);
  var dLon = toRad(lon2 - lon1);
  var lat1 = toRad(lat1);
  var lat2 = toRad(lat2);
  var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c;
  return d;
}
// EXTERNAL MODULE: external "firebase-admin"
var external_firebase_admin_ = __webpack_require__("NWFc");
var external_firebase_admin_default = /*#__PURE__*/__webpack_require__.n(external_firebase_admin_);

// CONCATENATED MODULE: ./lib/datetime.js
const getCurrentDate = () => {
  const today = new Date();
  const currentDate = today.getFullYear() + '-' + today.getMonth() + '-' + today.getDate();
  return currentDate;
};
// CONCATENATED MODULE: ./model/markers.js




const checkExists = async user => {
  const currentDate = getCurrentDate();
  const todaysCheckin = await db["db"].collection('markers').doc(currentDate).collection('checks').doc(user).get();
  const todaysData = todaysCheckin.data();
  return todaysData;
};
const findChecksNearbyCheckin = async checkin => {
  const currentDate = getCurrentDate();
  const checkins = await db["db"].collection('markers').doc(currentDate).collection('checks').near({
    center: checkin.coordinates,
    radius: 1000
  }).get();
  const checkinsList = [];
  checkins.docs.forEach(doc => {
    checkinsList.push({
      id: doc.id,
      status: doc.data().status,
      coords: {
        lat: doc.data().coordinates.latitude,
        long: doc.data().coordinates.longitude
      },
      distance: distance(checkin.coordinates.latitude, // -22.20292, //
      checkin.coordinates.longitude, // -45.94367, //
      doc.data().coordinates.latitude, doc.data().coordinates.longitude).toFixed(2)
    });
  });
  return checkinsList;
};
const setStatus = async (user, dados) => {
  const currentDate = getCurrentDate();
  await db["db"].collection('markers').doc(currentDate).collection('checks').doc(user).set({
    status: dados.status,
    user: user,
    coordinates: new external_firebase_admin_default.a.firestore.GeoPoint(dados.coords.lat, dados.coords.long)
  });
};
// CONCATENATED MODULE: ./pages/app.js
var __jsx = external_react_default.a.createElement;





const App = props => {
  Object(external_react_["useEffect"])(() => {
    if (!props.isAuth) {
      router_default.a.push('/');
    } else if (props.forceCreate) {
      router_default.a.push('/create-status');
    }
  });

  if (!props.isAuth || props.forceCreate) {
    return null;
  }

  return __jsx("div", null, __jsx("h1", null, "Status pr\xF3ximos a voc\xEA:"), __jsx("table", null, props.checkins.map(checkin => {
    return __jsx("tr", {
      key: checkin.id
    }, __jsx("td", null, checkin.id === props.user.sub && 'Seu status'), __jsx("td", null, checkin.status), __jsx("td", null, JSON.stringify(checkin.coords)), __jsx("td", null, checkin.distance));
  })));
};

/* harmony default export */ var app = __webpack_exports__["default"] = (App);
async function getServerSideProps({
  req,
  res
}) {
  let user = {};
  let isAuth = false;
  let forceCreate = false;
  let checkins = [];
  const session = await auth0["a" /* default */].getSession(req);

  if (session) {
    isAuth = true;
    user = session.user;
    const todaysData = await checkExists(session.user.sub);

    if (!todaysData) {
      forceCreate = true;
    } else {
      checkins = await findChecksNearbyCheckin(todaysData);
    }
  }

  return {
    props: {
      isAuth,
      user,
      forceCreate,
      checkins
    }
  };
}

/***/ }),

/***/ "MIr3":
/***/ (function(module, exports) {

module.exports = require("geofirestore");

/***/ }),

/***/ "NWFc":
/***/ (function(module, exports) {

module.exports = require("firebase-admin");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "ccAn":
/***/ (function(module) {

module.exports = JSON.parse("{\"type\":\"service_account\",\"project_id\":\"mydailystatus-61f42\",\"private_key_id\":\"d3700abefb821cda1d1b0b16ed10408c6fe1e8ee\",\"private_key\":\"-----BEGIN PRIVATE KEY-----\\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDdWdlU0kXIWYFS\\nHHMrPlawfWOIbyIF/bkhhwzFQy3Mp+94LEO/g5F72q/TvIoysZVFeXE5ytitOgBs\\nQwDQlERihMBh5qIZUhYWoMQUxa9OTyJEW8xwOu7rqHQL0RK8ezs8LsOl9JhoHPm6\\njNyE75FsyER2vQI8TNkBZxm8ZeQjTncudINJBaux8mPyT2t2H/bs/bzue2kj36E8\\nLR4b+dBuo31VeN+xwZ/Ll96//S4+beia39QiJyWkQ0teL+8hi1398Jnb/+Aw8TlR\\n0uhT7lXLjS7kkZk+HonmsyaRuGMXUarDwwWtvW0oFA/1Nno205/wYaRQMf/RRWVd\\nRXV9nADrAgMBAAECggEAGb3Yse4QMngCO4/Wbul9gGHcoOG3tbWngXgoqoog+eNv\\nzGxtZojA8wPgHcIX2kRfpSg13DA0WZTctrpmDlunxkNE8j21jTdIHVKN6xKATB2U\\n0RlR4Z1g6qP49uTWBnhYT6vqkdKrpLP18NVv0b/gjCOQHrTlXSjctbaNPiUlTlua\\nr3idmcbRUa+yucthwE8dDD2A9GH1xQ+XSox9GsR3STPHm1aDEXKtwKhcEYMLjXtN\\nfdbho4/oqAFG8AUNEw66tGwRJT1YFZBvkLiDrURS/UKlvWK11pze2SArNm4hClmj\\nxKyh7zqZie539efkUHc6slVPsiGcVsPbtPXgMg/OzQKBgQD+ond8sYWWkJ9NFbVo\\nzwSrWkAm/Hh/D8IiJ/F4XtrZrdo+ZquYjbGNSCpIes6wwGLdE3px12SGQ/6uwfa2\\nU6xmvMkT+tSFSy4m48xN9Fw1ZNYZhVfHEIbLS4w9KQtgf6ZtSbtrOtR9qA9Kl3Vc\\nA5DBOlvPDoy5ja3moeypT+XTNwKBgQDeibG3ZGFcrM2XjxdHmt4vOpWB3OL7k+1A\\nINHNf++VpB2T8W9D0R9uwTp5M/82FLINJze4XcDaDytN4k7IcdfaWI6Sg/5Ix3sN\\na3Qbcnb2CtxmrGpd3VujVO7oPyo2/gah4YnB/O0+JepXA17t66oVhseB34m/xu+I\\ngyqKPr3B7QKBgDCeEpRTTL9Xs6LDL1Tomeqhm7gV4mfYOWfOGpOyALUpNY9OiRri\\nivD/w1r9X7NtuDKfwnQz/PSJzPnO/O0JAtTG3NmcvbEJjrFMMzj7HBPxwdMzm3Pd\\nmu776LXQvWRaWwto1Yj+vY2UZf8G9hhwcdYC736UN5hCDd8IMaiOIcJ3AoGAJh57\\n/KgLLW7EQMPX/wH+MSTd20LU9rceGrAEgCj8Byv3jRH8NyepNLWQqJZJjx/4Z9xh\\n5QjaMgALMOolCJzHlrU4psxJUHorD99qIhF3Yyn1GvlJtw5l1hKEYe//8S+OP0h8\\n6mfC07R28bS4HBUUK1/M6Og7lkgjW8TsEoYwxvkCgYEA/p3nqP/q8ewzbum+Kykm\\nxNY7KV7aBfJG23Et2z2u1qhflCpl6g9h/KjNyvm0ouFCR160Vjk8nTMPvrNz2pdP\\n3d8ya/XCbsEs/2T+lQCI4UwdHaNNyTe1AyFAFjW+WWJj36xSlMqGENFKQEb7dIWr\\ncOfWjqiP26WqB4fNUu4ndaI=\\n-----END PRIVATE KEY-----\\n\",\"client_email\":\"firebase-adminsdk-5el60@mydailystatus-61f42.iam.gserviceaccount.com\",\"client_id\":\"118132898149380308087\",\"auth_uri\":\"https://accounts.google.com/o/oauth2/auth\",\"token_uri\":\"https://oauth2.googleapis.com/token\",\"auth_provider_x509_cert_url\":\"https://www.googleapis.com/oauth2/v1/certs\",\"client_x509_cert_url\":\"https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-5el60%40mydailystatus-61f42.iam.gserviceaccount.com\"}");

/***/ }),

/***/ "u1Fb":
/***/ (function(module, exports, __webpack_require__) {

const admin = __webpack_require__("NWFc");

const secret = __webpack_require__("ccAn");

const {
  GeoFirestore
} = __webpack_require__("MIr3"); //se não tem inicializa


if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(secret)
  });
}

const firestore = admin.firestore();
const db = new GeoFirestore(firestore); //Já temos como acessar nosso banco!

module.exports = {
  db
};

/***/ })

/******/ });