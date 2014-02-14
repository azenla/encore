var encore = exports;

var http = require("http");
var https = require("https");
var urlparse = require("url").parse;

encore.request = function (url, callback) {
    var error;
    var data = "";
    var urlOpts = urlparse(url);
    var proto;
    if (urlOpts.protocol === "http:") {
        proto = http;
    } else {
        proto = https;
    }
    proto.get(urlparse(url), function (response) {
        response.on("data", function (chunk) {
           data += chunk;
        });
        response.on("end", function () {
            callback(error, data);
        });
    }).on("error", function (err) {
        error = err;
    });
};