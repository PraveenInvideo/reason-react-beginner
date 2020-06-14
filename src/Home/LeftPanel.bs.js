'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var React = require("react");
var Belt_Array = require("bs-platform/lib/js/belt_Array.js");

function LeftPanel(Props) {
  var leftPanelListItemClick = Props.leftPanelListItemClick;
  var leftPanelItems = [
    {
      id: 1,
      title: "Intro",
      panelType: /* INTRO */0
    },
    {
      id: 2,
      title: "Components",
      panelType: /* COMPONENTS */1
    },
    {
      id: 3,
      title: "JSX",
      panelType: /* JSX */2
    },
    {
      id: 4,
      title: "Event",
      panelType: /* EVENT */3
    },
    {
      id: 5,
      title: "Style",
      panelType: /* STYLE */4
    },
    {
      id: 6,
      title: "Router",
      panelType: /* ROUTER */5
    }
  ];
  var leftPanelMainDivStyle = {
    backgroundColor: "#303030",
    height: "100%",
    width: "30%"
  };
  var listItemStyle = {
    backgroundColor: "white",
    color: "black",
    cursor: "pointer",
    display: "flex",
    height: "40px",
    margin: "5px 10px",
    padding: "0 10px",
    borderRadius: "5px",
    alignItems: "center"
  };
  return React.createElement("div", {
              style: leftPanelMainDivStyle
            }, Belt_Array.map(leftPanelItems, (function (item) {
                    return React.createElement("div", {
                                key: String(item.id),
                                style: listItemStyle,
                                onClick: (function (__x) {
                                    return Curry._1(leftPanelListItemClick, item);
                                  })
                              }, item.title);
                  })));
}

var make = LeftPanel;

exports.make = make;
/* react Not a pure module */
