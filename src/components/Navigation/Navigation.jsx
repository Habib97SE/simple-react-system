import React from "react";

export default function Navigation(props) {
  return (
    <>
      <nav className="navbar">
        <ul>
          {props.items.map((value, index) => (
            <a href={value.link}>
              <li key={index} className={props.cssClass}>
                {value.text}{" "}
              </li>
            </a>
          ))}
        </ul>
      </nav>
    </>
  );
}
