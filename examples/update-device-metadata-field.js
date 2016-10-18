/*
 *
 * This example demonstrates how to update metadata field for device
 *
 * API Documentation:
 * https://m2x.att.com/developer/documentation/v2/device#Update-Device-Metadata-Field
 */

var config = require("./config");
var M2X = require("../lib/m2x");
var m2x_client = new M2X(config.api_key);
var deviceId = config.device;

console.log("Update Device Metadata Field...");

m2x_client.devices.updateMetadataField(deviceId, "<YOUR-EXISTING-METADATA-KEY>", "<YOUR-UPDATED-METADATA-VALUE>", function(response) {
    if (response.isSuccess()) {
        console.log("Status Code: ".concat(response.status));
        console.log("Device MetaData Field Updated.");
    } else {
        console.log("Device MetaData Field Update Failed.Please Try Again.");
        console.log(JSON.stringify(response.error()));
    }
});