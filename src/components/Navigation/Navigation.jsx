import React from "react";
import SubMenu from "./SubMenu";

export default function Navigation(props) {
  const checkNavItem = (value, index) => {
    return value.hasSubMenu ? (
      <li className="btn btn-secondary subnav"><SubMenu item={value} /></li>
    ) : (
      createNavItem(value, index)
    );
  };
  const createNavItem = (item, index) => {
    return (
      <nav>
        <ul>
          <a href={item.link}>
            <li key={index} className={props.cssClass}>
              {item.text}
            </li>
          </a>
        </ul>
      </nav>
    );
  };
  return <>{props.items.map((value, index) => checkNavItem(value, index))}</>;
}
