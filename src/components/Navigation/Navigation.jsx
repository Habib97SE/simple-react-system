import React from "react";
import SubMenu from "./SubMenu";

export default function Navigation(props) {
  const checkNavItem = (value, index) => {
    return value.hasSubMenu ? <SubMenu item={value} /> : createNavItem(value, index)
  }
  const createNavItem = (item, index) => {
   return <a href={item.link}>
      <li key={index} className={props.cssClass}>
        {item.text}
      </li>
    </a>
  } 
  return (
    <>
    {
      props.items.map((value, index) => (
         checkNavItem(value, index)
      ))   
    } 
    </>
    )
}

/**
 * <nav className="navbar">
        <ul>
          {props.items.map((value, index) => (
            <a href={value.link}>
              <li key={index} className={props.cssClass}>
                {value.text}
              </li>
            </a>
          ))}
        </ul>
      </nav>
 */