import React from "react";
import SubMenu from "./SubMenu";

export default function Navigation(props) {
  const hasSubMenu = (item) => {
    if (item.hasSubMenu) {
      return <SubMenu items={item} />;
    } else {
      return false;
    }
  };
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
