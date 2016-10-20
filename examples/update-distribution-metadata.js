/*
 *
 * This example demonstrates how to update custom metadata for a distribution device
 *
 * Discards existing custom metadata and update with new metadata
 *
 * API Documentation:
 * https://m2x.att.com/developer/documentation/v2/distribution#Update-Distribution-Metadata
 */

var config = require("./config");
var M2X = require("../lib/m2x");
var m2x_client = new M2X(config.api_key);
var DistributionId = config.distributionId;

var params = {
    "<YOUR-DISTRIBUTION-METADATA-KEY>": "<YOUR-DISTRIBUTION-METADATA-VALUE>",
    "<YOUR-DISTRIBUTION-METADATA-KEY>": "<YOUR-DISTRIBUTION-METADATA-VALUE>",
    "<YOUR-DISTRIBUTION-METADATA-KEY>": "<YOUR-DISTRIBUTION-METADATA-VALUE>"
};

console.log("Updating MetaData for Distribution Device.....");

m2x_client.distributions.updateMetadata(DistributionId, params, function (response) {
    if (response.isSuccess()) {
        console.log("Status Code: ".concat(response.status));
        console.log("\nDistribution Metadata Updated.");

    } else {
        console.log("Updating MetaData for Distribution Device Failed.Please Try Again.");
        console.log(JSON.stringify(response.error()));
    }
});