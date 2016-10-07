/*
 *
 * This example demonstrates how to get list of commands sent to target device
 *
 * API Documentation:
 *
 * https://m2x.att.com/developer/documentation/v2/commands#Device-s-List-of-Received-Commands
 *
 */

var config = require("./config");
var M2X = require("../lib/m2x");
var m2x_client = new M2X(config.api_key);
var deviceId = config.device;

console.log("Get the list of sent Commands to target device...");

m2x_client.commands.receivedCommandsListByDevice(deviceId, function (response) {
    if (response.isSuccess()) {

        console.log("Status Code: ".concat(response.status));
        console.log("Commands List is:\n");
        var commandsInfoList;
        commandsInfoList = JSON.parse(response.raw).commands;

        for (key in commandsInfoList) {
            console.log("%s.Command Id:%s \n URL:%s \n Command Name:%s \n Status:%s", parseInt(key) + 1, commandsInfoList[key].id, commandsInfoList[key].url, commandsInfoList[key].name, commandsInfoList[key].status);
        }
    } else {
        console.log("Error Status Code: ".concat(response.status));
        console.log(JSON.stringify(response.error()));
    }
});
