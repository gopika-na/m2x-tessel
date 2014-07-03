'use strict';

var querystring = require("querystring");
var http = require("http");
var helpers = require("./helpers");

var API_HOSTNAME = "api-m2x.att.com";
var API_VERSION = "/v1";
var USER_AGENT = "M2X/0.0.2 (node.js)";

var Client = function(apiKey, apiBase) {
    this.apiKey = apiKey;
    this.apiBase = apiBase || API_BASE;

    this.defaultHeaders = {
        "User-Agent": USER_AGENT,
        "X-M2X-KEY": this.apiKey
    };

    // Define request methods by verb
    ['get', 'post', 'put', 'del', 'head', 'options', 'patch'].
        forEach(function(verb) {
            this[verb] = function(path, options, cb) {
                this.request(verb, path, options, cb);
            };
        }.bind(this));
};

Client.prototype.request = function(verb, path, options, cb) {
    var body, headers;

    if (typeof options === "function") {
        // callback was sent in place of options
        cb = options;
        options = {};
    }

    headers = helpers.extend(this.defaultHeaders, options.headers || {});

    if (! headers["Content-Type"]) {
        if (verb.toLowerCase() === 'get') {
            headers["Content-Type"] = "application/x-www-form-urlencoded";
        } else {
            headers["Content-Type"] = "application/json";
        }
    }

    if (options.params) {
        switch (headers["Content-Type"]) {
        case "application/json":
            body = JSON.stringify(options.params);
            break;
        case "application/x-www-form-urlencoded":
            body = querystring.stringify(options.params);
            break;
        default:
            throw "Unrecognized Content-Type `" + headers["Content-Type"] + "`";
        }
    }


    var qstring = options.qs ? "?" + querystring.stringify(options.qs) : "";
    var req = http.request({
        hostname: API_HOSTNAME,
        path: API_VERSION + path + qstring,
        headers: headers,
        method: verb.toUpperCase()
    }, function(response) {
        var buffer = [];
        function handle_response() {
            if (cb && buffer) {
                var data = {};
                buffer = buffer.join("");
                try {
                    data = JSON.parse(buffer);
                    buffer = null;
                } catch (_) {
                    data = {};
                }
                cb.call(this, data, nil, response);
            }
            buffer = null;
        }

        response.setEncoding('utf8');
        response.on('data', function (data) {
            buffer.push((typeof data == 'string') ? data : data.toString());
        })
        response.on('close', function () {
            handle_response();
        })
        // Tessel doesn't seem to respond properly to "close" event, so lets catch it on "end" as well
        response.on('end', function () {
            handle_response();
        })
    });

    req.on('error', function(error) {
        if (cb) cb.call(this, {}, error, nil);
    });

    if (body)
        req.write(body);
    req.end();
};

module.exports = Client;
