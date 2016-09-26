/*
 *
 * This example demonstrates how to delete existing collection
 *
 * API Documentation:
 * https://m2x.att.com/developer/documentation/v2/collections#Delete-Collection
 */

var config = require("./config");
var M2X = require("m2x-tessel");
var m2x_client = new M2X(config.api_key);
var CollectionId = config.collectionId;

console.log("Deleting Collection Id :%s", CollectionId);

m2x_client.collections.deleteCollection(CollectionId, function (response) {
    if (response.isSuccess()) {
        console.log("Status Code: ".concat(response.status));
        if (response.status === 204) {
            console.log("Collection Deleted.");
        } else {
            console.log("Collection Not Deleted.Try Again.");
        }
    } else {
        console.log(JSON.stringify(response.error()));
    }
});