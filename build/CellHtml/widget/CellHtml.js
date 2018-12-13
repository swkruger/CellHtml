define(["dojo/query","dojo/aspect","dojo/dom-construct","dijit/registry","dojo/_base/array","dojo/NodeList-traverse","dojo/_base/lang","dojo/Deferred","dojo/_base/declare","mxui/widget/_WidgetBase","dijit/_TemplatedMixin"], function(__WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_16__, __WEBPACK_EXTERNAL_MODULE_17__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_14__, __WEBPACK_EXTERNAL_MODULE_15__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_10__) { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = log;
/* harmony export (immutable) */ __webpack_exports__["b"] = runCallback;
/* unused harmony export getMendixVersion */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dojo_Deferred__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dojo_Deferred___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_dojo_Deferred__);
/*eslint no-invalid-this: 0*/


/**
 * Logs using the Mendix logger
 *
 * @param {string} methodName
 * @param {...any} args
 * @returns void
 */
function log() {
    var methodName = arguments[0];
    var args = Array.prototype.slice.call(arguments, 1);
    if (this.id) {
        logger.debug(this.id + '.' + methodName, args && args.length ? args[0] : '');
    } else {
        logger.debug(methodName, args && args.length ? args[0] : '');
    }
}

/**
 * Runs a callback and logs the method where it comes from
 *
 * @param {Function} cb
 * @param {string} [from] Log from where the callback was triggered
 * @return void
 */
function runCallback(cb, from) {
    log.call(this, '_callback', from ? 'from ' + from : '');
    if (cb && 'function' === typeof cb) {
        cb();
    }
}

/**
 * Returns a Promise that either contains null, or an object containing the major, minor & patch version of the Mendix runtime
 *
 * @returns Promise
 */
var getMendixVersion = function getMendixVersion() {
    var deferred = new __WEBPACK_IMPORTED_MODULE_0_dojo_Deferred___default.a();

    if (!mx.version) {
        deferred.resolve(null);
    } else {
        try {
            var version = mx.version.split('.');
            var versionObject = {
                major: parseInt(version[0], 10),
                minor: parseInt(version[1], 10),
                path: parseInt(version[2], 10)
            };
            deferred.resolve(versionObject);
        } catch (error) {
            console.warn('getMendixVersion error:', error);
            deferred.resolve(null);
        }
    }

    return deferred.promise;
};

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_widget_base_helpers__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_dojo_query__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_dojo_query___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_dojo_query__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_dojo_aspect__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_dojo_aspect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_dojo_aspect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_dojo_dom_construct__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_dojo_dom_construct___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_dojo_dom_construct__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_dijit_registry__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_dijit_registry___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_dijit_registry__);


//import domClass from 'dojo/dom-class';





