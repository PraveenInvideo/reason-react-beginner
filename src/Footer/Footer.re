open ReasonReact;

[@react.component]
let make = () => {
  let footerStyle =
    ReactDOMRe.Style.make(
      ~width="100%",
      ~fontSize="24px",
      ~height="50px",
      ~backgroundColor="#2E86C1",
      ~color="white",
      ~display="flex",
      ~alignItems="center",
      (),
    );
  <div style=footerStyle> {string("Footer")} </div>;
};
