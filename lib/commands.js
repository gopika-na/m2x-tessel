"use strict";

var helpers = require("./helpers");
var Commands;

/**
 * @module Commands
 * @description Method for [Wrapper for AT&T M2X Commands API]{@link https://m2x.att.com/developer/documentation/v2/commands} endpoint.
 * @param client {str}
 * @constructor
 */
Commands = function(client) {
    this.client = client;
};

/**
 * @memberOf Commands
 * @description Method for [List Sent Commands]{@link https://m2x.att.com/developer/documentation/v2/commands#List-Sent-Commands} endpoint.
 * @param params {params} Query parameters passed as keyword arguments. View M2X API Docs for listing of available parameters.
 * @param callback {function} Response callback
 * @returns Commands list
 */
Commands.prototype.sentCommandsList = function(params, callback) {
    if (typeof params === "function") {
        callback = params;
        params = {};
    }

    return this.client.get("/commands", { qs: params || {} }, callback);
};

/**
 * @memberOf Commands
 * @description Method for [Send Command]{@link https://m2x.att.com/developer/documentation/v2/commands#Send-Command} endpoint.
 * @param params {params} Query parameters passed as keyword arguments. View M2X API Docs for listing of available parameters.
 * @param callback {function} Response callback
 * @returns HttpResponse The API response, see M2X API docs for details
 */
Commands.prototype.sendCommand = function(params, callback) {
    if (typeof params === "function") {
        callback = params;
        params = {};
    }

    return this.client.post("/commands", { params: params }, callback);
};

/**
 * @memberOf Commands
 * @description Method for [View Command Details]{@link https://m2x.att.com/developer/documentation/v2/commands#View-Command-Details} endpoint.
 * @param id {str} ID of the Commands to view
 * @param params {params} Query parameters passed as keyword arguments. View M2X API Docs for listing of available parameters.
 * @param callback {function} Response callback
 * @returns Command details
 */
Commands.prototype.viewCommandDetails = function(id, params, callback) {
    if (typeof params === "function") {
        callback = params;
        params = {};
    }

    return this.client.get(helpers.url("/commands/%s",id), { params: params }, callback);
};

/**
 * @memberOf Commands
 * @description Method for [Device view of command details]{@link https://m2x.att.com/developer/documentation/v2/commands#Device-s-View-of-Command-Details} endpoint.
 * @param id {str} ID of the Device
 * @param commandId {str} ID of the Commands to view
 * @param params {params} Query parameters passed as keyword arguments. View M2X API Docs for listing of available parameters.
 * @param callback {function} Response callback
 * @returns Command details
 */
Commands.prototype.viewDeviceCommandDetails = function(id, commandId, params, callback) {
    if (typeof params === "function") {
        callback = params;
        params = {};
    }

    return this.client.get(helpers.url("/devices/%s/commands/%s", id , commandId), { params: params }, callback);
};

/**
 * @memberOf Commands
 * @description Method for [Device's List of Received Commands]{@link https://m2x.att.com/developer/documentation/v2/commands#Device-s-List-of-Received-Commands} endpoint.
 * @param id {str} ID of the Device to get list of received commands
 * @param params {params} Query parameters passed as keyword arguments. View M2X API Docs for listing of available parameters.
 * @param callback {function} Response callback
 * @returns Commands list
 */
Commands.prototype.receivedCommandsListByDevice = function(id, params, callback) {
    if (typeof params === "function") {
        callback = params;
        params = {};
    }

    return this.client.get(helpers.url("/devices/%s/commands",id), { params: params }, callback);
};

/**
 * @memberOf Commands
 * @description Method for [Device Marks a Command as Processed]{@link https://m2x.att.com/developer/documentation/v2/commands#Device-Marks-a-Command-as-Processed} endpoint.
 * @param id {str} ID of the Device
 * @param commandId {str} ID of the Command to retrieve
 * @param params {params} Query parameters passed as keyword arguments. View M2X API Docs for listing of available parameters.
 * @param callback {function} Response callback
 * @returns HttpResponse The API response, see M2X API docs for details
 */
Commands.prototype.updateCommandStatusAsProcessed = function(id, commandId, params, callback) {
    if (typeof params === "function") {
        callback = params;
        params = {};
    }

    return this.client.post(helpers.url("/devices/%s/commands/%s/process", id, commandId), { params: params }, callback);
};

/**
 * @memberOf Commands
 * @description Method for [Device Marks a Command as Rejected]{@link https://m2x.att.com/developer/documentation/v2/commands#Device-Marks-a-Command-as-Rejected} endpoint.
 * @param id {str} ID of the Device
 * @param commandId {str} ID of the Command to retrieve
 * @param params {params} Query parameters passed as keyword arguments. View M2X API Docs for listing of available parameters.
 * @param callback {function} Response callback
 * @returns HttpResponse The API response, see M2X API docs for details
 */
Commands.prototype.updateCommandStatusAsRejected = function(id, commandId, params, callback) {
    if (typeof params === "function") {
        callback = params;
        params = {};
    }

    return this.client.post(helpers.url("/devices/%s/commands/%s/reject", id, commandId), { params: params }, callback);
};

module.exports = Commands;
