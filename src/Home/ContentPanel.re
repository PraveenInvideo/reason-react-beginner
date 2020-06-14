open ReasonReact;
open ReactDOMRe.Style;
open LeftModule;

let getContentPanelBasedOnType = contentType =>
  switch (contentType) {
  | INTRO => <IntroExample />
  | COMPONENTS => <Components />
  | JSX => <JSX />
  | EVENT => <Events />
  | STYLE => <Style />
  | ROUTER => <RouterExample />
  | _ => <div> {string("No component found lol")} </div>
  };

[@react.component]
let make = (~leftPanelItem: LeftModule.leftPanelModule) => {
  
  let rightPanelMainDivStyle =
    make(~backgroundColor="#444444", ~width="100%", ());

  <div style=rightPanelMainDivStyle>
      {getContentPanelBasedOnType(leftPanelItem.panelType)}
  </div>;
};