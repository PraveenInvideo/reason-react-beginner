'use strict';

var React = require("react");

function JSX(Props) {
  return React.createElement("div", undefined, "JSX");
}

var make = JSX;

exports.make = make;
/* react Not a pure module */
