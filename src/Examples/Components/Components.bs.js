'use strict';

var React = require("react");

function Components(Props) {
  return React.createElement("div", undefined, "Components");
}

var make = Components;

exports.make = make;
/* react Not a pure module */
