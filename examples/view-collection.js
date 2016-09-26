/*
 *
 * This example demonstrates how to get collection information
 *
 * API Documentation:
 * https://m2x.att.com/developer/documentation/v2/collections#View-Collection-Details
 */

var config = require("./config");
var M2X = require("../lib/m2x");
var m2x_client = new M2X(config.api_key);
var CollectionId = config.collectionId;

console.log("Details of Collection:%s", CollectionId);

m2x_client.collections.viewCollection(CollectionId, function (response) {
    if (response.isSuccess()) {
        var jsonObj, tagList, metaDataList;
        console.log("Status Code: ".concat(response.status));
        console.log("\nCollection Details :");

        jsonObj = JSON.parse(response.raw);
        tagList = jsonObj["tags"];
        metaDataList = jsonObj["metadata"];

        console.log("Collection Id :", jsonObj["id"]);
        console.log("Collection Name :", jsonObj["name"]);
        console.log("Collection Description :", jsonObj["description"]);
        console.log("Collection Creation Time :", jsonObj["created"]);
        console.log("Collection Tag List :");
        for (var key in tagList) {
            console.log("#%s: %s", key, tagList[key]);
        }
        console.log("Collection MetaData:");
        for (var key in metaDataList) {
            console.log("#%s: %s", key, metaDataList[key]);
        }

    } else {
        console.log(JSON.stringify(response.error()));
    }
});

