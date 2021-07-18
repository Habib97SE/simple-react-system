import React from "react";

export default function Body(props) {
  return (
    <div className="card-body">
      <p>{props.text}</p>
    </div>
  );
}
