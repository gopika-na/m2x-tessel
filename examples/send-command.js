/*
 *
 * This example demonstrates how to send command to devices
 *
 * API Documentation:
 *
 * https://m2x.att.com/developer/documentation/v2/commands#Send-Command
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
console.log("Send Command for Target Devices...");
m2x_client.commands.sendCommand(params, function (response) {
    if (response.isSuccess()) {

        console.log("Status Code: ".concat(response.status));
        if (response.status === 202) {
            console.log("send command is successful.");
            console.log("Please use the below Location URL to check the status of sent command:\n" + response.headers.location);
        }
    } else {
        console.log("Status Code: ".concat(response.status));
        console.log(JSON.stringify(response.error()));
    }
});
