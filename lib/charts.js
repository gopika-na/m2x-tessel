"use strict";

var helpers = require("./helpers");
var Charts;

/**
 * @module Charts
 * @description Method for [Wrapper for AT&T M2X Charts API]{@link https://m2x.att.com/developer/documentation/charts} endpoint.
 * @param client {str}
 * @constructor
 */
Charts = function(client) {
    this.client = client;
};

/**
 * @memberOf Charts
 * @description Method for [List Charts]{@link https://m2x.att.com/developer/documentation/v2/charts#List-Charts} endpoint.
 * @param callback {function} Response callback
 * @returns Charts list
 */
Charts.prototype.list = function(callback) {
    return this.client.get("/charts", callback);
};

/**
 * @memberOf Charts
 * @description Method for [Create Chart]{@link https://m2x.att.com/developer/documentation/v2/charts#Create-Chart} endpoint.
 * @param params {params} Query parameters passed as keyword arguments. View M2X API Docs for listing of available parameters.
 * @param callback {function} Response callback
 * @returns Chart details
 */
Charts.prototype.create = function(params, callback) {
    return this.client.post("/charts", { params: params }, callback);
};

/**
 * @memberOf Charts
 * @description Method for [View Chart Details]{@link https://m2x.att.com/developer/documentation/v2/charts#View-Chart-Details} endpoint.
 * @param id {str} ID of the chart to view
 * @param callback {function} Response callback
 * @returns Chart details
 */
Charts.prototype.view = function(id, callback) {
    return this.client.get(helpers.url("/charts/%s", id), callback);
};

/**
 * @memberOf Charts
 * @description Method for [Update Chart]{@link https://m2x.att.com/developer/documentation/v2/charts#Update-Chart} endpoint.
 * @param id {str} ID of the chart to update
 * @param params {params} Query parameters passed as keyword arguments. View M2X API Docs for listing of available parameters.
 * @param callback {function} Response callback
 * @returns HttpResponse The API response, see M2X API docs for details
 */
Charts.prototype.update = function(id, params, callback) {
    return this.client.put(
        helpers.url("/charts/%s", id),
        { params: params },
        callback
    );
};

/**
 * @memberOf Charts
 * @description Method for [Delete Chart]{@link https://m2x.att.com/developer/documentation/v2/charts#Delete-Chart} endpoint.
 * @param id {str} ID of the chart to delete
 * @param callback {function} Response callback
 * @returns HttpResponse The API response, see M2X API docs for details
 */
Charts.prototype.deleteChart = function(id, callback) {
    return this.client.del(helpers.url("/charts/%s", id), callback);
};

/**
 * @memberOf Charts
 * @description Method for [Render Chart]{@link https://m2x.att.com/developer/documentation/v2/charts#Render-Chart} endpoint.
 * @param id {str} ID of the chart to Render
 * @param callback {function} Response callback
 * @returns HttpResponse The API response, see M2X API docs for details
 */
Charts.prototype.render = function(id, format, params, callback) {
    if (typeof params === "function") {
        callback = params;
        params = {};
    }
    return this.client.get(
        helpers.url("/charts/%s.%s", id, format),
        { qs: params || {} },
        callback
    );
};

module.exports = Charts;
