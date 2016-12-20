/*
 * This example demonstrates how to make a call to the List Devices endpoint.
 * and how to iterate over the paginated list of devices that is returned by the API.
 *
 * API Documentation:
 * https://m2x.att.com/developer/documentation/v2/device#List-Devices
 *
 */
var config = require("./config");
var M2X = require("../lib/m2x");
var m2x_client = new M2X(config.api_key);

var params = {
    limit: 5 //Variable to limit the number of devices per page.
};
m2x_client.devices.list(params,function(response) {
    console.log("Status Code: ".concat(response.status));
    if (response.isSuccess()) {
        jsonInfo = JSON.parse(response.raw);
        var number_of_pages = jsonInfo.pages;
        var total_devices = jsonInfo.total;
        var limit = jsonInfo.limit;
        console.log("Total Number of Devices: ", total_devices);
        print_devices(number_of_pages,limit);

    } else {
        console.log(JSON.stringify(response.raw));
    }
});


function print_devices(number_of_pages,limit) {
    for(var page = 1; page <= number_of_pages; page++) {
        var params = {
            page: page,
            limit: limit
        };
        m2x_client.devices.list(params, function (response) {
            if (response.isSuccess()) {
                i=1;
                JSON.parse(response.raw).devices.forEach(function (device) {
                    console.log("Page",JSON.parse(response.raw).current_page, ", Device ",i++ ," :: ", device.name)
                });
                console.log("****",JSON.parse(response.raw).devices.length, "Devices returned on page", JSON.parse(response.raw).current_page,"****");
            } else {
                console.log("Status Code: ".concat(response.status));
                console.log(JSON.stringify(response.raw));
            }
        });
    }
}
