"use strict";

var helpers = require("./helpers");
var Jobs;

/**
 * @module Jobs
 * @description Method for [Wrapper for AT&T M2X Jobs API]{@link https://m2x.att.com/developer/documentation/v2/jobs} endpoint.
 * @param client {object}
 * @constructor
 */
Jobs = function (client) {
    this.client = client;
};

/**
 * @memberOf Jobs
 * @description Method for [List Jobs]{@link https://m2x.att.com/developer/documentation/v2/jobs#List-Jobs} endpoint.
 * @param params {params} Query parameters passed as keyword arguments. View M2X API Docs for listing of available parameters.
 * @param callback {function} Response callback
 * @returns Jobs list
 */
Jobs.prototype.list = function (params, callback) {
    if (typeof params === "function") {
        callback = params;
        params = {};
    }

    return this.client.get("/jobs", {qs: params || {}}, callback);
};

/**
 * @memberOf Jobs
 * @description Method for [View Job Details]{@link https://m2x.att.com/developer/documentation/v2/jobs#View-Job-Details} endpoint.
 * @param id {str} ID of the Job
 * @param callback {function} Response callback
 * @returns HttpResponse The API response, see M2X API docs for details
 */
Jobs.prototype.viewJobDetails = function (id, callback) {

    return this.client.get(helpers.url("/jobs/%s", id), callback);
};

module.exports = Jobs;
