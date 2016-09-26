//
// See https://github.com/attm2x/m2x-nodejs/blob/master/README.md#example-usage
// for instructions
//

var config = require("./config");
var M2X = require("m2x-tessel");
var m2xClient = new M2X(config.api_key);
var streams = {
    "temperature": {
        "unit": {
            "label": "celsius",
            "symbol": "C"
        },
        "type": "numeric"
    },
    "moisture": {
        "unit": {
            "label": "percentage",
            "symbol": "%"
        },
        "type": "numeric"
    }
};

// Create the stream if it doesn't exist already
m2xClient.devices.updateStreams(config.device, streams, function(response) {
    if (response.isError()) {
        console.log("Cannot create stream:", response);
        return;
    }

    var value_temperature = 24;
    var value_moisture = 5.0;
    var handleLoop;
    handleLoop = setInterval(function () {
        console.log("I'm updating stream values! (Press CTRL + C to stop)");

        var at = new Date().toISOString();
        var values = {
            temperature:  [ { value: value_temperature, timestamp: at } ],
            moisture:  [ { value: value_moisture, timestamp: at } ],
        };

        // Write the different values into AT&T M2X
        m2xClient.devices.postMultiple(config.device, values, function(result) {
            if (result.isError()) {
                clearInterval(handleLoop);
                console.log(result.error());
            }
        });

        value_temperature += 1;
        value_moisture += 0.1;
    }, 5000);
});
