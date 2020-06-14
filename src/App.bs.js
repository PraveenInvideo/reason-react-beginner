'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Home$ReasonReactExamples = require("./Home/Home.bs.js");
var LeftPanel$ReasonReactExamples = require("./Home/LeftPanel.bs.js");

function App(Props) {
  var baseContainer = {
    display: "flex",
    height: "100vh",
    flexDirection: "row"
  };
  var match = React.useState((function () {
          return {
                  id: 0,
                  title: "Intro",
                  panelType: /* INTRO */0
                };
        }));
  var handleTitleChange = match[1];
  var onLeftPanelItemClicked = function (item) {
    return Curry._1(handleTitleChange, (function (param) {
                  return item;
                }));
  };
  return React.createElement("div", {
              style: baseContainer
            }, React.createElement(LeftPanel$ReasonReactExamples.make, {
                  leftPanelListItemClick: onLeftPanelItemClicked
                }), React.createElement(Home$ReasonReactExamples.make, {
                  leftPanelItem: match[0]
                }));
}

var make = App;

exports.make = make;
/* react Not a pure module */
