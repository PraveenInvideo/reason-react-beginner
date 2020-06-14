open ReasonReact;
open ReactDOMRe.Style;
open LeftModule;

[@react.component]
let make = (~leftPanelListItemClick) => {
  let leftPanelItems: array(LeftModule.leftPanelModule) = [|
    {id: 1, title: "Intro", panelType: INTRO},
    {id: 2, title: "Components", panelType: COMPONENTS},
    {id: 3, title: "JSX", panelType: JSX},
    {id: 4, title: "Event", panelType: EVENT},
    {id: 5, title: "Style", panelType: STYLE},
    {id: 6, title: "Router", panelType: ROUTER}
  |];

  let leftPanelMainDivStyle =
    make(
      ~backgroundColor="#303030",
      ~width="30%",
      ~height="100%",
      (),
    );

  let listItemStyle =
    make(
      ~height="40px",
      ~display="flex",
      ~alignItems="center",
      ~backgroundColor="white",
      ~color="black",
      ~borderRadius="5px",
      ~margin="5px 10px",
      ~padding="0 10px",
      ~cursor="pointer",
      (),
    );

  let leftPanelItemClicked = (_, clickedItem: LeftModule.leftPanelModule) => leftPanelListItemClick(clickedItem);

  <div style=leftPanelMainDivStyle>
    {Belt.Array.map(leftPanelItems, item =>
       <div
         style=listItemStyle
         key={string_of_int(item.id)}
         onClick={__x => leftPanelItemClicked(__x, item)}>
         {string(item.title)}
       </div>
     )
     ->React.array}
  </div>;
};
