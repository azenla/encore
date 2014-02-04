var fs = require("fs");
var file = exports;

file.readFile = function (filename) {
   return fs.readFileSync(filename).toString();
};