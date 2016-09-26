#!/usr/bin/env node

/*
 *
 * This example demonstrates how to update metadata field for collection
 *
 * API Documentation:
 * https://m2x.att.com/developer/documentation/v2/collections#Update-Collection-Metadata-Field
 */

var config = require("./config");
var M2X = require("m2x-tessel");
var m2x_client = new M2X(config.api_key);
var CollectionId = config.collectionId;

console.log("Collection Id :%s", CollectionId);

m2x_client.collections.updateMetadataField(CollectionId, "<YOUR-COLLECTION-EXISTING-METADATA-KEY>", "<YOUR-COLLECTION-UPDATE-METADATA-VALUE>", function(response) {
    if (response.isSuccess()) {
        console.log("Status Code: ".concat(response.status));
        console.log("Collection MetaData Field Updated.");
    } else {
        console.log(JSON.stringify(response.error()));
    }
});