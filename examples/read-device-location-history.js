/*
 *
 * This example demonstrates how to read location history for supplied device
 *
 * API Documentation:
 * https://m2x.att.com/developer/documentation/v2/device#Read-Device-Location-History
 */

var config = require("./config");
var M2X = require("../lib/m2x");
var m2x_client = new M2X(config.api_key);

m2x_client.devices.locationHistory(config.device, function (response) {
    if (response.isSuccess()) {
        var historyData;

        console.log("Status Code: ".concat(response.status));
        console.log("Location History for target device:");

        historyData = JSON.parse(response.raw).waypoints;

        function myFunction(locationObj, index) {
            console.log("%s. Name: %s \n  latitude: %s \n  longitude: %s \n  elevation: %s \n  timestamp: %s", index + 1, locationObj.name, locationObj.latitude, locationObj.longitude, locationObj.elevation, locationObj.timestamp);
        }

        historyData.forEach(myFunction);

    } else {
        console.log("Status Code: ".concat(response.status));
        console.log(JSON.stringify(response.error()));
    }
});