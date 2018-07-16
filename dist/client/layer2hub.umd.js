(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('url'), require('portable-fetch')) :
    typeof define === 'function' && define.amd ? define(['exports', 'url', 'portable-fetch'], factory) :
    (factory((global.layer2hub = {}),global.url,global.portableFetch));
}(this, (function (exports,url,portableFetch) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    /// <reference path="./custom.d.ts" />
    var BASE_PATH = "http://localhost".replace(/\/+$/, "");
    /**
     *
     * @export
     */
    var COLLECTION_FORMATS = {
        csv: ",",
        ssv: " ",
        tsv: "\t",
        pipes: "|",
    };
    /**
     *
     * @export
     * @class BaseAPI
     */
    var BaseAPI = /** @class */ (function () {
        function BaseAPI(configuration, basePath, fetch) {
            if (basePath === void 0) { basePath = BASE_PATH; }
            if (fetch === void 0) { fetch = portableFetch; }
            this.basePath = basePath;
            this.fetch = fetch;
            if (configuration) {
                this.configuration = configuration;
                this.basePath = configuration.basePath || this.basePath;
            }
        }
        return BaseAPI;
    }());
    /**
     *
     * @export
     * @class RequiredError
     * @extends {Error}
     */
    var RequiredError = /** @class */ (function (_super) {
        __extends(RequiredError, _super);
        function RequiredError(field, msg) {
            var _this = _super.call(this, msg) || this;
            _this.field = field;
            return _this;
        }
        return RequiredError;
    }(Error));
    /**
     * LcApi - fetch parameter creator
     * @export
     */
    var LcApiFetchParamCreator = function (configuration) {
        return {
            /**
             * Close ledger channel with Ingrid
             * @param {JSONGeneric} body Channel data
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            closeLC: function (body, options) {
                if (options === void 0) { options = {}; }
                // verify required parameter 'body' is not null or undefined
                if (body === null || body === undefined) {
                    throw new RequiredError('body', 'Required parameter body was null or undefined when calling closeLC.');
                }
                var localVarPath = "/v1/lc/close";
                var localVarUrlObj = url.parse(localVarPath, true);
                var localVarRequestOptions = Object.assign({ method: 'POST' }, options);
                var localVarHeaderParameter = {};
                var localVarQueryParameter = {};
                localVarHeaderParameter['Content-Type'] = 'application/json';
                localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
                // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                delete localVarUrlObj.search;
                localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
                localVarRequestOptions.body = JSON.stringify(body || {});
                return {
                    url: url.format(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Offer to open a ledger channel with Ingrid
             * @param {JSONGeneric} body Channel data
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            openLC: function (body, options) {
                if (options === void 0) { options = {}; }
                // verify required parameter 'body' is not null or undefined
                if (body === null || body === undefined) {
                    throw new RequiredError('body', 'Required parameter body was null or undefined when calling openLC.');
                }
                var localVarPath = "/v1/lc/open";
                var localVarUrlObj = url.parse(localVarPath, true);
                var localVarRequestOptions = Object.assign({ method: 'POST' }, options);
                var localVarHeaderParameter = {};
                var localVarQueryParameter = {};
                localVarHeaderParameter['Content-Type'] = 'application/json';
                localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
                // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                delete localVarUrlObj.search;
                localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
                localVarRequestOptions.body = JSON.stringify(body || {});
                return {
                    url: url.format(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Offer to update a ledger channel with Ingrid
             * @param {JSONGeneric} body Channel data
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            updateLC: function (body, options) {
                if (options === void 0) { options = {}; }
                // verify required parameter 'body' is not null or undefined
                if (body === null || body === undefined) {
                    throw new RequiredError('body', 'Required parameter body was null or undefined when calling updateLC.');
                }
                var localVarPath = "/v1/lc/update";
                var localVarUrlObj = url.parse(localVarPath, true);
                var localVarRequestOptions = Object.assign({ method: 'PUT' }, options);
                var localVarHeaderParameter = {};
                var localVarQueryParameter = {};
                localVarHeaderParameter['Content-Type'] = 'application/json';
                localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
                // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                delete localVarUrlObj.search;
                localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
                localVarRequestOptions.body = JSON.stringify(body || {});
                return {
                    url: url.format(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
        };
    };
    /**
     * LcApi - functional programming interface
     * @export
     */
    var LcApiFp = function (configuration) {
        return {
            /**
             * Close ledger channel with Ingrid
             * @param {JSONGeneric} body Channel data
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            closeLC: function (body, options) {
                var localVarFetchArgs = LcApiFetchParamCreator(configuration).closeLC(body, options);
                return function (fetch, basePath) {
                    if (fetch === void 0) { fetch = portableFetch; }
                    if (basePath === void 0) { basePath = BASE_PATH; }
                    return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then(function (response) {
                        if (response.status >= 200 && response.status < 300) {
                            return response.json();
                        }
                        else {
                            throw response;
                        }
                    });
                };
            },
            /**
             * Offer to open a ledger channel with Ingrid
             * @param {JSONGeneric} body Channel data
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            openLC: function (body, options) {
                var localVarFetchArgs = LcApiFetchParamCreator(configuration).openLC(body, options);
                return function (fetch, basePath) {
                    if (fetch === void 0) { fetch = portableFetch; }
                    if (basePath === void 0) { basePath = BASE_PATH; }
                    return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then(function (response) {
                        if (response.status >= 200 && response.status < 300) {
                            return response.json();
                        }
                        else {
                            throw response;
                        }
                    });
                };
            },
            /**
             * Offer to update a ledger channel with Ingrid
             * @param {JSONGeneric} body Channel data
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            updateLC: function (body, options) {
                var localVarFetchArgs = LcApiFetchParamCreator(configuration).updateLC(body, options);
                return function (fetch, basePath) {
                    if (fetch === void 0) { fetch = portableFetch; }
                    if (basePath === void 0) { basePath = BASE_PATH; }
                    return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then(function (response) {
                        if (response.status >= 200 && response.status < 300) {
                            return response.json();
                        }
                        else {
                            throw response;
                        }
                    });
                };
            },
        };
    };
    /**
     * LcApi - factory interface
     * @export
     */
    var LcApiFactory = function (configuration, fetch, basePath) {
        return {
            /**
             * Close ledger channel with Ingrid
             * @param {JSONGeneric} body Channel data
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            closeLC: function (body, options) {
                return LcApiFp(configuration).closeLC(body, options)(fetch, basePath);
            },
            /**
             * Offer to open a ledger channel with Ingrid
             * @param {JSONGeneric} body Channel data
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            openLC: function (body, options) {
                return LcApiFp(configuration).openLC(body, options)(fetch, basePath);
            },
            /**
             * Offer to update a ledger channel with Ingrid
             * @param {JSONGeneric} body Channel data
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            updateLC: function (body, options) {
                return LcApiFp(configuration).updateLC(body, options)(fetch, basePath);
            },
        };
    };
    /**
     * LcApi - object-oriented interface
     * @export
     * @class LcApi
     * @extends {BaseAPI}
     */
    var LcApi = /** @class */ (function (_super) {
        __extends(LcApi, _super);
        function LcApi() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * Close ledger channel with Ingrid
         * @param {} body Channel data
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof LcApi
         */
        LcApi.prototype.closeLC = function (body, options) {
            return LcApiFp(this.configuration).closeLC(body, options)(this.fetch, this.basePath);
        };
        /**
         * Offer to open a ledger channel with Ingrid
         * @param {} body Channel data
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof LcApi
         */
        LcApi.prototype.openLC = function (body, options) {
            return LcApiFp(this.configuration).openLC(body, options)(this.fetch, this.basePath);
        };
        /**
         * Offer to update a ledger channel with Ingrid
         * @param {} body Channel data
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof LcApi
         */
        LcApi.prototype.updateLC = function (body, options) {
            return LcApiFp(this.configuration).updateLC(body, options)(this.fetch, this.basePath);
        };
        return LcApi;
    }(BaseAPI));
    /**
     * VcApi - fetch parameter creator
     * @export
     */
    var VcApiFetchParamCreator = function (configuration) {
        return {
            /**
             * Close virtual channel with Alice/Bob
             * @param {JSONGeneric} body Channel data
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            closeVC: function (body, options) {
                if (options === void 0) { options = {}; }
                // verify required parameter 'body' is not null or undefined
                if (body === null || body === undefined) {
                    throw new RequiredError('body', 'Required parameter body was null or undefined when calling closeVC.');
                }
                var localVarPath = "/v1/vc/close";
                var localVarUrlObj = url.parse(localVarPath, true);
                var localVarRequestOptions = Object.assign({ method: 'POST' }, options);
                var localVarHeaderParameter = {};
                var localVarQueryParameter = {};
                localVarHeaderParameter['Content-Type'] = 'application/json';
                localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
                // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                delete localVarUrlObj.search;
                localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
                localVarRequestOptions.body = JSON.stringify(body || {});
                return {
                    url: url.format(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Offer to open a virtual channel with Bob
             * @param {JSONGeneric} body Channel data
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            openVC: function (body, options) {
                if (options === void 0) { options = {}; }
                // verify required parameter 'body' is not null or undefined
                if (body === null || body === undefined) {
                    throw new RequiredError('body', 'Required parameter body was null or undefined when calling openVC.');
                }
                var localVarPath = "/v1/vc/open";
                var localVarUrlObj = url.parse(localVarPath, true);
                var localVarRequestOptions = Object.assign({ method: 'POST' }, options);
                var localVarHeaderParameter = {};
                var localVarQueryParameter = {};
                localVarHeaderParameter['Content-Type'] = 'application/json';
                localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
                // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                delete localVarUrlObj.search;
                localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
                localVarRequestOptions.body = JSON.stringify(body || {});
                return {
                    url: url.format(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
            /**
             * Offer to update a virtual channel with Alice/Bob
             * @param {JSONGeneric} body Channel data
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            updateVC: function (body, options) {
                if (options === void 0) { options = {}; }
                // verify required parameter 'body' is not null or undefined
                if (body === null || body === undefined) {
                    throw new RequiredError('body', 'Required parameter body was null or undefined when calling updateVC.');
                }
                var localVarPath = "/v1/vc/update";
                var localVarUrlObj = url.parse(localVarPath, true);
                var localVarRequestOptions = Object.assign({ method: 'PUT' }, options);
                var localVarHeaderParameter = {};
                var localVarQueryParameter = {};
                localVarHeaderParameter['Content-Type'] = 'application/json';
                localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
                // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
                delete localVarUrlObj.search;
                localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);
                localVarRequestOptions.body = JSON.stringify(body || {});
                return {
                    url: url.format(localVarUrlObj),
                    options: localVarRequestOptions,
                };
            },
        };
    };
    /**
     * VcApi - functional programming interface
     * @export
     */
    var VcApiFp = function (configuration) {
        return {
            /**
             * Close virtual channel with Alice/Bob
             * @param {JSONGeneric} body Channel data
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            closeVC: function (body, options) {
                var localVarFetchArgs = VcApiFetchParamCreator(configuration).closeVC(body, options);
                return function (fetch, basePath) {
                    if (fetch === void 0) { fetch = portableFetch; }
                    if (basePath === void 0) { basePath = BASE_PATH; }
                    return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then(function (response) {
                        if (response.status >= 200 && response.status < 300) {
                            return response.json();
                        }
                        else {
                            throw response;
                        }
                    });
                };
            },
            /**
             * Offer to open a virtual channel with Bob
             * @param {JSONGeneric} body Channel data
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            openVC: function (body, options) {
                var localVarFetchArgs = VcApiFetchParamCreator(configuration).openVC(body, options);
                return function (fetch, basePath) {
                    if (fetch === void 0) { fetch = portableFetch; }
                    if (basePath === void 0) { basePath = BASE_PATH; }
                    return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then(function (response) {
                        if (response.status >= 200 && response.status < 300) {
                            return response.json();
                        }
                        else {
                            throw response;
                        }
                    });
                };
            },
            /**
             * Offer to update a virtual channel with Alice/Bob
             * @param {JSONGeneric} body Channel data
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            updateVC: function (body, options) {
                var localVarFetchArgs = VcApiFetchParamCreator(configuration).updateVC(body, options);
                return function (fetch, basePath) {
                    if (fetch === void 0) { fetch = portableFetch; }
                    if (basePath === void 0) { basePath = BASE_PATH; }
                    return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then(function (response) {
                        if (response.status >= 200 && response.status < 300) {
                            return response.json();
                        }
                        else {
                            throw response;
                        }
                    });
                };
            },
        };
    };
    /**
     * VcApi - factory interface
     * @export
     */
    var VcApiFactory = function (configuration, fetch, basePath) {
        return {
            /**
             * Close virtual channel with Alice/Bob
             * @param {JSONGeneric} body Channel data
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            closeVC: function (body, options) {
                return VcApiFp(configuration).closeVC(body, options)(fetch, basePath);
            },
            /**
             * Offer to open a virtual channel with Bob
             * @param {JSONGeneric} body Channel data
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            openVC: function (body, options) {
                return VcApiFp(configuration).openVC(body, options)(fetch, basePath);
            },
            /**
             * Offer to update a virtual channel with Alice/Bob
             * @param {JSONGeneric} body Channel data
             * @param {*} [options] Override http request option.
             * @throws {RequiredError}
             */
            updateVC: function (body, options) {
                return VcApiFp(configuration).updateVC(body, options)(fetch, basePath);
            },
        };
    };
    /**
     * VcApi - object-oriented interface
     * @export
     * @class VcApi
     * @extends {BaseAPI}
     */
    var VcApi = /** @class */ (function (_super) {
        __extends(VcApi, _super);
        function VcApi() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * Close virtual channel with Alice/Bob
         * @param {} body Channel data
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof VcApi
         */
        VcApi.prototype.closeVC = function (body, options) {
            return VcApiFp(this.configuration).closeVC(body, options)(this.fetch, this.basePath);
        };
        /**
         * Offer to open a virtual channel with Bob
         * @param {} body Channel data
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof VcApi
         */
        VcApi.prototype.openVC = function (body, options) {
            return VcApiFp(this.configuration).openVC(body, options)(this.fetch, this.basePath);
        };
        /**
         * Offer to update a virtual channel with Alice/Bob
         * @param {} body Channel data
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         * @memberof VcApi
         */
        VcApi.prototype.updateVC = function (body, options) {
            return VcApiFp(this.configuration).updateVC(body, options)(this.fetch, this.basePath);
        };
        return VcApi;
    }(BaseAPI));

    // tslint:disable
    /**
     * layer2 hub
     * This spec defines the API for layer2 hub
     *
     * OpenAPI spec version: 0.0.0
     * Contact: alexvlewis@gmail.com
     *
     * NOTE: This class is auto generated by the swagger code generator program.
     * https://github.com/swagger-api/swagger-codegen.git
     * Do not edit the class manually.
     */
    var Configuration = /** @class */ (function () {
        function Configuration(param) {
            if (param === void 0) { param = {}; }
            this.apiKey = param.apiKey;
            this.username = param.username;
            this.password = param.password;
            this.accessToken = param.accessToken;
            this.basePath = param.basePath;
        }
        return Configuration;
    }());

    // tslint:disable

    exports.COLLECTION_FORMATS = COLLECTION_FORMATS;
    exports.BaseAPI = BaseAPI;
    exports.RequiredError = RequiredError;
    exports.LcApiFetchParamCreator = LcApiFetchParamCreator;
    exports.LcApiFp = LcApiFp;
    exports.LcApiFactory = LcApiFactory;
    exports.LcApi = LcApi;
    exports.VcApiFetchParamCreator = VcApiFetchParamCreator;
    exports.VcApiFp = VcApiFp;
    exports.VcApiFactory = VcApiFactory;
    exports.VcApi = VcApi;
    exports.Configuration = Configuration;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=layer2hub.umd.js.map
