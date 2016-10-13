"use strict";

var Client = require("./client");
var Keys = require("./keys");
var Devices = require("./devices");
var Charts = require("./charts");
var Distributions = require("./distributions");
var Collections = require("./collections");
var Commands = require("./commands");
var Jobs = require("./jobs");
var M2X;

M2X = function(apiKey, apiBase) {
    this.client = new Client(apiKey, apiBase);

    this.keys = new Keys(this.client);
    this.devices = new Devices(this.client, this.keys);
    this.charts = new Charts(this.client);
    this.distributions = new Distributions(this.client);
    this.collections = new Collections(this.client);
    this.commands = new Commands(this.client);
    this.jobs = new Jobs(this.client);
};

M2X.prototype.status = function(callback) {
    return this.client.get("/status", callback);
};

module.exports = M2X;
