var encore = require("../src/encore.js");

var assert = require("assert");

encore.request("https://raw2.github.com/kaendfinger/chromeget/master/package.json", function (err, data) {
    assert(err == null, "encore.request failed");
});