import React from "react";

export default function TextField(props) {
  return (
    <>
      <div className="form-control">
        <label>{ props.label }</label>
      <input 
       value={props.value} type={props.type} placeholder={props.placeholder} />
      </div>
    </>
  );
}
