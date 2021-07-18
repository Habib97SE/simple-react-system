import React from "react";

export default function Header(props) {
  return (
    <div className="card-header">
      <p>{props.text}</p>
    </div>
  );
}
