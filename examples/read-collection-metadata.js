/*
 *
 * This example demonstrates how to read custom metadata from collection
 *
 * API Documentation:
 * https://m2x.att.com/developer/documentation/v2/collections#Read-Collection-Metadata
 */

var config = require("./config");
var M2X = require("m2x-tessel");
var m2x_client = new M2X(config.api_key);
var CollectionId = config.collectionId;

console.log("Read MetaData for CollectionId :%s", CollectionId);

m2x_client.collections.metadata(CollectionId, function (response) {
    if (response.isSuccess()) {
        var jsonObj;

        console.log("Status Code: ".concat(response.status));
        console.log("\nCustom Metadata:");

        jsonObj = JSON.parse(response.raw);

        for (var key in jsonObj) {
            console.log("# %s: %s", key, jsonObj[key]);
        }
    } else {
        console.log(JSON.stringify(response.error()));
    }
});