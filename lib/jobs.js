"use strict";

var helpers = require("./helpers");
var Jobs;

// Wrapper for AT&T M2X Jobs API
//
// https://m2x.att.com/developer/documentation/v2/jobs
Jobs = function (client) {
    this.client = client;
};

// Retrieve the list of Jobs accessible by the authenticated API key that
// meet the search criteria
//
// https://m2x.att.com/developer/documentation/v2/jobs#List-Jobs
Jobs.prototype.list = function (params, callback) {
    if (typeof params === "function") {
        callback = params;
        params = {};
    }

    return this.client.get("/jobs", {qs: params || {}}, callback);
};

// View Job Details
//
// https://m2x.att.com/developer/documentation/v2/jobs#View-Job-Details
Jobs.prototype.viewJobDetails = function (id, callback) {

    return this.client.get(helpers.url("/jobs/%s", id), callback);
};

module.exports = Jobs;
