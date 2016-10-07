/*
 *
 * This example demonstrates Retrieve the list of sent Commands by the authenticated API key
 *
 * API Documentation:
 *
 * https://m2x.att.com/developer/documentation/v2/commands#List-Sent-Commands
 *
 */

var config = require("./config");
var M2X = require("../lib/m2x");
var m2x_client = new M2X(config.api_key);

console.log("Get the list of recent sent commands to authenticated API key...");

m2x_client.commands.sentCommandsList({}, function (response) {
    if (response.isSuccess()) {
        var commandsList;

        console.log("Status Code: ".concat(response.status));
        console.log("Commands List is:\n");
        commandsList = JSON.parse(response.raw).commands;

        for (key in commandsList) {

            console.log("%s.Command Name:%s and Command URL is:%s", parseInt(key) + 1, commandsList[key].name, commandsList[key].url);
        }

    } else {
        console.log("Status Code: ".concat(response.status));
        console.log(JSON.stringify(response.error()));
    }
});