/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_0_widget_base_helpers__["a" /* defineWidget */])('CellHtml', false, {

    _obj: null,
    _grid: null,

    constructor: function constructor() {
        this.log = __WEBPACK_IMPORTED_MODULE_0_widget_base_helpers__["c" /* log */].bind(this);
        this.runCallback = __WEBPACK_IMPORTED_MODULE_0_widget_base_helpers__["d" /* runCallback */].bind(this);
    },
    postCreate: function postCreate() {
        __WEBPACK_IMPORTED_MODULE_0_widget_base_helpers__["c" /* log */].call(this, 'postCreate', this._WIDGET_VERSION);
    },
    update: function update(obj, callback) {
        if (obj) {
            this._contextObj = obj;
        }

        this._gridNode = Object(__WEBPACK_IMPORTED_MODULE_0_widget_base_helpers__["b" /* findElement */])(".mx-name-" + this.gridName, this.domNode.parentNode);
        this._grid = __WEBPACK_IMPORTED_MODULE_4_dijit_registry___default.a.byNode(this._gridNode);
        __WEBPACK_IMPORTED_MODULE_2_dojo_aspect___default.a.after(this._grid, "refreshGrid", this._applyHtml.bind(this));

        if (callback) {
            callback();
        }
    },
    _applyHtml: function _applyHtml() {
        var col = void 0,
            rowObj = void 0;
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = this._grid._dataSource._pageObjs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                rowObj = _step.value;

                var rowId = this._grid.getRowForMxObject(rowObj);
                var rowNode = this._grid._gridRowNodes[rowId];
                var _iteratorNormalCompletion2 = true;
                var _didIteratorError2 = false;
                var _iteratorError2 = undefined;

                try {
                    for (var _iterator2 = this.columns[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                        col = _step2.value;

                        var nodeToApply = col.columnName ? __WEBPACK_IMPORTED_MODULE_1_dojo_query___default()(".mx-name-" + col.columnName, rowNode)[0] : null;
                        this._handleResults(col.html, nodeToApply, col, rowObj);
                    }
                } catch (err) {
                    _didIteratorError2 = true;
                    _iteratorError2 = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion2 && _iterator2.return) {
                            _iterator2.return();
                        }
                    } finally {
                        if (_didIteratorError2) {
                            throw _iteratorError2;
                        }
                    }
                }
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }
    },
    _evalNanoFlow: function _evalNanoFlow(nanoflow, obj, callback) {
        var context = new mendix.lib.MxContext();
        context.setTrackObject(obj);
        window.mx.data.callNanoflow({
            nanoflow: nanoflow,
            context: context,
            origin: this.mxform,
            callback: callback,
            error: function error() {
                console.error("Unable to execute rule nanoflow");
            }
        });
    },
    _handleResults: function _handleResults(html, nodeToApply, column, rowObj) {
        //let newNode;
        var param = void 0,
            htmlStr = void 0;
        if (!nodeToApply || !rowObj) {
            return;
        }

        if (html) {
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
                for (var _iterator3 = this.params[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    param = _step3.value;

                    htmlStr = html.split("${" + param.name + "}").join(rowObj.get(param.valueAttr));
                }
            } catch (err) {
                _didIteratorError3 = true;
                _iteratorError3 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion3 && _iterator3.return) {
                        _iterator3.return();
                    }
                } finally {
                    if (_didIteratorError3) {
                        throw _iteratorError3;
                    }
                }
            }

            var nodeToRemove = __WEBPACK_IMPORTED_MODULE_1_dojo_query___default()("." + column.columnName + "-html", nodeToApply)[0];
            if (nodeToRemove) {
                __WEBPACK_IMPORTED_MODULE_3_dojo_dom_construct___default.a.destroy(nodeToRemove);
            }
            __WEBPACK_IMPORTED_MODULE_3_dojo_dom_construct___default.a.create("div", { innerHTML: htmlStr, className: column.columnName + '-html' }, nodeToApply, column.position);
        }
    }
}));

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers_define_widget__ = __webpack_require__(7);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__helpers_define_widget__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers_data__ = __webpack_require__(11);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers__ = __webpack_require__(2);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__helpers__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__helpers__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_microflow__ = __webpack_require__(12);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helpers_dom__ = __webpack_require__(13);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_4__helpers_dom__["a"]; });






/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = defineWidget;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dojoBaseDeclare__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dojoBaseDeclare___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_dojoBaseDeclare__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_widgetBase__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_widgetBase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_widgetBase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_dijit_TemplatedMixin__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_dijit_TemplatedMixin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_dijit_TemplatedMixin__);




var isArray = function isArray(arg) {
    if (Array.isArray) {
        return Array.isArray(arg);
    }
    return '[object Array]' === Object.prototype.toString.call(arg);
};

// const { packageName, version, widgetFolder } = config;

/**
 * Defines a widget. Use this when you have multiple sub widgets. For a single widget this might be overkill
 *
 * @param {string} id Widget id. This is a partial ID, the full ID has the package and widget folder in it as well
 * @param {(string|null)} template Template used by the widget
 * @param {Object} obj Object that extends the base
 * @param {any} [base] Basis of the widget. When omitted, this will use the normal _widgetBase defined by Mendix
 * @param {Object} [configParam] Optional configuration, will take the configuration from Webpack normally
 * @returns {Function} Widget Constructor
 */
function defineWidget(id, template, obj, base, configParam) {
    var widgetConfig = {"version":"1.0.2","packageName":"CellHtml","widgetFolder":"widget"} || configParam;
    var packageName = void 0;
    var version = void 0;
    var widgetFolder = void 0;

    if ('undefined' !== typeof widgetConfig) {
        packageName = widgetConfig.packageName;
        version = widgetConfig.version;
        widgetFolder = widgetConfig.widgetFolder;
    } else {
        throw new Error('Widget needs a config! Please check your source code!');
    }

    var widgetObj = obj;
    var baseID = packageName + '.' + ('' !== widgetFolder ? widgetFolder + '.' : '') + id;

    widgetObj._WIDGET_VERSION = version;
    widgetObj._WIDGET_BASE_ID = baseID;

    var mixins = [];
    if ('undefined' !== typeof base && null !== base) {
        if (isArray(base)) {
            base.forEach(function (mixin) {
                mixins.push(mixin);
            });
        } else {
            mixins.push(base);
        }
    } else {
        mixins.push(__WEBPACK_IMPORTED_MODULE_1_widgetBase___default.a);
    }

    if (template) {
        mixins.push(__WEBPACK_IMPORTED_MODULE_2_dijit_TemplatedMixin___default.a);
        if ('boolean' !== typeof template) {
            widgetObj.templateString = template;
        }
    }

    return __WEBPACK_IMPORTED_MODULE_0_dojoBaseDeclare___default()(baseID, mixins, widgetObj);
}

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_9__;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_10__;

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getData */
/* unused harmony export fetchAttr */
/* unused harmony export commitData */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dojo_Deferred__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dojo_Deferred___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_dojo_Deferred__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_dojo_base_lang__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_dojo_base_lang___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_dojo_base_lang__);



