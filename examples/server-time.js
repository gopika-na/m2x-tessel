//
// This is a simple application that requests the current
// M2X server time and prints it to the console
//

var config = require("./config");
var M2X = require("../lib/m2x");
var m2xClient = new M2X(config.api_key);

m2xClient.time(function(data) {
    console.log("Current M2X server time: ");

    var time = data.json;

    for (var property in time) {
      if (time.hasOwnProperty(property)) {
        console.log("    " + property.toUpperCase() + ": " + time[property]);
      }
    }
});
