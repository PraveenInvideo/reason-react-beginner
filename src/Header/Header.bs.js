'use strict';

var React = require("react");

function Header(Props) {
  var title = Props.title;
  var headerStyle = {
    backgroundColor: "#2E86C1",
    color: "white",
    display: "flex",
    fontSize: "24px",
    height: "50px",
    width: "100%",
    alignItems: "center"
  };
  return React.createElement("div", {
              style: headerStyle
            }, title);
}

var make = Header;

exports.make = make;
/* react Not a pure module */
