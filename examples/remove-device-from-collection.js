/*
 *
 * This example demonstrates how to remove existing device from collection
 *
 * API Documentation:
 * https://m2x.att.com/developer/documentation/v2/collections#Remove-device-from-collection
 */

var config = require("./config");
var M2X = require("../lib/m2x");
var m2x_client = new M2X(config.api_key);
var DeviceId = config.device;
var CollectionId = config.collectionId;

console.log("Removing Device from Collection..");

m2x_client.collections.removeDeviceFromCollection(CollectionId, DeviceId, function(response) {
    if (response.isSuccess()) {
        console.log("Status Code: ".concat(response.status));
        console.log("Device Deleted from Collection.");
    } else {
        console.log(JSON.stringify(response.error()));
        console.log("Device not Deleted from Collection.Please Try Again...");
    }
});
