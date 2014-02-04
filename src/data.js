var file = require("../src/file.js");
var data = exports;

data.parseJSON = function (opts) {
   if (opts.file) {
      return JSON.parse(file.readFile(opts.file));
   } else if (opts.data) {
      return JSON.parse(opts.data);
   } else {
      throw new Error("Invalid Options Provided. [ data, file ] are the only supported options.");
   }
};