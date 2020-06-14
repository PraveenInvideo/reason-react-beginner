'use strict';

var React = require("react");

function Style(Props) {
  return React.createElement("div", undefined, "Style");
}

var make = Style;

exports.make = make;
/* react Not a pure module */
