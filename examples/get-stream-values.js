#!/usr/bin/env node

//
// See https://github.com/attm2x/m2x-nodejs/blob/master/README.md#example-usage
// for instructions
//

var config = require("./config");
var M2X = require("m2x-tessel");
var m2xClient = new M2X(config.api_key);

m2xClient.devices.streamValues(config.device, "<STREAM-NAME>", function(response) {
    if (response.isError()) {
        console.log("Cannot get stream values:", response);
        return;
    }

    console.log("Latest stream values:", response.json.values);
});
