"use strict";

var helpers = require("./helpers");
var Commands;

// Wrapper for AT&T M2X Commands API
//
// https://m2x.att.com/developer/documentation/v2/commands
Commands = function(client) {
    this.client = client;
};

// Retrieve the list of send Commands by the authenticated API key
//
// https://m2x.att.com/developer/documentation/v2/commands#List-Sent-Commands
Commands.prototype.sentCommandsList = function(params, callback) {
    if (typeof params === "function") {
        callback = params;
        params = {};
    }

    return this.client.get("/commands", { qs: params || {} }, callback);
};

// Send a command to the target devices.
//
// https://m2x.att.com/developer/documentation/v2/commands#Send-Command
Commands.prototype.sendCommand = function(params, callback) {
    if (typeof params === "function") {
        callback = params;
        params = {};
    }

    return this.client.post("/commands", { params: params }, callback);
};

// Get the details of sent commands.
//
// https://m2x.att.com/developer/documentation/v2/commands#View-Command-Details
Commands.prototype.viewCommandDetails = function(id, params, callback) {
    if (typeof params === "function") {
        callback = params;
        params = {};
    }

    return this.client.get(helpers.url("/commands/%s",id), { params: params }, callback);
};

// Device view of command details
//
// https://m2x.att.com/developer/documentation/v2/commands#Device-s-View-of-Command-Details
Commands.prototype.viewDeviceCommandDetails = function(id, commandId, params, callback) {
    if (typeof params === "function") {
        callback = params;
        params = {};
    }

    return this.client.get(helpers.url("/devices/%s/commands/%s", id , commandId), { params: params }, callback);
};


// List Received commands for target device.
//
// https://m2x.att.com/developer/documentation/v2/commands#Device-s-List-of-Received-Commands
Commands.prototype.receivedCommandsListByDevice = function(id, params, callback) {
    if (typeof params === "function") {
        callback = params;
        params = {};
    }

    return this.client.get(helpers.url("/devices/%s/commands",id), { params: params }, callback);
};

// Update command status as processed.
//
// https://m2x.att.com/developer/documentation/v2/commands#Device-Marks-a-Command-as-Processed
Commands.prototype.updateCommandStatusAsProcessed = function(id, commandId, params, callback) {
    if (typeof params === "function") {
        callback = params;
        params = {};
    }

    return this.client.post(helpers.url("/devices/%s/commands/%s/process", id, commandId), { params: params }, callback);
};

// Update command status as Rejected.
//
// https://m2x.att.com/developer/documentation/v2/commands#Device-Marks-a-Command-as-Rejected
Commands.prototype.updateCommandStatusAsRejected = function(id, commandId, params, callback) {
    if (typeof params === "function") {
        callback = params;
        params = {};
    }

    return this.client.post(helpers.url("/devices/%s/commands/%s/reject", id, commandId), { params: params }, callback);
};

module.exports = Commands;
