/*
 *
 * This example demonstrates how to update device metadata
 *
 * Discards existing custom metadata and update with new custom metadata
 *
 * API Documentation:
 * https://m2x.att.com/developer/documentation/v2/device#Update-Device-Metadata
 */

var config = require("./config");
var M2X = require("../lib/m2x");
var m2x_client = new M2X(config.api_key);
var deviceId = config.device;

var params = {
    "<YOUR-UPDATED-METADATA-KEY>" : "<YOUR-UPDATED-METADATA-VALUE>",
    "<YOUR-UPDATED-METADATA-KEY>" : "<YOUR-UPDATED-METADATA-VALUE>",
    "<YOUR-UPDATED-METADATA-KEY>" : "<YOUR-UPDATED-METADATA-VALUE>"

};

console.log("Updating MetaData for Device.....");

m2x_client.devices.updateMetadata(deviceId, params, function(response) {
    if (response.isSuccess()) {
        console.log("Status Code: ".concat(response.status));
        console.log("Device MetaData Updated.");
    } else {
        console.log("Update Device MetaData Failed.Please Try Again.");
        console.log(JSON.stringify(response.error()));
    }
});