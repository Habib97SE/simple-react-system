import React from "react";

export default function Button(props) {
  if (props.icon) {
    return (
      <button className={props.cssClass}>
        <i className={props.icon}></i> {props.text}
      </button>
    );
  } else {
    return <button className={props.cssClass}>{props.text}</button>;
  }
}
