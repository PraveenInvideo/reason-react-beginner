'use strict';


function fetchLeftPanelItems(param) {
  return [
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
}

var LeftModule = {
  fetchLeftPanelItems: fetchLeftPanelItems
};

function fetchMainDivStyle(param) {
  return {
          backgroundColor: "white",
          borderRight: "1px solid black",
          display: "flex",
          height: "100%",
          width: "30%",
          flexDirection: "column"
        };
}

function fetchListItemStyle(param) {
  return {
          backgroundColor: "white",
          color: "black",
          cursor: "pointer",
          display: "flex",
          height: "40px",
          margin: "5px 10px",
          padding: "0 20px",
          borderRadius: "5px",
          alignItems: "center"
        };
}

function fetchSpanStyle(param) {
  return {
          color: "#393939",
          fontSize: "18px",
          fontWeight: "800",
          marginTop: "20px",
          marginLeft: "10px"
        };
}

function fetchSearchDivStyle(param) {
  return {
          borderBottom: "1px solid gray",
          display: "flex",
          padding: "10px",
          alignItems: "center",
          justifyContent: "center"
        };
}

function fetchSearchInputBarStyle(param) {
  return {
          height: "30px",
          width: "100%"
        };
}

var LeftCSSModule = {
  fetchMainDivStyle: fetchMainDivStyle,
  fetchListItemStyle: fetchListItemStyle,
  fetchSpanStyle: fetchSpanStyle,
  fetchSearchDivStyle: fetchSearchDivStyle,
  fetchSearchInputBarStyle: fetchSearchInputBarStyle
};

exports.LeftModule = LeftModule;
exports.LeftCSSModule = LeftCSSModule;
/* No side effect */
