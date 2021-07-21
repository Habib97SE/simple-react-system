import React from "react";

export default function Text(props) {
  if (props.textType === "p") {
    return <p className={props.cssClass}>{props.text}</p>;
  }
  if (props.textType === "h1") {
    return <h1 className={props.cssClass}>{props.text}</h1>;
  }
  if (props.textType === "h2") {
    return <h2 className={props.cssClass}>{props.text}</h2>;
  }
}
