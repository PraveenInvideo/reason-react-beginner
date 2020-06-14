open ReasonReact;
open ReactDOMRe.Style;

[@react.component]
let make = (~title) => {
  let headerStyle =
    make(
      ~width="100%",
      ~fontSize="24px",
      ~height="50px",
      ~backgroundColor="#2E86C1",
      ~color="white",
      ~display="flex",
      ~alignItems="center",
      (),
    );

  <div style=headerStyle >{string(title)}</div>;
};
