import React from "react";

export default function TextField(props) {
  return (
    <>
      <div className="form-control">
        <label for={props.id}>{ props.label }</label>
      <input 
       value={props.value} id={props.id} type={props.type} placeholder={props.placeholder} />
      </div>
    </>
  );
}
