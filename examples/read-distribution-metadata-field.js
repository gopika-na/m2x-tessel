/*
 *
 * This example demonstrates how to read custom metadata field from a distribution device
 *
 * API Documentation:
 * https://m2x.att.com/developer/documentation/v2/distribution#Read-Distribution-Metadata-Field
 */

var config = require("./config");
var M2X = require("../lib/m2x");
var m2x_client = new M2X(config.api_key);
var DistributionId = config.distributionId;
var metadatakey = "<YOUR-DISTRIBUTION-METADATA-KEY>";

console.log("Read Distribution Device Metadata Field....");

m2x_client.distributions.readMetadataField(DistributionId, metadatakey, function (response) {
    if (response.isSuccess()) {

        console.log("Status Code: ".concat(response.status));
        console.log("\nCustom Metadata value for %s : ", metadatakey);
        console.log(JSON.parse(response.raw).value);

    } else {
        console.log(JSON.stringify(response.error()));
    }
});