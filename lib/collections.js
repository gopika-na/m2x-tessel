"user strict";

var helpers = require("./helpers");
var Collections;

// Wrapper for AT&T M2X Collection API
//
// https://m2x.att.com/developer/documentation/collections

Collections = function(client) {
  this.client = client;
}

// Retrieve the list of collections accessible by the authenticated API key that
// meet the search criteria
//
// https://m2x.att.com/developer/documentation/v2/collections#List-collections
Collections.prototype.list = function(params, callback) {
  if (typeof params === "function") {
      callback = params;
      params = {};
    }
  
  return this.client.get("/collections", { qs: params || {} }, callback);
};

// Create a new collection
//
// https://m2x.att.com/developer/documentation/v2/collections#Create-Collection
Collections.prototype.createCollection = function(params, callback) {
    return this.client.post("/collections", {
      params: params  },
     callback);
};

// Update a collection details
//
// https://m2x.att.com/developer/documentation/v2/collections#Update-Collection-Details
Collections.prototype.updateCollection = function(id, params, callback) {
    return this.client.put(helpers.url("/collections/%s", id), {
        params:  params
    }, callback);
};

// Return the details of the supplied collection
//
// https://m2x.att.com/developer/documentation/v2/collections#View-Collection-Details
Collections.prototype.viewCollection = function(id, callback) {
    return this.client.get(helpers.url("/collections/%s", id), callback);
};

// Read Collection Metadata
//
// Get custom metadata of an existing Collection.
//
// https://m2x.att.com/developer/documentation/v2/collections#Read-Collection-Metadata
Collections.prototype.metadata = function(id, callback) {
    return this.client.get(helpers.url("/collections/%s/metadata", id), callback);
};

// Read Collection Metadata Field
//
// Get the value of a single custom metadata field from an existing Collection.
//
// https://m2x.att.com/developer/documentation/v2/collections#Read-Collection-Metadata-Field
Collections.prototype.metadataField = function(id, field, callback) {
    return this.client.get(helpers.url("/collections/%s/metadata/%s", id, field), callback);
};

// Update Collection Metadata
//
// https://m2x.att.com/developer/documentation/v2/collections#Update-Collection-Metadata
Collections.prototype.updateMetadata = function(id, params, callback) {
    return this.client.put(
        helpers.url("/collections/%s/metadata", id),
        { params: params },
        callback
    );
};

// Update Collection Metadata Field
//
// https://m2x.att.com/developer/documentation/v2/collections#Update-Collection-Metadata-Field
Collections.prototype.updateMetadataField = function (id, field, value, callback) {
    return this.client.put(
        helpers.url("/collections/%s/metadata/%s", id, field),
        { params: { value: value}},
        callback
    );
};

// Delete an existing collection
//
// https://m2x.att.com/developer/documentation/v2/collections#Delete-Collection
Collections.prototype.deleteCollection = function(id, callback) {
    return this.client.del(helpers.url("/collections/%s", id), callback);
};

// Read List of Devices from an existing collection
//
// https://m2x.att.com/developer/documentation/v2/collections#List-Devices-from-an-existing-Collection
Collections.prototype.listDevices = function(id, callback) {
    return this.client.get(helpers.url("/collections/%s/devices", id),
        callback);
};

// Add device to collection
//
// https://m2x.att.com/developer/documentation/v2/collections#Add-device-to-collection
Collections.prototype.addDeviceToCollection = function(id, deviceId, params, callback) {
    if (typeof params === "function") {
        callback = params;
        params = {};
    }

    return this.client.put(
        helpers.url("/collections/%s/devices/%s", id, deviceId),
        { params: params },
        callback
    );
};

// Remove device from collection
//
// https://m2x.att.com/developer/documentation/v2/collections#Remove-device-from-collection
Collections.prototype.removeDeviceFromCollection = function(id, deviceId, params, callback) {
    if (typeof params === "function") {
        callback = params;
        params = {};
    }

    return this.client.del(
        helpers.url("/collections/%s/devices/%s", id, deviceId),
        { params: params },
        callback
    );
};

module.exports = Collections;
