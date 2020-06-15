open ReasonReact;
open ReactDOMRe.Style;
open LeftModule;
open LeftCSSModule;

[@react.component]
let make = (~leftPanelListItemClick) => {
  let leftPanelItems: array(LeftModule.leftPanelModule) =
    LeftModule.fetchLeftPanelItems();

  let leftPanelItemClicked = (_, clickedItem: LeftModule.leftPanelModule) =>
    leftPanelListItemClick(clickedItem);

  <div style={LeftCSSModule.fetchMainDivStyle()}>
    <div style={LeftCSSModule.fetchSearchDivStyle()}>
      <input style={LeftCSSModule.fetchSearchInputBarStyle()} value="Search ..." />
    </div>
    <span style={LeftCSSModule.fetchSpanStyle()}>
      {string("Getting Started")}
    </span>
    {Belt.Array.map(leftPanelItems, item =>
       <div
         style={LeftCSSModule.fetchListItemStyle()}
         key={string_of_int(item.id)}
         onClick={__x => leftPanelItemClicked(__x, item)}>
         {string(item.title)}
       </div>
     )
     ->React.array}
  </div>;
};