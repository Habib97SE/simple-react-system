import React from "react";

export default function SubMenu(props) {
  return (
    <nav className="navbar">
      <ul>
        {
          <li className="btn btn-secondary subnav">
            {props.item.text} 
            <i className="fas fa-angle-down icon"></i>
            <ul className="subnav-content">
              {
              props.item.subMenuItems.map((subValue, subIndex) => (
                <a href={subValue.link}>
                  <li key={subIndex} className="btn btn-secondary">
                    {subValue.text}
                  </li>
                </a>
              ))
              }
            </ul>
          </li>
        }
      </ul>
    </nav>
  );
}

