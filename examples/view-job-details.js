/*
 *
 * This example demonstrates how to get the job details using jobId
 *
 * API Documentation:
 *
 * https://m2x.att.com/developer/documentation/v2/jobs#View-Job-Details
 *
 */

var config = require("./config");
var M2X = require("../lib/m2x");
var m2x_client = new M2X(config.api_key);

console.log("Getting details of Jobs...");

m2x_client.jobs.viewJobDetails("<YOUR-JOB-ID>", function (response) {
    if (response.isSuccess()) {
        var jobInfo;

        console.log("Status Code: ".concat(response.status));
        jobInfo = JSON.parse(response.raw);
        console.log("Job Id : %s\nStatus : %s\nCreated : %s\nFinished : %s", jobInfo.id, jobInfo.state, jobInfo.created, jobInfo.finished);


    } else {
        console.log("Status Code : ".concat(response.status));
        console.log(JSON.stringify(response));
    }
});
