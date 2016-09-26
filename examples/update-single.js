//
// See https://github.com/attm2x/m2x-nodejs/blob/master/README.md#example-usage
// for instructions
//

var config = require("./config");
var M2X = require("m2x-tessel");
var m2xClient = new M2X(config.api_key);
var stream = "temperature";
var stream_params = {
    "unit": {
        "label": "celsius",
        "symbol": "C"
    },
    "type": "numeric"
};

// Create the stream if it doesn't exist already
m2xClient.devices.updateStream(config.device, stream, stream_params, function(response) {
    if (response.isError()) {
        console.log("Cannot create stream:", response);
        return;
    }

    var temperature = 24;
    setInterval(function () {
        console.log("I'm updating stream values! (Press CTRL + C to stop)");

        // Update the latest stream value to our new value
        m2xClient.devices.setStreamValue(config.device, stream, {"value": new_value}, function(result) {
            if (result.isError()) {
                console.log(result.error());
            }
        });

        new_value += 1;
    }, 5000);
});
