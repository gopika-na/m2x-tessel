/*
 *
 * This example demonstrates how to get the details of sent commands
 *
 * API Documentation:
 *
 * https://m2x.att.com/developer/documentation/v2/commands#View-Command-Details
 *
 */

var config = require("./config");
var M2X = require("../lib/m2x");
var m2x_client = new M2X(config.api_key);

var params = {
    "name": "<YOUR-COMMAND-NAME>",
    "targets": {
        "devices": ["<YOUR-DEVICE-ID-LIST-SEPARATED-BY-COMMA>"]
    }
};

var viewCommandDetails = function (commandId) {
    m2x_client.commands.viewCommandDetails(commandId, function (response) {
        if (response.isSuccess()) {

            console.log("Status Code: ".concat(response.status));
            var commandsInfo;
            commandsInfo = JSON.parse(response.raw).deliveries;
            console.log("Command Information is :\n");
            console.log("Command Name : " + JSON.parse(response.raw).name);
            for (var key in commandsInfo) {
                console.log("Device Id is:%s and Command Status is:%s", key, commandsInfo[key].status);
            }
        } else {
            console.log("Status Code: ".concat(response.status));
            console.log(JSON.stringify(response.error()));
        }
    });
};

console.log("Send Command for Target Devices...");
m2x_client.commands.sendCommand(params, function (response) {
    if (response.isSuccess()) {
        console.log("Status Code: ".concat(response.status));
        if (response.status === 202) {
            console.log("send command is successful.");
            console.log("Get the details of sent Commands details from All devices...");

            if (response.headers.location != undefined) {
                var locationURL = response.headers.location;
                if (locationURL.indexOf("commands/") != -1)
                    viewCommandDetails(locationURL.substring(locationURL.lastIndexOf("/") + 1, locationURL.length));
            } else {
                console.log("Error Loading Command URL.");
            }
        }
    } else {
        console.log("Send Command Failed.Please Try Again.");
        console.log("Status Code: ".concat(response.status));
        console.log(JSON.stringify(response.error()));
    }
});



