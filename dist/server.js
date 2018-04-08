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

/***/ "./src/server/server.js":
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed: Error: Cannot find module 'babel-preset-env' from '/home/seth/repos/react-kanban'\\n- Did you mean \\\"@babel/env\\\"?\\n    at Function.module.exports [as sync] (/home/seth/repos/react-kanban/node_modules/resolve/lib/sync.js:42:15)\\n    at resolveStandardizedName (/home/seth/repos/react-kanban/node_modules/@babel/core/lib/config/files/plugins.js:104:31)\\n    at resolvePreset (/home/seth/repos/react-kanban/node_modules/@babel/core/lib/config/files/plugins.js:57:10)\\n    at loadPreset (/home/seth/repos/react-kanban/node_modules/@babel/core/lib/config/files/plugins.js:76:18)\\n    at createDescriptor (/home/seth/repos/react-kanban/node_modules/@babel/core/lib/config/config-descriptors.js:154:21)\\n    at /home/seth/repos/react-kanban/node_modules/@babel/core/lib/config/config-descriptors.js:106:12\\n    at Array.map (<anonymous>)\\n    at createDescriptors (/home/seth/repos/react-kanban/node_modules/@babel/core/lib/config/config-descriptors.js:105:27)\\n    at createPresetDescriptors (/home/seth/repos/react-kanban/node_modules/@babel/core/lib/config/config-descriptors.js:97:10)\\n    at /home/seth/repos/react-kanban/node_modules/@babel/core/lib/config/config-descriptors.js:69:19\\n    at presets (/home/seth/repos/react-kanban/node_modules/@babel/core/lib/config/config-descriptors.js:59:25)\\n    at mergeChainOpts (/home/seth/repos/react-kanban/node_modules/@babel/core/lib/config/config-chain.js:324:68)\\n    at /home/seth/repos/react-kanban/node_modules/@babel/core/lib/config/config-chain.js:277:7\\n    at buildRootChain (/home/seth/repos/react-kanban/node_modules/@babel/core/lib/config/config-chain.js:111:20)\\n    at loadPrivatePartialConfig (/home/seth/repos/react-kanban/node_modules/@babel/core/lib/config/partial.js:51:53)\\n    at loadFullConfig (/home/seth/repos/react-kanban/node_modules/@babel/core/lib/config/full.js:43:37)\\n    at /home/seth/repos/react-kanban/node_modules/@babel/core/lib/transform.js:28:33\\n    at _combinedTickCallback (internal/process/next_tick.js:131:7)\\n    at process._tickCallback (internal/process/next_tick.js:180:9)\");\n\n//# sourceURL=webpack:///./src/server/server.js?");

/***/ })

/******/ });