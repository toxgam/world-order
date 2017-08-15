'use strict';

var _jsdom = require('jsdom');

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var toFormatedString = function toFormatedString(number) {
  if (number < 10) {
    return '00' + number;
  } else if (number < 100) {
    return '0' + number;
  } else {
    return number;
  }
};

var outputName = "mapFile.js";

// fs.writeFileSync(outputName, "export const mapping = [")

_fs2.default.readdirSync('factbook/rankorder/').forEach(function (fileName) {
  if (/[0-9]*rank.html/.test(fileName) && fileName.substr(0, 4) >= "2123") {

    fileName = 'factbook/rankorder/' + fileName;
    console.log(fileName);
    var rawDOM = _fs2.default.readFileSync(fileName).toString();

    var dom = new _jsdom.JSDOM(rawDOM);

    var document = dom.window.document;

    debugger;

    var content = dom.window.document.getElementsByClassName("region")[0].children[0].textContent;
    _fs2.default.appendFileSync(outputName, "{id: " + fileName.substr(19, 4) + ", category: ");
    _fs2.default.appendFileSync(outputName, "\"" + content.substring(4, content.length) + "\"" + "},\n");
  }
});

_fs2.default.appendFileSync(outputName, "]\n");