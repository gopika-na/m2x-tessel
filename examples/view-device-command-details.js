/*
 *
 * This example demonstrates how to get the details of sent commands for supplied device
 *
 * API Documentation:
 *
 * https://m2x.att.com/developer/documentation/v2/commands#Device-s-View-of-Command-Details
 *
 */

var config = require("./config");
var M2X = require("../lib/m2x");
var m2x_client = new M2X(config.api_key);

console.log("Get the Command details info from Supplied device...");
//Command Id will generate by using Send Command API.
m2x_client.commands.viewDeviceCommandDetails(config.device, "<YOUR-COMMAND-ID>", function(response) {
    if (response.isSuccess()) {

        var commandsInfo;
        commandsInfo = JSON.parse(response.raw);
        console.log("Status Code: ".concat(response.status));
        console.log("Command Details:");
        console.log("Command Name: %s and Command Status: %s", commandsInfo.name, commandsInfo.status);

    } else {
        console.log("Status Code: ".concat(response.status));
        console.log(JSON.stringify(response.error()));
    }
});
