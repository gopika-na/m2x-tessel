/*
 *
 * This example demonstrates how to update custom metadata field for a distribution device
 *
 * API Documentation:
 * https://m2x.att.com/developer/documentation/v2/distribution#Update-Distribution-Metadata-Field
 */

var config = require("./config");
var M2X = require("../lib/m2x");
var m2x_client = new M2X(config.api_key);
var DistributionId = config.distributionId;

console.log("Updating MetaData Field for Distribution Device.....");

m2x_client.distributions.updateMetadataField(DistributionId, "<YOUR-DISTRIBUTION-METADATA-KEY>", "<YOUR-DISTRIBUTION-METADATA-KEY>", function (response) {
    if (response.isSuccess()) {
        console.log("Status Code: ".concat(response.status));
        console.log("\nDistribution Device Metadata Field Updated.");
    } else {
        console.log(JSON.stringify(response.error()));
    }
});