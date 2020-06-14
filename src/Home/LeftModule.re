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
};