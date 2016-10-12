/*
 *
 * This example demonstrates how to request the list of available Jobs
 *
 * API Documentation:
 *
 * https://m2x.att.com/developer/documentation/v2/jobs#List-Jobs
 *
 */

var config = require("./config");
var M2X = require("../lib/m2x");
var m2x_client = new M2X(config.api_key);

console.log("Getting list of Jobs...");

m2x_client.jobs.list({}, function (response) {
    if (response.isSuccess()) {
        var list;

        console.log("Status Code: ".concat(response.status));
        console.log("\nJobs List :");

        list = JSON.parse(response.raw).jobs;

        for (var key in list) {
            console.log("%s : JobId - %s and JobStatus - %s", key, list[key].id, list[key].state);
        }

    } else {
        console.log("Status Code : ".concat(response.status));
        console.log(JSON.stringify(response));
    }
});
