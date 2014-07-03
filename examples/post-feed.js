#!/usr/bin/env node

//
// This is a simple application that posts a value to a given feed
//

var M2X = require("m2x-tessel");
var API_KEY = "<YOUR-API-KEY>";
var FEED_ID = "<YOUR-FEED-ID>";
var STREAM_NAME = "<YOUR-STREAM-NAME>";

function M2XFeeds() {
    this.m2x = new M2X(API_KEY);

    this.updateFeed();
};

M2XFeeds.prototype.updateFeed = function(callback) {
    var newValue = 123;
    this.m2x.feeds.updateStream(FEED_ID, STREAM_NAME, { value: newValue }, function() {
        console.log("stream updated!");
    });
};

var instance = new M2XFeeds()
