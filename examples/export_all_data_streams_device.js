#!/usr/bin/env node

/*
 *
 * This example demonstrates how to export all data streams for existing device
 *
 * API Documentation:
 *
 * https://m2x.att.com/developer/documentation/v2/device#Export-Values-from-all-Data-Streams-of-a-Device
 *
 */

var config = require("./config");
var M2X = require("../lib/m2x");
var m2x_client = new M2X(config.api_key);
var deviceId = config.device;

console.log("Getting the job URL for loading data streams for supplied device....");

m2x_client.devices.exportAllDataStreamsByDeviceId(deviceId, function (response) {
    if (response.isSuccess()) {
        var locationURL, locationPathURL;

        console.log("Status Code: ".concat(response.status));
        locationURL = response.headers.location;
        console.log("\nJob Location URL is:" + locationURL);
        locationPathURL = locationURL.substring(locationURL.indexOf("/jobs"), locationURL.length);
        console.log("\nJob LocationPath URL is:" + locationPathURL);
        console.log("\nExecuting Job URL...Please wait...");

        setTimeout(function () {
            m2x_client.devices.getValuesFromAllDataStreams(locationPathURL, function (response) {
                if (response.isSuccess()) {
                    console.log("\nJob Location Status Code: ".concat(response.status));
                    if (JSON.parse(response.raw).result) {
                        console.log("\nDataStreams CSV URL for Device:" + JSON.parse(response.raw).result.url);
                    }
                } else {
                    console.log("Error Job Location Status Code: ".concat(response.status));
                    console.log(JSON.stringify(response.error()));
                }
            });
        }, 8000);
    } else {
        console.log(JSON.stringify(response.error()));
    }
});

