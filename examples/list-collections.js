/*
 *
 * This example demonstrates how to request the list of available collections
 *
 * API Documentation:
 *
 * https://m2x.att.com/developer/documentation/v2/collections#List-collections
 *
 */

var config = require("./config");
var M2X = require("m2x-tessel");
var m2x_client = new M2X(config.api_key);

console.log("Getting list of collections...");

m2x_client.collections.list({}, function(response) {
  if (response.isSuccess()) {
    var list;

    console.log("Status Code: ".concat(response.status));
    console.log("\nCollections List:");

    list = JSON.parse(response.raw).collections;

    for (var key in list) {
      console.log("#%s: %s", key, list[key].name);
    }

  } else {
    console.log(JSON.stringify(response.error()));
  }
});
