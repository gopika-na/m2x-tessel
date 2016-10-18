/*
 *
 * This example demonstrates how to read custom metadata field value from device
 *
 * API Documentation:
 * https://m2x.att.com/developer/documentation/v2/device#Read-Device-Metadata-Field
 */

var config = require("./config");
var M2X = require("../lib/m2x");
var m2x_client = new M2X(config.api_key);
var deviceId = config.device;
var metadatdakey = "<YOUR-DEVICE-METADATA-KEY>";

console.log("Read meatadata field for device...");

m2x_client.devices.metadataField(deviceId, metadatdakey, function (response) {
    if (response.isSuccess()) {
        console.log("Device Metadata is:");
        console.log("key:%s and value:%s", metadatdakey, JSON.parse(response.raw).value);

    } else {
        console.log("Read Device MetaData Field Failed.Please Try Again.");
        console.log(JSON.stringify(response.error()));
    }
});