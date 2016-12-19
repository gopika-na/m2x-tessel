/*
 * This example demonstrates how to make a call to the List Devices endpoint.
 * and how to iterate over the paginated list of devices that is returned by the API.
 *
 * API Documentation:
 * https://m2x.att.com/developer/documentation/v2/device#List-Devices
 *
 * Setup:
 * Replace <M2X-API-KEY> with an M2X API Key
 *
 */
var config = require("./config");
var M2X = require("../lib/m2x");
var m2x_client = new M2X(config.api_key);

m2x_client.devices.list(function(response) {
    if (response.isSuccess()) {
        jsonInfo = JSON.parse(response.raw);
        var number_of_pages = jsonInfo.pages;
        var total_devices = jsonInfo.total;
        console.log("Total Number of Devices: ", total_devices);
        print_devices(number_of_pages);

    } else {
        console.log(JSON.stringify(response.raw));
    }
});

function print_devices(number_of_pages) {
    for(var page = 1; page <= number_of_pages; page++) {
        var params = {
            page: page
        };
        m2x_client.devices.list(params, function (response) {
            if (response.isSuccess()) {
                i=1;
                JSON.parse(response.raw).devices.forEach(function (device) {
                    console.log("Page",page-1, ", Device ",i++ ," :: ", device.name)
                });
                console.log(JSON.parse(response.raw).total, "Devices returned on page", page-1)
            } else {
                console.log("Status Code: ".concat(response.status));
                console.log(JSON.stringify(response.raw));
            }
        });
    }
}
