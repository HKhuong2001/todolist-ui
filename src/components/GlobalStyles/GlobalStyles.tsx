import React from "react";
import "./GlobalStyles.scss";
interface GloBalStyleProps {
  children: any;
}
function GlobalStyle({ children }: GloBalStyleProps) {
  return React.Children.only(children);
}

export default GlobalStyle;
