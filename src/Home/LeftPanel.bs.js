'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Belt_Array = require("bs-platform/lib/js/belt_Array.js");
var LeftModule$ReasonReactExamples = require("./LeftModule.bs.js");

function LeftPanel(Props) {
  var leftPanelListItemClick = Props.leftPanelListItemClick;
  var leftPanelItems = LeftModule$ReasonReactExamples.LeftModule.fetchLeftPanelItems(undefined);
  return React.createElement("div", {
              style: LeftModule$ReasonReactExamples.LeftCSSModule.fetchMainDivStyle(undefined)
            }, React.createElement("div", {
                  style: LeftModule$ReasonReactExamples.LeftCSSModule.fetchSearchDivStyle(undefined)
                }, React.createElement("input", {
                      style: LeftModule$ReasonReactExamples.LeftCSSModule.fetchSearchInputBarStyle(undefined),
                      value: "Search ..."
                    })), React.createElement("span", {
                  style: LeftModule$ReasonReactExamples.LeftCSSModule.fetchSpanStyle(undefined)
                }, "Getting Started"), Belt_Array.map(leftPanelItems, (function (item) {
                    return React.createElement("div", {
                                key: String(item.id),
                                style: LeftModule$ReasonReactExamples.LeftCSSModule.fetchListItemStyle(undefined),
                                onClick: (function (__x) {
                                    return Curry._1(leftPanelListItemClick, item);
                                  })
                              }, item.title);
                  })));
}

var make = LeftPanel;

exports.make = make;
/* react Not a pure module */
