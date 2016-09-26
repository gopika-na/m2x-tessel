/*
 *
 * This example demonstrates how to add existing device to collection
 *
 * API Documentation:
 * https://m2x.att.com/developer/documentation/v2/collections#Add-device-to-collection
 */

var config = require("./config");
var M2X = require("../lib/m2x");
var m2x_client = new M2X(config.api_key);
var DeviceId = config.device;
var CollectionId = config.collectionId;

console.log("Adding Device to Collection...");

m2x_client.collections.addDeviceToCollection(CollectionId, DeviceId, function(response) {
    if (response.isSuccess()) {
        console.log("Status Code: ".concat(response.status));
        console.log("Device Added to Collection Successfully.");
    } else {
        console.log(JSON.stringify(response.error()));
        console.log("Device not Added to Collection.Please Try Again..");
    }
});
