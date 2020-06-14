open ReactDOMRe.Style;
open LeftModule;

[@react.component]
let make = (~leftPanelItem: LeftModule.leftPanelModule) => {
  let homeMainContainer =
    make(
      ~display="flex",
      ~flexDirection="column",
      ~height="100%",
      ~width="100%",
      (),
    );

  let contentContainer =
    ReactDOMRe.Style.make(~display="flex", ~height="100%", ());

  <div style=homeMainContainer>
    <Header title = {leftPanelItem.title} />
    <div style=contentContainer> <ContentPanel leftPanelItem /> </div>
    <Footer />
  </div>;
};
