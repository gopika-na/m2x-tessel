/*
 *
 * This example demonstrates how to read custom metadata from a distribution device
 *
 * API Documentation:
 * https://m2x.att.com/developer/documentation/v2/distribution#Read-Distribution-Metadata
 */

var config = require("./config");
var M2X = require("../lib/m2x");
var m2x_client = new M2X(config.api_key);
var DistributionId = config.distributionId;

console.log("Read Distribution Device metadata....");

m2x_client.distributions.metadata(DistributionId, function (response) {
    if (response.isSuccess()) {
        var jsonObj;

        console.log("Status Code: ".concat(response.status));
        console.log("\nCustom Metadata for Distribution Device:");

        jsonObj = JSON.parse(response.raw);

        for (var key in jsonObj) {
            console.log("# %s: %s", key, jsonObj[key]);
        }
    } else {
        console.log("Read Distribution Device MetaData Failed.Please Try Again.");
        console.log(JSON.stringify(response.error()));
    }
});