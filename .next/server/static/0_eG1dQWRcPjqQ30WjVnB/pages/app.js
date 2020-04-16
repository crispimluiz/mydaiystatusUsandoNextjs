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
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_auth0__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("2NqA");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("4Q3z");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("u1Fb");
/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_lib_db__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



 //useEffect é para criar uma função
//router é como <href>

/*Na tela vai pegar o retorno do login quando não
não conectado*/

const App = props => {
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!props.isAuth) {
      next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/');
    } else if (props.forceCreate) {
      next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/create-status');
    }
  });

  if (!props.isAuth || props.forceCreate) {
    return null;
  }

  return __jsx("div", null, __jsx("h1", null, "App"), __jsx("table", null, props.checkins.map(checkins => {
    return;

    __jsx("tr", null, __jsx("td", null, checkins.id), __jsx("td", null, checkins.status), __jsx("td", null, JSON.stringify(checkins.coords)));
  })), __jsx("pre", null, JSON.stringify(props, null, 2)));
};

/* harmony default export */ __webpack_exports__["default"] = (App); //Servidor que recebe a validação da conexão, não vai para o frontEnd

async function getServerSideProps({
  req,
  res
}) {
  const session = await _lib_auth0__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].getSession(req);

  if (session) {
    //aqui existe o usuário
    const today = new Date();
    const currentDate = today.getFullYear() + '-' + today.getMonth() + '-' + today.getDate();
    const todaysCheckin = await _lib_db__WEBPACK_IMPORTED_MODULE_3__["db"].collection("markers").doc(currentDate).collection("checks").doc(session.user.sub).get();
    const todaysData = todaysCheckin.data(); //variavel para constrolar se tem checkins

    let forceCreate = true; //começa verdadeiro

    if (todaysData) {
      // se tem se torna false
      //permanecer true não tem
      forceCreate = false; //Trás nossa localização

      const checkins = await _lib_db__WEBPACK_IMPORTED_MODULE_3__["db"].collection('markers').doc(currentDate).collection('checks') //verifica os próximos
      .near({
        center: todaysData.coordinates,
        radius: 1000 //mil metros

      }).get(); //varrer os arquivos para pegar os dados.

      const checkinsList = [];
      checkins.docs.forEach(doc => {
        checkinsList.push({
          id: doc.id,
          status: doc.data().status,
          coords: {
            lat: doc.data().coordinates.latitude,
            long: doc.data().coordinates.loangitude
          }
        });
      });
      return {
        props: {
          isAuth: true,
          user: session.user,
          forceCreate: false,
          checkins: checkinsList
        }
      };
      return {
        props: {
          //caso a pessoa não loge
          //se user for verdadeiro
          isAuth: true,
          user: session.user,
          forceCreate
        }
      };
    }

    return {
      props: {
        //Caso a pessoa não logou volta falso
        isAuth: false,
        user: {}
      }
    };
  }
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