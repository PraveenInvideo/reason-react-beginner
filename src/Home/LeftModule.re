open ReactDOMRe.Style;

type leftPanelOptionItem =
  | INTRO
  | COMPONENTS
  | JSX
  | EVENT
  | STYLE
  | ROUTER
  | WORKING_WITH_DOM
  | REFS_REACT
  | INVALID_PROP_NAME
  | PROPS_SPREAD
  | COMPONENTS_AS_PROPS
  | TERNARY_SHORTCUT
  | CONTEXT_AND_MIXINS
  | CUSTOM_CLASS_PROPERTY
  | EVENT_VAL_AS_SET_STATE
  | ERROR_BOUNDARIES;

module LeftModule = {
  type leftPanelModule = {
    id: int,
    title: string,
    panelType: leftPanelOptionItem,
  };

  let fetchLeftPanelItems = () => [|
    {id: 1, title: "Intro", panelType: INTRO},
    {id: 2, title: "Components", panelType: COMPONENTS},
    {id: 3, title: "JSX", panelType: JSX},
    {id: 4, title: "Event", panelType: EVENT},
    {id: 5, title: "Style", panelType: STYLE},
    {id: 6, title: "Router", panelType: ROUTER},
  |];
};

module LeftCSSModule = {
  let fetchMainDivStyle = () =>
    make(
      ~backgroundColor="white",
      ~width="30%",
      ~height="100%",
      ~borderRight="1px solid black",
      ~display="flex",
      ~flexDirection="column",
      (),
    );

  let fetchListItemStyle = () =>
    make(
      ~height="40px",
      ~display="flex",
      ~alignItems="center",
      ~backgroundColor="white",
      ~color="black",
      ~borderRadius="5px",
      ~margin="5px 10px",
      ~padding="0 20px",
      ~cursor="pointer",
      (),
    );

  let fetchSpanStyle = () =>
    make(
      ~color="#393939",
      ~fontSize="18px",
      ~fontWeight="800",
      ~marginTop="20px",
      ~marginLeft="10px",
      (),
    );

  let fetchSearchDivStyle = () =>
    make(
      ~display="flex",
      ~alignItems="center",
      ~justifyContent="center",
      ~padding="10px",
      ~borderBottom="1px solid gray",
      (),
    );

    let fetchSearchInputBarStyle = () => 
      make(
        ~width="100%",
        ~height="30px",
        ()
      );
};