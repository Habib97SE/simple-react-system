import React from "react";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

export default function Card(props) {
  return (
    <>
      <Header text={props.headerText} />
      <Body text={props.bodyText} />
      <Footer text={props.footerText} />
    </>
  );
}
