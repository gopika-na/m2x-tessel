/*
 *
 * This example demonstrates how to read custom metadata field value from collection
 *
 * API Documentation:
 * https://m2x.att.com/developer/documentation/v2/collections#Read-Collection-Metadata-Field
 */

var config = require("./config");
var M2X = require("../lib/m2x");
var m2x_client = new M2X(config.api_key);
var CollectionId = config.collectionId;
var metadatdakey = "<YOUR-COLLECTION-METADATA-KEY>";

console.log("Collection Id :%s", CollectionId);

m2x_client.collections.metadataField(CollectionId, metadatdakey, function (response) {
    if (response.isSuccess()) {

        console.log("MetaData Field key:%s and value:%s", metadatdakey, JSON.parse(response.raw).value);

    } else {
        console.log(JSON.stringify(response.error()));
    }
});