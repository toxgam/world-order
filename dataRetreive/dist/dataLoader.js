"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dataLoader = undefined;

var _fs = require("fs");

var dataLoader = exports.dataLoader = function dataLoader(id) {
  var fileName = "factbook/rankorder/rawdata_" + id + ".txt";
  var content = (0, _fs.readFileSync)(fileName).toString();

  var rows = content.split("\r");
  console.log(rows);
  var data = rows.map(function (e) {
    return e.split(/\t\s*/);
  });

  console.log(data);
};

dataLoader(2246);