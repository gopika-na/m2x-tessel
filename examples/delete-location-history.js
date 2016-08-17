#!/usr/bin/env node

/*
*
* This example demonstrates how to delete location history for a device
*
* API Documentation:
* https://m2x.att.com/developer/documentation/v2/device#Delete-Location-History
*/

var config = require("./config");
var M2X = require("m2x-tessel");
var M2xClient = new M2X(config.api_key);
var DeviceId = config.device;

var params = {
  "from": "2015-01-01T01:00:00.000Z",
  "end": "2016-08-17T01:00:00.000Z"
};

console.log("Deleting location history from: %s end: %s for device: %s", params.from, params.end, DeviceId);

M2xClient.devices.deleteLocationHistory(DeviceId, params, function(response) {
  if (response.isSuccess()) {
    console.log("Status Code: ".concat(response.status));
  } else {
    console.log(JSON.stringify(response.error()));
  }
});
