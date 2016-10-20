/*
 *
 * This example demonstrates how to read custom metadata from device
 *
 * API Documentation:
 * https://m2x.att.com/developer/documentation/v2/device#Read-Device-Metadata
 */

var config = require("./config");
var M2X = require("../lib/m2x");
var m2x_client = new M2X(config.api_key);
var deviceId = config.device;

console.log("Read MetaData... ");

m2x_client.devices.metadata(deviceId, function (response) {
    if (response.isSuccess()) {
        var jsonObj;

        console.log("Status Code: ".concat(response.status));
        console.log("\nCustom Metadata For Device:");

        jsonObj = JSON.parse(response.raw);

        for (var key in jsonObj) {
            console.log("# %s: %s", key, jsonObj[key]);
        }
    } else {
        console.log("Read Device MetaData Failed.Please Try Again.");
        console.log(JSON.stringify(response.error()));
    }
});