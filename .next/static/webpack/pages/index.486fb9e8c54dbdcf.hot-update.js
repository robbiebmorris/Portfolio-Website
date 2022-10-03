"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/utils/api.ts":
/*!**************************!*\
  !*** ./src/utils/api.ts ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getProjects\": function() { return /* binding */ getProjects; },\n/* harmony export */   \"getQuote\": function() { return /* binding */ getQuote; },\n/* harmony export */   \"getReadme\": function() { return /* binding */ getReadme; },\n/* harmony export */   \"postMessage\": function() { return /* binding */ postMessage; }\n/* harmony export */ });\n/* harmony import */ var _Users_robbiemorris_Desktop_Code_Personal_Portfolio_Website_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_robbiemorris_Desktop_Code_Personal_Portfolio_Website_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_robbiemorris_Desktop_Code_Personal_Portfolio_Website_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../config.json */ \"./config.json\");\n/* harmony import */ var _emailjs_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emailjs/browser */ \"./node_modules/@emailjs/browser/es/index.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\nvar getProjects = function() {\n    var _ref = _asyncToGenerator(_Users_robbiemorris_Desktop_Code_Personal_Portfolio_Website_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var data;\n        return _Users_robbiemorris_Desktop_Code_Personal_Portfolio_Website_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return axios__WEBPACK_IMPORTED_MODULE_1___default().get(\"https://api.github.com/users/\".concat(_config_json__WEBPACK_IMPORTED_MODULE_2__.social.github, \"/repos\"));\n                case 2:\n                    data = _ctx.sent.data;\n                    return _ctx.abrupt(\"return\", data);\n                case 4:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return function getProjects() {\n        return _ref.apply(this, arguments);\n    };\n}();\nvar getReadme = function() {\n    var _ref = _asyncToGenerator(_Users_robbiemorris_Desktop_Code_Personal_Portfolio_Website_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var data;\n        return _Users_robbiemorris_Desktop_Code_Personal_Portfolio_Website_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return axios__WEBPACK_IMPORTED_MODULE_1___default().get(_config_json__WEBPACK_IMPORTED_MODULE_2__.readmeUrl);\n                case 2:\n                    data = _ctx.sent.data;\n                    return _ctx.abrupt(\"return\", data);\n                case 4:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return function getReadme() {\n        return _ref.apply(this, arguments);\n    };\n}();\nvar getQuote = function() {\n    var _ref = _asyncToGenerator(_Users_robbiemorris_Desktop_Code_Personal_Portfolio_Website_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n        var data;\n        return _Users_robbiemorris_Desktop_Code_Personal_Portfolio_Website_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return axios__WEBPACK_IMPORTED_MODULE_1___default().get(\"https://api.quotable.io/random\");\n                case 2:\n                    data = _ctx.sent.data;\n                    return _ctx.abrupt(\"return\", {\n                        quote: \"\\u201C\".concat(data.content, \"\\u201D \\u2014 \").concat(data.author)\n                    });\n                case 4:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return function getQuote() {\n        return _ref.apply(this, arguments);\n    };\n}();\nvar postMessage = function() {\n    var _ref = _asyncToGenerator(_Users_robbiemorris_Desktop_Code_Personal_Portfolio_Website_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(input) {\n        return _Users_robbiemorris_Desktop_Code_Personal_Portfolio_Website_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _emailjs_browser__WEBPACK_IMPORTED_MODULE_3__[\"default\"].init(\"alqveR1PEivIVnzUd\");\n                    _emailjs_browser__WEBPACK_IMPORTED_MODULE_3__[\"default\"].send(\"default_service\", \"template_a0gqx4o\", {\n                        message: input\n                    }).then(function(response) {\n                        console.log(\"SUCCESS!\", response.status, response.text);\n                    }, function(error) {\n                        console.log(\"FAILED...\", error);\n                    });\n                    return _ctx.abrupt(\"return\", \"\");\n                case 3:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return function postMessage(input) {\n        return _ref.apply(this, arguments);\n    };\n}(); //a7c1b9eaead7a8216a92d7b5bdb2010f (normal key)\n //5e7f0974b80696fa246be95c9de1c4a2 (secret key)\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdXRpbHMvYXBpLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTBCO0FBQ2E7QUFDQTtBQUVoQyxJQUFNRyxXQUFXO2VBQUcsNE1BQVk7WUFDN0JDLElBQUk7Ozs7OzJCQUFXSixnREFBUyxDQUM5QiwrQkFBOEIsQ0FBdUIsTUFBTSxDQUEzQkMsdURBQW9CLEVBQUMsUUFBTSxDQUFDLENBQzdEOztvQkFGSyxJQUFNLGFBQUpHLElBQUksQ0FFWDtpREFDTUEsSUFBSTs7Ozs7O0tBQ1o7b0JBTFlELFdBQVc7OztHQUt2QixDQUFDO0FBRUssSUFBTUssU0FBUztlQUFHLDRNQUFZO1lBQzNCSixJQUFJOzs7OzsyQkFBV0osZ0RBQVMsQ0FBQ0MsbURBQWdCLENBQUM7O29CQUE1QyxJQUFNLGFBQUpHLElBQUksQ0FBc0M7aURBQzNDQSxJQUFJOzs7Ozs7S0FDWjtvQkFIWUksU0FBUzs7O0dBR3JCLENBQUM7QUFFSyxJQUFNRSxRQUFRO2VBQUcsNE1BQVk7WUFDMUJOLElBQUk7Ozs7OzJCQUFXSixnREFBUyxDQUFDLGdDQUFnQyxDQUFDOztvQkFBNUQsSUFBTSxhQUFKSSxJQUFJLENBQXNEO2lEQUMzRDt3QkFDTE8sS0FBSyxFQUFFLFFBQUUsQ0FBdUJQLE1BQVcsQ0FBOUJBLElBQUksQ0FBQ1EsT0FBTyxFQUFDLGdCQUFJLENBQWMsUUFBWlIsSUFBSSxDQUFDUyxNQUFNLENBQUU7cUJBQzVDOzs7Ozs7S0FDRjtvQkFMVUgsUUFBUTs7O0dBS2xCLENBQUM7QUFFSyxJQUFNSSxXQUFXO2VBQUcsME1BQU9DLEtBQUssRUFBSzs7OztvQkFFMUNiLDZEQUFZLENBQUMsbUJBQW1CLENBQUMsQ0FBQztvQkFFbENBLDZEQUFZLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUU7d0JBQUVnQixPQUFPLEVBQUVILEtBQUs7cUJBQUcsQ0FBQyxDQUNyRUksSUFBSSxDQUFDLFNBQVNDLFFBQVEsRUFBRTt3QkFDdEJDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFVBQVUsRUFBRUYsUUFBUSxDQUFDRyxNQUFNLEVBQUVILFFBQVEsQ0FBQ0ksSUFBSSxDQUFDLENBQUM7cUJBQzFELEVBQUUsU0FBU0MsS0FBSyxFQUFFO3dCQUNoQkosT0FBTyxDQUFDQyxHQUFHLENBQUMsV0FBVyxFQUFFRyxLQUFLLENBQUMsQ0FBQztxQkFDbEMsQ0FBQyxDQUFDO2lEQUNFLEVBQUU7Ozs7OztLQUNWO29CQVhZWCxXQUFXLENBQVVDLEtBQUs7OztHQVd0QyxDQUFDLENBRUYsK0NBQStDO0NBQy9DLCtDQUE2QyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvdXRpbHMvYXBpLnRzP2I5NzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBjb25maWcgZnJvbSAnLi4vLi4vY29uZmlnLmpzb24nO1xuaW1wb3J0IGVtYWlsanMgZnJvbSAnQGVtYWlsanMvYnJvd3Nlcic7XG5cbmV4cG9ydCBjb25zdCBnZXRQcm9qZWN0cyA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoXG4gICAgYGh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvJHtjb25maWcuc29jaWFsLmdpdGh1Yn0vcmVwb3NgLFxuICApO1xuICByZXR1cm4gZGF0YTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRSZWFkbWUgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MuZ2V0KGNvbmZpZy5yZWFkbWVVcmwpO1xuICByZXR1cm4gZGF0YTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRRdW90ZSA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5nZXQoJ2h0dHBzOi8vYXBpLnF1b3RhYmxlLmlvL3JhbmRvbScpO1xuICByZXR1cm4ge1xuICAgIHF1b3RlOiBg4oCcJHtkYXRhLmNvbnRlbnR94oCdIOKAlCAke2RhdGEuYXV0aG9yfWAsXG4gIH07XG59O1xuXG5leHBvcnQgY29uc3QgcG9zdE1lc3NhZ2UgPSBhc3luYyAoaW5wdXQpID0+IHtcblxuICBlbWFpbGpzLmluaXQoXCJhbHF2ZVIxUEVpdklWbnpVZFwiKTtcbiAgXG4gIGVtYWlsanMuc2VuZCgnZGVmYXVsdF9zZXJ2aWNlJywgJ3RlbXBsYXRlX2EwZ3F4NG8nLCB7IG1lc3NhZ2U6IGlucHV0LCB9KVxuICAgIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgY29uc29sZS5sb2coJ1NVQ0NFU1MhJywgcmVzcG9uc2Uuc3RhdHVzLCByZXNwb25zZS50ZXh0KTtcbiAgICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgIGNvbnNvbGUubG9nKCdGQUlMRUQuLi4nLCBlcnJvcik7XG4gICAgfSk7XG4gIHJldHVybiBcIlwiXG59O1xuXG4vL2E3YzFiOWVhZWFkN2E4MjE2YTkyZDdiNWJkYjIwMTBmIChub3JtYWwga2V5KVxuLy81ZTdmMDk3NGI4MDY5NmZhMjQ2YmU5NWM5ZGUxYzRhMiAoc2VjcmV0IGtleSkiXSwibmFtZXMiOlsiYXhpb3MiLCJjb25maWciLCJlbWFpbGpzIiwiZ2V0UHJvamVjdHMiLCJkYXRhIiwiZ2V0Iiwic29jaWFsIiwiZ2l0aHViIiwiZ2V0UmVhZG1lIiwicmVhZG1lVXJsIiwiZ2V0UXVvdGUiLCJxdW90ZSIsImNvbnRlbnQiLCJhdXRob3IiLCJwb3N0TWVzc2FnZSIsImlucHV0IiwiaW5pdCIsInNlbmQiLCJtZXNzYWdlIiwidGhlbiIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsInN0YXR1cyIsInRleHQiLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/utils/api.ts\n");

/***/ })

});