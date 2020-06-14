open ReactDOMRe.Style;
open LeftModule;

[@react.component]
let make = () => {
  let baseContainer =
    make(~display="flex", ~flexDirection="row", ~height="100vh", ());

  let initialSelectedLeftPanelItem: LeftModule.leftPanelModule = {
    {id: 0, title: "Intro", panelType: INTRO};
  };

  let (leftPanelItem, handleTitleChange) =
    React.useState(() => initialSelectedLeftPanelItem);

  let onLeftPanelItemClicked = (item: LeftModule.leftPanelModule) =>
    handleTitleChange(_ => item);

  <div style=baseContainer>
    <LeftPanel leftPanelListItemClick=onLeftPanelItemClicked />
    <Home leftPanelItem />
  </div>;
};