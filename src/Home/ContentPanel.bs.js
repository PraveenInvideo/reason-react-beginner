'use strict';

var React = require("react");
var JSX$ReasonReactExamples = require("../Examples/JSX/JSX.bs.js");
var Style$ReasonReactExamples = require("../Examples/Style/Style.bs.js");
var Events$ReasonReactExamples = require("../Examples/Events/Events.bs.js");
var Components$ReasonReactExamples = require("../Examples/Components/Components.bs.js");
var IntroExample$ReasonReactExamples = require("../Examples/IntroExample/IntroExample.bs.js");
var RouterExample$ReasonReactExamples = require("../Examples/RouterExample/RouterExample.bs.js");

function getContentPanelBasedOnType(contentType) {
  switch (contentType) {
    case /* INTRO */0 :
        return React.createElement(IntroExample$ReasonReactExamples.make, { });
    case /* COMPONENTS */1 :
        return React.createElement(Components$ReasonReactExamples.make, { });
    case /* JSX */2 :
        return React.createElement(JSX$ReasonReactExamples.make, { });
    case /* EVENT */3 :
        return React.createElement(Events$ReasonReactExamples.make, { });
    case /* STYLE */4 :
        return React.createElement(Style$ReasonReactExamples.make, { });
    case /* ROUTER */5 :
        return React.createElement(RouterExample$ReasonReactExamples.make, { });
    case /* WORKING_WITH_DOM */6 :
    case /* REFS_REACT */7 :
    case /* INVALID_PROP_NAME */8 :
    case /* PROPS_SPREAD */9 :
    case /* COMPONENTS_AS_PROPS */10 :
    case /* TERNARY_SHORTCUT */11 :
    case /* CONTEXT_AND_MIXINS */12 :
    case /* CUSTOM_CLASS_PROPERTY */13 :
    case /* EVENT_VAL_AS_SET_STATE */14 :
    case /* ERROR_BOUNDARIES */15 :
        break;
    
  }
  return React.createElement("div", undefined, "No component found lol");
}

function ContentPanel(Props) {
  var leftPanelItem = Props.leftPanelItem;
  var rightPanelMainDivStyle = {
    backgroundColor: "#444444",
    width: "100%"
  };
  return React.createElement("div", {
              style: rightPanelMainDivStyle
            }, getContentPanelBasedOnType(leftPanelItem.panelType));
}

var make = ContentPanel;

exports.getContentPanelBasedOnType = getContentPanelBasedOnType;
exports.make = make;
/* react Not a pure module */
