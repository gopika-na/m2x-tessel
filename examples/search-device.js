/*
 *
 * This example demonstrates how to request the list of devices that meet the search criteria.
 *
 * API Documentation:
 *
 * https://m2x.att.com/developer/documentation/v2/device#Search-Devices
 *
 */

var config = require("./config");
var M2X = require("../lib/m2x");
var m2xClient = new M2X(config.api_key);

var params = {
    "ids": "<DEVICE-ID-LIST-BY-COMMA>",
    "name": "<DEVICE-NAME>",
    "description": "<DEVICE-DESCRIPTION>",
    "limit": "<DEVICES-LIMIT>",
    "tags": "<DEVICE-TAG-NAME>",
    "status": "<DEVICE-STATUS>",
    "visibility": "<DEVICE-VISIBILITY>",
    "modified_since": "<DEVICE-MODIFIED-TIMESTAMP>",
    "serial": "<DEVICE-SERIAL>",
    "collection": "<COLLECTION-ID>",
    "triggers": "<TRIGGER-NAME>",
    "sort": "<DEVICE-SORT-PARAMETER>",
    "streams": {
        "<STREAM-ID>": {
            "<STREAM-FILTER-OPERATOR>": "<STREAM-VALUE>",
            "<STREAM-FILTER-OPERATOR>": "<STREAM-VALUE>"
        },
        "<STREAM-ID>": {
            "<STREAM-FILTER-OPERATOR>": "<STREAM-VALUE>",
            "<STREAM-FILTER-OPERATOR>": "<STREAM-VALUE>"
        }
    },
    "metadata": {
        "<META-DATA-KEY>": {
            "match": "<META-DATA-VALUE>"
        }
    },
    "location": {
        "within_circle": {
            "center": {"latitude": "<LATITUDE-VALUE>", "longitude": "<LONGITUDE-VALUE>"},
            "radius": {"km": "<RADIUS-VALUE>"}
        }
    }
}

m2xClient.devices.searchDevices(params, function (response) {
    if (response.isSuccess()) {
        var jsonObj, deviceList;
        console.log("Status Code : ".concat(response.status));
        console.log("\nDevice Details :");

        jsonObj = JSON.parse(response.raw);
        deviceList = jsonObj["devices"];
        if (jsonObj.total > 0) {
            for (var device in deviceList) {
                console.log("DeviceName : %s DeviceId : %s Visibility : %s Status : %s ", deviceList[device].name, deviceList[device].id, deviceList[device].visibility, deviceList[device].status);
            }
        } else {
            console.log("No Devices associated with Search criteria.");
        }
    }
    else {
        console.log("Status Code : ".concat(response.status));
        console.log(JSON.stringify(response.error()));
    }
});
