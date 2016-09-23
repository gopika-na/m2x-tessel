#!/usr/bin/env node

/*
 *
 * This example demonstrates how to update single values to multiple streams
 *
 *
 * API Documentation:
 * https://m2x.att.com/developer/documentation/v2/device#Post-Device-Update--Single-Values-to-Multiple-Streams-
 */

var config = require("./config");
var M2X = require("m2x-tessel");
var m2xClient = new M2X(config.api_key);

// Time format example
// new Date().toISOString();

var params = {
    timestamp: "<YOUR-TIME-FORMAT>",
    values: {
        "<YOUR-EXISTING-STREAM-NAME>": "<YOUR-NEW-STREAM-VALUE>",
        "<YOUR-EXISTING-STREAM-NAME>": "<YOUR-NEW-STREAM-VALUE>"
    }
}

m2xClient.devices.postSingle(config.device, params, function (response) {
    if (response.isSuccess()) {
        console.log("Status Code".concat(response.status));
        console.log("Streams are updated successfully.");
    } else {
        console.log("Error Status Code".concat(response.status));
        console.log(JSON.parse(response.raw).errors);
    }
});

