var data = require("../src/data.js");

var fileData = data.parseJSON({
   file: "tests/test.json"
});

console.assert(fileData, "{ test: { foo: 'bar', this: 'test', is: 'aweshum' } }");