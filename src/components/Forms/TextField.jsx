import React from "react";

export default function TextField(props) {
  return (
    <>
      <input type={props.type} placeholder={props.placeholder} />
    </>
  );
}