/**
 * Get Mendix data
 *
 * @param {Object} params Get parameters, see https://apidocs.mendix.com/7/client/mx.data.html#.get
 * @param {string} [params.guid]
 * @param {string[]} [params.guids]
 * @param {string} [params.xpath]
 * @param {string} [params.microflow]
 * @param {string} [params.path]
 * @param {boolean} [params.count]
 * @param {Object} [params.filter]
 * @param {string[]} [params.filter.attributes]
 * @param {number} [params.filter.offset]
 * @param {string[][]} [params.filter.sort]
 * @param {number} [params.filter.amount]
 * @param {boolean} [params.filter.distinct]
 * @param {Object} [params.filter.references]
 * @returns Promise
 */
var getData = function getData(params) {
    var deferred = new __WEBPACK_IMPORTED_MODULE_0_dojo_Deferred___default.a();
    var getParams = __WEBPACK_IMPORTED_MODULE_1_dojo_base_lang___default.a.mixin({
        callback: deferred.resolve,
        error: deferred.reject
    }, params);
    try {
        mx.data.get(getParams);
    } catch (e) {
        deferred.reject(e);
    }

    return deferred.promise;
};

/**
 * Fetch an attribute from a Mendix Object
 *
 * @param {Object} obj Mendix object
 * @param {string} attr Attribute
 * @returns Promise
 */
var fetchAttr = function fetchAttr(obj, attr) {
    var deferred = new __WEBPACK_IMPORTED_MODULE_0_dojo_Deferred___default.a();
    try {
        obj.fetch(attr, function (val) {
            return deferred.resolve(val);
        });
    } catch (e) {
        deferred.reject(e);
    }
    return deferred.promise;
};

/**
 * Commit, see https://apidocs.mendix.com/7/client/mx.data.html#.commit
 *
 * @param {Object} params
 * @param {Object} [params.mxobj]
 * @param {Object[]} [params.mxobjs]
 * @returns Promise
 */
var commitData = function commitData(params) {
    var deferred = new __WEBPACK_IMPORTED_MODULE_0_dojo_Deferred___default.a();
    var commitParams = __WEBPACK_IMPORTED_MODULE_1_dojo_base_lang___default.a.mixin({
        callback: deferred.resolve,
        error: deferred.reject
    }, params);
    try {
        mx.data.commit(commitParams);
    } catch (e) {
        deferred.reject(e);
    }

    return deferred.promise;
};

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export execute */
/* unused harmony export executePromise */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dojo_base_lang__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dojo_base_lang___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_dojo_base_lang__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_dojo_Deferred__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_dojo_Deferred___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_dojo_Deferred__);
/*eslint no-invalid-this: 0*/




/**
 * Run a microflow
 *
 * @param {string} microflow Microflow name
 * @param {string|null} guid GUID of the Mendix Object that is passed to the microflow
 * @param {Function} [cb] callback function
 * @param {Function} [errCb] error function
 * @returns void
 */
function execute(microflow, guid, cb, errCb) {
    var _this = this;

    if (microflow) {
        __WEBPACK_IMPORTED_MODULE_1__index__["a" /* log */].call(this, 'execute microflow', 'mf: ' + microflow + ':' + guid);
        var action = {
            params: {
                actionname: microflow,
                applyto: 'selection',
                guids: []
            },
            callback: __WEBPACK_IMPORTED_MODULE_0_dojo_base_lang___default.a.hitch(this, function (res) {
                if (cb && 'function' == typeof cb) {
                    cb(res);
                }
            }),
            error: __WEBPACK_IMPORTED_MODULE_0_dojo_base_lang___default.a.hitch(this, function (error) {
                if (errCb && 'function' == typeof errCb) {
                    errCb(error);
                } else {
                    mx.ui.error('Error executing microflow ' + microflow + ' : ' + error.message);
                    console.error(_this.id + '._execMf', error);
                }
            })
        };

        if (guid) {
            action.params.guids = [guid];
        }

        if (!mx.version || mx.version && 7 > parseInt(mx.version.split('.')[0], 10)) {
            action.store = {
                caller: this.mxform
            };
        } else {
            action.origin = this.mxform;
        }

        mx.data.action(action, this);
    }
}

