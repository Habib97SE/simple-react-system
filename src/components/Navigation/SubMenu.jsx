import React from "react";

export default function SubMenu(props) {
  return (
    <nav className="navbar">
      <ul>
        {props.items.map((value, index) => (
          <li key={index} className="subnav">
            {" "}
            {value.text}
            <ul className="subnav-content">
              {value.subMenuItems.map((subValue, subIndex) => (
                <a href={subValue.link}>
                  <li key={subIndex} className="">
                    {subValue.text}
                  </li>
                </a>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
}
