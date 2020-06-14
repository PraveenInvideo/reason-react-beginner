'use strict';

var React = require("react");

function IntroExample(Props) {
  return React.createElement("div", undefined, "Hello World lets get started with reason react");
}

var make = IntroExample;

exports.make = make;
/* react Not a pure module */
