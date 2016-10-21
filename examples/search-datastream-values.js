/*
 *
 * This example demonstrates how to search the stream values from all data streams of the device
 *
 * API Documentation:
 *
 * https://m2x.att.com/developer/documentation/v2/device#Search-Values-from-all-Data-Streams-of-a-Device
 */

var config = require("./config");
var M2X = require("../lib/m2x");
var m2xClient = new M2X(config.api_key);
var DeviceId = config.device;

console.log("Searching Datastream Values of the device....");

var params = {
    "start": "<TIME-STAMP-START>",
    "end": "<TIME-STAMP-END>",
    "streams": ["<STREAM-ID>"],
    "conditions": {
        "<STREAM-ID>": {
            "<STREAM-FILTER-OPERATOR>": "<STREAM-VALUE>"
        },
        "<STREAM-ID>": {
            "<STREAM-FILTER-OPERATOR>": "<STREAM-VALUE>"
        }
    }
};

m2xClient.devices.searchDatastreamValues(DeviceId, params, function (response) {
    if (response.isSuccess()) {
        var jsonObj, streamValues;
        jsonObj = JSON.parse(response.raw);
        streamValues = jsonObj["values"];

        console.log("Status Code: ".concat(response.status));
        console.log("\nStreamValues are:");
        if (streamValues.length > 0) {
            console.log(streamValues);
        } else {
            console.log("No Streams Values Found with search criteria.");
        }
    } else {
        console.log(JSON.stringify(response.error()));
    }
});
