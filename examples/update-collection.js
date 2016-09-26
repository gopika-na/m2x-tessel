/*
 *
 * This example demonstrates how to update collection details
 *
 * API Documentation:
 * https://m2x.att.com/developer/documentation/v2/collections#Update-Collection-Details
 */

var config = require("./config");
var M2X = require("m2x-tessel");
var m2x_client = new M2X(config.api_key);
var CollectionId = config.collectionId;

var params = {
    "name": "<YOUR-COLLECTION-NAME>",
    "tags": "<YOUR-COLLECTION-TAG-INFO>",
    "description": "<YOUR-COLLECTION-DESCRIPTION>"
};

console.log("Updating Details for Collection:%s", CollectionId);

m2x_client.collections.updateCollection(CollectionId, params, function(response) {
    if (response.isSuccess()) {
        console.log("Status Code: ".concat(response.status));
        console.log("Collection Details Updated.");
    } else {
        console.log(JSON.stringify(response.error()));
    }
});
