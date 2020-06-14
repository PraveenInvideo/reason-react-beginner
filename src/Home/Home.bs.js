'use strict';

var React = require("react");
var Footer$ReasonReactExamples = require("../Footer/Footer.bs.js");
var Header$ReasonReactExamples = require("../Header/Header.bs.js");
var ContentPanel$ReasonReactExamples = require("./ContentPanel.bs.js");

function Home(Props) {
  var leftPanelItem = Props.leftPanelItem;
  var homeMainContainer = {
    display: "flex",
    height: "100%",
    width: "100%",
    flexDirection: "column"
  };
  var contentContainer = {
    display: "flex",
    height: "100%"
  };
  return React.createElement("div", {
              style: homeMainContainer
            }, React.createElement(Header$ReasonReactExamples.make, {
                  title: leftPanelItem.title
                }), React.createElement("div", {
                  style: contentContainer
                }, React.createElement(ContentPanel$ReasonReactExamples.make, {
                      leftPanelItem: leftPanelItem
                    })), React.createElement(Footer$ReasonReactExamples.make, { }));
}

var make = Home;

exports.make = make;
/* react Not a pure module */
