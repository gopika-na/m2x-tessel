#!/usr/bin/env node

/*
 *
 * This example demonstrates how to create a new collection
 *
 * API Documentation:
 * https://m2x.att.com/developer/documentation/v2/collections#Create-Collection
 */

var config = require("./config");
var M2X = require("m2x-tessel");
var m2x_client = new M2X(config.api_key);

var params = {
    "name": "<YOUR-COLLECTION-NAME>",
    "tags": "<YOUR-COLLECTION-TAG-INFO>",
    "description": "<YOUR-COLLECTION-DESCRIPTION>"
};

console.log("Creating new Collection in %s Account...", config.api_key);

m2x_client.collections.createCollection(params, function (response) {
    if (response.isSuccess()) {
        console.log("Status Code: ".concat(response.status));
        if (response.status === 201) {
            console.log("Collection Created.");
        } else {
            console.log("Collection Not Created.Try Again.");
        }
    } else {
        console.log(JSON.stringify(response.error()));
    }
});


