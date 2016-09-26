#!/usr/bin/env node

/*
 *
 * This example demonstrates how to request the list of devices from existing collection
 *
 * API Documentation:
 *
 * https://m2x.att.com/developer/documentation/v2/collections#List-Devices-from-an-existing-Collection
 *
 */

var config = require("./config");
var M2X = require("m2x-tessel");
var m2x_client = new M2X(config.api_key);
var CollectionId = config.collectionId;

console.log("Getting list of devices from collection...");

m2x_client.collections.listDevices(CollectionId, function (response) {
    if (response.isSuccess()) {
        var list;

        console.log("Status Code: ".concat(response.status));
        console.log("\nDevicesList in Collection:");

        list = JSON.parse(response.raw).devices;

        for (var key in list) {
            console.log("#%s: %s", key, list[key].name);
        }

    } else {
        console.log(JSON.stringify(response.error()));
    }
});
