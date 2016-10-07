/*
 * This example demonstrates how to update command status as processed
 *
 * API Documentation:
 *
 * https://m2x.att.com/developer/documentation/v2/commands#Device-Marks-a-Command-as-Processed
 */

var config = require("./config");
var M2X = require("../lib/m2x");
var m2x_client = new M2X(config.api_key);
var deviceId = config.device;

console.log("Updating Command Status as Processed...");
//Command Id will generate by using Send Command API.
m2x_client.commands.updateCommandStatusAsProcessed(deviceId, "<YOUR-COMMAND-ID>", function(response) {
    if (response.isSuccess()) {
        console.log("Status Code: ".concat(response.status));
        console.log("Command Status updated successfully.");
    } else {
        console.log("Status Code: ".concat(response.status));
        console.log(JSON.stringify(response.error()));
        console.log("Command Status update failed.Please Try Again.");
    }
});