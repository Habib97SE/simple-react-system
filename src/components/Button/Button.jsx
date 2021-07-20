import React from "react";

export default function Button(props) {
  if (props.icon) {
    if (props.before) {
      return 
      (
        <button className={props.cssClass}>
      {props.text}
      <i className={props.icon}></i> 
    </button>
      );
    } else {
      return (
        <button className={props.cssClass}>
      <i className={props.icon}></i> {props.text}
    </button>
        );
    }
  } else {
    return <button className={props.cssClass}>{props.text}</button>;
  }
}
