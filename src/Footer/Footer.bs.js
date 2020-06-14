'use strict';

var React = require("react");

function Footer(Props) {
  var footerStyle = {
    backgroundColor: "#2E86C1",
    color: "white",
    display: "flex",
    fontSize: "24px",
    height: "50px",
    width: "100%",
    alignItems: "center"
  };
  return React.createElement("div", {
              style: footerStyle
            }, "Footer");
}

var make = Footer;

exports.make = make;
/* react Not a pure module */