/**
 * Run a microflow as a promise
 *
 * @param {string} microflow Microflow name
 * @param {string} [guid] Guid of Mendix object that is passed to the microflow
 * @returns Promise
 */
function executePromise(microflow, guid) {
    var deferred = new __WEBPACK_IMPORTED_MODULE_2_dojo_Deferred___default.a();

    execute.call(this, microflow, guid, deferred.resolve, deferred.reject);

    return deferred.promise;
}

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export findWidgetByClass */
/* unused harmony export findWidgetByFriendlyId */
/* unused harmony export findWidgetByName */
/* unused harmony export findElementByName */
/* harmony export (immutable) */ __webpack_exports__["a"] = findElement;
/* unused harmony export isDescendant */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dijit_registry__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dijit_registry___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_dijit_registry__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_dojo_base_array__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_dojo_base_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_dojo_base_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_dojo_query__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_dojo_query___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_dojo_query__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_dojo_NodeList_traverse__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_dojo_NodeList_traverse___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_dojo_NodeList_traverse__);





function _getClassNameByMxName(elementName) {
    return ('mx-name-' + elementName).trim();
}

function _compareClass(className) {
    return function (widget) {
        return widget.class && -1 !== widget.class.indexOf(className);
    };
}

function _compareFriendlyId(widgetName) {
    return function (widget) {
        var id = widget.friendlyId.split('.').slice(-1)[0];
        return id === widgetName;
    };
}

/**
 * Find widget by class name
 *
 * @param {string} className Class of the widget
 * @returns {(Object|null)} The found widget or null
 */
function findWidgetByClass(className) {
    var findWidget = __WEBPACK_IMPORTED_MODULE_1_dojo_base_array___default.a.filter(__WEBPACK_IMPORTED_MODULE_0_dijit_registry___default.a.toArray(), _compareClass(className));
    return 0 === findWidget.length ? null : findWidget[0];
}

/**
 * Find widget by friendly ID name
 *
 * @param {string} widgetName Name of the widget
 * @returns {(Object|null)} The found widget or null
 */
function findWidgetByFriendlyId(widgetName) {
    var findWidget = __WEBPACK_IMPORTED_MODULE_1_dojo_base_array___default.a.filter(__WEBPACK_IMPORTED_MODULE_0_dijit_registry___default.a.toArray(), _compareFriendlyId(widgetName));
    return 0 === findWidget.length ? null : findWidget[0];
}

/**
 * Find widget by Mendix name
 *
 * @param {string} widgetName Name of the widget
 * @returns {(Object|null)} The found widget or null
 */
function findWidgetByName(widgetName) {
    return findWidgetByClass(_getClassNameByMxName(widgetName));
}

/**
 * Find element by Mendix name
 *
 * @param {string} elementName Name of the element
 * @returns {(HTMLElement|null)} The found element
 */
function findElementByName(elementName) {
    return findElement('.' + _getClassNameByMxName(elementName));
}

/**
 * Find element using dojo/query
 *
 * @param {string} cssSelector CSS Selector
 * @param {HTMLElement} [parentNode] (optional) parent node
 * @param {boolean} strict Should the function return only if it can find one, or multiple
 * @param {number} index Index of the element. It is always 0, but can be set to a number (needs strict = false!)
 */
function findElement(cssSelector, parentNode) {
    var strict = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
    var index = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

    var target = 'undefined' !== typeof parentNode && null !== parentNode ? __WEBPACK_IMPORTED_MODULE_2_dojo_query___default()(cssSelector, parentNode) : __WEBPACK_IMPORTED_MODULE_2_dojo_query___default()(cssSelector);
    if (!target || 0 === target.length || 0 > index || index > target.length - 1) {
        return null;
    }
    if (strict) {
        return 1 === target.length ? target[0] : null;
    }
    return target[index];
}

/**
 *
 * @param {HTMLElement} parentNode
 * @param {HTMLElement} child
 * @returns boolean Is the child a descendant of parentNode
 */
function isDescendant(parentNode, child) {
    var node = child.parentNode;
    while (null !== node) {
        if (node === parentNode) {
            return true;
        }
        node = node.parentNode;
    }
    return false;
}

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_14__;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_15__;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_16__;

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_17__;

/***/ })
/******/ ])});;
//# sourceMappingURL=CellHtml.js.map