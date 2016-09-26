/*
 *
 * This example demonstrates how to update collection metadata
 *
 * Discards existing custom metadata and update with new custom metadata
 *
 * API Documentation:
 * https://m2x.att.com/developer/documentation/v2/collections#Update-Collection-Metadata
 */

var config = require("./config");
var M2X = require("../lib/m2x");
var m2x_client = new M2X(config.api_key);
var CollectionId = config.collectionId;

console.log("Collection Id :%s", CollectionId);

var params = {
    "<YOUR-COLLECTION-METADATA-KEY>": "<YOUR-COLLECTION-METADATA-VALUE>",
    "<YOUR-COLLECTION-METADATA-KEY>": "<YOUR-COLLECTION-METADATA-VALUE>",
    "<YOUR-COLLECTION-METADATA-KEY>": "<YOUR-COLLECTION-METADATA-VALUE>"
};

console.log("Updating MetaData for Collection.....");

m2x_client.collections.updateMetadata(CollectionId, params, function(response) {
    if (response.isSuccess()) {
        console.log("Status Code: ".concat(response.status));
        console.log("Collection MetaData Updated.");
    } else {
        console.log(JSON.stringify(response.error()));
    }
});