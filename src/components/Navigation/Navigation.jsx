import React from "react";
import SubMenu from "./SubMenu";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

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
          
            <li key={index} className={props.cssClass}>
            <Link to={item.link}>{item.text}</Link>
            </li>
        </ul>
      </nav>
    );
  };
  return (<>
  <nav>
    <ul>
    {props.items.map((value, index) => checkNavItem(value, index))}
      </ul>  
  </nav>
  
  </>
  );
}
